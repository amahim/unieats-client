import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "../Hooks/UseAxiosPublic";
const img_hosting_key = import.meta.env.VITE_image_api_key;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);

    // Image upload to imgbb and get the URL
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(img_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const photo = res.data.data.display_url; // Extract the photo URL
      const { name, email, password } = data;

      // Password validation
      const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
      if (!regex.test(password)) {
        toast.error(
          "Password should have at least one uppercase and one lowercase letter and must be 6 characters long"
        );
        return;
      }

      // Create user
      createNewUser(email, password)
        .then((result) => {
          const user = result.user;

          setUser(user);

          updateUserProfile({
            displayName: name,
            photoURL: photo,
          })
            .then(() => {
              setUser({
                ...user,
                displayName: name,
                photoURL: photo,
              });

              // Save user info to the database
              const userInfo = {
                name,
                email,
                photo, // Use the uploaded image URL here
                membership: "Bronze",
                role: "User",
              };

              axiosPublic.post("/users", userInfo).then((res) => {
                if (res.data.insertedId) {
                  toast.success("Registration Successful!");
                }
              });

              navigate(location?.state?.from || "/");
            })
            .catch((err) => console.error(err));
        })
        .catch((error) => {
          toast.error(error.message);
        });
    } else {
      toast.error("Failed to upload image.");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 py-8">
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight">
          Join UniEats
        </h1>
        <p className="text-slate-400 text-sm">Create your student account</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-slate-900/95 card-body p-6 md:p-8 rounded-2xl border border-slate-800 shadow-2xl space-y-3"
      >
        {/* Name Field */}
        <div className="form-control">
          <label className="label py-1">
            <span className="label-text text-slate-300 font-semibold text-xs uppercase tracking-wider">Full Name</span>
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="input bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 rounded-xl text-sm h-11"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-rose-400 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Photo URL Field */}
        <div className="form-control">
          <label className="label py-1">
            <span className="label-text text-slate-300 font-semibold text-xs uppercase tracking-wider">
              Profile Picture
            </span>
          </label>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input bg-slate-950 border border-slate-800 text-slate-300 rounded-xl text-sm h-11 file:bg-slate-800 file:border-none file:text-slate-200 file:mr-3"
          />
        </div>

        {/* Email Field */}
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

        {/* Password Field */}
        <div className="form-control">
          <label className="label py-1">
            <span className="label-text text-slate-300 font-semibold text-xs uppercase tracking-wider">Password</span>
          </label>
          <input
            type="password"
            placeholder="Create a strong password"
            className="input bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 rounded-xl text-sm h-11"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-rose-400 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="form-control mt-4">
          <button className="btn btn-gradient-primary rounded-xl text-white font-bold shadow-lg shadow-orange-500/20 py-2.5">
            Create Account
          </button>
        </div>

        {/* Already have an account */}
        <div className="text-center mt-3">
          <p className="text-slate-400 text-xs md:text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-orange-400 font-semibold hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
