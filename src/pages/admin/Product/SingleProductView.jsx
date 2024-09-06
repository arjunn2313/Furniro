import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaArrowLeft } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProductById } from "../../../api/productApi";
import { API_BASE_URL } from "../../../config/axiosConfig";
import Spinner from "../../../components/pagination/Spinner";
import ErrorMessage from "../../../components/pagination/CustomError";

const ProductView = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-7xl mx-auto transition-all duration-500 ease-in-out">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => navigate(-1)}
            className="text-blue-500 hover:text-blue-700 flex items-center transition-all duration-300 ease-in-out"
          >
            <FaArrowLeft className="mr-2" size={22} /> Back to Products
          </button>
          <div className="flex space-x-4">
            <button className="text-green-500 hover:text-green-700 flex items-center transition-all duration-300 ease-in-out">
              <FaEdit size={20} /> <span className="ml-2" onClick={()=>navigate("edit")}>Edit</span>
            </button>
            <button className="text-red-500 hover:text-red-700 flex items-center transition-all duration-300 ease-in-out">
              <FaTrash size={20} /> <span className="ml-2">Delete</span>
            </button>
          </div>
        </div>

        {/* Product Section */}
        <div className="md:flex md:space-x-10">
          {/* Image Gallery */}
          <div className="md:w-1/2">
            <img
              src={`${API_BASE_URL}/${mainImage}`}
              alt={product.name}
              className="w-full h-80 object-cover rounded-xl shadow-md mb-4 transition-all duration-300 hover:scale-105"
            />
            <div className="flex space-x-4  ">
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
          </div>

          {/* Product Information */}
          <div className="md:w-1/2 mt-6 md:mt-0 space-y-6">
            <h2 className="text-4xl   text-gray-900 font-extralight">{product.productName}</h2>
            <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">
              {product.category}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">{product.description}</p>

            {/* Price and Stock */}
            <div className="flex items-center space-x-6">
              <span className="text-3xl font-semibold text-green-600">
                Rs {product.price.toFixed(2)}
              </span>
              <span
                className={`text-sm font-medium px-4 py-2 rounded-full ${
                  product.stock > 0 ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                }`}
              >
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            {/* Additional Info */}
            <div className="mt-4 space-y-2 text-gray-600">
              <p>
                <strong>Product ID:</strong> {product.productId}
              </p>
              <p>
                <strong>Brand:</strong> {product.brand || "No Brand"}
              </p>
              <p>
                <strong>Material:</strong> {product.material || "Not Specified"}
              </p>
            </div>

            {/* Dimensions */}
            {product.dimensions && (
              <div className="mt-6 space-y-2">
                <h4 className="text-lg font-semibold text-gray-900">Dimensions</h4>
                <p className="text-gray-600">
                  <strong>Height:</strong> {product.dimensions.height} cm
                </p>
                <p className="text-gray-600">
                  <strong>Width:</strong> {product.dimensions.width} cm
                </p>
                <p className="text-gray-600">
                  <strong>Length:</strong> {product.dimensions.length} cm
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;

