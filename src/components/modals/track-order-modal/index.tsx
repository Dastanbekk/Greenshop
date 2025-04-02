import { useReduxSelector } from "../../../hooks/useRedux";
import TrackOrderModal from "../../profile-children/profile-pages/track-order/order-modal";

const TrackOrderModalAuto = () => {
    const { trackModalVisibility } = useReduxSelector(
        (state) => state.modalSlice
      );
      return <>{trackModalVisibility && <TrackOrderModal />} </>;
}

export default TrackOrderModalAuto