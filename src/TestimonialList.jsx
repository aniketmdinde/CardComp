// src/TestimonialList.js
import React, { useState, useEffect, useRef } from 'react';
import TestimonialCard from './TestimonialCard';
import './TestimonialList.css';

const TestimonialList = () => {
  const [testimonials, setTestimonials] = useState([]);
  const containerRef = useRef();

  useEffect(() => {
    loadInitialTestimonials();
    const scrollInterval = setInterval(scrollTestimonials, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  const loadInitialTestimonials = () => {
    const initialTestimonials = [
      {
        id: 1,
        message: "This is testimonial message 1",
        author: "John Doe",
        image: "https://example.com/image1.jpg"
      },
      {
        id: 2,
        message: "This is testimonial message 2",
        author: "Jane Smith",
        image: "https://example.com/image2.jpg"
      },
      {
        id: 3,
        message: "This is testimonial message 2",
        author: "Jane Smith",
        image: "https://example.com/image2.jpg"
      },
      {
        id: 4,
        message: "This is testimonial message 2",
        author: "Jane Smith",
        image: "https://example.com/image2.jpg"
      },
      {
        id: 5,
        message: "This is testimonial message 2",
        author: "Jane Smith",
        image: "https://example.com/image2.jpg"
      },

      {
        id: 6,
        message: "This is testimonial message 2",
        author: "Jane Smith",
        image: "https://example.com/image2.jpg"
      },
      {
        id: 7,
        message: "This is testimonial message 2",
        author: "Jane Smith",
        image: "https://example.com/image2.jpg"
      },

      {
        id: 8,
        message: "This is testimonial message 2",
        author: "Jane Smith",
        image: "https://example.com/image2.jpg"
      },

      {
        id: 9,
        message: "This is testimonial message 2",
        author: "Jane Smith",
        image: "https://example.com/image2.jpg"
      },

      {
        id: 10,
        message: "This is testimonial message 2",
        author: "Jane Smith",
        image: "https://example.com/image2.jpg"
      },
      // Add more testimonials as needed
    ];
  
    setTestimonials([...initialTestimonials, ...initialTestimonials]); // Duplicating for seamless scroll
  };
  

  const scrollTestimonials = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      if (scrollLeft >= scrollWidth / 2) {
        containerRef.current.scrollLeft = 0;
      } else {
        containerRef.current.scrollLeft += 1;
      }
    }
  };

  return (
    <div className="testimonial-list-container" ref={containerRef}>
      <div className="testimonial-list">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialList;
