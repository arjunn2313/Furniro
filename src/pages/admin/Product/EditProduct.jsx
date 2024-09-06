import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaSave, FaTrash } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../../../components/pagination/Spinner";
import ErrorMessage from "../../../components/pagination/CustomError";
import { fetchProductById, updateProductById } from "../../../api/productApi"; // Import API methods
import axiosInstance, { API_BASE_URL } from "../../../config/axiosConfig";
import axios from "axios";

const EditProductForm = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [imageFiles, setImageFiles] = useState([]); // Track new images
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetchProductById(productId);
        setProduct(response.data);
        setMainImage(response.data.images[0]);
      } catch (err) {
        setError("Failed to fetch product data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage />;
  if (!product) return <p>No product found.</p>;

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
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("productName", product.productName);
      formData.append("description", product.description);
      formData.append("price", product.price);
      formData.append("stock", product.stock);
      formData.append("height", product.dimensions.height);
      formData.append("length", product.dimensions.length);
      formData.append("width", product.dimensions.width);
      formData.append("brand", product.brand);
      formData.append("category", product.category);

      imageFiles.forEach((file) => {
        formData.append("images", file);
      });

      const response = await updateProductById(productId, formData);

      navigate("/admin/product");
    } catch (err) {
      setError("Failed to update product.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-3">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <button
            className="text-blue-500 hover:text-blue-700 flex items-center"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft className="mr-2" /> Back to Products
          </button>
          <button className="text-red-500 hover:text-red-700 flex items-center">
            <FaTrash className="mr-2" /> Delete Product
          </button>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-gray-800">Edit Product</h2>

        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div className="md:flex md:space-x-6">
            {/* Product Image Gallery */}
            <div className="md:w-1/2">
              <img
                src={`${API_BASE_URL}/${mainImage}`}
                alt={product.productName}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="flex space-x-2 mb-4">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={`${API_BASE_URL}/${image}`}
                    alt={`Product ${index}`}
                    className={`w-14 h-14 sm:w-20 sm:h-20 object-cover rounded-lg shadow-sm cursor-pointer transition-all duration-300 hover:scale-105 ${
                      mainImage === image ? "border-2 border-yellow-500" : ""
                    }`}
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
                  htmlFor="productName"
                  className="block font-medium mb-2 text-gray-700"
                >
                  Product Name
                </label>
                <input
                  id="productName"
                  name="productName"
                  type="text"
                  value={product.productName}
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

                <div>
                  <label
                    htmlFor="height"
                    className="block font-medium mb-2 text-gray-700"
                  >
                    Height
                  </label>
                  <input
                    id="height"
                    name="height"
                    type="number"
                    value={product.dimensions.height}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter height"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="length"
                    className="block font-medium mb-2 text-gray-700"
                  >
                    Length
                  </label>
                  <input
                    id="length"
                    name="length"
                    type="number"
                    value={product.dimensions.length}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter length"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="width"
                    className="block font-medium mb-2 text-gray-700"
                  >
                    Width
                  </label>
                  <input
                    id="width"
                    name="width"
                    type="number"
                    value={product.dimensions.width}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter width"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="brand"
                    className="block font-medium mb-2 text-gray-700"
                  >
                    Brand
                  </label>
                  <input
                    id="brand"
                    name="brand"
                    type="text" // Corrected to text
                    value={product.brand}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter brand"
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
