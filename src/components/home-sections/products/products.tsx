import { Link } from "react-router-dom";
import UseQueryHandler from "../../../hooks/useQuery";
import { Card, Dropdown, Space } from "antd";
import { Skeleton } from "antd";
import { DownOutlined } from "@ant-design/icons";

const items: MenuProps["items"] = [
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
    key: "1",
  },
];

const Products = () => {
  const { data, isPending, isError } = UseQueryHandler({
    url: "flower/category/house-plants",
    pathname: "products",
  });
  console.log(data);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Link to={"#"}>All Plants</Link>
          <Link to={"#"}>All Plants</Link>
          <Link to={"#"}>All Plants</Link>
        </div>
        <div className="flex items-center gap-2">
          <span>Short by:</span>
          <span className="cursor-pointer">
            <Dropdown menu={{ items }} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Default sorting
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-5 gap-5">
        {isPending || isError
          ? Array(6)
              .fill(0)
              .map(
                (
                  _,
                  index // Skeletonlar uchun
                ) => (
                  <Card
                    key={index}
                    className="!w-64 !rounded-xl !shadow-md border border-gray-200"
                  >
                    <Skeleton.Image className="!w-full !h-40 rounded-t-xl " />
                    <div className="!py-4 w-full text-center ">
                      <Skeleton.Input active className="!mb-2 !w-full " />
                      <Skeleton.Input active className=" !w-full" />
                    </div>
                  </Card>
                )
              )
          : data?.map((value) => (
              <Card
                key={value?.id}
                className="items-center flex flex-col rounded-xl shadow-md border border-gray-200"
                cover={
                  <img
                    alt={value?.title}
                    src={value?.main_image}
                    className="rounded-t-xl max-w-[250px] max-h-[250px] items-center flex p-4"
                  />
                }
              >
                <div className="text-center">
                  <h3 className="text-gray-800 text-lg">{value?.category}</h3>
                  <p className="text-green-600 font-bold text-lg">
                    ${value?.price.toFixed(2)}
                  </p>
                </div>
              </Card>
            ))}
      </div>
    </div>
  );
};

export default Products;
