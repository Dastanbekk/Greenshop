import { Card } from "antd";
import { CardProductsType } from "../../../../@types";
import UseQueryHandler from "../../../../hooks/useQuery";
import { useState } from "react";
import {
  HeartOutlined,
  SearchOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import CardsSkeleton from "../../../../generics/loader";

const Wishlist = () => {
  const { data, isPending, isError } = UseQueryHandler({
    url: "user/wishlist",
    pathname: "wishlist",
  });

  console.log(data);

  const navigate = useNavigate();
  const [clickedItems, setClickedItems] = useState<{ [key: string]: boolean }>(
    {}
  );
  const styleIcons: string =
    "bg-[#f5f5f5] w-[35px] h-[35px] flex rounded-lg justify-center items-center cursor-pointer text-[20px]";
  const ImgClick = (id: string) => {
    setClickedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (isError || isPending) {
    return [1, 2, 3].map((idx) => <CardsSkeleton key={idx} />);
  }
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {data?.map((value: CardProductsType, idx: number) => {
        if (value == null || undefined) {
          return "";
        } else {
          return (
            <Card
              key={idx}
              className="group !rounded-none hover:!cursor-pointer !border-t-transparent !border-t-2  hover:!border-t-[#46A358] !bg-[#FBFBFB]"
            >
              <img
                onClick={() => ImgClick(value?._id)}
                alt={value?.title}
                src={value?.main_image}
                className="object-cover max-h-[250px]  !w-full !h-full items-center flex "
              />
              <div
                className={`group-hover:flex justify-center w-full items-center absolute bottom-25 gap-5 ${
                  clickedItems[value?._id] ? "flex" : "hidden"
                }`}
              >
                <div className={`${styleIcons} hover:!text-[#46A358]`}>
                  <HeartOutlined className="!text-[22px]" />
                </div>
                <div className={`${styleIcons} hover:!text-[#46A358]`}>
                  <SearchOutlined
                    onClick={() =>
                      navigate(`/shop/${value.category}/${value._id}`)
                    }
                    className="!text-[22px]"
                  />
                </div>
              </div>
              <h3 className="text-gray-800 text-lg mt-2 font-bold">
                {value?.title}
              </h3>
              <div className="flex gap-2">
                <h3 className="text-green-600 font-bold mt-2 text-lg">
                  ${value?.discount_price}
                </h3>
                <del>{value?.price}</del>
              </div>
            </Card>
          );
        }
      })}
    </div>
  );
};

export default Wishlist;
