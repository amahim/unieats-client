import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import useAxiosSecure from "../Hooks/UseAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
import SectionTitle from '../SectionTitle/SectionTitle'

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  // Fetch all users
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  // Fetch all meals
  const { data: meals = [] } = useQuery({
    queryKey: ["meals"],
    queryFn: async () => {
      const res = await axiosSecure.get("/meals");
      return res.data;
    },
  });

  const mealsAddedByThisAdmin = meals.filter(m => m.distributor_email === user?.email)

  // const currentUser = users.find((u) => u.email === user?.email);
  const currentUser = users.find((u) => u.email.toLowerCase() === user?.email.toLowerCase());


  return (
    <div className="p-4 md:p-6">
      <SectionTitle heading="My Profile">

      </SectionTitle>
      <div className="mt-6">
        {currentUser ? (
          <div className="glass-effect rounded-3xl border border-white/20 shadow-strong overflow-hidden">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start p-4 md:p-6">
              <div className="md:w-2/5 w-full flex justify-center">
                <div className="relative">
                  <img
                    src={currentUser.photo}
                    alt="My profile pic"
                    className="w-40 h-40 md:w-48 md:h-48 rounded-3xl object-cover border-4 border-white/30 shadow-strong"
                  />
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow-purple">
                    <span className="text-xl">👤</span>
                  </div>
                </div>
              </div>
              <div className="md:w-3/5 w-full space-y-4 md:text-start text-center">
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {currentUser.name}
                </h2>
                <div className="space-y-3 text-white/90 text-sm md:text-base">
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                    <span className="text-white/60 font-medium text-xs md:text-sm">Email:</span>
                    <span className="font-medium break-all">{currentUser.email}</span>
                  </div>
                  {
                    currentUser.role === "Admin" ? (
                      <div className="flex flex-col md:flex-row md:items-center gap-2">
                        <span className="text-white/60 font-medium">Role:</span>
                        <span className="px-4 py-2 rounded-full bg-gradient-secondary text-white font-semibold shadow-medium">
                          {currentUser.role}
                        </span>
                      </div>
                    ):
                    (
                      <div className="flex flex-col md:flex-row md:items-center gap-2">
                        <span className="text-white/60 font-medium text-xs md:text-sm">Badge:</span>
                        <span
                          className={`px-4 py-1.5 text-sm rounded-full text-white font-semibold shadow-medium ${
                            currentUser.membership === "Bronze"
                              ? "bg-gradient-to-r from-yellow-700 to-yellow-600"
                              : currentUser.membership === "Silver"
                              ? "bg-gradient-to-r from-gray-400 to-gray-500"
                              : currentUser.membership === "Gold"
                              ? "bg-gradient-to-r from-yellow-400 to-yellow-600"
                              : currentUser.membership === "Platinum"
                              ? "bg-gradient-to-r from-blue-400 to-purple-600"
                              : "bg-gray-200 text-gray-800"
                          }`}
                        >
                          {currentUser.membership}
                        </span>
                      </div>
                    )
                  }
                  {
                    currentUser.role === "Admin" &&
                      (<div className="flex flex-col md:flex-row md:items-center gap-2">
                        <span className="text-white/60 font-medium">Meals Added:</span>
                        <span className="text-2xl font-bold bg-gradient-tertiary text-transparent bg-clip-text">
                          {mealsAddedByThisAdmin.length}
                        </span>
                      </div>)
                  }
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="glass-effect rounded-3xl border border-white/20 p-8 text-center">
            <p className="text-red-400 text-lg">No user information found!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
