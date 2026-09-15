import React, { useContext, useRef } from "react"; // Import useRef
import {
  FaArrowCircleLeft,
  FaComment,
  FaStar,
  FaThumbsUp,
} from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAdmin from "../Hooks/UseAdmin";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import useAxiosSecure from "../Hooks/UseAxiosSecure";
import useLoadUserDetails from "../Hooks/loadUsersHook";
import useRefetch from "../Hooks/useRefetch";

const MealsDetails = () => {
  const navigate = useNavigate();
  const meal = useLoaderData(); // Initial meal data from loader
  const [isAdmin] = useAdmin();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { loggedInUserDetails } = useLoadUserDetails();
  const reviewRef = useRef(null); // Create a ref for the textarea

  const { data: refetchedMeal, refetch } = useRefetch(
    `meal-${meal._id}`,
    `/meals/${meal._id}`
  ); // Refetch meal data

  const {
    _id,
    title,
    category,
    ingredients,
    description,
    price,
    post_time,
    distributor_name,
    distributor_email,
    image,
    schedule,
    rating,
    likes,
    reviews_count,
  } = refetchedMeal || meal; // Use refetched data if available, else fallback to initial data

  const handleReview = () => {
    const reviewText = reviewRef.current.value; // Get the review text from ref
    if (!reviewText.trim()) {
      toast.error("Please write a review before submitting!");
      return; // Don't proceed if the review is empty
    }

    const reviewData = {
      revMealId: _id, // Meal ID
      reviewedByEmail: user.email,
      reviewedByName: user.displayName,
      reviewText, // Review text
      mealDetails: {
        _id,
        title,
        category,
        ingredients,
        description,
        price,
        post_time,
        distributor_name,
        distributor_email,
        image,
        schedule,
        rating,
        likes,
        reviews_count,
      },
    };

    // Send review to the database
    axiosSecure.post("/reviews", reviewData).then((res) => {
      if (res.data.insertedId) {
        toast.success("Review added successfully!");
        refetch();
        //  update the reviews count

        axiosSecure
          .patch(`/meals/reviews/${_id}`) // Sending mealId as a URL parameter
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch(); // Refetch data to update the frontend
            }
          })
          .catch((error) => {
            console.error("Error updating review count:", error);
          });

        // Reset the textarea
        reviewRef.current.value = "";
      }
    });
  };

  const handleLike = (likedMealId) => {
    axiosSecure.patch(`/meals/likes`, { mealId: likedMealId }).then((res) => {
      if (res.data.modifiedCount > 0) {
        toast.success("You liked this meal!");
        refetch(); // Trigger refetch to update likes count
      }
    });
  };

  const handleMealRequest = (reqMealid) => {
    const requestData = {
      reqMealId: reqMealid,
      requestedByEmail: user.email,
      requestedByName: user.displayName,
      reqStatus: "Requested",
      mealDetails: {
        _id,
        title,
        category,
        ingredients,
        description,
        price,
        post_time,
        distributor_name,
        distributor_email,
        image,
        schedule,
        rating,
        likes,
        reviews_count,
      },
    };
    axiosSecure.post("/requested-meals", requestData).then((res) => {
      if (res.data.insertedId) {
        toast.success("Meal requested successfully!");
      }
    });
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8">
      <div className="mb-6">
        <button
          onClick={() => navigate("/meals")}
          className="inline-flex items-center gap-2 text-slate-300 hover:text-white px-5 py-2.5 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all text-sm font-semibold shadow-md"
        >
          <FaArrowCircleLeft />
          <span>Back to Meals</span>
        </button>
      </div>

      <div className="flex md:flex-row flex-col gap-6 md:gap-8 items-start mt-6">
        <div className="flex flex-col gap-4 md:w-1/2 w-full">
          <div className="relative overflow-hidden rounded-2xl border border-slate-800 shadow-xl bg-slate-950 aspect-[4/3]">
            <img
              src={image}
              className="w-full h-full object-cover"
              alt={title}
            />
          </div>
          {schedule === "Upcoming" ? (
            <button
              disabled
              className="btn rounded-xl text-slate-400 bg-slate-800/60 border border-slate-700/60 cursor-not-allowed w-full py-3"
            >
              Coming Soon
            </button>
          ) : isAdmin ? (
            <button
              disabled
              className="btn rounded-xl text-slate-400 bg-slate-800/60 border border-slate-700/60 cursor-not-allowed w-full py-3"
            >
              Admin Cannot Request
            </button>
          ) : (
            <button
              className="btn btn-gradient-primary rounded-xl text-white font-bold py-3 shadow-lg shadow-orange-500/20 w-full"
              onClick={() =>
                user && user.email
                  ? loggedInUserDetails.membership !== "Bronze"
                    ? handleMealRequest(_id)
                    : toast.error("Please upgrade your badge!")
                  : navigate("/login")
              }
            >
              Request Meal
            </button>
          )}
        </div>
        {/* Meal Data */}
        <div className="w-full md:w-1/2 bg-slate-900/90 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-xl flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            {title}
          </h2>
          <div className="space-y-2.5 text-slate-300 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Category:</span>
              <span className="font-semibold text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded-md border border-orange-500/20 text-xs md:text-sm">
                {category}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Status:</span>
              <span className="font-semibold text-slate-200">{schedule}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Price:</span>
              <span className="font-black text-2xl text-emerald-400">
                ${price}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Posted:</span>
              <span className="font-medium text-slate-300">
                {new Date(post_time).toISOString().split("T")[0]}
              </span>
            </div>
            <div className="pt-3 border-t border-slate-800">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Ingredients:</p>
              <p className="font-medium text-slate-200">{ingredients}</p>
            </div>
            <div className="pt-3 border-t border-slate-800">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Description:</p>
              <p className="text-slate-300 leading-relaxed text-sm">{description}</p>
            </div>
            <div className="pt-3 border-t border-slate-800">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Distributor:</p>
              <p className="font-semibold text-white">{distributor_name}</p>
              <p className="text-xs text-slate-400">{distributor_email}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-800">
            <div className="flex items-center gap-2 bg-slate-950 px-4 py-2 rounded-full border border-slate-800">
              <FaStar className="text-amber-400 text-sm" />
              <span className="font-bold text-white text-sm">{rating}</span>
            </div>
            <button
              className="flex items-center gap-2 bg-slate-950 px-4 py-2 rounded-full border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white transition-all"
              onClick={() =>
                user && user.email
                  ? isAdmin
                    ? toast.error("Admin can't like!")
                    : schedule !== "Upcoming"
                    ? handleLike(_id)
                    : loggedInUserDetails.membership === "Bronze"
                    ? toast.error("Please upgrade badge to like upcoming meals")
                    : handleLike(_id)
                  : navigate("/login")
              }
            >
              <FaThumbsUp className="text-orange-400 text-sm" />
              <span className="font-bold text-white text-sm">{likes}</span>
            </button>
            <div className="flex items-center gap-2 bg-slate-950 px-4 py-2 rounded-full border border-slate-800">
              <FaComment className="text-emerald-400 text-sm" />
              <span className="font-bold text-white text-sm">{reviews_count}</span>
            </div>
          </div>
          <div className="pt-4 border-t border-slate-800 space-y-3">
            <textarea
              placeholder="Write an honest review about this meal..."
              name="review"
              id="review"
              className="w-full h-24 p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500/80 resize-none text-sm"
              ref={reviewRef}
            ></textarea>
            <button
              className="btn btn-gradient-secondary rounded-xl w-full text-white font-bold py-2.5 shadow-md transition-all"
              onClick={() => {
                if (!user || !user.email) {
                  navigate("/login");
                } else if (isAdmin) {
                  toast.error("Admin can't post reviews!");
                } else if (schedule === "Upcoming") {
                  toast.error("You cannot review upcoming meals!");
                } else if (loggedInUserDetails.membership === "Bronze") {
                  toast.error("Please upgrade your badge to post reviews!");
                } else {
                  handleReview();
                }
              }}
            >
              Post Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealsDetails;
