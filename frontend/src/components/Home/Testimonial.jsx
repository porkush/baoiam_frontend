import React, { useState, useEffect } from 'react';
import {FaArrowLeft ,FaArrowRight } from "react-icons/fa";

const Testimonial = () => {
  const testimonials = [
  {
    id: 1,
    content: "BAOIAM's training and expert mentorship helped me secure a 9.02 LPA package as a Risk Consultant. The practical approach made all the difference.",
    author: "Apurva Kulpe",
    role: "Risk Consultant - 9.02 LPA",
    image: "https://thumbs.dreamstime.com/b/college-student-3915511.jpg"
  },
  {
    id: 2,
    content: "Thanks to BAOIAM's structured curriculum and interview prep, I landed a 5 LPA role as a Software Developer straight out of training.",
    author: "Vishnu Vardhan",
    role: "Software Developer - 5 LPA",
    image: "https://thumbs.dreamstime.com/b/college-student-3915511.jpg"
  },
  {
    id: 3,
    content: "The hands-on projects and personalized guidance at BAOIAM helped me get placed as a Quality Engineer at 18 LPA. Truly a game-changer for my career.",
    author: "Akhil Padi",
    role: "Quality Engineer - 18 LPA",
    image: "https://thumbs.dreamstime.com/b/college-student-3915511.jpg"
  },
  {
    id: 4,
    content: "BAOIAM's industry-focused learning and placement support helped me land a 22 LPA software engineer role at Byju's. Highly recommend it!",
    author: "Vaibhav Verma",
    role: "Software Engineer at Byju's - 22 LPA",
    image: "https://thumbs.dreamstime.com/b/college-student-3915511.jpg"
  },
  {
    id: 5,
    content: "With BAOIAM's expert mentors and real-world projects, I cracked Microsoft at 52 LPA. Their guidance was the key to my success.",
    author: "Amit Pandey",
    role: "Microsoft - 52 LPA",
    image: "https://thumbs.dreamstime.com/b/college-student-3915511.jpg"
  }
];


  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, testimonials.length]); // Added testimonials.length to dependencies

  const getCardClasses = (index) => {
  let classes = "absolute transition-all duration-500 ease-in-out p-8 rounded-xl shadow-xl h-full flex flex-col justify-between";
  const offset = index - currentIndex;

  if (offset === 0) {
    // Center card
    classes += " bg-pink-100 scale-100 opacity-100 z-20 w-2/3 left-1/2 -translate-x-1/2";
  } else if (offset === -1 || (offset === testimonials.length - 1 && currentIndex === 0)) {
    // Left side card
    classes += " bg-green-100 scale-95 opacity-50 z-10 w-1/2 -left-1/4";
  } else if (offset === 1 || (offset === -(testimonials.length - 1) && currentIndex === testimonials.length - 1)) {
    // Right side card
    classes += " bg-green-100 scale-95 opacity-50 z-10 w-1/2 -right-1/4";
  } else {
    // Hidden cards
    classes += " hidden";
  }
  return classes;
};

  // // Helper function to determine class names based on index
  // const getCardClasses = (index) => {
  //   let classes = "absolute transition-all duration-500 ease-in-out p-8 rounded-xl shadow-xl h-full flex flex-col justify-between";
  //   const offset = index - currentIndex;

  //   if (offset === 0) {
  //     // Center card
  //     classes += " bg-pink-100 scale-100 opacity-100 z-20 w-2/3 left-1/2 -translate-x-1/2";
  //   } else if (offset === -1 || (offset === testimonials.length - 1 && currentIndex === 0)) {
  //     // Left side card (previous)
  //     classes += " bg-green-100 scale-95 opacity-50 z-10 w-2/3 left-0 transform -translate-x-1/4";
  //   } else if (offset === 1 || (offset === -(testimonials.length - 1) && currentIndex === testimonials.length - 1)) {
  //     // Right side card (next)
  //     classes += " bg-green-100 scale-95 opacity-50 z-10 w-2/3 right-0 transform translate-x-1/4";
  //   } else {
  //     // Hidden cards
  //     classes += " hidden";
  //   }
  //   return classes;
  // };

  return (
    <div className="relative max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
<div className="text-center mb-12">
  <h2 className="text-[48px] font-semibold mb-2">Testimonials</h2>
  <p className="text-[24px]">
    Experts who guide, Mentors who matter. We Teach what you own
  </p>
</div>

      {/* Carousel viewport with relative positioning for absolute children */}
      <div className="relative h-[250px] max-w-3xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id} // Using testimonial.id for key, assuming unique IDs
            className={getCardClasses(index)}
          >
            <div className="flex items-center border-t border-gray-200 pt-4">
                {/* Placeholder for author image */}
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
              <div>
                <p className="font-bold text-gray-800 text-xl">{testimonial.author}</p>
                <p className="text-gray-600 font-medium">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-700 italic text-lg mb-6">
              "{testimonial.content}"
            </p>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
       <div className="flex justify-center items-center mt-8 gap-4 ">
          <button
            onClick={prevSlide}
            className="flex items-center justify-center rounded-full w-[48px] h-[48px]"
            style={{ backgroundColor: "#FFF4E5" }}
            aria-label="Previous testimonial"
          >
            <FaArrowLeft size={24} color="#FF6501" />
          </button>
          <button
            onClick={nextSlide}
            className="flex items-center justify-center rounded-full w-[48px] h-[48px]"
            style={{ backgroundColor: "#FFF4E5" }}
            aria-label="Next testimonial"
          >
            <FaArrowRight size={24} color="#FF6501" />
          </button>
        </div>
    </div>
  );
};

