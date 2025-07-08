import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import '../../index.css';

// Import images properly (recommended approach)
import Akshat from "../../assets/Home/TeamSection/1.png";
import Akash from '../../assets/Home/TeamSection/2.png';
import Gautami from '../../assets/Home/TeamSection/3.png';
import Dev from '../../assets/Home/TeamSection/4.png';
import Siddhart from '../../assets/Home/TeamSection/5.jpg';
import Sudhanshu from '../../assets/Home/TeamSection/6.png';
import Virat from '../../assets/Home/TeamSection/7.png';
import Virender from '../../assets/Home/TeamSection/8.png';
import Toshika from '../../assets/Home/TeamSection/9.png';
import Bonnya from '../../assets/Home/TeamSection/10.png';
import Madhav from '../../assets/Home/TeamSection/11.png';
import Ayush from '../../assets/Home/TeamSection/12.png';

const TeamSection= () => {


 const gradients = [
        'bg-gradient-to-b from-black/20 via-white/0 to-white/80',
        'bg-gradient-to-b from-pink-700/30 via-white/0 to-white/60',
        'bg-gradient-to-b from-red-100/50 via-white/0 to-white/60',
       'bg-gradient-to-b from-rose-600/30 via-white/0 to-white/60',
        'bg-gradient-to-b from-neutral-400/30 via-white/0 to-white/60',
        'bg-gradient-to-b from-fuchsia-700/30 via-white/0 to-white/60',
        'bg-gradient-to-b from-zinc-400/30 via-white/0 to-white/60',
        'bg-gradient-to-b from-slate-400/30 via-white/0 to-white/60',
        'bg-gradient-to-b from-indigo-400/30 via-white/0 to-white/60',
         'bg-gradient-to-b from-indigo-800/30 via-white/0 to-white/60',
        'bg-gradient-to-b from-sky-400/30 via-white/0 to-white/60',
        'bg-gradient-to-b from-fuchsia-400/30 via-white/0 to-white/60'
    ];


    const solidColors = [
  'bg-black', 'bg-pink-700','bg-red-100',
  'bg-rose-600','bg-neutral-400','bg-fuchsia-700',
  'bg-zinc-400','bg-slate-400','bg-indigo-400',
  'bg-indigo-800',   'bg-sky-400',  'bg-fuchsia-400',
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
            position: "Associate Project Manager",
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
       
    ];

   

    return (
        <div className=" bg-white py-10 px-4 sm:px-6 lg:px-8 ">
            {/* Header */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    Our <span className="text-orange-500">Team</span>
                </h1>
                <p className="text-lg text-black max-w-3xl mx-auto">
                    Experts who guide, Mentors who matter. We teach what you own.
                </p>
            </div>

            {/* Marquee */}
            <div className="w-full overflow-hidden bg-white">
                <div className="container mx-auto">
                    <div className="flex">
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{
                            duration: 35, 
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    className="flex animate-marquee no-scrollbar">
                  {members.map((member, index) => (
                  
                  <div  key={index}
                  className={`flex-shrink-0 w-64 mx-4 flex flex-col items-center justify-between p-6 ${gradients[index % gradients.length]} rounded-lg`}>
                  <div className="flex flex-col justify-center items-center">
                 <h1 className="mt-4 font-bold text-xl text-center ">{member.name}</h1>
                 <p className="text-black">{member.position}</p>
                 {member.linkedin && (
                   <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-600 hover:text-blue-800">
                     <FaLinkedin size={25} />
                   </a>
                 )}

            
                    <div className={`mt-4 pt-4 overflow-hidden  rounded-full ${solidColors[index % solidColors.length]} `}>
                     <img
                       className="w-58 h-64 rounded-full object-cover overflow-hidden"
                       src={member.image}
                       alt={member.name}
                     />
                    </div>
                       </div>
                 </div>

                 ))}
                    </motion.div>


              

                 <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{
                            duration: 35, // Slower for better readability
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    className="flex animate-marquee no-scrollbar">
                  {members.map((member, index) => (
                  
                  <div  key={index}
                  className={`flex-shrink-0 w-64 mx-4 flex flex-col items-center justify-between p-6 ${gradients[index % gradients.length]} rounded-lg`}>
                  <div className="flex flex-col justify-center items-center">
                 <h1 className="mt-4 font-bold text-2xl">{member.name}</h1>
                 <p className="text-gray-700">{member.position}</p>
                 {member.linkedin && (
                   <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-600 hover:text-blue-800">
                     <FaLinkedin size={24} />
                   </a>
                 )}

              <div className="w-full flex justify-end mt-4 pt-4"></div> 

               <div className={`w-58 h-65 pt-8 overflow-hidden rounded-full ${solidColors[index % solidColors.length]} `}>
                    <img
                        className=" pt-3 rounded-full overflow-hidden object-cover "
                        src={member.image}
                        alt={member.name} />
                      </div>

                       </div>
                 </div>
                 ))}
                    </motion.div>



                 </div>
                </div>
            </div>
        </div>
    );
};

export default TeamSection;