import React from "react";
import img1 from "../../assets/Pride/Blogs/img8.png";
import img2 from "../../assets/Pride/Blogs/img9.png";
import img3 from "../../assets/Pride/Blogs/img10.png";

const BlogCard9 = () => {
  return (
    <div className="max-w-[980px] text-poppins  bg-white rounded-xl shadow-md p-6 mb-10 mx-auto space-y-4">
      {/* Title */}
      <h2 id="section-6" 
       className="px-2 text-orange-500 text-2xl font-semibold">
        What Inclusion Actually Feels Like
      </h2>

      {/* Paragraphs */}
      <p className=" mx-auto max-w-3xl text-justify text-[#121416] text-[16px] leading-relaxed">
        In the end, it’s not just about making students feel comfortable. It’s about whether they can walk into class without feeling tense or guarded. Whether they can actually pay attention to what’s being taught instead of spending the day on edge, waiting for someone to misgender them again. To walk through the hallway without shrinking into themselves.
      </p>

      <p className=" mx-auto max-w-3xl text-justify text-[#121416] text-[16px] leading-relaxed">
        When a school truly includes non-binary students, it doesn’t just benefit them. Everyone gains something. Kindness becomes a norm. Classrooms feel more open. When schools create an environment where non-binary students feel respected and safe, it doesn’t just help them. It creates a ripple effect. Everyone benefits. When students feel accepted for who they are, they loosen up. It takes the pressure off. The pressure to perform, to hide, to shrink into a version of themselves that feels "safe." And once that pressure is gone, everything starts to shift. Students can actually focus. Friendships become more real. Even the classroom feels different. A little more open. A little more at ease.
      </p>

     <div className="grid grid-cols-3 gap-4 pt-4 px-4">
             <img
               src={img1}
               alt="Pride flag"
               className="w-[280px] h-auto object-cover rounded-md"
             />
             <img
               src={img2}
               alt="Rainbow light"
               className="w-[280px] h-auto object-cover rounded-md"
             />
              <img
               src={img3}
               alt="Rainbow light"
               className="w-[280px] h-auto object-cover rounded-md"
             />
                 

           </div>

    </div>
  );
};

export default BlogCard9;
