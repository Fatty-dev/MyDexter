import React from "react";
import { useNavigate } from "react-router-dom";

const Trial = () => {
  const navigate = useNavigate();

  const getStarted = () => {
    navigate("/dashboard");
  };

  return (
    <div className="bg-layer container mx-auto py-14 mb-[6rem] px-4 rounded-xl">
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
          <button
            className="bg-primary whitespace-nowrap text-white font-semibold text-lg px-8 py-2 rounded-full hover:bg-primary-dark transition"
            onClick={getStarted}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trial;
