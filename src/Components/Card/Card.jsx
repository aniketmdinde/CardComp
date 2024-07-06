import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function Card({ children, imgSrc }) {
  const cardRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const cardElement = cardRef.current;
    const contentElement = contentRef.current;

    const hoverAnimation = gsap.timeline({ paused: true })
      .to(cardElement, { scale: 1.05, duration: 0.3 })
      .to(contentElement, { opacity: 1, y: 0, duration: 0.3 }, 0);

    cardElement.addEventListener('mouseenter', () => hoverAnimation.play());
    cardElement.addEventListener('mouseleave', () => hoverAnimation.reverse());

    return () => {
      cardElement.removeEventListener('mouseenter', () => hoverAnimation.play());
      cardElement.removeEventListener('mouseleave', () => hoverAnimation.reverse());
    };
  }, []);

  return (
    <div ref={cardRef} className="relative w-96 h-auto overflow-hidden rounded-2xl group shadow-lg">
      <img src={imgSrc} className="w-full h-64 object-cover transition-transform duration-200" alt="" />
      <div ref={contentRef} className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-4 text-white opacity-0 transform translate-y-10">
        {children}
      </div>
    </div>
  );
}

export default Card;