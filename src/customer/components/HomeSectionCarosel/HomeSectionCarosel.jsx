import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

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

  const items = data.slice(0, 10).map((item, index) => (
    <div
      className="px-3 py-2 transition-transform duration-300 hover:scale-105"
      key={index}
    >
      <HomeSectionCard product={item} />
    </div>
  ));

  const slidePrev = () => carouselRef.current?.slidePrev();
  const slideNext = () => carouselRef.current?.slideNext();
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  return (
    <div className="relative w-full px-4 lg:px-8 my-8 bg-gray-50 rounded-lg shadow-md">
      {sectionName && (
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 relative inline-block">
          {sectionName}
          <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-pink-500"></span>
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
          infinite
          autoPlay
          autoPlayInterval={3000}
          animationDuration={800}
          animationType="fadeout"
          autoPlayStrategy="all"
        />

        {/* Next Button */}
        {activeIndex < items.length - responsive[1024].items && (
          <Button
            onClick={slideNext}
            variant="contained"
            sx={{
              position: "absolute",
              top: "50%",
              right: "-20px",
              transform: "translateY(-50%)",
              bgcolor: "rgba(255,255,255,0.8)",
              color: "black",
              boxShadow: 3,
              borderRadius: "50%",
              minWidth: "48px",
              height: "48px",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "black",
                color: "white",
                transform: "translateY(-50%) scale(1.1)",
              },
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(180deg)" }} />
          </Button>
        )}

        {/* Prev Button */}
        {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            sx={{
              position: "absolute",
              top: "50%",
              left: "-20px",
              transform: "translateY(-50%)",
              bgcolor: "rgba(255,255,255,0.8)",
              color: "black",
              boxShadow: 3,
              borderRadius: "50%",
              minWidth: "48px",
              height: "48px",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "black",
                color: "white",
                transform: "translateY(-50%) scale(1.1)",
              },
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