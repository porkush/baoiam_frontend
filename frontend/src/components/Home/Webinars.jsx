import React, { useState } from "react";
// import ambassadorImage from "../../assets/Pride/AmbassadorSection/ambassador.png"; // replace with your actual path

import LandingPages from "../../assets/Home/Webinar/LandingPages.mp4";
import ContactForm from "../../Pages/ContactForm";

const Webinars = () => {
  
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="relative font-['Poppins'] overflow-hidden mb-16">
      {/* Top White Area */}
      <div className="bg-white \ px-4 py-12 mb-28">
        <h2 className="text-3xl md:text-[48px] font-semibold mb-4 text-center">
          <span className="text-black">Webinars That </span>
          <span className="text-orange-500">
            Inspire <span className="text-black">and </span> Impact
          </span>
        </h2>

        <p className="max-w-3xl mx-auto text-black md:text-[24px] mb-6">
          Join the webinar that makes learning unforgettable.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <div>
            {/* The Button */}
            <button
              className="bg-[#FF6501] hover:bg-[#FF6501CC] text-white px-5 py-2 rounded-md md:text-xl  font-medium transition"
              onClick={() => setShowModal(true)}
            >
              Register for Webinar
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
          <div>
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
        {/* Image Overlapping Top and Bottom */}
        <div className="absolute inset-x-0 -top-[75px] md:-top-[100px] flex justify-center">
          <div className="relative w-[90%] max-w-4xl rounded-2xl overflow-hidden shadow-lg">
            <video
              src={LandingPages}
              className="w-full h-auto object-cover mb-12"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Webinars;
