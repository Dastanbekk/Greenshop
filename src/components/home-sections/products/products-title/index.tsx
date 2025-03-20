import { title_category } from "../../../../utils";
import { TitleCategoryType } from "../../../../@types";
import { Modal, Select } from "antd";
import { useSearchParamsHandler } from "../../../../hooks/useSearchParans";
import { SettingOutlined } from "@ant-design/icons";
import { useState } from "react";
import Sidebar from "../../sidebar";

const ProductsTitle = () => {
  const { setParam, getParam } = useSearchParamsHandler();
  const category = getParam("category") || "house-plants";
  const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1500;
  const sort = getParam("sort") || "default-sorting";
  const type = getParam("type") || "all-plants";
  const handleChange = (value: string) => {
    setParam({ category, range_min, range_max, sort: value, type });
  };
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center gap-5">
        {title_category.map((value: TitleCategoryType) => (
          <h3
            onClick={() =>
              setParam({
                category,
                range_min,
                range_max,
                type: value.label,
                sort,
              })
            }
            key={value.id}
            className={`cursor-pointer border-b-2 font-bold transition-all duration-200 ${
              type === value.label
                ? "text-[#46A358] border-[#46A358]"
                : "border-transparent"
            }`}
          >
            {value.title}
          </h3>
        ))}
      </div>
      <div className="hidden lg:flex items-center gap-2">
        <span>Short by:</span>
        <span className="cursor-pointer">
          <Select
            defaultValue={sort}
            onChange={handleChange}
            style={{ width: 150 }}
            options={[
              { value: "default-sorting", label: "Default Sorting" },
              { value: "the-cheapest", label: "The Cheapest" },
              { value: "most-expensive", label: "MostExpensive" },
            ]}
          />
        </span>
      </div>
      <div className="lg:hidden">
        <SettingOutlined onClick={showModal} />
        <Modal
          title="Basic Modal"
          open={open}
          onOk={handleOk}
          onCancel={handleCancel}
          okButtonProps={{
            style: { backgroundColor: "#46A358", borderColor: "#46A358" },
          }}
        >
          <Sidebar />
        </Modal>
      </div>
    </div>
  );
};
export default ProductsTitle;