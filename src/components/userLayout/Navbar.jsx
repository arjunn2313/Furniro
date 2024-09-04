import React, { useState } from "react";
import {
  FaUser,
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white   border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-8 w-auto"
              src="assets\Meubel House_Logos-05.png"
              alt="Logo"
            />
            <span className="text-xl font-bold ml-2">Furniro</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 text-sm">
            <Link to="/Furniro" className="text-gray-700 hover:text-black font-medium">
              Home
            </Link>
            <Link
              to="/shop"
              className="text-gray-700 hover:text-black font-medium"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-black font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-black font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link to="" className="text-gray-700 hover:text-black">
              <FaUser className="h-5 w-5" />
            </Link>
            {/* <Link to="" className="text-gray-700 hover:text-black">
              <FaSearch className="h-5 w-5" />
            </Link> */}
            <Link to="" className="text-gray-700 hover:text-black">
              <FaHeart className="h-5 w-5" />
            </Link>
            <Link to="" className="text-gray-700 hover:text-black">
              <FaShoppingCart className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-6">
            <Link to="" className="text-gray-700 hover:text-black">
              <FaShoppingCart className="h-5 w-5" />
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-black focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden bg-yellow-50 border-t border-gray-200 shadow-lg`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 text-center">
          <Link
            to="/"
            className="block py-2 text-gray-700 hover:text-black hover:bg-gray-200 rounded-md"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="block py-2 text-gray-700 hover:text-black hover:bg-gray-200 rounded-md"
            onClick={toggleMobileMenu}
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="block py-2 text-gray-700 hover:text-black hover:bg-gray-200 rounded-md"
            onClick={toggleMobileMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block py-2 text-gray-700 hover:text-black hover:bg-gray-200 rounded-md"
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
