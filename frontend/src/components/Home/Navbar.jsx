// import React from "react";
// import { IoMoon, IoSunny } from "react-icons/io5";
// import { FaChevronDown } from "react-icons/fa";
// import lightLogo from "../../assets/Home/Navbar/logoLight.png";
// import giftbox from "../../assets/Home/Navbar/gift.gif";

// const Navbar = () => {
//   return (
//     <nav
//       className="sticky top-[20px] z-50
//  mx-auto mt-[20px] max-w-[1340px] h-[80px] bg-[#FFFAF7] rounded-[50px] shadow-md flex items-center justify-between pr-[40px] pl-[40px] font-['Poppins']"
//     >
//       {/* Left */}
//       <div className="flex items-center">
//         <img src={lightLogo} alt="Baoiam" className="h-[70px] w-[100px] ml-5" />
//       </div>

//       {/* Center */}
//       <div className="flex justify-center items-center ">
//         <ul className="hidden md:flex space-x-[33px] text-black text-[18px] ml-4">
//           <li className="hover:text-orange-500">PAP</li>
//           <li className="relative group cursor-pointer">
//             <span className="flex items-center hover:text-orange-500">
//               Kickstarter courses
//               <FaChevronDown className="ml-2 text-black" size={14} />
//             </span>
//             <ul className="absolute hidden group-hover:block bg-[#1D2026] text-gray-400 mt-2 py-2 w-48 rounded shadow-lg z-10">
//               <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
//                 Course 101
//               </li>
//               <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
//                 Advanced AI
//               </li>
//               <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
//                 Data Bootcamp
//               </li>
//             </ul>
//           </li>
//           <li className="relative inline-block">
//             <span
//               className="
//     font-poppins font-normal text-[18px] leading-none
//     bg-clip-text text-transparent
//     bg-gradient-to-r
//     from-[#110028] via-[#F1EAF9] to-[#8A38F5] to-75%
//     bg-[length:400%_auto]
//     animate-gradient
//   "
//             >
//               Pride
//             </span>
//           </li>
//           <li className="flex items-center gap-2 hover:text-orange-500">
//             <img src={giftbox} alt="Referral Animation" className="w-5 h-6" />
//             <span>Refer & Earn</span>
//           </li>{" "}
//           <li className="hover:text-orange-500">Success Stories</li>
//           <li className="relative group cursor-pointer">
//             <span className="flex items-center hover:text-orange-500">
//               Company
//               <FaChevronDown className="ml-2 text-black" size={14} />
//             </span>
//             <ul className="absolute hidden group-hover:block bg-[#1D2026] text-gray-400 mt-2 py-2 w-48 rounded shadow-lg z-10">
//               <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
//                 About Us
//               </li>
//               <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
//                 Careers
//               </li>
//               <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
//                 Press
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </div>

//       {/* Right */}
//       <div className="flex items-center space-x-6">
//         <button>
//           <IoMoon className="w-6 h-6 text-gray-800" />
//         </button>

