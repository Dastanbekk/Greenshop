import { useState } from "react";
import { Button, Slider } from "antd";

const Price = () => {
  const [price, setPrice] = useState<[number, number]>([0, 1000]);
  console.log(price);

  return (
    <div className="mt-5">
      <h3 className="font-bold text-[18px]">Price Range</h3>
      <Slider
        range
        value={price}
        max={1500}
        min={0}
        onChange={(value) => setPrice(value as [number, number])}
        trackStyle={[{ backgroundColor: "#3CAA3C" }]} // Yashil track
        handleStyle={[{ backgroundColor: "#3CAA3C", borderColor: "#3CAA3C" }]} // Yashil tutqich
      />
      <p className="price-text">
        Price: <span className="price-value text-[#2da545] font-bold">${price[0]}</span> -{" "}
        <span className="price-value text-[#46A358] font-bold">${price[1]}</span>
      </p>
      <Button  className="filter-button mt-2 !max-w-[100px] !w-full !font-bold !text-white  !bg-[#46A358]">Filter</Button>
    </div>
  );
};

export default Price;
