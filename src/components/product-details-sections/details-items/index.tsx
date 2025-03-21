import { Button, Rate } from "antd";
import { CardProductsType } from "../../../@types";
import {
  FacebookOutlined,
  HeartFilled,
  HeartOutlined,
  LinkedinOutlined,
  MessageFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import ProductDetailsSkeleton from "../../../generics/loader/product-details-info";
import { useState } from "react";

const ProductDetailsItems = ({
  data,
  isPending,
  isError,
}: {
  data: CardProductsType;
  isPending: boolean;
  isError: boolean;
}) => {
  const [isLike, setIsLike] = useState(false);
  if (isPending || isError) {
    return <ProductDetailsSkeleton />;
  }
  return (
    <div className="w-full px-4 md:px-8 lg:px-16 xl:px-20">
      <h3 className="!font-bold !text-[24px]">{data?.title}</h3>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b-2 !border-[#46A358] pb-2 mt-3">
        <p className="!text-[#46A358] !font-bold !text-[20px]">
          ${data?.price}
        </p>
        <div className="flex items-center gap-2">
          <Rate defaultValue={data?.rate} />
          <p className="!text-[14px] md:!text-[16px]">19 Customer Review</p>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="!font-bold">Short Description:</h3>
        <p className="mt-2 !text-[14px] !text-[#727272]">
          {data?.short_description}
        </p>
      </div>

      <div className="mt-5">
        <h3 className="!font-bold">Size:</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {["S", "M", "L", "XL"].map((size) => (
            <Button
              key={size}
              className="!w-[40px] !h-[40px] !border-2 !font-bold !rounded-full transition-all hover:!border-[#46A358] focus:!border-[#46A358] focus:!text-[#46A358]"
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-5 flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="flex items-center gap-3">
          <Button className="!w-[40px] !h-[40px] !text-white !bg-[#46A358] !font-bold !rounded-full">
            -
          </Button>
          <span className="!text-[18px] !font-bold">0</span>
          <Button className="!w-[40px] !h-[40px] !text-white !bg-[#46A358] !font-bold !rounded-full">
            +
          </Button>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            size="large"
            className="!bg-[#46A358] !text-white"
            type="primary"
          >
            Buy NOW
          </Button>
          <Button size="large" className="!border-[#46A358] !text-[#46A358]">
            Add to cart
          </Button>
          <Button
            onClick={() => setIsLike(!isLike)}
            size="large"
            className="!border-[#46A358]"
          >
            {isLike ? (
              <HeartFilled className="!text-[#46A358]" />
            ) : (
              <HeartOutlined className="!text-[#46A358]" />
            )}
          </Button>
        </div>
      </div>

      <div className="mt-5 !text-[14px] md:!text-[16px]">
        <p>SKU: {data?._id}</p>
        <p className="mt-2">Tags: Home, Garden, Plants</p>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 mt-3">
        <p>Share this product:</p>
        <div className="flex items-center gap-2 !text-black">
          <FacebookOutlined />
          <TwitterOutlined />
          <LinkedinOutlined />
          <MessageFilled />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsItems;