export default Testimonial;















// import React, { useState, useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const Testimonial = () => {
//   const testimonials = [
//     {
//       id: 1,
//       content:
//         "I'd my first job within 2 live projects and the confidence to crack interviews.",
//       author: "Ritika Sharma",
//       role: "BAOJAM Alumni",
//       bgColor: "#FFFFFF", // white
//     },
//     {
//       id: 2,
//       content:
//         "BAOJAM helped me land my first job within 2 months of joining...",
//       author: "Ritika Sharn",
//       role: "BAOJAM Alumni",
//       bgColor: "#F5C8C8",
//     },
//     {
//       id: 3,
//       content: "BAOJAM helped me launch a month of joining...",
//       author: "Another Alumni",
//       role: "BAOJAM Alumni",
//       bgColor: "#DCFFC5",
//     },
//     {
//       id: 4,
//       content: "I learned real-world projects...",
//       author: "Alumni Name",
//       role: "BAOJAM Alumni",
//       bgColor: "#B1FFE4",
//     },
//     {
//       id: 5,
//       content: "Mentorship and live projects helped me a lot...",
//       author: "Alumni Two",
//       role: "BAOJAM Alumni",
//       bgColor: "#DAB2FF",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === testimonials.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? testimonials.length - 1 : prev - 1
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const CARD_WIDTH = 800; // Fixed card width
//   const GAP = 24; // Gap between cards

//   return (
//     <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//       <div className="text-center mb-12">
//         <h2 className="text-[48px] font-semibold mb-2">Testimonials</h2>
//         <p className="text-[24px]">
//           Experts who guide, Mentors who matter. We Teach what you own
//         </p>
//       </div>

//       <div
//         className="relative overflow-hidden mx-auto bg-[#F8F8F8] w-[1213px] h-[476px] p-8"
//         style={{ width: `${CARD_WIDTH * 1.5 + GAP}px`}}
//       >
//         <div className="flex items-center justify-center gap-6 ">
//           {[...Array(3)].map((_, offset) => {
//             const index =
//               (currentIndex + offset - 1 + testimonials.length) %
//               testimonials.length;
//             const isCenter = offset === 1;

//             return (
//               <div
//                 key={testimonials[index].id + index}
//                 className={`w-[600px] h-[334px] transition-all duration-500 mt-4 flex items-center justify-center gap-6 ${
//                   isCenter
//                     ? "opacity-100 scale-100"
//                     : "opacity-50 scale-95 w-[500px] h-[270px]"
//                 }`}
//                 style={{ flexShrink: 0 }}
//               >
//                 <div
//                   className={`
//                 p-10 rounded-xl shadow-xl flex flex-col transition-all duration-500
//                 ${isCenter ? "scale-100" : "scale-95"}
//                 `}            
//                   style={{
//                     backgroundColor: testimonials[index].bgColor,
//                     width: isCenter ? "600px" : "500px",
//                     height: isCenter ? "334px" : "270px",
//                   }}
//                 >
//                   <div className="flex items-center mb-4">
//                     <img
//                       src="https://i.pinimg.com/474x/b2/da/f9/b2daf9019c4b08fa3a90c7d28a08a059.jpg" // Replace with testimonial.image if you have images
//                       alt={testimonials[index].author}
//                       className="w-18 h-18 rounded-full object-cover mr-4"
//                     />
//                     <div>
//                       <p className="font-semibold text-gray-800 text-[28px] ">
//                         {testimonials[index].author}
//                       </p>
//                       <p className=" font-medium text-[18px]">
//                         {testimonials[index].role}
//                       </p>
//                     </div>
//                   </div>

//                   <p className="text-gray-700 italic text-[24px] font-medium mt-4">
//                     "{testimonials[index].content}"
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
        // <div className="flex justify-center items-center mt-8 gap-4 bg-[#F8F8F8]">
        //   <button
        //     onClick={prevSlide}
        //     className="flex items-center justify-center rounded-full w-[48px] h-[48px]"
        //     style={{ backgroundColor: "#FFF4E5" }}
        //     aria-label="Previous testimonial"
        //   >
        //     <FaArrowLeft size={24} color="#FF6501" />
        //   </button>
        //   <button
        //     onClick={nextSlide}
        //     className="flex items-center justify-center rounded-full w-[48px] h-[48px]"
        //     style={{ backgroundColor: "#FFF4E5" }}
        //     aria-label="Next testimonial"
        //   >
        //     <FaArrowRight size={24} color="#FF6501" />
        //   </button>
        // </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;
