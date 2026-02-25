import axios from "axios";
import { ENV } from "../config/env";

export const apiClient = axios.create({
  baseURL: ENV.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Optional: Interceptors
apiClient.interceptors.request.use((config) => {
  // attach token if needed
  // const token = localStorage.getItem("token");
  // if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // central error handling
    console.error("API Error:", error);
    return Promise.reject(error);
  },
);
