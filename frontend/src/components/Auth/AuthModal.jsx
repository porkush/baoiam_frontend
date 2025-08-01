import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { API_ENDPOINTS } from "../../config/api";

const AuthModal = ({ isOpen, onClose, onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const emailInputRef = useRef(null);
  const [warning, setWarning] = useState("");

  useEffect(() => {
    if (isOpen && emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setShowOtp(false);
  };

  const handleSendOtp = async () => {
    if (!email.trim()) {
      setWarning("Email or Mobile Number is required.");
      return;
    } else {
      setWarning(""); // Clear warning
    }
    setLoading(true);
    const endpoint = isLogin
      ? API_ENDPOINTS.LOGIN
      : API_ENDPOINTS.SIGNUP;
    console.log("Sending OTP to:", email); // 👈 ye line add karo

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        setIsOtpSent(true);
      } else {
        alert(data.error || "Failed to send OTP.");
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    const endpoint = isLogin
      ? API_ENDPOINTS.VERIFY_LOGIN
      : API_ENDPOINTS.VERIFY_SIGNUP;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);

        if (onAuthSuccess) onAuthSuccess(); // update here

        onClose && onClose(); // Close modal or redirect
      } else {
        alert(data.error || "Invalid OTP");
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async (credentialResponse) => {
    const credential = credentialResponse.credential;

    try {
      const res = await fetch(API_ENDPOINTS.GOOGLE_LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id_token: credential }),
      });

      const data = await res.json();

      if (res.ok) {
        const isNewUser = data.created;

        //  Store token/user
        localStorage.setItem("token", data.token);

        // Conditional message
        if (isNewUser) {
          alert(" Welcome! Your account has been created using Google.");
        } else {
          alert(" Welcome back! You have successfully logged in.");
        }

        if (onAuthSuccess) onAuthSuccess();
        onClose && onClose();
      } else {
        console.error("Google login failed:", data);
      }
    } catch (err) {
      console.error("Google login error:", err);
    }
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
            ref={emailInputRef}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email ID or Mobile number"
            className="w-full px-4 py-2.5 text-[14px] text-[#808080] border border-gray-400 rounded-full focus:outline-none focus:border-orange-400"
          />
          {warning && (
            <p className="text-red-500 text-sm mt-1 text-center">{warning}</p>
          )}
        </div>

        {/* OTP */}
        <div className="mb-3">
          <div className="flex items-center justify-between mb-2">
            <label className="text-[14px] sm:text-[15px] font-normal">
              OTP Verification
            </label>
            <button
              onClick={handleSendOtp}
              disabled={loading}
              className="text-xs px-3 py-1 sm:px-3.5 sm:py-1.5 bg-orange-100 text-orange-500 rounded-full hover:bg-orange-200 transition-all"
            >
              {loading ? "Sending..." : isOtpSent ? "Resend OTP" : "Send OTP"}
            </button>
          </div>

          <div className="relative">
            <input
              type={showOtp ? "text" : "password"}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              disabled={!isOtpSent}
              className="w-full pr-10 pl-4 py-2.5 text-[14px] text-[#808080] border border-gray-400 rounded-full focus:outline-none focus:border-orange-400"
            />

            <button
              type="button"
              onClick={() => setShowOtp(!showOtp)}
              disabled={!isOtpSent}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2  ${
                isOtpSent
                  ? "text-gray-500 hover:text-orange-500 cursor-pointer"
                  : "text-gray-300 "
              }`}
            >
              {showOtp ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-3 text-[13px] sm:text-[14px]">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 sm:w-5 sm:h-5 accent-orange-500 mr-2"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
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
        <button
          onClick={handleVerifyOtp}
          disabled={loading || !otp || !agreeTerms}
          className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2.5 sm:py-3 rounded-full font-semibold transition duration-300 shadow-md mt-3"
        >
          {loading ? "Verifying..." : isLogin ? "Log In" : "Sign Up"}
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
          <GoogleOAuthProvider clientId="539413491318-nja0bbltjl99e8pvrk47mjfkj47q3dpq.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => {
                console.log("Google Login Failed");
              }}
            />
          </GoogleOAuthProvider>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
