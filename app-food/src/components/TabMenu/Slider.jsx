// Slider.js
import React, { forwardRef } from 'react';

const Slider = forwardRef(({ children }, ref) => {
  return (
    <div ref={ref} className="slick-slider">
      {children}
    </div>
  );
});

export default Slider;





// // Slider.js
// import React from 'react';
// import Card from './Card';

// const Slider = ({ cards }) => (
//   <div className="center slider mb-5">
//     {/* {cards.map((card, index) => (
//       <Card key={index} {...card} />
//     ))} */}

// <SlickSlider>
//     {dataForSliderOne.map((card, index) => (
//       <Card key={index} {...card} />
//     ))}
//   </SlickSlider>
//   </div>
// );

// export default Slider;
