import React, { useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { BsTwitterX } from "react-icons/bs";
import { LiaAngleDownSolid } from "react-icons/lia";

const About = () => {
  const [openSocials, setOpenSocials] = useState(false);
  return (
    <div className=" bg-white max-md:mt-24 mb-8 text-[#697287] shadow-md mt-4 rounded-lg p-6">
      <div className="flex justify-between px-4 pt-6 pb-8">
        <span className="text-black ">Privacy policy</span>

        <HiOutlineChevronRight className="mb-1 cursor-pointer" />
      </div>
      <hr />
      <div className="flex justify-between px-4 pt-6 pb-8">
        <span className="text-black">Term of use</span>

        <HiOutlineChevronRight className="mb-1 cursor-pointer" />
      </div>
      <hr />
      <div>
        <div className="flex justify-between px-4 pt-6 pb-8">
          <span className="text-black">Support</span>
          {!openSocials ? (
            <HiOutlineChevronRight
              onClick={() => setOpenSocials(!openSocials)}
              className="mb-1 cursor-pointer"
            />
          ) : (
            <LiaAngleDownSolid
              onClick={() => setOpenSocials(!openSocials)}
              className="mb-1 cursor-pointer"
            />
          )}
        </div>

        {openSocials && (
          <div className="px-4  space-y-3 mb-4">
            <div className="flex justify-between">
              <p className="flex items-center gap-2">
                <HiOutlineMail size={16} className="text-black" />
                Email
              </p>
              <Link to="/" className="underline text-primary">
                Mydexter@gmail.com
              </Link>
            </div>
            <div className="flex justify-between">
              <p className="flex items-center gap-2">
                <BsTwitterX size={12} className="text-black" />
                Twittex (X)
              </p>
              <Link to="/" className="underline text-primary">
                Mydexter
              </Link>
            </div>
          </div>
        )}
      </div>
      <hr />
      <div className="flex justify-between px-4 pt-6 pb-8">
        <span className="text-black">Version</span>
        <div className="flex items-center gap-3">
          <span>V1.0.0</span>
          <HiOutlineChevronRight className="mb- cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default About;
