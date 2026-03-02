import React from "react";

const HomeSectionCard = ({ product }) => {
  return (
    <div className="group relative flex flex-col bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 mx-auto w-full max-w-[16rem] h-[26rem] cursor-pointer">
      
      {/* Image Container */}
      <div className="h-[15rem] w-full overflow-hidden bg-gray-100 relative">
        <img
          className="object-cover object-top w-full h-full group-hover:scale-110 transition-transform duration-700"
          src={product?.imageUrl}
          alt={product?.title}
        />
        <div className="absolute top-2 left-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-gray-700">
          {product?.color}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow justify-between bg-white text-left">
        <div>
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-tight">
            {product?.brand}
          </h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2 leading-snug">
            {product?.title}
          </p>
        </div>

        <div className="mt-auto pt-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-extrabold text-gray-900">
              ₹{product?.discountedPrice}
            </span>
            <span className="text-xs text-gray-400 line-through">
              ₹{product?.price}
            </span>
          </div>
          <div className="text-xs font-bold text-green-600 mt-1">
            {product?.discountPersent}% OFF
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCard;