import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { postsData } from "../../../lib/utils/data";
import { FaArrowLeft } from "react-icons/fa";
import Editor from "../../../components/Common/Editor/Editor";
import { MdArrowOutward } from "react-icons/md";
import sampleImage from "../../../assets/sampleImage.svg"
import PostOverview from "./PostOverview"

const PostDetails = () => {
  const { postId } = useParams();
  const [body, setBody] = useState(null)

  const post = postsData.find((post) => post.id === Number(postId));

  return (
    <div className="w-[90%] mx-auto">
  <div className = "flex justify-between items-center"> 
      
      <div className="flex items-center gap-2 mb-4">
        <FaArrowLeft  className="text-[12px] cursor-pointer text-gray-500" onClick={() => window.history.back()} />
          <span>Back</span>
</div >

<div className = "flex items-center gap-4 pb-3">
<div>
      <button className = "bg-white p-2 shadow-lg border border-gray-1 w-[70px]  rounded-md">
        Cancel
        </button>
        </div>
      <div>
      <button className = "text-white flex gap-2 items center bg-[#6d68fb] p-2 w-[100px]  justify-center rounded-md">
       Proceed
< MdArrowOutward className = "text-white text-[15px]"/>
        </button>
        </div>
   </div>
   </div>   
      

   
     
      <div className=" h-screen w-full p-5">
    
        <Editor content={post.content} editable={true}  onDataChange={(data) => setBody(data)

        } />
       
        <img src={sampleImage} alt="Post Image"  className=" w-screen p-4" />
        {/* <p>{post.content}</p>{" "} */}
      </div>
<PostOverview/>
    </div>
  );
};

export default PostDetails;
