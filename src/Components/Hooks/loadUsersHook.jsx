import React, { useContext } from "react";
import useAxiosSecure from "./UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Provider/AuthProvider";

const useLoadUserDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext); // Get logged-in user details

  // Query to load user data
  const { data: users = [], refetch, isLoading } = useQuery({
    queryKey: ["users"], // Cache users data
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data; // Return full list of users
    },
    enabled: !!user?.email, // Prevent fetching until user email is available
  });

  // Filter or find the logged-in user's data
  const loggedInUserDetails = users.find((u) => u.email === user?.email) || null;

  return { loggedInUserDetails, refetch, isLoading };
};

export default useLoadUserDetails;
