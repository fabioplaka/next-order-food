import { MealType } from "@/types/MealType";
import React from "react";
import { MealsItem } from ".";

interface MealsGridProps {
  meals?: MealType[];
}

const MealsGrid: React.FC<MealsGridProps> = ({ meals }) => {
  return (
    <ul className="w-[90%] max-w-[90rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-g my-8 mx-auto list-none p-0">
      {meals &&
        meals.map((meal) => (
          <li key={meal.id}>
            <MealsItem {...meal} />
          </li>
        ))}
    </ul>
  );
};

export default MealsGrid;
