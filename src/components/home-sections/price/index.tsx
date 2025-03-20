import { useState } from "react";
import { Button, Slider } from "antd";
import { useSearchParamsHandler } from "../../../hooks/useSearchParans";

const Price = () => {
  const { setParam, getParam } = useSearchParamsHandler();
  const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1500;
  const sort = getParam("sort") || "default-sorting";
  const type = getParam("type") || "all-plants";
  const [price, setPrice] = useState<[number, number]>([
    +range_min,
    +range_max,
  ]);
  const category = getParam("category") || "house-plants";
  return (
    <div className="mt-5">
      <h3 className="font-bold text-[18px]">Price Range</h3>
      <Slider
        range
        value={price}
        max={1500}
        min={0}
        onChange={(value) => setPrice(value as [number, number])}
        trackStyle={[{ backgroundColor: "#3CAA3C" }]}
        handleStyle={[{ backgroundColor: "#3CAA3C", borderColor: "#3CAA3C" }]}
      />
      <p className="price-text">
        Price:{" "}
        <span className="price-value text-[#2da545] font-bold">
          ${price[0]}
        </span>{" "}
        -{" "}
        <span className="price-value text-[#46A358] font-bold">
          ${price[1]}
        </span>
      </p>
      <Button
        onClick={() =>
          setParam({
            category,
            range_min: price[0],
            range_max: price[1],
            sort,
            type,
          })
        }
        className="filter-button mt-2 !max-w-[100px] !w-full !font-bold !text-white  !bg-[#46A358]"
      >
        Filter
      </Button>
    </div>
  );
};

export default Price;
