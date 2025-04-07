import { Empty, Skeleton } from "antd";
import { OrderType } from "../../../../@types";
import OrderItem from "./order-item";
import UseQueryHandler from "../../../../hooks/useQuery";

const TrackOrder = () => {
  const { data, isLoading, isError } = UseQueryHandler({
    url: "order/get-order",
    pathname: "order-list",
  });

  console.log(data);

  return (
    <div>
      <h1 className="font-bold text-2xl">Track your Orders</h1>
      <div className="h-[400px] flex gap-1 flex-col w-full overflow-y-scroll">
        {isLoading || isError ? (
          // user.order_loader()
          Array.from({ length: 8 }).map((_, idx) => (
            <Skeleton.Input
              key={idx}
              active
              className="!w-full !h-full !max-h-[100px]"
            />
          ))
        ) : data?.slice(10).length ? (
          data
            .slice(0, 2)
            .map((value: OrderType) => <OrderItem key={value._id} {...value} />)
        ) : (
          <Empty description={<p>No order</p>} />
        )}
      </div>
    </div>
  );
};

export default TrackOrder;
