import { TbTruckDelivery } from "react-icons/tb";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import toast from "react-hot-toast";

const ShowServeMeals = ({ meal, refetch }) => {
  const { _id, reqStatus, requestedByEmail, requestedByName, mealDetails } = meal;
  const axiosSecure = useAxiosSecure();

  // Safely destructure mealDetails
  const title = mealDetails?.title || "N/A"; // Default to "N/A" if mealDetails or title is undefined

  const handleDeliver = (reqMealId) => {
    axiosSecure
      .patch(`/requested-meals/status`, {
        reqMealId,
        reqStatus: "Delivered",
      })
      .then((updateRes) => {
        if (updateRes.data.modifiedCount > 0) {
          toast.success("Meal has been served!");
          refetch();
        }
      });
  };

  return (
    <tr className="hover:bg-gray-100">
      {/* Name */}
      <td className="px-4 py-2 border">{title}</td>
      {/* Requested By Email */}
      <td className="px-4 py-2 border text-center">{requestedByEmail}</td>
      {/* Requested By Name */}
      <td className="px-4 py-2 border text-center">{requestedByName}</td>
      {/* Request Status */}
      <td
        className={`px-4 py-2 border text-center ${
          reqStatus === "Requested" ? "text-primary" : "text-success font-bold"
        }`}
      >
        {reqStatus}
      </td>
      {/* Delivery Button */}
      <td className="px-4 py-2 border text-center">
        <button
          className="btn btn-success"
          onClick={() => handleDeliver(_id)}
          disabled={reqStatus === "Delivered"} 
        >
          <TbTruckDelivery />
        </button>
      </td>
    </tr>
  );
};

export default ShowServeMeals;
