import React from 'react';
import img2 from "../../assets/Home/InsightsSection/7.webp";

const JourneySection = () => {
  return (
    <div className=" bg-white px-4 pt-8 md:px-12">
      {/* Heading */}
      <div className="text-center mb-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our <span className="text-orange-500">Journey</span>
        </h2>
        <p className="mt-8 mb-16  max-w-2xl mx-auto text-gray-600">
          jdu dkjd dhdji djdji shjdher jhdf ajhjduis kjhduif adjhfjhiuf
        </p>
      </div>

      {/* Content */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
        {/* Left Images */}
       <div className="grid grid-cols-2 gap-4">
  {/* First row: two equal images */}
  <img
    src={img2}
    alt="1"
    className="w-full h-48 object-cover rounded-xl shadow-md"
  />
  <img
    src={img2}
    alt="2"
    className="w-full h-48 object-cover rounded-xl shadow-md"
  />

  {/* Second row: one image that matches height of first two combined */}
  <img
    src={img2}
    alt="3"
    className="col-span-2 w-full h-[192px] md:h-[208px] object-cover rounded-xl shadow-md"
  />
</div>



        {/* Right - Bullet Points */}
       <div className="flex flex-col gap-10">
  {/* 1st card: Right aligned */}
  <div className="flex justify-start">
    <div className="bg-white p-8 rounded-md shadow text-gray-700 max-w-[405px]">
      • We’ve been at this for 4+ years, and we still get excited about every project.
    </div>
  </div>

  {/* 2nd card: Left aligned */}
  <div className="flex justify-end">
    <div className="bg-white p-8 rounded-md shadow text-gray-700 max-w-[405px]">
      • Over <span className="font-semibold">4,000 students</span> have interned with us and actually learned something useful.
    </div>
  </div>

  {/* 3rd card: Right aligned again */}
  <div className="flex justify-start">
    <div className="bg-white p-8 rounded-md shadow text-gray-700 max-w-[405px]">
      • Many of them landed solid jobs after working with us—and that’s what matters.
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default JourneySection;
