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
  const [loadingMainKeyword, setLoadingMainKeyword] = useState(false);
  const [loadingTitle, setLoadingTitle] = useState(false);
  const [loadingKeywords, setLoadingKeywords] = useState(false);

  const addRow = () => {
    setRows([...rows, { keyword: "", title: "", keywords: [] }]);
  };

  const generateMainKeyword = async () => {
    setLoading(true);
    setLoadingMainKeyword(true);
    try {
      const emptyRowsFilled = 0;

      const updatedRows = await Promise.all(
        rows.map(async (row, id) => {
          if (!row.keyword) {
            console.log("an empty row found", id);
            return row;
          }

          const { data } = await authApi.post("/blog/generate-main-keywords", {
            mainKeyword: [row.keyword],
          });

          if (data.success) {
            return data.data.map((item) => ({
              keyword: item.mainKeyword.replace(/"/g, ""),
              estimatedMonthlyTraffic: item.estimatedMonthlyTraffic,
              title: "",
              keywords: [],
            }));
          } else {
            toast.error(data.message || "Failed to generate keywords.");
            return row;
          }
        })
      );

      console.log({ updatedRows });

      const flattenedRows = updatedRows
        // .map((data) => Array.isArray(data))
        .flat()
        .map((data, i) =>
          i > rows.length - 1 ? data : rows.length > 1 ? { ...rows[i] } : data
        );

      console.log({ flattenedRows });

      setRows(flattenedRows.filter((d) => !!d.keyword));
      toast.success("Keywords generated successfully!");
    } catch (err) {
      toast.error("Error generating keywords.");
    } finally {
      setLoading(false);
      setLoadingMainKeyword(false);
    }
  };

  const generateTitle = async () => {
    setLoading(true);
    setLoadingTitle(true);
    try {
      const mainKeywords = rows
        .map((row) => row.keyword)
        .filter((keyword) => keyword);

      const { data } = await authApi.post("/blog/generate-bulk-titles", {
        mainKeyword: mainKeywords,
      });

      if (data.success) {
        const updatedRows = rows.map((row, index) => ({
          ...row,
          title: data.data[index]?.replace(/"/g, "") || row.title, // Remove quotes
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
      setLoadingTitle(false);
    }
  };

  const generateKeywords = async () => {
    setLoading(true);
    setLoadingKeywords(true);
    try {
      const mainKeywords = [];
      const titles = [];

      rows.forEach((row) => {
        if (row.keyword && row.title) {
          mainKeywords.push(row.keyword);
          titles.push(row.title);
        }
      });

      const payload = {
        mainKeyword: mainKeywords,
        title: titles,
      };

      const { data } = await authApi.post(
        "/blog/generate-bulk-keywords",
        payload
      );

      if (data.success) {
        const updatedRows = rows.map((row, index) => ({
          ...row,
          keywords:
            data.data[index]?.relatedKeywords.map((keyword) =>
              keyword.replace(/"/g, "")
            ) || [],
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
      setLoadingKeywords(false);
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
          keywords: row.keywords,
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
    <div className="w-[95%] mx-auto mt-6 px-2 sm:px-4">
      {/* Hamburger Menu */}
      <div className="sm:block md:hidden absolute top-5 left-4 z-20">
        <button onClick={toggleSidebar} className="text-3xl text-gray-700">
          {isOpen ? <FiX size={22} /> : <CgMenuRight size={22} />}
        </button>
      </div>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 z-10 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 w-64 md:hidden bg-white h-full shadow-xl z-20 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar isOpen={isOpen} />
      </div>

      {/* Breadcrumb */}
      <div className="ml-8 md:ml-0 flex flex-wrap items-center gap-2 mb-6 text-sm text-gray-500">
        <RiHome6Line />
        <span>Assistant</span>
        <HiOutlineChevronRight />
        <span>Blog Posts</span>
        <HiOutlineChevronRight />
        <span>Bulk article generation</span>
      </div>

      {/* Header */}
      <div className="flex items-center gap-3 mb-4" onClick={goBack}>
        <AiOutlineLeft className="text-gray-500 cursor-pointer" size={20} />
        <button className="text-sm">Back</button>
      </div>

      {/* Title and Actions */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 my-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-semibold">
              Bulk Article Generation
            </h1>
            <FiInfo className="text-primary ml-2" size={18} />
          </div>
          <p className="text-gray-600 text-sm">
            Effortlessly generate multiple articles at once with our bulk
            article creation tool.
          </p>
        </div>

        <div className="flex flex-col w-1/4 sm:flex-row items-start sm:items-center gap-2">
          <button className="text-sm text-gray-700 border border-gray-300 py-2 px-4 rounded hover:bg-gray-100 w-full">
            Cancel
          </button>
          <button
            className="text-sm flex items-center justify-center gap-2 bg-primary whitespace-nowrap text-white py-2 px-4 rounded hover:bg-primary w-full "
            onClick={initiateBulkPost}
          >
            Generate Bulk Posts <PiCopySimpleBold size={22} />
          </button>
        </div>
      </div>

      <hr className="my-4" />

      {/* Description + Import */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 mb-4">
        <div className="lg:w-[80%] text-sm text-gray-600">
          <p>
            Add main keyword, Title, Keywords (optional) to create tasks for
            generating an article. Import from Excel if desired. Connect to
            Shopify, Wix, or WordPress to publish.
            <a href="#" className="text-primary mx-1">
              See video tutorial
            </a>
            for more help.
          </p>
        </div>
        <div>
          <button className="flex items-center gap-2 text-primary border border-primary py-2 px-4 rounded text-sm">
            <BiImport size={16} /> Import from Excel
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="w-full border-collapse text-sm">
          <thead className="whitespace-nowrap">
            <tr className="bg-gray-100 text-gray-700">
              {[
                "Main Keyword",
                "Estimated Monthly Traffic",
                "Title",
                "Keywords",
              ].map((header, idx) => (
                <th key={idx} className="py-3 px-4 text-left">
                  <div className="flex items-center gap-2">
                    {header}
                    {(header === "Main Keyword" && (
                      <div
                        onClick={generateMainKeyword}
                        className="flex items-center gap-1 cursor-pointer hover:text-primary"
                      >
                        {loadingMainKeyword ? (
                          <span className="animate-spin">
                            <AiOutlineSync className="text-primary" size={16} />
                          </span>
                        ) : (
                          <>
                            <AiOutlineSync className="text-primary" size={16} />
                            <span>Generate</span>
                          </>
                        )}
                      </div>
                    )) ||
                      (header === "Title" && (
                        <div
                          onClick={generateTitle}
                          className="flex items-center gap-1 cursor-pointer hover:text-primary"
                        >
                          {loadingTitle ? (
                            <span className="animate-spin">
                              <AiOutlineSync
                                className="text-primary"
                                size={16}
                              />
                            </span>
                          ) : (
                            <>
                              <AiOutlineSync
                                className="text-primary"
                                size={16}
                              />
                              <span>Generate</span>
                            </>
                          )}
                        </div>
                      )) ||
                      (header === "Keywords" && (
                        <div
                          onClick={generateKeywords}
                          className="flex items-center gap-1 cursor-pointer hover:text-primary"
                        >
                          {loadingKeywords ? (
                            <span className="animate-spin">
                              <AiOutlineSync
                                className="text-primary"
                                size={16}
                              />
                            </span>
                          ) : (
                            <>
                              <AiOutlineSync
                                className="text-primary"
                                size={16}
                              />
                              <span>Generate</span>
                            </>
                          )}
                        </div>
                      ))}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="border-t border-gray-200">
                {[
                  "keyword",
                  "estimatedMonthlyTraffic",
                  "title",
                  "keywords",
                ].map((key, idx) => (
                  <td key={idx} className="py-3 px-4">
                    <textarea
                      placeholder={
                        key === "keyword"
                          ? "Enter your main keyword"
                          : key === "estimatedMonthlyTraffic"
                          ? "Estimated monthly traffic"
                          : key === "title"
                          ? "Generated title will appear here"
                          : "Generated keywords will appear here"
                      }
                      className="w-full rounded p-2 min-h-80 text-sm outline-none resize-none overflow-hidden"
                      rows={1}
                      value={
                        key === "keywords" ? row[key].join(", ") : row[key]
                      }
                      onChange={(e) => {
                        const value =
                          key === "keywords"
                            ? e.target.value.split(", ")
                            : e.target.value;
                        const updatedRows = [...rows];
                        updatedRows[index][key] = value;
                        setRows(updatedRows);
                      }}
                    />
                  </td>
                ))}
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
