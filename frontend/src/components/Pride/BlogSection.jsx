// import React from "react";
// import blog1 from "../../assets/Pride/BlogSection/blog1.png";
// import blog2 from "../../assets/Pride/BlogSection/blog2.png";
// import blog3 from "../../assets/Pride/BlogSection/blog3.png";

// const BlogSection = () => {
//   return (
//     <section className="max-w-7xl mx-auto px-4 py-12 font-['Poppins']">
//       {/* Heading */}
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between ">
//         <div>
//           <h2 className="text-3xl md:text-[48px] font-semibold mb-3">
//             Blogs some heading
//           </h2>
//           <p className="text-black max-w-2xl text-[24px]">
//             Learn loud, live proud. We’re where identity and ambition grow
//             together.
//           </p>
//         </div>
//       </div>

//       {/* Grid Layout */}
//       <div className="grid md:grid-cols-3 gap-2">
//         {/* Featured Large Card */}
//         <div className="md:col-span-2">
//           <div className="relative overflow-hidden md:col-span-2 bg-white  transition flex justify-end items-start mr-3">
//             <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-5 py-1 mb-2 rounded-lg transition text-[20px]">
//               View More
//             </button>
//           </div>

//           <div className="relative rounded-xl overflow-hidden  bg-white shadow hover:shadow-lg transition h-[586px] w-[817px]">
//             <img
//               src={blog1}
//               alt="Featured Blog"
//               className="w-full object-cover"
//             />

//             {/* Date and Author badges */}
//             <div className="absolute top-4 left-4 flex items-center">
//               <span className="bg-black text-white text-sm px-4 py-1 rounded-full z-10">
//                 9 July, 2025
//               </span>
//               <span className="-ml-4 bg-white text-black text-sm px-6 py-1 rounded-r-full z-0">
//                 By Name
//               </span>
//             </div>

//             {/* Bottom Overlay Box */}
//             <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-xl p-4 max-w-[40%]">
//               <h3 className="font-semibold mb-1 text-[16px]">Making Room:</h3>
//               <p className="text-[14px] mb-2">
//                 How Schools and Colleges can Better Support Non-Binary Students
//               </p>
//               <p className="text-[10px] text-black mb-3">
//                 More people are finally talking about gender identity in schools
//                 and colleges...
//               </p>
//             </div>

//             {/* Bottom Overlay Button */}
//             <button className="absolute bottom-4 right-4 bg-black text-white text-[24px] font-medium px-6 py-2 rounded-full text-sm hover:bg-gray-800">
//               Read More
//             </button>
//           </div>
//         </div>

//         {/* Right Side Small Cards */}
//         <div className="flex flex-col gap-6">
//           {/* Card 1 */}
//           <div className="relative rounded-2xl overflow-hidden shadow hover:shadow-lg transition lg:w-[350px] h-[300px] bg-black">
//             {/* Background Image */}
//             <img
//               src={blog2}
//               alt="Blog 1"
//               className="w-full h-full object-cover object-right"
//             />

//             {/* Text overlay at top, no background */}
//             <div className="absolute top-4 left-4 text-white z-10">
//               <h4 className="text-[20px] font-bold">Non-Binary</h4>
//               <h4 className="text-[20px] font-bold mb-1">
//                 Representation in Media:
//               </h4>
//               <p className="text-[16px]">Still Just a Label?</p>
//             </div>

//             {/* Top-Right Button */}
//             <button className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full hover:bg-orange-600 transition z-10">
//               9 July, 2025
//             </button>

//             {/* Bottom-Right Button */}
//             <button className="absolute bottom-4 right-4 bg-black text-white text-[16px] px-4 py-1 rounded-full hover:bg-white hover:text-black transition z-10">
//               Read More
//             </button>
//           </div>

//           {/* Card 2 */}
//           <div className="relative rounded-2xl overflow-hidden bg-white shadow hover:shadow-lg transition lg:w-[350px] lg:h-[300px]">
//             {/* Background Image */}
//             <img
//               src={blog3}
//               alt="Blog 2"
//               className="w-full h-full object-cover"
//             />

//             {/* Top Buttons (Date and Read) */}
//             <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
//               <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
//                 9 July, 2025
//               </span>
//               <button className="text-white bg-black text-[16px] px-4 py-1 rounded-full hover:bg-white">
//                 Read More
//               </button>
//             </div>

