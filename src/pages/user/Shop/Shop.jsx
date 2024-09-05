import React from "react";
import BackgroundSection from "../../../components/background/BackgroundSection";
import { FiFilter, FiGrid, FiList } from 'react-icons/fi';
import ProductCard from "../../../components/Product/ProductCard";
import { products } from "../../../components/home/OurProducts";
import Features from "../../../components/Product/FeaturesCard";

export default function Shop() {
  return (
    <section>
      <BackgroundSection
        backgroundImage="assets/Rectangle 1.png"
        title="Shop"
        breadcrumb={[
          { label: "Home", active: false },
          { label: "Shop", active: true },
        ]}
      />

      {/* Filter and Sorting Controls */}
      <div className="relative z-10 bg-[#F9F1E7] py-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
          {/* Filter and View Controls */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 flex items-center">
              <FiFilter className="h-6 w-6" />
              <span className="ml-2">Filter</span>
            </button>

            <div className="hidden sm:flex space-x-2">
              <button className="p-2 bg-white rounded-md shadow hover:bg-gray-200">
                <FiGrid className="h-6 w-6" />
              </button>
              <button className="p-2 bg-white rounded-md shadow hover:bg-gray-200">
                <FiList className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Pagination Info */}
          <div className="text-gray-700 mt-4 sm:mt-0">
            Showing 1-16 of 32 results
          </div>

          {/* Items per Page and Sorting */}
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <div className="flex items-center space-x-2">
              <span>Show</span>
              <input
                type="number"
                defaultValue={16}
                className="w-12 p-2 bg-white rounded-md shadow text-center"
              />
            </div>
            <div className="flex items-center space-x-2">
              <span>Sort by</span>
              <select className="p-2 bg-white rounded-md shadow">
                <option>Default</option>
                {/* Add more sorting options as needed */}
              </select>
            </div>
          </div>
        </div>
      </div>

       {/* product section */}
      <section className="container mx-auto p-5 sm:p-10 mt-5">
     
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  sm:pt-10">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            category={product.category}
            actualPrice={product.actualPrice}
            discountPrice={product.discountPrice}
            image={product.image}
          />
        ))}
      </div>

      {/* Load more */}

      <div className="text-center py-5 mt-5">
        <button className="px-6 py-3 border border-yellow-500 text-yellow-500 rounded-lg shadow-md hover:bg-yellow-50 hover:shadow-lg transition duration-300 ease-in-out transform hover:translate-y-[-2px] hover:scale-105 active:translate-y-1">
          Show More
        </button>
      </div>
    </section>

    <Features/>
    </section>
  );
}
