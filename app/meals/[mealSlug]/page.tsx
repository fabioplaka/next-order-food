import Image from "next/image";
import React from "react";

import { getMeal } from "@/lib/meals";
import { MealType } from "@/types/MealType";
import { notFound } from "next/navigation";

const MealDetails: React.FC = ({ params }: any) => {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className="flex py-8 px-4 gap-12 m-auto max-w-[80rem]">
        <div className="relative w-[30rem] h-[20rem]">
          <Image
            src={meal.image ?? ""}
            alt={meal.title}
            fill
            className="object-cover rounded-lg shadow-md animate-fade-slide-in-from-left"
          />
        </div>
        <div className="pt-2 pb-0 px-4 text-[#ddd6cb] max-w-[40rem] animate-fade-slide-in-from-right">
          <h1 className="m-0 text-[3.5rem] uppercase font-bold">
            {meal.title ?? ""}
          </h1>
          <p className="text-2xl text-[#cfa69b] italic">
            by{" "}
            <a
              href={`mailto:${meal.creator_email ?? ""}`}
              className="transition-all duration-300 hover:text-transparent hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-300 hover:shadow-md"
            >
              {meal.creator ?? ""}
            </a>
          </p>
          <p className="text-2xl">{meal.summary ?? ""}</p>
        </div>
      </header>
      <main>
        <p
          className="text-2xl leading-6 bg-[#6e6464] text-[#13120f] rounded-lg shadow-md p-8 max-w-[60rem] my-8 mx-auto animate-fade-slide-in-from-bottom"
          dangerouslySetInnerHTML={{
            __html: meal.instructions ?? "",
          }}
        />
      </main>
    </>
  );
};

export default MealDetails;
