import React from "react";
import { FaStar } from "react-icons/fa";
import img1 from "../../assets/Home/StatsSection/1.jpg"
import img2 from "../../assets/Home/StatsSection/2.jpg"
import img3 from "../../assets/Home/StatsSection/3.jpg"

export default function StatsSection() {
  return (
    <section className="w-full flex flex-col items-center bg-white pt-5 font-['Poppins']">
      {/* Top Black Bar */}
      <div className="w-full max-w-[1070px] h-[118px] rounded-[20px] bg-black text-white px-[80px] py-[20px] flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-center">
          <p className="text-3xl font-bold flex items-center justify-center">
            4.8 <FaStar className="ml-1 text-yellow-400 text-xl" />
          </p>

          <p className="text-sm text-gray-300">
            <span className="text-xl font-medium">Ratings</span> from 10k+
            students
          </p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">200 +</p>
          <p className="text-xl text-gray-300 font-medium ">Hiring Partners</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">50 LPA</p>
          <p className="text-xl text-gray-300 font-medium">Highest Package</p>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-12"></div>

      {/* Accreditation Section */}
      <div className="w-full max-w-6xl text-center">
        <h2 className="lg:text-[28px] md:text-[28px] font-semibold mb-6">
          We are accredited by
        </h2>
        <div className="h-[100px] flex justify-center items-center gap-[50px] flex-wrap">
  <img
    src={img2}
    alt="DPIIT Startup India"
    className="h-[120px] w-[250px] object-contain" 
  />
  <img
    src={img1}
    alt="MSME"
    className="h-[120px] w-[189px] object-contain" 
  />
  <img
    src={img3}
    alt="ISO 9001"
    className="h-[120px] w-[162px] object-contain ml-5" 
  />
</div>
      </div>
    </section>
  );
}
