import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const BlogSidebar = () => {
  const contents = [
  { id: "section-1", title: "Everyday Systems Speak Louder Than Statements" },
  { id: "section-2", title: "Start With Listening and Really Mean It" },
  { id: "section-3", title: "Fixing the Basics Isn’t Optional" },
  { id: "section-4", title: "Culture Can’t Be Faked" },
  { id: "section-5", title: "Stop Putting the Work on the Ones Already Exhausted" },
  { id: "section-6", title: "What Inclusion Actually Feels Like" },
  { id: "section-7", title: "Keep Showing Up Even When It’s Quiet" },
];


  return (
    <div className="max-w-[980px] text-justify flex flex-col md:flex-row gap-8 px-0 py-6 mb-10 mx-auto">
      {/* Table of Contents */}
      <div className="bg-white rounded-md shadow-md p-6 w-full md:w-[713px]">
        <h2 className="text-lg font-semibold text-[#121416] mt-4 mb-6">TABLE OF CONTENTS</h2>
        <ol className="max-w-[606px] font-poppins text-justify space-y-4 list-none">
      {contents.map((item, index) => (
      <li key={index} className="flex px-10 gap-4">
      <span className="bg-gray-100 text-gray-600 font-semibold w-6 h-6 flex items-center justify-center rounded-full text-sm">
        {index + 1}
      </span>
      <a
        href={`#${item.id}`}
        className="text-[14px] font-poppins text-orange-500 hover:underline cursor-pointer"
      >
        {item.title}
      </a>
    </li>
  ))}
</ol>

      </div>

      {/* Social Links */}
      <div className="bg-white rounded-md shadow-md p-6  md:w-[292px]">
        <h2 className="text-lg font-semibold text-[#121416] mb-5">SOCIAL LINKS</h2>
        <div className="grid grid-cols-2 gap-12 text-lg text-gray-700">
          <div className="flex flex-col items-center gap-2">
           
           <div className="w-[24px] h-[24px] rounded-full bg-[#3B5B9C] flex items-center justify-center">
                         <FaFacebookF className="text-sm text-white" />
               </div>
            <div>
              <p className="font-semibold">Facebook</p>
              <p className=" text-[15px] text-center text-xs text-gray-600">96k
              <p className="text-center text-xs text-gray-500">Likes</p> </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
                <div className="w-[24px] h-[24px] rounded-full bg-sky-400 flex items-center justify-center">
                    <FaTwitter className="text-sm text-white" />
                 </div>
            <div>
              <p className="font-semibold">Twitter</p>
              <p className="text-[14px] text-center text-xs text-gray-600">60K</p>
               <p className="text-center text-xs text-gray-500">Followers</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-[24px] h-[24px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center">
              <FaInstagram className="text-sm text-white" />
               </div>
            <div>
              <p className="font-semibold">Instagram</p>
              <p className="text-[14px] text-center text-xs text-gray-600">20K </p>
               <p className="text-center text-xs text-gray-500">Followers</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-[24px] h-[24px] rounded-full bg-red-500 flex items-center justify-center">
              <FaYoutube className="text-white text-sm" />
             </div>
           <div>

              <p className="font-semibold">Youtube</p>
              <p className="text-[14px] text-center text-xs text-gray-600">625K 
                <p className="text-center text-xs text-gray-500">Subscribers</p></p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;



