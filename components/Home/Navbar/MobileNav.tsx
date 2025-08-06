"use client";

import { navLinks } from "@/Constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
    showNav: boolean;
    closeNav: ()=> void;
}
const MobileNav = ({showNav, closeNav}:Props) => {
    const openNav = showNav? "translate-x-0": "translate-x-[-100%]";
  return (
    <div>
      {/* Overlay */}
      <div className={`transform ${openNav} fixed transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}>
      </div>
      {/* Mobile Menu */}
      <div className={` ${openNav} text-white transform transition-all duration-500 delay-300 fixed flex flex-col justify-center h-full w-[80%] sm:w-[60%] bg-[#c1205e] space-y-6 z-[10000]`}>
        {navLinks.map((navlink) => (
          <Link key={navlink.id} href={navlink.url}>
            <p className="text-[20px] sm:text-[30px] ml-12 border-b-[1.5px] border-white w-fit hover:text-yellow-300 pb-1 font-medium">
              {navlink.Label}
            </p>
          </Link>
        ))}
        <CgClose onClick={closeNav} className="absolute cursor-pointer text-white top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6" />
      </div>
      
    </div>
  );
};

export default MobileNav;
