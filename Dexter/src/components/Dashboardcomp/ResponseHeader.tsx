import React, { useState } from "react";
import { MdAccessTime } from "react-icons/md";
import { FiX } from "react-icons/fi";
import { CgMenuRight } from "react-icons/cg";
import Sidebar from "./Sidebar";
import ProModal from "../Common/Modals/ProModal";
import { useUserSubscriptionTypeStore } from "@/lib/store/global.store";
import { useModal } from "@/lib/contexts/modal-context";
import { formatDistanceToNow } from "date-fns";

interface Props {
  chatTitle: string;
  timestamp?: string;
}

const ResponseHeader = ({ chatTitle, timestamp }: Props) => {
  const { type, setType } = useUserSubscriptionTypeStore();
  const [isOpen, setIsOpen] = useState(false);

  const { showModal } = useModal();

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="sticky z-[1000] top-0 bg-[#f8f8f8] w-full mx-auto ml-0 md:ml-[15px] py-0 md:py-4 border-b">
      <div className="flex items-center md:justify-between px-4 py-4 md:py-0 justify-between gap-4">
        {/* Left Section */}
        <div className="hidden items-center gap-1 md:flex">
          <MdAccessTime size={20} className="text-gray-500" />
          {timestamp && (
            <p className="text-sm text-gray-600">
              {formatDistanceToNow(new Date(timestamp), {
                addSuffix: true,
                includeSeconds: true,
              })
                .replace("about ", "")
                .replace("less than ", "")}
            </p>
          )}
        </div>

        <p className="text-sm sm:text-base truncate text-gray-700 font-medium">
          {chatTitle.replace(/"/g, "")}
        </p>

        {/* Title and Button - Adjusted for Mobile View */}
        <div className="hidden md:block">
          {/* Middle Section - Title */}

          {/* Right Section - Button */}
          {type === "free" && (
            <button
              className="bg-primary text-white rounded-full px-4 py-2 text-sm mr-0 md:mr-8"
              onClick={() => showModal(<ProModal />)}
            >
              Try Pro for Free
            </button>
          )}
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-gray-700 text-2xl">
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
