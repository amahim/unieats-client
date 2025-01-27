import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import SectionTitle from "../../SectionTitle/SectionTitle";
import ShowAllMeals from "./ShowAllMeals";

const AllMeals = () => {
  const [sortBy, setSortBy] = useState("");
  const axiosSecure = useAxiosSecure();

  const { data: meals = [], refetch } = useQuery({
    queryKey: ["meals", sortBy],
    queryFn: async () => {
      const res = await axiosSecure.get(`/meals?sortBy=${sortBy}`);
      return res.data;
    },
  });

  const handleSortByLikes = () => {
    setSortBy("likes");
  };

  const handleSortByReviews = () => {
    setSortBy("reviews_count");
  };

  return (
    <div>
      <SectionTitle heading="All Meals" />
      <div className="flex gap-4 md:justify-between justify-start">
        <button
          className="btn bg-[#ffffff] rounded-lg text-black border-none"
          onClick={handleSortByLikes}
        >
          Sort By Likes
        </button>
        <button
          className="btn bg-[#ffffff] rounded-lg text-black border-none"
          onClick={handleSortByReviews}
        >
          Sort By Reviews
        </button>
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="table">
          {/* Table Head */}
          <thead>
            <tr className="">
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border text-center">Likes</th>
              <th className="px-4 py-2 border text-center">Reviews</th>
              <th className="px-4 py-2 border text-center">Distributor</th>
              <th className="px-4 py-2 border text-center">View</th>
              <th className="px-4 py-2 border text-center">Update</th>
              <th className="px-4 py-2 border text-center">Delete</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {meals.map((meal) => (
              <ShowAllMeals meal={meal} key={meal._id} refetch={refetch} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllMeals;
