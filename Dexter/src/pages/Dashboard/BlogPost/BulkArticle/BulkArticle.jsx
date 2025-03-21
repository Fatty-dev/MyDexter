import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { CgMenuRight } from "react-icons/cg";
import { HiOutlineChevronRight } from "react-icons/hi";
import { RiHome6Line } from "react-icons/ri";
import { AiOutlineLeft, AiOutlineSync, AiOutlinePlus } from "react-icons/ai";
import { BiImport } from "react-icons/bi";
import { PiCopySimpleBold } from "react-icons/pi";
import { FiInfo } from "react-icons/fi";
import { authApi } from "@/lib/config/axios-instance";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Sidebar from "@/components/Dashboardcomp/Sidebar";

const BulkArticle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
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
        rows.map(async (row, index) => {
          if (!row.keyword) return row; // Skip empty rows

          // Call the new endpoint for generating main keywords
          const { data } = await authApi.post("/blog/generate-main-keywords", {
            mainKeyword: row.keyword,
          });

          // Check if the response is successful
          if (data.success) {
            // Map the response data to create new rows
            const newRows = data.data.map((item) => ({
              keyword: item.mainKeyword,
              estimatedMonthlyTraffic: item.estimatedMonthlyTraffic,
              title: "", // Initialize title as empty
              keywords: [], // Initialize keywords as empty
            }));

            return newRows; // Return the new rows
          } else {
            toast.error(data.message || "Failed to generate keywords.");
            return row; // Return the original row if there's an error
          }
        })
      );

      // Flatten the array of arrays into a single array of rows
      const flattenedRows = updatedRows.flat();
      // Only fill the first three rows
      const limitedRows = flattenedRows.slice(0, 3);
      setRows(limitedRows);
      toast.success("Keywords generated successfully!");
    } catch (err) {
      toast.error("Error generating keywords.");
    } finally {
      setLoading(false);
    }
  };

  const generateTitle = async () => {
    setLoading(true);
    try {
      // Create an array of main keywords to send to the API
      const mainKeywords = rows.map(row => row.keyword).filter(keyword => keyword); // Filter out empty keywords

      // Call the endpoint for generating bulk titles
      const { data } = await authApi.post("/blog/generate-bulk-titles", {
        mainKeyword: mainKeywords,
      });

      // Check if the response is successful
      if (data.success) {
        // Update only the first three rows with the generated titles
        const updatedRows = rows.map((row, index) => ({
          ...row,
          // title: index < 3 ? data.data[index] || "" : row.title, // Fill title from response for first three rows
        }));
        setRows(updatedRows);
        toast.success("Titles generated successfully!");
      } else {
        toast.error(data.message || "Failed to generate titles.");
      }
    } catch (err) {
      toast.error("Error generating titles.");
    } finally {
      setLoading(false);
    }
  };

  const generateKeywords = async () => {
    setLoading(true);
    try {
      // Create an array of objects containing main keywords and titles
      const payload = rows.map(row => ({
        mainKeyword: row.keyword,
        title: row.title,
      })).filter(item => item.mainKeyword && item.title); // Filter out empty entries

      // Call the endpoint for generating bulk keywords
      const { data } = await authApi.post("/blog/generate-bulk-keywords", {
        articles: payload,
      });

      // Check if the response is successful
      if (data.success) {
        // Update only the first three rows with the generated keywords
        const updatedRows = rows.map((row, index) => ({
          ...row,
          // keywords: index < 3 ? data.data[index] || "" : row.keywords, // Fill keywords from response for first three rows
        }));
        setRows(updatedRows);
        toast.success("Keywords generated successfully!");
      } else {
        toast.error(data.message || "Failed to generate keywords.");
      }
    } catch (err) {
      toast.error("Error generating keywords.");
    } finally {
      setLoading(false);
    }
  };

  const goBack = () => {
    navigate("/dashboard/blog-post");
  };

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
        navigate("/dashboard/blog-post");
      } else {
        toast.error(data.message || "Failed to initiate bulk generation.");
      }
    } catch (err) {
      toast.error("Error initiating bulk post.");
    }
  };

  return (
    <div className="w-[90%] mx-auto mt-[1.5rem]">

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

      {/* Breadcrumb */}
      <div className="ml-8 md:ml-0 flex items-center gap-2 mb-6">
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
                    className="flex items-center gap-1 cursor-pointer hover:text-primary"
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
                <div className="flex items-center gap-2">
                  Estimated Monthly Traffic
                </div>
              </th>
              <th className="py-3 text-sm px-4 text-left">
                <div className="flex items-center gap-2">
                  Title
                  <div
                    className="flex items-center gap-1 cursor-pointer hover:text-primary"
                    onClick={generateTitle}
                  >
                    <AiOutlineSync className="text-primary" size={16} />
                    <p>Generate</p>
                  </div>
                </div>
              </th>
              <th className="py-3 text-sm px-4 text-left">
                <div className="flex items-center gap-2">
                  Keywords
                  <div
                    className="flex items-center gap-1 cursor-pointer hover:text-primary"
                    onClick={generateKeywords}
                  >
                    <AiOutlineSync className="text-primary" size={16} />
                    <p>Generate</p>
                  </div>
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
                    className="w-full rounded p-2 min-h-24 text-sm outline-none resize-none overflow-hidden"
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
                    placeholder="Estimated monthly traffic"
                    className="w-full rounded py-2 min-h-24 text-sm outline-none resize-none overflow-hidden"
                    rows={1}
                    value={row.estimatedMonthlyTraffic}
                    onChange={(e) => {
                      const value = e.target.value;
                      const updatedRows = [...rows];
                      updatedRows[index].estimatedMonthlyTraffic = value;
                      setRows(updatedRows);
                    }}
                  />
                </td>
                <td className="py-3 px-4">
                  <textarea
                    placeholder="Generated title will appear here"
                    className="w-full rounded py-2 min-h-24 text-sm outline-none resize-none overflow-hidden"
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
                    className="w-full rounded py-2 min-h-24 text-sm outline-none resize-none overflow-hidden break-words"
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
            className="flex items-center text-primary text-sm hover:underline"
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