import Image from "next/image";
import React from "react";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";

interface CommunityProps {}

const Community: React.FC<CommunityProps> = ({}) => {
  return (
    <>
      <header className="gap-12 mt-12 mr-auto mb-20 ml-auto w-[90%] text-[#ddd6cb] text-2xl text-center">
        <h1 className="text-4xl mb-4 font-bold">
          One shared passion:{" "}
          <span className="bg-gradient-to-r from-orange-500 to-yellow-300 bg-clip-text	text-transparent">
            Food
          </span>
        </h1>
        <p className="text-base">
          Join our community and share your favorite recipes!
        </p>
      </header>
      <main className="w-[90%] max-w-[40rem] my-0 mx-auto text-center">
        <h2 className="text-2xl mb-12 text-[#ddd6cb] font-bold">
          Community Perks
        </h2>

        <ul className="list-none	my-12 mx-0 p-0">
          <li className="flex flex-col items-center gap-8">
            <Image
              src={mealIcon}
              alt="A delicious meal"
              className="w-[8rem] h-[8rem] object-contain"
            />
            <p className="text-2xl font-bold m-0 text-[#ddd6cb]">
              Share & discover recipes
            </p>
          </li>
          <li className="flex flex-col items-center gap-8">
            <Image
              src={communityIcon}
              alt="A crowd of people, cooking"
              className="w-[8rem] h-[8rem] object-contain"
            />
            <p className="text-2xl font-bold m-0 text-[#ddd6cb]">
              Find new friends & like-minded people
            </p>
          </li>
          <li className="flex flex-col items-center gap-8">
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
              className="w-[8rem] h-[8rem] object-contain"
            />
            <p className="text-2xl font-bold m-0 text-[#ddd6cb]">
              Participate in exclusive events
            </p>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Community;
