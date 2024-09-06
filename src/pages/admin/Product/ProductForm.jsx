import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import axiosInstance from "../../../config/axiosConfig";

const AddProductForm = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [length, setLength] = useState();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [material, setMaterial] = useState();
  const [brand, setBrand] = useState();
  const [productId, setProductId] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length > 5) {
      alert("You can only upload a maximum of 5 images.");
      return;
    }
    setImages([...images, ...files]);
  };

  const handleImageRemove = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("category", category);
    formData.append("length", length);
    formData.append("width", width);
    formData.append("height", height);
    formData.append("material", material);
    formData.append("brand", brand);
    formData.append("productId", productId);

    images.forEach((image) => {
      formData.append("product", image);
    });

    try {
      await axiosInstance.post("/api/products/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSuccess(true);
      // Clear form after successful submission
      setProductName("");
      setDescription("");
      setPrice("");
      setStock("");
      setCategory("");
      setImages([]);
      setLength("");
      setWidth("");
      setHeight("");
      setMaterial("");
      setBrand("");
    } catch (error) {
      setError("Failed to add product");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-6xl">
      <h2 className="text-xl sm:text-3xl font-bold mb-8 text-center text-gray-800">
        Add New Product
      </h2>
      <form onSubmit={handleFormSubmit} className="space-y-6">
        {/* Product Name */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="productName" className="font-medium text-gray-700">
            Product Name
          </label>
          <input
            id="productName"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter product name"
            required
          />
        </div>

        {/* Description */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="description" className="font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter product description"
            rows="4"
            required
          />
        </div>

        {/* Price and Stock */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-2">
            <label htmlFor="price" className="font-medium text-gray-700">
              Price
            </label>
            <input
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter product price"
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="stock" className="font-medium text-gray-700">
              Stock Quantity
            </label>
            <input
              id="stock"
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter stock quantity"
              required
            />
          </div>
        </div>
        {/* Dimensions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-2">
            <label htmlFor="productId" className="font-medium text-gray-700">
              Product Id
            </label>
            <input
              id="productId"
              type="text"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter product Id "
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="length" className="font-medium text-gray-700">
              Length
            </label>
            <input
              id="length"
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter product length"
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="width" className="font-medium text-gray-700">
              Width
            </label>
            <input
              id="width"
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter width "
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="height" className="font-medium text-gray-700">
              Height
            </label>
            <input
              id="height"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter height "
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="material" className="font-medium text-gray-700">
              Material
            </label>
            <input
              id="material"
              type="text"
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter material "
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="brand" className="font-medium text-gray-700">
              Brand
            </label>
            <input
              id="brand"
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter brand "
              required
            />
          </div>
        </div>

        {/* Category */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="category" className="font-medium text-gray-700">
            Category
          </label>
          <input
            id="category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter product category"
            required
          />
        </div>

        {/* Image Upload */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="images" className="font-medium text-gray-700">
            Product Images (Max 5)
          </label>
          <input
            id="images"
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          {/* Image Preview */}
          {images.length > 0 && (
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="relative group border border-gray-300 rounded-lg overflow-hidden"
                >
                  <img
                    src={URL.createObjectURL(img)}
                    alt={`product preview ${index}`}
                    className="object-cover w-full h-32"
                  />
                  <button
                    type="button"
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => handleImageRemove(index)}
                  >
                    <FaTrash size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-yellow-600 text-white py-3 my-5 rounded-lg hover:bg-yellow-700 transition-colors duration-300 shadow-lg"
        >
         {loading ? "Submitting...." : "Add Product"} 
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
