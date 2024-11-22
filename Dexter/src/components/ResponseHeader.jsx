import React,{useState} from 'react'
import { MdAccessTime } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import { CgMenuRight } from "react-icons/cg";
import Sidebar from "../components/Sidebar";

const ResponseHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <div className='fixed z-[1000] top-0 start-0   w-full lg:ml-[17rem] lg:w-[81%] border-b py-3 px-4'>
      <div className='flex items-center gap-10'>
  

      <div className='w-full flex items-center justify-between  mb-2 sm:mb-0 '>
      {/* Left Section */}
      <div className='text-secondary flex items-center gap-2 '>
        <MdAccessTime size={20} /> 
        <p className='text-xs'>1 mins ago</p>
      </div>

      {/* Middle Section */}
      <div className='sm:text-start mb-2 sm:mb-0'>
        <p className='text-tetiary text-sm sm:text-base'>
          I need you to suggest a landing page interface, first considering the fold area...
        </p>
      </div>

      {/* Right Section */}
      <div className='flex items-center font-medium gap-1 sm:ml-4'>
        <button className='text-primary text-md'>Signup</button>
        <p className='text-secondary'>for more SEO features!</p>
      </div>
      </div>

                {/* Hamburger Menu */}
                <div>
            <div className="block sm:hidden absolute right-4 top-4  z-20">
        <button onClick={toggleSidebar} className="text-3xl text-gray-700">
          {isOpen ? <FiX  size={22}/> : <CgMenuRight size={22} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 z-10 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}
      ></div>

      <div
        className={`fixed top-0 left-0 w-64 bg-white h-full shadow-xl z-20 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar 
        isOpen={isOpen}/>
      </div>
      </div>
      </div>
    </div>
  )
}

export default ResponseHeader;
