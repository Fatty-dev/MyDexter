import { CiCircleQuestion } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiMagicWand } from "react-icons/pi";

const Step3 = () => {
  return (
    <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
      <div className="flex items-start gap-4 ">
        <div className="bg-[#e2e1fe]   flex justify-center items-center rounded-lg p-2 text-[#694bf3]">
          <FaArrowRightLong className="text-[16px]" />
        </div>
        <div className="text-[#181f2f] flex flex-col gap-4 w-[75%] font-semibold">
          <div>
            <div className="flex items-start gap-2 ">
              <h4 className="font-semibold text-[14px]">
                Step 3: AI generates your personalized content strategy
              </h4>
              <CiCircleQuestion className="cursor-pointer text-[15px] mt-1 text-gray-400" />
            </div>
            <p className="text-[#8e9fb8]  text-[10px] mt-2">
              Once you import your website content, Dexter will generate your
              AI-driven content strategy effortlessly for your site
            </p>
          </div>
        </div>
      </div>

      <div className="ml-[3.3rem]">
        <button className="text-white flex gap-2 items-center  bg-[#6d68fb] max-md:justify-center md:justify-center text-[12px] p-3 mt-4  lg:w-[80%] md:w-[80%]  max-md:w-full  rounded-md">
          <span className="">Generate SEO Optimization Strategy</span>
          <PiMagicWand className="text-white text-[15px]" />
        </button>
      </div>
    </div>
  );
};

export default Step3;
