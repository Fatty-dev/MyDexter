import React, { useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { RiHome6Line } from "react-icons/ri";
import { AiOutlineLeft, AiOutlineSync, AiOutlinePlus } from "react-icons/ai";
import { BiImport } from "react-icons/bi";
import { PiCopySimpleBold } from "react-icons/pi";
import { FiInfo } from "react-icons/fi";
import { authApi } from "@/lib/config/axios-instance";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const BulkArticle = () => {
  const navigate = useNavigate();
  const [rows, setRows] = useState([{ keyword: "", title: "", keywords: [] }]);
  const [loading, setLoading] = useState(false);

  const addRow = () => {
    setRows([...rows, { keyword: "", title: "", keywords: [] }]);
  };

  const generateMainKeyword = async () => {
    setLoading(true);
    try {
      const updatedRows = await Promise.all(
        rows.map(async (row) => {
          if (!row.keyword) return row; // Skip empty rows
  
          const { data } = await authApi.post("/blog/generate-row", {
            mainKeyword: row.keyword,
          });
  
          return {
            ...row,
            title: data?.data?.title || "",
            estimatedMonthlyTraffic: data?.data?.estimate || "",
            keywords: (data?.data?.keywords || []).join(", "),
          };
        })
      );
  
      setRows(updatedRows);
      toast.success("Keywords generated successfully!");
    } catch (err) {
      toast.error("Error generating keywords.");
    }finally{
      setLoading(false);
    }
  };


  const goBack = () => {
    navigate("/dashboard/blog-post")
  }



  const initiateBulkPost = async () => {
    try {
      const payload = {
        articles: rows.map((row) => ({
          mainKeyword: row.keyword,
          title: row.title,
          keywords: [row.keywords],
        })),
      };
  
      const { data } = await authApi.post("/blog/bulk-generate", payload);
  
      if (data.success) {
        toast.success("Bulk generation initiated successfully!");
        navigate("/dashboard/blog-post")
      } else {
        toast.error(data.message || "Failed to initiate bulk generation.");
      }
    } catch (err) {
      toast.error("Error initiating bulk post.");
    }
  };
  


  return (
    <div className="w-[90%] mx-auto mt-[1.5rem]">
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
      <div className="flex items-center gap-3" onClick={goBack}>
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
            Effortlessly generate multiple articles at once with our bulk
            article creation tool.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <button className="flex items-center text-gray-700 border border-gray-300 py-2 px-4 rounded hover:bg-gray-100">
            Cancel
          </button>
          <button className="flex items-center gap-2 bg-primary text-white py-2 px-4 rounded hover:bg-primary"
            onClick={initiateBulkPost}>
            Generate Bulk Posts
            <PiCopySimpleBold size={22} />
          </button>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex items-center justify-between w-full mb-4">
        <div className="w-[80%]">
          <p className="text-gray-600">
            Add main keyword, Title, Keywords(optional) to create tasks for
            generating an article. Import from Excel if desired. Connect to
            Shopify, Wix, or WordPress to publish.
            <a href="#" className="text-primary mx-1">
              See video tutorial
            </a>
            for more help.
          </p>
        </div>
        <div className="">
          <button className="flex items-center gap-2 text-primary border border-primary py-2 px-4 rounded ">
            <BiImport className="" size={16} /> Import from Excel
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="w-full border-collapse">
          <thead className="whitespace-nowrap">
            <tr className="bg-gray-100 text-gray-700">
              <th className="py-3 text-sm px-4 text-left">
                <div className="flex items-center gap-2 ">
                  Main Keyword
                  <div
                    className="flex items-center gap-1 cursor-pointer hover:text-blue-700"
                    onClick={generateMainKeyword}
                  >
                {loading ? ( 
                      <span className="animate-spin">
                        <AiOutlineSync className="text-primary" size={16} />
                      </span>
                    ) : (
                      <>
                        <AiOutlineSync className="text-primary" size={16} />
                        <p>Generate</p>
                      </>
                    )}
                  </div>
                </div>
              </th>
              <th className="py-3 text-sm px-4 text-left">
                Estimated Monthly Traffic
              </th>
              <th className="py-3 text-sm px-4 text-left">
                <div className="flex items-center gap-2">
                  Title
                  {/* <div
                    className="flex items-center gap-1 cursor-pointer hover:text-blue-700"
                    onClick={generateTitle}
                  >
                    <AiOutlineSync className="text-primary" size={16} />
                    <p>Generate</p>
                  </div> */}
                </div>
              </th>
              <th className="py-3 text-sm px-4 text-left">
                <div className="flex items-center gap-2">
                  Keywords
                  {/* <div
                    className="flex items-center gap-1 cursor-pointer hover:text-blue-700"
                    onClick={keyword}
                  >
                    <AiOutlineSync className="text-primary" size={16} />
                    <p>Generate</p>
                  </div> */}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="py-3 px-4">
                  <textarea
                    placeholder="Enter your main keyword"
                    className="w-full rounded p-2 min-h-60 text-sm outline-none resize-none overflow-hidden"
                    rows={1}
                    value={row.keyword}
                    onChange={(e) => {
                      const value = e.target.value;
                      const updatedRows = [...rows];
                      updatedRows[index].keyword = value;
                      setRows(updatedRows);
                    }}
                  />
                </td>
                <td className="py-3 px-4 text-gray-500 text-sm">
                  <textarea
                    placeholder="Enter estimated monthly traffic"
                    className="w-full rounded py-2 min-h-60 text-sm outline-none resize-none overflow-hidden"
                    rows={1}
                    value={row.estimatedMonthlyTraffic}
                    onChange={(e) => {
                      const value = e.target.value;
                      const updatedRows = [...rows];
                      updatedRows[index].traffic = value;
                      setRows(updatedRows);
                    }}
                  />
                </td>
                <td className="py-3 px-4">
                  <textarea
                    placeholder="Enter your title"
                    className="w-full rounded py-2 min-h-60 text-sm outline-none resize-none overflow-hidden"
                    rows={1}
                    value={row.title}
                    onChange={(e) => {
                      const value = e.target.value;
                      const updatedRows = [...rows];
                      updatedRows[index].title = value;
                      setRows(updatedRows);
                    }}
                  />
                </td>
                <td className="py-3 px-4">
                  <textarea
                    placeholder="Generated keywords will appear here"
                    className="w-full rounded py-2 min-h-60 text-sm outline-none resize-none overflow-hidden break-words"
                    rows={1}
                    value={row.keywords}
                    onChange={(e) => {
                      const value = e.target.value;
                      const updatedRows = [...rows];
                      updatedRows[index].keywords = value;
                      setRows(updatedRows);
                    }}
                  />
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
