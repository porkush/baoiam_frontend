import React from "react";

const Footer = () => {
  return (
    <div className="bg-white p-6 max-w-6xl mx-auto">
      {/* TOP 4 CATEGORY */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">TOP 4 CATEGORY</h1>
      </div>

      {/* QUICK LINKS */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">QUICK LINKS</h2>
        <p className="text-gray-600 font-medium mb-6">
          Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis odio at.
        </p>
      </div>

      {/* TOTALIZATION */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">TOTALIZATION</h3>
        <p className="text-gray-600 font-medium mb-6">
          TOTALIZATION FOR THE BEGINNING OF THE CURRENT
        </p>
      </div>

      {/* Links Grid */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="space-y-2">
          <p className="font-medium text-gray-800">Udsan 90</p>
          <p className="font-medium text-gray-800">Success Fusion Program</p>
          <p className="font-medium text-gray-800">Pay after Placement</p>
          <p className="font-medium text-gray-800">Pride Fusion</p>
        </div>

        <div className="space-y-2">
          <p className="font-medium text-gray-800">About</p>
          <p className="font-medium text-gray-800">Become Instructor →</p>
          <p className="font-medium text-gray-800">Contact</p>
          <p className="font-medium text-gray-800">Career</p>
        </div>

        <div className="space-y-2">
          <p className="font-medium text-gray-800">Help Center</p>
          <p className="font-medium text-gray-800">FAQs</p>
          <p className="font-medium text-gray-800">Terms & Condition</p>
          <p className="font-medium text-gray-800">Privacy Policy</p>
        </div>

        <div className="space-y-2">
          <p className="font-medium text-gray-800">Download now</p>
          <p className="font-medium text-gray-800">App Store</p>
          <p className="font-medium text-gray-800">Download now</p>
          <p className="font-medium text-gray-800">Play Store</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 pt-4">
        <p className="text-gray-600 text-sm">
          © 2021 - Designed by <span className="font-bold">Baciam</span>. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;