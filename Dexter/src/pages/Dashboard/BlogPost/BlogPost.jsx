import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { PiCopySimpleBold } from "react-icons/pi";
import { HiOutlineChevronRight } from "react-icons/hi";
import { RiHome6Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import Guy from "../../../assets/Guy.svg";
import PostHistory from "./PostHistory";

const BlogPost = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <RiHome6Line className="text-gray-500" />
        <h1 className="text-sm text-gray-500">Assistant</h1>
        <HiOutlineChevronRight className="text-gray-500" />
        <p className="text-sm text-gray-500">Blog Posts</p>
      </div>
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold">Blog posts</h1>
      </div>
      <hr className="my-2" />
      <div className="flex items-center justify-between px-4 py-2 my-4 text-white rounded-lg bg-primary">
        <p className="mt-1 text-sm font-medium">
          API connected successfully! You now have access to powerful blog creation tools.
        </p>
        <MdClose size={22} />
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-[#344054] flex items-center justify-between p-4 text-white rounded-md mb-6">
        <div className="w-[50%]">
          <h2 className="text-xl font-bold">Create & Optimize Your Content with Dexter!</h2>
          <p className="mt-1 text-sm">
            Create, edit, and schedule content effortlessly while tracking performance—all from a
            single, intuitive dashboard. <span className="font-semibold text-primary">Learn more</span>
          </p>
        </div>
        <div className="mt-4 flex gap-4 whitespace-nowrap w-[43%]">
          <button className="bg-white flex items-center gap-2 text-[#475467] px-4 py-2 rounded">
            Create Articles in Bulk
            <PiCopySimpleBold />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-white rounded bg-primary">
            Start Your 1-Click Post
            <FaRegEdit />
          </button>
        </div>
      </div>

      {/* Blog Post Grid */}
      <div className="p-4 mb-6 bg-white rounded-lg shadow">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-gray-700">Automate Your Blog Posts</h3>
          <button className="px-4 py-2 text-gray-700 bg-transparent border rounded-lg">
            Auto Scheduler
          </button>
        </div>
        <div className="relative overflow-hidden transition-shadow duration-300 bg-white border rounded-lg shadow-lg group w-80 hover:shadow-xl">
          {/* Card Header */}
          <div className="bg-[#E4E4F2] p-4">
            <h3 className="text-[black] font-semibold flex items-center justify-center gap-2">
              <FaRegEdit size={22} className="text-[#94A3B8]" />
              Blog post
            </h3>
          </div>

          {/* Card Content */}
          <div className="px-4 pt-4">
            <h4 className="font-bold text-gray-800 text-md">
              The Ultimate Guide to Laundry: Tips, Tricks, and Hacks
            </h4>
            <p className="mt-1 text-xs text-gray-600">
              Laundry is a chore that many of us dread, but it doesn’t have to be a
              hassle. With the right tips and tricks, you can make laundry day a
              breeze.
            </p>
            <img
      src={Guy}
      alt="Blog"
      className="object-cover w-full h-32 mt-4 "
    />
          </div>

          {/* Footer Metadata */}
          <div className="p-4 border-t">
            <h5 className="font-medium text-gray-800">
              The Ultimate Guide to Laundry: Tips, Tricks, and Hacks
            </h5>
            <p className="mt-1 text-sm text-gray-500">Laundry Job, Cleaning, Clothing</p>
            <div className="flex items-center gap-2 mt-2 text-sm">
              <div className="px-2 py-1 text-yellow-600 bg-yellow-100 rounded-full">
                Ready for publishing
              </div>
            </div>
          </div>

          {/* Hover Buttons */}
          <div className="absolute inset-0 flex flex-col items-center justify-end gap-2 p-4 transition-opacity duration-300 bg-white opacity-0 pointer-events-none bg-opacity-80 group-hover:opacity-100 group-hover:pointer-events-auto">
            <button className="flex items-center justify-center w-full gap-2 px-4 py-2 text-white rounded bg-primary">
              Start Your 1-Click Post
              <FaRegEdit />
            </button>
            <button className="bg-white w-full border flex items-center gap-2 justify-center text-[#475467] px-4 py-2 rounded">
              Create Articles in Bulk
              <PiCopySimpleBold />
            </button>
          </div>
        </div>
      </div>

      {/* Post History */}
    <PostHistory/>
      
    </div>
  );
};

export default BlogPost;