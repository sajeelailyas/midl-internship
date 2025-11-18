const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const path = require("path");
require("dotenv").config({ path: __dirname + "/.env" });
console.log("✅ Loaded .env from:", __dirname + "/.env");
console.log("MONGODB_URI:", process.env.MONGODB_URI);
const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

// CORS Configuration - Fixed
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5173",
      "http://127.0.0.1:3000",
      "http://127.0.0.1:5173",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "Authorization",
    ],
  })
);

app.use(express.json());

// MongoDB connection (optional for testing)
if (!process.env.MONGODB_URI) {
  console.log("⚠️  MongoDB not configured - using in-memory storage for testing");
} else {
  console.log("✅ MongoDB URI loaded");

  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => {
      console.error("⚠️  MongoDB connection failed - using in-memory storage");
      console.error("💡 Tip: Add your IP to MongoDB Atlas whitelist: https://www.mongodb.com/docs/atlas/security-whitelist/");
      console.error("   Error details:", err.message);
    });
}

// In-memory storage for testing (when MongoDB not available)
let users = [];
let userIdCounter = 1;

// User Schema (for MongoDB)
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  name: String,
  email: { type: String, required: true, unique: true },
  password: String,
  googleId: String,
  photo: String,
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

// Helper functions for in-memory storage
const findUserByEmail = (email) => {
  return users.find((user) => user.email === email);
};

const createUser = (userData) => {
  const user = {
    _id: userIdCounter++,
    ...userData,
    createdAt: new Date(),
  };
  users.push(user);
  return user;
};

const updateUser = (id, userData) => {
  const userIndex = users.findIndex((user) => user._id === id);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...userData };
    return users[userIndex];
  }
  return null;
};

// Google OAuth2 Client
const googleClient = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  `${process.env.API_URL || "http://localhost:5000"}/oauth-callback`
);

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

// Helper function to create JWT token
const createToken = (user) => {
  return jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "7d" });
};

// Middleware to verify JWT token
const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Access token required" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({ error: "Invalid token" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({ error: "Invalid or expired token" });
  }
};

// Routes

// Health check
app.get("/api/health", (req, res) => {
  res.json({ message: "Server is running!" });
});

// OAuth callback handler for redirect-based Google auth
app.get("/oauth-callback", async (req, res) => {
  const { code, error, state } = req.query;

  if (error) {
    return res.send(`
      <html>
        <body>
          <script>
            localStorage.setItem('googleAuthError', '${error}');
            window.location.href = 'http://localhost:3000';
          </script>
        </body>
      </html>
    `);
  }

  if (code && state === "google_auth") {
    try {
      // Exchange code for tokens
      const { tokens } = await googleClient.getToken({
        code: code,
        redirect_uri: `${
          process.env.API_URL || "http://localhost:5000"
        }/oauth-callback`,
      });

      googleClient.setCredentials(tokens);

      // Get user info from ID token
      const ticket = await googleClient.verifyIdToken({
        idToken: tokens.id_token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();
      const googleId = payload.sub;
      const email = payload.email;
      const name = payload.name;
      const photo = payload.picture;

      let user;

      if (process.env.MONGODB_URI) {
        // Use MongoDB
        user = await User.findOne({ email });

        if (!user) {
          user = new User({
            email,
            googleId,
            name,
            photo,
          });
          await user.save();
        } else {
          if (!user.googleId) {
            user.googleId = googleId;
            user.photo = user.photo || photo;
            await user.save();
          }
        }
      } else {
        // Use in-memory storage
        user = findUserByEmail(email);

        if (!user) {
          user = createUser({
            email,
            googleId,
            name,
            photo,
          });
        } else {
          if (!user.googleId) {
            user = updateUser(user._id, {
              googleId,
              photo: user.photo || photo,
            });
          }
        }
      }

      // Create JWT token
      const jwtToken = createToken(user);

      // Redirect to frontend with user data
      const userData = {
        id: user._id,
        email: user.email,
        name: user.name || "",
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        photo: user.photo || "",
      };

      const redirectUrl =
        `http://localhost:3000/dashboard?` +
        `token=${jwtToken}&` +
        `user=${encodeURIComponent(JSON.stringify(userData))}`;

      res.redirect(redirectUrl);
    } catch (error) {
      console.error("Google callback error:", error);
      res.send(`
        <html>
          <body>
            <script>
              localStorage.setItem('googleAuthError', 'Authentication failed: ${error.message}');
              window.location.href = 'http://localhost:3000';
            </script>
          </body>
        </html>
      `);
    }
  } else {
    res.redirect("http://localhost:3000");
  }
});

// Google Authentication
app.post("/api/auth/google", async (req, res) => {
  try {
    const { idToken } = req.body;

    if (!idToken) {
      return res.status(400).json({ error: "Missing idToken" });
    }

    // Verify the Google ID token
    const ticket = await googleClient.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const googleId = payload.sub;
    const email = payload.email;
    const name = payload.name;
    const photo = payload.picture;

    let user;

    if (process.env.MONGODB_URI) {
      // Use MongoDB
      user = await User.findOne({ email });

      if (!user) {
        user = new User({
          email,
          googleId,
          name,
          photo,
        });
        await user.save();
      } else {
        if (!user.googleId) {
          user.googleId = googleId;
          user.photo = user.photo || photo;
          await user.save();
        }
      }
    } else {
      // Use in-memory storage
      user = findUserByEmail(email);

      if (!user) {
        user = createUser({
          email,
          googleId,
          name,
          photo,
        });
      } else {
        if (!user.googleId) {
          user = updateUser(user._id, {
            googleId,
            photo: user.photo || photo,
          });
        }
      }
    }

    // Generate JWT token
    const token = createToken(user);

    // Return token and user data
    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        firstName: user.firstName,
        lastName: user.lastName,
        photo: user.photo,
      },
    });
  } catch (error) {
    console.error("Google auth error:", error);
    res.status(400).json({ error: "Invalid Google token" });
  }
});

// Removed complex OAuth callback - using direct ID token verification instead

// Regular Signup
app.post("/api/auth/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    // Validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be at least 6 characters long" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User already exists with this email" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = new User({
      firstName,
      lastName,
      name: `${firstName} ${lastName}`,
      email,
      password: hashedPassword,
    });

    await user.save();

    // Generate JWT token
    const token = createToken(user);

    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        firstName: user.firstName,
        lastName: user.lastName,
        photo: user.photo,
      },
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ error: "Internal server error during signup" });
  }
});

// Regular Login
app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user || !user.password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const token = createToken(user);

    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        firstName: user.firstName,
        lastName: user.lastName,
        photo: user.photo,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error during login" });
  }
});

// Verify token
app.get("/api/auth/verify", authenticateToken, (req, res) => {
  res.json({
    user: {
      id: req.user._id,
      email: req.user.email,
      name: req.user.name,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      photo: req.user.photo,
    },
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
