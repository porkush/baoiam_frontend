import React from "react";
import { FaClock, FaEye ,FaFacebook ,FaTwitter, FaPinterest ,FaHome } from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";
import blogImg from "../../assets/Pride/Blogs/blog15.png"; 
import img1 from "../../assets/Pride/Blogs/img11.png";
import { Link } from "react-router-dom";

const BlogCard1 = () => {
  return (
    <div className="min-h-screen bg-white text-[#333]">
      {/* Top Navigation */}
      <nav
  className="-mt-5 w-full bg-cover bg-center bg-no-repeat text-white opacity-90"
  style={{ backgroundImage: `url(${img1})` }}
>
       <div className="bg-black/40 px-4 py-4 ">
        <div className="flex items-center justify-between ">
          <Link to="/">
          <FaHome className="text-2xl cursor-pointer" />
          </Link>
          <h1 className="text-2xl font-semibold">Blogs</h1>
          <div></div>
        </div>
      </div>
      </nav>

      {/* Blog Hero Section */}
      <div className="max-w-[1100px] mx-auto mt-20 rounded-xl overflow-hidden shadow-md">
        <div className="relative">
          <img src={blogImg} alt="Blog" className="w-full h-[600px] object-cover " />
          <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-end p-6">
            <h1 className="text-white font-medium md:text-4xl ">
             <p >  MAKING ROOM: HOW SCHOOLS AND COLLEGES</p>
             <p className="mt-3">   CAN BETTER SUPPORT NON-BINARY STUDENTS</p>
           
            </h1>
            <p className="text-white mt-2 text-3xl">Some Sub Heading</p>

            {/* Author + Meta Info */}
            <div className="text-sm text-gray-100 flex flex-wrap items-center mt-4 gap-4">
              <span>by Tanishka Bajpai</span>
              <span className="flex items-center gap-1">
                <FaClock className="text-gray-200" />
                10 minute read
              </span>
              <span className="flex items-center gap-1">
                <FiBarChart2 className="text-gray-200" />
                11.6K views
              </span>
              <span className="flex items-center gap-1">
                <FaFacebook className="text-gray-200" />
                <FaTwitter className="text-gray-200" />
                <FaPinterest className="text-gray-200" />
                1.2K shares
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-[1050px] mx-auto font-poppins py-10 text-base text-justify px-6 leading-relaxed">
        <p className="mb-6 ">
          More people are finally talking about gender identity in schools and colleges, which is
          an encouraging and strong step in the right direction. But just saying a space is inclusive and
          actually making it feel that way are two very different things. Anyone can say, “this is a safe
          place.” The real question is: do the students walking into that space believe it?
        </p>

        <p>
          For non-binary students, the answer is often no. And not because they’re being dramatic or
          difficult. It’s because so many parts of the system still don’t acknowledge they exist. In fact,
          many classrooms, forms, systems, and routines were never designed with them in mind. And it
          shows. That’s not just a feeling. It’s in the way systems work, the language people use, and the
          way assumptions are made without thinking twice.
        </p>

      </div>



      
    </div>
  );
};

export default BlogCard1;
