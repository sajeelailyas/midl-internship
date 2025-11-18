import React from 'react';

function PlaceholderImage({ 
  width = 200, 
  height = 200, 
  text = "Image", 
  backgroundColor = "#3b82f6",
  textColor = "white",
  borderRadius = "8px",
  className = ""
}) {
  return (
    <div 
      className={`placeholder-image ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: backgroundColor,
        color: textColor,
        borderRadius: borderRadius,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px',
        fontWeight: '500',
        textAlign: 'center',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
      }}
    >
      {text}
    </div>
  );
}

export default PlaceholderImage;


