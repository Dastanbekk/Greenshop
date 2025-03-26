import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import MainLayout from "../layouts/main-layouts";
import ProductsDetails from "../pages/product-details";
import Cart from "../pages/cart";
import ProceedCheckout from "../pages/proceed-checkout";
import Blogs from "../pages/blogs";
import Rendering from "../components/blogs-children/rendering";

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
        path: "/blog",
        element: <Blogs />,
      },
      {
        path: "/blog/:created_by/:id",
        element: <Rendering />,
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
