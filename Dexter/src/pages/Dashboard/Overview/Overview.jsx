import React, { useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { FiMenu, FiX } from "react-icons/fi";
import { CgMenuRight } from "react-icons/cg";
import { RiHome6Line } from "react-icons/ri";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import { Link } from "react-router-dom";
import Explore from "./Explore";
import Sidebar from "@/components/Dashboardcomp/Sidebar";

const Overview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <div className="w-[90%] mx-auto mt-[1.5rem] ">

               {/* Hamburger Menu */}
               <div className="sm:block md:hidden absolute top-5 left-4 z-20">
        <button onClick={toggleSidebar} className="text-3xl text-gray-700">
          {isOpen ? <FiX size={22} /> : <CgMenuRight size={22} />}
        </button>
      </div>

            {/* Sidebar */}
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

      <div className=" ml-8 md:ml-0 flex items-center gap-2 mb-6">
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
