import React from 'react';
import './HowItWorks.css';

function HowItWorks() {
  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="how-it-works-container">
        <div className="how-it-works-header">
          <h2 className="how-it-works-title">How It Works</h2>
          <p className="how-it-works-subtitle">
            RXSCAN simplifies medical documentation through intelligent automation and seamless integration.
          </p>
        </div>

        <div className="how-it-works-steps">
          <div className="how-it-works-step">
            <div className="step-number">1</div>
            <h3 className="step-title">Record or Upload</h3>
            <p className="step-description">
              Start recording directly in the app or upload audio files. Our platform supports multiple formats and real-time streaming.
            </p>
          </div>

          <div className="how-it-works-step">
            <div className="step-number">2</div>
            <h3 className="step-title">AI Transcription</h3>
            <p className="step-description">
              Advanced AI processes your audio with medical-grade accuracy, recognizing terminology, context, and speaker identification.
            </p>
          </div>

          <div className="how-it-works-step">
            <div className="step-number">3</div>
            <h3 className="step-title">Auto-Fill Templates</h3>
            <p className="step-description">
              Transcribed content automatically populates your radiology templates, structured and ready for review.
            </p>
          </div>

          <div className="how-it-works-step">
            <div className="step-number">4</div>
            <h3 className="step-title">Review & Sign Off</h3>
            <p className="step-description">
              Review the generated report, make any necessary edits, and sign off. Reports sync directly to your EHR system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

