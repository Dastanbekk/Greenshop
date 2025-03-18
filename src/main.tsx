import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { router } from "./routes/index.tsx";
import store from "./hooks/redux/store.ts";
import i18next from "i18next";
import ProviderConfig from "./tools/provider/index.tsx";
// import MainContextProvider from "./context/main-context/index.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProviderConfig>
      <I18nextProvider i18n={i18next}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </I18nextProvider>
    </ProviderConfig>
  </StrictMode>
);
