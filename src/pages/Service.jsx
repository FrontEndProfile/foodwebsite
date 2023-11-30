import React from "react";
import Hero from "../components/Hero/Hero";

import heroLeftHome from "../assets/img1.png";
import heroImgHome from "../assets/hero-img.png";
import RatingHome from "../assets/rating.png";
import backImgHeroHome from "../assets/bg.png";

const Service = () => {
  return (
    <>
      <Hero
        backgroundImage={backImgHeroHome}
        buttonText={false}
        title="Be The Fastest In Delivering Your Food"
        subTitle=" noting"
        showAdditionalContent={false} // You can toggle this based on your requirements
        customerImage={false}
        customerReviewRating={false}
        heroImage={heroImgHome}
      />
    </>
  );
};

export default Service;
