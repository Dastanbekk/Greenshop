import { Link, useLocation, useNavigate } from "react-router-dom";

import logo from "../../assets/svg/logo.svg";
import cartIcon from "../../assets/svg/cart-icon.svg";
import loginIcon from "../../assets/svg/login-icon.svg";
import menuIcon from "../../assets/svg/menu-icon.svg";
import { Badge, Button, Drawer, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import { setModalAuthorizationVisibility } from "../../redux/modal-slice";
import { useReduxDispatch } from "../../hooks/useRedux";
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
  return (
    <div className="pt-6 sticky top-0 z-10 bg-white  p-4 border-b-2 border-[#A2D0AB]">
      <div className="containerr">
        <div className="hidden sm:flex justify-between">
          <div>
            <img src={logo} alt="site-log" />
          </div>
          <div>
            <ul className="flex items-center gap-12">
              <li>
                <Link
                  className={`cursor-pointer pb-7 ${
                    pathname == "/" &&
                    "text-[#46a358] border-b-3 border-[#46a358]"
                  }`}
                  to={"#"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`cursor-pointer pb-7  ${
                    pathname == "/blog" &&
                    "text-[#46a358] border-b-2 border-[#46a358]"
                  }`}
                  to={"#"}
                >
                  Shop
                </Link>
              </li>
              {/* <li>
                <Link to={"#"}>Plant Care</Link>
              </li>
              <li>
                <Link to={"#"}>Blogs</Link>
              </li> */}
            </ul>
          </div>
          <div className="flex items-center gap-8">
            <SearchOutlined className="!text-[#3D3D3D] !text-2xl" />
            <Button className="!border-none">
              <Badge count={5} size="small" color="#46A358">
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
          <Button
            onClick={showDrawer}
            className="!bg-[#46A358] !py-5 !rounded-xl"
          >
            <img src={menuIcon} alt="" />
          </Button>

          <Drawer
            title={<p className="!text-[#46A358]">Menu</p>}
            onClose={onClose}
            open={open}
          >
            <p>Setting</p>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
