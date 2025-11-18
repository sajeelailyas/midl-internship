import React, { useState } from 'react';
import './Workspace.css';

function Workspace({ onNavigate }) {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  return (
    <div className="workspace-page">
      {/* Back Button */}
      <div className="back-button-container">
        <button className="back-to-home-btn" onClick={() => onNavigate && onNavigate('home')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Home
        </button>
      </div>

      {/* Main Content */}
      <div className="workspace-main">
        <div className="upload-section">
          <div className="section-header">
            <div className="section-dot"></div>
            <h2>Upload Medical Documents</h2>
          </div>
          
          <div className="upload-area" onDragOver={handleDragOver} onDrop={handleDrop}>
            <div className="upload-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                <path d="M12,11L8,15H10.5V19H13.5V15H16L12,11Z"/>
              </svg>
            </div>
            <h3>Upload Your Medical History</h3>
            <p>Upload your lab reports, prescriptions, radiology images, and pathology results to create a comprehensive medical profile.</p>
            
            <div className="medical-icons">
              <div className="medical-icon syringe">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4,4H6L8,6H10L8,4H10L12,6H14L12,4H14L16,6H18L16,4H18V2H4V4M6,14V16H8V14H6M10,14V16H12V14H10M14,14V16H16V14H14M18,14V16H20V14H18M6,18V20H8V18H6M10,18V20H12V18H10M14,18V20H16V18H14M18,18V20H20V18H18Z"/>
                </svg>
              </div>
              <div className="medical-icon pill">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.22,11.29L11.29,4.22C13.64,1.88 17.43,1.88 19.78,4.22C22.12,6.57 22.12,10.36 19.78,12.71L12.71,19.78C10.36,22.12 6.57,22.12 4.22,19.78C1.88,17.43 1.88,13.64 4.22,11.29M5.64,12.71C4.59,13.76 4.59,15.24 5.64,16.29C6.69,17.34 8.17,17.34 9.22,16.29L16.29,9.22C17.34,8.17 17.34,6.69 16.29,5.64C15.24,4.59 13.76,4.59 12.71,5.64L5.64,12.71Z"/>
                </svg>
              </div>
              <div className="medical-icon microscope">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.5,6A0.5,0.5 0 0,1 10,6.5A0.5,0.5 0 0,1 9.5,7A0.5,0.5 0 0,1 9,6.5A0.5,0.5 0 0,1 9.5,6M11,2A2,2 0 0,1 13,4V7A2,2 0 0,1 11,9H7A2,2 0 0,1 5,7V4A2,2 0 0,1 7,2H11M7,4V7H11V4H7M12,10L14,12L12,14L10,12L12,10M14.5,11A0.5,0.5 0 0,1 15,11.5A0.5,0.5 0 0,1 14.5,12A0.5,0.5 0 0,1 14,11.5A0.5,0.5 0 0,1 14.5,11M16.5,11A0.5,0.5 0 0,1 17,11.5A0.5,0.5 0 0,1 16.5,12A0.5,0.5 0 0,1 16,11.5A0.5,0.5 0 0,1 16.5,11M18.5,11A0.5,0.5 0 0,1 19,11.5A0.5,0.5 0 0,1 18.5,12A0.5,0.5 0 0,1 18,11.5A0.5,0.5 0 0,1 18.5,11M20.5,11A0.5,0.5 0 0,1 21,11.5A0.5,0.5 0 0,1 20.5,12A0.5,0.5 0 0,1 20,11.5A0.5,0.5 0 0,1 20.5,11M22.5,11A0.5,0.5 0 0,1 23,11.5A0.5,0.5 0 0,1 22.5,12A0.5,0.5 0 0,1 22,11.5A0.5,0.5 0 0,1 22.5,11Z"/>
                </svg>
              </div>
              <div className="medical-icon xray">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                  <path d="M8,12H16V14H8V12M8,16H16V18H8V16M10,8H14V10H10V8Z"/>
                </svg>
              </div>
            </div>
            
            <p className="upload-instruction">Drag and drop your medical documents here, or click to browse</p>
            <p className="file-types">Supports PDF, JPG, PNG, and DICOM files</p>
            <button className="choose-files-btn" onClick={() => document.getElementById('file-input').click()}>
              Choose Files
            </button>
            <input 
              id="file-input" 
              type="file" 
              multiple 
              accept=".pdf,.jpg,.jpeg,.png,.dcm" 
              onChange={handleFileUpload}
              style={{ display: 'none' }}
            />
          </div>
        </div>

        {/* Document Categories */}
        <div className="document-categories">
          <div className="category-card">
            <div className="category-icon lab">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19M17,11H15V9H17V11M13,11H11V9H13V11M9,11H7V9H9V11M17,15H15V13H17V15M13,15H11V13H13V15M9,15H7V13H9V15Z"/>
              </svg>
            </div>
            <h4>Lab Reports</h4>
            <p>Blood tests, urine tests, etc.</p>
          </div>

          <div className="category-card">
            <div className="category-icon prescription">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.22,11.29L11.29,4.22C13.64,1.88 17.43,1.88 19.78,4.22C22.12,6.57 22.12,10.36 19.78,12.71L12.71,19.78C10.36,22.12 6.57,22.12 4.22,19.78C1.88,17.43 1.88,13.64 4.22,11.29M5.64,12.71C4.59,13.76 4.59,15.24 5.64,16.29C6.69,17.34 8.17,17.34 9.22,16.29L16.29,9.22C17.34,8.17 17.34,6.69 16.29,5.64C15.24,4.59 13.76,4.59 12.71,5.64L5.64,12.71Z"/>
              </svg>
            </div>
            <h4>Prescriptions</h4>
            <p>Current medications</p>
          </div>

          <div className="category-card">
            <div className="category-icon radiology">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                <path d="M8,12H16V14H8V12M8,16H16V18H8V16M10,8H14V10H10V8Z"/>
              </svg>
            </div>
            <h4>Radiology</h4>
            <p>X-rays, CT scans, MRIs</p>
          </div>

          <div className="category-card">
            <div className="category-icon pathology">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.5,6A0.5,0.5 0 0,1 10,6.5A0.5,0.5 0 0,1 9.5,7A0.5,0.5 0 0,1 9,6.5A0.5,0.5 0 0,1 9.5,6M11,2A2,2 0 0,1 13,4V7A2,2 0 0,1 11,9H7A2,2 0 0,1 5,7V4A2,2 0 0,1 7,2H11M7,4V7H11V4H7M12,10L14,12L12,14L10,12L12,10M14.5,11A0.5,0.5 0 0,1 15,11.5A0.5,0.5 0 0,1 14.5,12A0.5,0.5 0 0,1 14,11.5A0.5,0.5 0 0,1 14.5,11M16.5,11A0.5,0.5 0 0,1 17,11.5A0.5,0.5 0 0,1 16.5,12A0.5,0.5 0 0,1 16,11.5A0.5,0.5 0 0,1 16.5,11M18.5,11A0.5,0.5 0 0,1 19,11.5A0.5,0.5 0 0,1 18.5,12A0.5,0.5 0 0,1 18,11.5A0.5,0.5 0 0,1 18.5,11M20.5,11A0.5,0.5 0 0,1 21,11.5A0.5,0.5 0 0,1 20.5,12A0.5,0.5 0 0,1 20,11.5A0.5,0.5 0 0,1 20.5,11M22.5,11A0.5,0.5 0 0,1 23,11.5A0.5,0.5 0 0,1 22.5,12A0.5,0.5 0 0,1 22,11.5A0.5,0.5 0 0,1 22.5,11Z"/>
              </svg>
            </div>
            <h4>Pathology</h4>
            <p>Biopsy results, tissue analysis</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="workspace-footer">
        <div className="footer-left">
          <span>Upload documents to get started</span>
        </div>
        <div className="footer-right">
          <button className="skip-btn">Skip for now</button>
          <button className="continue-btn">Continue to Chat ({uploadedFiles.length})</button>
        </div>
      </div>
    </div>
  );
}

export default Workspace;

