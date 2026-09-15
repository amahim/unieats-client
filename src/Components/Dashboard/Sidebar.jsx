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
      <div className="drawer md:drawer-open drawer-closed z-50">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            className="md:mt-0 md:ml-0 mt-6 ml-6 text-white text-2xl drawer-button block md:hidden bg-slate-900 p-3 rounded-full border border-slate-800 shadow-xl cursor-pointer"
          >
            <FaList className="w-5 h-5 text-orange-400" />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu bg-slate-950 border-r border-slate-800 md:w-64 w-60 p-4 min-h-screen">
            <div className="md:px-2 md:py-4">
              <h2 className="text-2xl font-extrabold text-white mb-2 tracking-tight">
                Uni<span className="text-orange-500">Eats</span>
              </h2>
              <div className="w-10 h-1 bg-orange-500 rounded-full mb-6"></div>
              <div className="flex flex-col gap-2">
                {/* NavLink Items */}
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `text-sm flex gap-3 items-center px-3.5 py-2.5 rounded-xl transition-all font-medium ${
                      isActive
                        ? "bg-orange-500/15 text-orange-400 font-semibold border border-orange-500/30"
                        : "text-slate-300 hover:text-white hover:bg-slate-900"
                    }`
                  }
                  end
                >
                  <FaUser className="text-base" />
                  <span>My Profile</span>
                </NavLink>

                {isAdmin ? (
                  <div className="flex flex-col gap-2 pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 px-3.5 py-1">Admin Panel</span>
                    <NavLink
                      to="/dashboard/admin/manage-users"
                      className={({ isActive }) =>
                        `text-sm flex gap-3 items-center px-3.5 py-2.5 rounded-xl transition-all font-medium ${
                          isActive
                            ? "bg-orange-500/15 text-orange-400 font-semibold border border-orange-500/30"
                            : "text-slate-300 hover:text-white hover:bg-slate-900"
                        }`
                      }
                    >
                      <FaUsers className="text-base" />
                      <span>Manage Users</span>
                    </NavLink>
                    <NavLink
                      to="/dashboard/admin/add-meal"
                      className={({ isActive }) =>
                        `text-sm flex gap-3 items-center px-3.5 py-2.5 rounded-xl transition-all font-medium ${
                          isActive
                            ? "bg-orange-500/15 text-orange-400 font-semibold border border-orange-500/30"
                            : "text-slate-300 hover:text-white hover:bg-slate-900"
                        }`
                      }
                    >
                      <FaBowlFood className="text-base" />
                      <span>Add Meal</span>
                    </NavLink>
                    <NavLink
                      to="/dashboard/admin/all-meals"
                      className={({ isActive }) =>
                        `text-sm flex gap-3 items-center px-3.5 py-2.5 rounded-xl transition-all font-medium ${
                          isActive
                            ? "bg-orange-500/15 text-orange-400 font-semibold border border-orange-500/30"
                            : "text-slate-300 hover:text-white hover:bg-slate-900"
                        }`
                      }
                    >
                      <IoFastFood className="text-base" />
                      <span>All Meals</span>
                    </NavLink>
                    <NavLink
                      to="/dashboard/admin/Reviews"
                      className={({ isActive }) =>
                        `text-sm flex gap-3 items-center px-3.5 py-2.5 rounded-xl transition-all font-medium ${
                          isActive
                            ? "bg-orange-500/15 text-orange-400 font-semibold border border-orange-500/30"
                            : "text-slate-300 hover:text-white hover:bg-slate-900"
                        }`
                      }
                    >
                      <FaComment className="text-base" />
                      <span>Reviews</span>
                    </NavLink>
                    <NavLink
                      to="/dashboard/admin/serve-meals"
                      className={({ isActive }) =>
                        `text-sm flex gap-3 items-center px-3.5 py-2.5 rounded-xl transition-all font-medium ${
                          isActive
                            ? "bg-orange-500/15 text-orange-400 font-semibold border border-orange-500/30"
                            : "text-slate-300 hover:text-white hover:bg-slate-900"
                        }`
                      }
                    >
                      <GiMeal className="text-base" />
                      <span>Serve Meals</span>
                    </NavLink>
                    <NavLink
                      to="/dashboard/admin/upcoming"
                      className={({ isActive }) =>
                        `text-sm flex gap-3 items-center px-3.5 py-2.5 rounded-xl transition-all font-medium ${
                          isActive
                            ? "bg-orange-500/15 text-orange-400 font-semibold border border-orange-500/30"
                            : "text-slate-300 hover:text-white hover:bg-slate-900"
                        }`
                      }
                    >
                      <GiHotMeal className="text-base" />
                      <span>Upcoming Meals</span>
                    </NavLink>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2 pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 px-3.5 py-1">Student Menu</span>
                    <NavLink
                      to="/dashboard/requested-meals"
                      className={({ isActive }) =>
                        `text-sm flex gap-3 items-center px-3.5 py-2.5 rounded-xl transition-all font-medium ${
                          isActive
                            ? "bg-orange-500/15 text-orange-400 font-semibold border border-orange-500/30"
                            : "text-slate-300 hover:text-white hover:bg-slate-900"
                        }`
                      }
                    >
                      <FaBowlFood className="text-base" />
                      <span>Requested Meals</span>
                    </NavLink>

                    <NavLink
                      to="/dashboard/my-reviews"
                      className={({ isActive }) =>
                        `text-sm flex gap-3 items-center px-3.5 py-2.5 rounded-xl transition-all font-medium ${
                          isActive
                            ? "bg-orange-500/15 text-orange-400 font-semibold border border-orange-500/30"
                            : "text-slate-300 hover:text-white hover:bg-slate-900"
                        }`
                      }
                    >
                      <FaPen className="text-base" />
                      <span>My Reviews</span>
                    </NavLink>

                    <NavLink
                      to="/dashboard/payment-history"
                      className={({ isActive }) =>
                        `text-sm flex gap-3 items-center px-3.5 py-2.5 rounded-xl transition-all font-medium ${
                          isActive
                            ? "bg-orange-500/15 text-orange-400 font-semibold border border-orange-500/30"
                            : "text-slate-300 hover:text-white hover:bg-slate-900"
                        }`
                      }
                    >
                      <FaDollarSign className="text-base" />
                      <span>Payment History</span>
                    </NavLink>
                  </div>
                )}

                <div className="pt-4 mt-4 border-t border-slate-800">
                  <Link
                    to="/"
                    className="btn bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white rounded-xl w-full btn-sm flex items-center justify-center gap-2 font-semibold"
                  >
                    <FaArrowLeft />
                    <span>Back to Home</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
