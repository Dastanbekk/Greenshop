import { useReduxSelector } from "../../hooks/useRedux";
import AuthorizationModals from "./authorization-modals";

const Modals = () => {
  const { modalAuthorizationVisibility } = useReduxSelector(
    (state) => state.modalSlice
  );
  return <>{modalAuthorizationVisibility && <AuthorizationModals />}</>;
};

export default Modals;
