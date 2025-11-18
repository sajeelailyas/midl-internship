# Google Authentication React App with Vite

A complete Google Authentication system built with React.js and Vite, featuring a Node.js/Express backend.

## 🚀 Features

- **Google OAuth 2.0** authentication
- **Regular email/password** signup and login
- **JWT token** based authentication
- **Responsive design** with modern UI
- **Secure token storage** in localStorage
- **MongoDB** database integration
- **Protected routes** and middleware
- **Fast development** with Vite

## 📁 Project Structure

```
google-auth-react-app/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── SignIn.jsx
│   │   │   ├── SignUp.jsx
│   │   │   ├── GoogleAuth.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── .eslintrc.cjs
├── backend/
│   ├── server.js
│   ├── package.json
│   └── env.example
└── README.md
```

## 🛠️ Installation & Setup

### Frontend Setup (Vite + React)

1. **Navigate to frontend directory:**
```bash
cd frontend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create environment file:**
Create `.env` file in frontend directory:
```env
VITE_GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
```

4. **Start development server:**
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Backend Setup

1. **Navigate to backend directory:**
```bash
cd backend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create environment file:**
Copy `env.example` to `.env` and update values:
```bash
cp env.example .env
```

4. **Update .env file:**
```env
MONGODB_URI=mongodb://localhost:27017/google-auth
GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
JWT_SECRET=your-super-secret-jwt-key-here
PORT=5000
```

5. **Start backend server:**
```bash
npm run dev
```

## 🔧 Google OAuth Setup

1. **Go to Google Cloud Console:**
   - Visit [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one

2. **Enable Google+ API:**
   - Go to "APIs & Services" > "Library"
   - Search for "Google+ API" and enable it

3. **Create OAuth 2.0 Credentials:**
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth 2.0 Client IDs"
   - Choose "Web application"
   - Add authorized origins:
     - `http://localhost:3000` (for development)
     - Your production domain
   - Add authorized redirect URIs:
     - `http://localhost:3000` (for development)

4. **Copy Client ID:**
   - Copy the generated Client ID
   - Add it to your `.env` files

## 🗄️ Database Setup

### Option 1: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. Use `mongodb://localhost:27017/google-auth` in your `.env`

### Option 2: MongoDB Atlas (Cloud)
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get connection string
4. Update `MONGODB_URI` in `.env`

## 🚀 Running the Application

1. **Start Backend:**
```bash
cd backend
npm run dev
```

2. **Start Frontend:**
```bash
cd frontend
npm run dev
```

3. **Open browser:**
   - Visit `http://localhost:3000`
   - You'll be redirected to sign-in page

## 📱 Usage

### Sign Up
- Fill in the registration form
- Or click "Continue with Google" for Google signup
- User account will be created automatically

### Sign In
- Enter email and password
- Or click "Continue with Google" for Google signin
- You'll be redirected to dashboard

### Dashboard
- View user information
- Sign out when done

## 🔐 Security Features

- **JWT tokens** for authentication
- **Password hashing** with bcrypt
- **Google OAuth 2.0** verification
- **Protected routes** with middleware
- **Input validation** and sanitization
- **CORS** enabled for cross-origin requests

## 🎨 UI Features

- **Modern gradient design**
- **Responsive layout**
- **Loading states**
- **Error handling**
- **Form validation**
- **Smooth animations**

## 📦 Dependencies

### Frontend (Vite + React)
- `react` - UI library
- `react-dom` - React DOM rendering
- `react-router-dom` - Routing
- `axios` - HTTP client
- `vite` - Build tool and dev server
- `@vitejs/plugin-react` - Vite React plugin

### Backend
- `express` - Web framework
- `mongoose` - MongoDB ODM
- `bcryptjs` - Password hashing
- `jsonwebtoken` - JWT tokens
- `google-auth-library` - Google OAuth
- `cors` - Cross-origin requests
- `dotenv` - Environment variables

## 🔧 API Endpoints

- `POST /api/auth/google` - Google authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/verify` - Verify JWT token
- `GET /api/health` - Health check

## 🚀 Vite Benefits

- **Lightning fast** development server
- **Hot Module Replacement (HMR)** for instant updates
- **Optimized builds** with Rollup
- **Modern ES modules** support
- **TypeScript** support out of the box
- **Plugin ecosystem** for extensibility

## 🐛 Troubleshooting

### Common Issues:

1. **Google Sign-In not working:**
   - Check if `VITE_GOOGLE_CLIENT_ID` is set correctly
   - Verify Google Cloud Console settings
   - Check browser console for errors

2. **Backend connection failed:**
   - Ensure backend server is running on port 5000
   - Check MongoDB connection
   - Verify environment variables

3. **CORS errors:**
   - Backend has CORS enabled
   - Check if frontend is running on port 3000

4. **Vite build issues:**
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`
   - Check for syntax errors in components
   - Verify all imports are correct

## 📄 License

MIT License - feel free to use this project for your own applications!

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

---

**Happy Coding! 🚀**