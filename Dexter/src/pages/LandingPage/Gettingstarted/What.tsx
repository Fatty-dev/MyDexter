import React from "react";
import Background from "../../../assets/Background.png";
import dex1 from "../../../assets/dex1.svg";
import dex2 from "../../../assets/dex2.svg";
import dex3 from "../../../assets/dex3.svg";
import { IoArrowForward } from "react-icons/io5";

const What = () => {
  return (
    <div className="bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#F2F6FC_100%)]">
      <div className="contanier w-full max-w-6xl mx-auto px-4 py-14">
        <div className="flex flex-col md:flex-row w-full items-start justify-between">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              What is Dexter?
            </h2>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-md md:text-lg">
              Dexter is your AI SEO specialist, designed to handle the heavy
              lifting of SEO and content management. With one goal in mind—to
              free up your time and help your business grow—Dexter optimizes
              your website, boosts visibility, and drives ROI, so you can focus
              on what truly matters.
            </p>
          </div>
        </div>

        {/* Background Image Section */}
        <div className="relative md:h-[25rem] mt-10 md:mt-20">
          <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 w-[80%] z-[1]">
            <img src={Background} alt="" />
          </div>

          <div className="mt-14 md:absolute z-[50] top-0 left-0 h-full w-full flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-1/2">
              <img
                src={dex1}
                alt="Dexter Feature 1"
                className="w-full h-auto"
              />
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={dex2}
                alt="Dexter Feature 2"
                className="w-full h-auto"
              />
            </div>
            <div className="w-full md:w-1/2 mt-16 ">
              <img
                src={dex3}
                alt="Dexter Feature 3"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Examples Section */}
        <div className="mt-16 ">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Show me some examples
          </h2>
          <div className="mt-8 space-y-4">
            <div className="flex border flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <span className="text-2xl">✍️</span>
                <p className="font-semibold">Need fresh blog content?</p>
              </div>
              <div className="flex items-start md:items-center gap-4">
                <p className="text-[#475467]">
                  Create engaging, SEO-optimized blog posts effortlessly with
                  Dexter’s AI tools.
                </p>
                <IoArrowForward size={20} className="text-[#667085]" />
              </div>
            </div>

            <div className="flex border flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
              <div className="flex items-start md:items-center gap-4">
                <span className="text-2xl">📊</span>
                <p className="font-semibold">Want better rankings?</p>
              </div>
              <div className="flex items-start md:items-center gap-4">
                <p className="text-[#475467]">
                  Track your website’s performance and get actionable SEO
                  insights to boost visibility.
                </p>
                <IoArrowForward size={20} className="text-[#667085]" />
              </div>
            </div>

            <div className="flex border flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
              <div className="flex items-start md:items-center gap-4">
                <span className="text-2xl">⏰</span>
                <p className="font-semibold">Short on time?</p>
              </div>
              <div className="flex items-start md:items-center gap-4">
                <p className="text-[#475467]">
                  Let Dexter automate your SEO tasks, so you can focus on
                  running your business.
                </p>
                <IoArrowForward size={20} className="text-[#667085]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default What;
