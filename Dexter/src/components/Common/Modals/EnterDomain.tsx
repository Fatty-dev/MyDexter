import React from "react";
import { BsGlobe } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

interface EnterDomainProps {
  setOpenDomainModal: (open: boolean) => void;
}

const EnterDomain = ({ setOpenDomainModal }: EnterDomainProps) => {
  return (
    <div className="flex justify-center items-center fixed inset-0 z-[50] bg-black bg-opacity-50">
      {/* Header Section */}
      <div className="mb-4 bg-white p-6 rounded-lg relative lg:w-[40%] md:w-[60%] max-md:w-full md:mx-0 max-md:mx-6">
        <h1 className="text-lg font-semibold text-gray-800">
          Enter your domain
        </h1>
        <IoMdClose
          className="absolute w-6 h-6 text-gray-600 cursor-pointer top-4 right-4"
          onClick={() => setOpenDomainModal(false)}
        />
        <p className="mt-2 text-sm text-gray-500">
          After entering your domain, we will customize the search results to
          display relevant SEO metrics specifically tailored for this exact
          domain.
        </p>

        {/* Form */}
        <div className=" py-3 rounded-lg flex justify-between items-center">
          <div className="flex items-center gap-2 w-full border border-gray-300 p-3 rounded-lg">
            <BsGlobe className="text-[#525c6d]" size={16} />
            <input
              className="text-[#525c6d] placeholder:text-sm w-full outline-none"
              type="text"
              placeholder="Enter your domain, e.g www.domainsample.com"
            />
            <p className="text-[#8480fb] text-sm cursor-pointer">Analyze</p>
          </div>
        </div>
        <p className="text-[8px] text-[#aebacd] text-center font-semibold ">
          Once you enter your domain, we&apos;ll conduct a comprehensive
          analysis of your site&apos;s metrics, providing you with access to
          customized blog posting tools and tailored strategies to boost your
          online presence.
        </p>
      </div>
    </div>
  );
};

export default EnterDomain;
