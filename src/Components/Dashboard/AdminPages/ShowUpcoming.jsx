
import React from 'react';
import { MdPublishedWithChanges, MdSchedule } from 'react-icons/md';
import useAxiosSecure from '../../Hooks/UseAxiosSecure';
import toast from 'react-hot-toast';

const ShowUpcoming = ({ meal, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const publishUpcoming =  (meal) => {
 
    axiosSecure
    .patch(`meal/${meal._id}`, {
      
      schedule: "Available",
    })
    .then((updateRes) => {
      if (updateRes.data.modifiedCount > 0) {
        toast.success("Meal has been published!");
        refetch();
      }
    })
    
    
  };

  return (
    <tr className="hover:bg-gray-100">
      {/* Title */}
      <td className="px-4 py-2 border">{meal.title}</td>
      {/* Likes */}
      <td className="px-4 py-2 border text-center">{meal.likes}</td>
      {/* Distributor */}
      <td className="px-4 py-2 border text-center">{meal.distributor_name}</td>
      {/* View */}
      <td className="px-4 py-2 border text-info text-center">
        <button
          className="btn btn-success"
          onClick={() => publishUpcoming(meal)}
        >
          <MdPublishedWithChanges />
        </button>
      </td>
    </tr>
  );
};

export default ShowUpcoming;
