import React from 'react';
import './Nav.css';

function Nav({ onNavigate, currentPage }) {
  const handleNavigation = (page) => {
    onNavigate(page);
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => handleNavigation('home')}>
          <div className="nav-logo-icon"></div>
          <span className="nav-logo-text">RXScan</span>
        </div>
        
        <div className="nav-menu">
          <button 
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => handleNavigation('home')}
          >
            Home
          </button>
          <button 
            className={`nav-link ${currentPage === 'workspace' ? 'active' : ''}`}
            onClick={() => handleNavigation('workspace')}
          >
            Workspace
          </button>
          <button 
            className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
            onClick={() => handleNavigation('about')}
          >
            About
          </button>
          <button 
            className={`nav-link ${currentPage === 'products' ? 'active' : ''}`}
            onClick={() => handleNavigation('products')}
          >
            Products
          </button>
          <button 
            className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => handleNavigation('contact')}
          >
            Contact
          </button>
          <button 
            className="nav-link nav-link-button"
            onClick={() => handleNavigation('workspace')}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
