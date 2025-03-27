import { Form, Input, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
// import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { AuthUser } from "../../../../@types";
import { cookieInfo } from "../../../../generics/cookies";
import { useEditDetails } from "../../../../hooks/useQuery/useQueryAction";

const AccountDetails = () => {
  const { getCookie, setCookie } = cookieInfo();
  const user: AuthUser = getCookie("user");
  const { mutate } = useEditDetails();
  
  const updateDetails = (e: any) => {
    mutate({
      ...e,
      _id: user._id,
      profile_photo: e.profile_photo.file?.response?.image_url,
    });

    setCookie("user", {
      ...user,
      ...e,
      _id: user._id,
      profile_photo: e.profile_photo.file?.response?.image_url,
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
          { name: "username", value: user?.username },
          // { name: "password", value: user?.password },
          { name: "phone_number", value: user?.phone_number },
        ]}
      >
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input placeholder="Type your first name..." />
            </Form.Item>

            <Form.Item name="email" label="Email" rules={[{ required: true }]}>
              <Input placeholder="Type your first country..." />
            </Form.Item>
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true }]}
            >
              <Input placeholder="Type your first street..." />
            </Form.Item>
            {/* <h3 className="font-bold text-[18px]">Password change</h3> */}

            {/* <Form.Item
                label="Current Password"
                name="password"
                rules={[{ required: true }]}
              >
                <Input.Password
                  placeholder="Enter your password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>

              <Form.Item
                name="new_password"
                label="New address"
                rules={[{ required: true }]}
              >
                <Input.Password
                  placeholder="Type your new password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>
              <Form.Item
                name="confirm_password"
                label="Confirm password"
                rules={[{ required: true }]}
              >
                <Input.Password
                  placeholder="Type your confirm password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item> */}
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
              name="phone_number"
              label="Phone Number"
              rules={[{ required: true }]}
            >
              <Input addonBefore="+998" />
            </Form.Item>

            <Form.Item
              name="profile_photo"
              label="Image"
              rules={[{ required: true, message: "Please enter image" }]}
            >
              <Upload
                name="image"
                data={{ type: "image" }}
                action="https://backend-n14.onrender.com/api/upload?access_token=64bebc1e2c6d3f056a8c85b7"
                listType="picture"
                headers={{
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                }}
                accept=".png,.jpg,.jpeg"
              >
                <Button
                  type="primary"
                  className="!bg-[#45a358]"
                  icon={<UploadOutlined />}
                >
                  Upload
                </Button>
              </Upload>
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

export default AccountDetails;
