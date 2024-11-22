import React from 'react'
import logo from "../assets/Main_Logo.svg";


const Header = () => (
    <div className="">
        <div className='bg-white w-44 mx-auto rounded-full py-3 flex justify-center items-center'>
      <img src={logo} alt=""/>
      </div>
      <div>
      <p className="text-md text-[#6B7280]">Your personal AI-powered SEO specialist</p>
      </div>
    </div>
  );
  
  export default Header;
  