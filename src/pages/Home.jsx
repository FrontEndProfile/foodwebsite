import React from "react";
import Hero from "../components/Hero/Hero";
import FavoriteCards from "../components/FavoriteCards/FavoriteCards";
import TabMenu from "../components/TabMenu/TabMenu";
import WhatSay from "../components/WhatSay/WhatSay";
import DownloadApp from "../components/DownloadApp/DownloadApp";

const Home = () => {
  const menuItems = [
    {
      label: "Burger",
      icon: "images/burger.png",
      items: [
        {
          name: "Italian Pizza",
          image: "../assets/burger1.jpg",
          price: "8.56",
        },
        // Add more items for the Burger tab
      ],
    },
    {
      label: "Pizza",
      icon: "images/piza.png",
      items: [{ name: "Pak Pizza", image: "images/pizza1.png", price: "8.56" }],
    },
    // Add more tabs as needed
  ];

  return (
    <>
      <Hero />
      <FavoriteCards />
      <TabMenu menuItems={menuItems} />
      <WhatSay />
      <DownloadApp />
    </>
  );
};

export default Home;
