import React, { useState } from 'react';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CTA from './components/CTA';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Workspace from './components/Workspace';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import PlatformDevices from './components/PlatformDevices';
import EnterpriseSecurity from './components/EnterpriseSecurity';
import TimeSavings from './components/TimeSavings';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'workspace':
        return <Workspace onNavigate={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'products':
        return <Products />;
      case 'home':
      default:
        return (
          <>
            {/* Hero Section */}
            <Hero />

            {/* Features Section */}
            <section className="features-section">
              <div className="features-header">
                <h2 className="features-title">
                  Built for modern clinical workflows
                </h2>
                <p className="features-description">
                  From real-time transcription to structured reporting, our platform integrates seamlessly with your existing
                  systems while maintaining the highest security standards.
                </p>
              </div>

              <div className="features-grid">
                <ProductCard
                  title="Real-time Transcription"
                  description="Clinical-grade speech recognition with sub-second latency and medical terminology accuracy."
                  bullets={[
                    "Sub-second latency for live conversations",
                    "Medical terminology and acronym recognition",
                    "Speaker identification and labeling",
                    "Word-level timestamps for precise editing",
                  ]}
                  icon={
                    <svg className="product-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 016 0v6a3 3 0 01-3 3z"
                      />
                    </svg>
                  }
                />

                <ProductCard
                  title="Radiology Templates"
                  description="Intelligent autofill for radiology reports with structured field population and smart defaults."
                  bullets={[
                    "Study-aware prompt generation",
                    "Template-specific field mapping",
                    "Smart default value suggestions",
                    "Inline editing and review workflow",
                  ]}
                  icon={
                    <svg className="product-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  }
                />

                <ProductCard
                  title="FHIR Integration"
                  description="Secure EHR connectivity with read-only defaults and comprehensive audit logging."
                  bullets={[
                    "Epic and Cerner compatibility",
                    "RAG over patient history context",
                    "Zero-trust security architecture",
                    "Immutable audit trails",
                  ]}
                  icon={
                    <svg className="product-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  }
                />
              </div>
            </section>

            {/* Available on all your devices Section */}
            <PlatformDevices />

            {/* Enterprise-grade security and Save time Sections */}
            <EnterpriseSecurity />

            {/* Dramatic Time Savings and Enhanced Diagnostic Accuracy Section */}
            <TimeSavings />

            {/* CTA Section */}
            <CTA
              title="Ready to transform your clinical workflow?"
              subtitle="Join leading healthcare organizations using RXSCAN to reduce documentation time and improve patient care."
              label="Request Demo"
            />

            {/* Privacy Section */}
            <section id="privacy-section" className="privacy-section">
              <div className="privacy-content">
                <h2>Privacy & Security</h2>
                <p>
                  We handle PHI using industry-standard encryption in transit and at rest. Data is processed under clinician control with least-privilege access. 
                  All communications are encrypted and HIPAA-compliant to ensure the highest level of patient data protection.
                </p>
                <div className="privacy-features">
                  <div className="privacy-feature">
                    <h3>End-to-End Encryption</h3>
                    <p>All data is encrypted using AES-256 encryption both in transit and at rest.</p>
                  </div>
                  <div className="privacy-feature">
                    <h3>HIPAA Compliance</h3>
                    <p>Full compliance with HIPAA regulations and healthcare data protection standards.</p>
                  </div>
                  <div className="privacy-feature">
                    <h3>Clinician Control</h3>
                    <p>Healthcare professionals maintain full control over patient data and access permissions.</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="App">
      {currentPage !== 'workspace' && <Nav onNavigate={setCurrentPage} currentPage={currentPage} />}
      <main className="main-content">
        {renderPage()}
      </main>
      {currentPage !== 'workspace' && <Footer onNavigate={setCurrentPage} />}
    </div>
  );
}

export default App;
