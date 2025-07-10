// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaLinkedin } from 'react-icons/fa';
// import '../../index.css';
// // Import images properly (recommended approach)
// import Akshat from "../../assets/Home/TeamSection/1.png";
// import Akash from '../../assets/Home/TeamSection/2.png';
// import Gautami from '../../assets/Home/TeamSection/3.png';
// import Dev from '../../assets/Home/TeamSection/4.png';
// import Siddhart from '../../assets/Home/TeamSection/5.jpg';
// import Sudhanshu from '../../assets/Home/TeamSection/6.png';
// import Virat from '../../assets/Home/TeamSection/7.png';
// import Virender from '../../assets/Home/TeamSection/8.png';
// import Toshika from '../../assets/Home/TeamSection/9.png';
// import Bonnya from '../../assets/Home/TeamSection/10.png';
// import Madhav from '../../assets/Home/TeamSection/11.png';
// import Ayush from '../../assets/Home/TeamSection/12.png';

// const MembersPage = () => {
//     const gradients = [
//         'bg-gradient-to-b from-black/20 via-white/0 to-white/80',
//         'bg-gradient-to-b from-pink-700/30 via-white/0 to-white/60',
//         'bg-gradient-to-b from-red-100/50 via-white/0 to-white/60',
//         'bg-gradient-to-b from-rose-600/30 via-white/0 to-white/60',
//         'bg-gradient-to-b from-neutral-400/30 via-white/0 to-white/60',
//         'bg-gradient-to-b from-fuchsia-700/30 via-white/0 to-white/60',
//         'bg-gradient-to-b from-zinc-400/30 via-white/0 to-white/60',
//         'bg-gradient-to-b from-slate-400/30 via-white/0 to-white/60',
//         'bg-gradient-to-b from-indigo-400/30 via-white/0 to-white/60',
//         'bg-gradient-to-b from-indigo-800/30 via-white/0 to-white/60',
//         'bg-gradient-to-b from-sky-400/30 via-white/0 to-white/60',
//         'bg-gradient-to-b from-fuchsia-400/30 via-white/0 to-white/60'
//     ];

//     const solidColors = [
//         'bg-black', 'bg-pink-700', 'bg-red-100',
//         'bg-rose-600', 'bg-neutral-400', 'bg-fuchsia-700',
//         'bg-zinc-400', 'bg-slate-400', 'bg-indigo-400',
//         'bg-indigo-800', 'bg-sky-400', 'bg-fuchsia-400',
//     ];

//     const members = [
//         {
//             name: "Siddhart Tomar",
//             position: "Founder & CEO",
//             linkedin: "https://www.linkedin.com/in/Siddhart_tomar-profile",
//             image: Siddhart,
//         },
//         {
//             name: "Virender Singh",
//             position: "Ops Head",
//             linkedin: "https://www.linkedin.com/in/Virender-profile",
//             image: Virender,
//         },
//         {
//             name: "Virat Locham",
//             position: "Sales Head",
//             linkedin: "https://www.linkedin.com/in/virat-profile",
//             image: Virat,
//         },
//         {
//             name: "Toshika Bagga",
//             position: "HR Manager",
//             linkedin: "https://www.linkedin.com/in/Toshika-profile",
//             image: Toshika,
//         },
//         {
//             name: "Sudhanshu Mohan",
//             position: "Chief Strategy Officer",
//             linkedin: "https://www.linkedin.com/in/Sudhanshu-profile",
//             image: Sudhanshu,
//         },
//         {
//             name: "Bonnya Kar",
//             position: "Community Partner",
//             linkedin: "https://www.linkedin.com/in/Bonnya-profile",
//             image: Bonnya,
//         },
//         {
//             name: "Madhav Sharma",
//             position: "Sr. Legal Advisor",
//             linkedin: "https://www.linkedin.com/in/Madhav-profile",
//             image: Madhav,
//         },
//         {
//             name: "Ayush Gaur",
//             position: "Software Developer",
//             linkedin: "https://www.linkedin.com/in/ayush-profile",
//             image: Ayush,
//         },
//         {
//             name: "Akash Raut",
//             position: "HR Executive",
//             linkedin: "https://www.linkedin.com/in/akash-profile",
//             image: Akash,
//         },
//         {
//             name: "Akshat Tiwari",
//             position: "Associate Project Manager",
//             linkedin: "https://www.linkedin.com/in/akshat-profile",
//             image: Akshat,
//         },
//         {
//             name: "Dev Kumar",
//             position: "PM Intern",
//             linkedin: "https://www.linkedin.com/in/dev-profile",
//             image: Dev,
//         },
//         {
//             name: "Gautami Potdar",
//             position: "UI/UX Designer",
//             linkedin: "https://www.linkedin.com/in/gautami-profile",
//             image: Gautami,
//         },
//     ];

