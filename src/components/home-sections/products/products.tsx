import UseQueryHandler from "../../../hooks/useQuery";
import { Card, Empty } from "antd";
import CardsSkeleton from "../../../generics/loader";
import ProductsTitle from "./products-title";
import { CardProductsType } from "../../../@types";
import {
  HeartOutlined,
  SearchOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { useSearchParamsHandler } from "../../../hooks/useSearchParans";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useReduxDispatch } from "../../../hooks/useRedux";
import { addData } from "../../../redux/cart-slice";

const Products = () => {
  const navigate = useNavigate();
  const { getParam } = useSearchParamsHandler();
  const category = getParam("category") || "house-plants";
  const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1500;
  const sort = getParam("sort") || "default-sorting";
  const type = getParam("type") || "all-plants";
  const { data, isPending, isError } = UseQueryHandler({
    url: `flower/category/${category}`,
    pathname: `flower-category-${category}range_min-${range_min}range_max-${range_max}-type-${type}-sort-${sort}`,
    params: {
      range_min,
      range_max,
      sort,
      type,
    },
  });
  const dispatch = useReduxDispatch();
  const [clickedItems, setClickedItems] = useState<{ [key: string]: boolean }>(
    {}
  );

  const ImgClick = (id: string) => {
    setClickedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const styleIcons: string =
    "bg-[#f5f5f5] w-[35px] h-[35px] flex rounded-lg justify-center items-center cursor-pointer text-[20px]";
  if (!data?.length && !isPending && !isError) {
    return (
      <div>
        <ProductsTitle />
        <div className="mt-5">
          <Empty />
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="flex items-center justify-between">
        <ProductsTitle />
      </div>
      {isPending || isError ? (
        <CardsSkeleton />
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-5 gap-5">
          {data?.map((value: CardProductsType) => (
            <Card
              key={value?._id}
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
                  clickedItems[value._id] ? "flex" : "hidden"
                }`}
              >
                <div
                  onClick={() => dispatch(addData(value))}
                  className={`${styleIcons} hover:!text-[#46A358]`}
                >
                  <ShoppingOutlined className="!text-[22px] hover:!text-[#46A358]" />
                </div>
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
                <del>{value.price}</del>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
export default Products;
