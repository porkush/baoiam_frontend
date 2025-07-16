import React, { useState } from 'react';

const ContactForm = ({onClose}) => {
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [category1, setCategory1] = useState('');
  const [category2, setCategory2] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      fullName,
      email,
      mobileNumber,
      category1,
      category2,
      agreedToTerms,
    });
    alert('Form submitted! Check console for data.');
  };

  return (
    <div className="flex  items-center justify-center h-[744px] ">
      <div className="bg-white max-w-xl p-4 md:p-6 rounded-[12px] shadow-lg w-full mx-2 my-4">
        
       
        <h2 className="text-[24px] md:text-[24px] font-bold text-center mb-1 leading-snug text-orange-500">
          Ready to enhance your skills?
            
        </h2>
        <p className="text-[14px] md:text-[15px] text-center mb-4 text-[#545454]">
          Share your details and hear from us soon
        </p>



        <form onSubmit={handleSubmit} className="space-y-2 md:space-y-3">
          <div>
            <label htmlFor="fullName" className="block text-[14px] font-medium text-[#333333] mb-1">
              Full name
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full px-3 py-[6px] border border-[#E0E0E0] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-orange-500 text-[13px] placeholder:text-[#9A9A9A]"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-[14px] font-medium text-[#333333] mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-[6px] border border-[#E0E0E0] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-orange-500 text-[13px] placeholder:text-[#9A9A9A]"
              placeholder="Enter your E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="mobileNumber" className="block text-[14px] font-medium text-[#333333] mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNumber"
              className="w-full px-3 py-[6px] border border-[#E0E0E0] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-orange-500 text-[13px] placeholder:text-[#9A9A9A]"
              placeholder="Enter your Mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="selectCategory1" className="block text-[14px] font-medium text-[#333333] mb-1">
              Select Category
            </label>
            <div className="relative">
              <select
                id="selectCategory1"
                className="block w-full bg-white border border-[#E0E0E0] text-[#333333] py-[6px] pl-4 pr-10 rounded-[8px] appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-[14px]"
                value={category1}
                onChange={(e) => setCategory1(e.target.value)}
                required
              >
                <option value="" disabled hidden>Select Category</option>
                <option value="category2_option1">Success Fusion Program</option>
                <option value="category2_option2">Udaan 90</option>
                <option value="category2_option3">Tech Bootcamp</option>
                <option value="category2_option3">Pride Fusion</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-600">
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="selectCategory2" className="block text-[14px] font-medium text-[#333333] mb-1">
              Please select a sub-category
            </label>
            <div className="relative">
              <select
                id="selectCategory2"
                className="block w-full bg-white border border-[#E0E0E0] text-[#333333] py-[6px] pl-4 pr-10 rounded-[8px] appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-[14px]"
                value={category2}
                onChange={(e) => setCategory2(e.target.value)}
                required
              >
                <option value="" disabled hidden>Select a sub-category</option>
                <option value="category2_option1">Success Fusion Program</option>
                <option value="category2_option2">Udaan 90</option>
                <option value="category2_option3">Tech Bootcamp</option>
                <option value="category2_option3">Pride Fusion</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-600">
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex items-start mt-2">
            <input
              type="checkbox"
              id="termsAgreement"
              className="h-4 w-4 text-orange-500 rounded border-gray-300 focus:ring-orange-500 mt-0.5 cursor-pointer"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
            />
            <label htmlFor="termsAgreement" className="ml-2 text-[13px] md:text-[13px] font-medium text-gray-400 leading-snug cursor-pointer">
              I confirm to receiving updates and notifications from Online Baoiam and its affiliates via email, SMS, WhatsApp, and voice call, overriding any DNC/NDNC preference.
            </label>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#FF6501] text-white text-[14px] md:text-[17px] font-semibold py-2 px-20 md:px-24 rounded-[8px] hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
