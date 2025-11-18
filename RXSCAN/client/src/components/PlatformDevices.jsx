import React from 'react';
import './PlatformDevices.css';

function PlatformDevices() {
  return (
    <div className="platform-section">
      <h2>Available on All Your Devices</h2>
      <p>Seamless transcription across web, mobile, and desktop platforms.</p>
      
      <div className="platform-cards">
        <div className="platform-card">
          <div className="platform-card-icon web-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <div className="platform-mockup">
            <div className="mockup-browser">
              <div className="mockup-header">
                <div className="mockup-dots">
                  <span></span><span></span><span></span>
                </div>
              </div>
              <div className="mockup-content">
                <div className="mockup-sidebar">
                  <div className="mockup-nav-item"></div>
                  <div className="mockup-nav-item"></div>
                  <div className="mockup-nav-item"></div>
                </div>
                <div className="mockup-main">
                  <div className="mockup-grid">
                    <div className="mockup-card"></div>
                    <div className="mockup-card"></div>
                    <div className="mockup-card"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3>Web Dashboard</h3>
          <p>Full-featured browser-based interface with advanced analytics and reporting.</p>
        </div>

        <div className="platform-card">
          <div className="platform-card-icon mobile-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
            </svg>
          </div>
          <div className="platform-mockup">
            <div className="mockup-phone">
              <div className="mockup-screen">
                <div className="mockup-search"></div>
                <div className="mockup-list">
                  <div className="mockup-item"></div>
                  <div className="mockup-item"></div>
                  <div className="mockup-item"></div>
                </div>
              </div>
            </div>
          </div>
          <h3>Mobile App</h3>
          <p>On-the-go transcription with offline capabilities and voice recording.</p>
        </div>

        <div className="platform-card">
          <div className="platform-card-icon desktop-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <div className="platform-mockup">
            <div className="mockup-desktop">
              <div className="mockup-window">
                <div className="mockup-waveform"></div>
                <div className="mockup-controls"></div>
              </div>
            </div>
          </div>
          <h3>Desktop Application</h3>
          <p>Native desktop performance with advanced keyboard shortcuts and integrations.</p>
        </div>
      </div>
    </div>
  );
}

export default PlatformDevices;

