import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { RiHome6Line } from "react-icons/ri";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import { Link } from "react-router-dom";
import Explore from "./Explore";

const Overview = () => {
  return (
    <div className="w-[90%] mx-auto ">
      <div className="flex items-center gap-2 mb-6">
        <RiHome6Line className="text-gray-500" />
        <h1 className="text-sm text-gray-500">Assistant</h1>
        <HiOutlineChevronRight className="text-gray-500" />
        <p className="text-sm text-gray-500">Overview</p>
      </div>
      <div className="flex lg:gap-12 max-md:gap-4 md:gap-4 max-md:flex-col md:flex-col lg:flex-row">
        <div className="lg:w-[60%] max-md:w-full md:w-full">
          <div className="flex flex-col gap-3 pt-4">
            <h1 className="text-3xl font-semibold ">
              Welcome to your assistant setup
            </h1>
            <div className="flex justify-between max-md:gap-4 max-md:flex-col">
              <p className="text-[#7b7b83]  text-[13px]">
                Let&apos;s get your assistant ready in just a few steps.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-4">
            <Step1 />
            <Step2 />
            <Step3 />
          </div>

          <div className="flex items-center gap-4 my-4 text-sm">
            <div className="flex items-center gap-1 p-1 w-[70px] justify-center rounded-full bg-[#f9fafb] border">
              <div className="w-3 h-3 rounded-full bg-[#17b26a]" />
              <span className="text-[#17b26a]">Online</span>
            </div>
            <p className="text-[#92a2bb]">
              Have questions? Feel free to{" "}
              <Link to="#" className="text-[#9793fa] font-semibold">
                contact us.
              </Link>
            </p>
          </div>
        </div>
        <Explore className= "" />
      </div>
    </div>
  );
};

export default Overview;
