import React from 'react';

const MealCategory = ({ filterMeals }) => {
  return (
    <div className="meal-categories">
      <button onClick={() => filterMeals('Breakfast')}>Breakfast</button>
      <button onClick={() => filterMeals('Lunch')}>Lunch</button>
      <button onClick={() => filterMeals('Dinner')}>Dinner</button>
    </div>
  );
};

export default MealCategory;
