
import img1 from "../../assets/AboutUs/img1.jpg";
import img2 from '../../assets/AboutUs/img2.png';
import img3 from "../../assets/AboutUs/im3.jpg";


const EventsSection = () => {
  return (
    <div className="py-16 bg-white text-center px-4">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        <span className="text-orange-500">Events</span>
      </h2>
      <p className="mt-2 text-gray-600 text-sm md:text-base">
        Workshops filled with people, not just PowerPoints.
      </p>

      
    {/* Image Grid */}
<div className="flex justify-center items-center py-10 bg-white">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl w-4xl items-center">
    {/* Left Images */}
    <div className="grid grid-cols-2 gap-4">
      {/* Top full-width image */}
      <img
        src={img1}
        alt="Top"
        className="col-span-2 w-full h-[208px] object-cover rounded-xl shadow-md"
      />

      {/* Bottom two side-by-side images */}
      <img
        src={img2}
        alt="Bottom Left"
        className="w-full h-[220px] object-cover rounded-xl shadow-md"
      />
      <img
        src={img3}
        alt="Bottom Right"
        className="w-full h-[220px] object-cover rounded-xl shadow-md"
      />
    </div>

    {/* Right Image */}
    <div className="flex items-center h-full">
      <img
        src={img2}
        alt="Right Side"
        className="w-[320px] h-[432px] object-cover rounded-xl shadow-md"
      />
    </div>
  </div>
</div>


 </div>

      
  );
};

export default EventsSection;
