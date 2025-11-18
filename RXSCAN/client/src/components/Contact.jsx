import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    message: ''
  });

  const [consent, setConsent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!consent) {
      alert('Please consent to data processing to continue.');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
  };

  return (
    <div className="contact-page">
      <div className="contact-content">
        <div className="contact-grid">
          {/* Left Column - Contact Information */}
          <div className="contact-info">
            <h1 className="contact-main-title">Let's Start a Conversation</h1>
            <p className="contact-intro">
              Whether you're interested in a demo, have questions about our products, or need technical support, we're here to help. Fill out the form and we'll get back to you within 24 hours.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-detail-icon email-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="contact-detail-content">
                  <h3>Email Support</h3>
                  <p className="contact-detail-main">support@rxscan.com</p>
                  <p className="contact-detail-sub">We typically respond within 2-4 hours.</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon phone-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="contact-detail-content">
                  <h3>Phone Support</h3>
                  <p className="contact-detail-main">1-800-MEDSCRIBE</p>
                  <p className="contact-detail-sub">Monday - Friday, 8 AM - 6 PM EST.</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon location-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="contact-detail-content">
                  <h3>Office Location</h3>
                  <p className="contact-detail-main">123 Healthcare Drive, Medical District, CA 90210</p>
                  <p className="contact-detail-sub">By appointment only.</p>
                </div>
              </div>
            </div>

            <div className="secure-communication">
              <div className="secure-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <div className="secure-content">
                <h4>Secure Communication</h4>
                <p>All communications are encrypted and HIPAA-compliant. Please do not include PHI in this form.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="contact-form-container">
            <div className="contact-form-card">
              <h2>Send us a message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Name"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Organization"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="Role"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Message"
                  ></textarea>
                </div>

                <div className="consent-checkbox">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                  />
                  <label htmlFor="consent">
                    I consent to the processing of my data for contact and demo purposes. I understand PHI will be handled per our security policy.
                  </label>
                </div>

                <button type="submit" className="submit-button">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
