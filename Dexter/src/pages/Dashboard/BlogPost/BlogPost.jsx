import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { PiCopySimpleBold } from "react-icons/pi";
import { HiOutlineChevronRight } from "react-icons/hi";
import { RiHome6Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import Guy from "../../../assets/Guy.svg";

const BlogPost = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="mb-6 flex items-center gap-2">
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
      <div className="bg-primary flex items-center justify-between text-white px-4 py-2 rounded-lg my-4">
        <p className="mt-1 text-sm font-medium">
          API connected successfully! You now have access to powerful blog creation tools.
        </p>
        <MdClose size={22} />
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-[#344054] flex items-center justify-between p-4 text-white rounded-md mb-6">
        <div className="w-[50%]">
          <h2 className="text-xl font-bold">Create & Optimize Your Content with Dexter!</h2>
          <p className="text-sm mt-1">
            Create, edit, and schedule content effortlessly while tracking performance—all from a
            single, intuitive dashboard. <span className="text-primary font-semibold">Learn more</span>
          </p>
        </div>
        <div className="mt-4 flex gap-4 whitespace-nowrap w-[43%]">
          <button className="bg-white flex items-center gap-2 text-[#475467] px-4 py-2 rounded">
            Create Articles in Bulk
            <PiCopySimpleBold />
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded flex items-center gap-2">
            Start Your 1-Click Post
            <FaRegEdit />
          </button>
        </div>
      </div>

      {/* Blog Post Grid */}
      <div className="bg-white rounded shadow p-4 mb-6">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-gray-700">Automate Your Blog Posts</h3>
          <button className="border bg-transparent text-gray-700 px-4 py-2 rounded-lg">
            Auto Scheduler
          </button>
        </div>
        <div className="group relative w-80 bg-white shadow-lg rounded-lg overflow-hidden border hover:shadow-xl transition-shadow duration-300">
          {/* Card Header */}
          <div className="bg-[#E4E4F2] p-4">
            <h3 className="text-[black] font-semibold flex items-center justify-center gap-2">
              <FaRegEdit size={22} className="text-[#94A3B8]" />
              Blog post
            </h3>
          </div>

          {/* Card Content */}
          <div className="px-4 pt-4">
            <h4 className="text-md font-bold text-gray-800">
              The Ultimate Guide to Laundry: Tips, Tricks, and Hacks
            </h4>
            <p className="mt-1 text-gray-600 text-xs">
              Laundry is a chore that many of us dread, but it doesn’t have to be a
              hassle. With the right tips and tricks, you can make laundry day a
              breeze.
            </p>
            <img
      src={Guy}
      alt="Blog"
      className="mt-4 w-full h-32 object-cover "
    />
          </div>

          {/* Footer Metadata */}
          <div className="p-4 border-t">
            <h5 className="text-gray-800 font-medium">
              The Ultimate Guide to Laundry: Tips, Tricks, and Hacks
            </h5>
            <p className="text-gray-500 text-sm mt-1">Laundry Job, Cleaning, Clothing</p>
            <div className="mt-2 text-sm flex items-center gap-2">
              <div className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">
                Ready for publishing
              </div>
            </div>
          </div>

          {/* Hover Buttons */}
          <div className="absolute inset-0 bg-white bg-opacity-80 flex flex-col justify-end items-center p-4 gap-2 opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
            <button className="bg-primary w-full text-white px-4 py-2 rounded flex items-center gap-2 justify-center">
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
      <div className="bg-white rounded shadow p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-700">Post History</h3>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search for keyword, title, and/or metric."
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4 text-center text-sm">
          {["Social Engagement", "Pages Per Session", "Bounce Rate", "Scroll Depth Engagement", "Crawl Errors"].map(
            (metric, index) => (
              <div key={index} className="flex flex-col items-center">
                <p className="font-bold text-gray-800">0.0</p>
                <p className="text-gray-500">{metric}</p>
              </div>
            )
          )}
        </div>
        <p className="text-gray-500 text-center mt-4">
          All blog posts will appear here. Until then, continue reviewing, scheduling, and
          publishing your available blog posts.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;