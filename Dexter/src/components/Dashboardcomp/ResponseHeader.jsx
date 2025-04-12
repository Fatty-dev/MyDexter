import React, { useState } from "react";
import { MdAccessTime } from "react-icons/md";
import { FiX } from "react-icons/fi";
import { CgMenuRight } from "react-icons/cg";
import Sidebar from "./Sidebar";
import ProModal from "../Common/Modals/ProModal";
import { useUserSuscriptionTypeStore } from "@/lib/store/global.store";

const ResponseHeader = ({ chatTitle, timestamp }) => {
  const { type, setType } = useUserSuscriptionTypeStore();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formattedTime = new Date(timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="sticky z-[1000] top-0 bg-[#F3F4F6] w-full mx-auto ml-0 md:ml-[15px] py-0 md:py-4 border-b">
      <div className="flex flex-col md:flex-row items-start md:items-center px-4 justify-between gap-4">
        {/* Left Section */}
        <div className="flex items-center gap-2">
          <MdAccessTime size={20} className="text-gray-500" />
          <p className="text-xs text-gray-600">{formattedTime}</p>
        </div>

        {/* Title and Button - Adjusted for Mobile View */}
        <div className="flex w-full justify-between items-center md:flex-1 ">
          {/* Middle Section - Title */}
          <p className="text-sm sm:text-base truncate text-gray-700">
            {chatTitle}
          </p>

          {/* Right Section - Button */}
          {type === "free" && (
            <button
              className="bg-primary text-white rounded-full px-4 py-2 text-sm mr-0 md:mr-8"
              onClick={() => setIsModalOpen(true)}
            >
              Try Pro for Free
            </button>
          )}
        </div>
        {isModalOpen && <ProModal onClose={() => setIsModalOpen(false)} />}

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleSidebar}
            className="text-gray-700 text-2xl fixed top-3 right-4 z-[1100]"
          >
            {isOpen ? <FiX size={22} /> : <CgMenuRight size={22} />}
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 z-10 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 bg-white h-full shadow-xl z-20 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar isOpen={isOpen} />
      </div>
    </div>
  );
};

export default ResponseHeader;