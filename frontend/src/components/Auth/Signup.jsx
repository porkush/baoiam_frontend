import React from "react";
import { FaEye } from "react-icons/fa";
import Google from "../../assets/google.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 font-['Poppins']">
      <div className="bg-white rounded-3xl shadow-md w-[450px]  p-8">
        <h2 className="text-center text-xl text-gray-700 font-semibold">
          Welcome to{" "}
          <span className="bg-gradient-to-b text-3xl from-[#8EC342] via-[#F7942B] to-[#1E1C4B] text-transparent bg-clip-text font-semibold">
            Baoiam
          </span>
        </h2>
        <h1 className="text-[40px]  text-center mt-1 mb-6">
          Sign up
        </h1>

        {/* Email or Mobile */}
        <div className="mb-4">
          <label className="block text-base font-normal mb-3">
            E-mail or Mobile Number
          </label>
          <input
            type="text"
            placeholder="Enter Mobile number"
            className="w-full px-4 py-2 border border-gray-400 rounded-full "
          />
        </div>

        {/* OTP */}

        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <label className="block text-base mb-2 font-normal">
              OTP Verification
            </label>
            <button className="text-xs px-3 py-1 bg-orange-100 text-orange-500 rounded-full hover:bg-orange-200 transition-all">
              Send OTP
            </button>
          </div>

          <div className="relative ">
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full pr-10 pl-4 py-2 border border-gray-400 rounded-full"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaEye />
            </span>
          </div>
        </div>

        {/* Remember Me */}
        <div className="flex items-center justify-between mb-3 text-[14px]">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="w-5 h-5 accent-orange-500  mr-2 "
            />
            <label htmlFor="remember">
              I Agree to{" "}
              <a
                href="/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Terms & Conditions
              </a>
            </label>
          </div>
          <p className="text-[#E34444] cursor-pointer hover:underline">
            Refer & Earn
          </p>
        </div>

        {/* Sign In Button */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded-full font-semibold transition duration-300 shadow-md">
          Sign up
        </button>

        {/* Create account */}
        <div className="text-center mt-4 text-[16px] text-gray-600">
          Already have an account ?{" "}
          <Link
            to="/login"
            className="text-orange-500 font-normal text-lg hover:text-orange-700 pl-4"
          >
            Log in
          </Link>
        </div>

        {/* Divider */}
        <div className="flex items-center mt-6 mb-4">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="px-4 text-sm text-black">Or continue with</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        {/* Social Icons */}
        {/* Social Login with Google Logo */}
        <div className="flex justify-center mt-4">
          <a
            href="https://your-google-auth-url.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Google} alt=" " className="w-[62px] h-[62px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
