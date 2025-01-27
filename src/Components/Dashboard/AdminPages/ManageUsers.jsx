import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../SectionTitle/SectionTitle";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import ShowUsers from "./ShowUsers";
import { useState } from "react";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [searchQuery, setSearchQuery] = useState("");

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users", searchQuery],
    queryFn: async () => {
      const res = await axiosSecure.get("/users", {
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
      <SectionTitle heading="Manage Users" />
      <div>
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
        <div className="overflow-x-auto mt-4">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th className="text-center">Role</th>
                <th className="text-center">Badge</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <ShowUsers user={user} key={user._id} refetch={refetch} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
