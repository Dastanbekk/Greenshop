import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../useAxios";

interface UseQueryType {
  pathname: string;
  url: string;
  params?: object;
}

const UseQueryHandler = ({ pathname, url, params }: UseQueryType) => {
  const axios = useAxios();

  return useQuery({
    queryKey: [pathname, params],
    queryFn: () => axios({ url, params }).then((res) => res.data),
  });
};

export default UseQueryHandler;
