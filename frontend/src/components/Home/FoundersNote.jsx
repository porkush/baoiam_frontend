import React from "react";
import Group from "../../assets/Home/Lines/Group.webp";
import Founder from "../../assets/Home/Founder/Founder.png";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const FoundersNote = () => {
  return (
    <div className=" mx-auto px-6 py-12 font-['Poppins']">
      <div className="flex items-center justify-center w-full ">
        <h2 className="text-3xl md:text-[48px] text-orange-500  font-semibold font-['Poppins'] ">
          Founder <span className="text-black">Note</span>
        </h2>
        <img src={Group} alt="" className="w-9 mb-4" />
      </div>

      <p className="text-lg sm:text-xl md:text-2xl mt-2 text-center mb-6">
        From the Desk of{" "}
        <span className="text-orange-500 ">Siddharth Tomar,</span> Founder{" "}
        <span className="text-orange-500 ">– BAOIAM</span>
      </p>

      <div
        className="flex items-center justify-center min-h-screen"
       
      >
        <div
          style={{
            width: "1200px",
            height: "670px",
            borderRadius: "10px",
            opacity: 1,
          }}
          className="bg-white rounded-xl shadow-md overflow-hidden flex flex-row"
        >
          {/* Left Section - Image and Info */}
          <div
            className="text-white flex flex-col items-center justify-center"
            style={{
              background:
                "linear-gradient(270deg, #FF6501 18.58%, #FFC6A2 98.25%)",
              width: "600px",
              height: "670px",
              opacity: 1,
            }}
          >
            <div className=" rounded-full overflow-hidden mb-4">
              <img
                src={Founder}
                alt="Siddharth Tomar"
                className="w-[342px] h-[342px] object-cover"
              />
            </div>
            <h2 className="text-[28px] font-bold">Siddharth Tomar</h2>
            <p className="text-[22px] text-center px-4  leading-tight mt-2">
              Founder and CEO – BAOIAM <br />
              <span className="text-[20px]">
                National Speaker | Startup & Entrepreneurship | Mentor
              </span>
            </p>
          </div>

          {/* Right Section - Quote */}
          <div
            className="relative text-black border-t-[15px] border-r-[15px] border-b-[15px] border-orange-500 px-6 overflow-y-auto text-[14px]"
            style={{
              width: "640px",
              height: "670px",
              opacity: 1,
            }}
          >
            <FaQuoteLeft className="text-3xl text-black-600 absolute top-1 left-0 m-1" />
            <div className="space-y-4 mt-10 ml-4 text-justify ">
              <p>
                In today's world,{" "}
                <span className="font-semibold">
                  education has sadly become a luxury
                </span>
                . If you want to learn something truly valuable—like Data
                Science, Digital Marketing, or any in-demand skill—you're often
                expected to pay
                <span className="font-semibold">
                  {" "}
                  ₹ 70,000 to ₹ 1,00,000
                </span>{" "}
                or more. Yet, even after spending this huge amount, there's no
                guarantee of real learning or real outcomes.
              </p>
              <p className="text-justify">
                At BAOIAM, we exist to change that.
              </p>
              <p className="text-justify">
                I started Baoiam with a very simple belief: Education should be{" "}
                <span className="font-semibold">
                  powerful, practical, and affordable
                </span>
                . That's it. No fluff, no false promises. What others charge
                lakhs for, we deliver in just{" "}
                <span className="font-semibold">₹4,999</span>—and with better
                structure, deeper mentorship, and real industry training.
              </p>
              <p className="text-justify">
                Why do we charge ₹4,999? Just to show you that world-class{" "}
                <span className="font-bold">
                  education doesn't have to be expensive.
                </span>{" "}
                And because we believe students should invest in their
                growth—but not be exploited in the name of{" "}
                <span className="font-semibold">"Premium Learning".</span>
              </p>
              <p className="text-justify">
                If you join <span className="font-semibold"> BAOIAM, </span>{" "}
                you're not just signing up for a course. You're entering a
                learning ecosystem designed to take you from{" "}
                <span className="font-semibold">zero to corporate-ready</span>.
                This is my personal assurance: everything you'll learn here is
                exactly what today's companies want. No shortcuts. No outdated
                theory. Just skills that get you{" "}
                <span className="font-semibold">hired</span>.
              </p>
              <p className="text-justify">
                Let this be your{" "}
                <span className="font-semibold">turning point</span>. <br />
                Let BAOIAM be your{" "}
                <span className="font-semibold">launchpad</span>.
              </p>
            </div>
            <div className="text-right mt-1">
              <p className="font-semibold text-[18px]">Siddharth Tomar</p>
              <p className="text-[15px] font-semibold">– Founder, Baoiam</p>
            </div>
            <FaQuoteRight className="text-3xl text-black absolute bottom-32 right-0 m--1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundersNote;








































