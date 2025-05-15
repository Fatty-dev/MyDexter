import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { CgMenuRight } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { PiCopySimpleBold } from "react-icons/pi";
import { HiOutlineChevronRight } from "react-icons/hi";
import { RiHome6Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import container from "../../../assets/container.svg";
import PostHistory from "./PostHistory";
import { HiOutlineChevronDown } from "react-icons/hi2";
import CreatePostModal from "../../../components/Common/Modals/CreatePostModal";
import {
  useAuthStore,
  useUserPlatformSiteStore,
} from "@/lib/store/global.store";
import { toast } from "sonner";
import Sidebar from "@/components/Dashboardcomp/Sidebar";
import { useQuery } from "@tanstack/react-query";
import { getBlogPosts } from "@/lib/services/blog.service";
import BlogPostCard from "./BlogPostCard";

const BlogPost = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const [createPostModalOpen, setCreatePostModalOpen] = React.useState(false);

  const { sites } = useUserPlatformSiteStore();

  const { accessToken } = useAuthStore();

  const { data: blogPosts, isPending: isLoading } = useQuery({
    queryKey: ["blogPosts"],
    queryFn: getBlogPosts,
  });

  // const handleBulkArticle = () => {
  //   navigate("/dashboard/bulk-article");
  // };

  const handleLoginCheck = () => {
    if (!accessToken) {
      toast.error("Please log in to use this feature!");
      return false;
    }
    return true;
  };

  const handleBulkArticle = () => {
    if (handleLoginCheck()) {
      navigate("/dashboard/bulk-article");
    }
  };

  const handleStartPost = () => {
    if (handleLoginCheck()) {
      setCreatePostModalOpen(true);
    }
  };
  return (
    <div className="w-full max-w-[90%] mx-auto mt-6">
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
      <div className=" ml-8 md:ml-0 flex items-center gap-2 mb-6">
        <RiHome6Line className="text-gray-500" />
        <h1 className="text-xs md:text-sm text-gray-500">Assistant</h1>
        <HiOutlineChevronRight className="text-gray-500" />
        <p className="text-xs md:text-sm text-gray-500">Blog Posts</p>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#131c2e] tracking-wide">
          Blog posts
        </h1>

        <div className="flex items-center gap-4 md:gap-6">
          {Object.keys(sites).map((platform) => {
            const siteData = sites[platform] as any;

            if (platform === "shopify") {
              const storeName = siteData.storeName; // Get the store name
              return (
                <div className="flex items-center gap-1 " key={platform}>
                  <div className="px-3 py-1 flex items-center gap-2 border rounded-full">
                    <img src={container} alt="" />
                    <p className="text-sm md:text-md">{platform}</p>
                  </div>

                  <button
                    className="text-primary flex items-center gap-2"
                    onClick={() =>
                      setTimeout(
                        () => window.open(`https://${storeName}`, "_blank"),
                        100
                      )
                    }
                  >
                    {storeName}
                    <HiOutlineChevronDown className="text-[#667085]" />
                  </button>
                </div>
              );
            } else if (platform === "wordpress") {
              const wordpressUrl = siteData.url; // Get the WordPress site URL
              return (
                <div
                  className="flex items-center px-2 py-1 gap-1 border rounded-full"
                  key={platform}
                >
                  <p className="text-sm md:text-md">
                    Connected Site: Wordpress
                  </p>
                  <button
                    className="text-primary flex items-center gap-2"
                    onClick={() =>
                      setTimeout(() => window.open(wordpressUrl, "_blank"), 100)
                    }
                  >
                    {wordpressUrl}
                    <HiOutlineChevronDown className="text-[#667085]" />
                  </button>
                </div>
              );
            }
            return null; // Return null if no connected site is found
          })}
        </div>
      </div>
      <hr className="my-2" />
      <div className="flex items-center justify-between px-4 py-2 my-4 text-white rounded-lg bg-primary">
        <p className="mt-1 text-xs md:text-sm font-medium max-md:w-[90%]">
          API connected successfully! You now have access to powerful blog
          creation tools.
        </p>
        <MdClose size={22} />
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-[#344054] flex flex-col lg:flex-row gap-4 p-4 items-start lg:items-center justify-between text-white rounded-md mb-6">
        <div>
          <h2 className="text-lg md:text-xl font-bold">
            Create & Optimize Your Content with Dexter!
          </h2>
          <p className="mt-2 w-full md:w-[80%] text-sm">
            Create, edit, and schedule content effortlessly while tracking
            performance—all from a single, intuitive dashboard.{" "}
            <span className="font-semibold text-primary">Learn more</span>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row lg:gap-4 gap-3 whitespace-nowrap">
          <button
            className="bg-white flex items-center py-2 px-4 gap-2 text-[#475467] rounded"
            onClick={handleBulkArticle}
          >
            Create Articles in Bulk
            <PiCopySimpleBold />
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 text-white rounded bg-primary"
            onClick={handleStartPost}
          >
            Start Your 1-Click Post
            <FaRegEdit />
          </button>
        </div>
      </div>

      {/* Blog Post Grid */}
      {isLoading ? (
        <div className="grid mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {Array.from({ length: 3 }).map((_, index) => (
            <BlogPostSkeleton key={index} />
          ))}
        </div>
      ) : blogPosts?.length === 0 ? (
        <div className="p-4 mb-6 bg-white rounded-lg shadow ">No blogpost</div>
      ) : (
        <div className="p-4 mb-6 bg-white rounded-lg shadow">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-gray-700">
              Automate Your Blog Posts
            </h3>
            <button className="px-4 py-2 text-gray-700 bg-transparent border rounded-lg">
              Auto Scheduler
            </button>
          </div>
          <div className="grid mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts?.map((blog: any) => (
              <BlogPostCard key={blog._id} blog={blog} />
            ))}
          </div>
        </div>
      )}

      {/* Post History */}
      <PostHistory />

      {/* Modal */}
      {createPostModalOpen && (
        <CreatePostModal setCreatePostModalOpen={setCreatePostModalOpen} />
      )}
    </div>
  );
};

export const BlogPostSkeleton = () => {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <div className="flex items-center space-x-2 mb-2">
        <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse" />
        <div className="w-24 h-4 bg-gray-300 rounded animate-pulse" />
      </div>

      <div className="h-5 w-3/4 bg-gray-300 rounded mb-1 animate-pulse" />
      <div className="h-4 w-full bg-gray-200 rounded mb-2 animate-pulse" />
      <div className="h-4 w-11/12 bg-gray-200 rounded mb-2 animate-pulse" />
      <div className="h-4 w-10/12 bg-gray-200 rounded mb-4 animate-pulse" />

      <div className="w-full h-40 bg-gray-300 rounded-lg mb-4 animate-pulse" />

      <div className="h-5 w-3/4 bg-gray-300 rounded mb-1 animate-pulse" />
      <div className="h-4 w-24 bg-gray-200 rounded mb-4 animate-pulse" />

      <div className="h-8 w-28 bg-yellow-200 text-yellow-600 text-center text-sm font-semibold rounded-lg animate-pulse" />
    </div>
  );
};

export default BlogPost;
