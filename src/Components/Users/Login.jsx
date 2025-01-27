import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "../Hooks/UseAxiosPublic";

const Login = () => {
  const { setUser, userSignIn } = useContext(AuthContext);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        const userInfo = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          membership: "Bronze",
          role: "User"
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            toast.success("Login Successful!");
          }
        });
        // toast.success("Login Successful!");

        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setUser(null);
        toast.error("Google Sign-In failed. Please try again.");
      });
  };

  const onSubmit = (data) => {
    const { email, password } = data;

    userSignIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login Successful!");
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        toast.error("Login failed. Please check your email and password.");
      });
  };

  return (
    <div className="md:w-2/5 mx-auto w-4/5">
      <div>
        <h1 className="text-center font-bold text-2xl text-[#262522]">
          Login to your account
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-[#ee6352] card-body border-2 mt-10 rounded-xl shadow-xl"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password.message}</p>
          )}
          <label className="label">
            <p className="label-text-alt link link-hover">Forgot password?</p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn bg-[#ee6352] text-white">
            Login
          </button>
        </div>
        <div>
          <h1>
            Don't have an account?{" "}
            <Link to="/register" className="text-[#ee6352]">
              Register
            </Link>
          </h1>
        </div>
        <div className="flex w-full flex-col">
          <div className="divider">Or</div>
        </div>
        <div>
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full btn border-[#ee6352] btn-outline"
          >
            Login With Google <FaGoogle />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
