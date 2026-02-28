import React from "react";

const HomeSectionCard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden w-60 mx-3">
      
      {/* Image */}
      <div className="h-64 w-full overflow-hidden">
        <img
          className="object-cover object-top w-full h-full hover:scale-105 transition duration-300"
          src="https://rukminim2.flixcart.com/image/3072/3072/xif0q/kurta/9/k/n/m-sf11-1-adhirajan-original-imahgchzypvehedy.jpeg?q=90"
          alt="Men Kurta"
        />
      </div>

      {/* Content */}
      <div className="p-4 text-center">
        <h3 className="font-semibold text-lg text-gray-800">
          Nofilter
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          Men Solid Pure Cotton Straight Kurta
        </p>

        {/* Price Section */}
        <div className="mt-3 flex justify-center items-center space-x-2">
          <span className="text-lg font-bold text-indigo-600">
            ₹999
          </span>
          <span className="text-sm text-gray-400 line-through">
            ₹1499
          </span>
          <span className="text-sm text-green-600 font-medium">
            33% Off
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCard;