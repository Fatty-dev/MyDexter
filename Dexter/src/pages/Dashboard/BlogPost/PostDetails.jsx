import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { postsData } from "../../../lib/utils/data";
import { FaArrowLeft } from "react-icons/fa";
import Editor from "../../../components/Common/Editor/Editor";
import { MdArrowOutward } from "react-icons/md";
import sampleImage from "../../../assets/sampleImage.svg";
import PostOverview from "./PostOverview";
import InputField from "../../../components/Dashboardcomp/InputField";
// import { EditorContent, useEditor } from "@tiptap/react";
// import { extensions } from "../../../constants/TipTapExtensions";

const PostDetails = () => {

  const editable = true

  const { postId } = useParams();
  const [body, setBody] = useState(null);
  const [messages, setMessages] = useState([]);
  const [dailyUsage, setDailyUsage] = useState(0);
  const [dailyLimit, setDailyLimit] = useState(0);
  
  const post = postsData.find((post) => post.id === Number(postId));

  // const onDataChange = (data) => {setBody(data)}
  // const content = post.content

  //  const editor = useEditor({
  //     editable,
  //     extensions: extensions,
  //     // [StarterKit.configure({
  
  //     // }), Heading.configure({
  //     //   HTMLAttributes: {
  //     //     class: "text-xl font-bold",
  //     //     levels: [2]
  //     //   }
  //     // })]
  
  //     content: content,
  //     editorProps: {
  //       attributes: {
  //         class:
  //           "  mt-7 outline-gray-400 p-5 ",
  //       },
  //     },
  //     onUpdate: ({ editor }) => {
  //       const html = editor.getHTML();
  //       onDataChange(html);
  //     },
     
  //   });
  

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
            <button className="text-white flex gap-2 items center bg-[#6d68fb] p-2 w-[100px]  justify-center rounded-md">
              Proceed
              <MdArrowOutward className="text-white text-[15px]" />
            </button>
          </div>
        </div>
      </div>


      <div className=" p-16 w-[80%] bg-white">

      
      <div className="w-full bg-white">

        <Editor
          content={post.content}
          editable={true}
          onDataChange={(data) => setBody(data)}
        />

        <div  className="w-full p-4 mx-auto" ><img src={sampleImage} alt="Post Image"   /></div>

        <InputField addMessage={addMessage} updateUsage={updateUsage}  />
        <span className="flex justify-center pt-2 pb-2 text-sm text-center text-gray-500">
          Enter a prompt to rewrite your article, section, subheadline, or
          image—Dexter will handle the rest.
        </span>
      </div>
      </div>
      {/* <EditorContent editor={editor} />   */}
      <div className="w-[30%]">
      <PostOverview />
      </div>
    </div>
  );
};

export default PostDetails;
