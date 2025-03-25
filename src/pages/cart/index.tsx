import { Breadcrumb } from "antd";
import ReletedProducts from "../../components/product-details-sections/releted-products";
import { Link } from "react-router-dom";
import CartCounter from "../../components/cart-sections/cart-counter";
import CartTotal from "../../components/cart-sections/cart-total";
import { useReduxSelector } from "../../hooks/useRedux";
import { ArrowRightOutlined, ShoppingOutlined } from "@ant-design/icons";

const Cart = () => {
  const cartItems = useReduxSelector((state) => state.cartSlice.data);
  return (
    <div className="py-5 sm:py-10">
      {cartItems.length <= 0 ? (
        <div className="containerr">
          <div className="flex flex-col items-center">
            <ShoppingOutlined className="!text-[100px] !text-[#46A358]" />
            <p className="!text-[30px] !text-[#46A358]">Get Shopping</p>
            <Link className="!text-[#46a358] border-b-2 border-[#46a358]" to={"/"}>Shop <ArrowRightOutlined /> </Link>
          </div>
        </div>
      ) : (
        <div className="containerr">
          <Breadcrumb
            items={[
              {
                title: <Link to={"/"}>Home</Link>,
              },
              {
                title: "Shopping Cart",
              },
            ]}
          />

          <div className=" grid-cols-1 sm:grid-cols-[70%_minmax(28%,_1fr)] gap-5 my-5 sm:my-10 grid">
            <CartCounter />
            <CartTotal />
          </div>
        </div>
      )}
      <ReletedProducts />
    </div>
  );
};

export default Cart;
