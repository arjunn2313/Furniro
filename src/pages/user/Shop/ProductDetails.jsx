import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ProductTabs from "../../../components/Product/ProductTab";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("purple");

  const imageArray = [
    "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/best-furniture-for-your-home-2022-section-1.jpg",
    "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/best-furniture-for-your-home-2022-section-1.jpg",
    "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/best-furniture-for-your-home-2022-hero.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvHWQFjVsrwH0ZpauXAnRt2uNsBgwQgMdSxX906owyuC1_NKkm-svRVMwlMUAyzzx4v9s&usqp=CAU",
    "https://cdn-jfjhd.nitrocdn.com/rGWDwoTiykPotvCpEKcsYAIEKpLdmTSg/assets/images/optimized/rev-9310f44/glucksteinhome.com/wp-content/uploads/2021/07/AMA-small-spaces-1.jpg",
  ];

  const [imageIndx, setImageIndx] = useState(0);

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleThumbnailClick = (src) => {
    const newIndex = imageArray.indexOf(src);
    setImageIndx(newIndex);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-4 md:p-8">
        {/* Image Section */}
        <div className="flex flex-col items-start mb-4 md:mb-0">
          <div className="mb-4 border">
            <img
              src={imageArray[imageIndx]}
              alt="Furniture"
              className="3-[200px] h-[200px] sm:w-[500px] sm:h-[500px] object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="flex  gap-2">
            {/* Thumbnail Links */}
            {imageArray
              .filter((itm, indx) => indx !== imageIndx)
              .map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`thumbnail ${index}`}
                  className="w-16 h-16 rounded-lg shadow-md cursor-pointer"
                  onClick={() => handleThumbnailClick(src)}
                />
              ))}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-3xl font-semibold mb-2">Asgaard Sofa</h2>
          <p className="text-xl text-gray-500 mb-4">Rs. 250,000.00</p>

          {/* Ratings */}
          <div className="flex items-center mb-4">
            <div className="text-yellow-500">★★★★★</div>
            <span className="ml-2 text-sm text-gray-500">
              (5 Customer Reviews)
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-6">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a clear sound.
          </p>

          {/* Size Options */}
          <div className="mb-4">
            <p className="text-gray-700 font-medium mb-2">Size</p>
            <div className="flex space-x-2">
              {["L", "XL", "XS"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-lg ${
                    selectedSize === size
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Options */}
          <div className="mb-6">
            <p className="text-gray-700 font-medium mb-2">Color</p>
            <div className="flex space-x-2">
              {["purple", "black", "gold"].map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 border-gray-200 ${
                    selectedColor === color ? "border-yellow-500" : ""
                  }`}
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
          </div>

          {/* Quantity and Buttons */}
          <div className="flex items-center mb-6">
            <div className="flex items-center border rounded-lg overflow-hidden mr-4">
              <button
                className="p-2 text-gray-700 hover:bg-gray-200"
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 text-center border-none"
              />
              <button
                className="p-2 text-gray-700 hover:bg-gray-200"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg mr-2">
              Add To Cart
            </button>
            <button className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-2 rounded-lg">
              + Compare
            </button>
          </div>

          {/* SKU, Category, Tags */}
          <div className="mb-6 text-gray-700">
            <p>
              SKU: <span className="text-gray-500">SS001</span>
            </p>
            <p>
              Category: <span className="text-gray-500">Sofas</span>
            </p>
            <p>
              Tags:{" "}
              <span className="text-gray-500">Sofa, Chair, Home, Shop</span>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
      <ProductTabs />
    </>
  );
};

export default ProductPage;
