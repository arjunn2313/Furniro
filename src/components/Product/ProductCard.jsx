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
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group">
      {/* Image Placeholder */}
      <div className="relative w-full h-48 bg-gray-200 flex items-center justify-center">
        <img
          src={image}
          alt="product-image"
          className="w-full h-full object-cover"
        />

        {/* Hover Icons */}
        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-gray-800 bg-opacity-50 transition-opacity">
          <div className="space-x-4">
            <button className="bg-yellow-500 text-white p-2 rounded-full shadow-md hover:bg-yellow-600 transition-colors">
              <FaShoppingCart size={20} />
            </button>
            <button className="bg-red-500 text-white p-2 rounded-full shadow-md hover:bg-red-600 transition-colors">
              <FaHeart size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
          {name}
        </h3>
        <p className="text-gray-500 text-sm mb-2">{category}</p>

        {/* Pricing */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col">
            <span className="text-gray-400 line-through text-sm">
              ${actualPrice.toFixed(2)}
            </span>
            <span className="text-xl font-bold text-gray-800">
              ${discountPrice.toFixed(2)}
            </span>
          </div>
          <div className="bg-red-500 text-white px-3 py-1 text-sm font-semibold rounded">
            {offerPercentage}% Off
          </div>
        </div>
      </div>
    </div>
  );
}
