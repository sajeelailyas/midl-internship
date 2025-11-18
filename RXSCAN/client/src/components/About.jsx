import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-title">Transforming Healthcare Documentation</h1>
          <p className="about-subtitle">
            At RXSCAN, we're dedicated to reducing administrative burden on healthcare professionals through cutting-edge AI transcription technology.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="about-content">
        {/* Mission Section */}
        <div className="mission-section">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              Healthcare professionals spend countless hours on documentation, taking time away from patient care. 
              We believe technology should enhance, not hinder, the doctor-patient relationship.
            </p>
          </div>
          <div className="mission-stats">
            <div className="stat-card">
              <div className="stat-icon stat-icon-blue">99%</div>
              <div className="stat-content">
                <h3>Accuracy Rate</h3>
                <p>Medical terminology recognition</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon stat-icon-orange">50%</div>
              <div className="stat-content">
                <h3>Time Saved</h3>
                <p>On documentation tasks</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="values-section">
          <div className="values-header">
            <h2>Our Values</h2>
            <p>Everything we do is guided by our commitment to healthcare excellence and patient privacy.</p>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon security-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <h3>Security First</h3>
              <p>HIPAA-compliant infrastructure with end-to-end encryption to protect patient data.</p>
            </div>

            <div className="value-card">
              <div className="value-icon innovation-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3>Innovation</h3>
              <p>Continuously advancing AI technology to improve accuracy and user experience.</p>
            </div>

            <div className="value-card">
              <div className="value-icon care-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h3>Patient Care</h3>
              <p>Everything we build is designed to improve patient outcomes and care quality.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
