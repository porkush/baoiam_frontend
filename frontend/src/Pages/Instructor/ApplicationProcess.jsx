import React from "react";

const steps = [
  {
    title: "Fill the Application Form",
    desc: "Submit your details and teaching experience through our quick application form.",
    button: "Apply Now",
    align: "right",
  },
  {
    title: "Profile Shortlisting",
    desc: "Our team will review your profile based on subject expertise, clarity, and alignment with our values.",
    align: "left",
  },
  {
    title: "Demo Session (Optional)",
    desc: "You may be invited to conduct a short demo class to showcase your teaching approach.",
    align: "right",
  },
  {
    title: "Onboarding & Agreement",
    desc: "Once selected, you’ll receive our onboarding kit and finalize your instructor agreement.",
    align: "left",
  },
  {
    title: "Start Teaching!",
    desc: "Begin creating content or delivering live classes to our community of learners.",
    align: "right",
  },
];

const ApplicationProcess = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-10 font-['Poppins']">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Application Process
      </h2>

      <div className="relative flex flex-col items-center">
        {/* Dashed vertical line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full border-l-2 border-dashed border-orange-400 z-0"></div>

        {steps.map((step, index) => (
          <div
            key={index}
            className={`w-full max-w-3xl flex flex-col md:flex-row items-center mb-16 relative z-10 ${
              step.align === "right" ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Step Circle ON the line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-orange-500 text-white text-[24px] font-bold w-12 h-12 flex items-center justify-center rounded-full shadow-md">
                {index + 1}
              </div>
            </div>

            {/* Card */}
            <div
              className={`w-full md:w-[40%] mt-10 md:mt-0 px-4 ${
                step.align === "left" ? "md:pr-2 md:text-right" : "md:pl-2"
              }`}
            >
              <div className="bg-white shadow-md rounded-lg p-5 text-left">
                <h4 className="font-semibold text-lg mb-1">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.desc}</p>
                {step.button && (
                  <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-md">
                    {step.button}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationProcess;
