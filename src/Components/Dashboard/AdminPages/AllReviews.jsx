import { useContext } from "react";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../SectionTitle/SectionTitle";
import ShowAllReviews from "./ShowAllReviews";


const AllReviews = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("reviews");
      return res.data;
    },
  });


  return (
    <div>
    <SectionTitle heading="all reviews" />
    <div className="mt-8">
      {reviews.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            {/* Table Head */}
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border text-left">Title</th>
                <th className="px-4 py-2 border text-center">Likes</th>
                <th className="px-4 py-2 border text-center">Reviews Count</th>
                <th className="px-4 py-2 border text-center">Reviewed By</th>
                <th className="px-4 py-2 border text-center">Delete</th>
                <th className="px-4 py-2 border text-center">View</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {reviews.map((rev) => (
                <ShowAllReviews rev={rev} key={rev._id} refetch={refetch} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h2 className="text-center text-error text-xl md:text-2xl">
          There is no review to see!
        </h2>
      )}
    </div>
  </div>
  );
};

export default  AllReviews;
