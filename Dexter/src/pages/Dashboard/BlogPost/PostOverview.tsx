import { useEffect, useState } from "react";
import { CiCircleQuestion } from "react-icons/ci";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaCheck } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { GrPowerCycle } from "react-icons/gr";
import { FaRegSave } from "react-icons/fa";
import { IoMdClose, IoMdCopy } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { authApi } from "@/lib/config/axios-instance";

const metaTags = [
  "Meta Title",
  "Meta Description",
  "H1 Header",
  "H2 Header",
  "Content Length",
];

const metaData = [
  { name: "Main keyword", content: "Cleaning products" },
  {
    name: "AI prompt",
    content:
      "The post should be a top-10 best cleaning product brands, from best to...",
  },
  { name: "Meta Title", content: "Effective cleaning products" },
  {
    name: "Meta description",
    content:
      "Discover top-notch cleaning products that make your home shine. Learn expert tips for using these essentials to achieve a spotless, fresh living space effortlessly.",
  },
];

const settings = [
  {
    name: "Post settings",
    icon: <HiOutlineMenuAlt1 />,
  },
  {
    name: "Re-write",
    icon: <GrPowerCycle />,
  },
  {
    name: "Save draft",
    icon: <FaRegSave />,
  },
  {
    name: "Copy text",
    icon: <IoMdCopy />,
  },
];

const PostOverview = () => {
  const { postId } = useParams();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [showOverview, setShowOverview] = useState(true);
  const [post, setPost] = useState<any>(null);
  const [messages, setMessages] = useState([]);
  const [dailyUsage, setDailyUsage] = useState(0);
  const [dailyLimit, setDailyLimit] = useState(0);
  const [loading, setLoading] = useState(false);

  const getDetails = async () => {
    setLoading(true);
    try {
      const { data } = await authApi.get(`blog/single?blogPostId=${postId}`);
      if (data) {
        const postData = data.data;
        // console.log(data.data.content);

        setPost(postData);
        // setDailyUsage(postData.performance.organicTraffic);
        // setDailyLimit(postData.performance.pagesPerSession);

        console.log("Post Metadata: ", postData.metadata);
        console.log("SEO Analysis: ", postData.seoAnalysis);
      } else {
        console.error("Failed to fetch the blog post:", data.message);
      }
    } catch (error: any) {
      console.error("Error fetching blog post:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div
      className={`max-h-[calc(100vh-80px)] p-4 scrollbar-none overflow-y-auto bottom-0 bg-white shadow-lg border border-gray-300 ${
        showOverview ? "block" : "hidden"
      }`}
    >
      {/* Schedule */}
      <div className="flex items-center justify-between my-3">
        {/* <IoMdClose
          className="cursor-pointer absolute right-1 top-2"
          onClick={() => setShowOverview(false)}
        /> */}
        <div className="flex items-center gap-2">
          <h1 className="font-semibold">Schedule this post</h1>
          <CiCircleQuestion className="text-[15px] cursor-pointer text-gray-500" />
        </div>
        <HiOutlineDotsVertical
          className="cursor-pointer"
          onClick={() => {
            setSettingsOpen(!settingsOpen);
          }}
        />
      </div>

      {/* <p className="bg-[#f9fafb] text-[#9a86f6] p-3 my-4 shadow-md rounded-lg">
        Publish immediately
      </p> */}
      {/* <div className="flex items-center gap-2 p-2">
        <input type="checkbox" />
        <label>Enable bulk posting</label>
      </div> */}

      {/* SEO Analysis */}

      <div className="flex items-center gap-2 p-2 my-3">
        <h1 className="font-semibold">SEO Content Analysis</h1>
        <CiCircleQuestion className=" text-[15px] cursor-pointer text-gray-500" />
      </div>

      <div className="bg-[#f9fafb] rounded-lg p-4 shadow-md">
        <div className="flex items-center justify-between">
          <p className="text-[#525e70]">Overall SEO score</p>
          <p className="text-[#384356] text-[20px] font-semibold">
            {post?.seoScore}%
          </p>
        </div>
        <div className="w-full h-[10px] rounded-[10px] bg-gray-300 relative overflow-hidden">
          <div
            className="h-full rounded-[10px] bg-[#4ab282] transition-all duration-300"
            style={{ width: `${post?.seoScore || 0}%` }}
          ></div>
        </div>
      </div>

      <div>
        <p className="text-[10px] text-gray-500 my-4">
          The main keyword{" "}
          <span className="font-bold">
            ({post?.mainKeyword || "no Keyword"})
          </span>{" "}
          is in :
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {metaTags.map((tag, index) => (
          <div
            key={index}
            className="bg-[#f9fafb] text-[#6ccea1] text-sm p-3 rounded-lg flex justify-between items-center"
          >
            <span>{tag}</span>
            <FaCheck />
          </div>
        ))}
      </div>

      {/* Meta Data */}
      <div className="flex items-center justify-between p-2 mt-4 mb-2">
        <div className="flex items-center gap-2">
          <h1 className="font-semibold">Meta Data</h1>
          <CiCircleQuestion className="text-[15px] cursor-pointer text-gray-500" />
        </div>
        <FaAngleDown className="text-gray-500 cursor-pointer" />
      </div>

      <p className="text-[8px] text-gray-500 px-2 mb-3 relative bottom-2">
        {post?.metadata.wordCount} Words, {post?.metadata.characterCount}{" "}
        Characters
      </p>

      <div className="flex flex-col gap-3  text-[10px]">
        <div className="bg-[#f9fafb] text-gray-500  p-3 rounded-lg flex justify-between items-center">
          <p className="">
            Main keyword :
            <span className="font-bold">
              {" "}
              {post?.mainKeyword || "no Keyword"}{" "}
            </span>
          </p>
        </div>

        <div className="bg-[#f9fafb] text-gray-500  p-3 rounded-lg flex justify-between items-center">
          <p className="">
            Ai prompt :<span className="font-bold"> {post?.aiPrompt} </span>
          </p>
        </div>

        <div className="bg-[#f9fafb] text-gray-500  p-3 rounded-lg flex justify-between items-center">
          <p className="">
            Meta Title :
            <span className="font-bold"> {post?.metadata.metaTitle} </span>
          </p>
        </div>

        <div className="bg-[#f9fafb] text-gray-500  p-3 rounded-lg flex justify-between items-center">
          <p className="">
            Meta Description :
            <span className="font-bold">
              {" "}
              {post?.metadata.metaDescription}{" "}
            </span>
          </p>
        </div>
      </div>

      {settingsOpen && (
        <Link
          to={`/dashboard/blog-post/${postId}/settings`}
          className="bg-white absolute right-8 top-12 shadow-md p-3 flex items-center gap-2  flex-col"
        >
          {settings.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSettingsOpen(false);
              }}
              className="flex items-center w-full gap-3 p-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100"
            >
              <span className="text-sm cursor-pointer">{item.icon}</span>
              <span className="text-sm">{item.name}</span>
            </div>
          ))}
        </Link>
      )}
    </div>
  );
};

export default PostOverview;
