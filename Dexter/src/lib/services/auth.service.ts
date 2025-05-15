import { authApi, publicApi } from "../config/axios-instance";
import { ApiResponse, AuthResponse, User } from "../types/api";

interface AuthInputs {
  email: string;
  password: string;
}

export const registerUser = async (body: AuthInputs): Promise<void> => {
  try {
    const response = await publicApi.post("/auth/register", body);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Registration failed");
  }
};

export const login = async (body: AuthInputs) => {
  try {
    const response = await publicApi.post<ApiResponse<AuthResponse>>(
      "/auth/login",
      body
    );

    return response.data.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Login failed");
  }
};

export const getUser = async () => {
  try {
    const response = await authApi.get<ApiResponse<User>>("/settings/user/me");

    return response.data.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "User not found");
  }
};
