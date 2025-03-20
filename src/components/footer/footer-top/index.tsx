import { Button } from "antd";
import { AdviceMockItemType } from "../../../@types";
import { advice_item } from "../../../utils";

const FooterTop = () => {
  return (
    <div className="containerr">
      <div className="bg-[#fbfbfb] p-5 grid grid-cols-1  items-center md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-3">
        {advice_item.map((value: AdviceMockItemType) => (
          <div
            className=" p-3 flex flex-col items-center sm:items-start w-full sm:inline "
            key={value.id}
          >
            <div
              className={`text-center sm:text-start  flex items-center sm:items-start flex-col  ${
                value.border
                  ? "border-gray-400 border-b-2  sm:border-b-0 pb-2  sm:border-r-2"
                  : ""
              }`}
            >
              <img src={value.img} alt="" />
              <h3 className="font-bold mt-2">{value.title}</h3>
              <p className="max-w-[204px]  mt-3 text-[#727272]">
                {value.description}
              </p>
            </div>
          </div>
        ))}
        <div className="flex flex-col gap-5">
          <h3 className="font-bold sm:text-[18px]">
            Would you like to join newsletters?
          </h3>
          <form className="bg-white rounded-xl flex items-center w-full min-w-[200px] max-w-full overflow-hidden">
            <input
              type="text"
              className="border-none outline-none px-2 flex-1 min-w-0"
              placeholder="Enter your email address..."
            />
            <Button
              type="primary"
              className="!bg-[#46a358] !rounded-l-none !py-2 sm:!py-4 !font-bold flex-shrink-0 !w-[70px] sm:!w-[100px]"
            >
              Join
            </Button>
          </form>

          <p className="text-[13px] text-[#727272]">
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
