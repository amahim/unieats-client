import axios from "axios";
import { MdCancel } from "react-icons/md";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const ShowRequestedMeals = ({ meal, refetch }) => {
  const { _id, reqStatus, mealDetails } = meal;
  const { title, likes, reviews_count } = mealDetails;

  const handleCancel = (mealId) => {
    Swal.fire({
      title: "Are you sure?",
      //   text: "This action will cancel your request.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#37f51e",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://y-eta-roan.vercel.app/requested-meals/${mealId}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              toast.success("Request canceled successfully!");
              refetch();
            }
          });
      }
    });
  };

  return (
    <tr className="hover:bg-white/10 transition-colors duration-200 border-b border-white/10">
      {/* Name */}
      <td className="px-4 py-4 text-white font-medium">{title}</td>
      {/* Likes */}
      <td className="px-4 py-4 text-center">
        <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-medium">{likes}</span>
      </td>
      {/* Reviews */}
      <td className="px-4 py-4 text-center">
        <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 font-medium">{reviews_count}</span>
      </td>
      {/* Request Status */}
      <td className="px-4 py-4 text-center">
        <span
          className={`px-4 py-2 rounded-full font-semibold ${
            reqStatus === "Requested" 
              ? "bg-yellow-500/20 text-yellow-300" 
              : "bg-green-500/20 text-green-300"
          }`}
        >
          {reqStatus}
        </span>
      </td>
      {/* Cancel Button */}
      <td className="px-4 py-4 text-center">
        <button
          className="btn btn-gradient-secondary rounded-full btn-sm text-white disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => handleCancel(_id)}
          disabled={reqStatus === "Delivered"}
        >
          <MdCancel className="text-lg" />
        </button>
      </td>
    </tr>
  );
};

export default ShowRequestedMeals;
