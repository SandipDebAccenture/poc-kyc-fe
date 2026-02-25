import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Request Interceptors
apiClient.interceptors.request.use((config) => {
  const auth_token = localStorage.getItem("auth_token");
  if (auth_token) config.headers.Authorization = `Bearer ${auth_token}`;
  return config;
});

// Response Interceptors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error); // FIXME: Remove
    return Promise.reject(error);
  },
);
