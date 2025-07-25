import React from "react";
import img1 from "../../assets/Pride/Blogs/img3.png"; 
import img2 from "../../assets/Pride/Blogs/img4.png"; 
import img3 from "../../assets/Pride/Blogs/img5.png"; 
import img4 from "../../assets/Pride/Blogs/img6.png"; 


const ImageGrid = () => {
  return (
<div className="w-full mx-auto px-4 py-4">
  <div className="max-w-[1040px] mx-auto p-4 grid gap-[10px] h-auto mb-16 grid-cols-2 md:grid-cols-2 lg:grid-cols-[380px_300px_320px] lg:grid-rows-[326px_310px] bg-white">
    
    {/* Image 1 */}
    <div className="rounded-[10px] overflow-hidden h-[200px] sm:h-[250px] lg:h-full col-span-1 sm:col-span-2 lg:col-span-2">
      <img src={img1} alt="Image 1" className="w-full h-full object-cover" />
    </div>

    {/* Image 2 */}
    <div className="rounded-[10px] overflow-hidden h-[200px] sm:h-[250px] lg:h-full">
      <img src={img2} alt="Image 2" className="w-full h-full object-cover" />
    </div>

    {/* Image 3 */}
    <div className="rounded-[10px] overflow-hidden h-[200px] sm:h-[250px] lg:h-full col-start-1 row-start-2">
      <img src={img3} alt="Image 3" className="w-full h-full object-cover" />
    </div>

    {/* Image 4 */}
    <div className="rounded-[10px] overflow-hidden h-[200px] sm:h-[250px] lg:h-full col-start-2 row-start-2 col-span-2">
      <img src={img4} alt="Image 4" className="w-full h-full object-cover" />
    </div>

  </div>
</div>


  );
};

export default ImageGrid;
