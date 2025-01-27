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
    <div className="w-4/5 mx-auto ">
      <div>
        <SectionTitle heading="Upcoming Meals" subHeading="Coming Soon" />
      </div>
      <div className="py-5 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4">
        {upcomingMeals.map((meal) => (
          <ShowMeals meal={meal} key={meal._id} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingMeals;
