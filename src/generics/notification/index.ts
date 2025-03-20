import { notification } from "antd";

type NotifycationApiType = "login" | "loginError";

export const notificationApi = () => {
  const notify = (type: NotifycationApiType) => {
    switch (type) {
      case "login":
        return notification.success({ message: "Login successfully" });

      case "loginError":
        return notification.error({ message: "Login or password wrong" });
      default:
        break;
    }
  };
  return notify;
};
