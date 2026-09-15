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
      <div className="bg-slate-900/80 rounded-3xl p-6 md:p-8 border border-slate-800 shadow-xl">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="flex flex-wrap justify-center gap-3 mb-8 border-0">
            <Tab
              className="px-6 py-2.5 rounded-full cursor-pointer text-slate-300 transition-all duration-200 hover:text-white hover:bg-slate-800 font-medium text-sm md:text-base border border-slate-800/80 outline-none"
              selectedClassName="!bg-orange-500 !text-white !font-bold !border-orange-400/50 shadow-lg shadow-orange-500/25"
            >
              Breakfast
            </Tab>
            <Tab
              className="px-6 py-2.5 rounded-full cursor-pointer text-slate-300 transition-all duration-200 hover:text-white hover:bg-slate-800 font-medium text-sm md:text-base border border-slate-800/80 outline-none"
              selectedClassName="!bg-orange-500 !text-white !font-bold !border-orange-400/50 shadow-lg shadow-orange-500/25"
            >
              Lunch
            </Tab>
            <Tab
              className="px-6 py-2.5 rounded-full cursor-pointer text-slate-300 transition-all duration-200 hover:text-white hover:bg-slate-800 font-medium text-sm md:text-base border border-slate-800/80 outline-none"
              selectedClassName="!bg-orange-500 !text-white !font-bold !border-orange-400/50 shadow-lg shadow-orange-500/25"
            >
              Dinner
            </Tab>
            <Tab
              className="px-6 py-2.5 rounded-full cursor-pointer text-slate-300 transition-all duration-200 hover:text-white hover:bg-slate-800 font-medium text-sm md:text-base border border-slate-800/80 outline-none"
              selectedClassName="!bg-orange-500 !text-white !font-bold !border-orange-400/50 shadow-lg shadow-orange-500/25"
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
      <div className="text-center mt-10">
        <Link
          to="/meals"
          className="btn btn-gradient-primary rounded-full px-8 py-3 font-semibold text-white shadow-lg"
        >
          View All Meals
        </Link>
      </div>
    </div>
  );
};

export default MealCategory;
