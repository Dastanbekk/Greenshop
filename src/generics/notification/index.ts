import { notification } from "antd";

type NotifycationApiType = "login" | "loginError" | "coupon" | "404_coupon";

export const notificationApi = () => {
  const notify = (type: NotifycationApiType) => {
    switch (type) {
      case "login":
        return notification.success({ message: "Login successfully" });
      case "coupon":
        return notification.success({ message: "Coupon successfully" });

      case "loginError":
        return notification.error({ message: "Login or password wrong" });
      case "404_coupon":
        return notification.error({ message: "Error coupon" });
      default:
        break;
    }
  };
  return notify;
};
