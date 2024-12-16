import React from "react";
import image1 from "../../../assets/1.svg";
import image2 from "../../../assets/2.svg";
import image3 from "../../../assets/3.svg";
import image4 from "../../../assets/4.svg";
import image5 from "../../../assets/5.svg";
import image6 from "../../../assets/6.svg";

const Why = () => {
  const features = [
    {
      title: "SEO AI Strategies",
      description:
        "Dexter's advanced AI-driven SEO tools offer highly accurate insights and recommendations, optimizing your strategy based on your data for more effective decisions.",
      icon: image1,
    },
    {
      title: "SEO Chat-Bot",
      description:
        "Dexter's SEO Chat-Bot is an AI-powered tool that offers real-time, personalized SEO assistance to help you optimize your strategy. This affordable, easy-to-use solution saves time and boosts your website's SEO.",
      icon: image2,
    },
    {
      title: "SEO AI Blog Creation",
      description:
        "SEO AI Blog Creation is a powerful feature that uses AI to generate high-quality, search-engine-optimized blog content. With Dexter, your blog posts are engaging, relevant, and designed to boost your website's SEO.",
      icon: image3,
    },
    {
      title: "SEO AI Analytics",
      description:
        "SEO AI Analytics is an easy-to-use tool that leverages AI to analyze your website's performance. It provides simple insights to improve your SEO, even if you have no prior SEO knowledge.",
      icon: image4,
    },
    {
      title: "Connect the tools you already use",
      description:
        "Explore blog integrations that make your day-to-day workflow more efficient and familiar.",
      icon: image5,
    },
    {
      title: "Increase Your Sales with Organic Traffic",
      description:
        "Dexter provides personalized recommendations and generates optimized content to improve your SEO and increase organic traffic.",
      icon: image6,
    },
  ];

  return (
    <section className="container mx-auto py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="mb-12">
          <div className="bg-layer inline-flex px-2 py-1 rounded-lg mb-4">
            <p className="text-sm font-normal text-primary rounded-lg py-1 px-3">
              Why Dexter
            </p>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold w-full sm:w-[80%] md:w-[90%] mx-auto text-gray-900 mb-4">
            <span className="text-primary">Dexter AI SEO Tool</span> That Builds Strategies, Writes Blogs, and Analyzes Data
          </h1>
          <p className="mt-4 w-full sm:w-[80%] md:w-[70%] mx-auto text-lg sm:text-xl text-gray-600">
            Dexter is the ultimate AI SEO tool designed to simplify and elevate your online strategy. From crafting tailored SEO strategies and generating high-quality blog content to analyzing data for actionable insights,
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md border rounded-lg p-4 sm:p-6 text-left flex flex-col items-center md:items-start"
            >
              <div className="mb-4">
                <img
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  className="w-12 h-12 mb-4"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
