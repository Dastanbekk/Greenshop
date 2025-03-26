import { Skeleton } from "antd";
import { EyeOutlined, CommentOutlined, HeartOutlined, ShareAltOutlined } from "@ant-design/icons";

const BlogsUserDetailsSkeleton = () => {
  return (
    <div className="my-5 sm:my-8">
      {/* Title Skeleton */}
      <Skeleton.Input active className="w-3/4 h-8 sm:h-10 mb-4" />

      {/* Content Skeleton */}
      <Skeleton active paragraph={{ rows: 4 }} />

      {/* Action Icons Skeleton */}
      <div className="flex items-center gap-2 mt-2">
        <div className="flex items-center gap-1">
          <EyeOutlined />
          <Skeleton.Input active className="w-10 h-5" />
        </div>
        <div className="flex items-center gap-1">
          <CommentOutlined />
          <Skeleton.Input active className="w-10 h-5" />
        </div>
        <div className="flex items-center gap-1">
          <HeartOutlined />
          <Skeleton.Input active className="w-10 h-5" />
        </div>
        <div className="cursor-pointer">
          <ShareAltOutlined />
        </div>
      </div>
    </div>
  );
};

export default BlogsUserDetailsSkeleton;
