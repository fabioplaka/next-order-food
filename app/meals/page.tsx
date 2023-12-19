import { MealsGrid } from "@/components";
import Link from "next/link";
import React, { Suspense } from "react";
import { getMeals } from "@/lib/meals";

export const MealsList = async () => {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
};

const Meals: React.FC = ({}) => {
  return (
    <>
      <header className="gap-12 mt-12 mr-auto mb-20 ml-auto w-[90%] max-w-[75rem] text-[#ddd6cb] text-2xl relative">
        <h1 className="text-4xl mb-4 font-bold">
          Delicious meals, created{" "}
          <span className="bg-gradient-to-r from-orange-500 to-yellow-300 bg-clip-text	text-transparent">
            by you
          </span>
        </h1>
        <p className="text-base m-0">
          Choose your favorite receipe and cook it yourself. It is easy and fun!
        </p>
        <p className="text-base m-0">
          <Link
            href={"/meals/share"}
            className="inline-block mt-4 py-2 px-4 rounded-lg bg-gradient-to-r from-red-500 to-yellow-500 text-white font-bold"
          >
            Share your favorite Receipe
          </Link>
        </p>
      </header>
      <main className="">
        <Suspense
          fallback={
            <p className="text-center animate-pulse">Fetching meals...</p>
          }
        >
          <MealsList />
        </Suspense>
      </main>
    </>
  );
};

export default Meals;
