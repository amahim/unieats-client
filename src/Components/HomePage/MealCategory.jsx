import React, { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useAxiosSecure from "../Hooks/UseAxiosSecure";
import MealCatTab from "./MealCatTab";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
const MealCategory = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const axiosSecure = useAxiosSecure();

  const { data: meals = [], refetch } = useQuery({
    queryKey: ["meals"],
    queryFn: async () => {
      const res = await axiosSecure.get("/meals");
      return res.data;
    },
  });

  const Breakfasts = meals
    .filter((meal) => meal.category === "Breakfast")
    .slice(0, 3);
  const Lunchs = meals.filter((meal) => meal.category === "Lunch").slice(0, 3);
  const Dinners = meals
    .filter((meal) => meal.category === "Dinner")
    .slice(0, 3);
  const allMeals = meals.slice(0, 6);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div>
        <SectionTitle heading="Meals" subHeading="Meals By Category" />
      </div>
      {/* tabs */}
      <div className="glass-effect rounded-3xl p-6 md:p-8 border border-white/20">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="flex flex-wrap justify-center gap-3 mb-8 border-0">
            <Tab
              className="px-6 py-3 rounded-full cursor-pointer text-white/80 transition-all duration-300 hover:bg-white/20"
              selectedClassName="bg-white text-transparent bg-clip-text bg-gradient-primary font-semibold shadow-soft"
            >
              Breakfast
            </Tab>
            <Tab
              className="px-6 py-3 rounded-full cursor-pointer text-white/80 transition-all duration-300 hover:bg-white/20"
              selectedClassName="bg-white text-transparent bg-clip-text bg-gradient-primary font-semibold shadow-soft"
            >
              Lunch
            </Tab>
            <Tab
              className="px-6 py-3 rounded-full cursor-pointer text-white/80 transition-all duration-300 hover:bg-white/20"
              selectedClassName="bg-white text-transparent bg-clip-text bg-gradient-primary font-semibold shadow-soft"
            >
              Dinner
            </Tab>
            <Tab
              className="px-6 py-3 rounded-full cursor-pointer text-white/80 transition-all duration-300 hover:bg-white/20"
              selectedClassName="bg-white text-transparent bg-clip-text bg-gradient-primary font-semibold shadow-soft"
            >
              All Meals
            </Tab>
          </TabList>
          <TabPanel>
            <MealCatTab items={Breakfasts} />
          </TabPanel>
          <TabPanel>
            <MealCatTab items={Lunchs} />
          </TabPanel>
          <TabPanel>
            <MealCatTab items={Dinners} />
          </TabPanel>
          <TabPanel>
            <MealCatTab items={allMeals} />
          </TabPanel>
        </Tabs>
      </div>
      <div className="text-center mt-8">
        <Link
          to="/meals"
          className="btn btn-gradient-primary rounded-full px-8 py-3 font-semibold text-white shadow-medium hover:shadow-glow-purple transition-all duration-300"
        >
          View all
        </Link>
      </div>
    </div>
  );
};

export default MealCategory;
