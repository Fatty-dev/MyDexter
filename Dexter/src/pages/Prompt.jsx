import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { CgMenuRight } from "react-icons/cg";
import Header from "../components/Dashboardcomp/Header";
import InputField from "../components/Dashboardcomp/InputField";
import PromptTags from "../components/Dashboardcomp/PromptTag";
import Sidebar from "../components/Dashboardcomp/Sidebar";

const Prompt = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [dailyUsage, setDailyUsage] = useState(0);
  const [dailyLimit, setDailyLimit] = useState(0);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const addMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const updateUsage = (usage, limit) => {
    setDailyUsage(usage);
    setDailyLimit(limit);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 relative">
      {/* Header */}
      <Header />

      {/* Hamburger Menu */}
      <div className="sm:block md:hidden absolute top-4 left-4 z-20">
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

      {/* Main Content */}
      <div className="w-full p-4 mx-auto sm:w-3/4">
        <h2 className="mt-6 text-3xl sm:text-4xl font-semibold text-[#101828] text-center">
          Good day!
        </h2>
        <InputField addMessage={addMessage} updateUsage={updateUsage} />
        <p className="mt-4 text-sm sm:text-md text-[#0F182A] text-center">
          Choose a prompt below or write your own to start chatting with Dexter.
        </p>
        <p className="mt-4 text-sm sm:text-md text-[#0F182A] text-center">
          Ask about:
        </p>
        <PromptTags />
      </div>
    </div>
  );
};

export default Prompt;
