import React, { useState } from "react";
import { FaEye, FaPen } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import OpenMealModal from "./OpenMealModal";
import axios from "axios";

const ShowAllMeals = ({ meal, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handleMealDlt = (mealId) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#37f51e",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`https://y-eta-roan.vercel.app/meals/${mealId}`)
            .then((res) => {
              if (res.data.deletedCount > 0) {
                toast.success("Meal deleted successfully!");
                refetch();
              }
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEditMeal = (meal) => {
    setSelectedMeal(meal);
    setIsModalOpen(true);
  };

  return (
    <tr className="hover:bg-gray-100">
      <td className="px-4 py-2 border">{meal.title}</td>
      <td className="px-4 py-2 border text-center">{meal.likes}</td>
      <td className="px-4 py-2 border text-center">{meal.reviews_count}</td>
      <td className="px-4 py-2 border text-center">{meal.distributor_name}</td>
      <td className="px-4 py-2 border text-info ">
        <Link to={`/meals/${meal._id}`}>
          <FaEye />
        </Link>
      </td>
      <td className="px-4 py-2 border text-primary text-center">
        <button onClick={() => handleEditMeal(meal)}>
          <FaPen />
        </button>
      </td>
      <td className="px-4 py-2 border text-error text-center">
        <button onClick={() => handleMealDlt(meal._id)}>
          <MdDeleteForever />
        </button>
      </td>
      {isModalOpen && (
        <OpenMealModal
          meal={selectedMeal}
          onClose={() => setIsModalOpen(false)}
          refetch={refetch}
        />
      )}
    </tr>
  );
};

export default ShowAllMeals;
