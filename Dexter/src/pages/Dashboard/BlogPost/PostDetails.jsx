import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { CgMenuRight } from "react-icons/cg";
import { FaArrowLeft, FaBars } from "react-icons/fa";
import Editor from "../../../components/Common/Editor/Editor";
import { MdArrowOutward } from "react-icons/md";
import PostOverview from "./PostOverview";
import { authApi } from "../../../lib/config/axios-instance";
import {
  useSelectionStore,
  useSidebar,
  useUserPlatformSiteStore,
} from "@/lib/store/global.store";
import BlogPostChat from "@/components/Dashboardcomp/BlogPostChat";
import SkeletonLoader from "@/components/Dashboardcomp/SkeletonLoader";
import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import ConfirmPlatform from "@/components/Common/Modals/ConfirmPlatform";
import Sidebar from "@/components/Dashboardcomp/Sidebar";
import { convertContentWithImages } from "@/lib/utils/utils";

const PostDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const navigate = useNavigate();
  const { postId } = useParams();
  const [body, setBody] = useState(null);
  const [image, setImage] = useState(null);
  const [messages, setMessages] = useState([]);
  const [dailyUsage, setDailyUsage] = useState(0);
  const [dailyLimit, setDailyLimit] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false); // New state for publish loading
  const [showConfirmPlatform, setShowConfirmPlatform] = useState(false);
  const [isOverviewVisible, setIsOverviewVisible] = useState(false);

  const { expanded } = useSidebar();
  const { sites } = useUserPlatformSiteStore();

  const getDetails = async () => {
    setLoading(true);

    try {
      const { data } = await authApi.get(`blog/single?blogPostId=${postId}`);

      if (data) {
        const postData = data.data;
        const content = postData.content;
        const images = postData.images || [];

        const updatedHTML = convertContentWithImages(content, images);
        setBody(updatedHTML);

        if (images && images.length > 0) setImage(postData.images[0]);

        setDailyUsage(postData.performance.organicTraffic);
        setDailyLimit(postData.performance.pagesPerSession);
      } else {
        console.error("Failed to fetch the blog post:", data.message);
      }
    } catch (error) {
      console.error("Error fetching blog post:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  // const wordpressPublish = async (postId) => {
  //   if (Object.keys(sites).length === 0) {
  //     setShowConfirmPlatform(true);
  //     return;
  //   }

  //   setIsPublishing(true); // Set publish loading to true
  //   try {
  //     await authApi.post(`/publish/wordpress/?blogPostId=${postId}`, {
  //       siteId: sites["wordpress"]?.siteId,
  //     });
  //     toast.success("Post Published successfully!");
  //     navigate("/dashboard/blog-post");
  //   } catch (error) {
  //     console.error("Error publishing post:", error);
  //     toast.error("Failed to publish the post. Please try again.");
  //   } finally {
  //     setIsPublishing(false); // Set publish loading to false
  //   }
  // };

  const shopifyPublish = async (postId) => {
    if (Object.keys(sites).length === 0) {
      setShowConfirmPlatform(true);
      return;
    }
    setIsPublishing(true); // Set publish loading to true
    try {
      await authApi.post(`/publish/shopify/?blogPostId=${postId}`, {
        shopifyId: "67f8d0b9857136268a5cbbfa",
      });
      toast.success("Post Published successfully!");
      navigate("/dashboard/blog-post");
    } catch (error) {
      console.error("Error publishing post:", error);
      toast.error("Failed to publish the post. Please try again.");
    } finally {
      setIsPublishing(false); // Set publish loading to false
    }
  };

  const addMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const updateUsage = (usage, limit) => {
    setDailyUsage(usage);
    setDailyLimit(limit);
  };

  const handleBack = () => {
    navigate("/dashboard/blog-post");
  };

  const updateBody = (newContent) => {
    console.log(newContent);
    
    setBody((prevBody) => {
      const selectedText = value; // Get the highlighted text
      if (!selectedText) return prevBody; // If no text is selected, return the previous body

      // Replace the selected text with the new content
      return prevBody.replace(selectedText, newContent);
    });
  };

  const mainHeaderRef = useRef(null);
  const { value, updateValue } = useSelectionStore();

  return (
    <div className={`w-full mx-auto relative`}>
      <div
        className="sticky top-0 bg-white z-[100] w-full duration-300 flex items-center justify-between px-8 py-4"
        ref={mainHeaderRef}
      >
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

        <div
          className=" ml-8 md:ml-0  flex items-center cursor-pointer gap-2 mb-4"
          onClick={handleBack}
        >
          <FaArrowLeft className="text-sm cursor-pointer text-gray-500" />
          <span className="text-[#6c7685] font-semibold">Back</span>
        </div>

        <div className="flex items-center gap-4">
          <div>
            <button className="bg-white px-2 py-1 lg:p-2 shadow-lg border border-gray-300  text-[#697383] font-semibold rounded-md">
              Cancel
            </button>
          </div>
          <div>
            <button
              className={`text-white flex gap-2 items-center bg-[#6d68fb] px-2 py-1 lg:p-2 font-semibold border border-gray-300 justify-center rounded-md transition-opacity duration-300 ${
                isPublishing ? "opacity-50 cursor-not-allowed" : "opacity-100"
              }`}
              onClick={() => shopifyPublish(postId)}
              disabled={isPublishing} // Disable the button while publishing
            >
              {isPublishing ? (
                <>
                  <span>Publishing...</span>
                  {/* You can add a spinner here if you want */}
                  <div className="loader"></div> {/* Example spinner */}
                </>
              ) : (
                <>
                  Publish
                  <MdArrowOutward className="text-white text-[15px]" />
                </>
              )}
            </button>
          </div>
          {/* Hamburger Icon */}
          <div className="lg:hidden">
            <FaBars
              className="text-gray-500 cursor-pointer"
              onClick={() => setIsOverviewVisible(!isOverviewVisible)}
            />
          </div>
        </div>
      </div>

      <div
        className={`bg-white flex relative max-h-[calc(100vh-80px)] overflow-y-auto`}
      >
        <div className={`flex-[4] relative ${expanded ? "px-4" : ""}`}>
          <div className="max-w-4xl mx-auto">
            <div className="">
              {loading ? (
                <SkeletonLoader />
              ) : (
                body && (
                  <Editor
                    content={body}
                    image={image}
                    postId={postId}
                    editable={true}
                    onDataChange={(data) => setBody(data)}
                  />
                )
              )}
            </div>

            {!loading && (
              <div className="sticky bottom-0 bg-white w-full py-1 space-y-1">
                {value && (
                  <div className="flex items-center justify-center bg-gray-100 py-1 px-3 max-w-md mx-auto gap-3">
                    <p className="text-center text-sm line-clamp-2">{value}</p>
                    <IoMdClose
                      className="cursor-pointer flex-shrink-0"
                      onClick={() => updateValue("")}
                    />
                  </div>
                )}
                <BlogPostChat postId={postId} updateBody={updateBody} />
                <span className="flex justify-center  px-4 mt-6 sm:px-6 md:px-8 text-sm text-center text-gray-500">
                  Enter a prompt to rewrite your article, section, subheadline,
                  or image—Dexter will handle the rest.
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Conditional rendering of PostOverview based on isOverviewVisible */}
        {!isOverviewVisible && (
          <div className="flex-[1.5] sticky top-0 lg:block hidden">
            <PostOverview />
          </div>
        )}
      </div>

      {showConfirmPlatform && (
        <ConfirmPlatform onClose={() => setShowConfirmPlatform(false)} />
      )}
    </div>
  );
};

export default PostDetails;
