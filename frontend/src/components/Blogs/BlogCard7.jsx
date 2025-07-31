import React from "react";
import img1 from "../../assets/Pride/Blogs/img18.jpg"; 
 

const BlogCard7 = () => {
  return (
    <div className="max-w-[980px] font-poppins text-justify bg-white rounded-xl shadow-md p-6 mb-10  mx-auto space-y-4">
      {/* Title */}
      <h2 id="section-4" 
      className="px-2 text-orange-500 text-2xl font-semibold">
        Culture Can’t Be Faked
      </h2>

      {/* Paragraphs */}
      <p className=" mx-auto max-w-3xl  text-[#121416] text-[16px] leading-relaxed">
        Policies matter, no doubt, but they are just the starting point. A school can have all the right language in place, but if the daily environment feels unwelcoming or unsafe, those promises fall flat. You can have your name updated in the system, but if people still dismiss you or joke at your expense in the classroom, it doesn’t feel like progress. It just feels hollow.
      </p>

      <p className=" mx-auto max-w-3xl text-[#121416] text-[16px] leading-relaxed">
        

Inclusion doesn’t live in paperwork. It lives in how people act when no one is grading them. It’s in how a teacher reacts when a student speaks up. It’s in whether classmates choose to respect someone’s pronouns without turning it into a debate.
      </p>

      <p className=" mx-auto max-w-3xl text-[#121416] text-16px leading-relaxed">
        This is why learning about gender diversity cannot be optional. And it’s not just about training teachers. It’s something everyone needs to be part of. Counselors, admin, student leaders, staff, the entire community. No one is expected to have it all figured out from the start. What matters is a willingness to listen, stay open, and keep learning. When that kind of understanding becomes part of our everyday culture, non-binary students won’t be left constantly having to explain themselves just to be acknowledged.
      </p>

      {/* Images */}
      <div className="flex item-center justify-center gap-4 pt-2">
        <img
          src={img1}
          alt="Pride flag"
          className="w-[800px] h-[400px] object-cover rounded-md"
        />
    
      </div>
    </div>
  );
};

export default BlogCard7;
