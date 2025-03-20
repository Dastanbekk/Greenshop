import { Button } from "antd";
import { InfoMockItemType } from "../../@types";
import { info_item } from "../../utils";

const Reklama_Products = () => {
  return (
    <div className="py-5">
      <div className="containerr">
        <div className="grid grid-cols-1  sm:grid-cols-2 gap-5">
          {info_item.map((value: InfoMockItemType) => (
            <div
              key={value.id}
              className="flex  justify-between  items-center rounded-lg bg-[#FBFBFB] p-4 "
            >
              <img
                src={value.img}
                alt=""
                className="max-w-[150px] md:max-w-[200px] lg:max-w-[287px] bg-transparent"
              />
              <div className=" flex flex-col mr-5 gap-2 sm:gap-5 items-end text-end  w-full">
                <div className="">
                  <h3 className="max-w-[180px] font-bold text-[15px]  lg:text-[18px]">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-[12px] md:text-[16px]  max-w-[300px]">
                  {value.description}
                </p>
                <Button type="primary" className="!bg-[#46A358]">
                  Find More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reklama_Products;
