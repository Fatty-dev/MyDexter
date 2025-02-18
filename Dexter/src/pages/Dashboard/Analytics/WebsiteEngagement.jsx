import Metrics from "@/components/Common/Metrics";
import { engagementMetrics, engagementInsights } from "@/lib/data";
import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { BsBoxArrowLeft } from "react-icons/bs";
import like from "@/assets/like.svg";
import dislike from "@/assets/dislike.svg";

const mockRes = {
  analytics: {
    pageVisitsScore: {
      organic: 54,
      total: 726,
    },
    avgDurationScore: {
      organic: 149.04850746268656,
      total: 149.04850746268656,
    },
    bounceRateScore: {
      organic: 2.5,
      total: 1.7666666666666668,
    },
    topPagesScore: {
      organic: 205.54850746268656,
      total: 876.8151741293532,
    },
    megaTagStatusScore: {
      withMetaTags: 58,
      totalUrl: 58,
    },
    totalKeywords: {
      organic: 437,
      total: 437,
    },
    _id: "67a4a7c311e65e5035590f70",
    siteUrl: "https://bestdogresources.com/",
    userId: "67911d6e6a41d832b77553f7",
    __v: 0,
    createdAt: "2025-02-06T12:14:58.963Z",
    updatedAt: "2025-02-06T12:14:58.963Z",
  },
  seoAnalysis: [
    {
      issue: "Images Missing Alt Text",
      description:
        "Images on your site are missing 'alt' attributes. These are important because they improve accessibility for visually impaired users and help search engines understand the content of your images, which can improve your site's SEO.",
      recommendation:
        "Add descriptive 'alt' text to all images across your site. This text should briefly describe the image's content.",
    },
    {
      issue: "Broken Internal Links",
      description:
        "There are broken links within your site. Broken links can lead to a poor user experience and negatively impact your site's SEO as they make it harder for search engines to crawl and index your site's pages.",
      recommendation:
        "Identify and fix all broken internal links on your site. You can do this by either updating the link's URL if it has changed or removing the link if the page no longer exists.",
    },
    {
      issue: "Slow Page Load",
      description:
        "Some pages on your site are loading slowly. Page speed is a key factor in SEO, as search engines prioritize sites that load quickly, and users are more likely to abandon a site that doesn't load within a few seconds.",
      recommendation:
        "Improve your site's load times by compressing images, minifying CSS, JavaScript, and HTML files, and reducing the number of landing page redirects. Consider using a tool like Google's PageSpeed Insights for more specific recommendations.",
    },
  ],
};

const WebsiteEngagement = ({ setShowDetails }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showInsights, setShowInsights] = useState(false);

  return (
    <div className="relative w-1/2 p-4 mb-8 bg-white border rounded-lg md:w-full lg:w-1/2 h-fit max-md:w-full">
      <div className="flex items-center justify-between">
        <p className="font-semibold">Website Engagement</p>
        <CiMenuKebab
          className="text-gray-700 cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>
      
      <div className="flex items-center justify-between   lg:flex-row  p-3  rounded-lg bg-[#f5f7f9]">
        {/* total keyword */}
        <div className="[&:not(:first-child)]:border-l border-l-[#d5d9e1]  [&:not(:first-child)]:pl-4 [&:not(:last-child)]:mr-2">
          <Metrics
            metric={{
              value: mockRes.analytics.pageVisitsScore.organic || 0,
              max: mockRes.analytics.pageVisitsScore.total || 0,
              label: "Page Visit",
              imageSrc: like,
            }}
            marginTop="mt-4"
            spanColor="text-[#7a8eac] text-sm"
          />
          <div className="flex items-center justify-center">
            <p className="text-[#9795fa] font-semibold text-xs ">
              View Traffic Details
            </p>
          </div>
        </div>
        
        {/* Meta Tag Status */}
        <div className="[&:not(:first-child)]:border-l border-l-[#d5d9e1]  [&:not(:first-child)]:pl-4 [&:not(:last-child)]:mr-2">
          <Metrics
            metric={{
              value: mockRes.analytics.avgDurationScore.organic.toFixed(2)|| 0,
              max: mockRes.analytics.avgDurationScore.total.toFixed(2) || 0,
              label: "Average Visit Duration",
              imageSrc: like,
            }}
            marginTop="mt-4"
            spanColor="text-[#7a8eac] text-sm"
          />
          <div className="flex items-center justify-center">
            <p className="text-[#9795fa] font-semibold text-xs ">
              View Engagement Stats
            </p>
          </div>
        </div>

        {/* top pages */}
        <div className="[&:not(:first-child)]:border-l border-l-[#d5d9e1]  [&:not(:first-child)]:pl-4 [&:not(:last-child)]:mr-2">
          <Metrics
            metric={{
              value: mockRes.analytics.bounceRateScore.organic.toFixed(2) || 0,
              max: mockRes.analytics.bounceRateScore.total.toFixed(2) || 0,
              label: "Bounce Rate",
              imageSrc: like,
            }}
            marginTop="mt-4"
            spanColor="text-[#7a8eac] text-sm"
          />
          <div className="flex items-center justify-center">
            <p className="text-[#9795fa] font-semibold text-xs ">
              View Bounce Rate Insights
            </p>
          </div>
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
          {engagementInsights.map((insight, index) => (
            <div
              key={index}
              className={`w-full flex justify-between items-center rounded-lg p-3 ${
                insight.type === "Warning"
                  ? "bg-[#fff5e5] text-[#714a10]]"
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
                      ? "text-[#ff9800]  text-[18px]"
                      : insight.type === "Info"
                      ? "text-[#6e69fb] text-[18px]"
                      : "text-[#f44336] text-[21px]"
                  } `}
                >
                  {insight.icon}
                </span>
                <p>{insight.detail} </p>
              </div>
              <IoMdClose size={18} className="cursor-pointer" />
            </div>
          ))}
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
