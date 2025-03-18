import { Modal } from "antd";
import { useState } from "react";
import Login from "./login";
import Register from "./register";

const AuthorizationModals = () => {
  const [state, setState] = useState(true);
  const [openModal, setOpenModal] = useState(true);
  return (
    <Modal open={openModal} footer={false} onCancel={() => setOpenModal (false)}>
      <div className="flex mt-10 justify-center gap-5 text-[18px] items-center">
        <h3
          onClick={() => setState(true)}
          className={`${state == true && " text-green-500"}`}
        >
          Login
        </h3>
        <div className="!w-[2px] !h-[20px] !bg-black"></div>
        <h3
          onClick={() => setState(false)}
          className={`${state == false && " text-green-500"}`}
        >
          Register
        </h3>
      </div>

      <div className="mt-5 flex justify-center">
        {state ? <Login /> : <Register />}
      </div>
    </Modal>
  );
};

export default AuthorizationModals;
