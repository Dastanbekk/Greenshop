import { notification } from "antd";

type NotifycationApiType = "login";

export const notificationApi = () => {
  const notify = (type: NotifycationApiType) => {
    switch (type) {
      case "login":
        return notification.success({ message: "Login successfully" });

      default:
        break;
    }
  };
  return notify;
};
