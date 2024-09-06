import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Button */}
      {/* <div className="md:hidden p-4 bg-gray-800 text-white flex justify-between items-center">
        <h1 className="text-2xl font-bold">Furniro</h1>
        <button onClick={toggleDrawer}>
          <FaBars size={24} />
        </button>
      </div> */}

      {/* Sidebar */}
      <aside
        className={`sm:flex md:w-64 bg-gray-800 text-white min-h-screen md:block ${
          isOpen ? "block" : "hidden"
        } md:relative fixed inset-y-0 left-0 transform md:translate-x-0 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <h1 className="text-3xl font-bold">Furniro</h1>
        </div>
        <nav className="mt-10">
          <ul>
            <li className="p-4 hover:bg-gray-700">
              <NavLink
                to="/admin/dashboard"
                className={({ isActive }) =>
                  isActive ? "text-yellow-500 font-bold" : "text-white"
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <NavLink
                to="/admin/product"
                className={({ isActive }) =>
                  isActive ? "text-yellow-500 font-bold" : "text-white"
                }
              >
                Product
              </NavLink>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <NavLink
                to="/admin/stock"
                className={({ isActive }) =>
                  isActive ? "text-yellow-500 font-bold" : "text-white"
                }
              >
                Stock
              </NavLink>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <NavLink
                to="/admin/orders"
                className={({ isActive }) =>
                  isActive ? "text-yellow-500 font-bold" : "text-white"
                }
              >
                Orders
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Background Overlay for Mobile */}
      {/* {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={toggleDrawer}
        ></div>
      )} */}
    </>
  );
};

export default Sidebar;


  