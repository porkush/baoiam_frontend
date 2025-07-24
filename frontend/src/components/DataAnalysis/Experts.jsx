// import React, { useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

// import Toshika_Mam from "../../assets/CoursesLayout/Experts/Toshika_Mam.png";
// import Sudhanshu_sir from "../../assets/CoursesLayout/Experts/Sudhanshu_sir.png";
// import Siddhart_sir from "../../assets/CoursesLayout/Experts/Siddhart_Sir.png";
// import Anudeep_Marlapali from "../../assets/CoursesLayout/Experts/Anudeep_Marlapali.png";

// const trainers = [
//   {
//     name: "Toshika Bagga",
//     role: "HRMS Expert",
//     experience: "5+ Years",
//     rating: 4.5,
//     student: "5k",
//     image: Toshika_Mam,
//   },
//   {
//     name: "Sudhanshu Mohan",
//     role: "Branding and Content Expert",
//     experience: "3+ Years",
//     rating: 4.5,
//     student: "5k",
//     image: Sudhanshu_sir,
//   },
//   {
//     name: "Siddharth Tomar",
//     role: "Startup & Entrepreneurship Expert",
//     experience: "7+ Years",
//     rating: 4.6,
//     student: "7k",
//     image: Siddhart_sir,
//   },
//   {
//     name: "Anudeep Marlapali",
//     role: "Data Science Expert",
//     experience: "6+ Years",
//     rating: 4.8,
//     student: "10k",
//     image: Anudeep_Marlapali,
//   },
// ];

// const TrainerCard = ({ image, name, role, experience, rating, student }) => {
//   const stars = Array(5)
//     .fill(0)
//     .map((_, i) => {
//       const diff = rating - i;
//       if (diff >= 1)
//         return <IoStar key={i} className="text-[14px] text-yellow-400" />;
//       if (diff >= 0.5)
//         return <IoStarHalf key={i} className="text-[14px] text-yellow-400" />;
//       return <IoStarOutline key={i} className="text-[14px] text-orange-300" />;
//     });

//   return (
//     <div className="h-[264px] w-[375px] relative overflow-visible flex items-center justify-center flex-shrink-0">
//       <div className="relative w-full h-[156px] bg-[#FF6501] rounded-[10px] flex items-end px-2 pt-10 pb-4">
//         <img
//           src={image}
//           alt={name}
//           className="absolute w-[165px] h-[206px] -top-[50px] left-0 object-contain"
//         />
//         <div className="ml-[160px] mb-3 text-left text-white">
//           <h3 className="text-[23px] font-medium mb-1">{name}</h3>
//           <p className="text-[12px] font-medium -mt-2">{role}</p>
//           <p className="text-sm font-medium font-poppins mt-2 mb-2">
//             <span className="font-medium text-[14px]">Experienced</span> –{" "}
//             {experience}
//           </p>
//           <div className="flex items-center gap-1 bg-white py-1 px-1 rounded-md">
//             <div className="flex">{stars}</div>
//             <span className="text-[10px] mb-1 text-gray-600 ml-1">
//               {student} By students
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Experts = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [transition, setTransition] = useState("transform 500ms ease-in-out");

//   const handleScroll = (direction) => {
//     setTransition("transform 500ms ease-in-out");

//     if (direction === "left" && currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     } else if (direction === "right" && currentIndex < trainers.length - 3) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const getTransformValue = () => {
//     // Each card is 390px wide + 24px gap = 414px
//     return `translateX(-${currentIndex * 414}px)`;
//   };

//   // Calculate the exact width for 3 cards + 2 gaps
//   const threeCardsWidth = (390 * 3) + (24 * 2); // 1170 + 48 = 1218px

