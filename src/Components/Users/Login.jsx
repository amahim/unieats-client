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
          role: "User",
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
    <div className="w-full max-w-md mx-auto px-4 py-8">
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight">
          Welcome Back
        </h1>
        <p className="text-slate-400 text-sm">Sign in to your UniEats account</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-slate-900/95 card-body p-6 md:p-8 rounded-2xl border border-slate-800 shadow-2xl space-y-3"
      >
        <div className="form-control">
          <label className="label py-1">
            <span className="label-text text-slate-300 font-semibold text-xs uppercase tracking-wider">Email</span>
          </label>
          <input
            type="email"
            placeholder="student@university.edu"
            className="input bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 rounded-xl text-sm h-11"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-rose-400 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="form-control">
          <label className="label py-1">
            <span className="label-text text-slate-300 font-semibold text-xs uppercase tracking-wider">Password</span>
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="input bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 rounded-xl text-sm h-11"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
          {errors.password && (
            <p className="text-rose-400 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
          <label className="label py-1">
            <span className="label-text-alt link link-hover text-slate-400 hover:text-orange-400 text-xs">
              Forgot password?
            </span>
          </label>
        </div>
        <div className="form-control mt-4">
          <button
            type="submit"
            className="btn btn-gradient-primary rounded-xl text-white font-bold shadow-lg shadow-orange-500/20 py-2.5"
          >
            Sign In
          </button>
        </div>
        <div className="text-center mt-3">
          <p className="text-slate-400 text-xs md:text-sm">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-orange-400 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
        <div className="flex w-full flex-col my-1">
          <div className="divider text-slate-500 text-xs my-1">OR</div>
        </div>
        <div>
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full btn bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2 text-sm h-11"
          >
            <FaGoogle className="text-orange-400" /> Continue with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
