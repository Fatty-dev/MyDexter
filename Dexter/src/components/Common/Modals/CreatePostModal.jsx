import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useForm, Controller } from "react-hook-form";
import { FiEdit } from "react-icons/fi";
import { motion } from "framer-motion";
import { popupVariant } from "../../../lib/utils";
import { authApi } from "../../../lib/config/axios-instance";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const variant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const CreatePostModal = ({ setCreatePostModalOpen }) => {
  const [keywords, setKeywords] = useState([]);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({});
  const values = watch(["title", "prompt"]);

  const navigate = useNavigate();

  const handleAddKeyword = (e) => {
    const value = e.target.value.trim();

    if (e.key === "Enter" && value) {
      setKeywords((prev) => [...prev, value]);
      e.target.value = "";
    }
  };

  const handleRemoveKeyword = (index) => {
    setKeywords((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // const response = await authApi.post("/blog/generate-single-article", {
      //   mainKeyword: keywords.join(", "),
      //   title: data.title,
      //   aiPrompt: data.prompt,
      // });

      // toast.success("Post created successfully!");

      navigate(
        `/dashboard/blog-loading?keywords=${keywords}&title=${data.title}&prompt=${data.prompt}`
      );
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Failed to create post. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      {...variant}
      className="flex justify-center items-center fixed inset-0 z-[50] bg-black bg-opacity-50"
    >
      <motion.div
        {...popupVariant}
        className="bg-white md:w-[60%] lg:w-[45%] w-[90%] p-6 rounded-lg shadow-lg relative"
      >
        {/* Header Section */}
        <div className="mb-4">
          <h1 className="font-semibold text-lg text-gray-800">
            Start Your Post
          </h1>
          <IoMdClose
            className="cursor-pointer w-6 h-6 text-gray-600 absolute top-4 right-4"
            onClick={() => setCreatePostModalOpen(false)}
          />
          <p className="text-sm text-gray-500 mt-2">
            Fill in your details to create an AI-powered blog post effortlessly.
          </p>
        </div>

        <hr className="mb-4" />

        {/* Form Section */}
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          {/* Keywords Input */}
          <div>
            <label className="font-medium text-sm text-gray-600">
              Main Keywords
            </label>
            <div className="flex flex-wrap gap-2 mt-2">
              {keywords.map((keyword, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-200 text-sm px-2  py-1 rounded-md"
                >
                  <span>{keyword}</span>
                  <IoMdClose
                    className="ml-2 cursor-pointer text-gray-600"
                    onClick={() => handleRemoveKeyword(index)}
                  />
                </div>
              ))}
            </div>
            <input
              type="text"
              placeholder="Type a keyword and press Enter"
              onKeyDown={handleAddKeyword}
              className="border mt-2 p-3 rounded-md w-full text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Title Input */}
          <div>
            <label className="flex justify-between font-medium text-sm text-gray-600">
              <span>Title</span>
              <span
                className={`text-xs ${
                  values[0]?.length > 100 ? "text-red-600" : "text-gray-400"
                }`}
              >
                {values[0]?.length || 0}/100
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter post title"
              {...register("title", {
                required: "Title is required.",
                maxLength: {
                  value: 100,
                  message: "Title should not exceed 100 characters.",
                },
              })}
              className={`border mt-2 p-3 rounded-md w-full text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 ${
                errors.title ? "border-red-600" : "border-gray-300"
              }`}
            />
            {errors.title && (
              <p className="text-xs text-red-600 mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Prompt Input */}
          <div>
            <label className="font-medium text-sm text-gray-600">
              AI Prompt (Optional)
            </label>
            <textarea
              placeholder="Add custom instructions to tailor your post."
              {...register("prompt", {
                maxLength: {
                  value: 300,
                  message: "Prompt should not exceed 300 characters.",
                },
              })}
              className={`border mt-2 p-3 rounded-md w-full text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 h-24 resize-none ${
                errors.prompt ? "border-red-600" : "border-gray-300"
              }`}
            ></textarea>
            {errors.prompt && (
              <p className="text-xs text-red-600 mt-1">
                {errors.prompt.message}
              </p>
            )}
          </div>

          <hr className="mt-4" />

          {/* Footer Section */}
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-gray-500 w-[50%]">
              Click 'Generate' to create an editable post. Results may vary.
            </p>
            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-2 rounded-md text-white bg-primary hover:bg-indigo-500 transition disabled:bg-gray-400 text-sm font-medium"
              disabled={loading}
            >
              {loading ? (
                <AiOutlineLoading3Quarters className="animate-spin w-5 h-5" />
              ) : (
                <>
                  <span>Generate Your Blog Post</span>
                  <FiEdit className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default CreatePostModal;
