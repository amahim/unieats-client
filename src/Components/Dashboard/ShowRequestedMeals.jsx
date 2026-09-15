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
    <tr className="hover:bg-slate-800/40 transition-colors duration-150 border-b border-slate-800">
      {/* Name */}
      <td className="px-4 py-4 text-white font-medium">{title}</td>
      {/* Likes */}
      <td className="px-4 py-4 text-center">
        <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-orange-400 border border-slate-700 font-semibold text-xs">
          {likes}
        </span>
      </td>
      {/* Reviews */}
      <td className="px-4 py-4 text-center">
        <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-emerald-400 border border-slate-700 font-semibold text-xs">
          {reviews_count}
        </span>
      </td>
      {/* Request Status */}
      <td className="px-4 py-4 text-center">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            reqStatus === "Requested"
              ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
              : "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
          }`}
        >
          {reqStatus}
        </span>
      </td>
      {/* Cancel Button */}
      <td className="px-4 py-4 text-center">
        <button
          className="btn bg-rose-500/15 hover:bg-rose-500/25 text-rose-400 border border-rose-500/30 rounded-xl btn-sm disabled:opacity-40 disabled:cursor-not-allowed"
          onClick={() => handleCancel(_id)}
          disabled={reqStatus === "Delivered"}
        >
          <MdCancel className="text-base" />
        </button>
      </td>
    </tr>
  );
};

export default ShowRequestedMeals;