//   return (
//     <div className="lg:w-[1370px] border-b-2 border-gray-200 mx-auto flex flex-col items-center justify-center relative px-4 md:px-8 py-4 ">
//       <h2 className="text-2xl md:text-[32px] lg:text-[40px] mb-3 text-center font-semibold lg:text-left font-['Poppins'] text-black">
//         Learn from {" "} <span className="text-orange-500">Industry Titans</span>
//       </h2>
//       <p className="max-w-3xl text-center text-[18px] font-medium font-['Poppins'] text-black mb-8">
//         Master skills from seasoned professionals who’ve worked at top tech companies.
//       </p>

//       {/* Main container for the carousel and arrows */}
//       {/* This container needs to be a flexbox to position arrows and card viewer */}
//       <div className="flex items-center justify-center w-full"> {/* Use w-full for full width, flex for alignment */}

//         {/* Left Arrow */}
//         <button
//           onClick={() => handleScroll("left")}
//           className="hidden lg:flex w-10 h-10 items-center justify-center rounded-full bg-white shadow-md disabled:opacity-30 flex-shrink-0 mr-4"
//           disabled={currentIndex === 0}
//         >
//           <FaArrowLeft />
//         </button>

//         {/* Cards Container - this is the element that will show exactly 3 cards and hide overflow */}
//         {/* Set a fixed width for 3 cards + 2 gaps */}
//         <div className="overflow-hidden" style={{ width: `${threeCardsWidth}px` }}>
//           <div
//             className="flex flex-nowrap gap-6 justify-start"
//             style={{
//               transform: getTransformValue(),
//               transition: transition,
//             }}
//           >
//             {trainers.map((trainer, index) => (
//               <TrainerCard key={index} {...trainer} />
//             ))}
//           </div>
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={() => handleScroll("right")}
//           className="hidden lg:flex w-10 h-10 items-center justify-center rounded-full bg-white shadow-md disabled:opacity-30 flex-shrink-0 ml-4"
//           disabled={currentIndex >= trainers.length - 3}
//         >
//           <FaArrowRight />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Experts;

import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

import Toshika_Mam from "../../assets/CoursesLayout/Experts/Toshika_Mam.png";
import Sudhanshu_sir from "../../assets/CoursesLayout/Experts/Sudhanshu_sir.png";
import Siddhart_sir from "../../assets/CoursesLayout/Experts/Siddhart_Sir.png";
import Anudeep_Marlapali from "../../assets/CoursesLayout/Experts/Anudeep_Marlapali.png";

const trainers = [
  {
    name: "Toshika Bagga",
    role: "HRMS Expert",
    experience: "5+ Years",
    rating: 4.5,
    student: "5k",
    image: Toshika_Mam,
  },
  {
    name: "Sudhanshu Mohan",
    role: "Branding and Content Expert",
    experience: "3+ Years",
    rating: 4.5,
    student: "5k",
    image: Sudhanshu_sir,
  },
  {
    name: "Siddharth Tomar",
    role: "Startup & Entrepreneurship Expert",
    experience: "7+ Years",
    rating: 4.6,
    student: "7k",
    image: Siddhart_sir,
  },
  {
    name: "Anudeep Marlapali",
    role: "Data Science Expert",
    experience: "6+ Years",
    rating: 4.8,
    student: "10k",
    image: Anudeep_Marlapali,
  },
];

