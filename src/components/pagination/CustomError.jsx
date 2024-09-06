import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorMessage = ({ message }) => {
  return (
    <div className="flex items-center justify-center p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
      <FaExclamationTriangle className="mr-2 text-red-500" />
      <span>{message || "Something went wrong. Please try again later."}</span>
    </div>
  );
};

export default ErrorMessage;
