import React from "react";
import { Link } from "react-router-dom";

const ShowMeals = ({meal, refetch}) => {

    const {image,title,price,_id} = meal;
  return (
    <div>
      <div className="w-92 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              {title}
            </h2>
            <p className="dark:text-gray-800 text-lg font-bold">
              <span className="">
                Price: 
                </span> {price}$
            </p>
          </div>
          <Link to={`/meals/${_id}`}
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md text-white bg-[#f15b42]"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowMeals;
