import { CategoryTypes, QueryType } from "../../../@types";
import UseQueryHandler from "../../../hooks/useQuery";
import Price from "../price";
import Discount from "../discount";
import CategoryLoader from "../../../generics/loader/category-loader";
import { useSearchParamsHandler } from "../../../hooks/useSearchParans";

const Sidebar = () => {
  const { setParam, getParam } = useSearchParamsHandler();
  const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1500;
  const category = getParam("category") || "house-plants";

  const { data, isError, isPending }: QueryType<CategoryTypes[]> =
    UseQueryHandler({
      url: "flower/category",
      pathname: "category",
    });

  return (
    <div className="bg-[#FBFBFB] py-3 px-4">
      <div>
        <h3 className="font-bold text-[18px]">Categories</h3>
        <div className="mt-4">
          {isPending || isError ? (
            <CategoryLoader />
          ) : (
            data?.map((value) => (
              <div
                onClick={() =>
                  setParam({ category: value.route_path, range_min, range_max })
                }
                key={value._id}
                className={`${
                  category == value.route_path
                    ? "flex cursor-pointer text-white rounded-lg   bg-[#46a359] px-2 justify-between py-2.5"
                    : "flex cursor-pointer hover:text-white rounded-lg   hover:bg-[#46a359] px-2 justify-between py-2.5"
                }  `}
              >
                <p>{value.title}</p>
                <p>({Math.abs(value.count)})</p>
              </div>
            ))
          )}
        </div>

        <div>
          <Price />
          <div className="lg:block hidden">
            <Discount />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
