import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../../useAxios";
import { useReduxDispatch } from "../../useRedux";
import { setModalAuthorizationVisibility } from "../../../redux/modal-slice";
import { notificationApi } from "../../../generics/notification";

export const useLoginMutate = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  const notify = notificationApi();
//   const signIn = useSign
  return useMutation({
    mutationFn: (data: object) =>
      axios({ url: "user/sign-in", method: "POST", body: data }),
    onSuccess: (data) => {
      dispatch(setModalAuthorizationVisibility());
      notify("login");
      let { token, user } = data.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
    //   signIn({
    //     auth: {
    //       token,
    //       type: "Bearer",
    //     },
    //     userState:{
    //         ...user
    //     }
    //   });
    },
  });
};
