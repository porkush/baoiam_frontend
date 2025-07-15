import React, { useRef, useState } from "react";
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
    name: "Anudeep Marlapalli",
    role: "Data Science & Software Development Expert",
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
    <div className="h-[264px] w-[390px] relative overflow-visible flex items-center justify-center flex-shrink-0">
      <div className="relative w-full h-[156px] bg-[#FF6501] rounded-[10px] flex items-end px-2 pt-10 pb-4">
        <img
          src={image}
          alt={name}
          className="absolute w-[171px] h-[206px] -top-[50px] left-0 object-contain"
        />
        <div className="ml-[160px] mb-3 text-left text-white">
          <h3 className="text-[25px] font-medium mb-1">{name}</h3>
          <p className="text-[12px] font-medium -mt-2">{role}</p>
          <p className="text-sm font-medium font-poppins mt-2 mb-2">
            <span className="font-medium text-[14px]">Experienced</span> – {experience}
          </p>
          <div className="flex items-center gap-1 bg-white py-1 px-1 rounded-md">
            <div className="flex">{stars}</div>
            <span className="text-[10px] mb-1 text-gray-600 ml-1">
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

  const handleScroll = (direction) => {
    setTransition("transform 500ms ease-in-out");

    if (direction === "left" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === "right" && currentIndex < trainers.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Calculate the transform value based on currentIndex
  const getTransformValue = () => {
    // Each card is 385px wide with 24px gap (385 + 24 = 409)
    return `translateX(-${currentIndex * 409}px)`;
  };

  return (
  <div className="w-full lg:w-[1440px] border-b-2 border-gray-200 mx-auto flex flex-col items-center justify-center relative px-4 md:px-8 py-4 ">
    <h2 className="text-2xl md:text-[32px] lg:text-[40px] mb-8 text-center font-medium lg:text-left font-['Poppins'] text-black">
      Taught by the best
    </h2>

    <div className="relative w-full lg:w-[1400px] flex items-center justify-center overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={() => handleScroll("left")}
        className="hidden lg:flex absolute left-0 z-10 w-10 h-10 items-center justify-center rounded-full bg-white shadow disabled:opacity-30"
        disabled={currentIndex === 0}
      >
        <FaArrowLeft />
      </button>

      {/* Cards Container */}
      <div className="w-full lg:w-[1227px] flex flex-col lg:flex-row items-center lg:items-end overflow-hidden">
        <div
          className="flex flex-wrap lg:flex-nowrap gap-6 justify-center"
          style={{
            transform: window.innerWidth >= 1024 ? getTransformValue() : "none",
            transition: transition,
          }}
        >
          {trainers.map((trainer, index) => (
            <TrainerCard key={index} {...trainer} />
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => handleScroll("right")}
        className="hidden lg:flex absolute right-0 z-10 w-10 h-10 items-center justify-center rounded-full bg-white shadow disabled:opacity-30"
        disabled={currentIndex >= trainers.length - 3}
      >
        <FaArrowRight />
      </button>
    </div>
  </div>
);

};

export default Experts;





















