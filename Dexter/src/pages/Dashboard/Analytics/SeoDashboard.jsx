import { Chart } from "@/components/charts/Chart";
import Metrics from "@/components/Common/Metrics";
import { CiCircleQuestion } from "react-icons/ci";
import { GoEye } from "react-icons/go";
import {  PiMagicWand } from "react-icons/pi";
import { scores } from "@/lib/data";

const SeoDashboard = () => {
  const visibilityScore = {
    label: "Dexter's Visibility Score",
    icon: <GoEye />,
    value: 54,
    max: 100,
    radius: 15,
    strokeWidth: 4,
    textColor: "text-white",
    ringSize: "size-28",
  };


  return (
    <div className="bg-[#344054] rounded-lg px-4 py-12">
      <h1 className="text-[#dee0e3] tracking-wide text-lg font-semibold ml-4 mb-6">
        My SEO Dashboard
      </h1>

      <div className="flex lg:flex-row lg:items-start   lg:gap-16 max-md:gap-4  md:gap-4 max-md:flex-col md:flex-col">
        {/* Visibility Score */}
        <div className="flex lg:justify-between lg:ml-8  md:ml-0 ">
          <div className="">
            <Metrics
              metric={visibilityScore}
              className=" text-white  text-[25px]"
               marginTop = "mb-8"
              
            />

            <div className="flex flex-col -mt-8 text-white max-md:-mt-6 ">
              <div>
                <span className="ml-6 text-3xl">{visibilityScore.value}</span>/
                <span className="text-sm">{visibilityScore.max}</span>
              </div>
              <div className="text-[#98a8bf] flex items-center max-md:text-center gap-2 text-[10px] right-3  lg:relative ">
                <p>{visibilityScore.label}</p>
                <CiCircleQuestion className="cursor-pointer text-[15px]" />
              </div>
            </div>

            <button className="text-white flex gap-2 whitespace-nowrap items-center bg-[#6d68fb] text-sm p-2 mt-2 relative  justify-center rounded-md">
              Improve My Score
              <PiMagicWand className="text-white text-[15px]" />
            </button>
          </div>
          {/* Seperator and other scores */}
          <div className="relative mt-12 ml-6 max-md:ml-6">
            <div className="w-[30px] h-[0.2rem] bg-gray-500"></div>
            <div className="w-[0.15rem] h-[85px] bg-gray-500"></div>
            <div className="w-[30px] h-[0.15rem] absolute right-[30px] top-[45px] bg-gray-500"></div>
            <div className="w-[30px] h-[0.15rem]  bg-gray-500"></div>
          </div>

          {/* Scores */}
          <div className="flex flex-col justify-between ml-2">
            {scores.map((score, index) => (
              <Metrics
                metric={score}
                key={index}
                className="text-white "
                marginTop = "mt-0"
                 spanColor = "text-[#98a8bf]"
              />
            ))}
          </div>
        </div>

        {/* Chart */}
        <div className="lg:w-[60%]  max-md:w-full md:w-full lg:relative bottom-8">
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default SeoDashboard;
