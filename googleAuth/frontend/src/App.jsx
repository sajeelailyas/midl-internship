import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = async () => {
      try {
        // Check for OAuth callback data in URL parameters first
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get("token");
        const userParam = urlParams.get("user");

        if (token && userParam) {
          try {
            const userData = JSON.parse(decodeURIComponent(userParam));

            // Store in localStorage
            localStorage.setItem("authToken", token);
            localStorage.setItem("user", JSON.stringify(userData));

            setUser(userData);

            // Clean URL (remove parameters)
            window.history.replaceState(
              {},
              document.title,
              window.location.pathname
            );
            setLoading(false);
            return;
          } catch (error) {
            console.error("Error parsing OAuth data:", error);
          }
        }

        // Check for user data in localStorage (fallback)
        const savedUser = localStorage.getItem("user");
        const savedToken = localStorage.getItem("authToken");

        if (savedUser && savedToken) {
          const userData = JSON.parse(savedUser);
          setUser(userData);
        }

        // Check for Google auth error from redirect
        const googleAuthError = localStorage.getItem("googleAuthError");
        if (googleAuthError) {
          console.error("Google auth error found:", googleAuthError);
          setError("Google authentication failed: " + googleAuthError);
          localStorage.removeItem("googleAuthError");
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        setError("Authentication check failed. Please try again.");
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    setError("");
  };

  const handleLogout = () => {
    setUser(null);
    setError("");
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
  };

  if (loading) {
    return (
      <div className="container">
        <div className="loading"></div>
      </div>
    );
  }

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="App">
        {error && (
          <div className="error-banner">
            <div className="error">{error}</div>
            <button
              className="error-close"
              onClick={() => setError("")}
              aria-label="Close error"
            >
              ×
            </button>
          </div>
        )}
        <Routes>
          <Route
            path="/signin"
            element={
              user ? (
                <Navigate to="/dashboard" />
              ) : (
                <SignIn onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/signup"
            element={
              user ? (
                <Navigate to="/dashboard" />
              ) : (
                <SignUp onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/dashboard"
            element={<Dashboard onLogout={handleLogout} />}
          />
          <Route path="/" element={<Navigate to="/signin" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
