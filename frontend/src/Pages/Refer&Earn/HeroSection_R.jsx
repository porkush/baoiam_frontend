import React from "react";
import ReferImage from "../../assets/Refer&Earn/Coins.png";
import ReferAvatars from "../../assets/Refer&Earn/avatar.png";

const HeroSection_R = () => {
  return (
    <section className="w-full bg-white px-6 py-8 md:py-12 md:px-16 lg:px-48 flex flex-col md:flex-row items-center justify-between">
      {/* Left Side Text Content */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[48px] font-bold text-black leading-tight mb-4">
          Refer To Your <br className="hidden md:block" />
          Friends and Earn
        </h2>
        <p className="text-black text-base sm:text-lg leading-relaxed mb-6 md:max-w-md mx-auto md:mx-0 text-justify">
          Turn your friends and network into value. Refer learners to our
          platform where you get rewards and they get discounted access to the
          courses.
        </p>

        {/* Avatars + Text */}
        <div className="flex items-center gap-2  mb-6 justify-center md:justify-start">
          <img
            src={ReferAvatars}
            alt="Refer Avatars"
            className="h-6 w-auto object-contain"
          />
          <div className="text-sm text-black">
            <strong className="font-semibold">8,000+</strong>
            <h6>Referrer's</h6>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center md:justify-start">
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-base sm:text-lg font-medium px-8 py-2 rounded-md transition duration-200">
            Refer now
          </button>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-4">
        <img
          src={ReferImage}
          alt="Earn Money"
          className="w-[250px] sm:w-[320px] md:w-[380px] lg:w-[470px] object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection_R;
