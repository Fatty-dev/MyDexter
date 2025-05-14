import EnterDomain from "@/components/Common/Modals/EnterDomain";
import { useState } from "react";
import { BsGlobe } from "react-icons/bs";
import { CiCircleQuestion } from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";

const Step1 = () => {
  const [domain, setDomain] = useState(null);
  const [openDomainModal, setOpenDomainModal] = useState(false);
  return (
    <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
      <div className="flex items-start gap-4 ">
        <div className="bg-[#d1f0e1]   flex justify-center items-center rounded-full p-2 text-[#1cb46d]">
          <FaRegCheckCircle className="text-[16px]" />
        </div>
        <div className="text-[#181f2f] flex flex-col gap-4">
          <div>
            <div className="flex items-start gap-2">
              <h4 className="font-semibold text-[14px]">
                Step 1: Get started with your domain analytics setup
              </h4>
              <CiCircleQuestion className="cursor-pointer text-[15px] mt-1 text-gray-400" />
            </div>
            <p className="text-[#8e9fb8] mt-2 text-[10px] font-semibold">
              Enter your domain for your assistant to retrieve website metrics
              and SEO insights.
            </p>
          </div>

          <div className="bg-white w-[80%] max-md:w-full md:w-[80%] border border-gray-300 p-4 rounded-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <BsGlobe className="text-[#525c6d]" size={12} />
              <p className="text-[#525c6d]">www.domainsample.com</p>
            </div>
            {domain ? (
              <FaCheck className="text-[#28b875] text-[14px] absolute right-4 top-6" />
            ) : (
              <GoArrowRight
                onClick={() => {
                  setOpenDomainModal(true);
                }}
                className="text-[16px] corsor-pointer text-[#8e9fb8] cursor-pointer"
              />
            )}
          </div>
          <p className="text-[8px] text-[#aebacd] w-[70%] max-md:w-full md:w-[70%] ">
            Once you enter your domain, we&apos;ll conduct a comprehensive
            analysis of your site&apos;s metrics, providing you with access to
            customized blog posting tools and tailored strategies to boost your
            online presence.
          </p>
        </div>
      </div>
      {openDomainModal && (
        <EnterDomain setOpenDomainModal={setOpenDomainModal} />
      )}
    </div>
  );
};

export default Step1;
