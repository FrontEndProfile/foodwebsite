import React from 'react'
import Hero from '../components/Hero/Hero'
import FavoriteCards from '../components/FavoriteCards/FavoriteCards'
import TabMenu from '../components/TabMenu/TabMenu'
import WhatSay from '../components/WhatSay/WhatSay'
import DownloadApp from '../components/DownloadApp/DownloadApp'



import heroLeftHome from "../assets/img1.png";
import heroImgHome from "../assets/hero-img.png";
import RatingHome from "../assets/rating.png";
import backImgHeroHome from "../assets/bg.png";


const Home = () => {
  const menuItems = [
    {
      label: 'Burger',
      icon: 'images/burger.png',
      items: [
        { name: 'Italian Pizza', image: '../assets/burger1.jpg', price: '8.56' },
        // Add more items for the Burger tab
      ],
    },
    {
      label: 'Pizza',
      icon: 'images/piza.png',
      items: [
        { name: 'Pak Pizza', image: 'images/pizza1.png', price: '8.56' },
      ],
    },
    // Add more tabs as needed
  ];
  
  return (
    <>
      
      <HeroSection
        backgroundImage={backImgHeroHome}
        buttonText="More Than Faster"
        title="Be The Fastest In Delivering Your Food"
        subTitle="Our Job is to fill your tummy with delicious food and with fast and free delivery"
        heroImage={heroImgHome}
      />

      {/* <Hero
        backgroundImage={backImgHeroHome}
        buttonText="More Than Faster"
        title="Be The Fastest In Delivering Your Food"
        subTitle="Our Job is to fill your tummy with delicious food and with fast and free delivery"
        showAdditionalContent={true} // You can toggle this based on your requirements
        customerImage={heroLeftHome}
        customerReviewRating={RatingHome}
        heroImage={heroImgHome}
      /> */}
      <FavoriteCards />
      <TabMenu menuItems={menuItems}/>
      <WhatSay/>
      <DownloadApp/>

    </>
  )
}

export default Home