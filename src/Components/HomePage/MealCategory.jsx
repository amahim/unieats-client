import React, { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useAxiosSecure from "../Hooks/UseAxiosSecure";
import MealCatTab from "./MealCatTab";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
const MealCategory = () => {

    const [tabIndex,setTabIndex] = useState(0)

const axiosSecure = useAxiosSecure();

  const { data: meals = [], refetch } = useQuery({
    queryKey: ["meals"],
    queryFn: async () => {
      const res = await axiosSecure.get("/meals");
      return res.data;
    },
  });

  const Breakfasts = meals.filter(meal => meal.category==="Breakfast").slice(0, 3)
  const Lunchs = meals.filter(meal => meal.category==="Lunch").slice(0, 3)
  const Dinners = meals.filter(meal => meal.category==="Dinner").slice(0, 3)
  const allMeals = meals.slice(0, 6)


  return (
    <div className="w-4/5 mx-auto mt-10">
      <div>
        <SectionTitle heading="Meals" subHeading="Meals By Category" />
      </div>
      {/* tabs */}
      <div>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="text-center mb-5">
            <Tab>Breakfast</Tab>
            <Tab>Lunch</Tab>
            <Tab>Dinner</Tab>
            <Tab>All Meals</Tab>
          </TabList>
          <TabPanel><MealCatTab items={Breakfasts}/></TabPanel>
          <TabPanel><MealCatTab items={Lunchs}/></TabPanel>
          <TabPanel><MealCatTab items={Dinners}/></TabPanel>
          <TabPanel><MealCatTab items={allMeals}/></TabPanel>
        </Tabs>
      </div>
      <div className="text-center mt-6">
        <Link to="/meals" className="btn bg-[#f15b42] border-none rounded-lg text-white">View all</Link>
      </div>
    </div>
  );
};

export default MealCategory;
