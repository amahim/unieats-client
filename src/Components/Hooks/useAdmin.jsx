import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
  const { user } = useContext(AuthContext); 
  const axiosSecure = useAxiosSecure(); 

  
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      if (!user?.email) return false; 
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      return res.data?.isAdmin; 
    },
    enabled: !!user?.email, 
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