//     // Render a member card
//   const renderMemberCard = (member, index) => (
//   <div
//     key={`${member.name}-${index}`}
//     className={`flex-shrink-0 w-64 mx-4 flex flex-col items-center p-6 ${gradients[index % gradients.length]} `}
//   >
//     <div className="text-center w-full mb-6">
//       <h1 className="font-bold text-xl text-gray-900">{member.name}</h1>
//       <p className="text-gray-700 mt-1">{member.position}</p>
//       {member.linkedin && (
//         <a
//           href={member.linkedin}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="mt-2 inline-block text-blue-600 hover:text-blue-800"
//         >
//           <FaLinkedin size={24} />
//         </a>
//       )}
//     </div>

//     <div className={`w-58 h-74 overflow-hidden rounded-full ${solidColors[index % solidColors.length]}`}>
//       <img
//         className="w-full h-full object-cover "
//         src={member.image}
//         alt={member.name}
//       />
//     </div>
//   </div>
// );

//     return (
//         <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
//             {/* Header */}
            // <div className="max-w-7xl mx-auto text-center mb-16">
            //     <h1 className="text-[48px] font-bold text-gray-900 mb-3">
            //         Our <span className="text-orange-500">Team</span>
            //     </h1>
            //     <p className="text-[24px] text-black  mx-auto">
            //         Experts who guide, Mentors who matter. We teach what you own.
            //     </p>
            // </div>

//             {/* Marquee - Increased height to accommodate h-74 images */}
//             <div className="relative w-full overflow-hidden h-[450px]">
//                 <div className="absolute flex">
//                     {/* First row */}
//                     <motion.div
//                         initial={{ x: 0 }}
//                         animate={{ x: "-100%" }}
//                         transition={{
//                             duration: 35,
//                             ease: "linear",
//                             repeat: Infinity,
//                         }}
//                         className="flex flex-shrink-0"
//                     >
//                         {members.map((member, index) => renderMemberCard(member, index))}
//                     </motion.div>

//                     {/* Second identical row for seamless looping */}
//                     <motion.div
//                         initial={{ x: 0 }}
//                         animate={{ x: "-100%" }}
//                         transition={{
//                             duration: 35,
//                             ease: "linear",
//                             repeat: Infinity,
//                         }}
//                         className="flex flex-shrink-0"
//                     >
//                         {members.map((member, index) => renderMemberCard(member, index))}
//                     </motion.div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MembersPage;

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import "../../index.css";
// Import images properly (recommended approach)
import Akshat from "../../assets/Home/TeamSection/1.png";
import Akash from "../../assets/Home/TeamSection/2.png";
import Gautami from "../../assets/Home/TeamSection/3.png";
import Dev from "../../assets/Home/TeamSection/4.png";
import Siddhart from "../../assets/Home/TeamSection/5.jpg";
import Sudhanshu from "../../assets/Home/TeamSection/6.png";
import Virat from "../../assets/Home/TeamSection/7.png";
import Virender from "../../assets/Home/TeamSection/8.png";
import Toshika from "../../assets/Home/TeamSection/9.png";
import Bonnya from "../../assets/Home/TeamSection/10.png";
import Madhav from "../../assets/Home/TeamSection/11.png";
import Ayush from "../../assets/Home/TeamSection/12.png";
import Nakshatra from "../../assets/Home/TeamSection/13.png";


