import React, {useState} from 'react';
import { FaCheck, FaTimes, FaStar } from 'react-icons/fa';
import { GiCheckMark } from "react-icons/gi";
import { GoDash } from "react-icons/go";

const Plans = () => {
  // Dataset for Features Comparison
  const features = [
    { feature: 'Dexter AI SEO Chatbot', free: 'Up to 10', pro: 'Up to 100' },
    { feature: 'Automated Blog Posting', free: '1 Post Demo', pro: 'Up to 30 a month' },
    { feature: 'User-Friendly Interface', free: true, pro: true },
    { feature: 'SEO Performance Metrics', free: false, pro: true },
    { feature: 'Bulk Blog Posting', free: false, pro: true },
    { feature: 'Advanced Keyword Research', free: false, pro: true },
    { feature: 'AI Image Generation', free: false, pro: true },
    { feature: 'SEO Training Resources', free: false, pro: true },
    { feature: 'Priority Support', free: false, pro: true },
    { feature: 'Free Trial', free: false, pro: true },
    { feature: 'SEO AI Backlinks Automation', free: false, pro: 'Coming Soon' },
  ];

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };

  // Conditional Pricing
  const [proPrice, setProPrice] = useState({ month: 29, year: 278.40 });
  const [freePrice, setFreePrice] = useState({ month: 0.00, year: 0.00 });


  return (
    <div className="">
      {/* Header Section */}
      <div className="max-w-xl mx-auto px-4 lg:pt-8 pb-8 text-center">
        {/* Tagline */}
        <div className="bg-layer inline-flex px-2 py-1 rounded-lg mb-4">
          <p className="text-sm font-normal text-primary py-1 px-3">
            Pricing Plans
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="text-[2.5rem] md:text-[3rem] font-semibold text-gray-900 mb-4">
          Find the <span className="text-indigo-600">Perfect Plan</span> for Your Needs
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto text-lg mb-2">
          Select 5 days of freedom – Cancel or switch plans anytime.
        </p>
           {/* Annual Pricing Toggle */}
           <div className="flex justify-center gap-3 items-center mb-6">
           <div
      className={`relative inline-flex items-center w-10 h-5 rounded-full cursor-pointer ${
        isToggled ? "bg-primary" : "bg-gray-300"
      }`}
      onClick={handleToggle}
    >
      <div
        className={`absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
          isToggled ? "translate-x-5" : ""
        }`}
      ></div>
    </div>

          <p className="text-black text-sm">Annual pricing
          <span className="text-primary text-sm"> (save 20%)</span></p>
        </div>

      </div>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[90%] mx-auto md:w-full'>
      {/* Descriptive Text */}
      <div className="mb-8 px-4">
        <div className='flex items-center gap-2 mb-3'>
      <FaStar size={30} className="text-yellow-500 mr-2" />
      <FaStar size={30} className="text-yellow-500 mr-2" />
      <FaStar size={30} className="text-yellow-500 mr-2" />
      <FaStar size={30} className="text-yellow-500 mr-2" />
      <FaStar size={30} className="text-yellow-500 mr-2" />

      </div>
      <h1 className="text-3xl font-semibold text-gray-900 mb-4">
          Find the <span className="text-indigo-600">Select a Dexter Plan That Matches </span> Your Business Goals!
        </h1>
        <p className="text-gray-700 text-lg">
          Take control of your SEO strategy with a plan that's tailored to your business. 
          From content creation to AI-driven SEO analytics and strategies, Dexter helps you 
          stay ahead every step of the way, effortlessly.
        </p>
      </div>

     {/* Plans Section */}
        {/* Free Plan */}
        <div className="border border-gray-200 bg-white rounded-lg shadow-sm p-4 ">
          {/* Title Section */}
          <div className='flex items-center bg-layer px-4 py-4 border rounded-lg justify-between'>
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-semibold text-primary">Free</h3>
            <p className="text-gray-600 font-normal text-sm">Forever</p>
          </div>

          {/* Pricing Section */}
          <div className="flex flex-col items-end">
            <p className="text-2xl font-bold text-gray-900">${isToggled ? freePrice.year : freePrice.month}</p>
            <p className="text-gray-600  text-sm">/{isToggled ? 'year' : 'month'}</p>
          </div>
          </div>
          {/* Description Section */}
          <div className="">
            <p className='text-[#7A8EAC] text-sm my-4'>What is included ?</p>
            <p className="text-gray-600 text-sm mb-8">
              Start your journey with Dexter AI, and make smarter SEO decisions for your strategy—no matter where you’re starting. With simple, user-friendly interfaces, Dexter helps you create a strong foundation for success without any technical know-how.
            </p>
          </div>

          {/* Button Section */}
          <button className="border w-full text-[#475467]flex items-end justify-center py-2 px-4 rounded-lg font-medium">
            Get Started Now
          </button>
        </div>

        {/* Professional Plan */}
        <div className="border border-gray-200 bg-white rounded-lg shadow-sm p-4 ">
          {/* Title Section */}
          <div className='flex items-center bg-layer px-4 py-4 border rounded-lg justify-between'>
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-semibold text-primary">Professional</h3>
            <p className="text-gray-600 font-normal text-sm">Most Popular</p>
          </div>

          {/* Pricing Section */}
          <div className="flex flex-col items-end">
              <p className="text-2xl font-bold text-gray-900">${isToggled ? proPrice.year : proPrice.month}</p>
              <p className="text-gray-600  text-sm">/{isToggled ? 'year' : 'month'}</p>
            </div>
          </div>
          {/* Description Section */}
          <div className="">
            <p className='text-[#7A8EAC] text-sm my-4'>What is included ?</p>
            <p className="text-gray-600 text-sm mb-8">
            Take control of your online growth with features like content creation, blog posting, SEO analytics, and personalized recommendations. This plan helps business owners scale by simplifying your SEO strategy, so you can focus on growing your business.
            </p>
          </div>

          {/* Button Section */}
          <button className="border w-full text-[#475467] flex items-end justify-center py-2 px-4 rounded-lg font-medium">
          Try it free for 5 days!
          </button>
        </div>
      </div>

      <hr className='my-8'></hr>

      {/* Features Comparison Table */}
      <div className="mx-auto mt-12 ">
        <table className="w-[90%] mx-auto md:w-full text-left border-collapse overflow-hidden ">
          <thead className="border-b text-xl font-semibold">
            <tr>
              <th className="px-4 py-2 text-[#0F182A] font-semibold">Features Comparison</th>
              <th className="px-4 py-2 text-primary font-semibold">Free Plan</th>
              <th className="px-4 py-2 text-primary font-semibold">Professional Plan</th>
            </tr>
          </thead>
          <tbody>
            {features.map((item, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="px-4 py-5">{item.feature}</td>
                <td className="px-4 py-3">
                  {typeof item.free === 'boolean' ? (
                    item.free ? (
                      <GiCheckMark className="text-primary" />
                    ) : (
                      <GoDash className="text-[#0F182A]" />
                    )
                  ) : (
                    item.free
                  )}
                </td>
                <td className="px-4 py-3">
                  {typeof item.pro === 'boolean' ? (
                    item.pro ? (
                      <GiCheckMark className="text-primary" />
                    ) : (
                      <GoDash className="text-[#0F182A]" />
                    )
                  ) : (
                    item.pro
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Plans;
