import React from 'react';
import { HiMiniXMark } from "react-icons/hi2";
import { IoCheckmark } from "react-icons/io5";
import Man from "../../../assets/man.svg";
import Woman from "../../../assets/woman.svg";

const Risk = () => {
  // Data for Jon and Sarah
  const data = {
    jon: {
      items: [
        { icon: <HiMiniXMark size={22}/>, text: "Jon wastes hours on SEO and marketing tasks, leaving no time to focus on scaling his business." },
        { icon: <HiMiniXMark size={22}/>, text: "He misses family time, stressed by juggling endless SEO and business duties." },
        { icon: <HiMiniXMark size={22}/>, text: "Without automated updates, Jon worries about missing critical website or marketing performance issues." },
        { icon: <HiMiniXMark size={22}/>, text: "Managing day-to-day operations leaves Jon no energy for planning long-term business goals." },
        { icon: <HiMiniXMark size={22}/>, text: "Despite his efforts, Jon sees little ROI or growth, feeling stuck in a cycle of busywork." },
      ],
      textColor: "text-red-500",
    },
    sarah: {
      items: [
        { icon: <IoCheckmark size={22}/>, text: "Growing her business is easy without the stress of SEO." },
        { icon: <IoCheckmark size={22}/>, text: "With Dexter managing SEO tasks and alerts, she stays in control and worry-free." },
        { icon: <IoCheckmark size={22}/>, text: "Her family time becomes more fulfilling with less on her plate." },
        { icon: <IoCheckmark size={22}/>, text: "Dexter frees her up to focus on what truly matters in her business." },
        { icon: <IoCheckmark size={22}/>, text: "Optimized SEO strategies let her see her revenue and ROI soar effortlessly." },
      ],
      textColor: "text-green-500",
    },
  };

  return (
    <section className="bg-white py-16">
      <div className="w-full max-w-6xl mx-auto px-4">
        <p className="bg-layer text-primary rounded-lg text-center py-2 w-40 mx-auto mb-6">
          What’s at Risk
        </p>
        <h1 className="text-[2rem] sm:text-[2.6rem] lg:text-[3rem]  font-semibold text-center text-gray-900 mb-8">
          Dexter Drives Organic Traffic and Sales, <br />
          Giving You Space to <span className="text-primary">Grow Your Vision</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Jon Section */}
          <div className="flex flex-col lg:mt-14">
            <img
              src={Man}
              alt="Jon"
              className="mb-4 lg:mb-0  rounded-lg"
            />
            <div className="w-full lg:w-[calc(100%-8rem)]">
              <h2 className="text-xl lg:text-2xl font-semibold mb-4">
                <span className="text-primary">Meet Jon.</span> Struggling to Manage SEO and Content on His Own
              </h2>
              <ul className={`space-y-2 ${data.jon.textColor}`}>
                {data.jon.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 mt-1">{item.icon}</span>
                    <span className='text-[#475467]'>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sarah Section */}
          <div className="flex flex-col ">
            <img
              src={Woman}
              alt="Sarah"
              className="mb-4 lg:mb-0 rounded-lg"
            />
            <div className="w-full lg:w-[calc(100%-8rem)]">
              <h2 className="text-xl lg:text-2xl font-semibold mb-4">
                <span className="text-primary">Meet Sarah.</span> Growing Her Business with Dexter's Help
              </h2>
              <ul className={`space-y-2 ${data.sarah.textColor}`}>
                {data.sarah.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 mt-1">{item.icon}</span>
                    <span className='text-[#475467]'>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button className="bg-primary text-white py-3 px-8 text-lg rounded-full hover:bg-primary">
            Try Dexter for Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default Risk;
