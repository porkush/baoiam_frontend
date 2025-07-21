// import React, { useState } from "react";
// import { IoMoon } from "react-icons/io5";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import lightLogo from "../../assets/Home/Navbar/logoLight.webp";
// import giftbox from "../../assets/Home/Navbar/gift.gif";
// import { NavLink, Link } from "react-router-dom";

// const Navbar = ({ onSignUpClick }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const kickstarterCourses = {
//   "Success Fusion Program": [
//     "Data Science",
//     "Data Analysis",
//     "Digital Marketing",
//     "UI/UX & Prototyping",
//     "AI basics for beginners",
//     "Entrepreneurship",
//   ],
//   "Udaan 90": [
//     "SEO",
//     "Graphic Designing",
//     "Video Editing",
//     "Social Media Marketing",
//     "Front-End Dev",
//     "Java",
//     "Excel",
//     "Python",
//     "Cyber Security",
//     "Marketing",
//     "Soft Skills",
//     "Product Design",
//     "AI & ML",
//     "Startup",
//     "Public Speaking",
//   ],
//   "AI & ML": [
//     "Deep Learning with TensorFlow & PyTorch",
//     "Prompt Engineering",
//     "Generative AI",
//     "Natural Language Processing",
//     "Applied Machine Learning",
//   ],
// };


//   return (
//     <>
//       <nav className="sticky top-[20px] z-50 mx-auto mt-[20px] max-w-[1340px] h-[80px] bg-[#FFFAF7] rounded-[50px] shadow-md flex items-center justify-between pr-[40px] pl-[40px] font-['Poppins']">
//         {/* Left */}
//         <div className="flex items-center ml-5 hover:border hover:rounded-lg hover:border-gray-300">
//           <Link to="/">
//             <img
//               src={lightLogo}
//               alt="Baoiam"
//               className="h-[70px] w-[115px] p-1"
//             />
//           </Link>
//         </div>

//         {/* Center Desktop Menu */}
//         <div className="hidden md:flex justify-center items-center">
//           <ul className="flex space-x-[33px] text-black text-[18px] ml-4">
//             <li className="hover:text-orange-500">PAP</li>

