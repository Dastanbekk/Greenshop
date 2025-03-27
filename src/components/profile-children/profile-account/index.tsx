import { useLocation, useNavigate } from "react-router-dom";
import { path_profile } from "../../../utils";

const ProfileAccount = () => {
  const active_style: string =
    "text-[#46a358] border-l-4 bg-white border-[#45a358] py-4 border-l-4  cursor-pointer  text-[#46a358] bg-white   border-[#45a358] p-4 flex gap-2 text-[20px]";
  const { pathname } = useLocation();
  const second_path = pathname.slice(9);
  const navigate = useNavigate();
  return (
    <div className="py-5 sm:py-10">
      <div className="bg-[#FBFBFB] ">
        <h3 className="font-bold mb-3 p-4 text-[20px]">My Account</h3>
        <div className="flex flex-col  gap-2">
          {path_profile.map(({ Icon, id, title, path }) => (
            <div
              onClick={() => navigate(`/profile/${path}`)}
              key={id}
              className={` ${
                path === second_path ? active_style : "border-l-transparent"
              } py-4 border-l-4  cursor-pointer  hover:text-[#46a358] hover:bg-white   hover:border-[#45a358] p-4 flex gap-2 text-[20px]`}
            >
              <Icon />
              <h3 className="text-[18px]">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileAccount;
