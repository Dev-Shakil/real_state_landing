"use client"
import { navLinks } from '@/Constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaHome, FaUserCircle } from 'react-icons/fa'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
    openNav: ()=> void;
}

const Nav = ({openNav}:Props) => {
    const [navBg , setNavBg] = useState(false);
    useEffect(()=>{
        const handler = ()=> {
            if(window.scrollY >= 90){
                setNavBg(true);
            }
            if(window.scrollY < 90){
                setNavBg(false);
            }
        }
        window.addEventListener("scroll", handler);
        return ()=> { 
            window.removeEventListener("scroll", handler)
        }
    },[])
  return (
    <div className={`h-[10vh] w-full fixed z-[100] transition-all duration-200 ${navBg? "bg-gray-800" : ""} `}>
        <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <div className="md:w-10 md:h-10 w-7 h-7 rounded-full flex justify-center items-center bg-rose-700 text-white flex-col">
                    <FaHome/>
                </div>
                <h1 className="font-bold text-sm sm:text-base md:text-xl text-white">MSHomeHub</h1>
            </div>
            {/* NavLinks */}
            <div className="lg:flex items-center space-x-14 text-white hidden">
                {
                    navLinks.map((navlink)=>{
                        return <Link key={navlink.id} href={navlink.url}>
                            <p className="font-medium hover:text-yellow-300 text-white">{navlink.Label}</p>
                            </Link>
                    })
                }
            </div>
            {/* Login and burgerMenu */}
            <div className="flex items-center space-x-4">
                <div className='flex items-center cursor-pointer text-white space-x-2 hover:text-red-400 transition-all duration-200'>
                    <FaUserCircle className="h-5 w-5"/>
                    <p className="font-bold text-xs sm:text-base">Login / Register</p>
                </div>
                {/* burger menu */}
            <HiBars3BottomRight onClick={openNav} className="cursor-pointer text-white lg:hidden w-6 h-6 sm:w-8 sm:h-8" />
            </div>
        </div>
    </div>
  )
}

export default Nav