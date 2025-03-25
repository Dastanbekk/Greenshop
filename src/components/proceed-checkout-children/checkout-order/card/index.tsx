import { FC } from "react";
import { CartTypeData } from "../../../../@types";
import { AnimatePresence, motion } from "framer-motion";

const Card: FC<CartTypeData> = ({
  _id,
  counter,
  main_image,
  title,
  userPrice,
}) => {
  return (
    <div className="sm:p-1">
      <AnimatePresence>
        <motion.tr
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className=" bg-gray-50 !flex !items-center !justify-between  transition-all"
        >
          <td className="px-3 py-3 flex items-center gap-2 lg:min-w-[200px] min-w-[150px]">
            <img
              src={main_image}
              alt={title}
              className="w-12 h-12 rounded-md shadow"
            />
            <div>
              <p className="font-semibold text-gray-800">{title}</p>
              <p className="text-sm hidden text-gray-500">SKU: {_id}</p>
            </div>
          </td>
          <td className="py-3 text-gray-700 text-lg font-medium min-w-[100px]">
            {`(X ${counter})`}
          </td>

          <td className="py-3 text-green-600 font-semibold text-lg min-w-[100px]">
            ${userPrice?.toFixed(2)}
          </td>
        </motion.tr>
      </AnimatePresence>
    </div>
  );
};

export default Card;
