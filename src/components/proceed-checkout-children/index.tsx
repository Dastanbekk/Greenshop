import { Breadcrumb } from "antd";
import ProceedCheckoutBilling from "./checkout-billing";
import ProceedCheckoutOrder from "./checkout-order";
import { Link } from "react-router-dom";

const ProceedCheckoutChildren = () => {
  return (
    <div className="containerr">
      <div className="py-5 ">
        <Breadcrumb
          items={[
            {
              title: <Link to={"/"}>Home</Link>,
            },
            {
              title: <Link to={"/shopping-cart"}>shopping-cart</Link>,
            },
            {
              title: "Proceed-checkout",
            },
          ]}
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <ProceedCheckoutBilling />
        <ProceedCheckoutOrder />
      </div>
    </div>
  );
};

export default ProceedCheckoutChildren;
