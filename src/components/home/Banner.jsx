import React, { useState } from "react";
import { FaArrowLeft,FaArrowRight} from "react-icons/fa";
const RoomInspirationSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slider content (replace with your actual images and details)
  const slides = [
    {
      title: "Inner Peace",
      roomType: "Bed Room",
      image: "assets/Rectangle 24.png",
    },
    {
      title: "Calm Dining",
      roomType: "Dining Room",
      image: "assets/Rectangle 25.png",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-yellow-50 py-10">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Section */}
          <div className="space-y-6">
            <h2 className="text-5xl font-extrabold text-gray-800">
              50+ Beautiful Room Inspirations
            </h2>
            <p className="text-lg text-gray-600">
              Our designers have created numerous beautiful room prototypes to
              inspire you.
            </p>
            <button className="mt-4 px-8 py-3 bg-yellow-500 text-white font-semibold rounded-lg transition duration-300 hover:bg-yellow-600">
              Explore More
            </button>
          </div>

          {/* Right Side - Image Section */}
          <div className="relative">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-96 rounded-xl shadow-md transition duration-500 ease-in-out transform hover:scale-105"
            />
            <div className="absolute bottom-5 left-5 bg-white p-4 rounded-xl shadow-md">
              <p className="text-sm text-gray-500">{slides[currentSlide].roomType}</p>
              <h3 className="text-2xl font-semibold text-gray-800">
                {slides[currentSlide].title}
              </h3>
            </div>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none transform -translate-y-1/2"
            >
             <FaArrowLeft/>
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none transform -translate-y-1/2"
            >
               <FaArrowRight/>
            </button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full ${
                currentSlide === index ? "bg-yellow-500" : "bg-gray-300"
              } transition duration-300`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomInspirationSlider;
