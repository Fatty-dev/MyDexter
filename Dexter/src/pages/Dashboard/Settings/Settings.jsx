// App.js
import { useState } from "react";
import {
  FaCog,
  FaUserAlt,
  FaBriefcase,
  FaDatabase,
  FaIdBadge,
  FaLink,
  FaShieldAlt,
  FaInfoCircle,
  FaArrowLeft,
} from "react-icons/fa";
import { HiOutlineChevronRight } from "react-icons/hi";
import { RiHome6Line } from "react-icons/ri";
import General from "./General";
import Personalization from "./Personalization";
import Business from "./Business";
import DataControl from "./DataControl";
import BuilderProfile from "./BuilderProfile";
import ConnectedApps from "./ConnectedApps";
import Security from "./Security";
import About from "./About";
import { useFormContext } from "react-hook-form";
import { Link, useSearchParams } from "react-router-dom";

// Sidebar menu dataset
const sidebarMenu = [
  { id: 1, label: "General", icon: <FaCog /> },
  { id: 2, label: "Personalization", icon: <FaUserAlt /> },
  { id: 3, label: "Business", icon: <FaBriefcase /> },
  { id: 4, label: "Data control", icon: <FaDatabase /> },
  { id: 5, label: "Builder profile", icon: <FaIdBadge /> },
  { id: 6, label: "Connected apps", icon: <FaLink /> },
  { id: 7, label: "Security", icon: <FaShieldAlt /> },
  { id: 8, label: "About", icon: <FaInfoCircle /> },
];

// Components to render
const components = {
  1: <General />,
  2: <Personalization />,
  3: <Business />,
  4: <DataControl />,
  5: <BuilderProfile />,
  6: <ConnectedApps />,
  7: <Security />,
  8: <About />,
};

const Settings = () => {
  const [searchParams] = useSearchParams();

  const [activeSetting, setActiveSetting] = useState(
    searchParams.get("tag") ? Number(searchParams.get("tag")) : 1
  );

  const { handleSubmit, watch } = useFormContext();

  const handleSelectSetting = (id) => {
    setActiveSetting(id);
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className=" w-[90%] mx-auto ">
      {/* Sidebar */}
      <div className="py-6 flex items-center gap-2">
        <RiHome6Line className="text-gray-500" />
        <h1 className="text-sm text-gray-500">Assistant</h1>
        <HiOutlineChevronRight className="text-gray-500" />
        <p className="text-sm text-gray-500">Settings</p>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <FaArrowLeft
          className="text-sm cursor-pointer text-gray-500"
          onClick={() => window.history.back()}
        />
        <span className="text-[#6c7685] font-semibold">Back</span>
      </div>
      <div className="flex items-center justify-between pb-2">
        <h1 className="text-[#131c2e] text-3xl font-bold tracking-wide">
          Settings
        </h1>
        <div className="flex items-center gap-4 pb-3">
          <div>
            <button className="bg-white py-3 px-4 shadow-lg border border-gray-300 text-[#697383] font-semibold   rounded-lg">
              Cancel
            </button>
          </div>
          <div>
            <button
              onClick={handleSubmit(onSubmit)}
              className="text-white font-semibold flex gap-2 items-center bg-[#6d68fb] py-3 px-4  justify-center rounded-lg border  border-gray-300"
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex items-start relative w-full gap-8 justify-between">
        {/* Desktop */}
        <aside className="lg:w-[15%] w-[25%] hidden lg:block md:block">
          <nav className="mt-4">
            <ul className="space-y-3">
              {sidebarMenu.map((item) => (
                <li key={item.id}>
                  <Link to={`/dashboard/settings?tag=${item.id}`}>
                    <p
                      className={`flex items-center text-sm  text-[#344054] hover:text-[#7a75fb] px-2 py-3 cursor-pointer rounded-lg ${
                        item.id === activeSetting
                          ? "bg-[#E7E6FE] text-primary hover:bg-gray-100 "
                          : ""
                      }`}
                      onClick={() => setActiveSetting(item.id)}
                    >
                      <span className="mr-3">{item.icon}</span>
                      <span>{item.label}</span>
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Mobile */}
        <div className="w-[70%] p-3 absolute right-0 top-8   bg-white border rounded-lg lg:hidden md:hidden">
          <select
            name="menu"
            id=""
            className="w-full font-semibold text-purple-500 bg-transparent outline-none cursor-pointer"
            onChange={(e) => handleSelectSetting(e.target.value)}
          >
            {sidebarMenu.map((item) => (
              <option value={item.id} key={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        {/* Main Content */}
        <main className="max-md:w-full lg:w-[85%] md:w-[75%]">
          {components[activeSetting]}
        </main>
      </div>
    </div>
  );
};

export default Settings;
