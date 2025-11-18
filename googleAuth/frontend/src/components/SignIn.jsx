import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const SignIn = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('authToken', data.token);
        onLogin(data.user);
      } else {
        setErrors({ general: data.error || 'Login failed' });
      }
    } catch (error) {
      setErrors({ general: 'Network error. Please try again.' });
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
          <h1>Welcome Back</h1>
          <p>Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={errors.email ? 'error' : ''}
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
              placeholder="Enter your password"
              className={errors.password ? 'error' : ''}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>

          {errors.general && <div className="error">{errors.general}</div>}

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? <span className="loading"></span> : 'Sign In'}
          </button>
        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <GoogleAuth onLogin={onLogin} />

        <div className="link">
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
