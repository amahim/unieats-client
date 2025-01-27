import { Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import LogoImg from '../../assets/Logo.png'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
  const {  logout,user } = useContext(AuthContext);

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
          isActive ? "border-[#F15B42] bg-white px-4 rounded-xl border-2  font-bold" : "text-black border-[#F15B42] border-2 rounded-xl px-4 "
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/meals"
        className={({ isActive }) =>
          isActive ? "border-[#F15B42] px-4 bg-white rounded-xl border-2  font-bold" : "text-black border-[#F15B42] border-2 rounded-xl px-4"
        }
      >
        Meals
      </NavLink>
      <NavLink
        to="/upcoming-meals"
        className={({ isActive }) =>
          isActive ? "border-[#F15B42] px-4 bg-white rounded-xl border-2  font-bold" : "text-black border-[#F15B42] border-2 rounded-xl px-4 "
        }
      >
        Upcoming Meals
      </NavLink>
    </>
  );

  return (
    <div className="">
      <div className="navbar py-5 md:w-4/5 mx-auto w-full">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="flex gap-2 items-center text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
            <img src={LogoImg} alt="" className="w-14 h-10 rounded-lg"/>
            <p>
                UniEats
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 text-lg font-medium">
            {links}
          </ul>
        </div>
        <div className="flex gap-4 items-center navbar-end">
          <div>
            <p>
            <FaBell  className="text-2xl "/>
            </p>
          </div>
          <div>
            {user && user?.email ? (
              <div className="dropdown dropdown-click  dropdown-end ">
                <div
                  tabIndex={0}
                  role="button"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <img
                    src={user?.photoURL}
                    className="rounded-full w-10 h-10 border-2 border-[#F15B42]"
                    alt="User Avatar"
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="border-2 border-[#F15B42] dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li className="flex justify-between items-center">
                    <span className="font-medium">{user?.displayName}</span>
                  </li>
                  <li>
                    <Link
                      to="/dashboard"
                      className="btn btn-sm  btn-info text-black"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li className="mt-2">
                    <button
                      onClick={handleLogout}
                      className="btn btn-sm  btn-error text-black"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link
                to="login"
                className="btn bg-[#F15B42] border-none text-white rounded-lg"
              >
                Join Us
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
