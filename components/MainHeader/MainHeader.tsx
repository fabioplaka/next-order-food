import Link from "next/link";
import React from "react";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import { MainHeaderBackground } from ".";

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
              <Link
                href="/meals"
                className="no-underline text-[#ddd6cb] font-bold transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-400 hover:bg-clip-text hover:text-transparent hover:text-shadow"
              >
                Browse Meals
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className="no-underline text-[#ddd6cb] font-bold transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-400 hover:bg-clip-text hover:text-transparent hover:text-shadow"
              >
                Food Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
