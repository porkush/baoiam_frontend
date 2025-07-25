import BlogCard1 from "./BlogCard1";
import BlogCard3 from "./BlogCard3";
import BlogCard4 from "./BlogCard4";
import BlogCard6 from "./BlogCard6";
import BlogCard7 from "./BlogCard7";
import BlogCard8 from "./BlogCard8";
import BlogCard9 from "./BlogCard9";
import BlogCard10 from "./BlogCard10";
import BlogCard11 from "./BlogCard11";
import BlogSidebar from "./BlogSidebar";
import ImageGrid from "./ImageGrid";

const BlogSectionPage = () => {
  return (
    <div className="w-full  mx-auto px-4 py-8">
    
      <div >
        <BlogCard1 />
        <BlogSidebar/>
        <BlogCard3 />
        <BlogCard4 />
        <ImageGrid/>
        <BlogCard6 />
        <BlogCard7 />
        <BlogCard8 />
        <BlogCard9 />
        <BlogCard10 />
        <BlogCard11 />
      </div>
    </div>
  );
};

export default BlogSectionPage;
