import React, { useState } from "react";
import {
  FaEdit,
  FaSave,
  FaShoppingCart,
  FaHeart,
  FaBoxOpen,
} from "react-icons/fa";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    location: "New York, USA",
    phone: "123-456-7890",
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
  });

  const [orderHistory, setOrderHistory] = useState([
    {
      id: "001",
      date: "2024-08-10",
      total: "$1200",
      status: "Delivered",
      items: 5,
    },
    {
      id: "002",
      date: "2024-08-15",
      total: "$450",
      status: "Shipped",
      items: 2,
    },
    {
      id: "003",
      date: "2024-09-01",
      total: "$780",
      status: "Processing",
      items: 3,
    },
  ]);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in userInfo.address) {
      setUserInfo({
        ...userInfo,
        address: { ...userInfo.address, [name]: value },
      });
    } else {
      setUserInfo({ ...userInfo, [name]: value });
    }
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 py-5">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
      <div className="flex items-center mb-6 md:mb-0">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="h-24 w-24 rounded-full shadow-md border-4 border-yellow-400"
        />
        <div className="ml-6">
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              className="text-2xl md:text-3xl font-bold text-gray-800 focus:outline-none border-b-2 border-yellow-500 w-24 sm:w-full"
            />
          ) : (
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              {userInfo.name}
            </h2>
          )}
          <p className="text-gray-600">{userInfo.location}</p>
        </div>
      </div>
      <button
        onClick={isEditing ? handleSave : handleEditClick}
        className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition flex items-center"
      >
        {isEditing ? (
          <>
            <FaSave className="mr-2" /> Save
          </>
        ) : (
          <>
            <FaEdit className="mr-2" /> Edit
          </>
        )}
      </button>
    </div>

        {/* Profile Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
                className="w-full bg-gray-100 p-4 rounded-lg border focus:outline-none focus:border-yellow-500"
              />
            ) : (
              <p className="text-gray-600">{userInfo.email}</p>
            )}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={userInfo.phone}
                onChange={handleChange}
                className="w-full bg-gray-100 p-4 rounded-lg border focus:outline-none focus:border-yellow-500"
              />
            ) : (
              <p className="text-gray-600">{userInfo.phone}</p>
            )}
          </div>
        </div>

        {/* Address Details */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Address</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Street</h4>
              {isEditing ? (
                <input
                  type="text"
                  name="street"
                  value={userInfo.address.street}
                  onChange={handleChange}
                  className="w-full bg-gray-100 p-4 rounded-lg border focus:outline-none focus:border-yellow-500"
                />
              ) : (
                <p className="text-gray-600">{userInfo.address.street}</p>
              )}
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">City</h4>
              {isEditing ? (
                <input
                  type="text"
                  name="city"
                  value={userInfo.address.city}
                  onChange={handleChange}
                  className="w-full bg-gray-100 p-4 rounded-lg border focus:outline-none focus:border-yellow-500"
                />
              ) : (
                <p className="text-gray-600">{userInfo.address.city}</p>
              )}
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">State</h4>
              {isEditing ? (
                <input
                  type="text"
                  name="state"
                  value={userInfo.address.state}
                  onChange={handleChange}
                  className="w-full bg-gray-100 p-4 rounded-lg border focus:outline-none focus:border-yellow-500"
                />
              ) : (
                <p className="text-gray-600">{userInfo.address.state}</p>
              )}
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">ZIP Code</h4>
              {isEditing ? (
                <input
                  type="text"
                  name="zip"
                  value={userInfo.address.zip}
                  onChange={handleChange}
                  className="w-full bg-gray-100 p-4 rounded-lg border focus:outline-none focus:border-yellow-500"
                />
              ) : (
                <p className="text-gray-600">{userInfo.address.zip}</p>
              )}
            </div>
          </div>
        </div>

        {/* Order History */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            <FaBoxOpen className="inline mr-2" />
            Order History
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Items
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orderHistory.map((order) => (
                  <tr key={order.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order.total}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.items}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`inline-flex px-3 py-1 text-xs font-medium leading-5 rounded-full ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-800"
                            : order.status === "Shipped"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition flex items-center">
            <FaShoppingCart className="mr-2" /> View Cart
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition flex items-center">
            <FaHeart className="mr-2" /> Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
