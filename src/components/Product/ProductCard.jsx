import React from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

export default function ProductCard({
  name,
  category,
  actualPrice,
  discountPrice,
  image,
}) {
  const offerPercentage = Math.round(
    ((actualPrice - discountPrice) / actualPrice) * 100
  );

  return (
    <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden group transition-all transform hover:scale-105 hover:shadow-2xl">
      {/* Image Section */}
      <div className="relative w-full h-48 bg-gray-200 flex items-center justify-center overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt="product"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Hover Icons */}
        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black via-transparent to-transparent bg-opacity-50 transition-opacity duration-300">
          <div className="space-x-4">
            <button className="bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 transition-colors duration-300 transform hover:scale-110">
              <FaShoppingCart size={20} />
            </button>
            <button className="bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-colors duration-300 transform hover:scale-110">
              <FaHeart size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6  ">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800">
          {name}
        </h3>
        <p className="text-gray-500 text-sm mb-3">{category}</p>

        {/* Pricing */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col">
            <span className="text-gray-400 line-through text-sm">
              ${actualPrice.toFixed(2)}
            </span>
            <span className="text-xl font-bold text-gray-900">
              ${discountPrice.toFixed(2)}
            </span>
          </div>
          <div className="bg-red-500 text-white px-3 py-1 text-sm font-semibold rounded-full shadow-md">
            {offerPercentage}% Off
          </div>
        </div>
      </div>
    </div>
  );
}
