import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "../Hooks/UseAxiosPublic";
const img_hosting_key = import.meta.env.VITE_image_api_key;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`

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
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Join UniEats
        </h1>
        <p className="text-white/80 text-sm">Create your account</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="glass-effect card-body p-8 rounded-3xl border border-white/20 shadow-strong"
      >
        {/* Name Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-medium">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input glass-effect border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-2xl"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Photo URL Field */}
        <div className="form-control">
       <label className="label">
       <span className="label-text text-white font-medium">Profile Picture</span>
       </label>
          <input {...register('image', { required: true })} type="file" className="file-input glass-effect border border-white/30 text-white rounded-2xl" />
                  
        </div>

        {/* Email Field */}
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

        {/* Password Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-medium">Password</span>
          </label>
          <input
            type="password"
            placeholder="Create a password"
            className="input glass-effect border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-2xl"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button className="btn btn-gradient-primary rounded-full text-white font-semibold shadow-medium hover:shadow-glow-purple transition-all duration-300">Register</button>
        </div>

        {/* Already have an account */}
        <div className="text-center mt-4">
          <p className="text-white/80">
            Already have an account?{" "}
            <Link to="/login" className="text-white font-semibold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
