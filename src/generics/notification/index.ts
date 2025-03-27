import { notification } from "antd";

type NotifycationApiType =
  | "login"
  | "loginError"
  | "register"
  | "registerError"
  | "coupon"
  | "404_coupon"
  | "registerSuccess"
  | "registerError";

export const notificationApi = () => {
  const notify = (type: NotifycationApiType) => {
    switch (type) {
      case "login":
        return notification.success({ message: "Login successfully" });
      case "register":
        return notification.success({ message: "Register successfully" });
      case "coupon":
        return notification.success({ message: "Coupon successfully" });
      case "registerSuccess":
        return notification.success({ message: "Register successfully" });
      case "loginError":
        return notification.error({ message: "Login or password wrong" });
      case "registerError":
        return notification.error({ message: "Register Error" });
      case "404_coupon":
        return notification.error({ message: "Error coupon" });
      default:
        break;
    }
  };
  return notify;
};
