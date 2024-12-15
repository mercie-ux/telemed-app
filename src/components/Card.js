// src/components/Card.js
//import React from 'react';

const Card = ({ image, title, description }) => (
  <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', textAlign: 'center', width: '300px' }}>
    <div>
    <img 
      src={image} 
      alt={title} 
      style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} 
    />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default Card;
