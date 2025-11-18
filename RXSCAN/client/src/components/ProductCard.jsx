import React from 'react';
import './ProductCard.css';

function ProductCard({ title, description, bullets, icon }) {
  return (
    <div className="product-card">
      <div className="product-card-header">
        <div className="product-card-icon">
          {icon}
        </div>
        <h3 className="product-card-title">{title}</h3>
      </div>
      <p className="product-card-description">{description}</p>
      <ul className="product-card-bullets">
        {bullets.map((bullet, index) => (
          <li key={index} className="product-card-bullet">
            <div className="product-card-bullet-dot"></div>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductCard;

