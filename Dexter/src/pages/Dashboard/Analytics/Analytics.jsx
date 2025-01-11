import React, { useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { RiHome6Line } from "react-icons/ri";
import { BsGlobe } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import SeoDashboard from "./SeoDashboard";
import DomainOptimization from "./DomainOptimization";
import WebsiteEngagement from "./WebsiteEngagement";
import { Details } from "./Details";


const Analytics = () => {
  const [showDetails, setShowDetails] = useState(null);

  console.log(showDetails)
  return (
    <div className="w-[90%] mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <RiHome6Line className="text-gray-500" />
        <h1 className="text-sm text-gray-500">Assistant</h1>
        <HiOutlineChevronRight className="text-gray-500" />
        <p className="text-sm text-gray-500">Analytics</p>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-semibold">Analytics</h1>
        <div className="flex items-center justify-between max-md:gap-4 max-md:flex-col">
        <p className="text-[#7b7b83]  text-[14px]">Track key metrics, uncover opportunities, and optimize your SEO strategy with ease.</p>
      
        <div className="flex items-center gap-2 mb-2 ">
          <div className="flex items-center bg-[#ffffff] justify-center gap-2 p-1 w-[120px] border border-[#eceff2] rounded-full ">
            <BsGlobe className="text-[#abb4c1]" size={16}/>
              <span className=" text-[#404b5e] text-[14px]">Domain</span>
          </div>
          
          <Link to = "#" className="text-[#736efb] text-[14px]">
          http://www.domainsample.com
          </Link>
          <IoIosArrowDown className="text-[#798294]"/>
          </div>
        
      </div>
      </div>
      
      <hr className="my-2" />
      <div className="flex items-center justify-between px-4 py-2 my-4 text-white rounded-lg bg-primary">
        <p className="mt-1 text-sm font-medium">
          Hello Daniel, you have{" "}
          <span className="mr-[0.125rem] underline">
            1 new analytics report{" "}
          </span>{" "}
          available.
        </p>
        <MdClose size={22} />
      </div>

      <SeoDashboard/>

      <div className="flex gap-4 mt-4 max-md:flex-col">
        <DomainOptimization setShowDetails = {setShowDetails}/>
        <WebsiteEngagement setShowDetails = {setShowDetails}/>
      </div>
      {
        showDetails && <Details showDetails = {showDetails} setShowDetails={setShowDetails}/>
      }
    </div>
  );
};

export default Analytics;
