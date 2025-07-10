// import React from 'react';
// import {motion} from 'framer-motion';
// import '../../index.css';
// import IILM from "../../assets/Home/Partner/1.png";
// import amity from "../../assets/Home/Partner/2.png";
// import shardha from '../../assets/Home/Partner/3.png';
// import alliance from '../../assets/Home/Partner/4.png';
// import gla from '../../assets/Home/Partner/4.png';
// import rajdhani from '../../assets/Home/Partner/5.png';
// import rkdf from '../../assets/Home/Partner/6.png';
// import miatreyi from '../../assets/Home/Partner/7.png';
// import hanshraj from '../../assets/Home/Partner/8.png';
// import delhi from '../../assets/Home/Partner/9.png';

// const Partner = () => {
//     const universities = [IILM, rajdhani,amity,alliance,shardha,rkdf,
//         miatreyi, hanshraj, delhi,gla,
//     ];

//     return (

//        <section className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 font-['Poppins']">
//       {/* Header */}
//       <div className="max-w-7xl mx-auto text-center mb-14">
//         <h1 className="text-[48px] font-semibold text-gray-900 mb-4">
//           Built with <span className="text-orange-500">Leading</span> Universities
//         </h1>
//         <p className="text-[24px] text-black md:w-[764px] mx-auto">
//          We partner with top institutions to deliver world-class learning and exclusive access to cutting-edge resources empowering students for tomorrow.
//         </p>
//       </div>

//         <div className="w-full overflow-hidden  bg-gray-100">
//             <div className="container mx-auto pl-10">
//               <div className='flex'>
//                 <motion.div
//                 initial={{ x: 0 }}
//                 animate={{ x: "-100%" }}
//                 transition={{
//                     duration: 15,
//                     ease: "linear",
//                     repeat: Infinity,
//                 }}
//                 className="flex  flex-shrink-0 animate-marquee no-scrollbar">
//                     {universities.map((image, index) => {
//                        return <img className="h-[60] w-[180] pl-10 pr-10"
//                              src={image}
//                             alt={`University logo ${index}`}
//                             key={index}
//                         />;
//                    })}
//                 </motion.div>

//                  <motion.div
//                 initial={{ x: 0 }}
//                 animate={{ x: "-100%" }}
//                 transition={{
//                     duration: 15,
//                     ease: "linear",
//                     repeat: Infinity,
//                 }}
//                 className="flex  flex-shrink-0 animate-marquee no-scrollbar">
//                     {universities.map((image, index) => {
//                        return <img className="h-[60] w-[180] pl-10 pr-10"
//                              src={image}
//                             alt={`University logo ${index}`}
//                             key={index}
//                         />;
//                    })}
//                 </motion.div>

//             </div>
//         </div>
//         </div>
//         </section>
//     );
// };

// export default Partner;

import React from "react";
import { motion } from "framer-motion";
import "../../index.css";
import IILM from "../../assets/Home/Partner/1.png";
import amity from "../../assets/Home/Partner/2.png";
import shardha from "../../assets/Home/Partner/3.png";
import alliance from "../../assets/Home/Partner/4.png";
import gla from "../../assets/Home/Partner/4.png";
import rajdhani from "../../assets/Home/Partner/5.png";
import rkdf from "../../assets/Home/Partner/6.png";
import miatreyi from "../../assets/Home/Partner/7.png";
import hanshraj from "../../assets/Home/Partner/8.png";
import delhi from "../../assets/Home/Partner/9.png";

const Partner = () => {
  const universities = [
    IILM,
    rajdhani,
    amity,
    alliance,
    shardha,
    rkdf,
    miatreyi,
    hanshraj,
    delhi,
    gla,
  ];

  return (
    <section className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 font-['Poppins']">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h1 className="text-[48px] font-semibold text-gray-900 mb-4">
          Built with <span className="text-orange-500">Leading</span>{" "}
          Universities
        </h1>
        <p className="text-[24px] text-black md:w-[764px] mx-auto">
          We partner with top institutions to deliver world-class learning and
          exclusive access to cutting-edge resources empowering students for
          tomorrow.
        </p>
      </div>

      <div className="w-full overflow-hidden  bg-gray-100">
        <div className="container mx-auto pl-10">
          <div className="flex">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 15,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex  flex-shrink-0 animate-marquee no-scrollbar"
            >
              {universities.map((image, index) => {
                return (
                  <img
                    className="h-[100px] w-[220px]  object-contain "
                    src={image}
                    alt={`University logo ${index}`}
                    key={index}
                  />
                  // <img
                  //   className="h-[60px] w-[120px] sm:h-[70px] sm:w-[140px] object-contain px-5"
                  //   src={image}
                  //   alt={`University logo ${index}`}
                  //   key={index}
                  // />
                );
              })}
            </motion.div>

            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 15,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex  flex-shrink-0 animate-marquee no-scrollbar"
            >
              {universities.map((image, index) => {
                return (
                  <img
                    className="h-[100px] w-[220px]   object-contain "
                    src={image}
                    alt={`University logo ${index}`}
                    key={index}
                  />
                  // <img
                  //   className="h-[60px] w-[120px] sm:h-[70px] sm:w-[140px] object-contain px-5"
                  //   src={image}
                  //   alt={`University logo ${index}`}
                  //   key={index}
                  // />
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
