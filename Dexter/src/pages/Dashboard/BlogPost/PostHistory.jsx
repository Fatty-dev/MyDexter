import React, { useState } from "react";
import { FaSearch,FaCheck } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { IoFilterSharp } from "react-icons/io5";
import { CiCircleQuestion } from "react-icons/ci";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import DataTable from "../../../components/Common/Table/DataTable";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaMinus } from "react-icons/fa6";
import { metrics, tableHeaderTitleList, postsData } from "../../../lib/data";

import { Link } from "react-router-dom";

const PostHistory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);


  return (
    <div className="p-4 mb-12 bg-white rounded-lg shadow`">
      <div className="flex items-center justify-between max-md:flex-col max-md:gap-4 max-md:items-start mb-6 border-b border-gray-300 pb-4 ">
        <h3 className="font-bold text-gray-700">Post History</h3>
        <div className="flex gap-4  ">
          <div className="flex items-center gap-2 p-2 border border-gray-300 rounded-lg lg:w-[250px] ">
            <FaSearch className="text-gray-400 text-[20px] " />
            <input
              type="text"
              placeholder="Search for keyword, title or metric."
              className="w-full px-2 py-1 outline-none text-sm border-transaparent"
            />
          </div>
          <div className="text-[#344054] cursor-pointer text-[16px] font-bold flex items-center gap-2 p-2 border border-gray-300 rounded-lg w-fit">
            <IoFilterSharp />
            <span >Post Filter</span>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-5 max-md:grid-cols-2
         max-md:space-x-2 max-md:place-items-start md:space-x-6 lg:space-x-0 lg:space-y-0  md:grid-cols-3 max-md:p-4 md:p-4 lg:p-12   md:gap-6   max-md:gap-6 py-6 rounded-lg bg-[#f5f7f9] ">
        {metrics.map((metric, index) => (
          <div  key={index} className="lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:border-l-[#d5d9e1] lg:[&:not(:first-child)]:pl-6 max-md:[&:not(:first-child)]:border-l-none md:[&:not(:first-child)]:border-l-none max-md:[&:not(:first-child)]:pl-0 md:first-of-type:pl-6  flex justify-center lg:items-center flex-col ">
          <div
           
            className="flex items-start gap-2 "
          >
            <div className="relative">
              <svg className="size-12" viewBox="0 0 36 36">
                {/* Background Circle */}
                <circle
                  className="text-gray-500"
                  cx="18"
                  cy="18"
                  r="13"
                  fill="none"
                  strokeWidth="4"
                  stroke="lightgray"
                />
                {/* Progress Circle */}
                <circle
                  className={`${((metric.value/ metric.max)* 100) < 50 ? "stroke-red-500" : 
                  ((metric.value/ metric.max)* 100) < 75 ? "stroke-yellow-500" :  "stroke-green-500" } transform-rotate-90 origin-center`}
                  cx="18"
                  cy="18"
                  r="13"
                  fill="none"
                  strokeWidth="4"
                  strokeDasharray="100"
                  strokeDashoffset={metric.max - metric.value}
                />
              </svg>
              <div className="absolute transition-transform  left-[52%] top-1/2 -translate-x-2 -translate-y-1/2 w-full">
                {metric.icon}
              </div>
            </div>
              <div className="gap-2">
                <div className="text-[#899bb6] flex flex-col items-start">
                  <div>
                  <span className="font-semibold text-[#344054] text-2xl">
                    {metric.value}
                  </span>
                  /<span className="text-sm">{metric.max}</span>
                  </div>

                  <div className="text-[#98a8bf] flex items-center  space-x-1 text-sm">
                    <p>{metric.label}</p>
                    <CiCircleQuestion className="cursor-pointer text-[15px]" />
                  </div>
                </div>
              </div>
              
          </div>
            <div className="ml-2">
            <p className="text-[#9795fa] text-sm  ml-5 mt-1 font-semibold ">
              View {metric.label}
            </p>
            </div>
            </div>
        ))}
      </div>

   <DataTable
        tableHeaderTitleList={tableHeaderTitleList}
        isLoading={isLoading}
        isFetching={isFetching}
        postsData={postsData}

        // setCurrentPage={setCurrentPage}
        // currentPage={currentPage}
      >
        
        {postsData?.map((post) => (
          <tr key={post.id}>
            <td className=" py-5 text-sm bg-white border-b border-gray-200">
              <p className="flex items-center">
                <span className="flex items-center gap-4 md:gap-2">
                  <span
                    className={`${
                      post.checked ? "bg-[#6d68fb]" : "bg-transparent border "
                    } cursor-pointer text-[9px] flex justify-center items-center w-5 h-5 rounded-[5px] p-1`}
                  >
                    <FaCheck
                      className={`text-white ${
                        post.checked ? "block" : "hidden"
                      } `}
                    />
                  </span>

                  <span>
                    <img
                      src={post.image}
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

            <td className="gap-2 hidden lg:flex lg:py-[3.2rem] py-12 text-sm bg-white border-b border-gray-200 whitespace-nowrap ">
              {post.keywords?.slice(0, 2).map((keyword, index) => (
                <p
                  key={index}
                  className="font-bold text-[10px] rounded-full w-fit md:px-6 px-4 py-2 md:py-1 bg-[#f4f5f5] whitespace-no-wrap"
                >
                  <span>
                    {keyword.slice(0, 15)}
                    {keyword.length > 8 ? "..." : ""}
                  </span>
                </p>
              ))}

              <span
                className={`${
                  post.keywords.length > 2 ? "block" : "hidden"
                } bg-[#f4f5f5] p-1 w-[35px] flex justify-center items-center border rounded-full text-[10px]`}
              >
                + {post.keywords.length - 2}
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
            <td className="text-sm bg-white border-b hidden lg:table-cell border-gray-200 max-md:hidden md:px-4">
              <p className="ml-1 text-gray-500 whitespace-no-wrap">
                {new Date(post.publishedDate).toLocaleDateString("en-US", {
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
                      backgroundColor:  `${post.rating < 50
                          ? "#ef3a29"
                          : post.rating > 75
                          ? "#17b26a"
                          : "#ffad05"}`
                      
                    }}
                  ></span>
                
                </div>
                <span>{post.rating}</span>
              </div>
            </td>
          
            <td className=" cursor-pointer   md:px-3  text-sm bg-white border-b py-5 border-gray-200 text-gray-900">
              <RiDeleteBin6Line className="text-[15px] max-md:text-[10px]" />
            </td>
            <td className=" cursor-pointer max-md:pl-2 md:px-3  text-sm bg-white border-b py-5 border-gray-200 text-gray-900">
              <Link to={`/dashboard/blog-post/${post.id}`}>
                <FiEdit2 className="text-[15px] max-md:text-[10px]" />
              </Link>
            </td>
          
          </tr>
        ))}
      </DataTable> 

      {/* <p className="mt-4 text-center text-gray-500">
      All blog posts will appear here. Until then, continue reviewing, scheduling, and
      publishing your available blog posts.
    </p> */}
    </div>
  );
};

export default PostHistory;
