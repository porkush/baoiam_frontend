import React from "react";
import { FiSearch } from "react-icons/fi";
import coinsBag from "../../assets/CoursesLayout/DiscountBanner/CoinBag.png";

const DiscountBanner = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 mb-14">
      <div className="bg-[#FF6501] rounded-xl flex flex-col md:flex-row items-center justify-between ">
        {/* Left side text and form */}
        <div className="flex-1 w-full md:w-2/3 mb-6 md:mb-0 p-6 md:py-4 md:px-12">
          <h2 className="text-white text-[20px] md:text-[32px] font-semibold mb-1">
            Save more with team & referral discounts
          </h2>
          <p className="text-white text-[14px] md:text-[22px] mb-4">
            Invite friends or enroll as a team to unlock instant discounts on
            your course.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 max-w-sm">
            <div className="relative flex-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pr-10 pl-4 py-2 rounded-md text-[14px] md:text-[16px] placeholder-white bg-[#FF914D] text-white focus:outline-none focus:ring-2 focus:ring-white"
              />
              <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-lg" />
            </div>

            <button className="bg-black text-white px-4 py-2 rounded-md text-[14px] md:text-[16px] hover:bg-gray-900 transition">
              Get Discount
            </button>
          </div>
        </div>

        {/* Right side image */}
        <div className="flex-shrink-0 w-[150px] md:w-[200px] lg:w-[232px] lg-[181px] lg:mr-14">
          <img
            src={coinsBag}
            alt="Coins and Bag"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
