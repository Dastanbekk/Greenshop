import { CommentOutlined, EyeOutlined, HeartOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { BlogCardsType } from "../../../@types";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const BlogCards: FC<BlogCardsType> = ({
  short_description,
  reaction_length,
  title,
  views,
  created_by,
  _id,
  isPending,
}) => {
  const navigate = useNavigate();
  return (
    <Card
      loading={isPending}
      className="h-full !my-5"
      actions={[
        <div>
          <EyeOutlined />
          {views}
        </div>,
        <div>
          <CommentOutlined />
          30
        </div>,
        <div>
          <HeartOutlined /> {reaction_length}
        </div>,
      ]}
    >
      <Card.Meta
        title={
          <div onClick={() => navigate(`/blog/${created_by}/${_id}`)} className="cursor-pointer">
            {title}
          </div>
        }
        description={<>{short_description}</>}
      />
    </Card>
  );
};

export default BlogCards;