//             <li className="relative group cursor-pointer">
//               <div
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => {
//                   setIsHovered(false);
//                   setSelectedCategory(null);
//                 }}
//               >
//                 <span className="flex items-center hover:text-orange-500">
//                   Kickstarter courses
//                   {isHovered ? (
//                     <FaChevronUp className="ml-2 text-black" size={14} />
//                   ) : (
//                     <FaChevronDown className="ml-2 text-black" size={14} />
//                   )}
//                 </span>

//                 {/* Accordion Style Dropdown */}
//                 {isHovered && (
//                   <div className="absolute  text-black  py-2 w-66 rounded shadow-lg z-20 border border-gray-100 bg-gray-50">
//                     {Object.entries(kickstarterCourses).map(
//                       ([category, subcategories]) => (
//                         <div key={category} className="border-b border-gray-200">
//                           <button
//                             className="flex justify-between items-center w-full px-2 py-2 hover:bg-gray-100"
//                             onClick={() =>
//                               setSelectedCategory(
//                                 selectedCategory === category ? null : category
//                               )
//                             }
//                           >
//                             {category}
//                             <span>
//                               {selectedCategory === category ? (
//                                 <FaChevronUp size={14} />
//                               ) : (
//                                 <FaChevronDown size={14} />
//                               )}
//                             </span>
//                           </button>

//                           {/* Subcategory List */}
//                           {selectedCategory === category && (
//                             <ul className="px-4 py-1">
//                               {subcategories.map((sub, index) => (
//                                 <li
//                                   key={index}
//                                   className="py-1 pl-2 hover:bg-orange-500 hover:text-white cursor-pointer rounded"
//                                 >
//                                   {sub}
//                                 </li>
//                               ))}
//                             </ul>
//                           )}
//                         </div>
//                       )
//                     )}
//                   </div>
//                 )}
//               </div>
//             </li>

//             <li className="relative inline-block">
//               <NavLink
//                 to="/pride"
//                 className={({ isActive }) =>
//                   isActive
//                     ? `relative inline-block font-poppins font-normal text-[18px] leading-none
//                       text-orange-500 underline decoration-orange-500 underline-offset-4`
//                     : `relative inline-block font-poppins font-normal text-[18px] leading-none
//                       bg-clip-text text-transparent
//                       bg-gradient-to-r from-[#110028] via-[#F1EAF9] to-[#8A38F5] to-75%
//                       bg-[length:400%_auto]
//                       animate-gradient
//                       hover:text-orange-500`
//                 }
//               >
//                 Pride
//               </NavLink>
//             </li>

//             <li className="flex items-center gap-2 hover:text-orange-500">
//               <img src={giftbox} alt="Referral Animation" className="w-5 h-6" />
//               <span>Refer & Earn</span>
//             </li>

//             <li className="hover:text-orange-500">Success Stories</li>

//             <li className="relative group cursor-pointer">
//               <span
//                 className="flex items-center hover:text-orange-500"
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//               >
//                 Company
//                 {isHovered ? (
//                   <FaChevronUp className="ml-2 text-black" size={14} />
//                 ) : (
//                   <FaChevronDown className="ml-2 text-black" size={14} />
//                 )}
//               </span>
//               <ul className="absolute hidden group-hover:block bg-[#1D2026] text-gray-400 mt-2 py-2 w-48 rounded shadow-lg z-10">
//                 <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
//                   About Us
//                 </li>
//                 <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
//                   Careers
//                 </li>
//                 <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
//                   Press
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </div>

//         {/* Right */}
//         <div className="flex items-center space-x-4">
//           <button>
//             <IoMoon className="w-6 h-6 text-gray-800" />
//           </button>
//           <button
//             onClick={onSignUpClick}
//             className="hidden md:inline-block bg-orange-500 text-white px-[20px] py-1 rounded-full text-[16px] hover:text-orange-500 hover:bg-orange-50 border-2 border-orange-500"
//           >
//             Sign up
//           </button>

//           {/* Hamburger for mobile */}
//           <button
//             className="md:hidden focus:outline-none"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             <svg
//               className="w-8 h-8 text-gray-800"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d={
//                   mobileMenuOpen
//                     ? "M6 18L18 6M6 6l12 12" // X icon
//                     : "M4 6h16M4 12h16M4 18h16" // Hamburger
//                 }
//               />
//             </svg>
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Dropdown Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden fixed top-[100px] left-0 w-full bg-[#FFFAF7] shadow-lg rounded-b-xl z-40">
//           <ul className="flex flex-col space-y-4 p-6 text-black text-[18px] font-['Poppins']">
//             <li className="hover:text-orange-500">PAP</li>
//             <li className="hover:text-orange-500">Kickstarter courses</li>
//             <li>
//               <NavLink
//                 to="/pride"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "text-orange-500 underline decoration-orange-500 underline-offset-4"
//                     : "hover:text-orange-500"
//                 }
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Pride
//               </NavLink>
//             </li>
//             <li className="flex items-center gap-2 hover:text-orange-500">
//               <img src={giftbox} alt="Referral Animation" className="w-5 h-6" />
//               <span>Refer & Earn</span>
//             </li>
//             <li className="hover:text-orange-500">Success Stories</li>
//             <li className="hover:text-orange-500">Company</li>
//             <li>
//               <button
//                 onClick={() => {
//                   onSignUpClick();
//                   setMobileMenuOpen(false);
//                 }}
//                 className="bg-orange-500 text-white px-4 py-2 rounded-full text-[16px] hover:text-orange-500 hover:bg-orange-50 border-2 border-orange-500 w-full text-center"
//               >
//                 Sign up
//               </button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;














import React, { useState } from "react";
import { IoMoon } from "react-icons/io5";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import lightLogo from "../../assets/Home/Navbar/logoLight.webp";
import giftbox from "../../assets/Home/Navbar/gift.gif";
import { NavLink, Link } from "react-router-dom";

const Navbar = ({ onSignUpClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [mobileKickstarterOpen, setMobileKickstarterOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [openSubcategory, setOpenSubcategory] = useState(null);

  const kickstarterCourses = {
    "Success Fusion Program": [
      "Data Science",
      "Data Analysis",
      "Digital Marketing",
      "UI/UX & Prototyping",
      "AI basics for beginners",
      "Entrepreneurship",
    ],
    "Udaan 90": [
      "SEO",
      "Graphic Designing",
      "Video Editing",
      "Social Media Marketing",
      "Front-End Dev",
      "Java",
      "Excel",
      "Python",
      "Cyber Security",
      "Marketing",
      "Soft Skills",
      "Product Design",
      "AI & ML",
      "Startup",
      "Public Speaking",
    ],
    "AI & ML": [
      "Deep Learning with TensorFlow & PyTorch",
      "Prompt Engineering",
      "Generative AI",
      "Natural Language Processing",
      "Applied Machine Learning",
    ],
  };

  return (
    <>
      <nav className="sticky top-[20px] z-50 mx-auto mt-[20px] max-w-[1340px] h-[80px] bg-[#FFFAF7] rounded-[50px] shadow-md flex items-center justify-between px-[20px] sm:pr-[40px] sm:pl-[40px] font-['Poppins']">
        {/* Left */}
        <div className="flex items-center sm:ml-5 hover:border hover:rounded-lg hover:border-gray-300">
          <Link to="/">
            <img
              src={lightLogo}
              alt="Baoiam"
              className="h-[55px] w-[85px] sm:h-[60px] sm:w-[95px] md:h-[70px] md:w-[115px] p-1"
            />
          </Link>
        </div>

        {/* Center Desktop Menu */}
        <div className="hidden md:flex justify-center items-center">
          <ul className="flex space-x-[33px] text-black text-[18px] ml-4">
            <li className="hover:text-orange-500">PAP</li>

            <li className="relative group cursor-pointer">
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                  setIsHovered(false);
                  setSelectedCategory(null);
                }}
              >
                <span className="flex items-center hover:text-orange-500">
                  Kickstarter courses
                  {isHovered ? (
                    <FaChevronUp className="ml-2 text-black" size={14} />
                  ) : (
                    <FaChevronDown className="ml-2 text-black" size={14} />
                  )}
                </span>

                {/* Accordion Style Dropdown */}
                {isHovered && (
                  <div className="absolute  text-black  py-2 w-66 rounded shadow-lg z-20 border border-gray-100 bg-gray-50">
                    {Object.entries(kickstarterCourses).map(
                      ([category, subcategories]) => (
                        <div
                          key={category}
                          className="border-b border-gray-200"
                        >
                          <button
                            className="flex justify-between items-center w-full px-2 py-2 hover:bg-gray-100"
                            onClick={() =>
                              setSelectedCategory(
                                selectedCategory === category ? null : category
                              )
                            }
                          >
                            {category}
                            <span>
                              {selectedCategory === category ? (
                                <FaChevronUp size={14} />
                              ) : (
                                <FaChevronDown size={14} />
                              )}
                            </span>
                          </button>

                          {/* Subcategory List */}
                          {selectedCategory === category && (
                            <ul className="px-4 py-1">
                              {subcategories.map((sub, index) => (
                                <li
                                  key={index}
                                  className="py-1 pl-2 hover:bg-orange-500 hover:text-white cursor-pointer rounded"
                                >
                                  {sub}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            </li>

            <li className="relative inline-block">
              <NavLink
                to="/pride"
                className={({ isActive }) =>
                  isActive
                    ? `relative inline-block font-poppins font-normal text-[18px] leading-none
                      text-orange-500 underline decoration-orange-500 underline-offset-4`
                    : `relative inline-block font-poppins font-normal text-[18px] leading-none
                      bg-clip-text text-transparent
                      bg-gradient-to-r from-[#110028] via-[#F1EAF9] to-[#8A38F5] to-75%
                      bg-[length:400%_auto]
                      animate-gradient
                      hover:text-orange-500`
                }
              >
                Pride
              </NavLink>
            </li>

            <li className="flex items-center gap-2 hover:text-orange-500">
              <img src={giftbox} alt="Referral Animation" className="w-5 h-6" />
              <span>Refer & Earn</span>
            </li>

            <li className="hover:text-orange-500">Success Stories</li>

            <li className="relative group cursor-pointer">
              <span
                className="flex items-center hover:text-orange-500"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
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
        <div className="flex items-center space-x-4">
          <button className="hidden md:block">
            <IoMoon className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={onSignUpClick}
            className="hidden md:inline-block bg-orange-500 text-white px-[20px] py-1 rounded-full text-[16px] hover:text-orange-500 hover:bg-orange-50 border-2 border-orange-500"
          >
            Sign up
          </button>

          {/* Signup button for mobile (replaces moon icon) */}
          <button
            onClick={onSignUpClick}
            className="md:hidden bg-orange-500 text-white px-1 sm:px-4 sm:py-1 rounded-full sm:text-[16px] text-[10px]hover:text-orange-500 hover:bg-orange-50 border-2 border-orange-500"
          >
            Sign up
          </button>

          {/* Hamburger for mobile */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-8 h-8 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12" // X icon
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger
                }
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[100px] left-0 w-full  shadow-lg rounded-xl z-40">
          <ul className="flex flex-col space-y-4 p-6 text-black text-[16px] font-['Poppins'] bg-[#FFFAF7] ">
            <li className="hover:text-orange-500">PAP</li>

            {/* Kickstarter courses dropdown for mobile */}
            <li>
              <div
                className="flex items-center hover:text-orange-500 cursor-pointer"
                onClick={() => setMobileKickstarterOpen(!mobileKickstarterOpen)}
              >
                Kickstarter courses
                {mobileKickstarterOpen ? (
                  <FaChevronUp className="ml-2" size={14} />
                ) : (
                  <FaChevronDown className="ml-2" size={14} />
                )}
              </div>
              {mobileKickstarterOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {Object.entries(kickstarterCourses).map(
                    ([category, subcategories]) => (
                      <div key={category}>
                        <div
                          className="flex items-center cursor-pointer"
                          onClick={() =>
                            setOpenSubcategory(
                              openSubcategory === category ? null : category
                            )
                          }
                        >
                          {category}
                          {openSubcategory === category ? (
                            <FaChevronUp className="ml-2" size={12} />
                          ) : (
                            <FaChevronDown className="ml-2" size={12} />
                          )}
                        </div>
                        {openSubcategory === category && (
                          <ul className="ml-4 mt-1 space-y-1">
                            {subcategories.map((sub, index) => (
                              <li
                                key={index}
                                className="py-1 pl-2 hover:text-orange-500"
                              >
                                {sub}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )
                  )}
                </div>
              )}
            </li>

            {/* Pride with gradient effect */}
            <li>
              <NavLink
                to="/pride"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 underline decoration-orange-500 underline-offset-4"
                    : "bg-clip-text text-transparent bg-gradient-to-r from-[#110028] via-[#F1EAF9] to-[#8A38F5] to-75% bg-[length:400%_auto] animate-gradient hover:text-orange-500"
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Pride
              </NavLink>
            </li>

            <li className="flex items-center gap-2 hover:text-orange-500">
              <img src={giftbox} alt="Referral Animation" className="w-5 h-6" />
              <span>Refer & Earn</span>
            </li>

            <li className="hover:text-orange-500">Success Stories</li>

            {/* Company dropdown for mobile */}
            <li>
              <div
                className="flex items-center hover:text-orange-500 cursor-pointer"
                onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
              >
                Company
                {mobileCompanyOpen ? (
                  <FaChevronUp className="ml-2" size={14} />
                ) : (
                  <FaChevronDown className="ml-2" size={14} />
                )}
              </div>
              {mobileCompanyOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  <li className="hover:text-orange-500">About Us</li>
                  <li className="hover:text-orange-500">Careers</li>
                  <li className="hover:text-orange-500">Press</li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;