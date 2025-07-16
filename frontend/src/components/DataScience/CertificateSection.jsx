import React from "react";
import certificateImage from "../../assets/CoursesLayout/CoursesPage/certificate.png";

export default function CertificateSection() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-10 border-b-2 border-gray-200 font-poppins">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-[40px] font-poppins md:text-4xl font-medium text-black">
          Get <span className="text-orange-500">Govt. Recognised</span> Certificate
        </h2>
        <p className="mt-2 text-black mb-9 font-medium font-poppins text-[16px] md:text-base">
          Our MSME recognised Certificate would increase your chances towards the steps of employment
        </p>
      </div>

      {/* Certificate Image with only one shadow container */}
      <div className="flex justify-center">
        <div className="rounded-[10px]  overflow-hidden">
          <img
            src={certificateImage}
            alt="Certificate"
            className="w-[636px] h-[450px] object-contain rounded-[10px]"
          />
        </div>
      </div>
    </div>
  );
}