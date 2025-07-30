import React from "react";
import { motion } from 'framer-motion';
import '../../index.css'; 
import Accenture from "../../assets/Home/Prestige/accenture.webp";
import Cognizant from "../../assets/Home/Prestige/Cognizant.webp";
import Greyt from "../../assets/Home/Prestige/Greiyt.webp";
import TCS from "../../assets/Home/Prestige/Tcs.webp";
import EY from "../../assets/Home/Prestige/Ey.webp";
import Mentorsity from "../../assets/Home/Prestige/Mentosity.webp";
import languify from "../../assets/Home/Prestige/Languify.webp";
import learnyst from "../../assets/Home/Prestige/Learnyst.webp";
import Head from "../../assets/Home/OurProgram/head.webp";


const PlacementSection = () => {
      const network = [
        Accenture, Cognizant, TCS, Greyt, EY, Mentorsity, languify, learnyst
      ];
  return (
    <div className="bg-white py-10 px-4 flex justify-center font-['Poppins']">
      <div className="bg-[#FF7A24] text-white rounded-xl w-full max-w-6xl shadow-lg text-center relative py-10">
        {/* Header Row with Head Images */}
        <div className="flex justify-between items-center md:px-16  ">
          <img src={Head} alt="left head" className="h-8 w-8 md:h-20 md:w-20" />

          <div className="flex-1 text-center px-2">
            <h2 className="text-xl md:text-2xl font-bold mb-1">
              Placements at Baoiam
            </h2>
            <p className="text-sm md:text-base leading-snug max-w-xl mx-auto">
              kdsfj akfhj aksfj oadfsjflaksj afjkaf ksdafjdfaksfj akfhj aksfj
              oadfsjflaksj afjkaf ksdafjdafjoiaji
            </p>
          </div>

          <img src={Head} alt="right head" className="h-8 w-8 md:h-20 md:w-20" />
        </div>

        {/* Company Logos */}
         <div className="w-full overflow-hidden bg-gray-100 mt-6">
        <div className="container mx-auto">
          <div className="flex">
            {/* Motion 1 */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 15,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex flex-shrink-0 items-center"
            >
              {network.map((image, index) => (
                <div
                  key={index}
                  className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4"
                >
                  <img
                    className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                    src={image}
                    alt={`Company logo ${index}`}
                  />
                </div>
              ))}
            </motion.div>

            {/* Motion 2 (duplicate) */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 15,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex flex-shrink-0 items-center"
            >
              {network.map((image, index) => (
                <div
                  key={index}
                  className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4"
                >
                  <img
                    className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                    src={image}
                    alt={`Company logo ${index}-copy`}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PlacementSection;
