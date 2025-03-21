import { MessageOutlined, PhoneOutlined } from "@ant-design/icons";
import logo from "../../../assets/svg/logo.svg";
import { Link } from "react-router-dom";

const FooterMain = () => {
  return (
    <div className="containerr">
      <div className="bg-[#EDF6EF] p-4 grid grid-cols-1 items-center md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-3">
        <div>
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="flex  gap-2 items-center">
          <p className="max-w-[200px]">
            70 West Buckingham Ave. Farmingdale, NY 11735
          </p>
        </div>
        <div className="flex  gap-2 items-center">
          <MessageOutlined className=" !text-[#46A358]" />
          <p>contact@greenshop.com</p>
        </div>
        <div>
          <PhoneOutlined className="!rotate-90 !text-[#46A358] flex  gap-2 items-center" />
          +88 01911 717 490
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
