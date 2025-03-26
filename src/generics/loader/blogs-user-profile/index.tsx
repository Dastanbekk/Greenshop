import { Skeleton } from "antd";
// import { PlusCircleOutlined } from "@ant-design/icons";

const BlogsUserSkeleton = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Skeleton.Avatar active size={50} />
        <div>
          <Skeleton.Input active size="small" className="w-32 mb-1" />
          <Skeleton.Input active size="small" className="w-20" />
        </div>
      </div>
      <Skeleton.Input active className="w-24 h-8 rounded-md" />
    </div>
  );
};

export default BlogsUserSkeleton;
