// SlickSlider.js
import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from './Slider'; // Import the Slider component with forwardRef

const SlickSlider = ({ children }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    $(sliderRef.current).slick({
      // slidesToShow: 3,
      // slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 2000,
      // arrows:false,
      // Add other options as needed
    });

    return () => {
      $(sliderRef.current).slick('unslick');
    };
  }, []);

  useEffect(() => {
    $(sliderRef.current).slick('unslick');
    $(sliderRef.current).slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:false,

      // Add other options as needed
    });
  }, [children]);

  return <Slider ref={sliderRef}>{children}</Slider>;
};

export default SlickSlider;
