import React, { useState } from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { fetchProducts } from "../../../api/productApi";
import Pagination from "../../../components/pagination/Pagination";
import LoadingPlaceholder from "../../../components/pagination/LoadingPlaceholder";
import ErrorMessage from "../../../components/pagination/CustomError";
import ConfirmationModal from "../../../components/pagination/ConformationModal";
// Assuming you have a pagination component

const ProductList = () => {
  const [page, setPage] = useState(1);  
  const [limit, setLimit] = useState(10);  
  const [filters, setFilters] = useState({}); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    data: productsData,
    loading,
    error,
    updateParams,
  } = useFetch(fetchProducts, {
    page,
    limit,
    filters,
  });

  const navigate = useNavigate();

  if (loading) return <LoadingPlaceholder/>
  if (error) return  <ErrorMessage/>;

  const handlePageChange = (newPage) => {
    setPage(newPage);
    updateParams({ page: newPage });
  };

  const handleFilterChange = (filter) => {
    setFilters(filter);
    updateParams({ filters: filter });
  };

  const handleDeleteProduct = () =>{

  }

  return (
    <div className="min-h-screen bg-gray-100">
       <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDeleteProduct}
        message="Are you sure you want to delete this product?"
      />
      <div className="bg-white p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl mb-6 text-gray-800 font-semibold">
            Product List
          </h2>
          <button
            onClick={() => navigate("add")}
            className="border border-yellow-500 p-2 text-sm text-yellow-500 hover:bg-yellow-50 rounded-md"
          >
            Add Product
          </button>
        </div>
       {/* filter */}
        <div className="bg-gray-50 p-4 mb-4 rounded-md shadow-md">
          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="text"
              onChange={(e) =>
                handleFilterChange({ productName: e.target.value })
              }
              placeholder="Filter by name"
              className="p-2 border rounded-md w-full"
            />
            <select
              // value={filterCategory}
              // onChange={(e) => setFilterCategory(e.target.value)}
              className="p-2 border rounded-md w-full"
            >
              <option value="">Filter by category</option>
              <option value="Furniture">Furniture</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
            </select>
            <select
              // value={filterStock}
              // onChange={(e) => setFilterStock(e.target.value)}
              className="p-2 border rounded-md w-full"
            >
              <option value="">Filter by stock status</option>
              <option value="inStock">In Stock</option>
              <option value="outOfStock">Out of Stock</option>
            </select>
          </div>
        </div>
        {/* Table for large screens */}
        <div className="hidden md:block">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-gray-600 font-medium">
                  Sl No
                </th>
                <th className="px-4 py-2 text-left text-gray-600 font-medium">
                  Product Name
                </th>
                <th className="px-4 py-2 text-left text-gray-600 font-medium">
                  Category
                </th>
                <th className="px-4 py-2 text-left text-gray-600 font-medium">
                  Price
                </th>
                <th className="px-4 py-2 text-left text-gray-600 font-medium">
                  Stock
                </th>
                <th className="px-4 py-2 text-gray-600 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {productsData?.products.map((product, index) => (
                <tr
                  key={product.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-5 border-t text-gray-700">
                    {index + 1}
                  </td>
                  <td className="px-4 py-5 border-t text-gray-700">
                    {product.productName}
                  </td>
                  <td className="px-4 py-5 border-t text-gray-700">
                    {product.category}
                  </td>
                  <td className="px-4 py-5 border-t text-gray-700">
                    {product.price}
                  </td>
                  <td className="px-4 py-5 border-t text-gray-700">
                    {product.stock}
                  </td>
                  <td className="px-4 py-5 border-t">
                    <div className="flex space-x-4 justify-center items-center">
                      <button
                        className="text-blue-500 hover:text-blue-700"
                        onClick={() => navigate(`${product.productId}`)}
                      >
                        <FaEye size={18} />
                      </button>
                      <button className="text-green-500 hover:text-green-700">
                        <FaEdit size={18}  onClick={() => navigate(`${product.productId}/edit`)}/>
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <FaTrash size={18}  onClick={() => setIsModalOpen(true)}/>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination Component */}
        <Pagination
          totalItems={productsData?.totalItems || 0}
          itemsPerPage={limit}
          currentPage={page}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ProductList;
