
import {
  FaArrowLeft,
  FaComment,
  FaDollarSign,
  FaList,
  FaPen,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { GiHotMeal } from "react-icons/gi";
import useAdmin from "../Hooks/UseAdmin";
import { GiMeal } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";

const Sidebar = () => {
 
  const [isAdmin] = useAdmin();
 

  return (
    <div className="">
      <div className=" drawer md:drawer-open drawer-closed z-50">
        <input id="my-drawer" type="checkbox" className="drawer-toggle  " />
        <div className="drawer-content  ">
          <label
            htmlFor="my-drawer"
            className="md:mt-0 md:ml-0 mt-4 ml-4 text-black text-2xl drawer-button block md:hidden"
          >
            <FaList className="w-4"/>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu bg-white md:w-80 w-64 p-4">
            <div className="md:px-5 md:py-10 " >
              <p className="text-3xl md:text-4xl">Dashboard</p>
              <div className="divider"></div>
              <div className="flex flex-col gap-6">
                {/* NavLink Items */}
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `text-xl md:text-2xl flex gap-2 items-center md:gap-4 ${
                      isActive ? " bg-[#FFD372] py-2 px-2" : ""
                    }`
                  }
                  end
                >
                  <p>
                    <FaUser />
                  </p>
                  <p>My Profile</p>
                </NavLink>

                { isAdmin ? (
                  <div className="flex flex-col gap-6 ">
                    <NavLink
                      to="/dashboard/admin/manage-users"
                      className={({ isActive }) =>
                        `text-xl md:text-2xl flex gap-2 items-center md:gap-4 ${
                          isActive ? " bg-[#FFD372] py-2 px-2" : ""
                        }`
                      }
                    >
                      <p>
                        <FaUsers />
                      </p>
                      <p>Manage Users</p>
                    </NavLink>
                    <NavLink
                      to="/dashboard/admin/add-meal"
                      className={({ isActive }) =>
                        `text-xl md:text-2xl flex gap-2 items-center md:gap-4 ${
                          isActive ? " bg-[#FFD372] py-2 px-2" : ""
                        }`
                      }
                    >
                      <p>
                        <FaBowlFood />
                      </p>
                      <p>Add Meal</p>
                    </NavLink>
                    <NavLink
                      to="/dashboard/admin/all-meals"
                      className={({ isActive }) =>
                        `text-xl md:text-2xl flex gap-2 items-center md:gap-4 ${
                          isActive ? " bg-[#FFD372] py-2 px-2" : ""
                        }`
                      }
                    >
                      <p>
                      <IoFastFood />
                      </p>
                      <p>All Meals</p>
                    </NavLink>
                    <NavLink
                      to="/dashboard/admin/Reviews"
                      className={({ isActive }) =>
                        `text-xl md:text-2xl flex gap-2 items-center md:gap-4 ${
                          isActive ? " bg-[#FFD372] py-2 px-2" : ""
                        }`
                      }
                    >
                      <p>
                      <FaComment />
                      </p>
                      <p>Reviews</p>
                    </NavLink>
                    <NavLink
                      to="/dashboard/admin/serve-meals"
                      className={({ isActive }) =>
                        `text-xl md:text-2xl flex gap-2 items-center md:gap-4 ${
                          isActive ? " bg-[#FFD372] py-2 px-2" : ""
                        }`
                      }
                    >
                      <p>
                      <GiMeal />
                      </p>
                      <p>Serve Meals</p>
                    </NavLink>
                    <NavLink
                      to="/dashboard/admin/upcoming"
                      className={({ isActive }) =>
                        `text-xl md:text-2xl flex gap-2 items-center md:gap-4 ${
                          isActive ? " bg-[#FFD372] py-2 px-2" : ""
                        }`
                      }
                    >
                      <p>
                      <GiHotMeal />
                      </p>
                      <p>Upcoming Meals</p>
                    </NavLink>

                    
                  </div>
                ) : (
                  <div className="flex flex-col gap-6 ">
                    <NavLink
                      to="/dashboard/requested-meals"
                      className={({ isActive }) =>
                        `text-xl md:text-2xl flex gap-2 items-center md:gap-4 ${
                          isActive ? " bg-[#FFD372] py-2 px-2" : ""
                        }`
                      }
                    >
                      <p>
                        <FaBowlFood />
                      </p>
                      <p>Requested Meals</p>
                    </NavLink>

                    <NavLink
                      to="/dashboard/my-reviews"
                      className={({ isActive }) =>
                        `text-xl md:text-2xl flex gap-2 items-center md:gap-4 ${
                          isActive ? " bg-[#FFD372] py-2 px-2" : ""
                        }`
                      }
                    >
                      <p>
                        <FaPen />
                      </p>
                      <p>My Reviews</p>
                    </NavLink>

                    <NavLink
                      to="/dashboard/payment-history"
                      className={({ isActive }) =>
                        `text-xl md:text-2xl flex gap-2 items-center md:gap-4 ${
                          isActive ? " bg-[#FFD372] py-2 px-2" : ""
                        }`
                      }
                    >
                      <p>
                        <FaDollarSign />
                      </p>
                      <p>Payment History</p>
                    </NavLink>
                  </div>
                )}

                <Link to="/" className="rounded-none btn   w-full ">
                  <p>
                    <FaArrowLeft />
                  </p>
                  <p>Go To Home</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
