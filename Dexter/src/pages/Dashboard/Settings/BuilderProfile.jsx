import { IoCubeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { PiWarningCircle } from "react-icons/pi";
import { LiaAngleDownSolid } from "react-icons/lia";
import { GoGlobe } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { PiRadioButtonBold } from "react-icons/pi";


const BuilderProfile = () => {
  return (
    <div className=" bg-white max-md:mt-24 mb-8 text-[#2d3545] shadow-md mt-4 rounded-lg p-6">
      <p className="text-center text-gray-800">
        Personalize your builder profile to connect with users of your posts.
        These settings apply to publicly shared blog posts.
      </p>

      <div className="relative px-4 ">
        <div className="relative lg:w-[70%] max-md:w-full md:w-full mx-auto mt-4">
          <div className="flex justify-center items-center flex-col gap-4 mt-6">
            <div className="relative p-1 w-10 h-10 border rounded-full">
              <IoCubeOutline
                size={20}
                className="transition-transform absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
              />
            </div>
            <p className="font-semibold text-lg">Placeholder</p>
            <p className="flex gap-2 items-center">
              By community builder
              <FaRegUser size={16} />
            </p>
          </div>
          <span className="absolute top-0 right-1 ">Preview</span>
        </div>
      </div>

      <div className="flex mb-6   lg:w-[70%] gap-4 mx-auto mt-4 items-start p-4 justify-center  border rounded-[10px]">
        <PiWarningCircle className="text-[2rem]" />
        <p className="lg:w-[70%] text-gray-800">
          Complete verification to publish GPTs to everyone. <br />
          Verify your identity by adding billing details or verifying ownership
          of a public domain name.
        </p>
      </div>
<hr />
      <div className="p-4 space-y-4 " >
        <p>Shared links</p>
        <div className="flex justify-between">
          <GoGlobe size = {20} className="text-black"/>
          <div className="flex items-center gap-2">
          <span>Select a domain</span>
          <LiaAngleDownSolid  className="cursor-pointer"/>
          </div>
        </div>
      </div>
      <hr />

      <div className="space-y-3 p-4">
        <p>Export data</p>
         <p className="flex items-center gap-2">
           <HiOutlineMail size={16} className="text-black" />
          email@example.com
         </p>
         <p className="flex items-center gap-2">
           < PiRadioButtonBold size={16} className="text-black" />
          Receive feedback emails
         </p>
      </div>
    </div>
  );
};

export default BuilderProfile;
