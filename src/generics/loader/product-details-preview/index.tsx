import { Skeleton } from "antd";

const ProductImageSkeleton = () => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-3">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="w-[70px] h-[70px] border-2 border-transparent rounded-md flex items-center justify-center"
          >
            <Skeleton.Avatar active size={70} shape="square" />
          </div>
        ))}
      </div>

      <div className="w-full h-full border rounded-lg flex items-center justify-center relative">
        <Skeleton.Image className="!w-full !h-full rounded-lg" active />
        <div className="absolute top-2 right-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            🔍
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImageSkeleton;
