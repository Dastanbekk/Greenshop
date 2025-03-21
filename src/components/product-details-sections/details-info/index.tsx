import { CardProductsType } from "../../../@types";
import { Tabs } from "antd";
const onChange = (key: string) => {
  console.log(key);
};

const ProductDetailsInfos = ({ data }: { data: CardProductsType }) => {
  const items = [
    {
      key: "1",
      label: "Product Description",
      children: (
        <p
          className="!text-[#727272]"
          dangerouslySetInnerHTML={{ __html: data?.description }}
        />
      ),
    },
    {
      key: "2",
      label: "Reviews (19)",
      children: (
        <p dangerouslySetInnerHTML={{ __html: data?.short_description }} />
      ),
    },
  ];

  return (
    <Tabs
      className="custom-tabs"
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
    />
  );
};

export default ProductDetailsInfos;
