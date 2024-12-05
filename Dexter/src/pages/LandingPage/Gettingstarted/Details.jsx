import React from "react";
import dex1 from "../../../assets/dex1.svg";
import dex2 from "../../../assets/dex2.svg";
import dex3 from "../../../assets/dex3.svg";
import image1 from "../../../assets/1.svg";
import image2 from "../../../assets/3.svg";
import blog from "../../../assets/blog 2.svg";
import { IoCheckmark } from "react-icons/io5";

const features = [
  {
    id: 1,
    title: "Dexter SEO Chat Box",
    description:
      "SEO Chatbox: Your All-in-One Assistant for Building SEO Strategies, Creating Content, Adding Keywords, and Providing Data Insights.",
    icon: image1,
    points: [
      "Identify and integrate top keywords to boost ranking",
      "AI-powered tools to easily craft engaging blog posts",
      "Unlock the Power of Data: Advanced Analytics for Smarter SEO Decisions",
    ],
    image: dex1,
  },
  {
    id: 2,
    title: "SEO AI Blog Post Creation",
    description:
      "Easily manage and optimize your content directly from the dashboard. With intuitive tools for editing, scheduling, and tracking blog posts, you can keep your content strategy on track without the hassle.",
    icon: image2,
    points: [
      "Keep your customers in the loop with live chat",
      "Embed help articles right on your website",
      "Customers never have to leave the page to find an answer",
    ],
    image: dex2,
  },
  {
    id: 3,
    title: "SEO Analytics Overview & Strategies",
    description:
      "Get a complete snapshot of your SEO performance at a glance. Our dashboard provides real-time insights into your rankings, traffic, and key metrics.",
    icon: blog,
    points: [
      "Filter, export, and drill down on the data quickly",
      "Save, schedule, and automate reports to your inbox",
      "Connect the tools you already use with 100+ integrations",
    ],
    image: dex3,
  },
];

const Details = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 leading-snug">
            SEO Like Never Before:{" "}
            <span className="text-primary">Easy and Intuitive</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Powerful AI Solutions That Simplify Every Aspect of Optimization:
            From Blog Creation to Keywords and Analytics.
          </p>
        </div>

        {/* Features Section */}
        <div className="space-y-12">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`flex flex-col md:flex-row items-center md:items-start gap-12 ${
                index === 1 ? "md:flex-row-reverse" : ""
              }`} // Apply reverse layout for the second feature
            >
         

              {/* Text Section */}
              <div className="w-full md:w-1/2 space-y-6">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    {feature.points.map((point, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <IoCheckmark className="text-primary bg-layer rounded-full p-1 w-6 h-6" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

                   {/* Image Section */}
                   <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <img
                  src={feature.image}
                  alt={`${feature.title} Interface`}
                  className="w-full  mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
