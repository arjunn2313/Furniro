import React, { useState } from 'react';

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="container mx-auto mt-8">
      {/* Tab Headers */}
      <div className="flex border-b">
        <button
          className={`py-2 px-4 text-sm font-semibold ${
            activeTab === 'description' ? 'border-b-2 border-black' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </button>
        <button
          className={`py-2 px-4 text-sm font-semibold ${
            activeTab === 'additionalInfo' ? 'border-b-2 border-black' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('additionalInfo')}
        >
          Additional Information
        </button>
        <button
          className={`py-2 px-4 text-sm font-semibold ${
            activeTab === 'reviews' ? 'border-b-2 border-black' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews [5]
        </button>
      </div>

      {/* Tab Content */}
      <div className="py-6">
        {activeTab === 'description' && (
          <div>
            <p className="text-gray-600">
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
            </p>
            <p className="text-gray-600 mt-4">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero...
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <img
                src="https://via.placeholder.com/200x100"
                alt="product"
                className="w-full sm:w-[200px] h-auto rounded-lg"
              />
              <img
                src="https://via.placeholder.com/200x100"
                alt="product"
                className="w-full sm:w-[200px] h-auto rounded-lg"
              />
            </div>
          </div>
        )}
        {activeTab === 'additionalInfo' && (
          <div>
            <p className="text-gray-600">
              The Kilburn is compatible with all modern devices and is crafted with a durable build quality that matches its sleek and stylish appearance. Perfect for any environment.
            </p>
          </div>
        )}
        {activeTab === 'reviews' && (
          <div>
            <p className="text-gray-600">"This product is amazing!" - Customer 1</p>
            <p className="text-gray-600 mt-2">"Best sound quality!" - Customer 2</p>
            <p className="text-gray-600 mt-2">"Highly recommended." - Customer 3</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;

