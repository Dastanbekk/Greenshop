import { Link, useLocation, useNavigate } from "react-router-dom";

import logo from "../../assets/svg/logo.svg";
import cartIcon from "../../assets/svg/cart-icon.svg";
import loginIcon from "../../assets/svg/login-icon.svg";
import menuIcon from "../../assets/svg/menu-icon.svg";
import { Badge, Button, Drawer, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import { setModalAuthorizationVisibility } from "../../redux/modal-slice";
import { useReduxDispatch, useReduxSelector } from "../../hooks/useRedux";
import { cookieInfo } from "../../generics/cookies";

const Navbar = () => {
  const { isAuthorization, getCookie } = cookieInfo();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const user = getCookie("user");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const dispatch = useReduxDispatch();
  const cartItems = useReduxSelector((state) => state.cartSlice.data);

  return (
    <div className="pt-6 sticky top-0 z-10 bg-white  p-4 border-b-2 border-[#A2D0AB]">
      <div className="containerr">
        <div className="hidden sm:flex justify-between">
          <div>
            <Link to={"/"}>
              <img src={logo} alt="site-log" />
            </Link>
          </div>
          <div>
            <ul className="flex items-center gap-12">
              <li>
                <Link
                  className={`cursor-pointer pb-7 ${
                    pathname == "/" &&
                    "text-[#46a358] border-b-3 border-[#46a358]"
                  }`}
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`cursor-pointer pb-7  ${
                    pathname == "/shopping-cart" &&
                    "text-[#46a358] border-b-2 border-[#46a358]"
                  }`}
                  to={"/shopping-cart"}
                >
                  Shop
                </Link>
              </li>
              {/* <li>
                <Link to={"#"}>Plant Care</Link>
              </li> */}
              <li>
                <Link
                  className={`cursor-pointer pb-7  ${
                    pathname == "/blog" &&
                    "text-[#46a358] border-b-2 border-[#46a358]"
                  }`}
                  to={"/blog"}
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-8">
            <SearchOutlined className="!text-[#3D3D3D] !text-2xl" />
            <Button
              onClick={() => navigate("/shopping-cart")}
              className="!border-none"
            >
              <Badge count={cartItems.length} size="small" color="#46A358">
                <img src={cartIcon} alt="" />
              </Badge>
            </Button>
            <Button
              onClick={() =>
                isAuthorization
                  ? navigate("/profile")
                  : dispatch(setModalAuthorizationVisibility())
              }
              type="primary"
              className="!bg-[#46A358]"
            >
              {isAuthorization ? (
                user.name
              ) : (
                <div className="flex gap-2 py-2">
                  <img src={loginIcon} alt="" />
                  Login
                </div>
              )}
            </Button>
          </div>
        </div>
        <div className="flex sm:hidden gap-3">
          <Input
            className="!bg-[#F8F8F8] !text-[#B0B0B0]"
            placeholder="Find your plants"
            prefix={<SearchOutlined className="text-2xl" />}
          />
          <Badge count={cartItems.length > 0 ? 1 : ""}>
            <Button
              onClick={showDrawer}
              className="!bg-[#46A358] !py-5 !rounded-xl"
            >
              <img src={menuIcon} alt="" />
            </Button>
          </Badge>

          <Drawer
            width={280}
            placement="right"
            title={
              <div className="flex  justify-between items-center">
                <p className="!text-[#46A358]">Menu</p>{" "}
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() =>
                      isAuthorization
                        ? navigate("/profile")
                        : dispatch(setModalAuthorizationVisibility())
                    }
                    type="primary"
                    className={`!bg-[#46A358] ${isAuthorization?'!w-[30px] !h-[30px] !rounded-full':""}`}
                  >
                    {isAuthorization ? (
                      <p>{user.name.slice(0, 1)}</p>
                    ) : (
                      <div className="flex gap-2 py-2">
                        <img src={loginIcon} alt="" />
                        Login
                      </div>
                    )}
                  </Button>
                  {isAuthorization ? <p>Profile</p> : ""}
                </div>
              </div>
            }
            onClose={onClose}
            open={open}
          >
            <Badge
              count={cartItems.length}
              className="!w-full"
              size="small"
              color="#46A358"
            >
              <Button
                onClick={() => navigate("/shopping-cart")}
                className="!border-2  !border-[#45a358] w-full"
              >
                <div className="flex items-center gap-3">
                  Shopping Cart
                  <img src={cartIcon} alt="" />
                </div>
              </Button>
            </Badge>
            <Button
              className="!border-2  !border-[#45a358] mt-3 w-full"
              onClick={() => navigate("/blog")}
            >
              Blogs
            </Button>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
