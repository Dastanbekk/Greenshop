import { SearchOutlined } from "@ant-design/icons";

const BlogSearch = () => {
  return (
    <div>
      <h3 className="font-bold text-[20px] sm:text-[26px] md:text-[30px] flex justify-center items-center">
        My Feed
      </h3>
      <div className="w-[80%] mx-auto my-3">
        <form className="border-2 flex gap-1 border-[dodgerblue] rounded-lg">
          <input placeholder="Search text" type="text" className="bg-transparent px-2 w-full outline-none" />
          <button className="bg-[dodgerblue] py-2 px-8">
            <SearchOutlined className="!text-white !text-[18px]" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogSearch;
