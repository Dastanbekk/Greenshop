import { Outlet } from "react-router-dom";
import ProfileAccount from "./profile-account";

const ProfileChildren = () => {
  return (
    <div className="py-5 sm:py-10">
      <div className="containerr ">
        <div className="grid gap-5  grid-cols-1 sm:grid-cols-[28%_minmax(70%,_1fr)]">
          <ProfileAccount />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileChildren;
