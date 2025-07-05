import React from "react";
import { IoMoon, IoSunny } from 'react-icons/io5';
import lightLogo from "../../assets/Home/Navbar/logoLight.png"

const Navbar = () => {
  return (
    <nav className="sticky mx-auto mt-[20px] max-w-[1430px] h-[80px] bg-[#FFFAF7] rounded-[50px] shadow-md flex items-center justify-between pr-[40px] pl-[40px] font-['Poppins']">
      {/* Left */}
      <div className="flex items-center">
        <img src={lightLogo} alt="Baoiam" className="h-[70px] w-[130px]" />
      </div>

      {/* Center */}
      <div className="flex justify-center items-center">
        <ul className="hidden md:flex space-x-10 text-black text-[18px] w-[816px] ">
          <li className="hover:text-orange-500">PAP</li>
          <li className="hover:text-orange-500">Kickstarter courses</li>
          <li className="hover:text-orange-500">Pride</li>
          <li className="hover:text-orange-500">Refer & Earn</li>
          <li className="hover:text-orange-500">Success Stories</li>
          <li className="hover:text-orange-500">
            Company
          </li>
        </ul>
      </div>

      {/* Right */}
      <div className="flex items-center space-x-6">
        <button><IoMoon className="w-6 h-6 text-gray-800" /></button>

        <button className="bg-orange-500 text-white px-7 py-1 rounded-full text-xl hover:text-orange-500 hover:bg-orange-50 border-2 border-orange-500">
          Sign up
        </button>
        {/* <button className="border-2 px-7 py-1 text-xl rounded-full border-orange-500 text-orange-500">
          GCEP
        </button> */}
      </div>
    </nav>
  );
};



export default Navbar;