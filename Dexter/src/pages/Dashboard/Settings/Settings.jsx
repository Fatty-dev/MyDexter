// App.js
import React, { useState } from "react";
import {
  FaCog,
  FaUserAlt,
  FaBriefcase,
  FaDatabase,
  FaIdBadge,
  FaLink,
  FaShieldAlt,
  FaInfoCircle,
} from "react-icons/fa";
import { HiOutlineChevronRight } from "react-icons/hi";
import { RiHome6Line } from "react-icons/ri";


// Sidebar menu dataset
const sidebarMenu = [
  { id: 1, label: "General", icon: <FaCog />, isActive: true },
  { id: 2, label: "Personalization", icon: <FaUserAlt />, isActive: false },
  { id: 3, label: "Business", icon: <FaBriefcase />, isActive: false },
  { id: 4, label: "Data control", icon: <FaDatabase />, isActive: false },
  { id: 5, label: "Builder profile", icon: <FaIdBadge />, isActive: false },
  { id: 6, label: "Connected apps", icon: <FaLink />, isActive: false },
  { id: 7, label: "Security", icon: <FaShieldAlt />, isActive: false },
  { id: 8, label: "About", icon: <FaInfoCircle />, isActive: false },
];

// Dropdown options dataset
const themeOptions = ["System", "Dark", "Light"];

const Settings = () => {
  const [theme, setTheme] = useState("Light");

  return (
    <div className=" w-[90%] mx-auto ">
      {/* Sidebar */}
        <div className="p-6 flex items-center gap-2">
        <RiHome6Line className="text-gray-500" />
          <h1 className="text-sm text-gray-500">Assistant</h1>
          <HiOutlineChevronRight className="text-gray-500" />
          <p className="text-sm text-gray-500">Settings</p>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Settings</h2>
          <div className="space-x-3 flex items-center">
            <button className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300">
              Cancel
            </button>
            <button className="px-4 py-2 text-white bg-primary rounded hover:bg-primary">
              Save
            </button>
          </div>
        </div>

<div className="flex items-start w-full gap-8 justify-between">
        <aside className="w-[30%]">
        <nav className="mt-4">
          <ul>
            {sidebarMenu.map((item) => (
              <li
                key={item.id}
                className={`flex items-center text-[#344054] px-6 py-3 ${
                  item.isActive ? "bg-[#E7E6FE] text-primary hover:bg-gray-100" : ""
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="w-[70%]">

        <div className=" bg-white shadow-md mt-4 rounded-lg p-6">
          {/* Theme */}
          <div className="flex items-center justify-between py-4 border-b">
            <span className="text-gray-700">Theme</span>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="px-3 py-2 border rounded"
            >
              {themeOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Language */}
          <div className="flex items-center justify-between py-4 border-b">
            <span className="text-gray-700">Language</span>
            <button className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300">
              English
            </button>
          </div>

          {/* Archived Posts */}
          <div className="flex items-center justify-between py-4 border-b">
            <span className="text-gray-700">Archived posts</span>
            <button className="px-4 py-2 text-primary border border-pprimary rounded hover:bg-purple-50">
              Archive all
            </button>
          </div>

          {/* Delete All Posts */}
          <div className="flex items-center justify-between py-4">
            <span className="text-gray-700">Delete all posts</span>
            <button className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700">
              Archive all
            </button>
          </div>
        </div>
      </main>
      </div>
    </div>
  );
};

export default Settings;