import React, { useState } from "react";
import { FaSearch,FaCheck } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { IoFilterSharp } from "react-icons/io5";
import { CiCircleQuestion } from "react-icons/ci";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import DataTable from "../../../components/Common/Table/DataTable";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaMinus } from "react-icons/fa6";
import { metrics, tableHeaderTitleList, postsData } from "../../../lib/utils/data";

import { Link } from "react-router-dom";

const PostHistory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);


  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between mb-6 border-b border-b-[#98a8bf] pb-4 ">
        <h3 className="font-bold text-gray-700">Post History</h3>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 p-2 border border-gray-300 rounded-lg w-[250px]">
            <FaSearch className="text-gray-400 text-[20px]" />
            <input
              type="text"
              placeholder="Search for keyword, title, and/or metric."
              className="w-full px-2 py-1 text-sm border-transaparent"
            />
          </div>
          <div className="text-[#344054] cursor-pointer text-[16px] font-bold flex items-center gap-2 p-2 border border-gray-300 rounded-lg w-fit">
            <IoFilterSharp />
            <span>Post Filter</span>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly items-center gap-4 text-sm  place-items-center text-center  py-6 rounded-lg bg-[#f5f7f9]">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="flex   gap-2 items-start [&:not(:first-child)]:border-l border-l-[#d5d9e1] pl-4"
          >
            <div className="relative">
              <svg className="w-16 h-16" viewBox="0 0 36 36">
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
                  className={`${metric.badgeColor} transform -rotate-90 origin-center`}
                  cx="18"
                  cy="18"
                  r="13"
                  fill="none"
                  strokeWidth="4"
                  strokeDasharray="100"
                  strokeDashoffset={metric.max - metric.value}
                />
              </svg>
              <div
                className={`${
                  metric.label === "Bounce Rate"
                    ? "bottom-[33%] left-[1.23rem]"
                    : metric.label === "Organic Traffic"
                    ? "bottom-[34%] left-[1.28rem] "
                    : "bottom-[42%] left-6 "
                } text-[16px]  absolute text-[#98a8bf]  flex justify-center items-center`}
              >
                {metric.icon}
              </div>
            </div>
            <div className="flex items-center   gap-3 ">
              <div className="flex flex-col justify-center items-center gap-2">
                <div className="text-[#899bb6] self-start text-[12px]">
                  <span className="font-semibold text-[#344054] text-[2rem]">
                    {metric.value}
                  </span>
                  /<span>{metric.max}</span>
                </div>

                <div>
                  <div className="text-[#98a8bf] flex items-center  gap-2">
                    <p>{metric.label}</p>
                    <CiCircleQuestion className="cursor-pointer text-[15px]" />
                  </div>
                  <p className="text-[#9795fa] relative right-3 mt-2 font-semibold text-[12px]">
                    View {metric.label}
                  </p>
                </div>
              </div>
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
        <div className="bg-[#6d68fb] w-5 h-5 rounded-[5px] p-1 flex justify-center items-center text-white cursor-pointer text-[9px] absolute top-2 left-2 ">
          <FaMinus className="relative left-[0.3px]" />
        </div>
        {postsData?.map((post) => (
          <tr key={post.id}>
            <td className="px-2 bg-white border-b border-gray-200 py-5 text-sm ">
              <p className="flex items-center">
                <span className="flex items-center gap-4">
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
                      className=" object-cover "
                    />
                  </span>
                  <span className=" text-gray-900 whitespace-no-wrap text-[14px] w-[270px]">
                    {post.title}
                  </span>
                </span>
              </p>
            </td>

            <td className="px-2 py-12 bg-white flex  gap-2 border-b border-gray-200  text-sm ">
              {post.keywords?.slice(0, 2).map((keyword, index) => (
                <p
                  key={index}
                  className="font-bold text-[10px] rounded-full w-fit px-4 py-2 bg-[#f4f5f5] whitespace-no-wrap"
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
                } bg-[#f4f5f5] p-1 w-[35px]  flex justify-center items-center border rounded-full text-[10px]`}
              >
                + {post.keywords.length - 2}
              </span>
            </td>

            <td className="py-5 px-2 text-sm bg-white border-b border-gray-200">
              <p
                className={`${
                  post.traffic < 5
                    ? "text-[#ba352a] bg-[#fef3f2]  border-[#fedad7]"
                    : "text-[#2d8d64] bg-[#ecfdf3] border-[#caf5dc] "
                } whitespace-no-wrap flex text-[10px] font-bold  items-center border w-[43px] gap-1  justify-center rounded-full  py-2 px-3`}
              >
                {post.traffic < 5 ? (
                  <FaArrowDownLong className="text-[#ba352a]" />
                ) : (
                  <FaArrowUpLong className="text-[#2d8d64]" />
                )}
                {post.traffic}%
              </p>
            </td>
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
              <p className="ml-1 text-gray-500 whitespace-no-wrap">
                {new Date(post.publishedDate).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </td>
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
              <p className="relative w-[120px] h-[7px] rounded-[10px] bg-[#e4e7ec]">
                <span
                  className={`absolute h-[7px] rounded-[10px]`}
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
              </p>
            </td>
            <td className="py-5 pr-5 text-sm bg-white border-b border-gray-200">
            
                <span>{post.rating}</span>
              
            </td>
            <td className="px-5 cursor-pointer py-5 text-sm bg-white border-b border-gray-200 text-[#a3aab3]">
              <RiDeleteBin6Line className="text-[15px]" />
            </td>
            <td className="px-5 cursor-pointer py-5 text-sm bg-white border-b border-gray-200 text-[#a3aab3]">
              <Link to={`/dashboard/blog-post/${post.id}`}>
                <FiEdit2 className="text-[15px]" />
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
