import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.tsx";
import ProviderConfig from "./tools/provider/index.tsx";
import "@ant-design/v5-patch-for-react-19";
// import MainContextProvider from "./context/main-context/index.tsx";
import "./index.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProviderConfig>
      <RouterProvider router={router} />
    </ProviderConfig>
  </StrictMode>
);
