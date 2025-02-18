import React, { useState, useEffect } from "react";
import { FaSearch, FaCheck } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { IoFilterSharp } from "react-icons/io5";
import { CiCircleQuestion } from "react-icons/ci";
import postImage from "../../../assets/postImage.svg";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import DataTable from "../../../components/Common/Table/DataTable";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaMinus } from "react-icons/fa6";
import { authApi } from "@/lib/config/axios-instance";
import toast from "react-hot-toast";
import { metrics, tableHeaderTitleList, postsData } from "../../../lib/data";
import { Link, useNavigate } from "react-router-dom";
import { useUserPlatformSiteStore } from "@/lib/store/global.store";

const PostHistory = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [blogPost, setBlogPost] = useState([]);
  const [checkedIds, setCheckedIds] = useState([]);
  const { sites } = useUserPlatformSiteStore();


  useEffect(() => {
    const fetchBlogPosts = async () => {
      setIsLoading(true);
      try {
        const response = await authApi.get(`/blog`);
        if (response.data.success) {
          // Assuming response.data.data.blogPost contains the array of blog posts
          setBlogPost(response.data.data.blogPost);
        } else {
          toast.error("Failed to fetch posts");
        }
      } catch (error) {
        toast.error("Error fetching posts.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  console.log(sites.siteId);


  useEffect(() => {
    const fetchHistory = async () => {
      setIsLoading(true);
      try {
        const response = await authApi.get(`/blog/history?platform=wordpress&siteId=${siteId}`);
        if (response.data.success) {
          // Assuming response.data.data.blogPost contains the array of blog posts
          setBlogPost(response.data.data.blogPost);
        } else {
          toast.error("Failed to fetch posts");
        }
      } catch (error) {
        toast.error("Error fetching posts.");
      } finally {
        setIsLoading(false);
      }
    };

    
    if (sites.siteId) { 
      fetchHistory();
    }
  }, [sites.siteId]); 


  // const getSingleBlogPost = async (postId) => {
  //   try {
  //     const response = await authApi.get(`/blog/single?blogPostId=${postId}`);
  //     navigate(`/dashboard/blog-post/${postId}`);

  //   } catch (error) {
  //     toast.error("Error fetching the single post.");
  //   }
  // };

  const getSingleBlogPost = (postId) => {
      navigate(`/dashboard/blog-post/${postId}`);

  }

  const DeleteBlogPost = async (postId) => {
    try {
      const response = await authApi.delete(`/blog/delete-blog-post?blogPostId=${postId}`);
      if (response.data.success) {
        toast.success("Post deleted successfully!");
        setBlogPost((prev) => prev.filter((post) => post._id !== postId));
      } else {
        toast.error("Failed to delete the post.");
      }
    } catch (error) {
      toast.error("Error deleting the post.");
    }
  };
  
  const EditBlogPost = async (postId) => {
    navigate(`/dashboard/blog-post/${postId}`);
  };
  
  


  const toggleCheckbox = (id) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };




  return (
    <div className="p-4 mb-12 bg-white rounded-lg shadow">
    <div className="flex items-start justify-between flex-col md:flex-row md:gap-4 mb-6 border-b border-gray-300 pb-4">
      <h3 className="font-bold text-gray-700">Post History</h3>
      <div className="flex gap-4">
        <div className="flex items-center gap-2 p-2 border border-gray-300 rounded-lg w-full md:w-[250px]">
          <FaSearch className="text-gray-400 text-[20px]" />
          <input
            type="text"
            placeholder="Search for keyword, title or metric."
            className="w-full px-2 py-1 outline-none text-sm border-transparent"
          />
        </div>
        <div className="text-[#344054] cursor-pointer text-[16px] font-bold flex items-center gap-2 p-2 border border-gray-300 rounded-lg w-fit">
          <IoFilterSharp />
          <span>Post Filter</span>
        </div>
      </div>
    </div>
  
    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 p-6 rounded-lg bg-[#f5f7f9]">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center text-center ${
            index !== 0 ? "lg:border-l lg:border-gray-300 lg:pl-6" : ""
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="relative">
              <svg className="w-12 h-12" viewBox="0 0 36 36">
                {/* Background Circle */}
                <circle
                  className="text-gray-500"
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  strokeWidth="4"
                  stroke="lightgray"
                />
                {/* Progress Circle */}
                <circle
                  className={`${
                    (metric.value / metric.max) * 100 < 50
                      ? "stroke-red-500"
                      : (metric.value / metric.max) * 100 < 75
                      ? "stroke-yellow-500"
                      : "stroke-green-500"
                  } transform rotate-90 origin-center`}
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  strokeWidth="4"
                  strokeDasharray="100"
                  strokeDashoffset={100 - (metric.value / metric.max) * 100}
                />
              </svg>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                {metric.icon}
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div>
                <span className="text-xl font-semibold text-gray-800">
                  {metric.value}
                </span>
                <span className="text-sm text-gray-500">/{metric.max}</span>
              </div>
              <p className="text-xs whitespace-nowrap text-gray-500 flex items-center">
                {metric.label}
                <CiCircleQuestion className="ml-1 cursor-pointer text-base" />
              </p>
            </div>
          </div>
          <button className="text-xs font-semibold text-primary mt-2">
            View {metric.label}
          </button>
        </div>
      ))}
    </div>
  
    <DataTable
      tableHeaderTitleList={tableHeaderTitleList}
      isLoading={isLoading}
      isFetching={isFetching}
      postsData={postsData}
    >
    {blogPost?.map((post) => (
      <tr key={post.id}>
        <td className=" py-5 text-sm bg-white border-b cursor-pointer border-gray-200"
        onClick={() => getSingleBlogPost(post._id)}>
          <p className="flex items-center">
            <span className="flex items-center gap-4">
              {/* Checkbox */}
              <input
                type="checkbox"
                checked={checkedIds.includes(post._id)}
                onChange={() => toggleCheckbox(post._id)}
                className="cursor-pointer accent-primary hover:accent-primary size-4 rounded"
              />

              <span>
                <img
                  src={post.image || postImage}
                  alt="Post Image"
                  className="object-cover "
                />
              </span>
              <span className=" text-gray-900 max-md:w-[150px] font-semibold whitespace-no-wrap text-md md:w-[130px] lg:w-[250px]">
                {post.title}
              </span>
            </span>
          </p>
        </td>

        <td className="gap-2 flex lg:py-[3.2rem] py-12 text-sm bg-white border-b border-gray-200 whitespace-nowrap ">
          {post.mainKeyword && post.mainKeyword.length > 0
            ? post.mainKeyword?.slice(0, 2).map((keyword, index) => (
                <p
                  key={index}
                  className="font-bold text-[10px] rounded-full w-fit md:px-6 px-4 py-2 md:py-1 bg-[#f4f5f5] whitespace-no-wrap"
                >
                  <span>
                    {keyword.slice(0, 15)}
                    {keyword.length > 8 ? "no" : ""}
                  </span>
                </p>
              ))
            : "no mainKeyword"}

          <span
            className={`${
              post.mainKeyword.length > 2 ? "block" : "hidden"
            } bg-[#f4f5f5] p-1 w-[35px] flex justify-center items-center border rounded-full text-[10px]`}
          >
            + {post.mainKeyword.length - 2}
          </span>
        </td>

        <td className="text-sm bg-white border-b md:pr-4 border-gray-200 ">
          <p
            className={`${
              post.traffic < 5
                ? "text-[#ba352a] bg-[#fef3f2]  border-[#fedad7]"
                : "text-[#2d8d64] bg-[#ecfdf3] border-[#caf5dc] "
            } whitespace-no-wrap flex text-[10px] font-bold  items-center border w-[40px] gap-1  justify-center rounded-full  p-1`}
          >
            {post.traffic < 5 ? (
              <FaArrowDownLong className="text-[#ba352a]" />
            ) : (
              <FaArrowUpLong className="text-[#2d8d64]" />
            )}
            {post.traffic}%
          </p>
        </td>
        <td className="text-sm bg-white border-b table-cell border-gray-200 max-md:hidden md:px-4">
          <p className="ml-1 text-gray-500 whitespace-no-wrap">
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </td>

        <td className=" text-sm bg-white border-b px-3 py-5 border-gray-200">
          <div className="flex items-center gap-3">
            <div className="relative max-md:w-[80px] md:w-[80px] lg:w-[120px] h-[7px] rounded-[10px] bg-[#e4e7ec]">
              <span
                className="absolute h-[7px] rounded-[10px]"
                style={{
                  width: `${post.rating}%`,
                  backgroundColor: `${
                    post.rating < 50
                      ? "#ef3a29"
                      : post.rating > 75
                      ? "#17b26a"
                      : "#ffad05"
                  }`,
                }}
              ></span>
            </div>
            <span>{post.rating}</span>
          </div>
        </td>

        <td className=" cursor-pointer   md:px-3  text-sm bg-white border-b py-5 border-gray-200 text-gray-900"  onClick={() => DeleteBlogPost(post._id)}>
          <RiDeleteBin6Line className="text-[15px] max-md:text-[10px]" />
        </td>
        <td className=" cursor-pointer max-md:pl-2 md:px-3  text-sm bg-white border-b py-5 border-gray-200 text-gray-900" onClick={() => EditBlogPost(post._id)}>
          <Link to={`/dashboard/blog-post/${post.id}`}>
            <FiEdit2 className="text-[15px] max-md:text-[10px]" />
          </Link>
        </td>
      </tr>
    ))}
    </DataTable>
  
    {/* Optional message for empty state */}
    {/* <p className="mt-4 text-center text-gray-500">
      All blog posts will appear here. Until then, continue reviewing, scheduling, and
      publishing your available blog posts.
    </p> */}
  </div>
  );
};

export default PostHistory;
