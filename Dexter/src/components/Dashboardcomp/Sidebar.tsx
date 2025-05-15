import { useEffect, useState, useRef, useMemo } from "react";
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
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";
import { BsBoxArrowRight, BsPersonLinesFill } from "react-icons/bs";
import prologo from "../../assets/proLogo.svg";
import ProModal from "../Common/Modals/ProModal";
import useEmailStore, {
  useAuthStore,
  useSidebar,
  useUserPlatformSiteStore,
  useUserSubscriptionTypeStore,
} from "../../lib/store/global.store";
import { useModal } from "@/lib/contexts/modal-context";
import useUserInfo from "@/lib/hooks/useUserInfo";
import { useQuery } from "@tanstack/react-query";
import { getChatHistory } from "@/lib/services/chat.service";
import useDropDown from "@/lib/hooks/useDropdown";
import { fadeToTopVariant } from "@/lib/utils/variants";
import { AnimatePresence, motion } from "framer-motion";
import { LoginModal } from "@/pages/Onboard/Login";

interface Props {
  isOpen?: boolean;
}

const Sidebar = ({ isOpen }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = useEmailStore();
  const { type, setType, clearSubscription } = useUserSubscriptionTypeStore();
  const { clearExpiresIn, accessToken, resetAuthStore } = useAuthStore();
  const { chatId } = useParams();

  const [openModal, setOpenModal] = useState(false);
  const { expanded, toggleExpand } = useSidebar();
  const { resetPlatforms } = useUserPlatformSiteStore();

  const { showModal: showSignInModal } = useModal();
  const {
    dropdownRef,
    isOpen: isDropdownOpen,
    toggleDropdown,
    closeDropdown,
  } = useDropDown();

  const logout = () => {
    clearExpiresIn();
    resetPlatforms();
    clearSubscription();
    resetAuthStore();

    navigate("/login");
  };

  const { user } = useUserInfo();

  const { data: history, isPending: loading } = useQuery({
    queryKey: ["history"],
    queryFn: getChatHistory,
    refetchOnWindowFocus: false,
    enabled: !!accessToken,
  });

  useEffect(() => {
    if (!user) return;
    const subscriptionType = user.subscription?.type;
    setType(subscriptionType);
  }, [user]);

  const navigationItems = useMemo(
    () =>
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
        : accessToken
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
            {
              id: 4,
              label: "Sign In",
              icon: signin,
              path: "/login",
              onClick: () => showSignInModal(<LoginModal />),
            },
          ],
    [type, accessToken]
  );

  const showModal = () => {
    setOpenModal(true);
  };

  const handleFAQ = () => {
    navigate("/faq");
  };

  const hyperLink = () => {
    navigate("/dashboard");
  };

  return (
    <div
      className={`fixed top-0 left-0 flex flex-col z-[1000] justify-start bg-white h-full shadow-xl transform transition-transform duration-300 ease-in-out ${
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
            onClick={hyperLink}
          />
        )}
        <button className="" onClick={toggleExpand}>
          <img src={collapse} alt="Collapse Sidebar" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={` mt-6 ${expanded ? "px-6 space-y-1" : "px-4 space-y-5"}`}
      >
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
            onClick={() =>
              item.onClick ? item.onClick() : navigate(item.path)
            }
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

      {/* Recent Chats Section */}
      {accessToken && expanded && (
        <div className="mt-6 border-t  px-6 md:px-4">
          <p className="text-secondary my-4 text-sm font-semibold mb-2">
            RECENT CHATS
          </p>
          {loading ? (
            <p className="text-sm text-gray-500">Loading chats...</p>
          ) : history?.length ? (
            <ul className="space-y-2 overflow-y-auto h-[15rem] text-tetiary text-sm">
              {history.map((chat: { _id: string; title: string }) => (
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
      {accessToken && (
        <div className="mt-auto px-6 pb-6">
          <div className="relative" ref={dropdownRef}>
            <div
              className="flex items-center space-x-2 cursor-pointer select-none"
              onClick={toggleDropdown}
            >
              <div className="w-8 h-8 rounded-full text-gray-200 flex items-center justify-center cursor-pointer">
                <BsPersonCircle size={24} />
              </div>
              {expanded && (
                <span className="text-secondary text-sm font-medium">
                  {email.length > 20 ? `${email.slice(0, 20)}...` : email}
                </span>
              )}
            </div>

            {/* Dropdown */}
            <AnimatePresence mode="wait">
              {isDropdownOpen && (
                <motion.div
                  {...fadeToTopVariant}
                  className={`absolute bottom-10 mt-2 bg-white shadow-lg rounded-md w-48 py-2 z-30 ${
                    expanded ? "right-6" : "left-0"
                  }`}
                >
                  <div
                    className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => (
                      navigate("/dashboard/settings"), closeDropdown()
                    )}
                  >
                    <IoSettingsOutline className="mr-2 text-[#667085]" />
                    <span className="text-[#344054] text-medium text-sm">
                      Settings
                    </span>
                  </div>
                  <div
                    className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => (navigate("/plans"), closeDropdown())}
                  >
                    <BsPersonLinesFill className="mr-2 text-[#667085]" />
                    <span className="text-[#344054] text-medium text-sm">
                      Plans
                    </span>
                  </div>
                  <div
                    className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => (navigate("/support"), closeDropdown())}
                  >
                    <MdOutlineContactSupport className="mr-2 text-[#667085]" />
                    <span className="text-[#344054] text-medium text-sm">
                      Support
                    </span>
                  </div>
                  <div
                    className="flex items-center border-t px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                    onClick={() => (logout(), closeDropdown())}
                  >
                    <BsBoxArrowRight className="mr-2 text-[#667085]" />
                    <span className="text-[#344054] text-medium text-sm">
                      Log out
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}

      {!accessToken && expanded && (
        <div className="px-6 mt-6 pb-6 border-t md:px-6">
          <ul className="space-y-2 text-secondary font-semibold mt-4">
            <li className="cursor-pointer hover:text-primary">
              Why My Dexter?
            </li>
            <li
              className="cursor-pointer hover:text-primary"
              onClick={handleFAQ}
            >
              FAQ
            </li>
            <li className="cursor-pointer hover:text-primary">
              Terms & Policies
            </li>
          </ul>
          <p className="mt-4 text-xs text-secondary">© 2024 My Dexter</p>
        </div>
      )}

      {openModal && <ProModal />}
    </div>
  );
};

export default Sidebar;
