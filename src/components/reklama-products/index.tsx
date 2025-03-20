import { Button } from "antd";
import { ReklamaProducts } from "../../@types";
import { reklama_products } from "../../utils";

const Reklama_Products = () => {
  return (
    <div className="py-5">
      <div className="containerr">
        <div className="flex flex-wrap justify-between gap-5">
          {reklama_products.map((value: ReklamaProducts) => (
            <div
              key={value.id}
              className="flex  justify-between  items-center rounded-lg bg-[#FBFBFB] p-4 "
            >
              <img
                src={value.image}
                alt=""
                className="max-w-[287px] bg-transparent"
              />
              <div className=" flex flex-col mr-5 gap-5 items-end text-end  w-full">
                <div className="">
                  <h3 className="max-w-[180px] font-bold  text-[18px]">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-400  max-w-[300px]">{value.desc}</p>
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
