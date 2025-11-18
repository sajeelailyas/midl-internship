import React from 'react';
import PlaceholderImage from './PlaceholderImage';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <div className="hero-badge-dot"></div>
            Live transcription technology
          </div>

          <h1 className="hero-title">
            Real-time medical dictation that
            <span className="hero-title-accent"> drafts your report</span> for you
          </h1>

          <p className="hero-description">
            RXSCAN captures conversations, transcribes with clinical accuracy, and autofills your radiology templates
            via FHIR—securely, under your signoff.
          </p>

          <div className="hero-buttons">
            <a
              href="#demo"
              className="hero-button-primary"
              aria-label="Start a session or request demo"
            >
              Start Session / Request Demo
            </a>
            <a
              href="#about"
              className="hero-button-secondary"
              aria-label="Learn how RXSCAN works"
            >
              How it works
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-dashboard">
            <div className="hero-dashboard-content">
              {/* Mock header */}
              <div className="hero-dashboard-header">
                <div className="hero-dashboard-logo">
                  <div className="hero-dashboard-logo-icon"></div>
                  <span>RXScan Dashboard</span>
                </div>
                <div className="hero-dashboard-status">
                  <div className="hero-dashboard-indicator"></div>
                  <span>Recording</span>
                </div>
              </div>

              {/* Mock content */}
              <div className="hero-dashboard-body">
                <div className="hero-dashboard-grid">
                  <div className="hero-dashboard-field">
                    <div className="hero-dashboard-label"></div>
                    <div className="hero-dashboard-input"></div>
                  </div>
                  <div className="hero-dashboard-field">
                    <div className="hero-dashboard-label"></div>
                    <div className="hero-dashboard-input"></div>
                  </div>
                </div>

                <div className="hero-dashboard-textarea">
                  <div className="hero-dashboard-label"></div>
                  <div className="hero-dashboard-lines">
                    <div className="hero-dashboard-line"></div>
                    <div className="hero-dashboard-line"></div>
                    <div className="hero-dashboard-line"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="hero-floating-icon">
            <svg className="hero-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 016 0v6a3 3 0 01-3 3z"
              />
            </svg>
          </div>

          {/* Additional placeholder images */}
          <div className="hero-placeholder-images">
            <PlaceholderImage 
              width={80} 
              height={80} 
              text="AI" 
              backgroundColor="#10b981"
              borderRadius="50%"
              className="hero-ai-badge"
            />
            <PlaceholderImage 
              width={100} 
              height={60} 
              text="Medical" 
              backgroundColor="#8b5cf6"
              className="hero-medical-badge"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

