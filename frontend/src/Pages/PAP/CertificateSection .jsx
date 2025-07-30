import React from "react";
import certificateImage from "../../assets/CoursesLayout/CoursesPage/certificate.jpg";

const CertificateSection = () => {
  return (
    <div className="bg-gray-100 py-10 px-4 flex justify-center font-['Poppins'] ">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full gap-10 md:gap-20">
        {/* Left Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl md:text-[32px] font-bold leading-snug mb-4">
            National Sill Development<br />
            Corporation <span className="text-red-500">(NSDC)</span><br />
            Accredited Certofocate
          </h2>
          <p className="text-black text-sm md:text-[24px] leading-relaxed max-w-md">
            kljdio kjdsiofr klajd dkjiadsur kljduje<br />
            mkldioe m,kluje joie klsierjj dkljfio ue kfiejk<br />
            jkdujifte klsfkukjm
          </p>
        </div>

        {/* Right Certificate Image */}
        <div className="flex-1">
          <img
            src={certificateImage}
            alt="Certificate"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      
    </div>
  );
};

export default CertificateSection;
