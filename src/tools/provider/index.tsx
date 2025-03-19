import { FC } from "react";
import type { ComponentType } from "../../@types";
import Modals from "../../components/modals";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const ProviderConfig: FC<ComponentType> = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {children}
          <Modals />
        </QueryClientProvider>
      </Provider>
    </>
  );
};

export default ProviderConfig;
