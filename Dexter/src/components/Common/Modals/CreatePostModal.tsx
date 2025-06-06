import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import { FiEdit } from "react-icons/fi";
import { motion } from "framer-motion";
import { FiRefreshCcw } from "react-icons/fi";
import { toast } from "sonner";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { popupVariant } from "../../../lib/utils";
import { authApi } from "../../../lib/config/axios-instance";

const variant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

interface CreatePostModalProps {
  setCreatePostModalOpen: (open: boolean) => void;
}

interface Inputs {
  title: string;
  prompt: string;
}

const CreatePostModal = ({ setCreatePostModalOpen }: CreatePostModalProps) => {
  const [keywords, setKeywords] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [enteredKeyword, setEnteredKeyword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({});
  const values = watch(["title", "prompt"]);

  const navigate = useNavigate();

  const handleAddKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value.trim();

    if (e.key === "Enter" && value) {
      e.preventDefault(); // Prevent form submission
      if (!keywords.includes(value)) {
        setKeywords((prev) => [...prev, value]);
      }
      (e.target as HTMLInputElement).value = "";
      setEnteredKeyword(true); // Set to true when Enter is pressed
    }
  };

  const handleRemoveKeyword = (index: number) => {
    setKeywords((prev) => prev.filter((_, i) => i !== index));
  };

  const rewrite = async () => {
    if (!keywords.length) {
      toast.error("Please add at least one keyword before rewriting.");
      return;
    }

    try {
      setLoading(true);

      const response = await authApi.post(`/blog/generate-title`, {
        mainKeyword: keywords,
      });

      // Check the correct response structure
      if (response?.data?.success && response.data.data?.value) {
        toast.success("Title rewritten successfully!");
        const newTitle = response.data.data.value; // Get the new title
        setTitle(newTitle); // Update the title state
        setValue("title", newTitle); // Update react-hook-form field
      } else {
        toast.error("Failed to generate a new title. Please try again.");
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data: any) => {
    if (!enteredKeyword) {
      toast.error("Please press Enter after adding keywords.");
      return; // Prevent submission if Enter was not pressed
    }

    setLoading(true);
    try {
      // Join keywords into a string
      const keywordsString = keywords.join(",");
      navigate(
        `/dashboard/blog-loading?keywords=${encodeURIComponent(
          keywordsString
        )}&title=${encodeURIComponent(data.title)}&prompt=${encodeURIComponent(
          data.prompt
        )}`
      );
    } catch (error: any) {
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
      className="flex justify-center items-center fixed inset-0 z-[2000] bg-black bg-opacity-50"
    >
      <motion.div
        {...popupVariant}
        className="bg-white md:w-[60%] lg:w-[50%] w-[90%] p-6 rounded-lg shadow-lg relative"
      >
        {/* Header Section */}
        <div className="mb-4">
          <h1 className="text-lg font-semibold text-gray-800">
            Start Your Post
          </h1>
          <IoMdClose
            className="absolute w-6 h-6 text-gray-600 cursor-pointer top-4 right-4"
            onClick={() => setCreatePostModalOpen(false)}
          />
          <p className="mt-2 text-sm text-gray-500">
            Fill in your details to create an AI-powered blog post effortlessly.
          </p>
        </div>

        <hr className="mb-4" />

        {/* Form Section */}
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          {/* Keywords Input */}
          <div className="border rounded-md p-2 flex flex-wrap items-center gap-2">
            <label className="text-sm font-medium text-gray-600">
              Main Keywords
            </label>
            {keywords.map((keyword, index) => (
              <div
                key={index}
                className="flex items-center px-2 py-1 text-sm bg-gray-200 rounded-md"
              >
                <span>{keyword}</span>
                <IoMdClose
                  className="ml-2 text-gray-600 cursor-pointer"
                  onClick={() => handleRemoveKeyword(index)}
                />
              </div>
            ))}
            <input
              type="text"
              placeholder="Type a keyword and press Enter"
              onKeyDown={handleAddKeyword}
              className="flex-1 p-2 text-sm text-gray-800 focus:outline-none"
            />
          </div>

          {/* Title Input */}
          <div>
            <label className="flex justify-between text-sm font-medium text-gray-600">
              <span>Title</span>
              <span
                className={`text-xs ${
                  values[0]?.length > 100 ? "text-red-600" : "text-gray-400"
                }`}
              >
                {values[0]?.length || 0}/100
              </span>
            </label>
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Enter post title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-3 pr-20 rounded-md w-full text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2"
                onClick={rewrite}
              >
                <FiRefreshCcw className="text-gray-600 cursor-pointer hover:text-gray-800" />
                <span className="text-gray-600 text-sm cursor-pointer hover:text-gray-800">
                  Rewrite
                </span>
              </div>
            </div>

            {errors.title && (
              <p className="mt-1 text-xs text-red-600">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Prompt Input */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              AI Prompt
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
              <p className="mt-1 text-xs text-red-600">
                {errors.prompt.message}
              </p>
            )}
          </div>

          <hr className="mt-4" />

          {/* Footer Section */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-0 justify-between mt-4">
            <p className="text-sm text-gray-500 md:w-[50%]">
              Click 'Generate' to create an editable post. Results may vary.
            </p>
            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition rounded-md bg-primary hover:bg-indigo-500 disabled:bg-gray-400"
              disabled={loading}
            >
              {loading ? (
                <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin" />
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
