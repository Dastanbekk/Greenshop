import { UserDataType } from "../../../../@types";

type Props = {
  userData: UserDataType;
};

const About = ({ userData }: Props) => {
  return (
    <div className="flex justify-center font-bold flex-wrap gap-5">
      <p>Name: {userData?.name}</p>
      <p>Surname: {userData?.surname}</p>
      <p>Username: {userData?.username}</p>
      <p>Email: {userData?.email}</p>
      <p>Number:{userData?.phone_number}</p>
    </div>
  );
};

export default About;
