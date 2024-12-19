import React from "react";
import chat from "../../../assets/chat.svg";
import image1 from "../../../assets/1.svg";
import image2 from "../../../assets/3.svg";
import blog from "../../../assets/blog 2.svg";
import dexter from "../../../assets/dextarAI.svg";
import down from "../../../assets/down background.png";
import Analytic from "../../../assets/Analytics 2.svg";
import blogpost from "../../../assets/blogpost.svg";
import logo from "../../../assets/logo.svg";

// Dataset for the features
const featuresDataset = [
  {
    id: 1,
    title: "Dexter SEO Chat Box",
    description:
      "Access expert advice and support directly through Dexter's chat box. Get real-time answers to your SEO questions, receive guidance on implementing strategies.",
    image: image1,
    secondaryImage: dexter,
  },
  {
    id: 2,
    title: "SEO Analytics Overview",
    description:
      "Get a complete snapshot of your SEO performance at a glance. Our dashboard provides real-time insights into your rankings, traffic, and key metrics.",
    image: image2,
    secondaryImage: Analytic,
  },
  {
    id: 3,
    title: "SEO AI Automatic Blog Posting",
    description:
      "Easily manage and optimize your content directly from the dashboard. With intuitive tools for editing, scheduling, and tracking blog posts, you can keep your content strategy on track without hassle.",
    image: blog,
    secondaryImage: blogpost,
  },
];

const Features = () => {
  return (
    <div class="bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#F2F6FC_100%)]">
    <section className="container mx-auto py-16">
      {/* Background Decorations */}
      <div className="absolute inset-0 to-transparent pointer-events-none"></div>

      <div className="">
        {/* Title Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-[90%] mx-auto mb-12">
          {/* Left Section (Title) */}
          <div className="flex flex-col w-full lg:w-1/2 mb-4 lg:mb-0">
            <div className="bg-layer w-24 px-2 py-1 rounded-lg mb-4">
              <p className="text-sm font-normal text-primary rounded-lg py-1 px-3">
                Features
              </p>
            </div>
            <h1 className="text-2xl lg:text-5xl font-semibold w-[30rem] text-gray-900 mb-4 leading-snug">
              <span className="text-primary">Simplify Your SEO</span> Management
            </h1>
          </div>

          {/* Right Section (Description) */}
          <div className="w-full lg:w-1/2">
            <p className="text-lg text-gray-600 leading-relaxed">
              Optimize your SEO strategy with Dexter's advanced AI-driven SEO
              tools. Our automated blog content creation and performance tracking
              elevate your site's authority and boost traffic.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="">
        <div className="grid grid-cols-1 md:bg-white sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-[50]">
          {featuresDataset.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-4 lg:p-6 rounded-xl shadow-lg border flex flex-col"
            >
              {/* Main Image */}
              <img
                src={feature.image}
                alt={feature.title}
                className=" w-24  mb-4"
              />
              {/* Title */}
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600 max-h-40 h-38 text-sm lg:text-base">
                {feature.description}
              </p>
              {/* Secondary Image */}
              <div className="mt-4">
                <img
                  src={feature.secondaryImage}
                  alt={feature.title}
                  className="w-full lg:w-[90%] mx-auto mb-4"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="hidden lg:block relative">
        <div className='absolute -top-[12rem] left-1/2 -translate-x-1/2 w-[90%] z-[1]'>
  <img src={down} alt=""/>
</div>
        </div>

        {/* Footer Section */}
   
          <div className="z-[50] bg-white w-full lg:w-[90%] max-w-4xl p-6 lg:p-8 rounded-xl shadow-lg mx-auto relative mt-20">
            {/* Logo Section */}
            <div className="text-center mb-6">
              <img src={logo} alt="Dexter AI Logo" className="h-16 mx-auto mb-4" />
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Good day!</h3>
              <p className="text-[#7A8EAC] text-sm lg:text-base w-full lg:w-[70%] mx-auto mb-6">
                Dexter is your AI-powered SEO assistant, offering personalized insights and actionable recommendations to optimize your online presence effortlessly.
              </p>
            </div>

            {/* Chat Section */}
            <div className="rounded-lg p-4 lg:p-6 mb-6">
              {/* User Prompt */}
              <div className="flex items-end justify-end w-full mb-4">
                <div className="flex flex-col w-full lg:w-3/4">
                  <div className="flex items-center justify-between rounded-full p-2 mb-3">
                    <span className="font-medium text-sm px-2">You</span>
                    <span className="font-medium text-sm px-2">Just now</span>
                  </div>
                  <p className="text-[#475467] bg-[#F0F0F9] rounded-lg p-4 text-sm lg:text-base">
                    Dexter, create an SEO task list for our new marketing campaign. Include
                    tasks for designing social media posts, writing blog content, and
                    evaluating essential SEO responsibilities. Make sure to assign
                    deadlines for all tasks to be completed by the end of the week.
                  </p>
                </div>
              </div>

              {/* AI Response */}
              <div className="flex items-start w-full">
                <div className="w-20 py-2">
                  <img
                    src={logo}
                    alt="Dexter Icon"
                    className=""
                  />
                </div>
                <div>
                  <p className="text-gray-700 rounded-lg px-4 text-sm lg:text-base">
                    Got it! Here's an optimized task breakdown for your marketing
                    campaign:
                  </p>
                  <ul className="text-sm lg:text-base text-gray-600 mt-1 pl-6 list-disc">
                    <li>
                      <strong>Task 1:</strong> Design engaging social media posts that align with
                      campaign goals.
                    </li>
                    <li>
                      <strong>Task 2:</strong> Write compelling blog content targeting your audience's
                      interests and including SEO-friendly keywords.
                    </li>
                    <li>
                      <strong>Task 3:</strong> Evaluate domain metrics such as site speed, backlinks,
                      and keyword rankings to identify areas for improvement.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Features;
