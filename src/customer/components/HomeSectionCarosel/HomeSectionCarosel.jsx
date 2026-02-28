import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";

import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarosel = () => {

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4 },
  };

  const items = [1, 2, 3, 4, 5].map((item, index) => (
    <HomeSectionCard key={index} />
  ));

  return (
    <div className="relative px-4 lg:px-8">
      <div className="relative p-5">
        
        <AliceCarousel
          items={items}
          infinite
          disableButtonsControls
          mouseTracking
          responsive={responsive}
        />

        {/* Custom Arrow Button */}
        <Button
          variant="contained"
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            transform: "translateY(-50%)",
            minWidth: "40px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(180deg)" }} />
        </Button>

      </div>
    </div>
  );
};

export default HomeSectionCarosel;