import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("authToken", data.token);
        onLogin(data.user);
      } else {
        setErrors({ general: data.error || "Signup failed" });
      }
    } catch (error) {
      setErrors({ general: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

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
          <h1>Create Account</h1>
          <p>Sign up to get started</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", gap: "10px" }}>
            <div className="form-group" style={{ flex: 1 }}>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                className={errors.firstName ? "error" : ""}
              />
              {errors.firstName && (
                <div className="error">{errors.firstName}</div>
              )}
            </div>

            <div className="form-group" style={{ flex: 1 }}>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className={errors.lastName ? "error" : ""}
              />
              {errors.lastName && (
                <div className="error">{errors.lastName}</div>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={errors.email ? "error" : ""}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              className={errors.password ? "error" : ""}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className={errors.confirmPassword ? "error" : ""}
            />
            {errors.confirmPassword && (
              <div className="error">{errors.confirmPassword}</div>
            )}
          </div>

          {errors.general && <div className="error">{errors.general}</div>}

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? <span className="loading"></span> : "Sign Up"}
          </button>
        </form>

        <div className="link">
          <p>
            Already have an account? <Link to="/signin">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
