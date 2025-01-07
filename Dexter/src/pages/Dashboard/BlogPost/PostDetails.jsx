import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { postsData } from "../../../lib/utils/data";
import { FaArrowLeft } from "react-icons/fa";
import Editor from "../../../components/Common/Editor/Editor";
import { MdArrowOutward } from "react-icons/md";
import sampleImage from "../../../assets/sampleImage.svg";
import PostOverview from "./PostOverview";
import InputField from "../../../components/Dashboardcomp/InputField";

const PostDetails = () => {
  const { postId } = useParams();
  const [body, setBody] = useState(null);
  const [messages, setMessages] = useState([]);
  const [dailyUsage, setDailyUsage] = useState(0);
  const [dailyLimit, setDailyLimit] = useState(0);

  const addMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const updateUsage = (usage, limit) => {
    setDailyUsage(usage);
    setDailyLimit(limit);
  };

  const post = postsData.find((post) => post.id === Number(postId));

  return (
    <div className="w-full overflow-y-scroll mx-auto">
      <div className="flex justify-between items-center px-16">
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
            <button className="text-white flex gap-2 items center bg-[#6d68fb] p-2 w-[100px]  justify-center rounded-md">
              Proceed
              <MdArrowOutward className="text-white text-[15px]" />
            </button>
          </div>
        </div>
      </div>

      <div className="">
      <div className="w-full bg-white">
        <Editor
          content={post.content}
          editable={true}
          onDataChange={(data) => setBody(data)}
        />

        <div  className="w-[90%] mx-auto p-4 h-[20%]" ><img src={sampleImage} alt="Post Image"   /></div>

        <InputField addMessage={addMessage} updateUsage={updateUsage} />
        <span className="text-sm text-gray-500 text-center flex justify-center pb-2 pt-2">
          Enter a prompt to rewrite your article, section, subheadline, or
          image—Dexter will handle the rest.
        </span>
      </div>
      </div>
      <div className="w-[30%]">
      <PostOverview />
      </div>
    </div>
  );
};

export default PostDetails;
