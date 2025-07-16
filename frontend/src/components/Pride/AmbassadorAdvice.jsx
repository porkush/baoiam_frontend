import React, { useState } from "react";
// import ambassadorImage from "../../assets/Pride/AmbassadorSection/ambassador.png"; // replace with your actual path
import ambassadorImage from "../../assets/Pride/AmbassadorAdvice/ambassador.webp";
import HeadingImage from "../Lines/HeadingImages";
import Group from "../../assets/Home/Lines/Group.webp";
import ContactForm from "../../Pages/ContactForm";


const AmbassadorAdvice = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="relative font-['Poppins'] overflow-hidden">
      {/* Top White Area */}
      <div className="bg-white text-center px-4 py-12 mb-28">
        {/* <h2 className="text-3xl md:text-[48px] font-semibold text-orange-500 mb-4">
          Get our Ambassador’s Advice
        </h2> */}
        <div className="flex items-center justify-center w-full mb-4">
          <h2 className="text-3xl md:text-[48px]  font-semibold mb-2">
            Breaking{" "} <span className="text-orange-500">Barriers,</span>{" "} <span className="text-black">Building</span>
            <span className="text-orange-500">{" "} Futures</span>
          </h2>
          <img src={Group} alt="" className="w-9 mb-4" />
        </div>
        <p className=" mx-auto text-black md:text-[24px] mb-6">
          Bonya’s journey from resilience to leadership now fuels a movement of inclusion.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md md:text-xl  font-medium transition">
            Enroll Now
          </button>
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
        {/* Image Overlapping Top and Bottom */}
        <div className="absolute inset-x-0 -top-[75px] md:-top-[100px] flex justify-center">
          <div className="relative w-[90%] max-w-4xl rounded-2xl overflow-hidden shadow-lg">
            <img
              src={ambassadorImage}
              alt="Ambassador Advice"
              className="w-full h-auto object-cover mb-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmbassadorAdvice;
