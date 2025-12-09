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
    <div className="w-full max-w-md mx-auto px-4 py-8">
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Welcome Back
        </h1>
        <p className="text-white/80 text-sm">Login to your account</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="glass-effect card-body p-8 rounded-3xl border border-white/20 shadow-strong"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-medium">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input glass-effect border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-2xl"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-medium">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="input glass-effect border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-2xl"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>
          )}
          <label className="label">
            <p className="label-text-alt link link-hover text-white/70 hover:text-white">Forgot password?</p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-gradient-primary rounded-full text-white font-semibold shadow-medium hover:shadow-glow-purple transition-all duration-300">
            Login
          </button>
        </div>
        <div className="text-center mt-4">
          <p className="text-white/80">
            Don't have an account?{" "}
            <Link to="/register" className="text-white font-semibold hover:underline">
              Register
            </Link>
          </p>
        </div>
        <div className="flex w-full flex-col">
          <div className="divider text-white/60">Or</div>
        </div>
        <div>
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full btn glass-effect border border-white/30 text-white hover:bg-white/20 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2"
          >
            Login With Google <FaGoogle />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
