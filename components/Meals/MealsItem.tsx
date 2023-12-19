import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MealsItemProps {
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
}

const MealsItem: React.FC<MealsItemProps> = ({
  title,
  slug,
  image,
  summary,
  creator,
}) => {
  console.log("image: ", image);
  return (
    <article className="flex flex-col justify-between h-full rounded-[4px] shadow-md overflow-hidden transition-all duration-300 ease-in-out text-gray-300 bg-gradient-to-r from-brown-800 to-brown-900">
      <header>
        <div className="relative h-[15rem]">
          <Image className="object-cover" src={image} alt={title} fill />
        </div>
        <div className="pt-2 pr-4 pb-0 pl-4">
          <h2 className="m-0 text-2xl">{title}</h2>
          <p className="text-xs text-[#cfa69b] italic m-0">by {creator}</p>
        </div>
      </header>
      <div className="flex flex-col justify-between h-full">
        <p className="pt-4 pr-4 pb-0 pl-4">{summary}</p>
        <div className="p-4">
          <Link
            href={`/meals/${slug}`}
            className="inline-block mt-4 py-2 px-4 rounded-lg bg-gradient-to-r from-red-500 to-yellow-500 text-white font-bold hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-300 hover:shadow-lg hover:shadow-orange-500 active:bg-gradient-to-r active:from-orange-500 active:to-yellow-300 active:shadow-lg active:shadow-orange-500"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default MealsItem;
