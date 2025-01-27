import { useQuery } from "@tanstack/react-query";
import ShowServeMeals from "./ShowServeMeals";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { useState } from "react";

const ServeMeals = () => {
  const axiosSecure = useAxiosSecure();
  
    const [searchQuery, setSearchQuery] = useState("");


  const { data: meals = [], refetch } = useQuery({
    queryKey: ["meals", searchQuery],
    queryFn: async () => {
      const res = await axiosSecure.get("/requested-meals", {
        params: { search: searchQuery },
      });
      return res.data;
    },
  });

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };


  return (
    <div>
    <SectionTitle heading="Serve meals" />
    <div>
    <label className="input input-bordered flex items-center gap-2">
  <input 
  type="text" 
  className="grow" 
  placeholder="Search by name or email"
  value={searchQuery}
  onChange={handleSearchChange}
               />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
    </div>
    <div className="mt-8">
      {meals.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            {/* Table Head */}
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border text-left">Title</th>
                <th className="px-4 py-2 border text-center">Req By Email</th>
                <th className="px-4 py-2 border text-center">Req By Name</th>
                <th className="px-4 py-2 border text-center">Status</th>
                <th className="px-4 py-2 border text-center">Serve</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {meals.slice().reverse().map((meal) => (
                <ShowServeMeals meal={meal} key={meal._id} refetch={refetch} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h2 className="text-center text-error text-xl md:text-2xl">
          Currently no meals are requested!
        </h2>
      )}
    </div>
  </div>
  );
};

export default ServeMeals;
