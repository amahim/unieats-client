import React, { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import useAxiosSecure from "../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import ShowMeals from "./ShowMeals";

const Meals = () => {
  const axiosSecure = useAxiosSecure();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState(""); // State for sorting

  const { data: meals = [], refetch } = useQuery({
    queryKey: ["meals", searchQuery, sortBy],
    queryFn: async () => {
      const res = await axiosSecure.get("/meals", {
        params: { search: searchQuery, sortBy },
      });
      return res.data;
    },
  });

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSort = (type) => {
    setSortBy(type); // Update sorting criteria
  };

  const AvailableMeals = meals.filter((m) => m.schedule === "Available");

  return (
    <div className="w-4/5 mx-auto">
      <div>
        <SectionTitle heading="All Meals" subHeading="Available Meals" />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-2 py-5">
        <div className="md:w-[40%] lg:w-[70%] w-full">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search by meal title"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        {/* Filter buttons */}
        <div className="flex justify-center items-center gap-2 md:w-[60%] lg:w-[30%] w-full">
          <button
            className="btn"
            onClick={() => handleSort("price")} // Sort by price
          >
            Price: Low to High
          </button>
          <button
            className="btn"
            onClick={() => handleSort("category")} // Sort by category
          >
            Category: B-D-L
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4">
        {AvailableMeals.map((meal) => (
          <ShowMeals meal={meal} key={meal._id} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default Meals;
