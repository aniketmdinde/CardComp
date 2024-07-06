// import React, { useRef, useEffect, useState } from 'react';
// import { gsap } from 'gsap';

// const Carousel = ({ children }) => {
//   const carouselRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const totalItems = React.Children.count(children);
//   const itemsToShow = 4;

//   useEffect(() => {
//     const carousel = carouselRef.current;
//     gsap.set(carousel, { xPercent: -currentIndex * (100 / itemsToShow) });

//     const updatePosition = () => {
//       gsap.to(carousel, { xPercent: -currentIndex * (100 / itemsToShow), duration: 0.5 });
//     };

//     updatePosition();
//   }, [currentIndex, itemsToShow]);

//   const prev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalItems - itemsToShow : prevIndex - 1));
//   };

//   const next = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === totalItems - itemsToShow ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="relative w-full max-w-6xl overflow-hidden">
//       <div ref={carouselRef} className="flex transition-transform duration-500 ease-in-out">
//         {React.Children.map(children, (child) => (
//           <div className="flex-shrink-0 w-1/4 p-2">{child}</div>
//         ))}
//       </div>
//       <button
//         onClick={prev}
//         className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg"
//       >
//         &lt;
//       </button>
//       <button
//         onClick={next}
//         className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg"
//       >
//         &gt;
//       </button>
//     </div>
//   );
// };

// export default Carousel;
