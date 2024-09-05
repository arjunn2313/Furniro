import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen">
      <div className="p-6">
        <h1 className="text-3xl font-bold">Furniro</h1>
      </div>
      <nav className="mt-10">
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <a href="#">Dashboard</a>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <a href="#">Calendar</a>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <a href="#">Tickets</a>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <a href="#">File Manager</a>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <a href="#">Kanban Board</a>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <a href="#">Project</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

  