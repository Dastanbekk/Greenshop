import { Skeleton } from "antd";

const ProductDetailsSkeleton = () => {
  return (
    <div className="w-full">
      <Skeleton.Input active className="!w-[250px] !h-[30px] mb-3" />

      <div className="flex items-center justify-between border-b-2 border-gray-300 pb-3">
        <Skeleton.Button active className="!w-[80px] !h-[25px]" />
        <div className="flex items-center gap-3">
          <Skeleton.Button active className="!w-[120px] !h-[25px]" />
        </div>
      </div>
      <div className="mt-4">
        <Skeleton.Input active className="!w-[150px] !h-[20px] mb-2" />
        <Skeleton paragraph={{ rows: 2, width: ["100%", "80%"] }} active />
      </div>

      <div className="mt-4">
        <Skeleton.Input active className="!w-[80px] !h-[20px] mb-2" />
        <div className="flex gap-2">
          {[...Array(4)].map((_, index) => (
            <Skeleton.Avatar key={index} active size={40} shape="circle" />
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center gap-6">
        <div className="flex items-center gap-3">
          <Skeleton.Button
            active
            className="!w-[40px] !h-[40px] rounded-full"
          />
          <Skeleton.Input active className="!w-[20px] !h-[30px]" />
          <Skeleton.Button
            active
            className="!w-[40px] !h-[40px] rounded-full"
          />
        </div>
        <Skeleton.Button active className="!w-[120px] !h-[40px] rounded-md" />
        <Skeleton.Button active className="!w-[100px] !h-[40px] rounded-md" />
        <Skeleton.Avatar active size={40} shape="circle" />
      </div>

      <div className="mt-4">
        <Skeleton.Input active className="!w-[300px] !h-[20px] mb-2" />
        <Skeleton.Input active className="!w-[200px] !h-[20px]" />
      </div>

      <div className="mt-4 flex gap-3 items-center">
        {[...Array(4)].map((_, index) => (
          <Skeleton.Avatar key={index} active size={30} shape="circle" />
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
