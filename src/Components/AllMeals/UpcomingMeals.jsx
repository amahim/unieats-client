import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import useAxiosSecure from "../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import ShowMeals from "./ShowMeals";

const UpcomingMeals = () => {
  const axiosSecure = useAxiosSecure();

  const { data: meals = [], refetch } = useQuery({
    queryKey: ["meals"],
    queryFn: async () => {
      const res = await axiosSecure.get("/meals");
      return res.data;
    },
  });

  const upcomingMeals = meals.filter((m) => m.schedule === "Upcoming");
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div>
        <SectionTitle heading="Upcoming Meals" subHeading="Coming Soon" />
      </div>
      <div className="py-8 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {upcomingMeals.map((meal) => (
          <ShowMeals meal={meal} key={meal._id} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingMeals;
