import { Link } from "react-router-dom";
import { PostMockItemType } from "../../../@types";
import { post_item } from "../../../utils";
import { ArrowRightOutlined } from "@ant-design/icons";

const BlogCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-3 lg:gap-10 mt-9">
      {post_item.map((value: PostMockItemType) => (
        <div key={value.id}>
          <img className=" w-full" src={value.img} alt="" />

          <div className="p-3 bg-[#fbfbfb]">
            <p className="text-[#46a358]">{value.subTitle}</p>
            <h3 className="max-w-[200px] font-bold sm:text-[20px]">
              Cactus & Succulent Care Tips
            </h3>
            <p className="text-[#727272] mb-4 max-w-[242px] text-[14px]">
              Cacti are succulents are easy care plants for any home or patio.{" "}
            </p>
            <Link to={"#"}>
              Read More <ArrowRightOutlined />{" "}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCards;
