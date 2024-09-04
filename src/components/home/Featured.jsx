import React from "react";

export default function Featured() {
  const items = [
    {
      img: "assets/Mask Group (3).png",
      title: "Dining",
    },
    {
      img: "assets/Image-living room.png",
      title: "Living",
    },
    {
      img: "assets/Mask Group (4).png",
      title: "Bedroom",
    },
  ];

  return (
    <section className="container mx-auto p-10">
      {/* Title */}
      <div className="text-center space-y-1 md:space-y-3">
        <h2 className="text-3xl font-bold text-gray-800 font-serif">Browse The Range</h2>
        <p className="text-gray-600 text-sm md:text-base">
          Explore our curated selection of stylish and functional furniture for every room.
        </p>
      </div>

      {/* List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full   object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-center py-4 text-white transition-opacity duration-300 ease-in-out hover:opacity-90">
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
