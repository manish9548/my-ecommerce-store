import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

// 1. Remove the hardcoded import from here if you're passing it as a prop from Home.jsx
const HomeSectionCarosel = ({ data = [], sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1.2 },
    520: { items: 2 },
    720: { items: 3 },
    1024: { items: 4 },
    1280: { items: 5 },
    1536: { items: 6 },
  };

  // 2. Use 'data' instead of 'mens_kurta' to make this component reusable
  const items = data.slice(0, 10).map((item, index) => (
    <div className="px-3 py-2" key={index}>
      <HomeSectionCard product={item} />
    </div>
  ));

  const slidePrev = () => carouselRef.current?.slidePrev();
  const slideNext = () => carouselRef.current?.slideNext();

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  return (
    <div className="relative w-full px-4 lg:px-8 my-8">
      {sectionName && (
        <h2 className="text-2xl font-extrabold text-gray-900 mb-4 ml-2">
          {sectionName}
        </h2>
      )}

      <div className="relative group p-5">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableButtonsControls
          disableDotsControls
          mouseTracking
          onSlideChanged={syncActiveIndex}
          responsive={responsive}
          infinite={false}
        />

        {/* 3. Logic Fix: Only show Next button if there are items left to slide to */}
        {activeIndex !== items.length - Math.floor(responsive[1024].items) && (
          <Button
            onClick={slideNext}
            variant="contained"
            sx={{
              position: "absolute",
              top: "50%",
              right: "0",
              transform: "translate(50%, -50%)",
              bgcolor: "white !important",
              color: "black",
              boxShadow: 5,
              borderRadius: "50%",
              minWidth: "48px",
              height: "48px",
              display: activeIndex >= items.length - 1 ? 'none' : 'flex' // Simple end-of-list check
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(180deg)" }} />
          </Button>
        )}

        {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            sx={{
              position: "absolute",
              top: "50%",
              left: "0",
              transform: "translate(-50%, -50%)",
              bgcolor: "white !important",
              color: "black",
              boxShadow: 5,
              borderRadius: "50%",
              minWidth: "48px",
              height: "48px",
            }}
            aria-label="prev"
          >
            <KeyboardArrowLeftIcon />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarosel;