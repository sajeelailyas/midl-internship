// src/components/Dashboard.jsx
import React, { useEffect } from "react";
import { config } from "../config/env";

const Dashboard = ({ onLogout }) => {
  useEffect(() => {
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

        // Clean URL (remove parameters)
        window.history.replaceState({}, document.title, "/dashboard");
        return;
      } catch (error) {
        console.error("Error parsing OAuth data:", error);
      }
    }

    // If no user data, redirect to signin
    const savedUser = localStorage.getItem("user");
    const savedToken = localStorage.getItem("authToken");

    if (!savedUser || !savedToken) {
      if (onLogout) {
        onLogout();
      }
      window.location.href = "/signin";
    }
  }, [onLogout]);

  return (
    <div className="container">
      {/* Brain X-ray image */}
      <div 
        className="xray-silhouette"
        style={{ 
          backgroundImage: 'url(/images/brain-xray.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Background particles */}
      <div className="particle-background">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
      
      {/* X-ray scan beam */}
      <div className="xray-beam"></div>
      
      {/* Neuron connections */}
      <div className="neuron-connection"></div>
      <div className="neuron-connection"></div>
      <div className="neuron-connection"></div>
      
      <div className="auth-container">
        <div className="logo">
          <h1>Dashboard</h1>
          <p>You are logged in successfully.</p>
        </div>

        <div className="dashboard-actions">
          <button
            onClick={() => {
              window.location.href = config.RXSCAN_URL;
            }}
            className="btn btn-primary"
          >
            Go to RXScan
          </button>
          <button
            onClick={() => {
              if (onLogout) {
                onLogout();
              }
              window.location.href = "/signin";
            }}
            className="btn btn-logout"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
