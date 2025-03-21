import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import MainLayout from "../layouts/main-layouts";
import ProductsDetails from "../pages/product-details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop/:category/:id",
        element: <ProductsDetails />,
      },
    ],
  },
]);