//             {/* Bottom Overlay Text */}
//             <div className="absolute bottom-0 left-0 right-0 text-white p-4">
//               <h4 className="text-[20px] font-bold ">Non-Binary</h4>
//               <h4 className="text-[20px] font-bold mb-1 ">
//                 Representation in Media:
//               </h4>
//               <p className="text-[16px]">Still Just a Label?</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogSection;











import React from "react";
import blog1 from "../../assets/Pride/BlogSection/blog1.png";
import blog2 from "../../assets/Pride/BlogSection/blog2.png";
import blog3 from "../../assets/Pride/BlogSection/blog3.png";

const BlogSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 font-['Poppins']">
      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h2 className="text-3xl md:text-[48px] font-semibold mb-3">
            Blogs some heading
          </h2>
          <p className="text-black max-w-2xl text-[24px]">
            Learn loud, live proud. We’re where identity and ambition grow
            together.
          </p>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Featured Large Card */}
        <div className="md:col-span-2 w-full">
          <div className="relative overflow-hidden bg-white transition flex justify-end items-start mb-3 md:mb-0">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-5 py-1 mb-2 rounded-lg text-[20px]">
              View More
            </button>
          </div>

          <div className="relative rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition w-full h-[300px] md:h-[586px] md:w-[817px]">
            <img
              src={blog1}
              alt="Featured Blog"
              className="w-full h-full object-cover"
            />

            {/* Date and Author badges */}
            <div className="absolute top-4 left-4 flex items-center">
              <span className="bg-black text-white text-sm px-4 py-1 rounded-full z-10">
                9 July, 2025
              </span>
              <span className="-ml-4 bg-white text-black text-sm px-6 py-1 rounded-r-full z-0">
                By Name
              </span>
            </div>

            {/* Bottom Overlay Box */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-xl p-4 max-w-[80%] md:max-w-[40%]">
              <h3 className="font-semibold mb-1 text-[16px]">Making Room:</h3>
              <p className="text-[14px] mb-2">
                How Schools and Colleges can Better Support Non-Binary Students
              </p>
              <p className="text-[10px] text-black mb-3">
                More people are finally talking about gender identity in schools
                and colleges...
              </p>
            </div>

            {/* Bottom Overlay Button */}
            <button className="absolute bottom-4 right-4 bg-black text-white text-[24px] font-medium px-6 py-2 rounded-full text-sm hover:bg-gray-800">
              Read More
            </button>
          </div>
        </div>

        {/* Right Side Small Cards */}
        <div className="flex flex-col gap-6 w-full">
          {/* Card 1 */}
          <div className="relative rounded-2xl overflow-hidden shadow hover:shadow-lg transition w-full h-[250px] md:h-[300px] lg:w-[350px]">
            <img
              src={blog2}
              alt="Blog 1"
              className="w-full h-full object-cover object-right"
            />

            <div className="absolute top-4 left-4 text-white z-10">
              <h4 className="text-[20px] font-bold">Non-Binary</h4>
              <h4 className="text-[20px] font-bold mb-1">
                Representation in Media:
              </h4>
              <p className="text-[16px]">Still Just a Label?</p>
            </div>

            <button className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full hover:bg-orange-600 transition z-10">
              9 July, 2025
            </button>

            <button className="absolute bottom-4 right-4 bg-black text-white text-[16px] px-4 py-1 rounded-full hover:bg-white hover:text-black transition z-10">
              Read More
            </button>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-2xl overflow-hidden bg-white shadow hover:shadow-lg transition w-full h-[250px] md:h-[300px] lg:w-[350px]">
            <img
              src={blog3}
              alt="Blog 2"
              className="w-full h-full object-cover"
            />

            <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
              <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                9 July, 2025
              </span>
              <button className="text-white bg-black text-[16px] px-4 py-1 rounded-full hover:bg-white">
                Read More
              </button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 text-white p-4">
              <h4 className="text-[20px] font-bold">Non-Binary</h4>
              <h4 className="text-[20px] font-bold mb-1">
                Representation in Media:
              </h4>
              <p className="text-[16px]">Still Just a Label?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;




