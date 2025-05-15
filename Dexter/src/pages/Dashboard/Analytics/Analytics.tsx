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
import useUserInfo from "@/lib/hooks/useUserInfo";

const Analytics = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const [showDetails, setShowDetails] = useState<string | null>(null);
  const { sites } = useUserPlatformSiteStore();
  const [analytics, setAnalytics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { user, loading } = useUserInfo();

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

  if (loading) return <AnalyticsSkeleton />;

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

      <div className="relative">
        {user?.subscription.type === "free" && (
          <div className="absolute top-0 right-0 w-full h-full bg-white/60 backdrop-blur-sm z-10 flex items-center justify-center">
            <div className="text-center space-y-5">
              <div>
                <h1 className="text-2xl font-bold">Upgrade to Pro</h1>
                <p className="text-gray-500">
                  Get access to all features and benefits of My Dexter Pro.
                </p>
              </div>
              <button className="bg-primary text-white px-4 py-2 rounded-md">
                Upgrade to Pro
              </button>
            </div>
          </div>
        )}

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
    </div>
  );
};

const AnalyticsSkeleton = () => {
  return (
    <div className="p-6 space-y-4 max-w-7xl mx-auto">
      {/* Title and Subtitle */}
      <div className="space-y-2">
        <div className="h-6 w-40 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-80 bg-gray-100 rounded animate-pulse" />
      </div>

      {/* Notification banner */}
      <div className="h-10 w-full bg-purple-200 rounded-md animate-pulse" />

      {/* SEO Dashboard */}
      <div className="bg-gray-800 rounded-xl p-6 text-white flex flex-col md:flex-row md:justify-between md:items-start space-y-6 md:space-y-0 md:space-x-6 animate-pulse">
        {/* Left Stat Summary */}
        <div className="space-y-3 w-full max-w-xs">
          <div className="h-12 w-12 bg-gray-600 rounded-full" />
          <div className="h-4 w-32 bg-gray-500 rounded" />
          <div className="h-4 w-24 bg-gray-500 rounded" />
          <div className="h-10 w-32 bg-blue-500 rounded-md" />
        </div>

        {/* Chart Placeholder */}
        <div className="flex-1 h-48 bg-gray-700 rounded-lg" />
      </div>

      {/* Bottom Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Domain Optimization Card */}
        <div className="bg-white p-4 rounded-lg shadow animate-pulse space-y-4">
          <div className="h-4 w-40 bg-gray-200 rounded" />
          <div className="grid grid-cols-3 gap-4">
            <div className="h-16 bg-gray-100 rounded" />
            <div className="h-16 bg-gray-100 rounded" />
            <div className="h-16 bg-gray-100 rounded" />
          </div>
          <div className="h-4 w-20 bg-gray-100 rounded" />
        </div>

        {/* Website Engagement Card */}
        <div className="bg-white p-4 rounded-lg shadow animate-pulse space-y-4">
          <div className="h-4 w-40 bg-gray-200 rounded" />
          <div className="grid grid-cols-3 gap-4">
            <div className="h-16 bg-gray-100 rounded" />
            <div className="h-16 bg-gray-100 rounded" />
            <div className="h-16 bg-gray-100 rounded" />
          </div>
          <div className="h-4 w-20 bg-gray-100 rounded" />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
