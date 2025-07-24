// import React, { useState } from "react";
// import { Bookmark, Clock, Star } from "lucide-react";
// import Img1 from "../../assets/CoursesLayout/CoursesPage/Courses.png";

// const courses = [
//   {
//     title: "Begin Development",
//     subtitle: "Complete HTML",
//     lessons: 8,
//     time: "2h 30min",
//     rating: 4.6,
//     image: Img1,
//   },
//   {
//     title: "Development Master",
//     subtitle: "JavaScript",
//     lessons: 12,
//     time: "8h 10min",
//     rating: 4.5,
//     image: Img1,
//   },
//   {
//     title: "Python Zero to Hero",
//     subtitle: "Master Python",
//     lessons: 15,
//     time: "6h 30min",
//     rating: 4.9,
//     image: Img1,
//   },
//   {
//     title: "Launch into Cloud",
//     subtitle: "AWS Guide",
//     lessons: 5,
//     time: "12h 45min",
//     rating: 5.0,
//     image: Img1,
//   },
// ];

// const CourseCard = ({ title, subtitle, lessons, time, rating, image }) => {
//   const [isBookmarked, setIsBookmarked] = useState(false);

//   const toggleBookmark = () => {
//     setIsBookmarked(!isBookmarked);
//   };

//   const formattedRating = Number(rating).toFixed(1);

//   return (
//     <div className="w-[260px] h-[326px] bg-white rounded-xl shadow p-3 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
//       <div className="relative">
//         <img
//           src={image}
//           alt="Course"
//           className="w-full h-[160px] object-cover rounded-lg"
//         />
//         <div
//           className="absolute top-2 right-2 bg-white rounded-full p-1 shadow cursor-pointer hover:scale-110 transition-transform"
//           onClick={toggleBookmark}
//         >
//           <Bookmark
//             className={
//               isBookmarked
//                 ? "text-orange-500 fill-orange-500"
//                 : "text-orange-500"
//             }
//             size={18}
//           />
//         </div>
//       </div>

//       <div className="mt-2 text-left">
//         <h3 className="text-lg font-semibold text-[#2C2C2C] font-poppins mb-1">
//           {title}
//         </h3>
//         <p className="text-lg font-semibold text-[#2C2C2C] font-poppins">
//           {subtitle}
//           <span className="text-[#AEAEAE] text-sm font-normal">
//             {" "}
//             ({lessons} lessons)
//           </span>
//         </p>
//       </div>

//       <div className="flex justify-between items-center mt-3">
//         <div className="flex items-center gap-2 bg-blue-100 text-[#3D8FEF] px-2 py-[3px] rounded-md text-sm">
//           <Clock size={18} />
//           <span>{time}</span>
//         </div>
//         <div className="flex items-center gap-1 text-[#FFC71E] text-sm">
//           <Star fill="currentColor" size={20} />
//           <span className="text-[#AEAEAE]">{formattedRating}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// const FlexibleCourses = () => {
//   return (
//       <div className="bg-white py-10 text-center ">
//         <h1 className="text-[40px] font-semibold mb-2 font-['Poppins']">
//         Courses That {" "}
//         <span className="text-orange-500">Transform Careers</span>
//       </h1>
//       <h3 className="text-base md:text-[18px] font-medium mb-8 md:mb-10 max-w-2xl mx-auto">
//         Handpicked programs designed to take you from beginner to job-ready, on your schedule.
//       </h3>
//       <div className="flex flex-wrap justify-center gap-8 px-4">
//         {courses.map((course, index) => (
//           <CourseCard key={index} {...course} />
//         ))}
//       </div>
//       <hr className="w-full border-t-[2px] border-gray-100 mt-10 md:mt-14" />
//     </div>
//   );
// };

// export default FlexibleCourses;



import React, { useState, useEffect } from "react";
import { Bookmark, Clock, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Img1 from "../../assets/CoursesLayout/CoursesPage/Courses.png";

const courses = [
  {
    title: "Begin Development",
    subtitle: "Complete HTML",
    lessons: 8,
    time: "2h 30min",
    rating: 4.6,
    image: Img1,
  },
  {
    title: "Development Master",
    subtitle: "JavaScript",
    lessons: 12,
    time: "8h 10min",
    rating: 4.5,
    image: Img1,
  },
  {
    title: "Python Zero to Hero",
    subtitle: "Master Python",
    lessons: 15,
    time: "6h 30min",
    rating: 4.9,
    image: Img1,
  },
  {
    title: "Launch into Cloud",
    subtitle: "AWS Guide",
    lessons: 5,
    time: "12h 45min",
    rating: 5.0,
    image: Img1,
  },
];

const CourseCard = ({ title, subtitle, lessons, time, rating, image }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const formattedRating = Number(rating).toFixed(1);

  return (
    <div className="w-[260px] h-[326px] bg-white rounded-xl shadow p-3 flex flex-col justify-between hover:shadow-lg transition-all duration-300 mx-auto">
      <div className="relative">
        <img
          src={image}
          alt="Course"
          className="w-full h-[160px] object-cover rounded-lg"
        />
        <div
          className="absolute top-2 right-2 bg-white rounded-full p-1 shadow cursor-pointer hover:scale-110 transition-transform"
          onClick={toggleBookmark}
        >
          <Bookmark
            className={
              isBookmarked
                ? "text-orange-500 fill-orange-500"
                : "text-orange-500"
            }
            size={18}
          />
        </div>
      </div>

      <div className="mt-2 text-left">
        <h3 className="text-lg font-semibold text-[#2C2C2C] font-poppins mb-1">
          {title}
        </h3>
        <p className="text-lg font-semibold text-[#2C2C2C] font-poppins">
          {subtitle}
          <span className="text-[#AEAEAE] text-sm font-normal">
            {" "}
            ({lessons} lessons)
          </span>
        </p>
      </div>

      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center gap-2 bg-blue-100 text-[#3D8FEF] px-2 py-[3px] rounded-md text-sm">
          <Clock size={18} />
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-1 text-[#FFC71E] text-sm">
          <Star fill="currentColor" size={20} />
          <span className="text-[#AEAEAE]">{formattedRating}</span>
        </div>
      </div>
    </div>
  );
};

const FlexibleCourses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === courses.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? courses.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-white py-10 text-center overflow-hidden">
      <h1 className="text-[26px] sm:text-[40px] font-semibold mb-2 font-['Poppins']">
        Courses That {" "}
        <span className="text-orange-500">Transform Careers</span>
      </h1>
      <h3 className="text-base md:text-[18px] font-medium mb-8 md:mb-10 max-w-2xl mx-auto">
        Handpicked programs designed to take you from beginner to job-ready, on your schedule.
      </h3>
      
      {/* Desktop view - all courses */}
      <div className="hidden md:flex flex-wrap justify-center gap-8 px-4">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
      
      {/* Mobile view - carousel */}
      <div className="md:hidden relative">
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {courses.map((course, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <CourseCard {...course} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation arrows - positioned outside the card */}
        <div className="flex justify-between items-center w-full max-w-[300px] mx-auto mt-4 px-2">
          <button 
            onClick={prevSlide}
            className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="text-orange-500" size={24} />
          </button>
          
          {/* Indicators */}
          <div className="flex gap-2">
            {courses.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-orange-500' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextSlide}
            className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="text-orange-500" size={24} />
          </button>
        </div>
      </div>
      
      <hr className="w-full border-t-[2px] border-gray-100 mt-10 md:mt-14" />
    </div>
  );
};

export default FlexibleCourses;