import React, { useState, useEffect } from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      content: "BAOJAM helped me land my first job within 2 months of joining. The live projects and mentorship gave me the confidence to crack my interviews.",
      author: "Ritika Sharma",
      role: "BAOJAM Alumni",
      image: "https://via.placeholder.com/60" // Placeholder for an image
    },
    {
      id: 2,
      content: "The comprehensive curriculum and hands-on projects at BAOJAM were instrumental in my career transition. Highly recommended!",
      author: "John Doe",
      role: "BAOJAM Graduate",
      image: "https://via.placeholder.com/60" // Placeholder for an image
    },
    {
      id: 3,
      content: "Thanks to BAOJAM, I gained practical skills and a strong network. Their support made all the difference in my job search.",
      author: "Jane Smith",
      role: "BAOJAM Success Story",
      image: "https://via.placeholder.com/60" // Placeholder for an image
    },
    {
      id: 4,
      content: "I secured my first tech job with ease after completing BAOJAM's program. The mentors are truly invested in your success.",
      author: "Michael Brown",
      role: "BAOJAM Alumni",
      image: "https://via.placeholder.com/60" // Placeholder for an image
    },
    {
      id: 5,
      content: "BAOJAM provided an excellent learning environment. The real-world projects were crucial for building my portfolio.",
      author: "Emily White",
      role: "BAOJAM Certified",
      image: "https://via.placeholder.com/60" // Placeholder for an image
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, testimonials.length]); // Added testimonials.length to dependencies

  // Helper function to determine class names based on index
  const getCardClasses = (index) => {
    let classes = "absolute transition-all duration-500 ease-in-out p-8 rounded-xl shadow-xl h-full flex flex-col justify-between";
    const offset = index - currentIndex;

    if (offset === 0) {
      // Center card
      classes += " bg-pink-100 scale-100 opacity-100 z-20 w-2/3 left-1/2 -translate-x-1/2";
    } else if (offset === -1 || (offset === testimonials.length - 1 && currentIndex === 0)) {
      // Left side card (previous)
      classes += " bg-green-100 scale-95 opacity-50 z-10 w-2/3 left-0 transform -translate-x-1/4";
    } else if (offset === 1 || (offset === -(testimonials.length - 1) && currentIndex === testimonials.length - 1)) {
      // Right side card (next)
      classes += " bg-green-100 scale-95 opacity-50 z-10 w-2/3 right-0 transform translate-x-1/4";
    } else {
      // Hidden cards
      classes += " hidden";
    }
    return classes;
  };

  return (
    <div className="relative max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-indigo-700 mb-2">Testimonials</h2>
        <p className="text-xl text-gray-600">
          Experts who guide, Mentors who matter. We Teach what you own
        </p>
      </div>

      {/* Carousel viewport with relative positioning for absolute children */}
      <div className="relative h-[350px] max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id} // Using testimonial.id for key, assuming unique IDs
            className={getCardClasses(index)}
          >
            <p className="text-gray-700 italic text-lg mb-6">
              "{testimonial.content}"
            </p>
            <div className="flex items-center border-t border-gray-200 pt-4">
                {/* Placeholder for author image */}
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
              <div>
                <p className="font-bold text-gray-800 text-xl">{testimonial.author}</p>
                <p className="text-indigo-600 font-medium">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="flex justify-center mt-12 space-x-6">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors shadow-md"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors shadow-md"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Testimonial;