import React from "react"
import "./ProductCard.css"

const ProductCard = ({product}) => {
    return (
        <div className='productCard w-[15rem] m-3 bg-white rounded-lg overflow-hidden transition-all cursor-pointer'>

            {/* Image */}
            <div className='w-full h-64 overflow-hidden'>
                <img
                    className="w-full h-full object-cover object-top"
                    src={product.imageUrl}
                    alt=""
                />
            </div>

            {/* Text */}
            <div className='textPart p-3 flex flex-col'>
                <div>
                    <p className='font-bold opacity-60'>{product.brand}</p>
                    <p className='text-sm mt-1 line-clamp-2'>
                        {product.title}
                    </p>
                </div>

                <div className='flex items-center space-x-2 mt-3'>
                    <p className='font-semibold'>{product.discountedPrice}</p>
                    <p className='line-through opacity-50'>{product.price}</p>
                    <p className='text-green-600 font-semibold'>{product.discountPersent}%off</p>
                </div>
            </div>

        </div>
    )
}

export default ProductCard