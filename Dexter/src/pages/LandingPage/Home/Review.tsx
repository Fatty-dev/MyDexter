import React from 'react';
import company from "../../../assets/Company logo.svg";
import avatar from "../../../assets/Avatar.svg";

const Review = () => {
  return (
    <div className="flex items-center justify-center w-full my-14 bg-[#F1F3FE] py-8 sm:py-16">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src={company}
            alt="Sisyphus logo"
            className="w-32 sm:w-40"
          />
        </div>

        {/* Review Text */}
        <p className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 mb-6">
          Our sales jumped 200% with Dexter AI—it’s now the backbone of every project!
        </p>

        {/* Profile Section */}
        <div className="flex flex-col items-center justify-center">
          <img
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-2"
            src={avatar}
            alt="Candice Wu"
          />
          <div className="text-center mt-4">
            <p className="text-base sm:text-lg font-semibold text-gray-800">Candice Wu</p>
            <p className="text-sm sm:text-base text-gray-500">Product Manager, Sisyphus</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
