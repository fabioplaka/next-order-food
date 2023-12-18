import Link from "next/link";
import React from "react";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import { MainHeaderBackground } from ".";
import { NavLink } from "..";

const MainHeader: React.FC = ({}) => {
  return (
    <>
      <MainHeaderBackground />
      <header className="flex justify-between items-center py-12 px-4 min-w-md sm:px-10">
        <Link
          href="/"
          className="flex items-center justify-center gap-8 no-underline text-[#ddd6cb] font-bold letter tracking-widest	uppercase text-lg"
        >
          <Image
            className="object-contain drop-shadow-md"
            width={80}
            height={80}
            src={logoImg.src}
            alt="logo-img"
            priority
          />
          Next Order Food
        </Link>
        <nav>
          <ul className="flex m-0 p-0 gap-6 text-base">
            <li>
              <NavLink
                href="/meals"
                className="focus:bg-gradient-to-r 
                focus:from-orange-500 
                focus:to-yellow-400  
                focus:bg-clip-text 
                focus:text-transparent 
                focus:text-shadow
                active:bg-gradient-to-r 
                active:from-orange-500 
                active:to-yellow-400 
                active:bg-clip-text
                active:text-transparent 
                active:text-shadow"
              >
                Browse Meals
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/community"
                className="focus:bg-gradient-to-r 
                focus:from-orange-500 
                focus:to-yellow-400  
                focus:bg-clip-text 
                focus:text-transparent 
                focus:text-shadow
                active:bg-gradient-to-r 
                active:from-orange-500 
                active:to-yellow-400 
                active:bg-clip-text
                active:text-transparent 
                active:text-shadow"
              >
                Food Community
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
