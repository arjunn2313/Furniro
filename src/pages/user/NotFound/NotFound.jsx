import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-gray-800">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Page Not Found</h2>
        <p className="text-gray-500 mt-2">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/Furniro/"
          className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
