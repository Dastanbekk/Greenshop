import { OrderType } from "../../../../../@types";
import { cookieInfo } from "../../../../../generics/cookies";
import {
  useReduxDispatch,
  // useReduxSelector,
} from "../../../../../hooks/useRedux";
import {
  setModalAuthorizationVisibility,
  setTrackModalVisibility,
} from "../../../../../redux/modal-slice";
import TrackOrderModal from "../order-modal";

const OrderItem = (data: OrderType) => {
  const dispatch = useReduxDispatch();
  const { isAuthorization } = cookieInfo();
  // const { trackModalVisibility } = useReduxSelector(
  //   (state) => state.modalSlice
  // );
  return (
    <div>
      <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr]  justify-between mt-5 bg-[#FBFBFB] p-4">
        <div className="border-r p-4">
          <p>Order Number</p>
          <h2 className="font-bold">{data._id}</h2>
        </div>
        <div className="border-r p-4">
          <p>Date</p>
          <h2 className="font-bold">{data.created_at.slice(0, 10)}</h2>
        </div>
        <div className="border-r p-4">
          <p>Total</p>
          <h2 className="font-bold">
            ${data?.extra_shop_info.total?.toFixed(2)}
          </h2>
        </div>
        <div className="border-r p-4">
          <p>More</p>
          <button
            onClick={() =>
              isAuthorization
                ? dispatch(setTrackModalVisibility())
                : dispatch(setModalAuthorizationVisibility())
            }
            className="text-[rgb(69,163,88)] cursor-pointer hover:underline "
          >
            More details
          </button>
        </div>
      </div>
      <TrackOrderModal  />
    </div>
  );
};

export default OrderItem;
