// src/TestimonialCard.js
import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <img src={testimonial.image} alt={`Image of ${testimonial.author}`} className="testimonial-image" />
      <div className="testimonial-overlay">
        <p className="testimonial-message">"{testimonial.message}"</p>
        <h4 className="testimonial-author">- {testimonial.author}</h4>
      </div>
    </div>
  );
};

export default TestimonialCard;
