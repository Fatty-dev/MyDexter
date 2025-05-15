import { authApi } from "../config/axios-instance";
import { ApiResponse } from "../types/api";
import { ChatHistory, ChatThread } from "../types/chat";

export const getChatHistory = async () => {
  try {
    const response = await authApi.get<ApiResponse<ChatHistory[]>>(
      "/chat/history"
    );

    return response.data.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "User not found");
  }
};

export const getChatDetail = async (chatId: string) => {
  try {
    const response = await authApi.get<ApiResponse<ChatThread>>(
      `/chat/detail?chatId=${chatId}`
    );

    return response.data.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Chat not found");
  }
};
