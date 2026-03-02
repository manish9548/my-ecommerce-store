import React from "react";
import { mainCaroselData } from "./MainCaroselData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const MainCarosel = () => {

  const items = mainCaroselData.map((item, index) => (
    <img
      key={index}
      src={item.image}
      alt=""
      role="presentation"
      className="cursor-pointer w-full h-[500px] object-cover"
    />
  ));

  return (
    <AliceCarousel
      items={items}
      autoPlay
      autoPlayInterval={1500}
      infinite
      disableButtonsControls
      mouseTracking
    />
  );
};

export default MainCarosel;