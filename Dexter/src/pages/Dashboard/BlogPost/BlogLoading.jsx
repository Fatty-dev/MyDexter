import React, { useEffect, useMemo, useState } from "react";
import Loader from "../../../components/Common/Loader/Loader";
import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router-dom";
import { authApi } from "../../../lib/config/axios-instance";

const BlogLoading = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const inputs = useMemo(
    () => ({
      keywords: searchParams.get("keywords") || [],
      title: searchParams.get("title") || "",
      prompt: searchParams.get("prompt") || "",
    }),
    [searchParams]
  );

  const makeRequest = async () => {
    try {
      const {
        data: { data },
      } = await authApi.post("/blog/generate-single-article", {
        mainKeyword: inputs.keywords.split(","),
        title: inputs.title,
        aiPrompt: inputs.prompt,
      });

      toast.success("Post created successfully!");
      navigate(`/dashboard/blog-post/${data._id || crypto.randomUUID()}`);
    } catch (err) {
      console.log(err);
      navigate(`/dashboard/blog-post`);
      toast.error("couldn't generate posts");
    } finally {
    }
  };

  useEffect(() => {
    makeRequest();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
  <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6">
    <Loader />
    <h2 className="text-[#344054] text-lg sm:text-xl lg:text-2xl text-center">
      Dexter is writing....
    </h2>
    <p className="text-[#6B7280] text-sm sm:text-base lg:text-lg text-center md:max-w-xl">
      Dexter may take up to five minutes to write a blog post. Please come back
      later and contact support if an issue arises.
    </p>
  </div>
</div>

  );
};

export default BlogLoading;
