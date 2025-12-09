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
          className="flex items-center gap-2 text-white hover:text-white/80 text-lg md:text-xl px-6 py-3 rounded-full glass-effect border border-white/30 hover:border-white/50 transition-all duration-300"
        >
          <FaArrowCircleLeft />
          <span className="text-sm md:text-base">Back to Meals</span>
        </button>
      </div>

      <div className="flex md:flex-row flex-col gap-6 md:gap-8 items-start mt-8">
        <div className="flex flex-col gap-4 md:w-1/2 w-full">
          <div className="relative overflow-hidden rounded-3xl border border-white/20 shadow-strong group">
            <img src={image} className="w-full h-auto object-cover" alt={title} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          {schedule === "Upcoming" ? (
            <button
              disabled
              className="btn rounded-full text-white opacity-60 cursor-not-allowed bg-white/20 border border-white/30"
            >
              Coming Soon
            </button>
          ) : isAdmin ? (
            <button
              disabled
              className="btn rounded-full text-white opacity-60 cursor-not-allowed bg-white/20 border border-white/30"
            >
              Admin Can't Request
            </button>
          ) : (
            <button
              className="btn btn-gradient-primary rounded-full text-white font-semibold shadow-medium hover:shadow-glow-purple transition-all duration-300"
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
        <div className="w-full md:w-1/2 glass-effect p-5 md:p-6 rounded-3xl border border-white/20 flex flex-col gap-3 shadow-strong">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{title}</h2>
          <div className="space-y-2 text-white/90 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span className="text-white/60">Category:</span>
              <span className="font-semibold bg-gradient-tertiary text-transparent bg-clip-text">{category}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white/60">Status:</span>
              <span className="font-semibold">{schedule}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white/60">Price:</span>
              <span className="font-bold text-xl md:text-2xl bg-gradient-secondary text-transparent bg-clip-text">${price}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white/60">Posted:</span>
              <span className="font-medium">
                {new Date(post_time).toISOString().split("T")[0]}
              </span>
            </div>
            <div className="pt-2 border-t border-white/20">
              <p className="text-white/60 mb-1">Ingredients:</p>
              <p className="font-medium">{ingredients}</p>
            </div>
            <div className="pt-2 border-t border-white/20">
              <p className="text-white/60 mb-1">Description:</p>
              <p className="font-medium leading-relaxed">{description}</p>
            </div>
            <div className="pt-2 border-t border-white/20">
              <p className="text-white/60 mb-1">Distributor:</p>
              <p className="font-semibold">{distributor_name}</p>
              <p className="text-sm text-white/70">{distributor_email}</p>
            </div>
          </div>
          <div className="flex gap-3 pt-4 border-t border-white/20">
            <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full border border-white/30">
              <FaStar className="text-yellow-400" />
              <span className="font-semibold text-white">{rating}</span>
            </div>
            <button
              className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300"
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
              <FaThumbsUp className="text-blue-400" />
              <span className="font-semibold text-white">{likes}</span>
            </button>
            <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full border border-white/30">
              <FaComment className="text-green-400" />
              <span className="font-semibold text-white">{reviews_count}</span>
            </div>
          </div>
          <div className="pt-4 border-t border-white/20 space-y-3">
            <textarea
              placeholder="Write a review..."
              name="review"
              id="review"
              className="w-full h-24 p-4 rounded-2xl glass-effect border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
              ref={reviewRef} // Attach ref to the textarea
            ></textarea>
            <button
              className="btn btn-gradient-secondary rounded-full w-full text-white font-semibold shadow-medium hover:shadow-glow-pink transition-all duration-300"
              onClick={() => {
                if (!user || !user.email) {
                  // If the user is not logged in, navigate to login
                  navigate("/login");
                } else if (isAdmin) {
                  // Admins can't post reviews
                  toast.error("Admin can't post reviews!");
                } else if (schedule === "Upcoming") {
                  // Users can't review upcoming meals
                  toast.error("You cannot review upcoming meals!");
                } else if (loggedInUserDetails.membership === "Bronze") {
                  // Users with Bronze badge can't review meals
                  toast.error("Please upgrade your badge to post reviews!");
                } else {
                  // All conditions met, allow posting the review
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
