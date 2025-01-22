import React from "react";

const Security = () => {
  return (
    <div className=" bg-white shadow-md mt-4 max-md:mt-24 mb-8 rounded-lg p-6">
      <div className="flex justify-between md:flex-col md:gap-4 lg:flex-row max-md:flex-col  max-md:gap-4  p-6 text-[#85858d]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <span className=" text-black">Multi-factor authentication</span>
          </div>
          <p className="lg:w-[80%] md:w-full max-md:w-full">
            Require an extra security challenge when logging in. If you are
            unable to pass this challenge, you will have the option to recover
            your account via email.
          </p>
        </div>
        <button className="border border-[#908dfc] w-[80px] rounded-lg p-2 h-[20%] text-[#908dfc]  hover:bg-[#908dfc] hover:text-gray-900 transition-all duration-300 ">
          Enable
        </button>
      </div>

      <hr />
      <div className="flex justify-between max-md:flex-col md:flex-col md:gap-4 lg:flex-row max-md:gap-4  p-6 text-[#85858d]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <span className=" text-black">Log-out of all devices</span>
          </div>
          <p className="lg:w-[80%] md:w-full max-md:w-full">
          Log out of all active sessions across all devices, including your current session. It may take up to 30 minutes for other devices to be logged out.
          </p>
        </div>
        <button className="border  border-[#908dfc] h-[20%]  w-[100px] rounded-lg p-2  text-[#908dfc]  hover:bg-[#908dfc] hover:text-gray-900 transition-all duration-300 ">
         Log out all
        </button>
      </div>
    </div>
  );
};

export default Security;
