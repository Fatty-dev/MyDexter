import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import logo from "../../assets/Main_Logo.svg";
import blog from "../../assets/blog.svg";
import overview from "../../assets/overview.svg";
import strategies from "../../assets/Strategy.svg";

import signin from "../../assets/signin.svg";
import { BsPersonCircle } from "react-icons/bs";
import ai from "../../assets/ai.svg";
import analytics from "../../assets/analytics.svg";
import collapse from "../../assets/collapse.svg";
import logoIcon from "../../assets/logo-icon.svg";
import useEmailStore, {
  useSidebar,
  useUserSuscriptionTypeStore,
} from "../../lib/store/global.store";
import { authApi } from "../../lib/config/axios-instance";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";
import { BsGear, BsBoxArrowRight, BsPersonLinesFill } from "react-icons/bs";
import prologo from "../../assets/proLogo.svg";
import toast from "react-hot-toast";
import { BsReverseLayoutSidebarReverse } from "react-icons/bs";

const Sidebar = ({ isOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = useEmailStore();
  const { type } = useUserSuscriptionTypeStore();
  const { chatId } = useParams();

  const isSignedUp = Boolean(localStorage.getItem("accessToken"));

  const [recentChats, setRecentChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  const { expanded, toggleExpand } = useSidebar();

  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const response = await authApi.get("/chat/history");
        if (response.data.success) {
          setRecentChats(response.data.data);
        } else {
          toast.error("Failed to load chat history.");
        }
      } catch (error) {
        toast.error("Error fetching chat history.");
      } finally {
        setLoading(false);
      }
    };

    if (isSignedUp) {
      fetchChatHistory();
    } else {
      setLoading(false);
    }
  }, [isSignedUp]);

  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  const navigationItems =
    type === "pro"
      ? [
          {
            id: 1,
            label: "Overview",
            icon: overview,
            path: "/dashboard/Overview",
          },
          { id: 2, label: "Dexter AI", icon: ai, path: "/dashboard" },
          {
            id: 3,
            label: "Analytics",
            icon: analytics,
            path: "/dashboard/analytics",
          },
          {
            id: 4,
            label: "Blog Post",
            icon: blog,
            path: "/dashboard/blog-post",
          },
          {
            id: 5,
            label: "Strategies",
            icon: strategies,
            path: "/dashboard/strategies",
          },
        ]
      : isSignedUp
      ? [
          { id: 1, label: "Dexter AI", icon: ai, path: "/dashboard" },
          {
            id: 2,
            label: "Analytics",
            icon: analytics,
            path: "/dashboard/analytics",
          },
          {
            id: 3,
            label: "Blog Post",
            icon: blog,
            path: "/dashboard/blog-post",
          },
        ]
      : [
          { id: 1, label: "Dexter AI", icon: ai, path: "/dashboard" },
          {
            id: 2,
            label: "Analytics",
            icon: analytics,
            path: "/dashboard/analytics",
          },
          {
            id: 3,
            label: "Blog Post",
            icon: blog,
            path: "/dashboard/blog-post",
          },
          { id: 4, label: "Sign In", icon: signin, path: "/login" },
        ];

  return (
    <div
      className={`fixed top-0 left-0 flex flex-col z-[2000] justify-between bg-white h-full shadow-xl transform transition-transform duration-300 ease-in-out ${
        expanded ? "w-64" : "w-16"
      } ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
    >
      {/* Sidebar Header */}
      <div
        className={`${
          expanded ? "px-6" : "px-5"
        } pt-8 flex items-center justify-between`}
      >
        {expanded && (
          <img
            src={`${expanded ? (type === "pro" ? prologo : logo) : logoIcon}`}
            alt="Dexter AI Logo"
            width={30}
            className={!expanded ? "w-[1rem]" : "w-[11rem]"}
          />
        )}
        <button className="" onClick={toggleExpand}>
          <img src={collapse} alt="Collapse Sidebar" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className={` mt-6 ${expanded ? "px-6 space-y-1" : "px-4 space-y-5"}`}>
        {expanded && <p className="text-secondary text-xs">ASSISTANT</p>}
        {navigationItems.map((item) => (
          <div
            key={item.id}
            className={`flex items-center space-x-3 cursor-pointer rounded-md ${
              expanded ? "p-2" : "p-1"
            } ${
              location.pathname === item.path
                ? "bg-hover text-[#344054]"
                : "hover:text-primary hover:bg-hover"
            }`}
            onClick={() => navigate(item.path)}
          >
            <img
              src={item.icon}
              className={expanded ? "w-[10%]" : "flex-shrink-0 w-5"}
              alt={`${item.label} icon`}
            />
            {expanded && (
              <span className="text-[tetiary] font-medium text-sm md:text-base">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </nav>

      {!isSignedUp && (
        <div className="mt-6 border-t px-6">
          <p className="text-secondary text-sm mt-4 mb-3">
            Create a free account, or go Pro to unlock automated blog creation
            and domain analytics!
          </p>
          <button
            className="px-4 py-2 text-primary border border-primary rounded-full w-full font-medium hover:bg-primary hover:text-white"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>
      )}

      {/* Recent Chats Section */}
      {isSignedUp && expanded && (
        <div className="mt-6 border-t  px-6 md:px-4">
          <p className="text-secondary my-4 text-sm font-semibold mb-2">
            RECENT CHATS
          </p>
          {loading ? (
            <p className="text-sm text-gray-500">Loading chats...</p>
          ) : recentChats.length > 0 ? (
            <ul className="space-y-2 overflow-y-auto h-[15rem] text-tetiary text-sm">
              {recentChats.map((chat) => (
                <div
                  key={chat._id}
                  className={`cursor-pointer flex items-center py-2 px-2 rounded-md ${
                    chat._id === chatId
                      ? "text-primary" // Active chat style
                      : "hover:text-primary hover:bg-hover"
                  }`}
                  onClick={() => navigate(`/dashboard/chat/${chat._id}`)} // Use chat._id here
                >
                  <span className="truncate">{chat.title}</span>
                </div>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">No recent chats available.</p>
          )}
        </div>
      )}

      {/* Conditional Footer Section */}
      {isSignedUp && (
        <div className="mt-auto px-6 pb-6">
          <div className="flex items-center space-x-2 relative">
            <div
              className="w-8 h-8 rounded-full text-gray-200 flex items-center justify-center cursor-pointer"
              onClick={toggleDropdown}
            >
              <BsPersonCircle size={24} />
            </div>
            {expanded && (
              <span className="text-secondary text-sm font-medium">
                {email}
              </span>
            )}

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute bottom-5 right-6 mt-2 bg-white shadow-lg rounded-md w-48 py-2 z-30">
                <div
                  className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => navigate("/dashboard/settings")}
                >
                  <IoSettingsOutline className="mr-2 text-[#667085]" />
                  <span className="text-[#344054] text-medium text-sm">
                    Settings
                  </span>
                </div>
                <div
                  className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => navigate("/plans")}
                >
                  <BsPersonLinesFill className="mr-2 text-[#667085]" />
                  <span className="text-[#344054] text-medium text-sm">
                    Plans
                  </span>
                </div>
                <div
                  className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => navigate("/support")}
                >
                  <MdOutlineContactSupport className="mr-2 text-[#667085]" />
                  <span className="text-[#344054] text-medium text-sm">
                    Support
                  </span>
                </div>
                <div
                  className="flex items-center border-t px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                  onClick={() => {
                    localStorage.removeItem("accessToken");
                    navigate("/login");
                  }}
                >
                  <BsBoxArrowRight className="mr-2 text-[#667085]" />
                  <span className="text-[#344054] text-medium text-sm">
                    Log out
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {!isSignedUp && (
        <div className="px-6 mt-6 pb-6 border-t md:px-6">
          <ul className="space-y-2 text-secondary font-semibold mt-4">
            <li className="cursor-pointer hover:text-primary">
              Why My Dexter?
            </li>
            <li className="cursor-pointer hover:text-primary">FAQ</li>
            <li className="cursor-pointer hover:text-primary">
              Terms & Policies
            </li>
          </ul>
          <p className="mt-4 text-xs text-secondary">© 2024 My Dexter</p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
