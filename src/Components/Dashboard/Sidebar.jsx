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
            className="md:mt-0 md:ml-0 mt-6 ml-6 text-white text-2xl drawer-button block md:hidden glass-effect p-3 rounded-full border border-white/30"
          >
            <FaList className="w-5 h-5" />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu glass-effect border-r border-white/20 md:w-64 w-60 p-4">
            <div className="md:px-2 md:py-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Dashboard
              </h2>
              <div className="w-16 h-1 bg-gradient-primary rounded-full mb-4"></div>
              <div className="flex flex-col gap-3">
                {/* NavLink Items */}
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `text-sm md:text-base flex gap-2 items-center px-3 py-2 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-white text-transparent bg-clip-text bg-gradient-primary font-semibold shadow-soft"
                        : "text-white/90 hover:bg-white/10"
                    }`
                  }
                  end
                >
                  <p>
                    <FaUser className={`text-base`} />
                  </p>
                  <p>My Profile</p>
                </NavLink>

                {isAdmin ? (
                  <div className="flex flex-col gap-3">
                    <NavLink
                      to="/dashboard/admin/manage-users"
                      className={({ isActive }) =>
                        `text-sm md:text-base flex gap-2 items-center px-3 py-2 rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-white text-transparent bg-clip-text bg-gradient-primary font-semibold shadow-soft"
                            : "text-white/90 hover:bg-white/10"
                        }`
                      }
                    >
                      <p>
                        <FaUsers className="text-base" />
                      </p>
                      <p>Manage Users</p>
                    </NavLink>
                    <NavLink
                      to="/dashboard/admin/add-meal"
                      className={({ isActive }) =>
                        `text-sm md:text-base flex gap-2 items-center px-3 py-2 rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-white text-transparent bg-clip-text bg-gradient-primary font-semibold shadow-soft"
                            : "text-white/90 hover:bg-white/10"
                        }`
                      }
                    >
                      <p>
                        <FaBowlFood className="text-base" />
                      </p>
                      <p>Add Meal</p>
                    </NavLink>
                    <NavLink
                      to="/dashboard/admin/all-meals"
                      className={({ isActive }) =>
                        `text-sm md:text-base flex gap-2 items-center px-3 py-2 rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-white text-transparent bg-clip-text bg-gradient-primary font-semibold shadow-soft"
                            : "text-white/90 hover:bg-white/10"
                        }`
                      }
                    >
                      <p>
                        <IoFastFood className="text-base" />
                      </p>
                      <p>All Meals</p>
                    </NavLink>
                    <NavLink
                      to="/dashboard/admin/Reviews"
                      className={({ isActive }) =>
                        `text-sm md:text-base flex gap-2 items-center px-3 py-2 rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-white text-transparent bg-clip-text bg-gradient-primary font-semibold shadow-soft"
                            : "text-white/90 hover:bg-white/10"
                        }`
                      }
                    >
                      <p>
                        <FaComment className="text-base" />
                      </p>
                      <p>Reviews</p>
                    </NavLink>
                    <NavLink
                      to="/dashboard/admin/serve-meals"
                      className={({ isActive }) =>
                        `text-sm md:text-base flex gap-2 items-center px-3 py-2 rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-white text-transparent bg-clip-text bg-gradient-primary font-semibold shadow-soft"
                            : "text-white/90 hover:bg-white/10"
                        }`
                      }
                    >
                      <p>
                        <GiMeal className="text-base" />
                      </p>
                      <p>Serve Meals</p>
                    </NavLink>
                    <NavLink
                      to="/dashboard/admin/upcoming"
                      className={({ isActive }) =>
                        `text-sm md:text-base flex gap-2 items-center px-3 py-2 rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-white text-transparent bg-clip-text bg-gradient-primary font-semibold shadow-soft"
                            : "text-white/90 hover:bg-white/10"
                        }`
                      }
                    >
                      <p>
                        <GiHotMeal className="text-base" />
                      </p>
                      <p>Upcoming Meals</p>
                    </NavLink>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    <NavLink
                      to="/dashboard/requested-meals"
                      className={({ isActive }) =>
                        `text-sm md:text-base flex gap-2 items-center px-3 py-2 rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-white text-transparent bg-clip-text bg-gradient-primary font-semibold shadow-soft"
                            : "text-white/90 hover:bg-white/10"
                        }`
                      }
                    >
                      <p>
                        <FaBowlFood className="text-base" />
                      </p>
                      <p>Requested Meals</p>
                    </NavLink>

                    <NavLink
                      to="/dashboard/my-reviews"
                      className={({ isActive }) =>
                        `text-sm md:text-base flex gap-2 items-center px-3 py-2 rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-white text-transparent bg-clip-text bg-gradient-primary font-semibold shadow-soft"
                            : "text-white/90 hover:bg-white/10"
                        }`
                      }
                    >
                      <p>
                        <FaPen className="text-base" />
                      </p>
                      <p>My Reviews</p>
                    </NavLink>

                    <NavLink
                      to="/dashboard/payment-history"
                      className={({ isActive }) =>
                        `text-sm md:text-base flex gap-2 items-center px-3 py-2 rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-white text-transparent bg-clip-text bg-gradient-primary font-semibold shadow-soft"
                            : "text-white/90 hover:bg-white/10"
                        }`
                      }
                    >
                      <p>
                        <FaDollarSign className="text-base" />
                      </p>
                      <p>Payment History</p>
                    </NavLink>
                  </div>
                )}

                <div className="pt-3 mt-3 border-t border-white/20">
                  <Link
                    to="/"
                    className="btn btn-gradient-tertiary rounded-full w-full btn-sm text-white font-medium shadow-medium hover:shadow-glow-blue transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaArrowLeft />
                    <span>Go To Home</span>
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
