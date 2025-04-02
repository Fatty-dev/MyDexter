import React, { useState, useEffect } from "react";
import { CiMenuKebab } from "react-icons/ci";
import Metrics from "@/components/Common/Metrics";
import { IoIosArrowDown } from "react-icons/io";
import { BsBoxArrowLeft } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { optimizationMetrics, optimizationInsights } from "@/lib/data";
import { authApi } from "@/lib/config/axios-instance";
import { useUserPlatformSiteStore } from "@/lib/store/global.store";
import like from "@/assets/like.svg";
import dislike from "@/assets/dislike.svg";



const DomainOptimization = ({ setShowDetails  }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { sites } = useUserPlatformSiteStore();

  const [showInsights, setShowInsights] = useState(false);
  const [domain, setDomain] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [analytics, setAnalytics] = useState(null);


  useEffect(() => {
    console.log("Sites object:", sites); 
    const fetchAnalytics = async () => {
      setIsLoading(true);
  
      const siteId = sites["wordpress"]?.site?.siteId;
  
      if (!siteId) {
        console.error("siteId is not available");
        setIsLoading(false);
        return;
      }

      try {
        const response = await authApi.get(`./analytics?platform=wordpress&siteId=${siteId}`);
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
    <div className="relative w-1/2 p-3 mb-6 bg-white border rounded-lg">
    <div className="flex items-center justify-between">
      <p className="font-semibold">Domain Optimization</p>
      <CiMenuKebab className="text-gray-700 cursor-pointer" onClick={() => setShowMenu(!showMenu)} />
    </div>
    <div className="flex items-center justify-between p-3 rounded-lg bg-[#f5f7f9]">
   

      {/* Bounce Rate Score */}
      <div className="flex flex-col items-center border-r border-gray-300 pr-4">
  <Metrics
    metric={{
      value: analytics?.totalKeywords?.organic || 0,
      max: analytics?.totalKeywords?.total || 0,
      label: "Total Keywords",
    }}
    className="flex flex-col items-center " // Ensure Metrics component also centers its content
  />
  {/* <p className="text-xs text-gray-500 text-center">View</p>  */}
</div>

      {/* Top Pages Score */}
      <div className="flex flex-col items-center border-r border-gray-300 pr-4">
        <Metrics
          metric={{
            value: analytics?.topPagesScore?.organic || 0,
            max: analytics?.topPagesScore?.total || 0,
            label: "Top Pages Score",
          }}
        />
        {/* <p className="text-xs text-gray-500">View</p> */}
      </div>

      {/* Mega Tag Status Score (last metric, no right border) */}
      <div className="flex flex-col items-center">
        <Metrics
          metric={{
            value: analytics?.megaTagStatusScore?.organic || 0,
            max: analytics?.megaTagStatusScore?.total || 0,
            label: "Meta Tag Status",
          }}
        />
        {/* <p className="text-xs text-gray-500">View</p> */}
      </div>
    </div>

      {/* Insights */}

      <div>
        <div className="flex items-center justify-between mt-4">
          <p className="font-semibold">Insights</p>
          <IoIosArrowDown
            className="text-gray-500 cursor-pointer"
            onClick={() => setShowInsights(!showInsights)}
          />
        </div>
      </div>
      {showInsights && (
  <div className="flex flex-col gap-3 ">
    {analytics?.domainOptimization?.insight?.length > 0 ? (
      analytics?.insight?.map((insight, index) => (
        <div
          key={index}
          className={`w-full flex justify-between items-center rounded-lg p-3 ${
            insight.type === "Warning"
              ? "bg-[#fff5e5] text-[#714a10]"
              : insight.type === "Success"
              ? "bg-[#edf7ed] text-[#29502b]"
              : insight.type === "Info"
              ? "bg-[#f0f0ff] text-[#587795]"
              : "bg-[#feeceb] text-[#621b16]"
          }`}
        >
          <div className="flex items-start gap-3">
            <span
              className={` ${
                insight.type === "Success"
                  ? "text-[#4caf50] text-[16px]"
                  : insight.type === "Warning"
                  ? "text-[#ff9800] text-[18px]"
                  : insight.type === "Info"
                  ? "text-[#6e69fb]"
                  : "text-[#f44336] text-[18px]"
              } `}
            >
              {insight.icon}
            </span>
            <p className="text-sm">{analytics?.insight?.detail}</p>
          </div>
          <IoMdClose size={24} className="cursor-pointer" />
        </div>
      ))
    ) : (
      <div className="w-full flex text-sm justify-center items-center text-gray-500">
        <p>No insights available.</p>
      </div>
    )}
  </div>
)}
      {showMenu && (
        <div
          onClick={() => {
            setShowMenu(false);
            setShowDetails("Domain Optimization");
          }}
          className="absolute flex items-center gap-3 p-2 text-gray-500 bg-white rounded-lg shadow-lg cursor-pointer rounded-g -top-5 right-5 w-fit hover:bg-gray-100"
        >
          <span className="text-[14px] cursor-pointer">
            <BsBoxArrowLeft />
          </span>
          <span>Details</span>
        </div>
      )}
    </div>
  );
};

export default DomainOptimization;
