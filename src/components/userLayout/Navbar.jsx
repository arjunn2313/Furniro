import React, { useState } from "react";
import {
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white border-b-2 border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-auto"
                src="assets/Meubel House_Logos-05.png"
                alt="Logo"
              />

              <span className="text-xl font-bold ml-2 text-gray-800">
                Furniro
              </span>
            </div>
          </Link>
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 text-sm">
            <Link
              to="/"
              className={`${
                isActive("/")
                  ? "text-black border-b-2 border-yellow-500"
                  : "text-gray-700 hover:text-black"
              } font-medium pb-1`}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`${
                isActive("/shop")
                  ? "text-black border-b-2 border-yellow-500"
                  : "text-gray-700 hover:text-black"
              } font-medium pb-1`}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className={`${
                isActive("/about")
                  ? "text-black border-b-2 border-yellow-500"
                  : "text-gray-700 hover:text-black"
              } font-medium pb-1`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive("/contact")
                  ? "text-black border-b-2 border-yellow-500"
                  : "text-gray-700 hover:text-black"
              } font-medium pb-1`}
            >
              Contact
            </Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link to="/profile" className="text-gray-700 hover:text-black">
              <FaUser className="h-5 w-5" />
            </Link>
            <Link to="/wishlist" className="text-gray-700 hover:text-black">
              <FaHeart className="h-5 w-5" />
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-black">
              <FaShoppingCart className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-6">
            <Link to="/cart" className="text-gray-700 hover:text-black">
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
            to="/Furniro/"
            className={`block py-2 rounded-md ${
              isActive("/Furniro")
                ? "bg-gray-300 text-black"
                : "text-gray-700 hover:text-black hover:bg-gray-200"
            }`}
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/Furniro/shop"
            className={`block py-2 rounded-md ${
              isActive("/shop")
                ? "bg-gray-300 text-black"
                : "text-gray-700 hover:text-black hover:bg-gray-200"
            }`}
            onClick={toggleMobileMenu}
          >
            Shop
          </Link>
          <Link
            to="/Furniro/about"
            className={`block py-2 rounded-md ${
              isActive("/about")
                ? "bg-gray-300 text-black"
                : "text-gray-700 hover:text-black hover:bg-gray-200"
            }`}
            onClick={toggleMobileMenu}
          >
            About
          </Link>
          <Link
            to="/Furniro/contact"
            className={`block py-2 rounded-md ${
              isActive("/contact")
                ? "bg-gray-300 text-black"
                : "text-gray-700 hover:text-black hover:bg-gray-200"
            }`}
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
