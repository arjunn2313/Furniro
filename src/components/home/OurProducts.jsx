import React from "react";
import ProductCard from "../Product/ProductCard";

export default function OurProducts() {
  const products = [
    {
      id: 1,
      name: "Elegant Dining Table",
      category: "Furniture",
      actualPrice: 499.99,
      discountPrice: 349.99,
      image: "https://m.media-amazon.com/images/I/61GEMhmXf6L.jpg",
    },
    {
      id: 2,
      name: "Modern Sofa Set",
      category: "Living Room",
      actualPrice: 899.99,
      discountPrice: 699.99,
      image:
        "https://www.khaticraft.com/cdn/shop/files/Set_161734069_2048px_lbfgt.png?v=1696399943&width=2048",
    },
    {
      id: 3,
      name: "Comfortable Office Chair",
      category: "Office Furniture",
      actualPrice: 299.99,
      discountPrice: 199.99,
      image: "https://4.imimg.com/data4/TU/BH/MY-9608629/sofa-set-500x500.png",
    },
    {
      id: 4,
      name: "Luxury Bed Frame",
      category: "Bedroom",
      actualPrice: 749.99,
      discountPrice: 599.99,
      image:
        "https://cityfurnish.com/blog/wp-content/uploads/2023/04/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg-min.jpg",
    },
    {
      id: 5,
      name: "Stylish Coffee Table",
      category: "Living Room",
      actualPrice: 149.99,
      discountPrice: 99.99,
      image:
        "https://images.jdmagicbox.com/quickquotes/images_main/bedroom-furniture-2188738683-c9jug7nf.jpg",
    },
    {
      id: 6,
      name: "Classic Bookshelf",
      category: "Office Furniture",
      actualPrice: 199.99,
      discountPrice: 149.99,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/4/298313334/MH/HU/ZH/7813591/modular-bedroom-furniture-500x500.jpg",
    },
  ];

  return (
    <section className="container mx-auto p-5 sm:p-10 mt-5">
      {/* Title */}
      <div className="text-center space-y-1 md:space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Products</h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 sm:pt-10">
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
    </section>
  );
}
