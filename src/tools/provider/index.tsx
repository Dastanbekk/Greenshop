import { FC } from "react";
import type { ComponentType } from "../../@types";
import Modals from "../../components/modals";

const ProviderConfig: FC<ComponentType> = ({ children }) => {
  return (
    <>
      {children}
      <Modals />
    </>
  );
};

export default ProviderConfig;
