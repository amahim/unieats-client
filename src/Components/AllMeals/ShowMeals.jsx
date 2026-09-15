import React from "react";
import { Link } from "react-router-dom";

const ShowMeals = ({ meal, refetch }) => {
  const { image, title, price, _id, rating, category } = meal;
  return (
    <div className="h-full">
      <div className="bg-slate-900/90 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 shadow-xl hover:shadow-2xl h-full flex flex-col transition-all duration-300 hover:-translate-y-1.5 group">
        <div className="relative overflow-hidden aspect-[4/3] bg-slate-950">
          <img
            src={image}
            alt={title}
            className="object-cover object-center w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
          {category && (
            <span className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-xs font-semibold px-3 py-1 rounded-full text-slate-200 border border-slate-700/80">
              {category}
            </span>
          )}
          {rating ? (
            <span className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md text-xs font-bold px-2.5 py-1 rounded-full text-amber-400 border border-slate-700/80 flex items-center gap-1">
              <span>★</span>
              <span>{rating}</span>
            </span>
          ) : null}
        </div>
        <div className="flex flex-col justify-between p-5 space-y-4 flex-grow">
          <div className="space-y-2">
            <h2 className="text-lg md:text-xl font-bold tracking-tight text-white line-clamp-1 group-hover:text-orange-400 transition-colors">
              {title}
            </h2>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold text-emerald-400">
                ${price}
              </span>
              <span className="text-slate-400 text-xs font-medium">/ meal</span>
            </div>
          </div>
          <Link
            to={`/meals/${_id}`}
            className="btn btn-gradient-primary rounded-xl w-full py-2.5 font-semibold text-white shadow-md text-center text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowMeals;
