import React from "react";
import { FaStar, FaUserGraduate, FaClock } from "react-icons/fa";




const courses = [
  {
    id: 1,
    title: "Data Science",
    rating: 4.8,
    description: "Build models and extract insights.",
    students: "150.3K",
    level: "Intermediate",
    duration: "45 hours",
    image: "/src/assets/data-science.jpg",
  },
  {
    id: 2,
    title: "Data Analysis",
    rating: 4.7,
    description: "Clean, visualize, and analyze data.",
    students: "98.5K",
    level: "Beginner",
    duration: "35 hours",
    image: "/src/assets/data-analysis.jpg",
  }, 
  {
    id: 3,
    title: "Digital Marketing",
    rating: 4.9,
    description: "Grow with SEO and social ads.",
    students: "265.7K",
    level: "Beginner",
    duration: "40 hours",
    image: "/src/assets/digital-marketing.jpg",
  },
  {
    id: 4,
    title: "Tech Bootcamp",
    rating: 5.0,
    description: "Full-stack development training.",
    students: "73.4K",
    level: "Advanced",
    duration: "80 hours",
    image: "/src/assets/tech-bootcamp.jpg",
  }
];




const FeaturedCourses = () => {
  return (

    <section 
  className="bg-white rounded-[20px] font-['Poppins'] mx-auto max-w-[calc(100%-40px)] lg:max-w-[1240px]"
  style={{
    padding: "30px",
    border: "0.5px solid #ECEBF6",
    boxShadow: "0px 0px 8px 0px #00000026",
  }}
>
  {/* Header */}
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
    Featured <span className="text-orange-500">Courses</span>
  </h2>

  {/* Grid Container */}
  <div className="flex flex-col items-center">
    {/* Courses Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1180px] mx-auto">
      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-white rounded-[10px] flex flex-col"
          style={{
            minWidth: "251px",
            height: "295px",
            padding: "15px",
            border: "0.5px solid #ECEBF6",
            boxShadow: "0px 4px 8px 0px #00000026",
          }}
        >
          {/* Course Header */}
          <div className="flex items-center gap-[5px]">
            <h3 className="text-lg font-medium">{course.title}</h3>
            <div className="flex items-center text-black text-sm">
              <FaStar className="mr-1 text-amber-500" /> {course.rating}.0
            </div>
          </div>

          {/* Course Image */}
          <img
            src="https://www.plannthat.com/wp-content/uploads/2023/06/Pinterest-Techniques-to-Maximize-Reach-and-Boost-Your-Pins.png"
            alt={course.title}
            className="h-[120px] w-full object-cover mb-[2px] rounded-sm"
          />

          {/* Course Description */}
          <p className="text-black text-sm mb-1">{course.description}</p>

          {/* Students Enrolled */}
          <div className="flex gap-[2px] items-center text-gray-800 text-xs mb-2 mt-auto">
            <FaUserGraduate className="mr-1 text-blue-900" />
            {course.students}
            <span className="text-xs text-gray-500"> students enrolled</span>
          </div>

          {/* Level and Duration */}
          <div className="flex justify-between items-center text-gray-500 text-xs mb-1">
            <div className="mr-2">Beginner</div>
            <div className="flex items-center">
              <FaClock className="mx-2 text-green-600" />
              {course.duration}
            </div>
          </div>

          {/* Start Learning Button */}
          <button
            className="text-white bg-[#FF6501CC] hover:bg-[#ff6701] transition duration-300 mt-2 text-sm mx-auto"
            style={{
              width: "129px",
              height: "25px",
              borderRadius: "5px",
              padding: "2px 15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "14px",
            }}
          >
            Start Learning
          </button>
        </div>
      ))}
    </div>

    {/* Explore More Button */}
    <div className="mt-[30px] mb-[30px]">
      <button
        className="text-white bg-black hover:bg-[#3c3b3f] transition duration-300 flex items-center justify-center text-[24px]"
        style={{
          width: "208px",
          height: "46px",
          borderRadius: "5px",
          padding: "5px 10px",
          boxShadow: "0px 4px 6px 0px #0000001A",
          gap: "10px",
        }}
      >
        Explore more →
      </button>
    </div>
  </div>
