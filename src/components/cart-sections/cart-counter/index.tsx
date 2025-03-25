import { FC } from "react";
import { Trash, Plus, Minus } from "lucide-react";
import { useReduxSelector, useReduxDispatch } from "../../../hooks/useRedux";
import { motion, AnimatePresence } from "framer-motion";
import {
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
} from "../../../redux/cart-slice";

const CartCounter: FC = () => {
  const { data = [] } = useReduxSelector((state) => state.cartSlice);
  const dispatch = useReduxDispatch();

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[600px] text-left border-collapse">
        <thead>
          <tr className="border-b text-gray-700 font-semibold">
            <th className="pb-3 text-lg">Products</th>
            <th className="pb-3 text-lg">Price</th>
            <th className="pb-3 text-lg">Quantity</th>
            <th className="pb-3 text-lg">Total</th>
            <th className="pb-3"></th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence>
            {data.map((product) => (
              <motion.tr
                key={product._id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className=" hover:bg-gray-50 transition-all"
              >
                <td className="py-3 flex items-center gap-4 min-w-[200px]">
                  <img
                    src={product?.main_image}
                    alt={product.title}
                    className="w-12 h-12 rounded-md shadow"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">
                      {product.title}
                    </p>
                    <p className="text-sm text-gray-500">SKU: {product._id}</p>
                  </div>
                </td>
                <td className="py-3 text-gray-700 text-lg font-medium min-w-[100px]">
                  ${product.price}
                </td>
                <td className="py-3 flex min-w-[120px] items-center gap-3">
                  <button
                    onClick={() => dispatch(decreaseQuantity(product._id))}
                    className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition"
                  >
                    <Minus size={16} />
                  </button>
                  <motion.span
                    key={product.counter}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-lg font-semibold"
                  >
                    {product.counter}
                  </motion.span>
                  <button
                    onClick={() => dispatch(increaseQuantity(product._id))}
                    className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition"
                  >
                    <Plus size={16} />
                  </button>
                </td>
                <td className="py-3 text-green-600 font-semibold text-lg min-w-[100px]">
                  ${product.userPrice?.toFixed(2)}
                </td>
                <td className="py-3 min-w-[80px]">
                  <button
                    onClick={() => dispatch(removeProduct(product._id))}
                    className="text-gray-400 cursor-pointer hover:text-red-500 transition"
                  >
                    <Trash size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  );
};

export default CartCounter;
