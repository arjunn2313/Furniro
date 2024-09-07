import axiosInstance from "../config/axiosConfig"; // Make sure axiosInstance is configured properly

export const createUser = async (data) => {
  try {
    const response = await axiosInstance.post("/api/user/create", data);

    return response.data;
  } catch (error) {
    console.error(
      "Error creating user:",
      error.response ? error.response.data : error.message
    );

    throw new Error(
      error.response
        ? error.response.data.message
        : "An error occurred while creating the user."
    );
  }
};
