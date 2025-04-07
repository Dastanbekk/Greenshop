import { Link, useNavigate, useParams } from "react-router-dom";
import UseQueryHandler from "../../../hooks/useQuery";
import { AuthUser, BlogCardsType, QueryType } from "../../../@types";
import { Avatar, Breadcrumb, Button, notification, Tooltip } from "antd";
import {
  CommentOutlined,
  EyeOutlined,
  HeartOutlined,
  PlusCircleOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import BlogsUserSkeleton from "../../../generics/loader/blogs-user-profile";
import BlogsUserDetailsSkeleton from "../../../generics/loader/blogs-user-details";

const Rendering = () => {
  // Data
  const { created_by, id } = useParams();
  const {
    data: user,
    isPending: userPending,
    isError: userError,
  }: QueryType<AuthUser> = UseQueryHandler({
    url: `user/by_id/${created_by}`,
    pathname: `user-${created_by}`,
  });
  const { data, isPending, isError }: QueryType<BlogCardsType> =
    UseQueryHandler({
      url: `user/blog/${id}`,
      pathname: `blog-${id}`,
    });
  // DataEnd

  // Functions
  const handleShare = async () => {
    const shareData = {
      title: data?.title,
      text: data?.short_description,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        notification.success({ message: "Post sending" });
      } catch (err) {
        notification.error({ message: "Post not sending" });
      }
    }
  };

  const userLoading = userPending || userError;
  const dataLoading = isPending || isError;
  const navigate = useNavigate();
  return (
    <div className="containerr">
      <Breadcrumb
        className="!mt-5 sm:!mt-10"
        items={[
          {
            title: <Link to={"/"}>Home</Link>,
          },
          {
            title: <Link to={"/blog"}>Blogs</Link>,
          },
          {
            title: "GreenShop User",
          },
        ]}
      />
      <div className="w-[90%] mx-auto py-5 sm:py-10">
        {userLoading ? (
          <BlogsUserSkeleton />
        ) : (
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <Tooltip title={`${user?.name} ${user?.surname}`}>
                <Avatar
                  onClick={() => navigate(`/user-page/${user?._id}`)}
                  className="!w-[50px] !h-[50px] !cursor-pointer"
                  src={user?.profile_photo}
                  alt=""
                />
              </Tooltip>

              <div>
                <h3 className="font-semibold">
                  {user?.name} {user?.surname}
                </h3>
                <p>Followers {user?.followers.length}</p>
              </div>
            </div>
            <Button className="!bg-[#45a358] text-white" type="primary">
              <PlusCircleOutlined />
              Follow
            </Button>
          </div>
        )}
        {dataLoading ? (
          <BlogsUserDetailsSkeleton />
        ) : (
          <div className="my-5 sm:my-8">
            <h3 className="font-bold text-[20px] sm:text-[34px]">
              {data?.title}
            </h3>
            <div
              dangerouslySetInnerHTML={{ __html: data?.content as string }}
            ></div>
            <div className="flex items-center gap-2 mt-2">
              <div>
                <EyeOutlined />
                {data?.views}
              </div>
              <div>
                <CommentOutlined />
                30
              </div>
              <div>
                <HeartOutlined /> {data?.reaction_length}
              </div>
              <div className="cursor-pointer" onClick={handleShare}>
                <ShareAltOutlined />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rendering;
