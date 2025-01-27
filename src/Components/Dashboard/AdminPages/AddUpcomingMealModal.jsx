import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useAxiosPublic from '../../Hooks/UseAxiosPublic';
import { AuthContext } from '../../Provider/AuthProvider';

const img_hosting_key = import.meta.env.VITE_image_api_key;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const AddUpcomingMealModal = ({ onClose, refetch }) => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };

    const res = await axiosPublic.post(img_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });

    if (res.data.success) {
      const photoUrl = res.data.data.display_url;

      const mealInfo = {
        title: data.title,
        category: data.category,
        ingredients: data.ingredients,
        description: data.description,
        price: parseInt(data.price),
        post_time: data.post_time,
        distributor_name: user?.displayName,
        distributor_email: user?.email,
        image: photoUrl,
        schedule: data.schedule, 
        rating: 0,
        likes: 0,
        reviews_count: 0,
      };

      axiosPublic.post('/meals', mealInfo).then((res) => {
        if (res.data.insertedId) {
          toast.success('Meal added successfully!');
          reset();
          refetch(); // Refetch meals
          onClose(); // Close modal
        }
      });
    }
  };

  return (
    <div className=" overflow-y-auto fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg w-4/5 md:w-3/5">
        <h2 className="text-2xl font-bold mb-4">Add Upcoming Meal</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
         {/* Title */}
          <div className="flex flex-col">
            <label htmlFor="title" className="mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              {...register("title", { required: true })}
              className="input input-bordered"
            />
            {errors.title && (
              <span className="text-red-500 text-sm">Title is required</span>
            )}
          </div>

          {/* Category */}
          <div className="flex flex-col">
            <label htmlFor="category" className="mb-2">
              Category
            </label>
            <select
              id="category"
              {...register("category", { required: true })}
              className="input input-bordered"
            >
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
            </select>
            {errors.category && (
              <span className="text-red-500 text-sm">Category is required</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          {/* Ingredients */}
          <div className="flex flex-col">
            <label htmlFor="ingredients" className="mb-2">
              Ingredients
            </label>
            <textarea
              id="ingredients"
              {...register("ingredients", { required: true })}
              className="input input-bordered h-12"
            ></textarea>
            {errors.ingredients && (
              <span className="text-red-500 text-sm">
                Ingredients are required
              </span>
            )}
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label htmlFor="description" className="mb-2">
              Description
            </label>
            <textarea
              id="description"
              {...register("description", { required: true })}
              className="input input-bordered h-12"
            ></textarea>
            {errors.description && (
              <span className="text-red-500 text-sm">
                Description is required
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          {/* Price */}
          <div className="flex flex-col">
            <label htmlFor="price" className="mb-2">
              Price
            </label>
            <input
              type="number"
              id="price"
              {...register("price", { required: true })}
              className="input input-bordered"
            />
            {errors.price && (
              <span className="text-red-500 text-sm">Price is required</span>
            )}
          </div>

          {/* Post Time */}
          <div className="flex flex-col">
            <label htmlFor="post_time" className="mb-2">
              Post Time
            </label>
            <input
              type="datetime-local"
              id="post_time"
              {...register("post_time", { required: true })}
              className="input input-bordered"
            />
            {errors.post_time && (
              <span className="text-red-500 text-sm">
                Post time is required
              </span>
            )}
          </div>
        </div>

        {/* Meal Image */}
        <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="flex flex-col">
          <label htmlFor="image" className="mb-2">
            Meal Image
          </label>
          <input
            type="file"
            id="image"
            {...register("image", { required: true })}
            className="input input-bordered"
          />
          {errors.image && (
            <span className="text-red-500 text-sm">Image is required</span>
          )}
        </div>
            {/* schedule */}
          <div className="flex flex-col">
            <label htmlFor="category" className="mb-2">
              Schedule
            </label>
            <select
              id="schedule"
              {...register("schedule", { required: true })}
              className="input input-bordered"
            >
              {/* <option value="Available">Available</option> */}
              <option value="Upcoming">Upcoming</option>
              
            </select>
            {errors.schedule && (
              <span className="text-red-500 text-sm">Schedule is required</span>
            )}
          </div>
        </div>
        

        {/* Rating, Likes, Reviews Count */}
        <input type="hidden" value="0" {...register("rating")} />
        <input type="hidden" value="0" {...register("likes")} />
        <input type="hidden" value="0" {...register("reviews_count")} />

          <div className="flex justify-end mt-6">
            <button
              type="button"
              className="btn btn-secondary mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">Add Meal</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUpcomingMealModal;
