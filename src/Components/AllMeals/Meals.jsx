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
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div>
        <SectionTitle heading="All Meals" subHeading="Available Meals" />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4 py-6">
        <div className="md:w-[60%] lg:w-[70%] w-full">
          <label className="glass-effect flex items-center gap-3 px-5 py-3 rounded-full border border-white/30">
            <input
              type="text"
              className="grow bg-transparent text-white placeholder-white/60 focus:outline-none"
              placeholder="Search by meal title"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-5 w-5 text-white/70"
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
        <div className="flex justify-center items-center gap-3 md:w-[40%] lg:w-[30%] w-full">
          <button
            className="btn btn-gradient-tertiary rounded-full px-6 text-white font-medium shadow-medium hover:shadow-glow-blue transition-all duration-300 text-sm md:text-base"
            onClick={() => handleSort("price")} // Sort by price
          >
            Price
          </button>
          <button
            className="btn btn-gradient-secondary rounded-full px-6 text-white font-medium shadow-medium hover:shadow-glow-pink transition-all duration-300 text-sm md:text-base"
            onClick={() => handleSort("category")} // Sort by category
          >
            Category
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {AvailableMeals.map((meal) => (
          <ShowMeals meal={meal} key={meal._id} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default Meals;
