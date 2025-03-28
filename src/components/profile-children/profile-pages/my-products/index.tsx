import { Card, Empty } from "antd";
import UseQueryHandler from "../../../../hooks/useQuery";
import { CardProductsType } from "../../../../@types";

const MyProducts = () => {
  const { data, isError, isPending } = UseQueryHandler({
    url: "user/products",
    pathname: "my-products",
  });

  if (data?.length <= 0) {
    return <Empty />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 ">
      {isPending || isError
        ? "loading..."
        : data?.map((value: CardProductsType) => (
            <Card
              key={value?._id}
              className="group !max-h-[350px] !h-full !rounded-none hover:!cursor-pointer !border-t-transparent  !bg-[#FBFBFB]"
            >
              <img
                alt={value?.title}
                src={value?.main_image}
                className="object-cover   !w-full !h-full items-center flex "
              />
              <h3 className="text-gray-800 text-lg mt-2 font-bold">
                {value?.title}
              </h3>
              <div className="flex gap-2">
                <h3 className="text-green-600 font-bold mt-2 text-lg">
                  ${value?.discount_price}
                </h3>
                <del>{value.price}</del>
              </div>
            </Card>
          ))}
    </div>
  );
};

export default MyProducts;
