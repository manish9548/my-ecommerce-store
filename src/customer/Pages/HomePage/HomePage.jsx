import React from "react";
import MainCarousel from "../../HomeCarosel/MainCarosel";
import HomeSectionCarosel from "../../components/HomeSectionCarosel/HomeSectionCarosel";

const HomePage = () => {
    return (
        <div className="space-y-10">
            <MainCarousel />

            <div className="px-6 lg:px-16">
                <HomeSectionCarosel />
            </div>
        </div>
    );
};

export default HomePage;