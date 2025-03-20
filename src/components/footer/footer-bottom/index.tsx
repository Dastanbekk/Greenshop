import {
  FacebookFilled,
  InstagramOutlined,
  LinkedinFilled,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Button, Collapse } from "antd";
import { Link } from "react-router-dom";
const { Panel } = Collapse;
const FooterBottom = () => {
  return (
    <div className="containerr">
      <div className="grid bg-[#fbfbfb] grid-cols-1 py-8 px-6  md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-3">
        <div className="!hidden sm:!block">
          <h3 className="font-bold text-[18px]">My Account</h3>
          <ul className="flex flex-col text-[14px] text-[#3d3d3d] gap-2 mt-5">
            <li>
              <Link to={"#"}>My Account</Link>
            </li>
            <li>
              <Link to={"#"}>Our stores</Link>
            </li>
            <li>
              <Link to={"#"}>Contact us</Link>
            </li>
            <li>
              <Link to={"#"}>Career</Link>
            </li>
            <li>
              <Link to={"#"}>Specials</Link>
            </li>
          </ul>
        </div>
        <div className="!hidden sm:!block">
          <h3 className="font-bold text-[18px]">Help & Guide</h3>
          <ul className="flex flex-col text-[14px] text-[#3d3d3d] gap-2 mt-5">
            <li>
              <Link to={"#"}>Help Center</Link>
            </li>
            <li>
              <Link to={"#"}>How to Buy</Link>
            </li>
            <li>
              <Link to={"#"}>Shipping & Delivery</Link>
            </li>
            <li>
              <Link to={"#"}>Product Policy</Link>
            </li>
            <li>
              <Link to={"#"}>How to Return</Link>
            </li>
          </ul>
        </div>
        <div className="!hidden sm:!block">
          <h3 className="font-bold text-[18px]">Categories</h3>
          <ul className="flex flex-col text-[14px] text-[#3d3d3d] gap-2 mt-5">
            <li>
              <Link to={"#"}>House Plants</Link>
            </li>
            <li>
              <Link to={"#"}>Potter Plants</Link>
            </li>
            <li>
              <Link to={"#"}>Seeds</Link>
            </li>
            <li>
              <Link to={"#"}>Small Plants</Link>
            </li>
            <li>
              <Link to={"#"}>Accessories</Link>
            </li>
          </ul>
        </div>
        <Collapse className="!block sm:!hidden w-full border border-gray-300 rounded-lg !bg-transparent">
          {/* My Account */}
          <Panel header="My Account" key="1">
            <ul className="flex flex-col text-[14px] !text-[#3d3d3d] gap-2">
              <li>
                <Link to={"#"}>My Account</Link>
              </li>
              <li>
                <Link to={"#"}>Our stores</Link>
              </li>
              <li>
                <Link to={"#"}>Contact us</Link>
              </li>
              <li>
                <Link to={"#"}>Career</Link>
              </li>
              <li>
                <Link to={"#"}>Specials</Link>
              </li>
            </ul>
          </Panel>

          {/* Help & Guide */}
          <Panel header="Help & Guide" key="2">
            <ul className="flex flex-col text-[14px] text-[#3d3d3d] gap-2">
              <li>
                <Link to={"#"}>Help Center</Link>
              </li>
              <li>
                <Link to={"#"}>How to Buy</Link>
              </li>
              <li>
                <Link to={"#"}>Shipping & Delivery</Link>
              </li>
              <li>
                <Link to={"#"}>Product Policy</Link>
              </li>
              <li>
                <Link to={"#"}>How to Return</Link>
              </li>
            </ul>
          </Panel>

          {/* Categories */}
          <Panel header="Categories" key="3">
            <ul className="flex flex-col text-[14px] text-[#3d3d3d] gap-2">
              <li>
                <Link to={"#"}>House Plants</Link>
              </li>
              <li>
                <Link to={"#"}>Potter Plants</Link>
              </li>
              <li>
                <Link to={"#"}>Seeds</Link>
              </li>
              <li>
                <Link to={"#"}>Small Plants</Link>
              </li>
              <li>
                <Link to={"#"}>Accessories</Link>
              </li>
            </ul>
          </Panel>
        </Collapse>
        <div>
          <h3 className="font-bold text-[18px]">Categories</h3>
          <div className="flex gap-1 mt-5 items-center">
            <Button>
              <FacebookFilled className="!text-[#46A358]" />
            </Button>
            <Button>
              <InstagramOutlined className="!text-[#46A358]" />
            </Button>
            <Button>
              <TwitterOutlined className="!text-[#46A358]" />
            </Button>
            <Button>
              <LinkedinFilled className="!text-[#46A358]" />
            </Button>
            <Button>
              <YoutubeOutlined className="!text-[#46A358]" />
            </Button>
          </div>
          <h3 className="font-bold text-[18px] mt-8">We accept</h3>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
