import React from "react";
import img1 from "../../assets/Home/InsightsSection/7.webp";
import img2 from "../../assets/Home/InsightsSection/7.webp";
import img3 from "../../assets/Home/InsightsSection/7.webp";

const OurJourney = () => {
  return (
    <div className="bg-white w-full py-16 px-4 md:px-10 lg:px-20">
      {/* Centered Heading Section */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-[48px] font-bold text-black mb-2">
          Our <span className="text-orange-500">Journey</span>
        </h2>
        <p className="text-gray-700 text-base max-w-xl mx-auto">
          jdu dkjd dhdjhi djdji shjdher jhdf ajhjhduis kjhduif adjhfjhiuf
        </p>
      </div>

      {/* Content Section - Left Images and Right Text */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-4 max-w-6xl mx-auto">
        {/* Left Images */}
        <div className="flex-1">
          <div className="flex flex-col gap-4">
            {/* First row with two images */}
            <div className="flex gap-4">
              <div className="w-[235px] h-[200px] bg-gray-200 rounded-lg">
                <img 
                  src={img1}
                  alt="Placeholder" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-[230px] h-[200px] bg-gray-200 rounded-lg">
                <img 
                  src={img2}
                  alt="Placeholder" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Second row with one large image */}
            <div className="w-[480px] h-[200px] bg-gray-200 rounded-lg">
              <img 
                src={img3} 
                alt="Placeholder" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Right Text Content */}
        <div className="flex-1 ">
  <div className="space-y-6">
    {/* Left-aligned items */}
    <div className="flex flex-col items-start">
      <div className="bg-white shadow-md rounded-xl p-4 max-w-md text-[24px]">
        • We've been at this for 4+ years, and we still get excited about every project.
      </div>
    </div>

    {/* Right-aligned middle item */}
    <div className="flex flex-col items-end">
      <div className="bg-white shadow-md rounded-xl p-4 max-w-md text-[24px]">
        • Over 4,000 students have interned with us and actually learned something useful.
      </div>
    </div>

    {/* Left-aligned last item */}
    <div className="flex flex-col items-start">
      <div className="bg-white shadow-md rounded-xl p-4 max-w-md text-[24px]">
        • Many of them landed solid jobs after working with us—and that's what matters.
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default OurJourney;