"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`no-underline 
      text-[#ddd6cb] 
      font-bold 
      transition 
      duration-300 
      ease-in-out 
      hover:bg-gradient-to-r 
      hover:from-orange-500 
      hover:to-yellow-400 
      hover:bg-clip-text 
      hover:text-transparent 
      hover:text-shadow ${path.startsWith(href) ? className : undefined}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
