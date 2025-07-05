import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const features = [
  "Live Masterclasses by Experts",
  "1-on-1 Mentorship & Career Coaching",
  "Real-World Projects (Minor + Major)",
  "Guaranteed Internship Opportunities",
  "Personalized Career Roadmap",
  "Live Corporate Exposure",
  "Mock Interviews & Skill Assessments",
  "Resume & Portfolio Mastery",
  "Placement Support & Job Access",
  "Exclusive Resource Vault"
];

const others = [true, false, true, false, true, false, false, false, true, false];
const us = Array(features.length).fill(true);

export default function ComparisonTable() {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 flex justify-center font-['Poppins']">
      <div className="max-w-[1100px] w-full">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-2">
            Here’s Why <span className="text-orange-500">Baoiam Stands Out!</span>
          </h2>
          <p className="text-black md:text-xl max-w-2xl mx-auto mt-5">
            Our commitment to quality, dedication and achievement oriented mindset sets us apart
          </p>
        </div>

        {/* Main Table Container */}
        <div className="bg-white rounded-[20px] shadow-lg p-5 md:p-8">
          <div className="flex flex-col md:flex-row">
            {/* Features Column (Half width) */}
            <div className="md:w-1/2 flex flex-col">
              <div className="bg-[#B2B2B2] rounded-lg text-center py-5 font-medium text-3xl text-[#1D2026]">
                Features
              </div>
              <div className="flex flex-col bg-gray-50">
                {features.map((item, idx) => (
                  <div key={idx} className="py-4 px-3 text-center md:text-left text-black font-medium text-xl">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side (Others + Us each half of remaining) */}
            <div className="md:w-1/2 ml-5 flex flex-row">
              {/* Others Column */}
              <div className="w-1/2 flex flex-col ml-6">
                <div className="bg-[#B2B2B2] rounded-lg text-center py-5 font-medium  text-3xl text-[#1D2026]">
                  Others
                </div>
                <div className="flex flex-col  bg-gray-50">
                  {others.map((val, idx) => (
                    <div key={idx} className="py-4 flex justify-center">
                      {val ? (
                        <FaCheckCircle className="text-green-500 text-xl" />
                      ) : (
                        <FaTimesCircle className="text-red-500 text-xl" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Us Column */}
              <div className="w-1/2  flex flex-col ml-8">
                <div className="bg-[#B2B2B2] rounded-lg text-center py-5 font-medium  text-3xl text-[#1D2026]"> 
                  Us
                </div>
                <div className="flex flex-col bg-gray-50">
                  {us.map((val, idx) => (
                    <div key={idx} className="py-4 flex justify-center">
                      <FaCheckCircle className="text-green-500 text-xl" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
