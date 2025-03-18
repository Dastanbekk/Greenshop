import {
  HeartOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import scaner from "../../assets/svg/scaner.svg";
import { Link, useLocation } from "react-router-dom";

const AppBar = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <div className="fixed bottom-0 left-0 w-full bg-white border-t-2 border-gray-200 rounded-t-3xl   px-8">
        <div className="flex justify-between items-center">
          {/* Home */}
          <div className="flex flex-col items-center text-green-500">
            <Link
              className={`cursor-pointer  ${
                pathname == "/" && "text-[#46a358] border-[#46a358]"
              }`}
              to={"#"}
            >
              <HomeOutlined className="!text-2xl" />
            </Link>
          </div>

          {/* Favorite */}
          <div className="flex flex-col items-center text-gray-400">
            <Link
              className={`cursor-pointer  ${
                pathname == "/like" && "text-[#46a358] border-[#46a358]"
              }`}
              to={"#"}
            >
              <HeartOutlined className="!text-2xl" />
            </Link>
          </div>

          {/* Floating Button */}
          <div className="relative">
            <Button
              className="!bg-[#4CAF50] !rounded-full"
              icon={<img src={scaner} />}
              style={{
                color: "black",
                width: 55,
                height: 55,
                bottom: 30,
                left: "20%",
              }}
            />
          </div>

          {/* Cart */}
          <div className="flex flex-col items-center text-gray-400">
            <Link
              className={`cursor-pointer  ${
                pathname == "/shop" && "text-[#46a358] border-[#46a358]"
              }`}
              to={"#"}
            >
              <ShoppingCartOutlined className="!text-2xl" />
            </Link>
          </div>

          {/* Profile */}
          <div className="flex flex-col items-center text-gray-400">
            <Link
              className={`cursor-pointer  ${
                pathname == "/login" && "text-[#46a358] border-[#46a358]"
              }`}
              to={"#"}
            >
              <UserOutlined className="!text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
