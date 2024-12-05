import React from 'react';
import { IoArrowForward } from "react-icons/io5";
import Background from '../../../assets/Background.png';

const Hero = () => {
  return (
    <div
      className="relative bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        minHeight: '700px',
      }}
    >
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
        <div className="w-full max-w-4xl h-72 sm:h-80 md:h-96 bg-gray-200 flex items-center justify-center border border-gray-300 rounded-lg">
          <span className="text-gray-500 text-lg font-medium">
            Promotional Video
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