</section>

    // <section
    //   className="bg-white rounded-[20px]  font-['Poppins']"
    //   style={{
    //     width: "1240px",
    //     height: "520px",
    //     margin: "70px 0 0 120px",
    //     padding: "30px",
    //     border: "0.5px solid #ECEBF6",
    //     boxShadow: "0px 0px 8px 0px #00000026", // Added shadow to all sides
    //   }}
    // >
    //   {/* Header */}
    //   <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
    //     Featured <span className="text-orange-500">Courses</span>
    //   </h2>

    //   {/* Grid */}
    //   <div
    //     className="flex justify-center gap-[30px]"
    //     style={{
    //       width: "1180px",
    //       height: "295px",
    //       margin: "0 auto", // This centers the grid container horizontally
    //     }}
    //   >
    //     {courses.map((course) => (
    //       <div
    //         key={course.id}
    //         className="bg-white rounded-[10px] flex flex-col" // Added flex-col here
    //         style={{
    //           width: "251px",
    //           height: "295px",
    //           padding: "15px",
    //           border: "0.5px solid #ECEBF6",
    //           boxShadow: "0px 4px 8px 0px #00000026",
    //         }}
    //       >
    //         {/* Course Header */}
    //         <div className="flex items-center gap-[5px] ">
    //           <h3 className="text-lg font-medium">{course.title}</h3>
    //           <div className="flex items-center text-black text-sm">
    //             <FaStar className="mr-1 text-amber-500" /> {course.rating}.0
    //           </div>
    //         </div>

    //         {/* Course Image */}
    //         <img
    //           src="https://www.plannthat.com/wp-content/uploads/2023/06/Pinterest-Techniques-to-Maximize-Reach-and-Boost-Your-Pins.png"
    //           alt={course.title}
    //           className="h-[120px] w-full object-cover mb-[2px] rounded-sm"
    //         />

    //         {/* Course Description */}
    //         <p className="text-black text-sm mb-1 ">{course.description}</p>

    //         {/* Students Enrolled */}
    //         <div className="flex gap-[2px] items-center text-gray-800 text-xs mb-2 mt-auto">
    //           <FaUserGraduate className="mr-1 text-blue-900" />
    //           {course.students}
    //           <span className="text-xs text-gray-500"> students enrolled</span>
    //         </div>

    //         {/* Level and Duration */}
    //         <div className="flex justify-between items-center text-gray-500 text-xs mb-1">
    //           <div className="mr-2">Beginner</div>
    //           <div className="flex items-center">
    //             <FaClock className="mx-2 text-green-600" />
    //             {course.duration}
    //           </div>
    //         </div>

    //         {/* Start Learning Button */}
    //         <button
    //           className="text-white hover:bg-[#FF6501CC] transition duration-300 mt-2 text-sm"
    //           style={{
    //             width: "129px",
    //             height: "25px",
    //             borderRadius: "5px",
    //             padding: "2px 15px",
    //             backgroundColor: "#FF6501CC",
    //             marginLeft: "auto", // Changed from fixed margin to auto
    //             marginRight: "auto", // Centers the button horizontally
    //             display: "flex",
    //             alignItems: "center",
    //             justifyContent: "center",
    //             gap: "14px",
    //           }}
    //         >
    //           Start Learning
    //         </button>
    //       </div>
    //     ))}
    //   </div>

    //   {/* Explore More Button */}

    //   <div className="mt-[30px] mb-[30px] flex justify-center">
    //     <button
    //       className="text-white hover:bg-gray-800 transition duration-300 flex items-center justify-center text-[24px]"
    //       style={{
    //         width: "208px",
    //         height: "46px",
    //         borderRadius: "5px",
    //         padding: "5px 10px",
    //         backgroundColor: "#000000",
    //         boxShadow: "0px 4px 6px 0px #0000001A",
    //         gap: "10px",
    //       }}
    //     >
    //       Explore more →
    //     </button>
    //   </div>
    // </section>

  );
};

export default FeaturedCourses;
