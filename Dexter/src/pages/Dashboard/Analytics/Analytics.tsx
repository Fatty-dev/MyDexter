import { useState, useEffect } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { RiHome6Line } from "react-icons/ri";
import { BsGlobe } from "react-icons/bs";
import { authApi } from "@/lib/config/axios-instance";
import { IoIosArrowDown } from "react-icons/io";
import SeoDashboard from "./SeoDashboard";
import DomainOptimization from "./DomainOptimization";
import WebsiteEngagement from "./WebsiteEngagement";
import { Details } from "./Details";
import { useUserPlatformSiteStore } from "@/lib/store/global.store";
import { FiX } from "react-icons/fi";
import { CgMenuRight } from "react-icons/cg";
import Sidebar from "@/components/Dashboardcomp/Sidebar";
import { toast } from "sonner";

const Analytics = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const [showDetails, setShowDetails] = useState<string | null>(null);
  const { sites } = useUserPlatformSiteStore();
  const [analytics, setAnalytics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("Sites object:", sites);
    const fetchAnalytics = async () => {
      setIsLoading(true);

      // @ts-ignore
      const siteId = sites["wordpress"]?.site?.siteId;

      if (!siteId) {
        console.error("siteId is not available");
        setIsLoading(false);
        return;
      }

      try {
        const response = await authApi.get(
          `./analytics?platform=wordpress&siteId=${siteId}`
        );
        setAnalytics(response.data.data.analytics);
      } catch (error) {
        console.error("Failed to fetch analytics", error);
        // Assuming you have a toast function for error notifications
        toast.error("Failed to fetch analytics");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnalytics();
  }, [sites]);

  return (
    <div className="w-[90%] mx-auto mt-[1.5rem]">
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
      <div className="ml-8 md:ml-0 flex items-center gap-2 mb-6">
        <RiHome6Line className="text-gray-500" />
        <h1 className="text-sm text-gray-500">Assistant</h1>
        <HiOutlineChevronRight className="text-gray-500" />
        <p className="text-sm text-gray-500">Analytics</p>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-semibold text-[#131c2e] tracking-wide">
          Analytics
        </h1>
        <div className="flex items-center justify-between ">
          <p className="text-[#7b7b83]  text-[14px]">
            Track key metrics, uncover opportunities, and optimize your SEO
            strategy with ease.
          </p>

          <div className="flex items-center gap-2 mb-2 ">
            <div className="flex items-center bg-[#ffffff] justify-center gap-2 px-3 py-1  border border-[#eceff2] rounded-full ">
              <BsGlobe className="text-[#abb4c1]" size={16} />
              <span className=" text-[#404b5e] text-[14px]">Domain</span>
            </div>

            {/* @ts-ignore */}
            {sites["wordpress"]?.url && (
              <button
                className="text-primary flex items-center gap-2"
                onClick={() =>
                  setTimeout(
                    // @ts-ignore
                    () => window.open(sites["wordpress"].url, "_blank"),
                    100
                  )
                }
              >
                {/* @ts-ignore */}
                {sites["wordpress"].url}
              </button>
            )}

            <IoIosArrowDown className="text-[#798294]" />
          </div>
        </div>
      </div>

      <hr className="my-2" />
      <div className="flex items-center justify-between px-4 py-2 my-4 text-white rounded-lg bg-primary">
        <p className="mt-1 text-sm font-medium">
          Hello Daniel, you have{" "}
          <span className="mr-[0.125rem] underline">
            1 new analytics report{" "}
          </span>{" "}
          available.
        </p>
        <MdClose size={22} />
      </div>

      <SeoDashboard />

      <div className="flex gap-4 mt-4 max-md:flex-col md:flex-col lg:flex-row">
        <DomainOptimization setShowDetails={setShowDetails} />
        <WebsiteEngagement setShowDetails={setShowDetails} />
      </div>

      {showDetails && (
        <Details showDetails={showDetails} setShowDetails={setShowDetails} />
      )}
    </div>
  );
};

export default Analytics;
