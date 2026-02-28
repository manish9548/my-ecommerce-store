import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarosel = ({ data, sectionName }) => {
  const carouselRef = useRef();

  // Bade screens ke liye breakpoints extend kiye hain
  const responsive = {
    0: { items: 1 },
    520: { items: 2 },
    720: { items: 3 },
    1024: { items: 4 },
    1280: { items: 5 }, // Laptop/Desktop
    1536: { items: 6 }, // Ultra-wide monitors
  };

  // Items map (yahan w-full use kiya hai taaki responsive rahe)
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
    <div className="px-1" key={index}>
      <HomeSectionCard />
    </div>
  ));

  const slideNext = () => carouselRef.current?.slideNext();
  const slidePrev = () => carouselRef.current?.slidePrev();

  return (
    <div className="w-full relative px-4 lg:px-8">
      {sectionName && <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>}
      
      <div className="relative p-2">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableButtonsControls
          disableDotsControls // Dots ko hata diya taaki clean dikhe
          mouseTracking
          responsive={responsive}
        />

        {/* Buttons: Inko thoda aur bahar nikala hai professional look ke liye */}
        <Button
          onClick={slideNext}
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "50%",
            right: "-1.5rem",
            transform: "translateY(-50%)",
            bgcolor: "white !important",
            color: "black",
            boxShadow: 3,
            borderRadius: "50%",
            minWidth: "45px",
            height: "45px",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(180deg)" }} />
        </Button>

        <Button
          onClick={slidePrev}
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "50%",
            left: "-1.5rem",
            transform: "translateY(-50%)",
            bgcolor: "white !important",
            color: "black",
            boxShadow: 3,
            borderRadius: "50%",
            minWidth: "45px",
            height: "45px",
          }}
          aria-label="prev"
        >
          <KeyboardArrowLeftIcon />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarosel;