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
  

  // const onSubmit = (data) => {
  //   const imageFile = { image: data.image[0] }
  //       const res =  axiosPublic.post(img_hosting_api, imageFile, {
  //           headers: {
  //               'content-type': 'multipart/form-data'
  //           }
  //       });
  //   const { name, photo, email, password } = data;

  //   // Password validation
  //   const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
  //   if (!regex.test(password)) {
  //     toast.error(
  //       "Password should have at least one uppercase and one lowercase letter and must be 6 characters long"
  //     );
  //     return;
  //   }

  //   // Create user
  //   createNewUser(email, password)
  //     .then((result) => {
  //       const user = result.user;

  //       setUser(user);

  //       updateUserProfile({
  //         displayName: name,
  //         photoURL: photo,
  //       })
  //         .then(() => {
  //           setUser({
  //             ...user,
  //             displayName: name,
  //             photoURL: photo,
  //           });

  //           const userInfo = {
  //             name,
  //             email,
  //             photo,
  //             membership: "Bronze",
  //             role: "User"
  //           };
  //           axiosPublic.post("/users", userInfo).then((res) => {
  //             if (res.data.insertedId) {
  //               toast.success("Registration Successful!");
  //             }
  //           });

  //           navigate(location?.state?.from || "/");
  //         })
  //         .catch((err) => console.error(err));
  //     })
  //     .catch((error) => {
  //       toast.error(error.message);
  //     });
  // };

  return (
    <div className="md:w-2/5 mx-auto w-4/5">
      <div>
        <h1 className="pb-5 text-center text-[#262522] font-bold text-2xl">
          Register your account
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-[#ee6352] card-body border-2 rounded-xl mt-5 shadow-xl"
      >
        {/* Name Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            className="input input-bordered"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-600 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Photo URL Field */}
        <div className="form-control">
          {/* <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input
            type="text"
            placeholder="photo url"
            className="input input-bordered"
            {...register("photo")}
          /> */}
       <label className="label">
       <span className="label-text">Select Image</span>
       </label>
          <input {...register('image', { required: true })} type="file" className="file-input " />
                  
        </div>

        {/* Email Field */}
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

        {/* Password Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button className="btn bg-[#ee6352] text-white">Register</button>
        </div>

        {/* Already have an account */}
        <div>
          <h1>
            Already have an account?{" "}
            <Link to="/login" className="text-[#ee6352]">
              Login
            </Link>
          </h1>
        </div>
      </form>
    </div>
  );
};

export default Register;