const TeamSection = () => {
  const gradients = [
    "bg-gradient-to-b from-black/40 via-white/0 to-white/80",
    "bg-gradient-to-b from-pink-500/90 via-white/0 to-white/60",
    "bg-gradient-to-b from-[#B09378] via-white/0 to-white/60",
    "bg-gradient-to-b from-rose-500/50 via-white/0 to-white/60",
    "bg-gradient-to-b from-neutral-500/100 via-white/0 to-white/60",
    "bg-gradient-to-b from-fuchsia-500/100 via-white/0 to-white/60",
    "bg-gradient-to-b from-zinc-500/100 via-white/0 to-white/60",
    "bg-gradient-to-b from-slate-500/100 via-white/0 to-white/60",
    "bg-gradient-to-b from-indigo-300/100 via-white/0 to-white/60",
    "bg-gradient-to-b from-indigo-500/100 via-white/0 to-white/60",
    "bg-gradient-to-b from-sky-500/100 via-white/0 to-white/60",
    "bg-gradient-to-b from-fuchsia-500/100 via-white/0 to-white/60",
    "bg-gradient-to-b from-neutral-500/100 via-white/0 to-white/60"
  ];

  const solidColors = [
    "bg-black",
    "bg-pink-500",
    "bg-[#EAD2C8]",
    "bg-rose-500",
    "bg-neutral-400",
    "bg-fuchsia-500",
    "bg-zinc-400",
    "bg-slate-400",
    "bg-indigo-200",
    "bg-indigo-400",
    "bg-sky-400",
    "bg-fuchsia-500",
    "bg-neutral-400",
  ];

  const members = [
    {
      name: "Siddhart Tomar",
      position: "Founder & CEO",
      linkedin: "https://www.linkedin.com/in/Siddhart_tomar-profile",
      image: Siddhart,
    },
    {
      name: "Virender Singh",
      position: "Ops Head",
      linkedin: "https://www.linkedin.com/in/Virender-profile",
      image: Virender,
    },
    {
      name: "Virat Locham",
      position: "Sales Head",
      linkedin: "https://www.linkedin.com/in/virat-profile",
      image: Virat,
    },
    {
      name: "Toshika Bagga",
      position: "HR Manager",
      linkedin: "https://www.linkedin.com/in/Toshika-profile",
      image: Toshika,
    },
    {
      name: "Sudhanshu Mohan",
      position: "Chief Strategy Officer",
      linkedin: "https://www.linkedin.com/in/Sudhanshu-profile",
      image: Sudhanshu,
    },
    {
      name: "Bonnya Kar",
      position: "Community Partner",
      linkedin: "https://www.linkedin.com/in/Bonnya-profile",
      image: Bonnya,
    },
    {
      name: "Madhav Sharma",
      position: "Sr. Legal Advisor",
      linkedin: "https://www.linkedin.com/in/Madhav-profile",
      image: Madhav,
    },
    {
      name: "Ayush Gaur",
      position: "Software Developer",
      linkedin: "https://www.linkedin.com/in/ayush-profile",
      image: Ayush,
    },
    {
      name: "Akash Raut",
      position: "HR Executive",
      linkedin: "https://www.linkedin.com/in/akash-profile",
      image: Akash,
    },
    {
      name: "Akshat Tiwari",
      position: "PM Intern",
      linkedin: "https://www.linkedin.com/in/akshat-profile",
      image: Akshat,
    },
    {
      name: "Dev Kumar",
      position: "PM Intern",
      linkedin: "https://www.linkedin.com/in/dev-profile",
      image: Dev,
    },
    {
      name: "Gautami Potdar",
      position: "UI/UX Designer",
      linkedin: "https://www.linkedin.com/in/gautami-profile",
      image: Gautami,
    },
    {
      name: "Nakshatra Joshi",
      position: "Backend Developer",
      linkedin: "https://www.linkedin.com/in/nakshatra-joshi-97a773212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: Nakshatra,
    }
  ];

  // Render a member card
  const renderMemberCard = (member, index) => (
    <div
      key={`${member.name}-${index}`}
      className={`flex-shrink-0 w-64 mx-4 flex flex-col items-center p-6 ${
        gradients[index % gradients.length]
      } rounded-lg`}
    >
      {/* Text Content - Moved to top */}
      <div className="text-center w-full mb-6">
        <h1 className="font-bold text-xl text-gray-900">{member.name}</h1>
        <p className="text-gray-700 mt-1">{member.position}</p>
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-blue-600 hover:text-blue-800"
          >
            <FaLinkedin size={24} />
          </a>
        )}
      </div>

      {/* Image Container - Moved to bottom */}
      <div
        className={`w-[230px] h-[280px] overflow-hidden rounded-full ${
          solidColors[index % solidColors.length]
        } flex items-start justify-center pt-4`}
      >
        <img
          className="w-[230px] h-[300px] mt-3 overflow-hidden object-cover rounded-full"
          src={member.image}
          alt={member.name}
        />
      </div>
    </div>
  );

  return (
    <div className="bg-white py-10 pb-14 px-4 sm:px-6 lg:px-8 font-['Poppins']">
      {/* Header */}
       <div className="max-w-7xl mx-auto text-center mb-16">
                <h1 className="text-[48px] font-bold text-gray-900 mb-3">
                    Our <span className="text-orange-500">Team</span>
                </h1>
                <p className="text-[24px] text-black  mx-auto">
                    Experts who guide, Mentors who matter. We teach what you own.
                </p>
            </div>

      {/* Marquee - Increased height to accommodate h-74 images */}
      <div className="relative w-full overflow-hidden h-[450px]">
        <div className="absolute flex">
          {/* First row */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-shrink-0"
          >
            {members.map((member, index) => renderMemberCard(member, index))}
          </motion.div>

          {/* Second identical row for seamless looping */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-shrink-0"
          >
            {members.map((member, index) => renderMemberCard(member, index))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
