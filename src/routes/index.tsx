import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/home";
import MainLayout from "../layouts/main-layouts";
import ProductsDetails from "../pages/product-details";
import Cart from "../pages/cart";
import ProceedCheckout from "../pages/proceed-checkout";
import Blogs from "../pages/blogs";
import Rendering from "../components/blogs-children/rendering";
import Profile from "../pages/profile";
import { cookieInfo } from "../generics/cookies";
import { path_profile, profile_tab_items } from "../utils";
import UserPage from "../pages/user-page";
import UserDetails from "../components/user-page-children/user-details";
const { isAuthorization } = cookieInfo();

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
        path: "/user-page/:id",
        element: <UserPage />,
        children: [
          {
            path: "",
            element: <UserDetails />,
            children: profile_tab_items.map(({ key, Components }: any) => ({
              path: key,
              element: <Components />,
            })),
          },
        ],
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
  {
    path: "/profile",
    element: isAuthorization ? <Profile /> : <Navigate to={"/"} replace />,
    children: path_profile.map(({ path, Components }) => ({
      path: `${path}`,
      element: <Components />,
    })),
  },
]);
