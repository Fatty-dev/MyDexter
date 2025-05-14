import React, { useEffect, useMemo, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { CgMenuRight } from "react-icons/cg";
import Loader from "../../../components/Common/Loader/Loader";
import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router-dom";
import { authApi } from "../../../lib/config/axios-instance";
import Sidebar from "@/components/Dashboardcomp/Sidebar";

const BlogLoading = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const [searchParams] = useSearchParams();
  const inputs = useMemo(
    () => ({
      keywords: searchParams.get("keywords")
        ? // @ts-ignore
          searchParams
            .get("keywords")
            .split(",")
            .map((k) => k.trim())
        : [],
      title: searchParams.get("title") || "",
      prompt: searchParams.get("prompt") || "",
    }),
    [searchParams]
  );

  const makeRequest = async () => {
    try {
      // Check if inputs.keywords is an array
      const keywords = Array.isArray(inputs.keywords) ? inputs.keywords : [];

      // Use flatMap to split each keyword string by comma and flatten the result
      const mainKeyword = keywords.flatMap((keyword) =>
        keyword.split(",").map((k) => k.trim())
      );

      // Log the keywords to the console
      console.log("Keywords being sent in the payload:", mainKeyword);

      const {
        data: { data },
      } = await authApi.post("/blog/generate-single-article", {
        mainKeyword: mainKeyword,
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
      {/* Hamburger Menu */}
      <div className="sm:block md:hidden absolute top-5 left-4 z-20">
        <button onClick={toggleSidebar} className="text-3xl text-gray-700">
          {isOpen ? <FiX size={22} /> : <CgMenuRight size={22} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 z-10 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}
      ></div>

      <div
        className={`fixed top-0 left-0 w-64 md:hidden bg-white h-full shadow-xl z-20 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar isOpen={isOpen} />
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6">
        <Loader />
        <h2 className="text-[#344054] text-lg sm:text-xl lg:text-2xl text-center">
          Dexter is writing....
        </h2>
        <p className="text-[#6B7280] text-sm sm:text-base lg:text-lg text-center md:max-w-xl">
          Dexter may take up to five minutes to write a blog post. Please come
          back later and contact support if an issue arises.
        </p>
      </div>
    </div>
  );
};

export default BlogLoading;
