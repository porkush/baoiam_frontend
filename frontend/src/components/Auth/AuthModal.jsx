import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Google from "../../assets/google.png";
import { useState } from "react";

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [showOtp, setShowOtp] = useState(false);

  if (!isOpen) return null;

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setShowOtp(false);
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center font-['Poppins'] overflow-y-auto p-2 sm:p-4">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div
        className="
      relative z-10 bg-white rounded-2xl shadow-lg
      w-full max-w-[450px]
      h-auto
      p-4 sm:p-6 md:p-8
      overflow-hidden
    "
      >
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-orange-500 text-xl sm:text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          <IoClose />
        </button>

        {/* Header */}
        <h2 className="text-center text-[22px] sm:text-[26px] mb-2">
          Welcome to <span className="text-orange-500 font-medium">Baoiam</span>
        </h2>
        <h1 className="text-[24px] sm:text-[28px] text-center font-medium mb-5">
          {isLogin ? "Log In" : "Sign Up"}
        </h1>

        {/* Email / Mobile */}
        <div className="mb-3">
          <label className="block text-[14px] sm:text-[15px] font-normal mb-2">
            Email ID or Mobile Number
          </label>
          <input
            type="text"
            placeholder="Enter Email ID or Mobile number"
            className="w-full px-4 py-2.5 text-[14px] text-[#808080] border border-gray-400 rounded-full focus:outline-none focus:border-orange-400"
          />
        </div>

        {/* OTP */}
        <div className="mb-3">
          <div className="flex items-center justify-between mb-2">
            <label className="text-[14px] sm:text-[15px] font-normal">
              OTP Verification
            </label>
            <button className="text-xs px-3 py-1 sm:px-3.5 sm:py-1.5 bg-orange-100 text-orange-500 rounded-full hover:bg-orange-200 transition-all">
              Send OTP
            </button>
          </div>
          <div className="relative">
            <input
              type={showOtp ? "text" : "password"}
              placeholder="Enter OTP"
              className="w-full pr-10 pl-4 py-2.5 text-[14px] text-[#808080] border border-gray-400 rounded-full focus:outline-none focus:border-orange-400"
            />
            <button
              type="button"
              onClick={() => setShowOtp(!showOtp)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-orange-500"
            >
              {showOtp ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Terms Checkbox */}
        <div className="flex items-center justify-between mb-3 text-[13px] sm:text-[14px]">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 sm:w-5 sm:h-5 accent-orange-500 mr-2"
            />
            <label htmlFor="remember" className="text-[#8D8D8D]">
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
        </div>

        {/* Submit Button */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2.5 sm:py-3 rounded-full font-semibold transition duration-300 shadow-md mt-3">
          {isLogin ? "Log In" : "Sign Up"}
        </button>

        {/* Switch Link */}
        <div className="text-center mt-3 text-[14px] sm:text-[15px] text-[#8D8D8D]">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <button
                onClick={toggleMode}
                className="text-orange-500 font-normal hover:text-orange-700 pl-1"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={toggleMode}
                className="text-orange-500 font-normal hover:text-orange-700 pl-1"
              >
                Log in
              </button>
            </>
          )}
        </div>

        {/* Divider */}
        <div className="flex items-center mt-5">
          <div className="flex-grow h-px bg-gray-400" />
          <span className="px-2 sm:px-3 text-sm text-black">
            Or continue with
          </span>
          <div className="flex-grow h-px bg-gray-400" />
        </div>

        {/* Google Login */}
        <div className="flex justify-center mt-4">
          <a
            href="https://your-google-auth-url.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Google}
              alt="Google"
              className="w-[50px] sm:w-[58px] h-[50px] sm:h-[58px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
