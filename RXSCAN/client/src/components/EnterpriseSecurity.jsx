import React from 'react';
import './EnterpriseSecurity.css';

function EnterpriseSecurity() {
  return (
    <>
      {/* Enterprise-grade security section */}
      <section className="enterprise-security-section">
        <div className="enterprise-security-container">
          <div className="enterprise-security-content">
            <div className="enterprise-security-text">
              <h2 className="enterprise-security-title">Enterprise-grade security for PHI</h2>
              <p className="enterprise-security-intro">
                Built from the ground up with healthcare data protection in mind. Every feature is designed with clinician control and patient privacy as core principles.
              </p>
              <ul className="enterprise-security-features">
                <li>
                  <span className="feature-icon">•</span>
                  End-to-end encryption in transit and at rest
                </li>
                <li>
                  <span className="feature-icon">•</span>
                  HIPAA-compliant infrastructure with BAAs available
                </li>
                <li>
                  <span className="feature-icon">•</span>
                  Configurable data residency and retention policies
                </li>
                <li>
                  <span className="feature-icon">•</span>
                  Least-privilege access controls and audit logging
                </li>
              </ul>
            </div>
            <div className="enterprise-security-cta">
              <div className="security-whitepaper-box">
                <div className="security-whitepaper-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <p className="security-whitepaper-text">Security Whitepaper Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Save time section */}
      <section className="save-time-section">
        <div className="save-time-container">
          <h2 className="save-time-title">Save time, improve accuracy, enhance patient care</h2>
          <p className="save-time-description">
            RXSCAN reduces documentation burden while improving diagnostic accuracy, allowing healthcare professionals to focus on what matters most - patient care.
          </p>
        </div>
      </section>
    </>
  );
}

export default EnterpriseSecurity;

