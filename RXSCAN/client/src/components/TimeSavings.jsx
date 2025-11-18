import React from 'react';
import './TimeSavings.css';

function TimeSavings() {
  return (
    <section className="time-savings-section">
      <div className="time-savings-container">
        <div className="time-savings-grid">
          {/* Dramatic Time Savings Card */}
          <div className="savings-card time-savings-card">
            <div className="savings-icon time-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <h3 className="savings-card-title">Dramatic Time Savings</h3>
            <p className="savings-card-subtitle">For doctors and radiologists</p>
            
            <div className="savings-metrics">
              <div className="metric-box">
                <div className="metric-value">75%</div>
                <div className="metric-label">Less documentation time</div>
              </div>
              <div className="metric-box">
                <div className="metric-value">2.5hrs</div>
                <div className="metric-label">Saved per day</div>
              </div>
            </div>

            <ul className="savings-features">
              <li>Eliminate manual typing and dictation delays</li>
              <li>Reduce report turnaround time from hours to minutes</li>
              <li>Spend more time with patients, less on paperwork</li>
              <li>Increase daily patient capacity without overtime</li>
            </ul>
          </div>

          {/* Enhanced Diagnostic Accuracy Card */}
          <div className="savings-card accuracy-card">
            <div className="savings-icon accuracy-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <h3 className="savings-card-title">Enhanced Diagnostic Accuracy</h3>
            <p className="savings-card-subtitle">AI-powered clinical insights</p>
            
            <div className="savings-metrics">
              <div className="metric-box">
                <div className="metric-value">99.2%</div>
                <div className="metric-label">Transcription accuracy</div>
              </div>
              <div className="metric-box">
                <div className="metric-value">40%</div>
                <div className="metric-label">Fewer missed findings</div>
              </div>
            </div>

            <ul className="savings-features">
              <li>AI suggests relevant differential diagnoses</li>
              <li>Automated cross-referencing with patient history</li>
              <li>Consistent terminology and standardized reporting</li>
              <li>Real-time alerts for critical findings</li>
            </ul>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="testimonial-section">
          <div className="testimonial-card">
            <div className="testimonial-quote">
              "RXSCAN has transformed our radiology department. We're processing 40% more cases with the same staff, and our report quality has never been better. The AI catches details I might have missed during busy shifts."
            </div>
            <div className="testimonial-author">
              <div className="testimonial-avatar">DR</div>
              <div className="testimonial-info">
                <div className="testimonial-name">Dr. Sarah Chen</div>
                <div className="testimonial-role">Chief Radiologist, Metro General Hospital</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TimeSavings;

