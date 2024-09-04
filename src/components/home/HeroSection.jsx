import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen"
      style={{
        backgroundImage:
          'url("assets/scandinavian-interior-mockup-wall-decal-background 1@2x.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="hidden md:block md:w-1/2 p-6 "></div>

          <div className="w-full md:w-1/2 p-6 md:p-10  bg-yellow-50 rounded-md">
            <h2 className="text-xs uppercase text-gray-600 tracking-wide ">
              New Arrival
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 my-4">
              Discover Our New Collection
            </h1>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg uppercase font-semibold tracking-wide">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
