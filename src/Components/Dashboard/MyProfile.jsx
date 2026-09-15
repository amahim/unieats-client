import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import useAxiosSecure from "../Hooks/UseAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
import SectionTitle from "../SectionTitle/SectionTitle";

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

  const mealsAddedByThisAdmin = meals.filter(
    (m) => m.distributor_email === user?.email
  );

  // const currentUser = users.find((u) => u.email === user?.email);
  const currentUser = users.find(
    (u) => u.email.toLowerCase() === user?.email.toLowerCase()
  );

  return (
    <div className="p-4 md:p-6">
      <SectionTitle heading="My Profile"></SectionTitle>
      <div className="mt-6 max-w-3xl">
        {currentUser ? (
          <div className="bg-slate-900/95 rounded-2xl border border-slate-800 shadow-xl overflow-hidden">
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start p-6 md:p-8">
              <div className="sm:w-1/3 flex justify-center">
                <div className="relative">
                  <img
                    src={currentUser.photo}
                    alt="My profile pic"
                    className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border-2 border-slate-700 shadow-xl"
                  />
                  <div className="absolute -bottom-2 -right-2 w-9 h-9 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg text-sm">
                    👤
                  </div>
                </div>
              </div>
              <div className="sm:w-2/3 space-y-4 sm:text-start text-center">
                <div>
                  <h2 className="text-2xl font-extrabold text-white tracking-tight">
                    {currentUser.name}
                  </h2>
                  <p className="text-slate-400 text-sm mt-0.5 break-all">
                    {currentUser.email}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-800/80 text-sm">
                  {currentUser.role === "Admin" ? (
                    <div className="flex items-center sm:justify-start justify-center gap-2">
                      <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Role:</span>
                      <span className="px-3.5 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 font-bold text-xs">
                        Administrator
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center sm:justify-start justify-center gap-2">
                      <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                        Badge Tier:
                      </span>
                      <span
                        className={`px-3.5 py-1 text-xs rounded-full font-bold uppercase tracking-wider ${
                          currentUser.membership === "Bronze"
                            ? "bg-amber-900/40 text-amber-300 border border-amber-700/50"
                            : currentUser.membership === "Silver"
                            ? "bg-slate-800 text-slate-200 border border-slate-600"
                            : currentUser.membership === "Gold"
                            ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                            : currentUser.membership === "Platinum"
                            ? "bg-purple-500/20 text-purple-300 border border-purple-500/40"
                            : "bg-slate-800 text-slate-300"
                        }`}
                      >
                        {currentUser.membership}
                      </span>
                    </div>
                  )}
                  {currentUser.role === "Admin" && (
                    <div className="flex items-center sm:justify-start justify-center gap-2 pt-1">
                      <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                        Meals Added:
                      </span>
                      <span className="text-xl font-extrabold text-orange-400">
                        {mealsAddedByThisAdmin.length}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-8 text-center">
            <p className="text-rose-400 text-base">No user profile information found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
