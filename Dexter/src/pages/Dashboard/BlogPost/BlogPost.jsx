import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { PiCopySimpleBold } from "react-icons/pi";
import { HiOutlineChevronRight } from "react-icons/hi";
import { RiHome6Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import container from "../../../assets/container.svg";
import Guy from "../../../assets/Guy.svg";
import PostHistory from "./PostHistory";
import { HiOutlineChevronDown } from "react-icons/hi2";
import CreatePostModal from "../../../components/Common/Modals/CreatePostModal";
import { useUserPlatformSiteStore } from "@/lib/store/global.store";
import toast from "react-hot-toast";
import { authApi } from "@/lib/config/axios-instance";

const BlogData = [
  {
    id: 1,
    title: "The Ultimate Guide to Laundry: Tips, Tricks, and Hacks",
    description:
      "Laundry is a chore that many of us dread, but it doesn’t have to be a hassle. With the right tips and tricks, you can make laundry day a breeze.",
    image: Guy,
    footerTitle: "The Ultimate Guide to Laundry: Tips, Tricks, and Hacks",
    footerTags: "Laundry Job, Cleaning, Clothing",
    status: "Ready for publishing",
  },
  {
    id: 2,
    title: "Maximizing Your Workspace: Tips for Productivity",
    description:
      "Your workspace plays a huge role in your productivity. Learn how to optimize it with simple changes.",
    image: Guy,
    footerTitle: "Maximizing Your Workspace: Tips for Productivity",
    footerTags: "Work, Office, Organization",
    status: "Work in progress",
  },
  {
    id: 3,
    title: "Healthy Living: 5 Habits to Boost Your Wellness",
    description:
      "Adopting small healthy habits can have a big impact on your overall wellness. Start today!",
    image: Guy,
    footerTitle: "Healthy Living: 5 Habits to Boost Your Wellness",
    footerTags: "Health, Wellness, Lifestyle",
    status: "Published",
  },
];

const BlogPost = () => {
  const navigate = useNavigate();
  const [createPostModalOpen, setCreatePostModalOpen] = React.useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { sites } = useUserPlatformSiteStore();

  const fetchBlogPosts = async () => {
    setIsLoading(true);
    try {
      const response = await authApi.get(`/blog`);

      setBlogPosts(response.data.data.blogPost);
    } catch (error) {
      console.log({ error });
      toast.error("Error fetching posts.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const handleBulkArticle = () => {
    navigate("/dashboard/bulk-article");
  };
  return (
    <div className="w-full max-w-[90%] mx-auto mt-6">
    <div className="flex items-center gap-2 mb-6">
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
        <div className="flex items-center px-2 py-1 gap-1 border rounded-full">
          <img src={container} alt="" className="w-5" />
          <p className="text-sm md:text-md">Wordpress</p>
        </div>
  
        {sites["wordpress"]?.url && (
         <button
         className="text-primary flex items-center gap-2"
         onClick={() => setTimeout(() => window.open(sites["wordpress"].url, "_blank"), 100)}
       >
            {sites["wordpress"].url}
            <HiOutlineChevronDown className="text-[#667085]" />
          </button>
        )}
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
          onClick={() => setCreatePostModalOpen(true)}
        >
          Start Your 1-Click Post
          <FaRegEdit />
        </button>
      </div>
    </div>
  
    {/* Blog Post Grid */}
    {isLoading ? (
      <div className="p-4 mb-6 bg-white rounded-lg shadow">Blog post Loading....</div>
    ) : blogPosts.length === 0 ? (
      <div>No blogpost</div>
    ):(
    <div className="p-4 mb-6 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-gray-700">Automate Your Blog Posts</h3>
        <button className="px-4 py-2 text-gray-700 bg-transparent border rounded-lg">
          Auto Scheduler
        </button>
      </div>
      <div className="grid mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((blog) => (
          <div
            key={blog.id}
            className="relative overflow-hidden transition-shadow duration-300 bg-white border rounded-lg shadow-lg group hover:shadow-xl"
          >
            {/* Card Header */}
            <div className="bg-[#E4E4F2] p-4">
              <h3 className="text-black font-semibold flex items-center justify-center gap-2">
                <FaRegEdit size={22} className="text-[#94A3B8]" />
                Blog post
              </h3>
            </div>
  
            {/* Card Content */}
            <div className="px-4 pt-4">
              <h4 className="font-bold text-gray-800 text-md">
                {blog.title}
              </h4>
              <p className="mt-1 line-clamp-3 text-sm text-gray-600">
                {blog.content}
              </p>
              <img
                src={blog.image || Guy}
                alt="Blog"
                className="object-cover w-full h-32 mt-4"
              />
            </div>
  
            {/* Footer Metadata */}
            <div className="p-4 border-t">
              <h5 className="font-medium text-gray-800">{blog.title}</h5>
              <p className="mt-1 text-sm text-gray-500">
                {blog.Keywords || "No Keyword"}
              </p>
              <div className="flex items-center gap-2 mt-2 text-sm">
                <div className="px-2 py-1 text-yellow-600 bg-yellow-100 rounded-full">
                  {blog.status}
                </div>
              </div>
            </div>
  
            {/* Hover Buttons */}
            <div className="absolute inset-0 flex flex-col items-center justify-end gap-2 p-4 transition-opacity duration-300 bg-white opacity-0 pointer-events-none bg-opacity-80 group-hover:opacity-100 group-hover:pointer-events-auto">
              <button
                className="flex items-center justify-center w-full gap-2 px-4 py-2 text-white rounded bg-primary"
                onClick={() => console.log("Start Post for", blog.id)}
              >
                Start Your 1-Click Post
                <FaRegEdit />
              </button>
              <button
                className="bg-white w-full border flex items-center gap-2 justify-center text-[#475467] px-4 py-2 rounded"
                onClick={() => console.log("Bulk Article for", blog.id)}
              >
                Create Articles in Bulk
                <PiCopySimpleBold />
              </button>
            </div>
          </div>
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

export default BlogPost;
