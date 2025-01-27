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
    <div className="">
      {/* <div className="text-2xl md:text-3xl lg:text-3xl text-black font-medium text-center">
        My Profile
      </div> */}
      <SectionTitle heading="My Profile">

      </SectionTitle>
      <div className="p-4 mt-4 bg-gray-100 rounded-lg shadow-md">
        {currentUser ? (
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center md:justify-start p-4">
            <div className="md:w-2/5 w-full">
              <img
                src={currentUser.photo}
                alt="My profile pic"
                className="lg:w-64 md:w-48 w-64"
              />
            </div>
            <div className="md:w-3/5 w-full md:space-y-8 space-y-4 md:text-start text-center">
              <h2 className="text-xl font-semibold">
                Name: {currentUser.name}
              </h2>
              <p className="text-lg font-semibold">
                Email: {currentUser.email}
              </p>
              {
                currentUser.role === "Admin" ? (
                  <p className="text-lg font-semibold">
                  Role: 
                     {currentUser.role}
               
                </p>
                ):
                (
                  <p className="text-lg font-semibold">
                Badge:
                <span
                  className={`px-4 py-1 rounded-lg text-black ${
                    currentUser.membership === "Bronze"
                      ? "bg-yellow-700"
                      : currentUser.membership === "Silver"
                      ? "bg-gray-400"
                      : currentUser.membership === "Gold"
                      ? "bg-yellow-500"
                      : currentUser.membership === "Platinum"
                      ? "bg-blue-500"
                      : "bg-gray-200"
                  }`}
                >
                  {currentUser.membership}
                </span>
              </p>
                )
              }
              {
                currentUser.role === "Admin" ?
                  (<p className="text-lg font-semibold">Meals added:        
                  {mealsAddedByThisAdmin.length}</p>):(
                    <p></p>
                  )
                
              }
            </div>
          </div>
        ) : (
          <p className="text-red-500">No user information found!</p>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
