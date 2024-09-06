import React from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductList = () => {

  const navigate = useNavigate()
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Modern Sofa",
      price: "$450",
      stock: "12",
      category: "Furniture",
    },
    {
      id: 2,
      name: "Dining Table",
      price: "$700",
      stock: "8",
      category: "Furniture",
    },
    {
      id: 3,
      name: "Office Chair",
      price: "$120",
      stock: "25",
      category: "Office",
    },
    {
      id: 4,
      name: "Wall Art",
      price: "$80",
      stock: "30",
      category: "Decor",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 ">
      <div className="bg-white p-8  ">
        <div className="flex items-center justify-between">
        <h2 className="text-3xl  mb-6 text-gray-800 font-semibold">Product List</h2>
        <button onClick={()=>navigate("add")} className="border border-yellow-500 p-2 text-sm text-yellow-500 hover:bg-yellow-50 rounded-md">Add Product</button>
        </div>
        {/* Table for large screens */}
        <div className="hidden md:block">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-gray-600 font-medium">Product Name</th>
                <th className="px-4 py-2 text-left text-gray-600 font-medium">Category</th>
                <th className="px-4 py-2 text-left text-gray-600 font-medium">Price</th>
                <th className="px-4 py-2 text-left text-gray-600 font-medium">Stock</th>
                <th className="px-4 py-2 text-gray-600 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors ">
                  <td className="px-4 py-5 border-t text-gray-700">{product.name}</td>
                  <td className="px-4 py-5 border-t text-gray-700">{product.category}</td>
                  <td className="px-4 py-5 border-t text-gray-700">{product.price}</td>
                  <td className="px-4 py-5 border-t text-gray-700">{product.stock}</td>
                  <td className="px-4 py-5 border-t ">
                    <div className="flex space-x-4 justify-center items-center">
                      <button className="text-blue-500 hover:text-blue-700">
                        <FaEye size={18} />
                      </button>
                      <button className="text-green-500 hover:text-green-700">
                        <FaEdit size={18} />
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <FaTrash size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards for small screens */}
        <div className="md:hidden space-y-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600">Category: {product.category}</p>
              <p className="text-gray-600">Price: {product.price}</p>
              <p className="text-gray-600">Stock: {product.stock}</p>
              <div className="flex space-x-4 mt-3">
                <button className="text-blue-500 hover:text-blue-700">
                  <FaEye size={18} />
                </button>
                <button className="text-green-500 hover:text-green-700">
                  <FaEdit size={18} />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <FaTrash size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

