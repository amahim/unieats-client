import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./UseAxiosSecure";

const useRefetch = (key, endpoint) => {
  const axiosSecure = useAxiosSecure();

  const { data, isLoading, refetch, error } = useQuery({
    queryKey: [key],
    queryFn: async () => {
      const response = await axiosSecure.get(endpoint);
      return response.data;
    },
  });

  return { data, isLoading, refetch, error };
};

export default useRefetch;

