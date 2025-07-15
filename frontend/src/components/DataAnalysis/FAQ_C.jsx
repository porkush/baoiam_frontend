import { useState } from "react";
import { FaPlus, FaTimes, FaArrowRight } from "react-icons/fa";

const FAQ_C = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the Data Analytics Course (DAC)?",
      answer: `DAC is a career-oriented course designed to equip learners with practical skills in Data Analytics. It includes live instructor-led sessions, real-world projects, and placement assistance to prepare students for roles in data-driven industries. You’ll learn tools like Excel, SQL, Power BI, Python, and Tableau to analyze and visualize data effectively.`,
    },
    {
      question: "Who is eligible to apply for SFP?",
      answer: `Any student or recent graduate from Class 12th, diploma, or degree programs can apply. No prior experience is required — just the willingness to learn and grow.`,
    },
    {
      question: "How long is the program duration?",
      answer: `The program duration varies by plan:\n\nFull Program: 12 months (Live Classes + Internship + Placement Prep)\n\nShort Program (Udaan 90): 3 months (Quick Upskilling + Practical Exposure)`,
    },
    {
      question: "Is this a certified program?",
      answer: `Yes. All learners receive an industry-recognized certificate from BAOIAM after successful completion of the course and assessments.`,
    },
    {
      question: "Do you offer placement assistance?",
      answer: `Yes! We offer complete placement support including mock interviews, resume building, portfolio setup, and job referrals. Some students may also be eligible for Pay After Placement plans.`,
    },
    {
      question: "What are the fees for the program?",
      answer: `The pricing ranges from ₹2,999 to ₹4,999 depending on the course structure. Special offers, scholarships, and token-based payment models like "Pay After Placement" are also available for selected batches.`,
    },
    // ,
    // {
    //   question: "What is included in the program?",
    //   answer: `✅ Live Masterclasses\n✅ Real-World Projects & Internships\n✅ 1-on-1 Mentorship\n✅ Resume & Portfolio Building\n✅ Career Guidance\n✅ Access to our Premium Resource Hub\n✅ Placement Preparation & Support`,
    // }
    // ,
    // {
    //   question: "Is this program online or offline?",
    //   answer: `The program is 100% online and accessible from anywhere in India. All sessions are conducted via Zoom or Google Meet.`,
    // },
    // {
    //   question: "How do I apply?",
    //   answer: `Simply fill out the registration form available on our website or connect with our student counselors via WhatsApp or call.`,
    // },
    // {
    //   question: "Will I get internship opportunities?",
    //   answer: `Yes. We ensure all eligible students get virtual or hybrid internship opportunities with real companies, projects, and mentorship.`,
    // },
  ];
  const leftFaqs = faqData.slice(0, 3);
  const rightFaqs = faqData.slice(3);

  const renderFAQItem = (item, index) => (
    <div
      key={index}
      className={`rounded-lg text-[18px] font-med overflow-hidden shadow-sm transition-all duration-300 p-2 mb-4 ${
        openIndex === index ? "bg-white shadow" : "bg-white"
      }`}
      style={{ minHeight: openIndex === index ? "auto" : "80px" }}
    >
      <button
        onClick={() => toggleIndex(index)}
        className="w-full flex justify-between items-center px-5 py-4 text-left text-gray-900 font-medium focus:outline-none transition"
      >
        <span>{item.question}</span>
        {openIndex === index ? (
          <span className="w-[44px] h-[44px] p-[10px] rounded-[6px] bg-[#FFF4E5] flex items-center justify-center">
            <FaTimes className="text-gray-600 text-xl" />
          </span>
        ) : (
          <span className="w-[44px] h-[44px] p-[10px] rounded-[6px] bg-[#FFF4E5] flex items-center justify-center">
            <FaPlus className="text-gray-600 text-xl" />
          </span>
        )}
      </button>
      {openIndex === index && (
        <div className="px-5 pb-4 text-gray-700 text-sm border-t border-gray-300">
          <p className="mb-3 mt-4 text-[16px]">{item.answer}</p>
          <div className="bg-gray-100 mt-3 border-gray-200 p-4 rounded-lg flex items-center justify-between">
            <p className="text-[16px] font-medium">
              Enrollment Process for the Program
            </p>
            <button className="flex items-center justify-center rounded-full bg-white p-4">
              <FaArrowRight className="text-[16px]" />
            </button>
          </div>
          {item.button && (
            <a
              href={item.button.link}
              className="inline-flex items-center text-blue-600 hover:underline text-sm font-medium mt-3"
            >
              {item.button.text}
              <span className="ml-2">→</span>
            </a>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full lg:mb-16 p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-center mb-8 ">
          Still you have any questions? Contact our Team via
          <br />
          <a href="mailto:support@baoiam.com">support@baoiam.com</a>
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column */}
          <div className="md:w-1/2">
            {leftFaqs.map((item, index) => renderFAQItem(item, index))}
          </div>

          {/* Right Column */}
          <div className="md:w-1/2">
            {rightFaqs.map((item, index) => renderFAQItem(item, index + 3))}
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <button className="mt-4 px-5 py-2 border rounded-md bg-gray-200 border-gray-300 hover:bg-gray-100 transition">
            See All FAQ’s
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ_C;
