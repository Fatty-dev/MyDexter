import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiX } from "react-icons/fi";
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
import { toast } from "sonner";
import { IoMdClose } from "react-icons/io";
import ConfirmPlatform from "@/components/Common/Modals/ConfirmPlatform";
import Sidebar from "@/components/Dashboardcomp/Sidebar";
import { convertContentWithImages } from "@/lib/utils/utils";
import { getBlogPostById } from "@/lib/services/post.service";
import { useQuery } from "@tanstack/react-query";

interface Image {
  url: string;
}

const PostDetails: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const navigate = useNavigate();
  const { postId } = useParams<{ postId: string }>();
  const [body, setBody] = useState<string | null>(null);
  const [image, setImage] = useState<Image | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [dailyUsage, setDailyUsage] = useState(0);
  const [dailyLimit, setDailyLimit] = useState(0);
  const [isPublishing, setIsPublishing] = useState(false);
  const [showConfirmPlatform, setShowConfirmPlatform] = useState(false);
  const [isOverviewVisible, setIsOverviewVisible] = useState(false);

  const { expanded } = useSidebar();
  const { sites } = useUserPlatformSiteStore();
  const mainHeaderRef = useRef<HTMLDivElement>(null);
  const { value, updateValue } = useSelectionStore();

  const { data, isPending: loading } = useQuery({
    queryKey: ["blogPost", postId],
    queryFn: () => getBlogPostById(postId!),
  });

  useEffect(() => {
    if (!data) return;

    const postData = data;
    const updatedHTML = convertContentWithImages(
      postData.content,
      postData.images || []
    );
    setBody(updatedHTML);
    if (postData.images?.length) setImage(postData.images[0]);
    setDailyUsage(postData.performance.organicTraffic);
    setDailyLimit(postData.performance.pagesPerSession);
  }, [data]);

  const shopifyPublish = async (postId?: string) => {
    if (!postId) return;

    if (Object.keys(sites).length === 0) {
      setShowConfirmPlatform(true);
      return;
    }

    setIsPublishing(true);

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
      setIsPublishing(false);
    }
  };

  const addMessage = (newMessage: string) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const updateUsage = (usage: number, limit: number) => {
    setDailyUsage(usage);
    setDailyLimit(limit);
  };

  const handleBack = () => {
    navigate("/dashboard/blog-post");
  };

  const updateBody = (newContent: string) => {
    if (!value) return;
    setBody((prevBody) => prevBody?.replace(value, newContent) ?? null);
  };

  return (
    <div className="w-full mx-auto relative">
      <div
        className="sticky top-0 bg-white z-[100] w-full duration-300 flex items-center justify-between px-8 py-4"
        ref={mainHeaderRef}
      >
        <div className="sm:block md:hidden absolute top-5 left-4 z-20">
          <button onClick={toggleSidebar} className="text-3xl text-gray-700">
            {isOpen ? <FiX size={22} /> : <CgMenuRight size={22} />}
          </button>
        </div>

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
          className="ml-8 md:ml-0 flex items-center cursor-pointer gap-2 mb-4"
          onClick={handleBack}
        >
          <FaArrowLeft className="text-sm cursor-pointer text-gray-500" />
          <span className="text-[#6c7685] font-semibold">Back</span>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-white px-2 py-1 lg:p-2 shadow-lg border border-gray-300 text-[#697383] font-semibold rounded-md">
            Cancel
          </button>
          <button
            className={`text-white flex gap-2 items-center bg-[#6d68fb] px-2 py-1 lg:p-2 font-semibold border border-gray-300 justify-center rounded-md transition-opacity duration-300 ${
              isPublishing ? "opacity-50 cursor-not-allowed" : "opacity-100"
            }`}
            onClick={() => shopifyPublish(postId)}
            disabled={isPublishing}
          >
            {isPublishing ? (
              <>
                <span>Publishing...</span>
                <div className="loader"></div>
              </>
            ) : (
              <>
                Publish
                <MdArrowOutward className="text-white text-[15px]" />
              </>
            )}
          </button>
          <div className="lg:hidden">
            <FaBars
              className="text-gray-500 cursor-pointer"
              onClick={() => setIsOverviewVisible(!isOverviewVisible)}
            />
          </div>
        </div>
      </div>

      <div className="bg-white flex relative max-h-[calc(100vh-80px)] overflow-y-auto">
        <div className={`flex-[4] relative ${expanded ? "px-4" : ""}`}>
          <div className="max-w-4xl mx-auto">
            {loading ? (
              <SkeletonLoader />
            ) : (
              body && (
                <Editor
                  content={body}
                  image={image as unknown as ImageData}
                  postId={postId!}
                  editable={true}
                  onDataChange={(data: string) => setBody(data)}
                />
              )
            )}

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
                <BlogPostChat postId={postId!} updateBody={updateBody} />
                <span className="flex justify-center px-4 mt-6 text-sm text-center text-gray-500">
                  Enter a prompt to rewrite your article, section, subheadline,
                  or image—Dexter will handle the rest.
                </span>
              </div>
            )}
          </div>
        </div>

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
