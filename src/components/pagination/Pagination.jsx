import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbersToShow = 5;

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  // Generate a range of pages to display
  const getPageNumbers = () => {
    const pageNumbers = [];

    // Always show the first page
    if (currentPage > 1) {
      pageNumbers.push(1);
    }

    // Determine where to start and end the range
    const startPage = Math.max(2, currentPage - Math.floor(pageNumbersToShow / 2));
    const endPage = Math.min(totalPages - 1, currentPage + Math.floor(pageNumbersToShow / 2));

    if (startPage > 2) {
      pageNumbers.push('...');
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (endPage < totalPages - 1) {
      pageNumbers.push('...');
    }

    // Always show the last page
    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-6">
      {/* Previous Button */}
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className={`p-2 rounded-full transition-all ${
          currentPage === 1
            ? "text-gray-400 cursor-not-allowed"
            : "text-blue-500 hover:bg-blue-100 hover:shadow-lg"
        }`}
      >
        <FaArrowLeft />
      </button>

      {/* Page Numbers */}
      <div className="flex space-x-1">
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => page !== '...' && handlePageClick(page)}
            className={`p-2 w-10 h-10 rounded-full transition-all text-sm font-semibold flex items-center justify-center ${
              currentPage === page
                ? "bg-blue-500 text-white shadow-md"
                : "text-gray-600 hover:bg-blue-100 hover:text-blue-500"
            } ${page === '...' ? 'cursor-default' : ''}`}
            disabled={page === '...'}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-full transition-all ${
          currentPage === totalPages
            ? "text-gray-400 cursor-not-allowed"
            : "text-blue-500 hover:bg-blue-100 hover:shadow-lg"
        }`}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
