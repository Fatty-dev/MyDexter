import React, { useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { RiHome6Line } from "react-icons/ri";
import { AiOutlineLeft, AiOutlineSync, AiOutlinePlus } from "react-icons/ai";
import { BiImport } from "react-icons/bi";
import { PiCopySimpleBold } from "react-icons/pi";
import { FiInfo } from "react-icons/fi";

const BulkArticle = () => {
  const [rows, setRows] = useState([{ keyword: "", title: "", keywords: "" }]);

  const addRow = () => {
    setRows([...rows, { keyword: "", title: "", keywords: "" }]);
  };

  const TextInput = ({ placeholder }) => (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded p-2 text-sm focus:ring focus:ring-blue-200"
    />
  );

  return (
    <div className="w-[90%] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6">
        <RiHome6Line className="text-gray-500" />
        <h1 className="text-sm text-gray-500">Assistant</h1>
        <HiOutlineChevronRight className="text-gray-500" />
        <p className="text-sm text-gray-500">Blog Posts</p>
        <HiOutlineChevronRight className="text-gray-500" />
        <p className="text-sm text-gray-500">Bulk article generation</p>
      </div>

      {/* Header */}
      <div className="flex items-center gap-3">
        <AiOutlineLeft className="text-gray-500 cursor-pointer" size={20} />
        <button>Back</button>
      </div>

      <div className="flex items-center justify-between my-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-semibold">Bulk Article Generation</h1>
            <FiInfo className="text-primary ml-2" size={18} />
          </div>
          <p className="text-gray-600">
            Effortlessly generate multiple articles at once with our bulk article creation tool.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <button className="flex items-center text-gray-700 border border-gray-300 py-2 px-4 rounded hover:bg-gray-100">
            Cancel
          </button>
          <button className="flex items-center gap-2 bg-primary text-white py-2 px-4 rounded hover:bg-primary">
            Generate Bulk Posts
            <PiCopySimpleBold size={22} />
          </button>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex items-center justify-between w-full mb-4">
        <div className="w-[70%]">
          <p className="text-gray-600">
            Add main keyword, Title, Keywords(optional) to create tasks for generating an article.
            Import from Excel if desired. Connect to Shopify, Wix, or WordPress to publish.
            <a href="#" className="text-primary mx-1">See video tutorial</a>
            for more help.
          </p>
        </div>
        <div className="w-[20%]">
          <button className="flex items-center gap-2 text-primary border border-primary py-2 px-4 rounded hover:bg-primary">
            <BiImport className="" size={16} /> Import from Excel
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="w-full border-collapse">
          <thead className="whitespace-nowrap">
            <tr className="bg-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left">
                Main Keyword
                <div className="flex items-center gap-2 cursor-pointer hover:text-blue-700 mt-1">
                  <AiOutlineSync className="text-primary" size={16} />
                  <p>Generate</p>
                </div>
              </th>
              <th className="py-3 px-4 text-left">
                Estimated Monthly Traffic
              </th>
              <th className="py-3 px-4 text-left">
                Title
                <div className="flex items-center gap-2 cursor-pointer hover:text-blue-700 mt-1">
                  <AiOutlineSync className="text-primary" size={16} />
                  <p>Generate</p>
                </div>
              </th>
              <th className="py-3 px-4 text-left">
                Keywords
                <div className="flex items-center gap-2 cursor-pointer hover:text-blue-700 mt-1">
                  <AiOutlineSync className="text-primary" size={16} />
                  <p>Generate</p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="py-3 px-4">
                  <TextInput placeholder="Enter your main keyword" />
                </td>
                <td className="py-3 px-4 text-gray-500 text-sm">
                  Enter main keywords and the estimated monthly traffic will be displayed
                </td>
                <td className="py-3 px-4">
                  <TextInput placeholder="Enter your blog title or topic here" />
                </td>
                <td className="py-3 px-4">
                  <TextInput placeholder="Enter keywords here" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4">
          <button
            className="flex items-center text-blue-600 text-sm hover:underline"
            onClick={addRow}
          >
            <AiOutlinePlus className="mr-1" size={16} /> Add row
          </button>
        </div>
      </div>
    </div>
  );
};

export default BulkArticle;
