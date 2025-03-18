import { Button, Input, Typography } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  GoogleOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const { Text } = Typography;
const Login = () => {
  const [password, setPassword] = useState("");
  return (
    <div>
      <div className="!flex !flex-col !items-center !w-96 !p-6 !bg-white !rounded-lg ">
        <Text className=" !text-[17px] text-start !mb-4">
          Enter your username and password to login.
        </Text>

        <Input
          className="!w-full !mb-3 !border-gray-300 !py-2 !rounded-md"
          placeholder="almamun_uxui@outlook.com"
        />

        <Input.Password
          className="!w-full !mb-3 !border-gray-300 !py-2 !rounded-md"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />

        <div className="!w-full !text-right !mb-6">
          <Text className="!text-green-500 !cursor-pointer !hover:underline">
            Forgot Password?
          </Text>
        </div>

        <Button
          type="primary"
          className="!w-full !bg-green-600 !py-5 !border-green-600 !hover:!bg-green-500 !text-white !mb-4"
        >
          Login
        </Button>

        <div className="!w-full !flex !items-center !mb-4">
          <div className="!flex-1 !border-b !border-gray-300"></div>
          <span className="!px-3 !text-gray-500">Or login with</span>
          <div className="!flex-1 !border-b !border-gray-300"></div>
        </div>

        <Button
          icon={<GoogleOutlined />}
          className="!w-full !py-4 !border !border-gray-300 !text-gray-700 !flex !items-center !justify-center !mb-3"
        >
          Login with Google
        </Button>

        <Button
          icon={<FacebookOutlined />}
          className="!w-full   !py-4 !flex !items-center !justify-center"
        >
          Login with Facebook
        </Button>
      </div>
    </div>
  );
};

export default Login;
