import React, { useState } from "react";

const modules = [
  {
    title: "Module 1: Introduction to Data Science",
    items: ["Overview of Data Science", "Importance of Data Science"],
  },
  {
    title: "Module 2: Data Collection and Preprocessing",
    items: ["Overview of Data Science", "Importance of Data Science"],
  },
  {
    title: "Module 3: Exploratory Data Analysis (EDA)",
    items: ["Overview of Data Science", "Importance of Data Science"],
  },
  {
    title: "Module 4: Machine Learning Basics",
    items: ["Overview of Data Science", "Importance of Data Science"],
  },
  {
    title: "Module 5: Advanced Machine Learning",
    items: ["Overview of Data Science", "Importance of Data Science"],
  },
  {
    title: "Module 6: Data Visualization",
    items: ["Overview of Data Science", "Importance of Data Science"],
  },

  {
    title: "Module 7: Predictive Analytics",
    items: ["Overview of Data Science", "Importance of Data Science"],
  },
  {
    title: "Module 8: Real-World Applications of Data Science",
    items: ["Overview of Data Science", "Importance of Data Science"],
  },
  {
    title: "Module 9: Ethical and Legal Considerations in Data Science",
    items: ["Overview of Data Science", "Importance of Data Science"],
  },
  {
    title: "Module 10: Capstone Project",
    items: ["Overview of Data Science", "Importance of Data Science"],
  },
];

const LearningJourney = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleModule = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="flex flex-col items-center justify-start bg-white pt-10 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-[40px] font-medium">
          Your <span className="text-orange-500">Learning Journey</span>
        </h1>
        <p className="text-[16px] mt-2 text-sm md:text-base max-w-[600px] font-medium">
          An immersive roadmap designed to help you master Data Science step by
          step.
        </p>
      </div>

      {/* Main Module Container */}
      <div className="w-[723px] max-h-[790px] rounded-[10px] flex flex-col gap-[2px] bg-white shadow overflow-auto border border-gray-200">
        {modules.map((module, index) => (
          <div key={index}>
            {/* Module Title */}
            <div
              className="w-full h-[64px] px-[15px] py-[20px] flex items-center justify-between bg-[#E6E6E633] cursor-pointer rounded"
              onClick={() => toggleModule(index)}
            >
              <span className="text-[16px] font-medium font-poppins text-black">
                {module.title}
              </span>
              <svg
                className={`w-4 h-4 text-gray-700 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Sub-items */}
            {openIndex === index && module.items.length > 0 && (
              <div className="w-full h-[64px] px-[15px] py-[20px] flex items-center bg-white rounded font-poppins text-[16px] text-orange-500 font-medium">
                <div className="flex flex-col gap-2">
                  {module.items.map((item, idx) => (
                    <span key={idx}>• {item}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <hr className="w-full  border-t-[2px] border-gray-100 mt-12 mb-6" />
    </div>
  );
};

export default LearningJourney;