//         <button className="bg-orange-500 text-white px-[20px] py-1 rounded-full text-[16px] hover:text-orange-500 hover:bg-orange-50 border-2 border-orange-500">
//           Sign up
//         </button>
//         {/* <button className="border-2 px-7 py-1 text-xl rounded-full border-orange-500 text-orange-500">
//           GCEP
//         </button> */}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { IoMoon } from "react-icons/io5";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import lightLogo from "../../assets/Home/Navbar/logoLight.png";
import giftbox from "../../assets/Home/Navbar/gift.gif";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    //     <nav
    //       className="sticky top-[20px] z-50
    //  mx-auto mt-[20px] max-w-[1340px] h-[80px] bg-[#FFFAF7] rounded-[50px] shadow-md flex items-center justify-between pr-[40px] pl-[40px] font-['Poppins']"
    //     >
    //       {/* Left */}
    //       <div className="flex items-center ml-5 hover:border hover:rounded-lg hover:border-gray-300">
    //         <Link to="/">
    //           <img
    //             src={lightLogo}
    //             alt="Baoiam"
    //             className="h-[70px] w-[100px]  p-1 "
    //           />
    //         </Link>
    //       </div>

    //       {/* Center */}
    //       <div className="flex justify-center items-center ">
    //         <ul className="hidden md:flex space-x-[33px] text-black text-[18px] ml-4">
    //           <li className="hover:text-orange-500">PAP</li>
    //           <li className="relative group cursor-pointer">
    //             <span
    //               className="flex items-center hover:text-orange-500 cursor-pointer"
    //               onMouseEnter={() => setIsHovered(true)}
    //               onMouseLeave={() => setIsHovered(false)}
    //             >
    //               Kickstarter courses
    //               {isHovered ? (
    //                 <FaChevronUp className="ml-2 text-black" size={14} />
    //               ) : (
    //                 <FaChevronDown className="ml-2 text-black" size={14} />
    //               )}
    //             </span>
    //             <ul className="absolute hidden group-hover:block bg-[#1D2026] text-gray-400 mt-2 py-2 w-48 rounded shadow-lg z-10">
    //               <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
    //                 Course 101
    //               </li>
    //               <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
    //                 Advanced AI
    //               </li>
    //               <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
    //                 Data Bootcamp
    //               </li>
    //             </ul>
    //           </li>
    //           <li className="relative inline-block">
    //             <span
    //               className="
    //                 font-poppins font-normal text-[18px] leading-none
    //                 bg-clip-text text-transparent
    //                 bg-gradient-to-r
    //                 from-[#110028] via-[#F1EAF9] to-[#8A38F5] to-75%
    //                 bg-[length:400%_auto]
    //                 animate-gradient
    //               "
    //             >
    //               Pride
    //             </span>
    //           </li>
    //           <li className="flex items-center gap-2 hover:text-orange-500">
    //             <img src={giftbox} alt="Referral Animation" className="w-5 h-6" />
    //             <span>Refer & Earn</span>
    //           </li>
    //           <li className="hover:text-orange-500">Success Stories</li>
    //           <li className="relative group cursor-pointer">
    //             <span
    //               className="flex items-center hover:text-orange-500 cursor-pointer"
    //               onMouseEnter={() => setIsHovered(true)}
    //               onMouseLeave={() => setIsHovered(false)}
    //             >
    //               Company
    //               {isHovered ? (
    //                 <FaChevronUp className="ml-2 text-black" size={14} />
    //               ) : (
    //                 <FaChevronDown className="ml-2 text-black" size={14} />
    //               )}
    //             </span>
    //             <ul className="absolute hidden group-hover:block bg-[#1D2026] text-gray-400 mt-2 py-2 w-48 rounded shadow-lg z-10">
    //               <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
    //                 About Us
    //               </li>
    //               <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
    //                 Careers
    //               </li>
    //               <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
    //                 Press
    //               </li>
    //             </ul>
    //           </li>
    //         </ul>
    //       </div>

    //       {/* Right */}
    //       <div className="flex items-center space-x-6">
    //         <button>
    //           <IoMoon className="w-6 h-6 text-gray-800" />
    //         </button>

    //         <Link
    //           to="/signup"
    //           className="bg-orange-500 text-white px-[20px] py-1 rounded-full text-[16px] hover:text-orange-500 hover:bg-orange-50 border-2 border-orange-500"
    //         >
    //           Sign up
    //         </Link>
    //       </div>
    //     </nav>

    <nav
      className="sticky top-[20px] z-50
 mx-auto mt-[20px] max-w-[1340px] h-[80px] bg-[#FFFAF7] rounded-[50px] shadow-md flex items-center justify-between pr-[40px] pl-[40px] font-['Poppins']"
    >
      {/* Left */}
      <div className="flex items-center ml-5 hover:border hover:rounded-lg hover:border-gray-300">
        <Link to="/">
          <img
            src={lightLogo}
            alt="Baoiam"
            className="h-[70px] w-[100px]  p-1 "
          />
        </Link>
      </div>

      {/* Center */}
      <div className="flex justify-center items-center">
        <ul className="flex flex-wrap justify-center items-center space-x-[20px] md:space-x-[33px] text-black text-[16px] md:text-[18px] ml-4">
          <li className="hover:text-orange-500">PAP</li>

          <li className="relative group cursor-pointer">
            <span className="flex items-center hover:text-orange-500 cursor-pointer">
              Kickstarter courses
              {isHovered ? (
                <FaChevronUp className="ml-2 text-black" size={14} />
              ) : (
                <FaChevronDown className="ml-2 text-black" size={14} />
              )}
            </span>
            <ul className="absolute hidden group-hover:block bg-[#1D2026] text-gray-400 mt-2 py-2 w-48 rounded shadow-lg z-10">
              <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
                Course 101
              </li>
              <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
                Advanced AI
              </li>
              <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
                Data Bootcamp
              </li>
            </ul>
          </li>

          <li className="relative inline-block">
            <span className="font-poppins font-normal text-[16px] md:text-[18px] leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#110028] via-[#F1EAF9] to-[#8A38F5] to-75% bg-[length:400%_auto] animate-gradient">
              Pride
            </span>
          </li>

          <li className="flex items-center gap-2 hover:text-orange-500">
            <img src={giftbox} alt="Referral Animation" className="w-5 h-6" />
            <span>Refer & Earn</span>
          </li>

          <li className="hover:text-orange-500">Success Stories</li>

          <li className="relative group cursor-pointer">
            <span className="flex items-center hover:text-orange-500 cursor-pointer">
              Company
              {isHovered ? (
                <FaChevronUp className="ml-2 text-black" size={14} />
              ) : (
                <FaChevronDown className="ml-2 text-black" size={14} />
              )}
            </span>
            <ul className="absolute hidden group-hover:block bg-[#1D2026] text-gray-400 mt-2 py-2 w-48 rounded shadow-lg z-10">
              <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
                About Us
              </li>
              <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
                Careers
              </li>
              <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
                Press
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Right */}
      <div className="flex items-center space-x-6">
        <button>
          <IoMoon className="w-6 h-6 text-gray-800" />
        </button>

        <Link
          to="/signup"
          className="bg-orange-500 text-white px-[20px] py-1 rounded-full text-[16px] hover:text-orange-500 hover:bg-orange-50 border-2 border-orange-500"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
