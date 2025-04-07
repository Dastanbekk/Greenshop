import { Card, Skeleton } from "antd";
const CardsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5 gap-5">
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <Card
            key={index}
            className="!w-full !rounded-xl !shadow-md border border-gray-200"
          >
            <Skeleton.Image className="!w-full !h-40 rounded-t-xl " />
            <div className="!py-4 w-full text-center ">
              <Skeleton.Input active className="!mb-2 !w-full " />
              <Skeleton.Input active className=" !w-full" />
            </div>
          </Card>
        ))}
    </div>
  );
};

export default CardsSkeleton;
