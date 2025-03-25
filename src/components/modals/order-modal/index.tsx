import { Button, Modal } from "antd";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/useRedux";
import headerImg from "../../../assets/svg/order-modal-header.svg";
import Card from "../../proceed-checkout-children/checkout-order/card";
import { useNavigate } from "react-router-dom";
import { setOrderModalVisibility } from "../../../redux/modal-slice";
import { order } from "../../../redux/cart-slice";

const OrderModal = () => {
  const { orderModalVisibility } = useReduxSelector(
    (state) => state.modalSlice
  );
  const formatDate = (date: any) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-GB", options).replace(/ /g, " ");
  };
  const dispatch = useReduxDispatch();
  const { data } = useReduxSelector((state) => state.cartSlice);
  const { discount } = useReduxSelector((state) => state.couponSlice);
  const totalPrice = data.reduce((acc, val) => (acc += val.userPrice), 16);
  let total = discount
    ? totalPrice - (totalPrice * discount) / 100
    : totalPrice;

  const today = new Date();
  const formattedDate = formatDate(today);
  const navigate = useNavigate();

  const track = () => {
    dispatch(setOrderModalVisibility());
    dispatch(order());
    navigate("/");
  };
  return (
    <Modal
      className="!w-[90%] lg:!w-[45%]"
      height={200}
      open={orderModalVisibility}
      title={<p className="font-bold text-xl">Order confirmation</p>}
      footer={false}
      onCancel={track}
    >
      <div className="flex items-center my-2 flex-col w-full justify-center">
        <img src={headerImg} alt="" />
        <p className="mt-2">Your order has been received</p>
      </div>
      <div className="grid my-5 grid-cols-4 gap-4 bg-green-50 p-4 rounded-lg text-gray-700 text-sm border border-green-100">
        <div className="text-center">
          <p className="font-semibold text-gray-500">Order Number</p>
          <p className="font-bold">{Date.now()}</p>
        </div>
        <div className="text-center border-l border-gray-300">
          <p className="font-semibold text-gray-500">Date</p>
          <p className="font-bold">{formattedDate}</p>
        </div>
        <div className="text-center border-l border-gray-300">
          <p className="font-semibold text-gray-500">Total</p>
          <p className="font-bold">${total}</p>
        </div>
        <div className="text-center border-l border-gray-300">
          <p className="font-semibold text-gray-500">Payment Method</p>
          <p className="font-bold">Cash on delivery</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-[20px]">Order details</h1>

        <div className="flex justify-between items-center">
          <td className="px-3 py-3  lg:min-w-[200px] min-w-[150px]">
            <h3 className="font-bold text-lg">Products</h3>
          </td>
          <td className="py-3 text-gray-700 text-lg font-medium min-w-[100px]">
            <div className="col-span-2 text-center font-bold text-lg">Qty</div>
          </td>

          <td className="py-3 text-green-600 font-semibold text-lg min-w-[100px]">
            <div className="col-span-2  font-bold text-lg ">Subtotal</div>
          </td>
        </div>

        <hr />
      </div>

      {data.map((value) => (
        <div key={value._id}>
          <Card {...value} />
        </div>
      ))}

      <div className="flex items-center mt-2 justify-between">
        <p className="font-bold">Shipping</p>
        <p className="text-[#45a358] font-bold">$16.00</p>
      </div>
      <div className="flex items-center mt-2 justify-between">
        <p className="font-bold">Total</p>
        <p className="text-[#45a358] font-bold">{total}</p>
      </div>
      <hr />

      <div className="my-3  flex justify-center ">
        <p className="text-center max-w-[483px]">
          Your order is currently being processed. You will receive an order
          confirmation email shortly with the expected delivery date for your
          items.
        </p>
      </div>
      <div className="!flex !justify-center">
        <Button
          onClick={track}
          type="primary"
          className="!bg-[#45a358] !py-5  !text-white"
        >
          Track your order
        </Button>
      </div>
    </Modal>
  );
};

export default OrderModal;
