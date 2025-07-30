import React from 'react'
import seminarImage from '../../assets/GCEP/img2.jpg';


const WhyJoinGCEP = () => {
  return (
    <div className="relative w-full min-h-screen bg-white flex flex-col lg:flex-row justify-center items-start text-left px-4 lg:px-10 py-10">
      
      {/* Left Image (floating overlapping) */}
      <div className="z-10 mb-8 lg:mb-4 lg:absolute lg:left-[80px] lg:top-1/2 md:left-[100px] lg:-translate-y-1/2 p-[5px] bg-gradient-to-l from-white to-[#FF6501] rounded-xl w-full max-w-[450px]  mx-auto">
        <div className="bg-white rounded-lg">
          <img
            src={seminarImage}
            alt="Seminar"
            className="rounded-lg w-full h-[300px] lg:h-[350px]       object-cover"
          />
        </div>
      </div>

      {/* Right Content (gradient)  */}
      <div className=" w-full lg:w-[calc(100%-350px)] min-h-[650px] bg-gradient-to-r from-black via-[#2b0f00] to-orange-500 text-white flex flex-col justify-center items-center relative lg:left-[200px] px-4 md:px-16 py-10">
        <div className="flex flex-col justify-center items-start max-pl-[300px] md:pl-8 lg:pl-[100px] ">
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold mb-4">
            Why join GCEP ?
          </h2>

          <p className="max-w-[650px] text-[18px] md:text-[22px] lg:text-[24px] font-medium mb-6">
            Empower Your Institution with Global Innovation & Collaboration
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 text-[16px] md:text-[18px] mb-6 list-disc list-inside">
            <li>Global Exposure</li>
            <li>Access to Cutting-Edge Tools</li>
            <li>Student-Centric Opportunities</li>
            <li>Educator Empowerment</li>
            <li>Collaborative Innovation</li>
            <li>Recognition & Growth</li>
          </ul>

          <button className="bg-white text-[18px] md:text-[20px] lg:text-[24px] text-black px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyJoinGCEP;