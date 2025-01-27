import React, { useState } from "react";
import axios from "axios";
import { MdCancel } from "react-icons/md";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { FaEye, FaPen } from "react-icons/fa";
import useAxiosSecure from "../Hooks/UseAxiosSecure";
import { Link } from "react-router-dom";

const ShowReviews = ({ rev, refetch }) => {
  const { revMealId, _id, reviewText, mealDetails } = rev;
  const { title, likes } = mealDetails;
  const axiosSecure = useAxiosSecure();

  // Modal state
  const [isEditing, setIsEditing] = useState(false);
  const [updatedReview, setUpdatedReview] = useState(reviewText);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    axiosSecure
      .patch(`/reviews/${_id}`, { reviewText: updatedReview })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Review updated successfully!");
          setIsEditing(false);
          refetch(); // Trigger refetch to update the review
        }
      });
  };

  const handleCancel = (revId) => {
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
              // Now decrement the reviews count
              // axiosSecure
              //   .patch(`/meals/reviews-minus`, { mealId: revMealId })
              //   .then((res) => {
              //     if (res.data.modifiedCount > 0) {
              //       refetch(); // Trigger refetch to update reviews count
              //     }
              //   });
            }
          });
      }
    });
  };

  return (
    <>
      <tr className="hover:bg-gray-100">
        {/* Name */}
        <td className="px-4 py-2 border">{title}</td>
        {/* Likes */}
        <td className="px-4 py-2 border text-center">{likes}</td>
        {/* Reviews */}
        <td className="px-4 py-2 border">{reviewText}</td>
        {/* Edit */}
        <td className="px-4 py-2 border text-center text-primary">
          <button onClick={handleEdit}>
            <FaPen />
          </button>
        </td>
        {/* Cancel Button */}
        <td className="px-4 py-2 border text-center text-error">
          <button className="" onClick={() => handleCancel(_id)}>
            <MdCancel />
          </button>
        </td>
        {/* View */}
        <td className="px-4 py-2 border text-center text-info">
          <button>
            <Link to={`/meals/${revMealId}`}>
              <FaEye />
            </Link>
          </button>
        </td>
      </tr>

      {/* Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-3/4 max-w-lg">
            <h3 className="text-lg font-bold mb-4">Edit Review</h3>
            <textarea
              className="w-full p-2 border rounded-md"
              rows="5"
              value={updatedReview}
              onChange={(e) => setUpdatedReview(e.target.value)}
            ></textarea>
            <div className="flex justify-end gap-2 mt-4">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md"
                onClick={handleUpdate}
              >
                Update
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowReviews;
