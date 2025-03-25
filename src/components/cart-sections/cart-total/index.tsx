import { FC, useState } from "react";
import { useReduxSelector } from "../../../hooks/useRedux";
import { useNavigate } from "react-router-dom";

const CartTotal: FC = () => {
  const { data = [] } = useReduxSelector((state) => state.cartSlice);

  const subtotal = data.reduce((sum, item) => sum + item.userPrice, 0);
  const shipping = 16.0;
  const [discount, setDiscount] = useState(0);
  const total = subtotal + shipping - discount;
  const navigate = useNavigate();
  const applyCoupon = () => {
    setDiscount(50);
  };

  return (
    <div className="shadow-md p-6 rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Cart Totals</h2>

      <div className="mb-4">
        <label className="block text-gray-600 mb-2">Coupon Apply</label>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="Enter coupon code here..."
            className="border border-green-500 rounded-md sm:rounded-l-md p-2 flex-grow outline-none"
          />
          <button
            onClick={applyCoupon}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md sm:rounded-r-md transition"
          >
            Apply
          </button>
        </div>
      </div>

      <div className="space-y-2 text-gray-700">
        <div className="flex justify-between text-sm sm:text-base">
          <span>Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm sm:text-base">
          <span>Coupon Discount</span>
          <span className="text-red-500">(-) ${discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm sm:text-base">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="border-t pt-2 flex justify-between text-base sm:text-lg font-semibold text-green-600">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button
        onClick={() => navigate("/proceed-checkout")}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md text-lg font-medium mt-4 transition"
      >
        Proceed To Checkout
      </button>

      <p
        onClick={() => navigate("/")}
        className="text-center text-green-600 mt-3 cursor-pointer hover:underline"
      >
        Continue Shopping
      </p>
    </div>
  );
};

export default CartTotal;
