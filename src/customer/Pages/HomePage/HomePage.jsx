import React from "react";
import MainCarousel from "../../HomeCarosel/MainCarosel";
// Check your folder name: Is it "HomeSectionCarosel" or "HomeSectionCarousel"?
import HomeSectionCarosel from "../../components/HomeSectionCarosel/HomeSectionCarosel"; 
import { mens_kurta } from "../../../mens_kurta"; 

const HomePage = () => {
    return (
        <div className="w-full">
            <MainCarousel />

            {/* Removing flex-col and justify-center allows the carousels to take full width */}
            <div className="space-y-10 py-20 px-5 lg:px-10">
                <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"} />
                
            </div>
        </div>
    );
};

export default HomePage;