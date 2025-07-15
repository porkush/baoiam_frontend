// import React from 'react';
import udaanImg from '../../assets/Home/OurProgram/Udaan.webp';
import fusionImg from '../../assets/Home/OurProgram/spf.webp';
import Head from "../../assets/Home/OurProgram/head.webp";
import HeadingImage from '../Lines/HeadingImages';
import SubHeadImg from '../Lines/SubHeading';

const OurProgram = () => {

  return (
    <section className="w-full  mx-auto p-16 font-['Poppins'] ">
      {/* Heading */}
      <div className="text-center mb-12">
        <HeadingImage title="Our" highlight="Programs"/>
        <p className="text-lg md:text-xl   mx-auto">
          Skill up, stand out, and soar into success with our expert led
          programs.
        </p>
      </div>

      {/* Grid 1 */}

      <div className="max-w-[973px] mx-auto bg-[#FFF0E6] rounded-2xl shadow-md border border-orange-100 overflow-hidden flex flex-col md:flex-row font-['Poppins']  ">
        {/* Left: Image with stats bar */}
        <div className="relative md:w-1/2 w-full flex justify-center items-center mb-15 mt-3 ml-7">
          <img
            src={udaanImg}
            alt="Udaan 90"
            className="w-[360px] h-[360px] object-cover rounded-3xl" // ✅ Fully rounded image
          />

          {/* Overlapping Stats Bar */}
          <div className="absolute -bottom-8 flex justify-between items-center text-white bg-orange-500 w-[497px] h-[101px] px-[60px] py-[20px] gap-[60px] rounded-[20px] shadow-lg z-10">
            <div className="text-center">
              <p className="font-bold text-base md:text-[24px]">2K+</p>
              <p className="text-xs md:text-[18px] font-medium">Enrolled</p>
            </div>
            <div>
              <img
                src={Head}
                alt="logo_head"
                className="w-[32px] h-[32px] object-cover" // ✅ Fully rounded image
              />
            </div>
            <div className="text-center">
              <p className="font-bold text-base md:text-[24px]">1089 hours</p>
              <p className="text-xs md:text-[18px] font-medium">of Learning</p>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-between p-6 md:p-8 w-full md:w-1/2 ml-5">
          <div>
            <SubHeadImg text="Udaan - 90"/>

            <p className="font-semibold text-[#333333] mb-1">
              <span className="underline underline-offset-1 decoration-gray-[#333333] text-[24px]">
                Zero to Job–Ready in 90 Days at just ₹999.
              </span>
            </p>
            <p className="text-orange-500 font-medium my-4 text-[22px]">
              Affordable. Practical. Result-driven.
            </p>
            <ul className="mb-6 text-[#333333] text-[18px] list-disc list-inside p-3 font-medium">
              <li>Live classes + projects</li>
              <li>Resume & interview preparation</li>
              <li>Mentorship + peer support</li>
              <li>Duration – 3 Months</li>
              <li>Upto 7 LPA Package</li>
            </ul>
          </div>

          <button className="self-center w-[153px] h-[40px] bg-black hover:bg-[#ff6701d5] text-white px-[40px] py-[5px] rounded-lg text-[20px] ">
            Explore
          </button>
        </div>
      </div>

      {/*Grid 2 */}

      <div className="max-w-[973px] mx-auto bg-[#FFF0E6] rounded-2xl shadow-md border border-orange-100 overflow-hidden flex flex-col md:flex-row font-['Poppins'] mt-10">
        {/* Left: Content */}
        <div className="flex flex-col justify-between p-6 md:p-8 w-full md:w-1/2 ml-5">
          <div>
            <SubHeadImg text="Success Fusion"/>

            <p className="font-semibold text-[#333333] mb-1">
              <span className="underline underline-offset-1 decoration-gray-[#333333] text-[24px]">
                ₹4999 Upskill & Placement Program.
              </span>
            </p>
            <p className="text-orange-500 font-medium my-4 text-[22px]">
             Learn. Intern. Get Hired.
            </p>
            <ul className="mb-6 text-[#333333] text-[18px] list-disc list-inside p-3 font-medium">
              <li>12-month structured learning</li>
              <li>Live projects + Internships</li>
              <li>Placement support</li>
              <li>1:1 mentorship</li>
              <li>Upto 20 LPA Package</li>
            </ul>
          </div>

          <button className="self-center w-[153px] h-[40px] bg-black hover:bg-[#ff6701d5] text-white px-[40px] py-[5px] rounded-lg text-[20px] ">
            Explore
          </button>
        </div>

        {/* Left: Image with stats bar */}
        <div className="relative md:w-1/2 w-full flex justify-center items-center mb-15 mt-3 mr-7">
          <img
            src={fusionImg}
            alt="Udaan 90"
            className="w-[360px] h-[360px] object-cover rounded-3xl" // ✅ Fully rounded image
          />

          {/* Overlapping Stats Bar */}
          <div className="absolute -bottom-8 flex justify-between items-center text-white bg-orange-500 w-[497px] h-[101px] px-[60px] py-[20px] gap-[60px] rounded-[20px] shadow-lg z-10">
            <div className="text-center">
              <p className="font-bold text-base md:text-[24px]">2K+</p>
              <p className="text-xs md:text-[18px] font-medium">Enrolled</p>
            </div>
            <div>
              <img
                src={Head}
                alt="logo_head"
                className="w-[32px] h-[32px] object-cover" // ✅ Fully rounded image
              />
            </div>
            <div className="text-center">
              <p className="font-bold text-base md:text-[24px]">1089 hours</p>
              <p className="text-xs md:text-[18px] font-medium">of Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProgram;
