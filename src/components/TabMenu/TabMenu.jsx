import React, { useState } from "react";
import Card from "./Card";
import SlickSlider from "./SlickSlider";

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };


  const renderSlider = (sliderNumber, data) => (
    <div
      key={sliderNumber}
      id={`slider-${sliderNumber}`}
      style={{ display: activeTab === sliderNumber ? "block" : "none" }}
    >
      <SlickSlider>
        {data.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </SlickSlider>
    </div>
  );

  const tabsData = [
    {
      id: 1,
      label: "Burger",
      data: [
        {
          imageSrc: "/src/assets/pizza1.png",
          title: "Italian Burger 1",
          price: "8.56",
        },
        {
          imageSrc: "/src/assets/pizza1.png",
          title: "Italian Burger 2",
          price: "9.99",
        },
        {
          imageSrc: "/src/assets/pizza1.png",
          title: "Spicy Burger",
          price: "7.99",
        },
        {
          imageSrc: "/src/assets/pizza1.png",
          title: "Veggie Burger",
          price: "6.99",
        },
      ],
    },
    {
      id: 2,
      label: "Pizza",
      data: [
        {
          imageSrc: "/src/assets/pizza1.png",
          title: "Italian Pizza 1",
          price: "8.56",
        },
        {
          imageSrc: "/src/assets/pizza1.png",
          title: "Italian Pizza 2",
          price: "9.99",
        },
        {
          imageSrc: "/src/assets/pizza1.png",
          title: "Spicy Pizza",
          price: "7.99",
        },
        {
          imageSrc: "/src/assets/pizza1.png",
          title: "Veggie Pizza",
          price: "6.99",
        },
      ],
    },
    {
      id: 3,
      label: "Cupcake",
      data: [
        {
          imageSrc: "/src/assets/pizza1.png",
          title: "Italian Cupcake",
          price: "8.56",
        },
        {
          imageSrc: "/src/assets/pizza1.png",
          title: "Italian Cupcake",
          price: "9.99",
        },
        {
          imageSrc: "/src/assets/pizza1.png",
          title: "Spicy Cupcake",
          price: "7.99",
        },
        {
          imageSrc: "/src/assets/pizza1.png",
          title: "Veggie Cupcake",
          price: "6.99",
        },
      ],
    },
    // Add more tabs as needed
  ];

  return (
    <section className="mt-5 pt-0 pt-md-5" id="menu">
      <div className="container">
        <div class="row  mt-0 mt-md-5">
          <div class="col-md-5">
            <h6 class="red-color  font-weight-bold">OUR MENU</h6>
            <h2 class="font-weight-bold">
              Your Favourite Food Delivery Partner
            </h2>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-3 scroller" id="menu">
            {tabsData.map((tab) => (
              <div
                key={tab.id}
                className={`mt-3 pointer border-0 p-2 ${
                  activeTab === tab.id ? "active-tab" : ""
                }`}
                onClick={() => handleTabClick(tab.id)}
              >
                <img
                  src={`/src/assets/${tab.label.toLowerCase()}.png`}
                  className="img-fluid"
                  width="40"
                  alt={tab.label}
                />
                <span className="pl-2">{tab.label}</span>
              </div>
            ))}
          </div>
          <div className="col-md-8">
            {tabsData.map((tab) => renderSlider(tab.id, tab.data))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabMenu;
