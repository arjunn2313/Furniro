import axiosInstance from "../config/axiosConfig";

export const fetchProducts = async (page = 1, limit = 10, filters = {}) => {
  try {
    const params = { page, limit, ...filters }; // Add pagination and filter parameters to the request
    const response = await axiosInstance.get("/api/products/get", { params });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};

export const fetchProductById = (productId) => {
  return axiosInstance.get(`/api/products/single/${productId}`);
};

export const updateProductById = async (productId, formData) => {
  try {
    const response = await axiosInstance.put(
      `/api/products/update/${productId}`,
      formData
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to update product");
  }
};
