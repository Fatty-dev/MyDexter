import React from "react";
import image1 from "../../../assets/1.svg";
import image2 from "../../../assets/2.svg";
import image3 from "../../../assets/3.svg";
import image4 from "../../../assets/4.svg";
import image5 from "../../../assets/5.svg";
import image6 from "../../../assets/6.svg";

const Grow = () => {
  const features = [
    {
      title: "Effortless SEO",
      description:
        "Dexter's advanced AI-driven SEO tools offer highly accurate insights and recommendations, optimizing your strategy with precision that manual methods can’t match.",
      icon: image1,
    },
    {
      title: "Boost Efficiency",
      description:
        "Save time and boost engagement with Dexter’s automated SEO content creation. Our software generates tailored blog posts and updates, keeping your content fresh and relevant.",
      icon: image2,
    },
    {
      title: "Gain a Competitive Edge",
      description:
        "Get a complete view of your SEO performance with Dexter's robust analytics. Track rankings, backlinks, and traffic all in one place, giving you the data needed to make informed decisions.",
      icon: image3,
    },
    {
      title: "Improve Your Rankings",
      description:
        "Our AI-driven tools are designed to maximize your visibility and attract more organic traffic, helping you achieve your business goals with ease.",
      icon: image4,
    },
    {
      title: "Connect the tools you already use",
      description:
        "Explore blog integrations that make your day-to-day workflow more efficient and familiar.",
      icon: image5,
    },
    {
      title: "Our people make the difference",
      description:
        "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team when you need help.",
      icon: image6,
    },
  ];

  return (
    <section className="py-20">
      <div className=" w-[90%] md:max-w-7xl mx-auto ">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-[1.4rem] md:text-[2rem] font-semibold text-gray-900 mb-4">
          Beautiful analytics to <span className="text-indigo-600">grow smarter</span>
        </h1>
          <p className="mt-4 w-full sm:w-[80%] md:w-[70%] text-lg sm:text-xl text-gray-600">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border shadow-md rounded-lg p-4 sm:p-6 text-left flex flex-col items-center md:items-start"
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

export default Grow;
