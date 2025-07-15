// CoursePage.jsx
import React from "react";
import { FaStar } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { MdPlayCircle } from "react-icons/md";
import avatar from "../../assets/CoursesLayout/CoursesPage/avatar.png";
import Expert from "../../assets/CoursesLayout/CoursesPage/Expert.png";
import DS from "../../assets/CoursesLayout/CoursesPage/DS.png";
import globe from "../../assets/CoursesLayout/CoursesPage/globe.png";
import laptop from "../../assets/CoursesLayout/CoursesPage/laptop.png";
import { AiFillHome, AiOutlineRight } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function HeroSection_C() {
  return (
    <div className="bg-white font-['Poppins']">
      {/* Breadcrumbs */}

      <div className="max-w-9/10 mx-auto p-4 md:flex md:space-x-8 mt-10">
        {/* Left Side */}
        <div className="flex-1">
          <nav className="flex items-center text-black sm:text-lg md:text-[24px]  mb-6">
            <Link to="/">
              <AiFillHome className="w-5 h-5" />
            </Link>
            <AiOutlineRight className="w-4 h-4 mx-2" />
            <Link to="/">
              <span>Home</span>
            </Link>
            <AiOutlineRight className="w-4 h-4 mx-2" />
            <span>Master Data Science</span>
          </nav>
          <h1 className="text-3xl md:text-[40px] font-semibold mb-6">
            Master Data Science
          </h1>
          <p className="text-black text-3xl md:text-[40px] mb-4 font-semibold">
            From <span className="text-orange-500">Zero to Data Hero</span> -{" "}
            <br /> In just <span className="text-orange-500">12 Months!</span>
          </p>
          <button className="inline-flex items-center bg-[#FF6501] text-white font-medium px-4 py-1 rounded-md hover:bg-orange-600 mb-6 text-[18px] mt-4">
            Download Brochure
          </button>

          {/* Instructor Info */}
          <div className="flex items-center space-x-4 mb-6 mt-4">
            <img
              src={Expert}
              alt="Instructor"
              className="rounded-full w-12 h-12 object-cover"
            />

            <div className="text-center">
              <p className="text-[18px] font-medium text-[#FF6501] flex items-center justify-center">
                Anshum Sen
              </p>
              <p className="text-[12px] text-[#1B1B1B99]">
                Data Science Expert
              </p>
            </div>

            <div className="flex items-center justify-center">
              <img
                src={globe}
                alt="Learners Icon"
                className="w-[32px] h-[32px] object-cover rounded-full ml-2 mr-1"
              />
              <p className="text-[18px] text-[#1B1B1B99]">Hindi, English</p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={laptop}
                alt="Learners Icon"
                className="w-[32px] h-[32px] object-cover rounded-full ml-2 mr-1"
              />
              <p className="text-[18px] text-[#1B1B1B99]">
                Last updated - June 2025
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="w-full flex md:block justify-center my-10">
            <div className="max-w-[575px] min-h-[68px] rounded-[20px] bg-black text-white px-6 md:px-[20px] lg:px-[40px] py-2 md:py-[10px] flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 lg:ml-10">
              {/* Got Placed */}
              <div className="text-center">
                <p className="text-[18px] font-semibold flex items-center justify-center">
                  2000+
                </p>
                <p className="text-sm text-white text-[14px]">Got Placed</p>
              </div>

              {/* Reviews */}
              <div className="text-center">
                <p className="text-[18px] font-semibold flex items-center justify-center">
                  4.5
                  <FaStar className="ml-2 text-yellow-400 text-xl" />
                </p>
                <p className="text-[14px] text-white font-medium">
                  31782 Reviews
                </p>
              </div>

              {/* Learners */}
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <p className="text-[18px] font-semibold">10,000+</p>
                  <img
                    src={avatar}
                    alt="Learners Icon"
                    className="w-[60px] h-[30px] object-cover rounded-full ml-2"
                  />
                </div>
                <p className="text-[14px] text-gray-300 font-medium mt-1">
                  Learners
                </p>
              </div>
            </div>
          </div>

          {/* What will you learn */}
          <section className="mb-6">
            <h2 className="text-[24px] font-semibold mb-2  text-black">
              What will you learn?
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "NumPy",
                "SQL",
                "Linear Algebra",
                "Pandas",
                "Pivot",
                "Git/Github",
                "Probability & Statistics",
                "Baye's Theorem",
                "Distribution",
              ].map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-[2px] bg-white rounded-full text-sm border text-[#FF6501] border-gray-300 hover:bg-gray-200 transition mx-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          {/* Prerequisites */}
          <section>
            <h2 className="text-[24px] font-semibold mb-2">
              Prerequisites for this course:
            </h2>
            <ul className="list-disc list-inside text-[18px] text-black space-y-1">
              <li>Basic Mathematics (No Worry – No Complex Theorems!)</li>
              <li>Basics of Programming.</li>
              <li>Curiosity and interest towards Data skills.</li>
              <li>No prior experience in data science is required.</li>
            </ul>
          </section>
        </div>

        {/* Right Side */}
        <aside className="md:mt-0 ">
          <div className=" rounded-lg p-6 border-[2px] border-[#99999966]">
            <div className="bg-[#FF6501] text-white text-[18px] rounded-lg px-4 py-2 mb-8">
              Rs 7 LPA median salary, 20,000 jobs available
            </div>

            <div className="relative mb-4 rounded-xl overflow-hidden w-[527px] h-[320px]">
              <img
                src={DS}
                alt="Course Preview"
                className="w-full h-full object-cover rounded-xl"
              />

              <button
                className="absolute inset-0 flex items-center justify-center rounded-xl transition"
                style={{
                  background: "rgba(0, 0, 0, 0.3)",
                }}
              >
                <MdPlayCircle className="text-white text-[80px] opacity-90 hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>

            <h3 className="text-[18px] text-black mb-2">Preview this Course</h3>
            <div className="max-w-md mx-auto bg-white  overflow-hidden  border-gray-200">
              {/* Tabs */}
              <div className="flex ">
                <button className="flex-1 py-3 text-center font-medium text-orange-500 border-b-2 border-orange-500">
                  Individual
                </button>
                <button className="flex-1 py-3 text-center font-medium text-orange-500 border-b-2 border-gray-200">
                  Team
                </button>
              </div>

              {/* Pricing */}
              <div className="grid grid-cols-2 border-b-2 border-gray-300 text-[18px]">
                <div className="border-r-2 border-gray-300 p-1 mt-2">
                  <p className="text-black mb-1">Subscription (Monthly):</p>
                  <p className="text-black">₹XXX/month</p>
                </div>
                <div className="p-3">
                  <p className="text-black mb-1">Subscription Bundle:</p>
                  <p className="text-black">₹XXX/month</p>
                </div>
              </div>

              {/* Features */}
              <ul className="list-disc list-inside text-black text-sm space-y-2 p-4">
                <li>₹XXX (One-time payment)</li>
                <li>Cancel anytime</li>
                <li>Hands-on projects with expert feedback</li>
                <li>Personalized career coaching & interview prep</li>
                <li>Program certificate</li>
              </ul>

              {/* Buttons */}
              <div className="flex space-x-3 p-4">
                <button className="flex-1 bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition">
                  Buy Now
                </button>
                <button className="flex-1 bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-900 transition">
                  Add to Cart
                </button>
                <div className="flex items-center gap-4 ml-3 text-black">
                  <BsBookmark className="w-6 h-6" />
                  <FiSend className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <hr className="w-full  border-t-[2px] border-gray-100 mt-12 mb-6" />
    </div>
  );
}
