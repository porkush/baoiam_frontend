// import logo from "../../assets/logoLight.png";
// import MobileMockup from "../../assets/Footer/Contact/Mobile_Mockups.png";

// const Contact = () => {
//   return (
//     <div className="w-full bg-gray-100 text-black  font-['Poppins']">
//       <div className="flex flex-row flex-wrap pl-30  items-start">
//         {/* Text Column */}
//         <div className="flex-1  ">
//           <img
//             src={logo}
//             alt="Baoiam Logo"
//             className="mt-4 mb-6 object-contain w-[188px] h-[125px]"
//           />
//           <p className="text-sm text-justify font-normal font-poppins pb-6  min-w-[200px] mb-7">
//             BAOIAM is India’s leading affordable EdTech platform committed to empowering students through skill-based learning and guaranteed career support. We offer industry-relevant certification programs in Data Analytics, Digital Marketing with AI, Software Testing, Communication Skills, and more — combining expert-led live training, internships, and placement support. Our mission is to bridge the gap between education and employability, making career success accessible to all.
//           </p>

//           <p className="text-base mb-7 font-poppins">
//             <b>Confused where to start?</b>
//             <br />
//             Enter your number and let our counselor clear the path.
//           </p>

//           <div className="flex items-center w-full max-w-sm ">
//             <div className="flex items-center border-l border-t border-b  border-gray-400 rounded-l-lg  overflow-hidden flex-grow">
//               <select className="bg-white text-black px-3 py-2 focus:outline-none border-r border-gray-400">
//                 <option>+91</option>
//                 <option>+1</option>
//                 <option>+44</option>
//               </select>
//               <input
//                 type="text"
//                 placeholder="Enter mobile number"
//                 className="bg-white px-3 py-2 flex-grow focus:outline-none text-black text-sm"
//               />
//             </div>
//             <button className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600 transition-colors duration-300 whitespace-nowrap border border-orange-500">
//               Get Callback
//             </button>
//           </div>

//           <div className="mt-6 ">
//             <b className="mt-12 text-base font-poppins">Contact Us –</b>
//             <p className="text-base pt-3 tracking-wide ">
//               999-999-9999{" "}
//               <span className="text-xs">(9AM to 7PM on all days)</span>
//             </p>
//             <p className="text-base pt-1 ">support@baoiam.com</p>
//           </div>
//         </div>

//         {/* Image Column  */}
//         <div className="flex-1 min-w-[300px] ">
//           <img
//             src={MobileMockup}
//             alt="Mobile App Mockup"
//             className="
//           w-[416px]
//           h-[650px]
//           opacity-100
//           object-contain
//           mx-auto
//         "
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import logo from "../../assets/Home/Navbar/logoLight.webp";
import MobileMockup from "../../assets/Footer/Contact/Mobile_Mockups.png";

const Contact = () => {
  return (
    <div className="w-full bg-gray-100 text-black font-['Poppins']">
      <div className="flex flex-col md:flex-row md:flex-wrap md:pl-[30px] items-start ">
        {/* Text Column */}
        <div className="flex-1 w-full md:w-auto px-4 md:px-0 md:ml-12 md:mt-16">
          <img
            src={logo}
            alt="Baoiam Logo"
            className="mt-1 mb-6 object-contain w-[188px] h-[125px]"
          />

          <p className="text-sm text-justify font-normal font-poppins pb-6 min-w-[200px] mb-4">
            BAOIAM is India’s leading affordable EdTech platform committed to
            empowering students through skill-based learning and guaranteed
            career support. We offer industry-relevant certification programs in
            Data Analytics, Digital Marketing with AI, Software Testing,
            Communication Skills, and more — combining expert-led live training,
            internships, and placement support. Our mission is to bridge the gap
            between education and employability, making career success
            accessible to all.
          </p>

          <p className="text-base mb-7 font-poppins">
            <b>Confused where to start?</b>
            <br />
            Enter your number and let our counselor clear the path.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center w-full max-w-sm">
            <div className="flex items-center border-l border-t border-b border-gray-400 rounded-l-lg overflow-hidden flex-grow">
              <select className="bg-white text-black px-3 py-1 focus:outline-none border-r border-gray-400">
                <option>+91</option>
                <option>+1</option>
                <option>+44</option>
              </select>
              <input
                type="text"
                placeholder="Enter mobile number"
                className="bg-white px-3 py-1 flex-grow focus:outline-none text-black text-sm"
              />
            </div>
            <button className="bg-orange-500 text-white px-4 py-1 rounded-none sm:rounded-r-lg hover:bg-orange-600 transition-colors duration-300 whitespace-nowrap border border-orange-500 w-full sm:w-auto">
              Get Callback
            </button>
          </div>

          <div className="mt-5">
            <b className=" text-base font-poppins">Contact Us –</b>
            <p className="text-base pt-2 tracking-wide">
              08062181972{" "}
              <span className="text-xs">(9AM to 7PM on all days)</span>
            </p>
            <p className="text-base ">support@baoiam.com</p>
          </div>
        </div>

        
        {/* Image Column */}
        <div className="flex-1 w-full md:w-auto md:px-0 mt-8 md:mt-0">
          <img
            src={MobileMockup}
            alt="Mobile App Mockup"
            className="
      w-[220px]   // Smaller width on mobile
      sm:w-[280px] // Slightly larger on small screens
      md:w-full md:max-w-[400px] md:h-[650px]
      h-auto object-contain mx-auto
    "
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
