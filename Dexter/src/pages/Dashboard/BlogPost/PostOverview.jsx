import React, {useState} from 'react'
import { CiCircleQuestion } from "react-icons/ci";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaCheck } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { GiSettingsKnobs } from "react-icons/gi";
import { GrPowerCycle } from "react-icons/gr";
import { FaRegSave } from "react-icons/fa";
import { IoMdCopy } from "react-icons/io";

const PostOverview = () => {
  const [settingsOpen, setSettingsOpen] = useState(false)
  
  const metaTags = [
    "Meta Title",
    "Meta Description",
    "H1 Header",
    "H2 Header",
    "Content Length"
  ]

  const metaData = [
   {name: "Main keyword",
    content: "Cleaning products"
   },
   {name: "AI prompt",
    content: "The post should be a top-10 best cleaning product brands, from best to..."
   },
   {name: "Meta Title",
    content: "Effective cleaning products"
   },
   {name: "Meta description",
    content:"Discover top-notch cleaning products that make your home shine. Learn expert tips for using these essentials to achieve a spotless, fresh living space effortlessly."
   },
  ]

  const settings = [
    {
      name:"Post settings",
      icon: <GiSettingsKnobs/>
    },
    {
      name:"Re-write",
      icon:<GrPowerCycle/>
    },
    {
      name:"Save draft",
      icon: <FaRegSave/>
    },
    {
      name:"Copy text",
      icon: <IoMdCopy/>
    },
  ]

  return (
    <div className = "absolute right-0 top-[10%] p-5 w-[20%] h-fit bottom-0 bg-white shadow-lg border border-gray-300">
{/* Schedule */}
<div className = "flex justify-between items-center my-3">
    
<div className = "flex gap-2 items-center">
        <h1 className = "font-semibold">
            Schedule this post
        </h1> 
        <CiCircleQuestion className="text-[15px] cursor-pointer text-gray-500" />
             </div>
             <HiOutlineDotsVertical className = "cursor-pointer" onClick = {() => {setSettingsOpen(!settingsOpen)}}/>
</div>

<p className = "bg-[#f9fafb] text-[#9a86f6] p-3 my-4 shadow-md rounded-lg">Publish immediately</p>
<div className = "flex gap-2 items-center p-2">
<input type = "checkbox"/>
<label>Enable bulk posting</label>
</div>

{/* SEO Analysis */}

   
<div className = "flex gap-2 items-center p-2 my-3">
        <h1 className = "font-semibold">
            SEO Content Analysis
        </h1> 
        <CiCircleQuestion className="cursor-pointer text-[15px] cursor-pointer text-gray-500" />
             </div>

             <div className = "bg-[#f9fafb] rounded-lg p-4 shadow-md">
           <div className = "flex justify-between items-center">
            <p className="text-[#525e70]">Overall SEO score <span className = "text-gray-400">(5/5)</span> </p>
            <p className = "text-[#384356] text-[20px] font-semibold">100%</p>
</div>
<div className = "w-full h-[10px] rounded-[10px] bg-gray-500 relative">
<div className = "w-full h-[10px] rounded-[10px] bg-[#4ab282] absolute"></div>


</div>
 </div>

<div>
  <p className = "text-[10px] text-gray-500 my-4">The main keyword <span className = "font-bold">(Cleaning product)</span> is in :</p>
</div>

<div className = "flex flex-col gap-3">
  {
    metaTags.map((tag,index) => (
      <div key = {index} className = "bg-[#f9fafb] text-[#6ccea1] text-[12px] p-3 rounded-lg flex justify-between items-center">
        <span>
        {tag}
        </span>
     <FaCheck/>
         </div>
    ))
  }
  </div>
            
{/* Meta Data */}
<div className = "flex justify-between items-center p-2 mt-4 mb-2">
    
<div className = "flex gap-2 items-center">
        <h1 className = "font-semibold">
           Meta Data
        </h1> 
        <CiCircleQuestion className="text-[15px] cursor-pointer text-gray-500" />
             </div>
             <FaAngleDown className = "cursor-pointer text-gray-500"/>
             </div>

             
              <p className = "text-[10px] text-gray-500 px-2 mb-3 relative bottom-2">2331 Words, 14328 Characters</p>
             
              <div className = "flex flex-col gap-3  text-[10px]">
  {
    metaData.map((data,index) => (
      <div key= {index} className = "bg-[#f9fafb] text-gray-500  p-3 rounded-lg flex justify-between items-center">
        <p className = "">
          {data.name} : 
       <span className = "font-bold" > {data.content} </span> 
        </p>
 
         </div>
    ))
  }
  </div>

  {
    settingsOpen && (
      <div className = "bg-white absolute right-12 top-12 shadow-md p-4 flex items-center gap-2 w-[150px] flex-col"> 
        {
          settings.map((item, index) => (
            <div key = {index}
            onClick = {() => {
              setSettingsOpen(false)
            }}
            className = "cursor-pointer flex items-center gap-3  text-gray-500 p-2 hover:bg-gray-100 rounded-lg w-full"
            >
              <span  className='text-[14px] cursor-pointer'>{item.icon}</span>
              <span>{item.name}</span>
               </div>
          ))
        }
        </div>
    )
  }
    </div>
  )
}

export default PostOverview