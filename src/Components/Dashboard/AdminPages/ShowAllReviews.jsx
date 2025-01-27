import axios from "axios";
import { MdCancel } from "react-icons/md";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { FaEye, FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";

const ShowAllReviews = ({ rev, refetch }) => {
  const { revMealId, _id, mealDetails, reviewedByEmail } = rev;
  const { title, likes, reviews_count } = mealDetails;
  const axiosSecure = useAxiosSecure();
  console.log(rev);

  const handleDelete = (revId) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#37f51e",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // First, delete the review
        axios
          .delete(`https://y-eta-roan.vercel.app/reviews/${revId}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              toast.success("Review deleted successfully!");
              refetch();

              //   axiosSecure
              // .patch(`/meals/reviews-minus/${revId}`) // Sending mealId as a URL parameter
              // .then((res) => {
              //   if (res.data.modifiedCount > 0) {
              //     refetch(); // Refetch data to update the frontend
              //   }
              // })
              // .catch((error) => {
              //   console.error("Error updating review count:", error);
              // });
            }
          });
      }
    });
  };

  return (
    <tr className="hover:bg-gray-100">
      {/* Name */}
      <td className="px-4 py-2 border">{title}</td>
      {/* Likes */}
      <td className="px-4 py-2 border text-center">{likes}</td>
      {/* Reviews */}
      <td className="px-4 py-2 border text-center">{reviews_count}</td>
      <td className="px-4 py-2 border text-center">{reviewedByEmail}</td>
      {/* Cancel Button */}
      <td className="px-4 py-2 border text-center text-error">
        <button className="" onClick={() => handleDelete(_id)}>
          <MdCancel />
        </button>
      </td>
      <td className="px-4 py-2 border text-center text-info">
        <button>
          <Link to={`/meals/${revMealId}`}>
            <FaEye />
          </Link>
        </button>
      </td>
    </tr>
  );
};

export default ShowAllReviews;
