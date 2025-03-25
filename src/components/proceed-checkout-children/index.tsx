import { Breadcrumb } from "antd";
import ProceedCheckoutBilling from "./checkout-billing";
import ProceedCheckoutOrder from "./checkout-order";
import { Link } from "react-router-dom";
import OrderModal from "../modals/order-modal";

const ProceedCheckoutChildren = () => {
  return (
    <div className="py-5 sm:py-10">
      <div className="containerr">
        <div className="mb-5">
          <Breadcrumb
            items={[
              {
                title: <Link to={"/"}>Home</Link>,
              },
              {
                title: <Link to={"/shopping-cart"}>Shopping-cart</Link>,
              },
              {
                title: "Proceed-checkout",
              },
            ]}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ProceedCheckoutBilling />
          <ProceedCheckoutOrder />
        </div>
        <OrderModal />
      </div>
    </div>
  );
};

export default ProceedCheckoutChildren;
