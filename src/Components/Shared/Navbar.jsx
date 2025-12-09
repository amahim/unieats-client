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
            ? "px-4 py-2 text-sm rounded-full bg-white text-transparent bg-clip-text bg-gradient-primary font-semibold shadow-soft transition-all duration-300"
            : "px-4 py-2 text-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/meals"
        className={({ isActive }) =>
          isActive
            ? "px-4 py-2 text-sm rounded-full bg-white text-transparent bg-clip-text bg-gradient-primary font-semibold shadow-soft transition-all duration-300"
            : "px-4 py-2 text-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
        }
      >
        Meals
      </NavLink>
      <NavLink
        to="/upcoming-meals"
        className={({ isActive }) =>
          isActive
            ? "px-4 py-2 text-sm rounded-full bg-white text-transparent bg-clip-text bg-gradient-primary font-semibold shadow-soft transition-all duration-300"
            : "px-4 py-2 text-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
        }
      >
        Upcoming Meals
      </NavLink>
    </>
  );

  return (
    <div className="fixed top-0 left-0 w-full z-50 glass-effect border-b border-white/20">
      <div className="py-4">
        <div className="navbar md:w-4/5 mx-auto w-full px-4">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden text-white hover:bg-white/20"
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
                className="menu menu-sm dropdown-content glass-effect rounded-2xl z-[1] mt-3 w-60 p-4 shadow-strong gap-3"
              >
                {links}
              </ul>
            </div>
            <Link
              to="/"
              className="flex gap-2 items-center text-xl md:text-2xl font-bold text-white hover:scale-105 transition-transform duration-300"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white p-2 shadow-medium">
                <img
                  src={LogoImg}
                  alt="UniEats Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="bg-white text-transparent bg-clip-text bg-gradient-primary hidden sm:inline">
                UniEats
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
              <button className="btn btn-circle btn-ghost text-white hover:bg-white/20 transition-all duration-300">
                <FaBell className="text-xl" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-gradient-secondary rounded-full animate-pulse"></span>
              </button>
            </div>
            <div>
              {user && user?.email ? (
                <div className="dropdown dropdown-click dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform duration-300"
                  >
                    <div className="relative">
                      <img
                        src={user?.photoURL}
                        className="rounded-full w-10 h-10 md:w-12 md:h-12 border-3 border-white shadow-medium object-cover"
                        alt="User Avatar"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu glass-effect rounded-2xl z-[1] w-64 p-4 shadow-strong mt-3 space-y-2"
                  >
                    <li className="px-4 py-2">
                      <span className="font-semibold text-white text-sm">
                        {user?.displayName}
                      </span>
                    </li>
                    <div className="divider my-0"></div>
                    <li>
                      <Link
                        to="/dashboard"
                        className="btn btn-sm btn-gradient-primary rounded-full text-white font-medium"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li className="mt-2">
                      <button
                        onClick={handleLogout}
                        className="btn btn-sm btn-gradient-secondary rounded-full text-white font-medium"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link
                  to="login"
                  className="btn btn-gradient-primary rounded-full px-6 text-white font-medium shadow-medium hover:shadow-glow-purple transition-all duration-300"
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
