import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Editor from "../../../components/Common/Editor/Editor";
import { MdArrowOutward } from "react-icons/md";
import sampleImage from "../../../assets/sampleImage.svg";
import PostOverview from "./PostOverview";
import InputField from "../../../components/Dashboardcomp/InputField";
import { authApi } from "../../../lib/config/axios-instance";
import { postsData } from "../../../lib/utils/data";

const PostDetails = () => {
  const editable = true;
  const { postId } = useParams();
  const [body, setBody] = useState(null);
  const [messages, setMessages] = useState([]);
  const [dailyUsage, setDailyUsage] = useState(0);
  const [dailyLimit, setDailyLimit] = useState(0);

  const getDetails = async () => {
    try {
      const { data } = await authApi.get(`blog/single?blogPostId=${postId}`);
      if (data) {
        const postData = data.data;
        console.log(data.data.content)

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
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  const addMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const updateUsage = (usage, limit) => {
    setDailyUsage(usage);
    setDailyLimit(limit);
  };

  return (
    <div className="w-full mx-auto overflow-y-scroll">
      <div className="flex items-center justify-between px-16">
        <div className="flex items-center gap-2 mb-4">
          <FaArrowLeft
            className="text-[12px] cursor-pointer text-gray-500"
            onClick={() => window.history.back()}
          />
          <span>Back</span>
        </div>

        <div className="flex items-center gap-4 pb-3">
          <div>
            <button className="bg-white p-2 shadow-lg border border-gray-1 w-[70px]  rounded-md">
              Cancel
            </button>
          </div>
          <div>
            <button className="text-white flex gap-2 items-center bg-[#6d68fb] p-2 w-[100px]  justify-center rounded-md">
              Proceed
              <MdArrowOutward className="text-white text-[15px]" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-16 w-[80%] bg-white">
        {body && <Editor
          content={body}
          editable={true}
          onDataChange={(data) => setBody(data)}
        />}

        <div className="w-full p-4 mx-auto">
          <img src={sampleImage} alt="Post Image" />
        </div>

        <InputField addMessage={addMessage} updateUsage={updateUsage} />
        <span className="flex justify-center pt-2 pb-2 text-sm text-center text-gray-500">
          Enter a prompt to rewrite your article, section, subheadline, or
          image—Dexter will handle the rest.
        </span>
      </div>
      <div className="w-[30%]">
        <PostOverview />
      </div>
    </div>
  );
};

export default PostDetails;
