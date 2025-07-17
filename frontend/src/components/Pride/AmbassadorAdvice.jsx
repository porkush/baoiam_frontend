// import ambassadorImage from "../../assets/Pride/AmbassadorAdvice/ambassador.webp";
// import bonnay_video from "../../assets/Pride/AmbassadorAdvice/bonnay.mov";
import HeadingImage from "../Lines/HeadingImages";
import Group from "../../assets/Home/Lines/Group.webp";
import ContactForm from "../../Pages/ContactForm";
import { MdPlayCircle, MdVolumeUp, MdVolumeOff } from "react-icons/md";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const AmbassadorAdvice = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true); // Start with sound OFF
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true; // Start muted
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.log("Autoplay failed, trying muted", err);
          video.muted = true;
          video.play();
        });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleVideoClick = () => {
    toggleMute();
  };
  return (
    <section className="relative font-['Poppins'] overflow-hidden">
      {/* Top White Area */}
      <div className="bg-white text-center px-4 py-12 mb-28">
        {/* <h2 className="text-3xl md:text-[48px] font-semibold text-orange-500 mb-4">
          Get our Ambassador’s Advice
        </h2> */}
        <div className="flex items-center justify-center w-full mb-4">
          <h2 className="text-3xl md:text-[48px]  font-semibold mb-2">
            Breaking <span className="text-orange-500">Barriers,</span>{" "}
            <span className="text-black">Building</span>
            <span className="text-orange-500"> Futures</span>
          </h2>
          <img src={Group} alt="" className="w-9 mb-4" />
        </div>
        <p className=" mx-auto text-black md:text-[24px] mb-6">
          Bonya’s journey from resilience to leadership now fuels a movement of
          inclusion.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/DataScience">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md md:text-xl  font-medium transition">
            Enroll Now
          </button>
          </Link>
          <div className="text-left">
            {/* The Button */}
            <button
              className="bg-black text-white border rounded-lg py-2 px-4 text-xl hover:bg-[#7B7B7B]"
              onClick={() => setShowModal(true)}
            >
              Talk to our Counsellor
            </button>

            {/* The Modal */}

            {showModal && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50"
                onClick={() => setShowModal(false)}
              >
                <div
                  className="relative max-w-xl w-full  "
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Cross Button */}
                  <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-20 right-6 text-2xl text-gray-600 hover:text-black"
                  >
                    &times;
                  </button>

                  <ContactForm onClose={() => setShowModal(false)} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Orange Background */}
      <div className="bg-[#FF6501B2] h-[105px] md:h-[305px] relative">
        <div className="absolute inset-x-0 -top-[75px] md:-top-[100px] flex justify-center">
          <div className="relative w-[90%] max-w-4xl rounded-2xl overflow-hidden shadow-lg">
            

            {/* Large Unmute Button (Center) - Shows when muted */}
            {isMuted && (
              <button
                onClick={() => {
                  toggleMute();
                }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 hover:bg-black/40 transition z-10"
              >
                <MdVolumeOff className="text-white text-[80px] opacity-90 hover:opacity-100 transition-opacity duration-300" />
                <span className="text-white text-lg mt-2 font-medium">
                  Click to unmute
                </span>
              </button>
            )}

            {/* Small Controls (Bottom left) */}
            <div className="absolute bottom-4 left-4 flex gap-3 bg-black/60 px-4 py-2 rounded-md z-20">
              <button
                onClick={togglePlay}
                className="text-white text-sm font-medium hover:text-orange-400 flex items-center gap-1"
              >
                {isPlaying ? (
                  <>
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <span>Play</span>
                  </>
                )}
              </button>
              <button
                onClick={toggleMute}
                className="text-white text-sm font-medium hover:text-orange-400 flex items-center gap-1"
              >
                {isMuted ? (
                  <>
                    <MdVolumeOff size={18} />
                    <span>Unmute</span>
                  </>
                ) : (
                  <>
                    <MdVolumeUp size={18} />
                    <span>Mute</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmbassadorAdvice;
