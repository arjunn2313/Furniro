import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const OrdersTable = () => {
  // Sample order data
  const orders = [
    {
      id: "001",
      customerName: "John Doe",
      totalAmount: "$200",
      status: "Completed",
      date: "2024-09-01",
    },
    {
      id: "002",
      customerName: "Jane Smith",
      totalAmount: "$150",
      status: "Pending",
      date: "2024-09-02",
    },
    {
      id: "003",
      customerName: "Alice Johnson",
      totalAmount: "$300",
      status: "Cancelled",
      date: "2024-09-03",
    },
  ];

  // Function to dynamically apply status colors
  const getStatusClass = (status) => {
    switch (status) {
      case "Completed":
        return "text-green-600 bg-green-100";
      case "Pending":
        return "text-yellow-600 bg-yellow-100";
      case "Cancelled":
        return "text-red-600 bg-red-100";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen    ">
      <div className="bg-white p-8  ">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Order List</h2>
        
        {/* Table for large screens */}
        <div className="hidden md:block">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-gray-600 font-medium">Order ID</th>
                <th className="px-4 py-2 text-left text-gray-600 font-medium">Customer</th>
                <th className="px-4 py-2 text-left text-gray-600 font-medium">Total</th>
                <th className="px-4 py-2 text-left text-gray-600 font-medium">Status</th>
                <th className="px-4 py-2 text-left text-gray-600 font-medium">Date</th>
                <th className="px-4 py-2 text-gray-600 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 border-t text-gray-700">{order.id}</td>
                  <td className="px-4 py-3 border-t text-gray-700">{order.customerName}</td>
                  <td className="px-4 py-3 border-t text-gray-700">{order.totalAmount}</td>
                  <td className="px-4 py-3 border-t">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusClass(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-t text-gray-700">{order.date}</td>
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
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-semibold text-gray-800">Order ID: {order.id}</h3>
              <p className="text-gray-600">Customer: {order.customerName}</p>
              <p className="text-gray-600">Total: {order.totalAmount}</p>
              <p className="text-gray-600">Date: {order.date}</p>
              <p>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusClass(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
              </p>
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

export default OrdersTable;
