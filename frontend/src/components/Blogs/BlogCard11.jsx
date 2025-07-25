import React from "react";
import img1 from "../../assets/Pride/Blogs/blog12.png"; 
import img2 from "../../assets/Pride/Blogs/blog13.png";
import img3 from "../../assets/Pride/Blogs/blog14.png"; 

const BlogCard11 = () => {
  const blogs = [
    {
      id: 1,
      date: "9 July, 2025",
      title: "Making Room:",
      subtitle: "How Schools and Colleges can  Better Support Non-Binary Students",
      content: " More people are finally talking about gender identity in schools and colleges,which is an encouraging and strong step in this... ", 
      img: img1,
    },
    {
      id: 2,
      date: "9 July, 2025",
      title: "Non-Binary Representation in Media:",
      subtitle: "Still Just a Label?",
       content: " More people are finally talking about gender identity in schools and colleges,which is an encouraging and strong step in this...  ",
      img: img2,
    },
    {
      id: 3,
      date: "9 July, 2025",
      title: "Making Room:",
      subtitle: "How Schools and Colleges can  Better Support Non-Binary Students",
      content: " More people are finally talking about gender identity in schools and colleges,which is an encouraging and strong step in this...  ",
      img: img3,
    },
  ];

  return (
    <div className="max-w-[980px] font-poppins shadow-md mb-10 mx-auto px-4 py-8">
    

      <h2 className="text-2xl text-[#121416] font-normal mb-6">TABLE OF CONTENTS</h2>
      <div>                     

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={blog.img} alt={blog.title} className="w-full h-50 object-cover" />
            <div className="p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs mb-1">
          <div className="text-white bg-[#FF6501] px-2 py-[2px] rounded-md w-fit">
                {blog.date}
         </div>
               <p className="text[#000000] font-semibold">By Name</p>
         </div>

              <h3 className="text-[16px] font-bold text-black leading-tight">{blog.title}</h3>
              <p className="text-[14px] text-semibold text-black">{blog.subtitle}</p>
              <p className="text-[10px] text-justify text-black">
                {blog.content}
              </p>
              <button className=" ml-auto bg-black text-white text-sm px-4 py-1 rounded-md">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    
        
      </div>
  );
};

export default BlogCard11;
