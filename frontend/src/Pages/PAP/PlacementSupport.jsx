import React from "react";
import { FaBuilding, FaUserTie, FaUsers, FaBrain } from "react-icons/fa";

const PlacementSupport = () => {
  return (
    <div className="bg-white py-10 px-4 flex justify-center font-['Poppins']">
      <div className="max-w-6xl w-full flex justify-between gap-10">
        {/* Heading */}
        <div className="max-w-xl">
        <h2 className="text-2xl md:text-[48px] font-bold text-gray-900 leading-snug mb-6">
          Our Dedicated <br className="md:hidden" />
          <span className="text-black">Placement Team is</span><br className="md:hidden" />
          committed to get you a <span className="text-blue-600">Job</span>
        </h2>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Feature 1 */}
          <div className="flex items-start gap-3">
            <FaBuilding className="text-blue-600 text-2xl mt-1" />
            <p className="text-gray-700 text-lg">
              Exclusive access to our <br />partner companies
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-3">
            <FaUserTie className="text-blue-600 text-2xl mt-1" />
            <p className="text-gray-700 text-lg">
              1v1 experts sessions
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-3">
            <FaUsers className="text-blue-600 text-2xl mt-1" />
            <p className="text-gray-700 text-lg">
              Resume, LinkedIn, <br />Portfolio building
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start gap-3">
            <FaBrain className="text-blue-600 text-2xl mt-1" />
            <p className="text-gray-700 text-lg">
              Soft Skills, HR Interview <br />& Aptitude Training
            </p>
            
          </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default PlacementSupport;
