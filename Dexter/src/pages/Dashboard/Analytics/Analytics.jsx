import { useState,useEffect } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { RiHome6Line } from "react-icons/ri";
import { BsGlobe } from "react-icons/bs";
import { Link } from "react-router-dom";
import { authApi } from "@/lib/config/axios-instance";
import { IoIosArrowDown } from "react-icons/io";
import SeoDashboard from "./SeoDashboard";
import DomainOptimization from "./DomainOptimization";
import WebsiteEngagement from "./WebsiteEngagement";
import { Details } from "./Details";
import { useUserPlatformSiteStore } from "@/lib/store/global.store";


const Analytics = () => {
  const [showDetails, setShowDetails] = useState(null);
    const { sites } = useUserPlatformSiteStore();
    const [analytics, setAnalytics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const fetchAnalytics = async () => {
      setIsLoading(true);

      // console.log(sites, sites["wordpress"].url);

      try {
        const response = await authApi.get(
          `./analytics/?siteUrl=${sites["wordpress"].url}/&trackingCode=${sites["wordpress"].ga4TrackingCode}`
        );
        setAnalytics(response.data.data.analytics);
      } catch (error) {
        toast.error("failed to fetch analytics");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  return (
    <div className="w-[90%] mx-auto mt-[1.5rem]">
      <div className="flex items-center gap-2 mb-6">
        <RiHome6Line className="text-gray-500" />
        <h1 className="text-sm text-gray-500">Assistant</h1>
        <HiOutlineChevronRight className="text-gray-500" />
        <p className="text-sm text-gray-500">Analytics</p>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-semibold text-[#131c2e] tracking-wide">Analytics</h1>
        <div className="flex items-center justify-between ">
        <p className="text-[#7b7b83]  text-[14px]">Track key metrics, uncover opportunities, and optimize your SEO strategy with ease.</p>
      
        <div className="flex items-center gap-2 mb-2 ">
          <div className="flex items-center bg-[#ffffff] justify-center gap-2 px-3 py-1  border border-[#eceff2] rounded-full ">
            <BsGlobe className="text-[#abb4c1]" size={16}/>
              <span className=" text-[#404b5e] text-[14px]">Domain</span>
          </div>
          
          {sites["wordpress"]?.url && (
  <button
    className="text-primary flex items-center gap-2"
    onClick={() => setTimeout(() => window.open(sites["wordpress"].url, "_blank"), 100)}
  >
    {sites["wordpress"].url}
  </button>
)}


          <IoIosArrowDown className="text-[#798294]"/>
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
        <DomainOptimization setShowDetails = {setShowDetails}/>
        <WebsiteEngagement setShowDetails = {setShowDetails}/>
      </div>
      {
        showDetails && <Details showDetails = {showDetails} setShowDetails={setShowDetails}/>
      }
    </div>
  );
};

export default Analytics;
