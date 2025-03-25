import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import MainLayout from "../layouts/main-layouts";
import ProductsDetails from "../pages/product-details";
import Cart from "../pages/cart";
import ProceedCheckout from "../pages/proceed-checkout";

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
      {
        path: "/shopping-cart",
        element: <Cart />,
      },
      {
        path: "/proceed-checkout",
        element: <ProceedCheckout />,
      },
    ],
  },
]);
