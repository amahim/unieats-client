

import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/UseAxiosPublic";

const img_hosting_key = import.meta.env.VITE_image_api_key;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const OpenMealModal = ({ meal, onClose, refetch }) => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    let photoUrl = meal.image; // Use existing image if no new image is uploaded

    if (data.image?.[0]) {
      const imageFile = { image: data.image[0] };
      const res = await axiosPublic.post(img_hosting_api, imageFile, {
        headers: { "content-type": "multipart/form-data" },
      });

      if (res.data.success) {
        photoUrl = res.data.data.display_url;
      }
    }

    const updatedMeal = {
      // ...meal,
      title: data.title,
      category: data.category,
      ingredients: data.ingredients,
      description: data.description,
      price: parseInt(data.price),
      post_time: data.post_time,
      schedule: data.schedule,
      image: photoUrl,
    };

    axiosPublic.patch(`/meals/${meal._id}`, updatedMeal).then((res) => {
      if (res.data.modifiedCount > 0) {
        toast.success("Meal updated successfully!");
        // reset();
        refetch(); // Refetch meals
        onClose(); // Close modal
      }
    });
  };

  return (
    <div className="overflow-y-auto fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg w-4/5 md:w-3/5">
        <h2 className="text-2xl font-bold mb-4">Update Meal</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="title" className="mb-2">Title</label>
              <input
                type="text"
                id="title"
                defaultValue={meal.title}
                {...register("title", { required: true })}
                className="input input-bordered"
              />
              {errors.title && <span className="text-red-500">Title is required</span>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="category" className="mb-2">Category</label>
              <select
                id="category"
                defaultValue={meal.category}
                {...register("category", { required: true })}
                className="input input-bordered"
              >
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
              </select>
              {errors.category && <span className="text-red-500">Category is required</span>}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col">
              <label htmlFor="ingredients" className="mb-2">Ingredients</label>
              <textarea
                id="ingredients"
                defaultValue={meal.ingredients}
                {...register("ingredients", { required: true })}
                className="input input-bordered"
              />
              {errors.ingredients && <span className="text-red-500">Ingredients are required</span>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="description" className="mb-2">Description</label>
              <textarea
                id="description"
                defaultValue={meal.description}
                {...register("description", { required: true })}
                className="input input-bordered"
              />
              {errors.description && <span className="text-red-500">Description is required</span>}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col">
              <label htmlFor="price" className="mb-2">Price</label>
              <input
                type="number"
                id="price"
                defaultValue={meal.price}
                {...register("price", { required: true })}
                className="input input-bordered"
              />
              {errors.price && <span className="text-red-500">Price is required</span>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="post_time" className="mb-2">Post Time</label>
              <input
                type="datetime-local"
                id="post_time"
                defaultValue={meal.post_time}
                {...register("post_time", { required: true })}
                className="input input-bordered"
              />
              {errors.post_time && <span className="text-red-500">Post time is required</span>}
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="image" className="mb-2">Meal Image</label>
            <input type="file" id="image"  {...register("image")} className="input input-bordered" />
          </div>
          <div className="flex justify-end mt-6">
            <button type="button" className="btn btn-secondary mr-2" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Update Meal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OpenMealModal;
