import React from 'react';
import { FaTrophy, FaShieldAlt, FaShippingFast, FaHeadset } from 'react-icons/fa';

const Features = () => {
  return (
    <div className="bg-[#FAF3EA] py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        {/* High Quality */}
        <div className="flex flex-col items-center">
          <FaTrophy className="text-4xl text-gray-800" />
          <h3 className="font-bold text-lg mt-4">High Quality</h3>
          <p className="text-gray-600">crafted from top materials</p>
        </div>

        {/* Warranty Protection */}
        <div className="flex flex-col items-center">
          <FaShieldAlt className="text-4xl text-gray-800" />
          <h3 className="font-bold text-lg mt-4">Warranty Protection</h3>
          <p className="text-gray-600">Over 2 years</p>
        </div>

        {/* Free Shipping */}
        <div className="flex flex-col items-center">
          <FaShippingFast className="text-4xl text-gray-800" />
          <h3 className="font-bold text-lg mt-4">Free Shipping</h3>
          <p className="text-gray-600">Order over 150 $</p>
        </div>

        {/* 24/7 Support */}
        <div className="flex flex-col items-center">
          <FaHeadset className="text-4xl text-gray-800" />
          <h3 className="font-bold text-lg mt-4">24 / 7 Support</h3>
          <p className="text-gray-600">Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
