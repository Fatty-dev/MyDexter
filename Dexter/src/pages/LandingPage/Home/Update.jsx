import React from 'react';
import Background from '../../../assets/Background.png';


const Update = () => {
  return (
    <div className='container mx-auto'>
      <div
        className="relative bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          minHeight: '700px',
        }}
      >
        <div className="max-w-6xl  mx-auto px-4 pt-24 sm:pt-32 md:pt-40 text-center">
          {/* Badge */}
          <div className="bg-layer inline-flex px-2 py-1 rounded-lg mb-4">
            <p className="text-sm font-normal text-primary rounded-lg py-1 px-3">
              Sign Up for Updates
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-[2.5rem] font-semibold text-gray-900 mb-4">
            <span className="text-primary">Best SEO AI Tool for</span> SEO Optimization
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 w-full sm:w-4/5 md:w-[65%] mx-auto font-normal text-lg mb-6">
            Sign up to let Dexter handle your SEO and keep you updated with actionable insights,
            alerts, and results—all while you focus on your business.
          </p>

          {/* Email Input and Button */}
          <div className='flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-4/5 mx-auto mb-4'>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-2/3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="mt-4 sm:mt-0 bg-tetiary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition">
              Sign Up
            </button>
          </div>

          {/* Privacy Policy */}
          <p className="text-md w-full sm:w-4/5 mx-auto font-normal text-gray-500">
            We care about your data in our{' '}
            <a href="#" className="underline">
              privacy policy
            </a>
            .
          </p>
        </div>
      </div>

      {/* Section for Free Trial */}
      {/* <div className="bg-layer py-14 mb-[6rem] px-4 rounded-xl">
        <div className="flex flex-col sm:flex-row w-full sm:w-[90%] mx-auto items-start md:items-center justify-between">
          <div className="mb-6 sm:mb-0">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              Start your 5-day free trial
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Join over 4,000+ startups already growing with My Dexter.
            </p>
          </div>
          <div>
            <button className="bg-primary whitespace-nowrap text-white font-semibold text-lg px-8 py-2 rounded-full hover:bg-primary-dark transition">
              Get Started
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Update;
