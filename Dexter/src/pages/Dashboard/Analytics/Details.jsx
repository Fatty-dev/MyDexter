import Metrics from "@/components/Common/Metrics";
import { scores } from "@/lib/data";
import { optimizationMetrics } from "@/lib/data";
import { engagementMetrics } from "@/lib/data";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { MdInfo } from "react-icons/md";
import { PiMagicWand } from "react-icons/pi";

export const Details = ({ showDetails, setShowDetails }) => {
  const detailsToShow = scores.find(
    (item) => item.label.replace(/\s*Score$/, "") === showDetails
  );

  return (
    <div className=" fixed inset-0 z-[50] bg-black bg-opacity-60">
      <div className="w-[23%] transition-all duration-300 absolute top-0 bottom-0 right-0  max-md:w-full max-md:top-12   bg-white p-4 overflow-y-scroll">
        <div className="flex items-center justify-between text-2xl pb-4 border-b border-b-gray-300 text-[#2e3646] font-bold">
          <p>Details</p>
          <IoMdClose
            className="cursor-pointer "
            onClick={() => setShowDetails(false)}
          />
        </div>

    { detailsToShow &&   <div className="bg-[#475467] p-4 rounded-lg mt-4">
          <Metrics
            metric={detailsToShow}
            className="relative left-8 bottom-16 text-white  text-[20px]"
            spanColor="text-[#8c94a0] font-semibold text-[11px]"
          />
          <div className="flex items-center gap-2 -mt-4 text-white opacity-80">
            <IoIosInformationCircleOutline size={20} />
            <p>Good, but room for improvement</p>
          </div>
        </div>}

        <div className="flex flex-col gap-3">
          {detailsToShow?.label === "Domain Optimization Score"
            ? optimizationMetrics.map((item, index) => (
                <div
                  key={index}
                  className="[&:not(:first-child)]:border-t [&:not(:first-child)]:border-t-gray-300 pb-3  last-of-type:mb-24"
                >
                  <div className="mt-4">
                    <p className="font-bold text-[#455062] mb-2">{item.label}</p>
                    {item.desc}
                  </div>
                  <div className="bg-[#f0f0ff] rounded-lg p-4 mt-4">
                    <div className="flex items-start gap-1">
                    <div className="text-[20px] text-[#6d68fb] ">
                        <MdInfo    />
                    </div>

                      <p className="">
                        <span className="text-[#525c6f] font-bold">
                          Action:
                        </span>{" "}
                        {item.action} <span className="text-sm text-[#8884fc]">Learn more.</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))
            : engagementMetrics.map((item, index) => (
                <div
                key={index}
                className="[&:not(:first-child)]:border-t [&:not(:first-child)]:border-t-gray-300 pb-3 last-of-type:mb-24"
              >
                <div className="mt-4">
                  <p className="font-bold text-[#455062] mb-2">{item.label}</p>
                  {item.desc}
                </div>
                <div className="bg-[#f0f0ff] rounded-lg p-4 mt-4">
                  <div className="flex items-start gap-3">
                    <div className="text-[20px] text-[#6d68fb] ">
                        <MdInfo    />
                    </div>

                    <p className="">
                      <span className="text-[#525c6f] font-bold">
                        Action:
                      </span>{" "}
                      {item.action} <span className="text-sm text-[#8884fc]">Learn more.</span>
                    </p>
                  </div>
                </div>
              </div>
              ))}
        </div>
        <div className="fixed bottom-0 right-0 p-8 z-[1000] w-[23%] max-md:w-full  bg-white ">
            <button className="text-white flex gap-2 items-center w-full bg-[#6d68fb] max-md:justify-center text-[12px] p-2     rounded-md">
              <span className="">Generate SEO Optimization Strategy</span>
              <PiMagicWand className="text-white text-[15px]" />
            </button>
        </div>
      </div>
    </div>
  );
};
