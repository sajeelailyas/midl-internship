import React from 'react';
import './Devices.css';

function Devices() {
  return (
    <section className="devices-section">
      <div className="devices-content">
        <h2 className="devices-title">Available on all your devices</h2>
        <p className="devices-subtitle">
          Access RXSCAN anywhere with our native mobile app and web platform. Seamlessly sync your work across all devices.
        </p>

        <div className="devices-grid">
          {/* Mobile App Section */}
          <div className="device-card device-card-mobile">
            <div className="device-card-header">
              <div className="device-icon device-icon-mobile">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              </div>
              <div>
                <h3 className="device-card-title">Mobile App</h3>
                <p className="device-card-subtitle">iOS & Android</p>
              </div>
            </div>

            <div className="device-visual device-visual-mobile">
              <div className="device-phone">
                <div className="device-phone-screen">
                  <div className="device-phone-button">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1="12" y1="19" x2="12" y2="23" />
                      <line x1="8" y1="23" x2="16" y2="23" />
                    </svg>
                  </div>
                  <div className="device-phone-lines">
                    <div className="device-phone-line"></div>
                    <div className="device-phone-line"></div>
                  </div>
                </div>
              </div>
            </div>

            <ul className="device-features">
              <li className="device-feature">Voice recording on-the-go</li>
              <li className="device-feature">Offline transcription sync</li>
              <li className="device-feature">Push notifications</li>
            </ul>
          </div>

          {/* Web Platform Section */}
          <div className="device-card device-card-web">
            <div className="device-card-header">
              <div className="device-icon device-icon-web">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <div>
                <h3 className="device-card-title">Web Platform</h3>
                <p className="device-card-subtitle">Browser-based</p>
              </div>
            </div>

            <div className="device-visual device-visual-web">
              <div className="device-browser">
                <div className="device-browser-header">
                  <div className="device-browser-dots">
                    <span className="device-browser-dot device-browser-dot-red"></span>
                    <span className="device-browser-dot device-browser-dot-yellow"></span>
                    <span className="device-browser-dot device-browser-dot-green"></span>
                  </div>
                </div>
                <div className="device-browser-content">
                  <div className="device-browser-sidebar"></div>
                  <div className="device-browser-main">
                    <div className="device-browser-title"></div>
                    <div className="device-browser-cards">
                      <div className="device-browser-card"></div>
                      <div className="device-browser-card"></div>
                      <div className="device-browser-card"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ul className="device-features">
              <li className="device-feature">Full dashboard access</li>
              <li className="device-feature">Advanced reporting tools</li>
              <li className="device-feature">Team collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Devices;

