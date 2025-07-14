import React from 'react';
import { FaStar, FaUser } from 'react-icons/fa';
import { FiBarChart } from "react-icons/fi";
import { MdAccessTime } from 'react-icons/md';

const OurFeaturedCourses = () => {
  const courses = [
    {
      title: 'HRMS',
      image: 'https://www.plannthat.com/wp-content/uploads/2023/06/Pinterest-Techniques-to-Maximize-Reach-and-Boost-Your-Pins.png',
      description: 'Simplify HR processes and empower growth with smart tools.',
      rating: 5.0,
      students: '265.7K',
      duration: '60 hour',
      level: 'Beginner'
    },
    {
      title: 'Data Sceinece',
      image: 'https://www.plannthat.com/wp-content/uploads/2023/06/Pinterest-Techniques-to-Maximize-Reach-and-Boost-Your-Pins.png',
      description: 'Transform raw data into powerful insights for smarter decisions.',
      rating: 5.0,
      students: '265.7K',
      duration: '60 hour',
      level: 'Beginner'
    }
  ];

  return (
    <div className="w-full py-16 flex justify-center bg-white">
      <div className="w-[90%] max-w-6xl">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-2 text-center">
          Our Featured <span className="text-orange-500">Courses</span>
        </h2>
        <p className="text-gray-600 text-center mb-8 max-w-xl mx-auto">
          Skill up, stand out, and soar into success with our expert led programs.
        </p>

        {/* Bordered container */}
        <div className="border-gray px-20 py-6 pt-10 mx-auto w-fit shadow-sm rounded-lg">
          <div className="flex flex-wrap justify-center gap-10">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md w-[300px] p-4 hover:shadow-lg transition duration-300 border-gray"
              >
                {/* Title & Rating */}
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-md font-semibold">{course.title}</h3>
                  <div className="flex items-center bg-white rounded-full p-1 ">
                    <FaStar className="text-yellow-400" />
                    <span className="text-sm font-semibold ml-1">{course.rating}.0</span>
                  </div>
                </div>

                {/* Image */}
                <img
                  src={course.image}
                  alt={course.title}
                  className="rounded-lg h-[180px] w-full object-cover"
                />

                {/* Description */}
                <p className="text-black text-sm mt-3">{course.description}</p>

                {/* Stats */}
                <div className="flex items-center text-sm text-gray-800 mt-3 gap-4">
                  <div className="flex items-center gap-1">
                    <FaUser className='mr-1 text-blue-700'  />
                    {course.students}
                    <span className="text-xs text-gray-500">students enrolled</span>
                  </div>
                  <div className="flex items-center  ">
                    <MdAccessTime className=" mx-1 text-green-600"/>
                    <span>{course.duration}</span>
                  </div>
                </div>
                <div className=" flex text-sm text-gray-500 mt-1"><FiBarChart className='mt-1 text-orange-400' />{course.level}
                  </div>

                {/* Button */}
                <button className=" flex justify-center itme-center mx-auto mt-4 w-1/2  bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
                  Start Learning
                </button>
              </div>
            ))}
          </div>

          {/* Explore More Button */}
          <div className="flex justify-center mt-10">
            <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-900">
              Explore more →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeaturedCourses;