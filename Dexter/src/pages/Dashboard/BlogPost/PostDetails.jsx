import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
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


const PostDetails = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [body, setBody] = useState(null);
  const [messages, setMessages] = useState([]);
  const [dailyUsage, setDailyUsage] = useState(0);
  const [dailyLimit, setDailyLimit] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showConfirmPlatform, setShowConfirmPlatform] = useState(false);


  const { expanded } = useSidebar();
  const { sites } = useUserPlatformSiteStore();

  const getDetails = async () => {
    setLoading(true);
    try {
      const { data } = await authApi.get(`blog/single?blogPostId=${postId}`);
      if (data) {
        const postData = data.data;
        console.log(data.data.content);

        setBody(postData.content);
        setDailyUsage(postData.performance.organicTraffic);
        setDailyLimit(postData.performance.pagesPerSession);

        console.log("Post Metadata: ", postData.metadata);
        console.log("SEO Analysis: ", postData.seoAnalysis);
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


  const publish = async (postId) => {
    if (!sites["wordpress"]?.siteId) {
      setShowConfirmPlatform(true);
      return;
    }
  
    setLoading(true);
    try {
      await authApi.post(`/publish/wordpress/?blogPostId=${postId}`, {
        siteId: sites["wordpress"]?.siteId,
      });
      toast.success("Post Published successfully!");
      navigate("/dashboard/blog-post");
    } catch (error) {
      console.error("Error publishing post:", error);
      toast.error("Failed to publish the post. Please try again.");
    } finally {
      setLoading(false);
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

  const mainHeaderRef = useRef(null);

  // useEffect(() => {
  //   if (!mainHeaderRef.current) return;
  //   let current = window.scrollY;

  //   const handleScroll = () => {
  //     let prev = window.scrollY;
  //     if (prev > current) {
  //       // mainHeaderRef.current.style.opacity = "0%";
  //       mainHeaderRef.current.classList.add('opacity-0')
  //     } else {
  //       // mainHeaderRef.current.style.opacity = "100%";
  //       mainHeaderRef.current.classList.remove('opacity-0')
  //     }

  //     current = prev;
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const { value, updateValue } = useSelectionStore();

  return (
    <div className={`w-full mx-auto relative`}>
      <div
        className="sticky top-0 bg-white z-[100] w-full duration-300 flex items-center justify-between px-8 py-4"
        ref={mainHeaderRef}
      >
        <div
          className="flex items-center  cursor-pointer gap-2 mb-4"
          onClick={handleBack}
        >
          <FaArrowLeft className="text-sm cursor-pointer text-gray-500" />
          <span className="text-[#6c7685] font-semibold">Back</span>
        </div>

        <div className="flex items-center gap-4">
          <div>
            <button className="bg-white p-2 shadow-lg border border-gray-300 w-[70px] text-[#697383] font-semibold rounded-md">
              Cancel
            </button>
          </div>
          <div>
            <button
              className="text-white flex gap-2 items-center bg-[#6d68fb] p-2 w-[100px] font-semibold  border  border-gray-300 justify-center rounded-md"
              onClick={() => publish(postId)}
            >
              Publish
              <MdArrowOutward className="text-white text-[15px]" />
            </button>
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
                    editable={true}
                    onDataChange={(data) => setBody(data)}
                  />
                )
              )}
            </div>
            {/* <div className="w-full p-4 mx-auto">
              <img src={sampleImage} alt="Post Image" />
            </div> */}

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
                <BlogPostChat postId={postId} />
                <span className="flex justify-center text-sm text-center text-gray-500">
                  Enter a prompt to rewrite your article, section, subheadline,
                  or image—Dexter will handle the rest.
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="flex-[1.5] sticky top-0">
          <PostOverview />
        </div>
      </div>

      {showConfirmPlatform && (
      <ConfirmPlatform onClose={() => setShowConfirmPlatform(false)} />
    )}
    </div>
  );
};

export default PostDetails;
