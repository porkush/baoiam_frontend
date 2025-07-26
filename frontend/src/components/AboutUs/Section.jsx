import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaLightbulb, FaHandshake, FaStar } from "react-icons/fa";

const WhyUsSection = () => {
  return (
    <div className="bg-gray-50 mt-10 py-12 px-4 md:px-8">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          What Makes Us <span className="text-orange-500">Different</span>
        </h2>
        <p className="mt-4 text-gray-800 max-w-2xl mx-auto">
          jdu dkjd dhdjhi djdji shjdher jhdf ajhjduis kjhduif adjhfjhiuf
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
          <div className="bg-white-50  p-4 rounded-full shadow-md mb-4">
            <FaGraduationCap className="text-3xl text-black" />
          </div>
          <p className="text-gray-800 font-medium">Student-Centric Learning Approach</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center">
          <div className="bg-white-50 p-4 rounded-full shadow-md mb-4">
            <FaLightbulb className="text-2xl text-yellow-300" />
          </div>
          <p className="text-gray-800 font-medium">Innovative Projects for Real-Life Impact</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center">
          <div className="bg-white-50 p-4 rounded-full shadow-md mb-4">
            <FaHandshake className="text-2xl text-yellow-300" />
          </div>
          <p className="text-gray-800 font-medium">Building Community via Events & Collaboration</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center">
          <div className="bg-white-50 p-4 rounded-full shadow-md mb-4">
            <FaStar className="text-2xl text-yellow-300" />
          </div>
          <p className="text-gray-800 font-medium">Passionate, Experienced Team of Experts</p>
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;
