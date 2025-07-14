import React from "react";
import img1 from "../../assets/Pride/OurEvents/img1.png";
import img2 from "../../assets/Pride/OurEvents/img2.png";
import img3 from "../../assets/Pride/OurEvents/img3.png";
import img4 from "../../assets/Pride/OurEvents/img4.png";
import img5 from "../../assets/Pride/OurEvents/img5.png";
import img6 from "../../assets/Pride/OurEvents/img6.png";
import img7 from "../../assets/Pride/OurEvents/img7.png";
import img8 from "../../assets/Pride/OurEvents/img8.png";
import img9 from "../../assets/Pride/OurEvents/img9.png";
import img10 from "../../assets/Pride/OurEvents/img10.png";
import img11 from "../../assets/Pride/OurEvents/img11.png";





const OurEvents = () => {
  return (
    <div className="bg-gray-200 ">
      <div className="py-10 px-4 md:px-20 ">
        <h2 className="text-center text-3xl font-semibold mb-2">
          Our <span className="text-orange-500">Events</span>
        </h2>
        <p className="text-center text-black mb-10">
          Learn loud, live proud. We're where identity and ambition grow
          together.
        </p>
      </div>

       {/* image div */}
      <div className=" w-full flex justify-center p-6 bg-white ml-32 mb-9">
        {" "}
        {/* Image grid container */}
        <div className="grid grid-cols-2 grid-rows-2  gap-4 p-2">
          {/* [1,1] - Complex nested layout */}
          <div className="flex flex-col gap-2">
            {/* Top row: img1 & img2 */}
            <div className="flex gap-2 h-1/2">
              <img
                src={img1}
                alt="img1"
                className="w-[200] h-[200px] object-cover rounded-xl"
              />
              <img
                src={img2}
                alt="img2"
                className="w-[525px] h-[200px] object-cover rounded-xl"
              />
            </div>

            {/* Bottom part: img11 + img4 in a row, with img6 in a column */}
            <div className="flex gap-2">
              {/* Left Column: img11 + img4 in top row, img5 below */}
              <div className="flex flex-col gap-2">
                {/* Top Row */}
                <div className="flex gap-2">
                  <img
                    src={img11}
                    alt="img11"
                    className="w-[240px] h-[250px] object-cover rounded-xl"
                  />
                  <img
                    src={img4}
                    alt="img4"
                    className="w-[230px] h-[250px]  object-cover rounded-xl"
                  />
                </div>

                {/* Bottom: img5 - should match combined width of img11 + img4 = 480px */}
                <img
                  src={img6}
                  alt="img6"
                  className="w-[520px] h-[250px] object-cover rounded-xl"
                />
              </div>

              {/* Right: img6, same height as the left block = 250 + 250 = 500px */}
              <img
                src={img5}
                alt="img5"
                className="w-[240px] h-[510px] ml-2 object-cover rounded-xl"
              />
            </div>
          </div>

          {/* [1,2] - Column of img3 & img7 */}
          <div className="flex flex-col gap-2">
            <img
              src={img3}
              alt="img3"
              className="w-[300px] h-[400px] object-cover rounded-xl"
            />
            <img
              src={img7}
              alt="img7"
              className="w-[300px] h-[300px] object-cover rounded-xl mt-4"
            />
          </div>

          {/* [2,1] - Row of img8 & img9 */}
          <div className="flex gap-4 mt-5">
            <img
              src={img8}
              alt="img8"
              className="w-[300px] h-[300px] object-cover rounded-xl"
            />
            <img
              src={img9}
              alt="img9"
              className="w-[450px] h-[298px] object-cover rounded-xl"
            />
          </div>

          {/* [2,2] - Single img10 */}
          <div className="ml-10">
            <img
              src={img10}
              alt="img10"
              className="w-[251px] h-[300px] object-cover mt-3 ml-2 rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEvents;
