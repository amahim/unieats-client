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
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6">
        <div className="w-full md:w-2/3">
          <label className="bg-slate-900/90 flex items-center gap-3 px-5 py-3 rounded-2xl md:rounded-full border border-slate-800 shadow-inner focus-within:border-orange-500/80 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-5 w-5 text-slate-400"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              className="grow bg-transparent text-white placeholder-slate-400 text-sm md:text-base focus:outline-none"
              placeholder="Search meals by title..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </label>
        </div>
        {/* Filter buttons */}
        <div className="flex justify-end items-center gap-2.5 w-full md:w-auto">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:inline">Sort:</span>
          <button
            className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all ${
              sortBy === "price"
                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25 border border-orange-400/50"
                : "bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
            }`}
            onClick={() => handleSort(sortBy === "price" ? "" : "price")}
          >
            Price
          </button>
          <button
            className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all ${
              sortBy === "category"
                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25 border border-orange-400/50"
                : "bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
            }`}
            onClick={() => handleSort(sortBy === "category" ? "" : "category")}
          >
            Category
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {AvailableMeals.map((meal) => (
          <ShowMeals meal={meal} key={meal._id} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default Meals;
