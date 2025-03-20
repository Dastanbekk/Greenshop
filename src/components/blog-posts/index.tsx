import BlogCards from "./blog-cards";

const BlogPost = () => {
  return (
    <div className="py-5 sm:py-10">
      <div className="containerr">
        <div>
          <h3 className="flex justify-center items-center font-bold text-[18px] sm:text-[30px]">
            Our Blog Posts
          </h3>
          <p className="flex justify-center text-[#727272] text-[14px]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
          <BlogCards />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