const TrainerCard = ({ image, name, role, experience, rating, student }) => {
  const stars = Array(5)
    .fill(0)
    .map((_, i) => {
      const diff = rating - i;
      if (diff >= 1)
        return <IoStar key={i} className="text-[14px] text-yellow-400" />;
      if (diff >= 0.5)
        return <IoStarHalf key={i} className="text-[14px] text-yellow-400" />;
      return <IoStarOutline key={i} className="text-[14px] text-orange-300" />;
    });

  return (
    <div className="h-[264px] w-[280px] sm:w-[375px] relative overflow-visible flex items-center justify-center flex-shrink-0">
      <div className="relative w-full h-[156px] bg-[#FF6501] rounded-[10px] flex items-end px-2 sm:px-3 sm:pt-10 pb-3 sm:pb-4">
        <img
          src={image}
          alt={name}
          className="absolute w-[120px] h-[165px] sm:w-[165px] sm:h-[206px] -top-[8px] sm:-top-[50px] left-0 object-contain"
        />
        <div className="ml-[120px] sm:ml-[155px] mb-2 sm:mb-3 text-left text-white">
          <h3 className="text-[14px] sm:text-[22px] font-medium mb-0 sm:mb-1">
            {name}
          </h3>
          <p className="text-[10px] sm:text-[12px] font-medium mt-0 sm:-mt-2">
            {role}
          </p>
          <p className="text-xs sm:text-sm font-medium font-poppins mt-1 mb-1 sm:mt-2 sm:mb-2">
            <span className="font-medium text-[10px] sm:text-[14px]">
              Experienced
            </span>{" "}
            – {experience}
          </p>
          <div className="flex items-center gap-1 bg-white py-[2px] px-1 rounded-md w-full sm:w-auto">
            <div className="flex">{stars}</div>
            <span className="text-[8px] sm:text-[10px] text-gray-600 ml-0 sm:ml-1">
              {student} By students
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState("transform 500ms ease-in-out");
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const cardWidth = 280; // Reduced for mobile
  const smCardWidth = 375; // Original size for larger screens
  const cardGap = 16; // Reduced gap for mobile

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
      setCurrentIndex(0);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (direction) => {
    setTransition("transform 500ms ease-in-out");

    if (direction === "left") {
      setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
    } else if (direction === "right") {
      setCurrentIndex((prevIndex) =>
        Math.min(trainers.length - cardsPerPage, prevIndex + 1)
      );
    }
  };

  const getTransformValue = () => {
    const width = window.innerWidth < 640 ? cardWidth : smCardWidth;
    const gap = window.innerWidth < 640 ? cardGap : 24;
    const totalCardWidth = width + gap;
    return `translateX(-${currentIndex * totalCardWidth}px)`;
  };

  const getContainerWidth = () => {
    const width = window.innerWidth < 640 ? cardWidth : smCardWidth;
    const gap = window.innerWidth < 640 ? cardGap : 24;
    return `${width * cardsPerPage + gap * (cardsPerPage - 1)}px`;
  };

  return (
    <div className="w-full max-w-[1370px] border-b-2 border-gray-200 mx-auto flex flex-col items-center justify-center relative px-1 sm:px-8 py-4">
      <h2 className="text-2xl sm:text-[32px] lg:text-[40px] mb-3 text-center font-semibold lg:text-left font-['Poppins'] text-black">
        Learn from <span className="text-orange-500">Industry Titans</span>
      </h2>
      <p className="max-w-3xl text-center text-[14px] sm:text-[18px] font-medium font-['Poppins'] text-black sm:mb-8 px-4">
        Master skills from seasoned professionals who've worked at top tech
        companies.
      </p>

      <div className="flex items-center justify-center w-full">
        <button
          onClick={() => handleScroll("left")}
          className="w-6 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white shadow-md disabled:opacity-30 flex-shrink-0 mr-1 sm:mr-4"
          disabled={currentIndex === 0}
        >
          <FaArrowLeft />
        </button>

        <div className="overflow-hidden" style={{ width: getContainerWidth() }}>
          <div
            className="flex flex-nowrap gap-2 sm:gap-6 justify-start"
            style={{
              transform: getTransformValue(),
              transition: transition,
            }}
          >
            {trainers.map((trainer, index) => (
              <TrainerCard key={index} {...trainer} />
            ))}
          </div>
        </div>

        <button
          onClick={() => handleScroll("right")}
          className="w-6 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white shadow-md disabled:opacity-30 flex-shrink-0 ml-1 sm:ml-4"
          disabled={currentIndex >= trainers.length - cardsPerPage}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Experts;
