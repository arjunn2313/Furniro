import React, { useState } from "react";
import { FaEdit, FaTrash, FaArrowLeft } from "react-icons/fa";

const ProductView = () => {
  // Sample product data (replace with real data)
  const product = {
    id: "101",
    name: "Modern Wooden Chair",
    description:
      "This is a beautiful modern wooden chair with comfortable seating and a sleek design. Perfect for any living room or office space.",
    price: 150.0,
    stock: 10,
    category: "Furniture",
    images: [
      "https://cdn.decornation.in/wp-content/uploads/2020/07/modern-dining-table-chairs.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN_EponxtpA_R34LOUrcBQDwiyhCPyxzp1M6WRBYj3ITSF3yHIBZpffzQynShRbVxxxoY&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM0ZYZPlgJ-XMB24taTjh9ed9UoFxuNPBQh3xhef5ePvAN2Yu3Hmvh0KCsBLfey1eTDNY&usqp=CAU", // Example image URLs
    ],
  };

  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-10 rounded-lg shadow-md max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <button className="text-blue-500 hover:text-blue-700 flex items-center">
            <FaArrowLeft className="mr-2" /> Back to Products
          </button>
          <div className="flex space-x-4">
            <button className="text-green-500 hover:text-green-700">
              <FaEdit size={18} /> Edit
            </button>
            <button className="text-red-500 hover:text-red-700">
              <FaTrash size={18} /> Delete
            </button>
          </div>
        </div>

        {/* Main Product Section */}
        <div className="md:flex md:space-x-6">
          {/* Product Image Gallery */}
          <div className="md:w-1/2">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-72 object-cover rounded-lg mb-4"
            />
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product ${index}`}
                  className="w-14 h-14 sm:w-20 sm:h-20 object-cover rounded-lg cursor-pointer"
                  onClick={() => setMainImage(image)}
                />
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="md:w-1/2 mt-6 md:mt-0">
            <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
            <p className="text-gray-600 text-sm mb-4">{product.category}</p>
            <p className="text-lg text-gray-700 mb-6">{product.description}</p>

            {/* Price and Stock */}
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-green-600 mr-4">
                ${product.price.toFixed(2)}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  product.stock > 0
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            {/* Stock Status */}
            {product.stock > 0 ? (
              <p className="text-gray-600">
                Only {product.stock} left in stock!
              </p>
            ) : (
              <p className="text-red-600">
                This product is currently out of stock.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
