import { Button } from "antd";
import { InfoMockItemType } from "../../@types";
import { info_item } from "../../utils";

const Reklama_Products = () => {
  return (
    <div className="py-5">
      <div className="containerr">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {info_item.map((value: InfoMockItemType) => (
            <div
              key={value.id}
              className="flex flex-col sm:flex-row items-center sm:items-center justify-center rounded-lg bg-[#FBFBFB] p-4 gap-4"
            >
              <img
                src={value.img}
                alt=""
                className="max-w-[120px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[287px] bg-transparent"
              />

              <div className="flex flex-col items-center sm:items-end text-center sm:text-end gap-2 sm:gap-4 w-full">
                <h3 className="max-w-[250px] font-bold text-[14px] sm:text-[16px] lg:text-[18px]">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-[12px] sm:text-[14px] md:text-[16px] max-w-[300px]">
                  {value.description}
                </p>
                <Button
                  type="primary"
                  className="!bg-[#46A358] w-full sm:w-auto text-[12px] sm:text-[14px] md:text-[16px]"
                >
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
