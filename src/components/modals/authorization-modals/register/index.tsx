import { Button, Form, Input, Typography } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  GoogleOutlined,
  FacebookOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { FieldTypeRegister } from "../../../../@types";
import { useRegisterMutate } from "../../../../hooks/useQuery/useQueryAction";

const { Text } = Typography;
const Register = () => {
  const { mutate, isPending } = useRegisterMutate();
  const register = (e: FieldTypeRegister) => {
    mutate(e);
  };
  return (
    <div>
      <div className="!flex !flex-col !items-center  !w-96 !p-6 !bg-white !rounded-lg ">
        <Text className=" !text-[17px] text-start !mb-4">
          Enter your username and password to login.
        </Text>

        <Form
          onFinish={register}
          initialValues={{ remember: true }}
          autoComplete="off"
          className="!flex !flex-col !items-center !w-full"
        >
          <Form.Item<FieldTypeRegister>
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
            className="!w-full !mb-3 !border-gray-300 !py-2 !rounded-md"
          >
            <Input placeholder="Kimdur" />
          </Form.Item>
          <Form.Item<FieldTypeRegister>
            name="surname"
            rules={[{ required: true, message: "Please enter your surname" }]}
            className="!w-full !mb-3 !border-gray-300 !py-2 !rounded-md"
          >
            <Input placeholder="Kimdur" />
          </Form.Item>
          <Form.Item<FieldTypeRegister>
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
            className="!w-full !mb-3 !border-gray-300 !py-2 !rounded-md"
          >
            <Input placeholder="dastandev@gmail.com" />
          </Form.Item>

          <Form.Item<FieldTypeRegister>
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
            className="!w-full !mb-3 !border-gray-300 !py-2 !rounded-md"
          >
            <Input.Password
              placeholder="Password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          <Button
            disabled={isPending}
            htmlType="submit"
            type="primary"
            className="!w-full !bg-green-600 !py-5 !border-green-600 !hover:!bg-green-500 !text-white !mb-4"
          >
            {isPending ? <LoadingOutlined /> : "Register"}
          </Button>
        </Form>

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

export default Register;
