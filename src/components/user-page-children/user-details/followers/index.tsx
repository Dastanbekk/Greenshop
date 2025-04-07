import { UserDataType } from "../../../../@types";
import UseQueryHandler from "../../../../hooks/useQuery";

type Props = {
  userData: UserDataType;
};

const Followers = ({ userData }: Props) => {
  let id = userData?.followers?.[0];
  const { data, isError, isPending } = UseQueryHandler({
    url: `user/by_id/${id}`,
    pathname: "user-follower",
  });
  if (isError || isPending) {
    <p>Loading...</p>;
  }
  return (
    <div>
      <p>{data?.userName}</p>
    </div>
  );
};

export default Followers;
