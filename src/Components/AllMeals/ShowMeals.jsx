import React from "react";
import { Link } from "react-router-dom";

const ShowMeals = ({meal, refetch}) => {

    const {image,title,price,_id} = meal;
  return (
    <div className="hover-lift">
      <div className="glass-effect rounded-3xl overflow-hidden border border-white/20 shadow-strong h-full flex flex-col">
        <div className="relative overflow-hidden group">
          <img
            src={image}
            alt={title}
            className="object-cover object-center w-full h-64 md:h-72 transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="flex flex-col justify-between p-5 space-y-4 flex-grow">
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-bold tracking-wide text-white line-clamp-2">
              {title}
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold bg-gradient-tertiary text-transparent bg-clip-text">
                ${price}
              </span>
              <span className="text-white/60 text-sm">per meal</span>
            </div>
          </div>
          <Link to={`/meals/${_id}`}
            className="btn btn-gradient-primary rounded-full w-full py-3 font-semibold text-white shadow-medium hover:shadow-glow-purple transition-all duration-300 text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowMeals;
