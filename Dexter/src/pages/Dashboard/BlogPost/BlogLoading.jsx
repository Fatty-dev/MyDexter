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
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Loader />
        <h2 className="text-[#344054]">Dexter is writing....</h2>
        <p className="text-[#6B7280]">
          Dexter may take up to five minutes to write a blog post. Please come
          back later and contact support if an issue arises.
        </p>
      </div>
    </div>
  );
};

export default BlogLoading;
