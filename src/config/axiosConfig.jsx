import axios from 'axios';
export const API_BASE_URL = import.meta.env.VITE_BACKEND_API_URL;

// Create an instance of Axios
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add token to headers if present
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Get token from localStorage or other storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle token refresh or errors here
    if (error.response.status === 401) {
      // Unauthorized, possibly token expired
      // Handle token refresh or redirection here
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
