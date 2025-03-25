import { useState } from "react";
import { useReduxSelector } from "../../../hooks/useRedux";
import Card from "./card";

const ProceedCheckoutOrder = () => {
  const { data } = useReduxSelector((state) => state.cartSlice);
  const subtotal = data.reduce((sum, item) => sum + item.userPrice, 0);
  const shipping = 16.0;
  const [discount] = useState(0);
  const total = subtotal + shipping - discount;
  return (
    <div>
      {data.map((value) => (
        <Card key={value._id} {...value} />
      ))}
      <div className="space-y-2 p-4 text-gray-700">
        <div className="flex  justify-between text-sm sm:text-base">
          <span>Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex  justify-between text-sm sm:text-base">
          <span>Coupon Discount</span>
          <span className="text-red-500">(-) ${discount.toFixed(2)}</span>
        </div>
        <div className="flex  justify-between text-sm sm:text-base">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="border-t pt-2 flex  justify-between text-base sm:text-lg font-semibold text-green-600">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProceedCheckoutOrder;
