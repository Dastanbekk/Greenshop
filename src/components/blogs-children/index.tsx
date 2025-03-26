import { Breadcrumb, Card, Skeleton } from "antd";
import type { BlogCardsType, QueryType } from "../../@types";
import { cookieInfo } from "../../generics/cookies";
import UseQueryHandler from "../../hooks/useQuery";
import BlogCards from "./blog-cards";
import BlogHeader from "./blog-header";
import BlogSearch from "./blog-search";
import { Link } from "react-router-dom";

const BlogsChildren = () => {
  const { getCookie } = cookieInfo();
  const user = getCookie("user");

  const { data, isPending, isError }: QueryType<BlogCardsType[]> =
    UseQueryHandler({
      url: "user/blog",
      pathname: "blog",
      params: { search: "" },
    });

  return (
    <div>
      <Breadcrumb
        className="!mt-5 sm:!mt-10"
        items={[
          {
            title: <Link to={"/"}>Home</Link>,
          },
          {
            title: "Blog",
          },
        ]}
      />
      {user ? <BlogSearch /> : <BlogHeader />}

      <div className="grid grid-cols-3 gap-5">
        {isPending || isError
          ? [1, 1, 1, 1, 1, 1].map((_, idx) => (
              <Card key={idx}>
                <Skeleton />
              </Card>
            ))
          : data?.map((value) => (
              <BlogCards key={value._id} {...value} isPending={isPending} />
            ))}
      </div>
    </div>
  );
};

export default BlogsChildren;
