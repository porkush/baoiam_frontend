import React from 'react';
import logo from '../../assets/logoLight.png';
import MobileMockup from '../../assets/Footer/Contact/Mobile_Mockups.png';

const Contact = () => {
  return (
    <div className="w-full bg-gray-100 text-black py-5">
        <div className="flex flex-row flex-wrap pl-30  items-start">
            {/* Text Column */}
          <div className="flex-1  ">
            <img 
              src={logo} 
              alt="Baoiam Logo" 
              className="mt-4  object-contain w-[188px] h-[125px]" 
            />
            <p className="text-sm text-justify font-normal font-poppins pb-6  min-w-[200px]">
              BAOIAM is India’s leading and affordable EdTech platform dedicated to empowering students through skill-based learning and guaranteed career support. The platform offers industry-relevant certification programs in fields such as Data Analytics, Digital Marketing with AI, Software Testing, Communication Skills, and more. By combining expert-led live training, internships, and placement support, BAOIAM ensures a holistic learning experience. Its mission is to bridge the gap between education and employability, making career success accessible to everyone.
            </p>

            <p className="text-base mb-5 font-poppins">
              <b>Confused where to start?</b><br />
              Enter your number and let our counselor clear the path.
            </p>
            
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-full max-w-md ">
             <select className="bg-white text-black px-3 py-1 focus:outline-none border-r border-gray-300">
                 <option>+91</option>
                 <option>+1</option>
                 <option>+44</option>
             </select>
              <input
                type="text"
                placeholder="Enter mobile number"
               className="bg-white px-3 py-1 flex-grow focus:outline-none text-black"
              />
             <button className="bg-orange-500 text-white px-4 py-1 hover:bg-orange-600 transition-colors duration-300 whitespace-nowrap">
               Get Callback
                  </button>
         </div>
            
            <div className="mt-6 "> 
            <b className="mt-10 text-base font-poppins" >Contact Us –</b>
            <p className="text-base pt-3 tracking-wide ">999-999-9999 <span className='text-xs'>(9AM to 7PM on all days)</span></p>
            <p className="text-base pt-1 ">support@baoiam.com</p>
         </div>

          </div>


          {/* Image Column  */}
          <div className="flex-1 min-w-[300px] ">
            <img 
              src={MobileMockup} 
              alt="Mobile App Mockup" 
             className="
          w-[416px]       
          h-[650px]
          opacity-100         
          object-contain    
          mx-auto                  
        "
      />
          </div>
        
      </div>
    </div>
  );
};

export default Contact;