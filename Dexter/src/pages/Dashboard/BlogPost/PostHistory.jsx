import React, { useState } from "react";
import { FaSearch, FaHandHolding, FaUser, FaCheck } from "react-icons/fa";
import { FiEdit2} from "react-icons/fi";
import { IoFilterSharp } from "react-icons/io5";
import { AiTwotoneDislike, AiTwotoneLike } from "react-icons/ai";
import { CiCircleQuestion } from "react-icons/ci";
import { FaArrowDownLong } from "react-icons/fa6";
import DataTable from "../../../components/Common/Table/DataTable";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaMinus } from "react-icons/fa6";

const PostHistory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const metrics = [
    {
      label: "Organic Traffic",
      value: 250,
      max: 285,
      icon: <AiTwotoneLike />,
      badgeColor: "stroke-green-500",
    },
    {
      label: "Pages Per Session",
      value: 50,
      max: 100,
      icon: <FaHandHolding />,
      badgeColor: "stroke-yellow-500",
    },
    {
      label: "Bounce Rate",
      value: "11.3k",
      max: 0,
      icon: <AiTwotoneDislike />,
      badgeColor: "stroke-red-500",
    },
    {
      label: "Average Page Position",
      value: 58,
      max: 100,
      icon: <FaHandHolding />,
      badgeColor: "stroke-yellow-500",
    },
    {
      label: "Crawl Errors",
      value: 50,
      max: 100,
      icon: <FaHandHolding />,
      badgeColor: "stroke-yellow-500",
    },
  ];

  const tableHeaderTitleList = [
    { icon: <FaArrowDownLong />, title: "Post Title" },
    { title: "Keywords" },
    { icon: "", title: "" },
    { title: "Published Date" },
    { title: "Rating" },
    { icon: "", title: "" },
    { icon: "", title: "" },
    { icon: "", title: "" },
  ];

  const postsData = [
    {
      id: 1,
      name: "John Doe",
      category: "Marketing",
      date: "2021-09-12",
      amount: "+$1200",
      checked: true,
    },
    {
      id: 2,
      name: "Jane Doe",
      category: "Marketing",
      date: "2021-09-12",
      amount: "-$1200",
      checked: false,
    },
    {
      id: 3,
      name: "John Doe",
      category: "Marketing",
      date: "2021-09-12",
      amount: "+$1200",
      checked: true,
    },
    {
      id: 4,
      name: "Jane Doe",
      category: "Marketing",
      date: "2021-09-12",
      amount: "-$1200",
      checked: false,
    },
  ];

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
      <div className="grid grid-cols-5 gap-4 text-sm  place-items-center text-center px-4 py-6 rounded-lg bg-[#f5f7f9]">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="flex flex-col gap-1 items-center [&:not(:first-child)]:border-l border-l-[#d5d9e1] pl-4"
          >
            <div className="flex items-center  gap-3 ">
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

              <div className="text-[#899bb6] text-[12px]">
                <span className="font-semibold text-[#344054] text-[2rem]">
                  {metric.value}
                </span>
                /<span>{metric.max}</span>
              </div>
            </div>
            <div className="text-[#98a8bf] flex items-center gap-2">
              <p>{metric.label}</p>
              <CiCircleQuestion className="cursor-pointer text-[15px]" />
            </div>
            <p className="text-[#9795fa] mt-2 font-semibold text-[12px]">
              View {metric.label}
            </p>
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
        <div className="bg-[#6d68fb] w-6 h-6 rounded-[5px] p-1 flex justify-center items-center text-white cursor-pointer absolute top-2 left-5 ">
          <FaMinus  className="relative left-[0.3px]"/>
        </div>
        {postsData.map((post) => (
          <tr key={post.id}>
            <td className="px-5 bg-white border-b border-gray-200 py-5 text-sm ">
              <div className="flex items-center">
                <div className="flex items-center gap-4">
                  <div
                    className={`${
                      post.checked ? "bg-[#6d68fb]" : "bg-transparent border "
                    } cursor-pointer text-[10px] flex justify-center items-center w-6 h-6 rounded-[5px] p-1`}
                  >
                    <FaCheck
                      className={`text-white ${
                        post.checked ? "block" : "hidden"
                      } `}
                    />
                  </div>

                  <div className="bg-[#277c77] text-white text-[10px] flex justify-center items-center w-8 h-8 rounded-[50%] p-1">
                    <FaUser />
                  </div>
                  <p className="font-bold text-gray-900 whitespace-no-wrap">
                    {post.name}
                  </p>
                </div>
              </div>
            </td>
            <td className="px-5 py-5 text-sm bg-white border-b border-b-gray-200">
              <p className="text-gray-500 whitespace-no-wrap">
                {post.category}
              </p>
            </td>
           
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
              <p
                className={`${
                  post.amount < 0 ? "text-black" : "text-[#277c77]"
                } whitespace-no-wrap`}
              >
                <span>{post.amount < 0 ? "-" : "+"}</span>$
                {post.amount < 0 ? post.amount.slice(1) : post.amount}
              </p>
            </td>
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
              <p className="ml-1 text-gray-500 whitespace-no-wrap">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </td>
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
              <p
                className={`${
                  post.amount < 0 ? "text-black" : "text-[#277c77]"
                } whitespace-no-wrap`}
              >
                <span>{post.amount < 0 ? "-" : "+"}</span>$
                {post.amount < 0 ? post.amount.slice(1) : post.amount}
              </p>
            </td>
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
              <p
                className={`${
                  post.amount < 0 ? "text-black" : "text-[#277c77]"
                } whitespace-no-wrap`}
              >
                <span>{post.amount < 0 ? "-" : "+"}</span>$
                {post.amount < 0 ? post.amount.slice(1) : post.amount}
              </p>
            </td>
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 text-[#a3aab3] text-[17px]">
              <RiDeleteBin6Line />
            </td>
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 text-[#a3aab3] text-[17px]">
              <FiEdit2 />
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
