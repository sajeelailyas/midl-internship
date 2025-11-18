import React from 'react';
import './Footer.css';

function Footer({ onNavigate }) {
  const handleNavigation = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  const handlePrivacyClick = () => {
    if (onNavigate) {
      onNavigate('home');
      // Scroll to privacy section at the end of home page
      setTimeout(() => {
        const privacySection = document.getElementById('privacy-section');
        if (privacySection) {
          privacySection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <div className="footer-logo-icon">N</div>
          </div>
          <div className="footer-text">
            <p className="footer-copyright">© 2025 RXSCAN. All rights reserved.</p>
            <p className="footer-privacy">
              We handle PHI using industry-standard encryption in transit and at rest. Data is processed under clinician control with least-privilege access.
            </p>
          </div>
        </div>
        
        <div className="footer-right">
          <button onClick={handlePrivacyClick} className="footer-nav-link">Privacy</button>
          <button onClick={() => handleNavigation('about')} className="footer-nav-link">About</button>
          <button onClick={() => handleNavigation('home')} className="footer-nav-link">Products</button>
          <button onClick={() => handleNavigation('contact')} className="footer-nav-link">Contact</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

