import React from "react";

const LoadingPlaceholder = () => {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-gray-300 rounded"></div>
      <div className="h-8 bg-gray-300 rounded"></div>
      <div className="h-8 bg-gray-300 rounded"></div>
      <div className="h-8 bg-gray-300 rounded"></div>
      <div className="h-8 bg-gray-300 rounded"></div>
    </div>
  );
};

export default LoadingPlaceholder;
