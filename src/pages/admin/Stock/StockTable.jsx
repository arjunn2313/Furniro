import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const StockTable = () => {
  // Sample stock data
  const stockData = [
    {
      id: "101",
      productName: "Modern Wooden Chair",
      sku: "MWC-001",
      currentStock: 50,
      minStock: 10,
    },
    {
      id: "102",
      productName: "Glass Coffee Table",
      sku: "GCT-002",
      currentStock: 8,
      minStock: 5,
    },
    {
      id: "103",
      productName: "Office Desk Lamp",
      sku: "ODL-003",
      currentStock: 15,
      minStock: 5,
    },
  ];

  // Function to dynamically apply stock level colors
  const getStockClass = (currentStock, minStock) => {
    return currentStock <= minStock
      ? "text-red-600 bg-red-100"
      : "text-green-600 bg-green-100";
  };

  return (
    <div className="min-h-screen  ">
      <div className="bg-white p-8  ">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Stock List</h2>

        {/* Table for large screens */}
        <div className="hidden md:block">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-gray-600 font-medium">Product</th>
                <th className="px-4 py-2 text-left text-gray-600 font-medium">SKU</th>
                <th className="px-4 py-2 text-left text-gray-600 font-medium">Current Stock</th>
                <th className="px-4 py-2 text-left text-gray-600 font-medium">Min Stock</th>
                <th className="px-4 py-2 text-gray-600 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {stockData.map((stock) => (
                <tr key={stock.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 border-t text-gray-700">{stock.productName}</td>
                  <td className="px-4 py-3 border-t text-gray-700">{stock.sku}</td>
                  <td className="px-4 py-3 border-t">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${getStockClass(
                        stock.currentStock,
                        stock.minStock
                      )}`}
                    >
                      {stock.currentStock}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-t text-gray-700">{stock.minStock}</td>
                  <td className="px-4 py-3 border-t">
                    <div className="flex space-x-4 justify-center">
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
          {stockData.map((stock) => (
            <div key={stock.id} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-semibold text-gray-800">{stock.productName}</h3>
              <p className="text-gray-600">SKU: {stock.sku}</p>
              <p>
                Current Stock:{" "}
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${getStockClass(
                    stock.currentStock,
                    stock.minStock
                  )}`}
                >
                  {stock.currentStock}
                </span>
              </p>
              <p className="text-gray-600">Min Stock: {stock.minStock}</p>
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

export default StockTable;
