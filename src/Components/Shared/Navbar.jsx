import { Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import LogoImg from "../../assets/Logo.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
  const { logout, user } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Successfully logged out!");
      })
      .catch((err) => {
        toast.error("Failed to log out. Please try again.");
      });
  };

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "px-4 py-2 text-sm rounded-full bg-orange-500/15 text-orange-400 font-semibold border border-orange-500/30 transition-all duration-200"
            : "px-4 py-2 text-sm rounded-full text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all duration-200"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/meals"
        className={({ isActive }) =>
          isActive
            ? "px-4 py-2 text-sm rounded-full bg-orange-500/15 text-orange-400 font-semibold border border-orange-500/30 transition-all duration-200"
            : "px-4 py-2 text-sm rounded-full text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all duration-200"
        }
      >
        Meals
      </NavLink>
      <NavLink
        to="/upcoming-meals"
        className={({ isActive }) =>
          isActive
            ? "px-4 py-2 text-sm rounded-full bg-orange-500/15 text-orange-400 font-semibold border border-orange-500/30 transition-all duration-200"
            : "px-4 py-2 text-sm rounded-full text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all duration-200"
        }
      >
        Upcoming Meals
      </NavLink>
    </>
  );

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80">
      <div className="py-3">
        <div className="navbar md:w-4/5 mx-auto w-full px-4">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden text-slate-300 hover:text-white hover:bg-slate-800/60"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-slate-900 border border-slate-800 rounded-2xl z-[1] mt-3 w-60 p-4 shadow-2xl gap-2"
              >
                {links}
              </ul>
            </div>
            <Link
              to="/"
              className="flex gap-2.5 items-center text-xl md:text-2xl font-bold text-white hover:opacity-90 transition-opacity"
            >
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-slate-900 border border-slate-700/80 p-1.5 shadow-md flex items-center justify-center">
                <img
                  src={LogoImg}
                  alt="UniEats Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-white tracking-tight hidden sm:inline">
                Uni<span className="text-orange-500">Eats</span>
              </span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2 text-base font-medium">
              {links}
            </ul>
          </div>
          <div className="flex gap-3 items-center navbar-end">
            <div className="relative">
              <button className="btn btn-circle btn-ghost text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all duration-200">
                <FaBell className="text-lg" />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              </button>
            </div>
            <div>
              {user && user?.email ? (
                <div className="dropdown dropdown-click dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform duration-200"
                  >
                    <div className="relative">
                      <img
                        src={user?.photoURL}
                        className="rounded-full w-10 h-10 md:w-11 md:h-11 border-2 border-orange-500/80 shadow-md object-cover"
                        alt="User Avatar"
                      />
                      <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-slate-950"></div>
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-slate-900 border border-slate-800 rounded-2xl z-[1] w-64 p-4 shadow-2xl mt-3 space-y-2"
                  >
                    <li className="px-3 py-2">
                      <span className="font-semibold text-white text-sm">
                        {user?.displayName}
                      </span>
                      <span className="text-xs text-slate-400 truncate">
                        {user?.email}
                      </span>
                    </li>
                    <div className="divider my-0 border-slate-800"></div>
                    <li>
                      <Link
                        to="/dashboard"
                        className="btn btn-sm btn-gradient-primary rounded-xl text-white font-medium w-full mt-1"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li className="mt-1">
                      <button
                        onClick={handleLogout}
                        className="btn btn-sm bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-slate-200 font-medium w-full"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link
                  to="login"
                  className="btn btn-gradient-primary rounded-full px-6 btn-sm md:btn-md text-white font-semibold shadow-md"
                >
                  Join Us
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
