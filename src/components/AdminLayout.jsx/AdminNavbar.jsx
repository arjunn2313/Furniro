import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <div className="flex items-center space-x-4">
        <input
          type="search"
          placeholder="Search"
          className="p-2 border border-gray-300 rounded-lg"
        />
        {/* <img
          src="https://via.placeholder.com/32"
          alt="Profile"
          className="rounded-full w-8 h-8"
        /> */}
      </div>
    </header>
  );
};

export default Navbar;

  
  