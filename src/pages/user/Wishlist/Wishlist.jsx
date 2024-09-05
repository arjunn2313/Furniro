import React, { useState } from "react";
import { FaHeart, FaTrashAlt } from "react-icons/fa";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Modern Sofa",
      price: "$799",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      name: "Classic Armchair",
      price: "$399",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      name: "Stylish Lamp",
      price: "$99",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 4,
      name: "Elegant Coffee Table",
      price: "$199",
      image: "https://via.placeholder.com/300x200",
    },
  ]);

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 flex items-center">
        <FaHeart className="text-red-500 mr-2" />
        Your Wishlist
      </h1>

      {wishlistItems.length === 0 ? (
        <p className="text-gray-600 text-lg">Your wishlist is empty.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h2>
                <p className="text-gray-600 mt-2 text-lg">{item.price}</p>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="mt-4 w-full bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center"
                >
                  <FaTrashAlt className="mr-2"   />
                  Remove from Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
