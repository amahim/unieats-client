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
    <div className="w-4/5 mx-auto py-6">
      <div>
        <button
          onClick={() => navigate("/meals")}
          className="flex items-center gap-2 text-[#f15b42] text-lg md:text-xl px-4 py-2 rounded-md"
        >
          <FaArrowCircleLeft />
        </button>
      </div>

      <div className="flex md:flex-row flex-col gap-4 items-start md:items-center mt-5">
        <div className="flex flex-col gap-2 md:w-1/2 w-full">
          <img src={image} className="rounded-lg" alt={title} />
          {schedule === "Upcoming" ? (
            <button
              disabled
              className="btn bg-[#f15b42] border-none rounded-lg text-white"
            >
              Coming Soon
            </button>
          ) : isAdmin ? (
            <button
              disabled
              className="btn bg-[#f15b42] border-none rounded-lg text-white"
            >
              Admin Can't Request
            </button>
          ) : (
            <button
              className="btn bg-[#f15b42] border-none rounded-lg text-white"
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
        <div className="w-full md:w-1/2 p-4 rounded-lg border-2 border-[#f15b42] flex flex-col gap-2">
          <p>
            Title: <span className="font-bold">{title}</span>
          </p>
          <p>
            Category: <span className="font-bold">{category}</span>
          </p>
          <p>
            Available: <span className="font-bold">{schedule}</span>
          </p>
          <p>
            Price: <span className="font-bold">{price}</span>
          </p>
          <p>
            Post Time:{" "}
            <span className="font-bold">
              {new Date(post_time).toISOString().split("T")[0]}
            </span>
          </p>
          <p>
            Ingredients: <span className="font-bold">{ingredients}</span>
          </p>
          <p>
            Description: <span className="font-bold">{description}</span>
          </p>
          <p>
            Distributor's Name:{" "}
            <span className="font-bold">{distributor_name}</span>
          </p>
          <p>
            Distributor's Email:{" "}
            <span className="font-bold">{distributor_email}</span>
          </p>
          <div className="flex gap-2">
            <p className="flex items-center gap-1 border-2 bg-white border-black rounded-xl p-2">
              <FaStar />
              <span>{rating}</span>
            </p>
            <button
              className="flex items-center gap-1 border-2 bg-white border-black rounded-xl p-2"
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
              <FaThumbsUp />
              <span>{likes}</span>
            </button>
            <p className="flex items-center gap-1 border-2 bg-white border-black rounded-xl p-2">
              <FaComment />
              <span>{reviews_count}</span>
            </p>
          </div>
          <div>
            <textarea
              placeholder="Write a review..."
              name="review"
              id="review"
              className="h-16 p-2 rounded-xl w-full"
              ref={reviewRef} // Attach ref to the textarea
            ></textarea>
            <button
              className="btn"
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
