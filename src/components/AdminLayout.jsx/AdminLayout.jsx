import React from "react";
import Sidebar from "./AdminMenubar";
import Navbar from "./AdminNavbar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="p-6 bg-gray-100 flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;



