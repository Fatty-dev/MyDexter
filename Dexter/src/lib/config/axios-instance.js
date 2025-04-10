import axios from "axios";
import { API_URL } from "../../constants";

// public endpoints
export const publicApi = axios.create({
  headers: { "Content-Type": "application/json" },
  baseURL: API_URL,
  withCredentials: true,
});

// protected endpoints
export const authApi = axios.create({
  headers: { "Content-Type": "application/json" },
  baseURL: API_URL,
  withCredentials: true,
});

// Request interceptor to add the access token
authApi.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem("accessToken") || "";
  if (accessToken) config.headers["Authorization"] = `Bearer ${accessToken}`;
  return config;
});

// Response interceptor to handle token expiration
authApi.interceptors.response.use(
  (response) => {
    // Check for a new access token in the response headers
    const newAccessToken = response.headers["x-access-token"];
    if (newAccessToken) {
      localStorage.setItem("accessToken", newAccessToken);
    }
    return response;
  },
  (error) => {
    // Handle 401 Unauthorized error
    if (error.response && error.response.status === 401) {
      // Redirect to login page
      window.location.href = "/login"; // Adjust the path as needed
    }
    return Promise.reject(error);
  }
);