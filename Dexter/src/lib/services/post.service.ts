import { authApi } from "../config/axios-instance";
import { ApiResponse } from "../types/api";
import { BlogPost } from "../types/blog";

export const getBlogPosts = async () => {
  try {
    const {
      data: {
        data: { blogPost },
      },
    } = await authApi.get<ApiResponse<{ blogPost: BlogPost[] }>>("/blog");
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
      data: { data },
    } = await authApi.get<ApiResponse<BlogPost>>(
      `/blog/single?blogPostId=${id}`
    );
    return data;
  } catch (error: any) {
    console.error("Error fetching blog post by id:", error);
    throw new Error(
      error.response?.data?.message || "Failed to fetch blog post by id"
    );
  }
};

export const getBlogHistory = async () => {
  try {
    const { data } = await authApi.get<ApiResponse<{ blogPost: BlogPost[] }>>(
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
