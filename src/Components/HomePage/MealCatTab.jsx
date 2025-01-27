import ShowMeals from "../AllMeals/ShowMeals";

const MealCatTab = ({items}) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            items.map(meal => <ShowMeals
              meal={meal}
              key={meal._id}
            />)
          }
          </div>
        </div>
    );
};

export default MealCatTab;