import React from "react";

const FuniroFurnitureGallery = () => {
  const images = [
    {
      src: "https://cdn.shopify.com/s/files/1/0650/2190/3084/products/612342bdeedd580064d16451_Monash_20in_20Licoriche_203_4.jpg?v=1655614175",
      alt: "Image 1",
      span: "row-span-2", // For taller images
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2yH15tQmVOtOi2zN2iRq_qiiGV3aizyoCGr5bXKfiXUIpB02ZhQVXtwavPaWvtU3AoOY&usqp=CAU",
      alt: "Image 2",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCwjbiBjKLt43LHpAhpGom99M-fDitUn3_zeY9MxbLCB47E8v6O-YD0-xV7jD5r1XbfhM&usqp=CAU",
      alt: "Image 3",
    },
    {
      src: "https://images.woodenstreet.de/image/data/store%20page/new/borivali/5.jpg",
      alt: "Image 4",
    },
    {
      src: "https://images.woodenstreet.de/image/data/store%20page/new/joka%20kolkata/11.jpg",
      alt: "Image 5",
      span: "col-span-2", // For wider images
    },
    {
      src: "https://images.woodenstreet.de/image/data/store%20page/new/rampura/12.jpg",
      alt: "Image 6",
    },
    // {
    //   src: "https://res.cloudinary.com/purnesh/image/upload/f_auto/v1613645764/181613645763382.jpg",
    //   alt: "Image 7",
    // },
    // {
    //   src: "https://ii1.pepperfry.com/media/catalog/studio/108/1695721643_bistpur_web.jpg",
    //   alt: "Image 8",
    // },
  ];

  return (
    <div className="px-4 py-8">
      <h2 className="text-center text-3xl font-bold mb-6 py-3 font-serif">
        Share your setup with{" "}
        <span className="text-yellow-500 font-mono">#FuniroFurniture</span>
      </h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative ${image.span ? image.span : ""}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FuniroFurnitureGallery;
