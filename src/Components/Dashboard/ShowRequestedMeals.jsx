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
    <tr className="hover:bg-gray-100">
      {/* Name */}
      <td className="px-4 py-2 border">{title}</td>
      {/* Likes */}
      <td className="px-4 py-2 border text-center">{likes}</td>
      {/* Reviews */}
      <td className="px-4 py-2 border text-center">{reviews_count}</td>
      {/* Request Status */}
      <td
        className={`px-4 py-2 border text-center ${
          reqStatus === "Requested" ? "text-primary" : "text-success font-bold"
        }`}
      >
        {reqStatus}
      </td>
      {/* Cancel Button */}
      <td className="px-4 py-2 border text-center">
        <button
          className="btn btn-error"
          onClick={() => handleCancel(_id)}
          disabled={reqStatus === "Delivered"}
        >
          <MdCancel />
        </button>
      </td>
    </tr>
  );
};

export default ShowRequestedMeals;
