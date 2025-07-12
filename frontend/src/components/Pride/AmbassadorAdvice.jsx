import React from "react";
// import ambassadorImage from "../../assets/Pride/AmbassadorSection/ambassador.png"; // replace with your actual path
import ambassadorImage from "../../assets/Pride/Herosection_P/bonnay.png";


const AmbassadorAdvice = () => {
  return (
    <section className="relative font-['Poppins'] overflow-hidden">
      {/* Top White Area */}
      <div className="bg-white text-center px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
          Get our Ambassador’s Advice
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 text-base md:text-lg mb-6">
          More people are finally talking about gender identity in schools and
          colleges, which is an encouraging and strong step in the...
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md font-medium transition">
            Enroll Now
          </button>
          <button className="bg-black hover:bg-gray-800 text-white px-5 py-2 rounded-md font-medium transition">
            Talk to our Counsellor
          </button>
        </div>
      </div>

      {/* Bottom Orange Background */}
      <div className="bg-orange-500 h-[150px] md:h-[200px] relative">
        {/* Image Overlapping Top and Bottom */}
        <div className="absolute inset-x-0 -top-[75px] md:-top-[100px] flex justify-center">
          <div className="relative w-[90%] max-w-4xl rounded-2xl overflow-hidden shadow-lg">
            <img
              src={ambassadorImage}
              alt="Ambassador Advice"
              className="w-full h-auto object-cover"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="bg-white rounded-full p-3 md:p-4 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmbassadorAdvice;
