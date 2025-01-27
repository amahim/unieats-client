import React, { useContext } from "react";
import useAxiosSecure from "../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Provider/AuthProvider";
import SectionTitle from '../SectionTitle/SectionTitle'
import ShowReviews from "./ShowReviews";

const Reviews = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reviews");
      return res.data;
    },
  });

  const reviewedByMe = reviews.filter(r => r.reviewedByEmail === user.email)

  return (
    <div>
    <SectionTitle heading="My reviewed meals" />
    <div className="mt-8">
      {reviewedByMe.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            {/* Table Head */}
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border text-left">Title</th>
                <th className="px-4 py-2 border text-center">Likes</th>
                <th className="px-4 py-2 border text-left">Review</th>
                <th className="px-4 py-2 border text-center">Edit</th>
                <th className="px-4 py-2 border text-center">Delete</th>
                <th className="px-4 py-2 border text-center">View</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {reviewedByMe.map((rev) => (
                <ShowReviews rev={rev} key={rev._id} refetch={refetch} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h2 className="text-center text-error text-xl md:text-2xl">
          You have not reviewed any food yet!
        </h2>
      )}
    </div>
  </div>
  );
};

export default  Reviews;
