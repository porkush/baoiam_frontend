import React from 'react';
import bannerImage from '../../assets/Pride/PrideBanner/hand.png';

const PrideBanner = () => {
  return (
    <div
      className="relative w-[1200px] h-[228px] rounded-[20px] mx-auto flex items-center justify-between m-20 px-[68px] py-[25px]"
      style={{
        background: 'linear-gradient(180deg, rgba(255, 101, 1, 0.06) 0%, rgba(255, 101, 1, 0.6) 100%)',
      }}
    >
      {/* Text Section */}
      <div className="w-[885px] h-[178px]  flex flex-col justify-center gap-[10px]">
        <h2 className="text-[40px] leading-[50px] font-bold text-[#FF6501]">
          Come join us to make your{' '}
          <span className="text-[#4C00B0]">future rise</span>{' '}
          and your <span className="text-[#4C00B0]">identity shine</span>.
        </h2>

        <div className="flex gap-4 mt-4">
          <button className="bg-black text-white px-6 py-2 rounded-md font-semibold">
            Enroll Now
          </button>
          <button className="bg-white text-black border border-gray-300 px-6 py-2 rounded-md font-semibold">
            Talk to our Counsellor
          </button>
        </div>
      </div>

      {/* Right-side Image */}
      <img
        src={bannerImage}
        alt="Pride Hand"
        className="absolute w-[205px] h-[300px] -top-[72px] right-[0px] object-contain"
      />
    </div>
  );
};

export default PrideBanner;