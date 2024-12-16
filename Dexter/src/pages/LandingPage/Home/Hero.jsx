import React from 'react';
import { IoArrowForward } from "react-icons/io5";
import Background from '../../../assets/Background.png';
import Laptop from '../../../assets/Macbook.png';


const Hero = () => {
  return (
    <div className="relative container mx-auto">
<div className='absolute left-1/2 top-5 -translate-x-1/2 w-[80%] -z-[1]'>
  <img src={Background} alt=""/>
</div>
      {/* Hero Container */}
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-layer text-gray-800 px-2 py-1 rounded-lg mb-4">
          <p className="text-sm font-semibold bg-white rounded-lg py-1 px-3">MyDexter3.0</p>
          <div className='flex items-center gap-2'>
            <p className="text-sm text-primary ml-2">Powered by OpenAI</p>
            <IoArrowForward size={20} className='text-[#667085]'/>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-[3rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] font-semibold text-gray-900 mb-4">
          <span className="text-primary">Maximize Sales</span> with Dexter's
          <br className="hidden md:block" /> AI-Powered SEO Software Tools
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto text-lg mb-6">
          Optimize your SEO strategy with Dexter's advanced AI-driven tools. Our
          automated content creation, blog post generation, SEO analytics, and
          personalized recommendations help improve your site's visibility and
          drive more traffic.
        </p>

        {/* Button */}
        <button className="bg-primary text-white font-semibold text-lg px-6 py-3 rounded-full hover:bg-primary transition mt-4">
          Try Pro for Free
        </button>
      </div>

      {/* Placeholder for Video Section */}
      <div className="flex justify-center items-center mt-2 pt-10">
        <img src={Laptop} alt="" />
      </div>
    </div>
  );
};

export default Hero;
