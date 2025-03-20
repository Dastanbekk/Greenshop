import { Pagination } from "antd";
import { useState } from "react";
import type { PaginationProps } from "antd";

const PaginationProduct = () => {
  const [current, setCurrent] = useState(3);

  const onChange: PaginationProps["onChange"] = (page) => {
    console.log(page);
    setCurrent(page);
  };
  return (
    <div>
      <Pagination
        current={current}
        onChange={onChange}
        total={50}
        className="custom-pagination"
      />
    </div>
  );
};

export default PaginationProduct;
