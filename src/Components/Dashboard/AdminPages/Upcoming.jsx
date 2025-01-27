import React, { useState } from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/UseAxiosSecure';
import ShowUpcoming from './ShowUpcoming';
import AddUpcomingMealModal from './AddUpcomingMealModal';

const Upcoming = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  
  const { data: meals = [], refetch } = useQuery({
    queryKey: ['meals'],
    queryFn: async () => {
      const res = await axiosSecure.get('/meals');
      return res.data;
    },
  });


  const upcomingMeals = meals.filter((meal) => meal.schedule === 'Upcoming')
  .sort((a, b) => b.likes - a.likes);

  return (
    <div>
      <div>
        <SectionTitle heading="Upcoming Meals" />
      </div>
      <div className="text-center">
        {/* Add Meal Button */}
        <button className="btn" onClick={() => setIsModalOpen(true)}>
          Add More Upcoming Meals
        </button>
      </div>
      <div>
        <div className="overflow-x-auto mt-4">
          <table className="table">
            {/* Table Head */}
            <thead>
              <tr className="">
                <th className="px-4 py-2 border">Title</th>
                <th className="px-4 py-2 border text-center">Likes</th>
                <th className="px-4 py-2 border text-center">Distributor</th>
                <th className="px-4 py-2 border text-center">Publish</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {upcomingMeals.map((meal) => (
                <ShowUpcoming meal={meal} key={meal._id} refetch={refetch} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <AddUpcomingMealModal
          onClose={() => setIsModalOpen(false)}
          refetch={refetch} 
        />
      )}
    </div>
  );
};

export default Upcoming;
