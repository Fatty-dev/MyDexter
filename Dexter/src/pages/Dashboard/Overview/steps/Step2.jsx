import { CiCircleQuestion } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import wordpress from "@/assets/wordpress.svg";
import shopify from "@/assets/shopify.svg";
import wix from "@/assets/wix.svg";
import { FaCheck } from "react-icons/fa";

const Step2 = () => {
  const integrations = [
    {
      img: wordpress,
      name: "Wordpress",
      desc: "For WordPress, install the plugin in the admin panel to auto-publish blog posts.",
      connected: true
    },
    {
      img: wix,
      name: "Wix",
      desc: "Connect Dexter to Wix apps and automate tasks easily — no coding required.",
      connected: false
    },
    {
      img: shopify,
      name: "Shopify",
      desc: "Use Shopify's API to link Dexter and streamline your workflows effortlessly.",
      connected: false
    },
  ];
  return (
    <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
      <div className="flex items-start gap-4 ">
        <div className="bg-[#e2e1fe]   flex justify-center items-center rounded-lg p-2 text-[#694bf3]">
          <FaArrowRightLong className="text-[16px]" />
        </div>
        <div className="text-[#181f2f] flex flex-col gap-4">
          <div>
            <div className="flex items-start gap-2">
              <h4 className="font-semibold text-[14px]">
                Step 2: Connect your website&apos;s blog using API integration
              </h4>
              <CiCircleQuestion className="cursor-pointer text-[15px] mt-1 text-gray-400" />
            </div>
            <p className="text-[#8e9fb8]  text-[10px] font-semibold mt-2">
              Automate your posts with AI by integrating My Dexter in your
              website.
            </p>
          </div>
          <p className="text-[#4f596b] font-bold">Integratrions</p>
     
        </div>
        
      </div>
      <div className="flex flex-col gap-2 mt-3 ml-12">
          {integrations.map((integrations, index) => (
                <div
                  key={index}
                  className="bg-white w-[80%] relative max-md:w-full md:w-[80%] border border-gray-300 p-3 rounded-lg flex justify-between items-center"
                >
                  <div className="flex items-start gap-2">
                    <img src={integrations.img} alt={integrations.name} />
                    <div className="">
                      <div className="flex flex-col ">
                        <p className="text-[#4f596b] font-bold">{integrations.name}</p>
                        <p className="text-[#8e9fb8] text-[8px] ">
                          {integrations.desc}
                        </p>
                      </div>
                     {integrations.connected ?   <FaCheck className="text-[#28b875] text-[14px] absolute right-4 top-6" /> : <GoArrowRight className="text-[16px] absolute right-4 top-6 text-[#8e9fb8] cursor-pointer" />}
                    </div>
                  </div>
                </div>
              ))}
      </div>
    </div>
  );
};

export default Step2;
