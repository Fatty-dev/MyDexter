import { authApi } from "../config/axios-instance";
import { ApiResponse } from "../types/api";
import { Blog } from "../types/blog";

export const getBlogPosts = async () => {
  try {
    const {
      data: {
        data: { blogPost },
      },
    } = await authApi.get<ApiResponse<{ blogPost: Blog[] }>>("/blog");
    return blogPost;
  } catch (error: any) {
    console.error("Error fetching blog posts:", error);
    throw new Error(
      error.response?.data?.message || "Failed to fetch blog posts"
    );
  }
};

export const getBlogPostById = async (id: string) => {
  try {
    const {
      data: {
        data: { blogPost },
      },
    } = await authApi.get<ApiResponse<{ blogPost: Blog[] }>>(`/blog/${id}`);
    return blogPost;
  } catch (error: any) {
    console.error("Error fetching blog post by id:", error);
    throw new Error(
      error.response?.data?.message || "Failed to fetch blog post by id"
    );
  }
};

export const getBlogHistory = async () => {
  try {
    const { data } = await authApi.get<ApiResponse<{ blogPost: Blog[] }>>(
      "/blog/history"
    );
    return data;
  } catch (error: any) {
    console.error("Error fetching blog history:", error);
    throw new Error(
      error.response?.data?.message || "Failed to fetch blog history"
    );
  }
};
