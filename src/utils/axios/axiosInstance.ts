import axios from "axios";

// Creating an Axios instance with a base URL and default headers
const AxiosInstance = axios.create({
  baseURL: "http://localhost:3001", // Base URL for the API
  headers: {
    "Content-Type": "application/json", // Default content type
    // Add more default headers if needed
  },
});

export default AxiosInstance;
