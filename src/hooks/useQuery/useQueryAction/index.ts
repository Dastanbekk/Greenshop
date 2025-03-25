import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../../useAxios";
import { useReduxDispatch } from "../../useRedux";
import { setModalAuthorizationVisibility } from "../../../redux/modal-slice";
import { notificationApi } from "../../../generics/notification";
import { cookieInfo } from "../../../generics/cookies";
import { getCoupon } from "../../../redux/coupon-slice";

export const useLoginMutate = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  const notify = notificationApi();
  const { setCookie } = cookieInfo();
  return useMutation({
    mutationFn: (data: object) =>
      axios({ url: "user/sign-in", method: "POST", body: data }),
    onSuccess: (data) => {
      dispatch(setModalAuthorizationVisibility());
      notify("login");
      let { token, user } = data.data;
      localStorage.setItem("token", token);
      setCookie("user", user);
    },
    onError: () => {
      notify("loginError");
    },
  });
};

export const useGetCoupon = () => {
  const axios = useAxios();
  const notify = notificationApi();
  const dispatch = useReduxDispatch();

  return useMutation({
    mutationFn: (coupon_code: string) =>
      axios({
        url: "features/coupon",
        params: { coupon_code },
      }),
    onSuccess: (data) => {
      dispatch(getCoupon(Number(data.data.discount_for)));
      notify("coupon");
    },
    onError: () => {
      notify("404_coupon");
    },
  });
};

export const useMakeOrderList = () => {
  const axios = useAxios();

  return useMutation({
    mutationFn: (data: object) =>
      axios({ url: "order/make-order", method: "POST", body: data }),
    onSuccess: (data) => {
      console.log(data);
    },
  });
};
