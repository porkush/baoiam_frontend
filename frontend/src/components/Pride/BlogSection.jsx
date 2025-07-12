import React from "react";

const BlogSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 font-['Poppins']">
      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Blogs some heading</h2>
          <p className="text-gray-600 max-w-2xl">
            Learn loud, live proud. We’re where identity and ambition grow together.
          </p>
        </div>
        <button className="mt-4 md:mt-0 bg-orange-500 hover:bg-orange-600 text-white font-medium px-5 py-2 rounded-md transition">
          View More
        </button>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Featured Large Card */}
        <div className="relative rounded-xl overflow-hidden md:col-span-2 bg-white shadow hover:shadow-lg transition">
          <img
            src="https://source.unsplash.com/random/800x600?tablet"
            alt="Featured Blog"
            className="w-full h-96 object-cover"
          />

          {/* Date and Author badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-black text-white text-sm px-3 py-1 rounded-full">9 July, 2025</span>
            <span className="bg-white text-black text-sm px-3 py-1 rounded-full">By Name</span>
          </div>

          {/* Bottom Overlay */}
          <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur rounded-lg p-4">
            <h3 className="font-semibold mb-2">
              Making Room: How Schools and Colleges can Better Support Non-Binary Students
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              More people are finally talking about gender identity in schools and colleges,
              which is an encouraging and strong step in the...
            </p>
            <button className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800">
              Read More
            </button>
          </div>
        </div>

        {/* Right Side Small Cards */}
        <div className="flex flex-col gap-6">
          {/* Card 1 */}
          <div className="relative rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition">
            <img
              src="https://source.unsplash.com/random/400x300?tablet"
              alt="Blog 1"
              className="w-full h-48 object-cover"
            />

            {/* Date badge */}
            <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
              9 July, 2025
            </span>

            {/* Bottom Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
              <h4 className="font-semibold text-sm mb-1">
                Non-Binary Representation in Media:
              </h4>
              <p className="text-xs mb-2">Still Just a Label?</p>
              <button className="bg-white text-black px-3 py-1 rounded-md text-xs hover:bg-gray-100">
                Read More
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition">
            <img
              src="https://source.unsplash.com/random/400x300?laptop"
              alt="Blog 2"
              className="w-full h-48 object-cover"
            />

            {/* Date badge */}
            <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
              9 July, 2025
            </span>

            {/* Bottom Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
              <h4 className="font-semibold text-sm mb-1">
                Non-Binary Representation in Media:
              </h4>
              <p className="text-xs mb-2">Still Just a Label?</p>
              <button className="bg-white text-black px-3 py-1 rounded-md text-xs hover:bg-gray-100">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
