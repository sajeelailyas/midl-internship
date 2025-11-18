import React, { useState } from 'react';
import './Products.css';

function Products() {
  const [selectedPlatform, setSelectedPlatform] = useState('web');

  return (
    <div className="products-page">
      {/* Hero Section */}
      <div className="products-hero">
        <div className="products-hero-content">
          <h1 className="products-title">AI-Powered Medical Documentation</h1>
          <p className="products-subtitle">
            Comprehensive solutions for every healthcare setting, from small practices to large hospital systems.
          </p>
          
          <div className="platform-selector">
            <button 
              className={`platform-button ${selectedPlatform === 'web' ? 'active' : ''}`}
              onClick={() => setSelectedPlatform('web')}
            >
              <svg className="platform-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Web Application
            </button>
            <button 
              className={`platform-button ${selectedPlatform === 'mobile' ? 'active' : ''}`}
              onClick={() => setSelectedPlatform('mobile')}
            >
              <svg className="platform-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Mobile App
            </button>
            <button 
              className={`platform-button ${selectedPlatform === 'desktop' ? 'active' : ''}`}
              onClick={() => setSelectedPlatform('desktop')}
            >
              <svg className="platform-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Desktop App
            </button>
          </div>
        </div>
      </div>

      {/* Platform Section */}
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

      {/* Product Solutions */}
      <div className="solutions-section">
        <h2>Our Solutions</h2>
        <p>Choose the right plan for your healthcare practice.</p>
        
        <div className="solutions-grid">
          <div className="solution-card clinical-card">
            <div className="solution-header">
              <div className="solution-icon clinical-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <div className="solution-title">
                <h3>Clinical Transcription</h3>
                <p>Perfect for primary care and specialty practices.</p>
              </div>
            </div>
            
            <div className="product-image">
              <img src="/src/assets/images/clinical-transcription-interface-with-medical-note.jpg" alt="Clinical Transcription Interface" />
            </div>
            
            <div className="solution-description">
              <p>Real-time transcription for patient encounters, with specialized medical vocabulary and context-aware formatting for clinical notes.</p>
            </div>
            
            <div className="solution-metrics">
              <div className="metric-box">
                <div className="metric-value">99.2%</div>
                <div className="metric-label">Accuracy Rate</div>
              </div>
              <div className="metric-box">
                <div className="metric-value">&lt;2s</div>
                <div className="metric-label">Response Time</div>
              </div>
            </div>
            
            <div className="solution-features">
              <ul>
                <li>Real-time speech-to-text conversion</li>
                <li>Medical terminology recognition (50,000+ terms)</li>
                <li>SOAP note formatting & templates</li>
                <li>EHR integration (Epic, Cerner, AllScripts)</li>
                <li>HIPAA compliant with end-to-end encryption</li>
              </ul>
            </div>
            
            <div className="solution-pricing">
              <div className="pricing-info">
                <div className="price">$99/month</div>
                <div className="price-detail">Up to 500 transcriptions</div>
              </div>
              <button className="learn-more-btn clinical-btn">Learn More</button>
            </div>
          </div>

          <div className="solution-card radiology-card">
            <div className="solution-header">
              <div className="solution-icon radiology-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="solution-title">
                <h3>Radiology Reporting</h3>
                <p>Specialized for imaging centers and radiologists.</p>
              </div>
            </div>
            
            <div className="product-image">
              <img src="/src/assets/images/radiology-reporting-interface-with-medical-imaging.jpg" alt="Radiology Reporting Interface" />
            </div>
            
            <div className="solution-description">
              <p>Specialized transcription for radiology reports with anatomical terminology, measurement recognition, and structured reporting templates.</p>
            </div>
            
            <div className="solution-metrics">
              <div className="metric-box">
                <div className="metric-value">98.7%</div>
                <div className="metric-label">Anatomy Recognition</div>
              </div>
              <div className="metric-box">
                <div className="metric-value">15,000+</div>
                <div className="metric-label">Medical Terms</div>
              </div>
            </div>
            
            <div className="solution-features">
              <ul>
                <li>Anatomical structure recognition</li>
                <li>Measurement and dimension capture</li>
                <li>Structured report templates (CT, MRI, X-Ray)</li>
                <li>PACS integration & DICOM support</li>
                <li>Voice commands for navigation</li>
              </ul>
            </div>
            
            <div className="solution-pricing">
              <div className="pricing-info">
                <div className="price">$149/month</div>
                <div className="price-detail">Up to 300 reports</div>
              </div>
              <button className="learn-more-btn radiology-btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      {/* Enterprise Section */}
      <div className="enterprise-section">
        <div className="enterprise-header">
          <div className="enterprise-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 21h18"/>
              <path d="M5 21V7l8-4v18"/>
              <path d="M19 21V11l-6-4"/>
            </svg>
          </div>
          <div className="enterprise-title">
            <h2>Enterprise Suite</h2>
            <p>For healthcare organizations and hospital systems.</p>
          </div>
        </div>
        
        <div className="enterprise-dashboard">
          <div className="enterprise-image">
            <img src="/src/assets/images/enterprise-medical-transcription-dashboard-with-an.jpg" alt="Enterprise Dashboard Interface" />
          </div>
        </div>
        
        <div className="enterprise-features">
          <div className="feature-column">
            <h4>Core Features</h4>
            <ul>
              <li>Multi-specialty support (20+ specialties)</li>
              <li>Custom EHR integrations</li>
              <li>Advanced analytics dashboard</li>
              <li>24/7 dedicated support</li>
              <li>Unlimited transcriptions</li>
            </ul>
          </div>
          
          <div className="feature-column">
            <h4>Security & Compliance</h4>
            <ul>
              <li>SOC 2 Type II certified</li>
              <li>HIPAA compliant infrastructure</li>
              <li>Single Sign-On (SSO) integration</li>
              <li>Advanced audit logging</li>
              <li>Data residency options</li>
            </ul>
          </div>
          
          <div className="feature-column">
            <h4>Advanced Capabilities</h4>
            <ul>
              <li>Custom vocabulary training</li>
              <li>API access for workflow</li>
              <li>White-label options</li>
              <li>Multi-language support</li>
              <li>Advanced reporting tools</li>
            </ul>
          </div>
        </div>
        
        <div className="enterprise-metrics">
          <div className="metric-card">
            <div className="metric-value">99.8%</div>
            <div className="metric-label">Uptime SLA</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">&lt;1s</div>
            <div className="metric-label">API Response</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">24/7</div>
            <div className="metric-label">Support</div>
          </div>
        </div>
        
        <div className="enterprise-pricing">
          <div className="pricing-info">
            <h3>Custom Pricing</h3>
            <p>Starting at $500/month for 10 users.</p>
          </div>
          <button className="contact-sales-btn">Contact Sales</button>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="comparison-section">
        <h2>Compare Our Solutions</h2>
        <p>Choose the right plan for your healthcare practice.</p>
        
        <div className="comparison-table">
          <div className="table-header">
            <div className="table-cell">Features</div>
            <div className="table-cell">Clinical</div>
            <div className="table-cell">Radiology</div>
            <div className="table-cell">Enterprise</div>
          </div>
          
          <div className="table-row">
            <div className="table-cell">Real-time transcription</div>
            <div className="table-cell">✓</div>
            <div className="table-cell">✓</div>
            <div className="table-cell">✓</div>
          </div>
          
          <div className="table-row">
            <div className="table-cell">Medical terminology</div>
            <div className="table-cell">50,000+ terms</div>
            <div className="table-cell">15,000+ terms</div>
            <div className="table-cell">Unlimited</div>
          </div>
          
          <div className="table-row">
            <div className="table-cell">EHR Integration</div>
            <div className="table-cell">Basic</div>
            <div className="table-cell">PACS + Basic</div>
            <div className="table-cell">Custom</div>
          </div>
          
          <div className="table-row">
            <div className="table-cell">Analytics Dashboard</div>
            <div className="table-cell">Basic</div>
            <div className="table-cell">Basic</div>
            <div className="table-cell">Advanced</div>
          </div>
          
          <div className="table-row">
            <div className="table-cell">Support</div>
            <div className="table-cell">Business hours</div>
            <div className="table-cell">Business hours</div>
            <div className="table-cell">24/7 dedicated</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="products-cta">
        <h2>Ready to Transform Your Documentation?</h2>
        <p>Join thousands of healthcare professionals who have already improved their workflow with RXSCAN.</p>
        <div className="cta-buttons">
          <button className="cta-button-primary">Request Demo</button>
          <button className="cta-button-secondary">Contact Sales</button>
        </div>
      </div>
    </div>
  );
}

export default Products;
