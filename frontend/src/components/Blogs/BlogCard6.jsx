import React from "react";

const BlogCard6 = () => {
  return (
    <div className="max-w-[980px]  font-poppins bg-white rounded-xl shadow-md p-6 mb-10 mx-auto space-y-4">
      {/* Title */}
      <h2 id="section-3"
       className="text-orange-500 px-2 text-2xl font-semibold">
       Fixing the Basics Isn’t Optional
      </h2>

      {/* Paragraphs */}
      <p className=" mx-auto max-w-3xl text-justify text-[#121416] text-[16px] leading-relaxed">
       It’s also about changing what’s within the school’s control. Forms, databases, and ID systems should all allow for more than two gender options and should allow name and pronoun changes without unnecessary red tape. Students shouldn’t have to submit piles of paperwork just to be called by their actual name.
      </p>

      <p className=" mx-auto max-w-3xl text-justify text-[#121416] text-[16px] leading-relaxed">
       
And yes, restrooms matter. A single gender-neutral restroom tucked away in some rarely used corner of campus doesn’t cut it. These spaces should be easy to find, open to everyone, and treated like a normal part of the school. Not like some exception.
      </p>
    </div>
  );
};

export default BlogCard6;
