import React, { useState } from "react";
import { FaArrowLeft, FaSave, FaTrash } from "react-icons/fa";

const EditProductForm = () => {
  // Sample product data (replace with real data)
  const [product, setProduct] = useState({
    id: "101",
    name: "Modern Wooden Chair",
    description:
      "This is a beautiful modern wooden chair with comfortable seating and a sleek design. Perfect for any living room or office space.",
    price: 150.0,
    stock: 10,
    category: "Furniture",
    images: [
      "/images/chair1.jpg",
      "/images/chair2.jpg",
      "/images/chair3.jpg", // Example image URLs
    ],
  });
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [imageFiles, setImageFiles] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    setImageFiles([...e.target.files]);
    if (e.target.files.length > 0) {
      setMainImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call)
    console.log("Updated product data:", product);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <button className="text-blue-500 hover:text-blue-700 flex items-center">
            <FaArrowLeft className="mr-2" /> Back to Products
          </button>
          <button className="text-red-500 hover:text-red-700 flex items-center">
            <FaTrash className="mr-2" /> Delete Product
          </button>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-gray-800">Edit Product</h2>

        {/* Product Edit Form */}
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div className="md:flex md:space-x-6">
            {/* Product Image Gallery */}
            <div className="md:w-1/2">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="flex space-x-2 mb-4">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Product ${index}`}
                    className="w-20 h-20 object-cover rounded-lg cursor-pointer"
                    onClick={() => setMainImage(image)}
                  />
                ))}
              </div>
              <div>
                <label
                  htmlFor="images"
                  className="block font-medium mb-2 text-gray-700"
                >
                  Upload New Images
                </label>
                <input
                  id="images"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            {/* Product Information */}
            <div className="md:w-1/2">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block font-medium mb-2 text-gray-700"
                >
                  Product Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={product.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter product name"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block font-medium mb-2 text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={product.description}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter product description"
                  rows="4"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="price"
                    className="block font-medium mb-2 text-gray-700"
                  >
                    Price
                  </label>
                  <input
                    id="price"
                    name="price"
                    type="number"
                    value={product.price}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter product price"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="stock"
                    className="block font-medium mb-2 text-gray-700"
                  >
                    Stock Quantity
                  </label>
                  <input
                    id="stock"
                    name="stock"
                    type="number"
                    value={product.stock}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter stock quantity"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="block font-medium mb-2 text-gray-700"
                >
                  Category
                </label>
                <input
                  id="category"
                  name="category"
                  type="text"
                  value={product.category}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter product category"
                  required
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
          >
            <FaSave className="mr-2" /> Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProductForm;
