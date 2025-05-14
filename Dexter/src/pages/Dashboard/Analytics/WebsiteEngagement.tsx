import Metrics from "@/components/Common/Metrics";
import { engagementInsights } from "@/lib/data";
import React, { useEffect, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { BsBoxArrowLeft } from "react-icons/bs";
import { authApi } from "@/lib/config/axios-instance";
import { useUserPlatformSiteStore } from "@/lib/store/global.store";
import toast from "react-hot-toast";

interface Props {
  setShowDetails: (showDetails: string | null) => void;
}

const WebsiteEngagement = ({ setShowDetails }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const { sites } = useUserPlatformSiteStore();

  const [showInsights, setShowInsights] = useState(false);
  const [domain, setDomain] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [analytics, setAnalytics] = useState<any>(null);

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
        toast.error("Failed to fetch analytics");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnalytics();
  }, [sites]);

  return (
    <div className="relative w-1/2 p-4 mb-8 bg-white border rounded-lg md:w-full lg:w-1/2 h-fit max-md:w-full">
      <div className="flex items-center justify-between">
        <p className="font-semibold">Website Engagement</p>
        <CiMenuKebab
          className="text-gray-700 cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>

      <div className="flex items-center justify-between  p-3 rounded-lg bg-[#f5f7f9]">
        <div className="flex flex-col items-center border-r border-gray-300 pr-4">
          <Metrics
            metric={{
              value: analytics?.pageVisitsScore?.organic || 0,
              max: analytics?.pageVisitsScore?.total || 0,
              label: "Page Visits Score",
            }}
          />
        </div>

        <div className="flex flex-col items-center border-r border-gray-300 pr-4">
          {/* Average Duration Score */}
          <Metrics
            metric={{
              value: analytics?.avgDurationScore?.organic || 0,
              max: analytics?.avgDurationScore?.total || 0,
              label: "Average Duration Score",
            }}
          />
        </div>
        {/* Bounce Rate Score */}
        <div className="flex flex-col items-center ">
          <Metrics
            metric={{
              value: analytics?.bounceRateScore?.organic || 0,
              max: analytics?.bounceRateScore?.total || 0,
              label: "Bounce Rate Score",
            }}
          />
        </div>
      </div>
      {/* <div className="flex    lg:flex-row  p-3  rounded-lg bg-[#f5f7f9]">
        {engagementMetrics.map((metric, index) => (
          <div
            key={index}
 className="[&:not(:first-child)]:border-l border-l-[#d5d9e1]  [&:not(:first-child)]:pl-4 [&:not(:last-child)]:mr-2"
          >
            <Metrics
              metric={metric}

              marginTop="mt-4"
              spanColor="text-[#7a8eac] text-[8px]"
            />
            <p className="text-[#9795fa] text-[10px] font-semibold ">
              View {metric.toView}
            </p>
          </div>
        ))}
      </div> */}

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
        <div className="flex flex-col gap-3 mt-4">
          {analytics?.websiteEngagement?.insight?.length > 0 ? (
            engagementInsights.map((insight, index) => (
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
                        ? "text-[#4caf50] text-[18px]"
                        : insight.type === "Warning"
                        ? "text-[#ff9800] text-[18px]"
                        : insight.type === "Info"
                        ? "text-[#6e69fb] text-[18px]"
                        : "text-[#f44336] text-[21px]"
                    }`}
                  >
                    {insight.icon}
                  </span>
                  <p>{insight.detail}</p>
                </div>
                <IoMdClose size={18} className="cursor-pointer" />
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
            setShowDetails("Website Engagement");
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

export default WebsiteEngagement;
