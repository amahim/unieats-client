import React from "react";
import { GrUserAdmin } from "react-icons/gr";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const ShowUsers = ({ user, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to make ${user.name} an Admin?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make Admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            toast.success(`${user?.name} is an Admin now!`);
            refetch();
          }
        });
      }
    });
  };

  return (
    <tr className="hover:bg-gray-100 ">
      <td className="px-4 py-2 border">{user.name}</td>
      <td className="px-4 py-2 border">{user.email}</td>
      <td className="px-4 py-2 border text-center">
        {user.role === "Admin" ? (
          <span className="text-green-500 font-bold">Admin</span>
        ) : (
          <div className="flex justify-center items-center gap-2">
            <span className="font-bold">{user.role}</span>
            <button
              className="btn btn-sm btn-success"
              onClick={() => handleMakeAdmin(user)}
            >
              <GrUserAdmin />
            </button>
          </div>
        )}
      </td>
      <td className="px-4 py-2 border text-center">{user.membership}</td>
    </tr>
  );
};

export default ShowUsers;
