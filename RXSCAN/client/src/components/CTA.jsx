import React from 'react';
import './CTA.css';

function CTA({ title, subtitle, label }) {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">{title}</h2>
        <p className="cta-subtitle">{subtitle}</p>
        <div className="cta-buttons">
          <a href="#demo" className="cta-button-primary">
            {label}
          </a>
          <a href="#contact" className="cta-button-secondary">
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;



