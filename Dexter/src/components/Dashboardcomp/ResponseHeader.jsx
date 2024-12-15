import React, { useState } from "react";
import { MdAccessTime } from "react-icons/md";
import { FiX } from "react-icons/fi";
import { CgMenuRight } from "react-icons/cg";
import Sidebar from "./Sidebar";

const ResponseHeader = ({chatTitle,timestamp }) => {
  const [isOpen, setIsOpen] = useState(false);
  const formattedTime = new Date(timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="fixed z-[1000] top-0 bg-[#F3F4F6] w-full md:w-[70%] lg:w-[78%] md:ml-[1.5rem] xl:ml-0 border-b py-3 px-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Left Section */}
        <div className="flex items-center gap-2">
          <MdAccessTime size={20} className="text-gray-500" />
          <p className="text-xs text-gray-600">{formattedTime}</p>
        </div>

        {/* Middle Section */}
        <div className="flex-1 text-start">
          <p className="text-sm sm:text-base md:truncate md:w-60 lg:w-full text-gray-700">
          {chatTitle}
          </p>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button className="bg-primary text-white rounded-full px-6 py-2 text-sm">
            Try Pro for Free
          </button>

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
