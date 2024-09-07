import React from 'react';

const AdminLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Admin Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input 
              type="email" 
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500" 
              placeholder="admin@example.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input 
              type="password" 
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500" 
              placeholder="********"
            />
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="/signup" className="text-blue-500 hover:underline">
            Don’t have an account? Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
