import React, { useRef, useEffect, useState } from 'react';
import Card from './Components/Card/Card';
import Img1 from './assets/img1.jpg';
import Img2 from './assets/img2.jpg';
import Img3 from './assets/img3.jpg';
import Img4 from './assets/img4.jpg';
import Img5 from './assets/img5.jpg';

function App() {
  const galleryRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef(null);
  const scrollSpeed = 0.5; // Adjust scroll speed as needed

  // Simulated product data
  const productData = [
    { id: 1, imgSrc: Img1, title: 'Lorem Ipsum 1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { id: 2, imgSrc: Img2, title: 'Lorem Ipsum 2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { id: 3, imgSrc: Img3, title: 'Lorem Ipsum 3', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { id: 4, imgSrc: Img4, title: 'Lorem Ipsum 4', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { id: 5, imgSrc: Img5, title: 'Lorem Ipsum 5', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  ];

  // Function to handle continuous scroll animation
  const animateScroll = () => {
    const galleryElement = galleryRef.current;
    if (galleryElement) {
      galleryElement.scrollLeft += scrollSpeed;
      if (galleryElement.scrollLeft >= galleryElement.scrollWidth - galleryElement.clientWidth) {
        galleryElement.scrollLeft = 0;
      }
    }
    animationRef.current = requestAnimationFrame(animateScroll);
  };

  // Start animation on component mount
  useEffect(() => {
    animationRef.current = requestAnimationFrame(animateScroll);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  // Pause animation on hover
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Resume animation on mouse leave
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={galleryRef}
      className="flex flex-no-wrap gap-4 justify-center p-4 overflow-x-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {productData.map((product) => (
        <div key={product.id}>
          <Card imgSrc={product.imgSrc}>
            <h3 className="text-xl font-bold mb-2">{product.title}</h3>
            <p>{product.description}</p>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default App;
