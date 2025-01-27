import React, { useContext } from "react";
import useAxiosSecure from "../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Provider/AuthProvider";
import ShowRequestedMeals from "./ShowRequestedMeals";
import SectionTitle from '../SectionTitle/SectionTitle'

const RequestedMeals = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: meals = [], refetch } = useQuery({
    queryKey: ["meals"],
    queryFn: async () => {
      const res = await axiosSecure.get("/requested-meals");
      return res.data;
    },
  });

  const requestedByMe = meals.filter(m => m.requestedByEmail === user.email)

  return (
    <div>
    <SectionTitle heading="My requested meals" />
    <div className="mt-8">
      {requestedByMe.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            {/* Table Head */}
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border text-left">Title</th>
                <th className="px-4 py-2 border text-center">Like</th>
                <th className="px-4 py-2 border text-center">Reviews</th>
                <th className="px-4 py-2 border text-center">Status</th>
                <th className="px-4 py-2 border text-center">Cancel</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {requestedByMe.map((meal) => (
                <ShowRequestedMeals meal={meal} key={meal._id} refetch={refetch} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h2 className="text-center text-error text-xl md:text-2xl">
          You have not requested for any food yet!
        </h2>
      )}
    </div>
  </div>
  );
};

export default RequestedMeals;
