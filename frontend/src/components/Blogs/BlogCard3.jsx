import React from "react";
import img1 from "../../assets/Pride/Blogs/img1.png"; 
import img2 from "../../assets/Pride/Blogs/img2.png"; 


const BlogCard3 = () => {
  return (
    <div className="max-w-[980px] bg-white rounded-xl shadow-md p-6 mb-10  mx-auto space-y-4">
      {/* Title */}
      <h2 id="section-1"
       className="px-2 text-orange-500 text-2xl font-semibold">
        Everyday Systems Speak Louder Than Statements
      </h2>

      {/* Paragraphs */}
      <p className=" mx-auto max-w-3xl  text-[#121416] text-[16px] leading-relaxed text-justify">
        There are the obvious things. Forms that only give “male” and “female”
        options. Class roll calls where names and pronouns are misused.
        Restrooms divided strictly by gender with no third option in sight.
      </p>

      <p className=" mx-auto max-w-3xl text-justify text-[#121416] text-[16px] leading-relaxed">
        And then there are the little things that pile up. Like being called
        “girls and boys” during every announcement, as if those are the only
        two options. Or being put in a spot where you have to keep explaining
        who you are, to classmates or to teachers, just so people take you
        seriously.
      </p>

      <p className=" mx-auto max-w-3xl text-[#121416] text-justify text-[16px] leading-relaxed">
        If you’ve never had to do that, it might seem small. But when it’s
        happening over and over, it adds up fast. After a while, it’s not just
        annoying. It’s exhausting. And it quietly tells you that the space
        wasn’t built with you in mind. Somehow, you’re always the one expected
        to adapt.
      </p>

      {/* Images */}
      <div className="max-w-[980px] grid grid-cols-2 gap-2 pt-2 px-10">
        <img
          src={img1}
          alt="Pride flag"
          className="w-[440px] h-auto object-cover rounded-md"
        />
        <img
          src={img2}
          alt="Rainbow light"
          className="w-[440px] h-auto object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default BlogCard3;
