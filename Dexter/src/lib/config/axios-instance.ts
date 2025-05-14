import axios from "axios";
import { API_URL } from "../../constants";
import { useAuthStore } from "../store/global.store";

// public endpoints
export const publicApi = axios.create({
  headers: { "Content-Type": "application/json" },
  baseURL: API_URL,
});

// protected endpoints

export const authApi = axios.create({
  headers: { "Content-Type": "application/json" },
  baseURL: API_URL,
  withCredentials: true,
});

authApi.interceptors.request.use(async (config) => {
  // get access token from storage
  const { accessToken: token } = useAuthStore.getState();
  const accessToken = token || localStorage.getItem("accessToken") || "";

  // console.log({accessToken});

  const refreshToken = localStorage.getItem("refresh_token") ?? "";

  if (accessToken) {
    const { expiresIn } = useAuthStore.getState();
    const tokenHasExpired = new Date().getTime() >= Number(expiresIn);

    if (tokenHasExpired) {
      // Log the user out
      localStorage.removeItem("accessToken");

      // Redirect to login page
      window.location.href = "/login"; // Adjust the path as necessary
      return Promise.reject("Token expired, user logged out");
    } else {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
  }

  return config;
});

// authApi.interceptors.response.use(({ headers }) => {
//   const newAccessToken = headers["x-access-token"];
//   if (newAccessToken) localStorage.setItem("access_token", newAccessToken);
// });
