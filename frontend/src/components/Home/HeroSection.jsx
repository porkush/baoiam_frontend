import React from "react";
import StatsSection from "./StatsSection";
import { MdArrowForward } from "react-icons/md";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-white text-gray-800 px-6 pt-12 mt-6 md:flex md:items-center md:justify-between md:gap-12 font-['Poppins'] w-[1248px]">
      <div className="flex flex-col w-[634px] h-[488px]  ml-20">
        {/* Headline */}
        <h1 className="w-[670px] h-[84px] text-[56px] font-semibold leading-[100%]">
          <span className="text-black">Learn. Build. </span>
          <span className="text-orange-500">Get Hired.</span>
        </h1>

        {/* Subheading */}
        <p className="w-[634px] text-[18px] font-medium leading-[100%] text-[#222222] ">
          Where talent meets training and dreams take off. Backed by mentors,
          bootcamps & outcomes.
        </p>

        {/* "What brings you to Baoiam" section */}
        <div className="flex flex-col w-[634px] h-[225px] gap-5">
          <h2 className="w-[549px] h-[27px] text-[22px] font-medium leading-[100%] text-[#222222] mt-[40px]">
            What brings you to Baoiam today?
          </h2>

          <ul className="flex flex-col w-[549px] h-[178px] gap-[10px]">
            <li className="flex items-center w-[549px] h-[37px] px-[10px] py-[5px] rounded-[5px] bg-[#F8F8F8] gap-[16px]  font-medium">
              <input type="radio" name="goal" className="accent-orange-500" />
              Launch my career with job-ready skills
            </li>

            <li className="flex items-center w-[549px] h-[37px] px-[10px] py-[5px] rounded-[5px] bg-[#F8F8F8] gap-[16px] font-medium">
              <input type="radio" name="goal" className="accent-orange-500" />
              Upskill while in college
            </li>

            <li className="flex items-center w-[549px] h-[37px] px-[10px] py-[5px] rounded-[5px] bg-[#F8F8F8] gap-[16px] font-medium">
              <input type="radio" name="goal" className="accent-orange-500" />
              Switch to high-demand career
            </li>

            <li className="flex items-center w-[549px] h-[37px] px-[10px] py-[5px] rounded-[5px] bg-[#F8F8F8] gap-[16px] font-medium">
              <input type="radio" name="goal" className="accent-orange-500" />
              Explore AI-Powered courses
            </li>
          </ul>

          <div className="mt-4 flex">
            <button className="bg-[#FF6501] border rounded-lg text-white flex items-center gap-2 pt-[5px] pr-[20px] pb-[5px] pl-[20px] mr-4 font-medium">
              Apply Now
              <MdArrowForward className="w-5 h-5" />
            </button>

            <button className="bg-black text-white border rounded-lg pt-[5px] pr-[20px] pb-[5px] pl-[20px] ">
              Talk to our counselor
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-8 ml-20">
        {/* LEFT SCROLLER */}
        <div className="relative h-[520px] w-[220px] overflow-hidden">
          <motion.div
            className="flex flex-col items-center space-y-6"
            animate={{ y: ["0%", "-50%"] }}
            transition={{
              duration: 15, // Fast animation
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <img
              src="src/assets/Home/HeroSection/1.png"
              className="h-[250px] w-[200px] object-cover rounded-lg"
            />
            <img
              src="src/assets/Home/HeroSection/2.png"
              className="h-[250px] w-[200px] object-cover rounded-lg"
            />
            <img
              src="src/assets/Home/HeroSection/3.png"
              className="h-[250px] w-[200px] object-cover rounded-lg"
            />
            <img
              src="src/assets/Home/HeroSection/4.png"
              className="h-[250px] w-[200px] object-cover rounded-lg"
            />
            <img
              src="src/assets/Home/HeroSection/5.png"
              className="h-[250px] w-[200px] object-cover rounded-lg"
            />
            <img
              src="src/assets/Home/HeroSection/6.png"
              className="h-[250px] w-[200px] object-cover rounded-lg"
            />
          </motion.div>

          {/* Overlays */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>

          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        </div>

        {/* RIGHT SCROLLER */}
        <div className="relative h-[520px] w-[220px] overflow-hidden">
          <motion.div
            className="flex flex-col items-center space-y-6"
            animate={{ y: ["0%", "-50%"] }}
            transition={{
              duration: 15, // Fast animation
              repeat: Infinity,
              ease: "linear",
            }}
          >
             <img
              src="src/assets/Home/HeroSection/4.png"
              className="h-[250px] w-[200px] object-cover rounded-lg"
            />
            <img
              src="src/assets/Home/HeroSection/5.png"
              className="h-[250px] w-[200px] object-cover rounded-lg"
            />
            <img
              src="src/assets/Home/HeroSection/6.png"
              className="h-[250px] w-[200px] object-cover rounded-lg"
            />
            <img
              src="src/assets/Home/HeroSection/1.png"
              className="h-[250px] w-[200px] object-cover rounded-lg"
            />
            <img
              src="src/assets/Home/HeroSection/2.png"
              className="h-[250px] w-[200px] object-cover rounded-lg"
            />
            <img
              src="src/assets/Home/HeroSection/3.png"
              className="h-[250px] w-[200px] object-cover rounded-lg"
            />
           
          </motion.div>

          {/* Overlays */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
