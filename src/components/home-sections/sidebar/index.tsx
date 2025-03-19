import { CategoryTypes, QueryType } from "../../../@types";
import UseQueryHandler from "../../../hooks/useQuery";
import { Skeleton, Card, Divider } from "antd";
import Price from "../price";
import Discount from "../discount";

const Sidebar = () => {
  const { data, isError, isPending }: QueryType<CategoryTypes[]> =
    UseQueryHandler({
      url: "flower/category",
      pathname: "category",
    });
  console.log(data);

  return (
    <div className="bg-[#FBFBFB] py-3 px-4">
      <div>
        <h3 className="font-bold text-[18px]">Categories</h3>
        <div className="mt-4">
          {isPending || isError ? (
            <div>
              {/* Categories Skeleton */}
              <Card>
                <Skeleton active title={false} paragraph={{ rows: 8 }} />
              </Card>

              <Divider />

              {/* Price Range Skeleton */}
              <Card>
                <Skeleton.Input style={{ width: 200, height: 8 }} active />
                <Skeleton.Input
                  style={{ width: 150, height: 8, marginTop: 8 }}
                  active
                />
                <Skeleton.Button
                  style={{ width: "100%", marginTop: 16 }}
                  active
                />
              </Card>

              <Divider />

              {/* Size Skeleton */}
              <Card>
                <Skeleton active title={false} paragraph={{ rows: 3 }} />
              </Card>

              <Divider />

              {/* Super Sale Skeleton */}
              <Card>
                <Skeleton.Image style={{ width: "100%", height: 150 }} />
                <Skeleton.Button
                  style={{ width: "100%", marginTop: 16 }}
                  active
                />
              </Card>
            </div>
          ) : (
            data?.map((value) => (
              <div key={value._id} className="flex cursor-pointer hover:text-white rounded-lg   hover:bg-[#46a359] px-2 justify-between py-2.5">
                <p>{value.title}</p>
                <p>({Math.abs(value.count)})</p>
              </div>
            ))
          )}
        </div>

        <div>
          <Price />
          <Discount />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
