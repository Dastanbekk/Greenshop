import { Form, Input, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
// import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { AuthUser } from "../../../../@types";
import { cookieInfo } from "../../../../generics/cookies";
import { useEditDetails } from "../../../../hooks/useQuery/useQueryAction";

const Address = () => {
  const { getCookie, setCookie } = cookieInfo();
  const user: AuthUser = getCookie("user");
  const { mutate } = useEditDetails();
  console.log(user);
  
  const updateDetails = (e: any) => {
    mutate({
      ...e,
      _id: user._id,
    });

    setCookie("user", {
      ...user.billing_address,
      ...e,
      _id: user._id,
    });
  };
  return (
    <div className="p-4">
      <Form
        onFinish={updateDetails}
        layout="vertical"
        fields={[
          { name: "name", value: user?.name },
          { name: "surname", value: user?.surname },
          { name: "email", value: user?.email },
          { name: "country", value: user?.country },
          { name: "town", value: user?.town },
          { name: "street", value: user?.street },
          { name: "state", value: user?.state },
          { name: "phone_number", value: user?.phone_number },
        ]}
      >
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input placeholder="Type your first name..." />
            </Form.Item>
            <Form.Item
              name="country"
              label="Country / Region"
              rules={[{ required: true }]}
            >
              <Input placeholder="Type your first street..." />
            </Form.Item>
            <Form.Item
              name="street"
              label="Street address"
              rules={[{ required: true }]}
            >
              <Input placeholder="Type your first country..." />
            </Form.Item>

            <Form.Item name="email" label="Email" rules={[{ required: true }]}>
              <Input placeholder="Type your first country..." />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              name="surname"
              label="Last Name"
              rules={[{ required: true }]}
            >
              <Input placeholder="Type your Last name..." />
            </Form.Item>

            <Form.Item
              name="town"
              label="Town / City"
              rules={[{ required: true }]}
            >
              <Input placeholder="Type your Last name..." />
            </Form.Item>
            <Form.Item name="state" label="State" rules={[{ required: true }]}>
              <Input placeholder="Type your state..." />
            </Form.Item>
            <Form.Item
              name="phone_number"
              label="Phone Number"
              rules={[{ required: true }]}
            >
              <Input addonBefore="+998" />
            </Form.Item>
          </div>
        </div>
        <Button htmlType="submit" className="!bg-[#45a358] !text-white">
          Save changes
        </Button>
      </Form>
    </div>
  );
};

export default Address;
