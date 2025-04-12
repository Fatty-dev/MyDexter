import axios from "axios";
import { API_URL } from "../../constants";
import { jwtDecode } from "jwt-decode";

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

authApi.interceptors.request.use(async (config) => {
  // get access token from storage
  const accessToken = localStorage.getItem("accessToken") || "";
  

  // console.log({accessToken});

  // const refreshToken = localStorage.getItem("refresh_token") ?? "";
  // if (accessToken) {
  //   // console.log({ accessToken })
  //   const tokenContent = jwtDecode(accessToken)
  //   const tokenHasExpired = new Date().getTime() > tokenContent?.exp;
  //   if (tokenHasExpired) console.log(tokenContent, new Date().getTime(), tokenContent?.exp)



  //   config.headers["Authorization"] = `Bearer ${accessToken}`
  // };

  authApi.interceptors.request.use(async (config) => {
    const accessToken = localStorage.getItem("accessToken") || "";
  
    if (accessToken) {
      const tokenContent = jwtDecode(accessToken);
      const tokenHasExpired = new Date().getTime() >= tokenContent?.exp * 1000; // Convert exp to milliseconds
  
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
  // config.headers["X-refresh"] = `${refreshToken}`;

  return config;
});

// authApi.interceptors.response.use(({ headers }) => {
//   const newAccessToken = headers["x-access-token"];
//   if (newAccessToken) localStorage.setItem("access_token", newAccessToken);
// });
