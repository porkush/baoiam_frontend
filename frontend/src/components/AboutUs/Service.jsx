import React from "react";
import img3 from "../../assets/AboutUs/im3.jpg"; // Use your actual image paths

const ServicesSection = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-8">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our <span className="text-orange-500">Services</span>
        </h2>
      </div>

      {/* Service Cards */}
      <div className="space-y-6 max-w-2xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-xl px-2 py-2 flex items-center space-x-4 ">
          <div className="w-[100px] h-[100px] bg-gray-200 rounded-full shrink-0" />
          <p className="text-gray-800 font-medium">
            Nexnott Dating App – for people who want real, not random.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-xl px-2 py-2  flex items-center space-x-4 ml-20">
          <div className="w-[100px] h-[100px] bg-gray-200 rounded-full shrink-0" />
          <p className="text-gray-800 font-medium">
            Courses that don’t waste your time—just what you need to know.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md px-2 py-2 rounded-xl  flex items-center space-x-4">
          <div className="w-[100px] h-[100px] bg-gray-200 rounded-full shrink-0" />
          <p className="text-gray-800 font-medium">
            Live classes where you can ask, learn, and actually interact.
          </p>
        </div>
      </div>

      {/* CTA Banner */}
      <div
        className="mt-16 relative bg-cover bg-center rounded-xl overflow-hidden text-white"
        style={{
          backgroundImage: `url(${img3})`,
        }}
      >
        {/* Orange + Black gradient overlay (80% orange + 50% black) */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(0deg,#FF7C27,#FF7C27),linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5))] opacity-30"></div>

        {/* Content layer */}
        <div className="relative z-10 bg-black/60 px-6 py-10 md:px-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            Connect With Us
          </h3>
          <p className="mb-6">
            From Pune to Delhi to Bengaluru—we’ve been where students are.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-orange-500 text-xl px-10 py-2 rounded-md  hover:text-orange-700 hover:opacity-30 hover:bg-orange-200 transition duration-200">
              Apply Now →
            </button>
            <button className="bg-black text-2xl text-white font-semibold px-10 py-2 rounded-md shadow hover:bg-gray-500  transition duration-200">
              Talk to our Counsellor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
