import React from 'react'
import { FaFacebookF, FaHouse, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className="pt-20 pb-12 bg-black">
      <div className="w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20">
        <div>
          <div className="flex items-center space-x-2">
            <div className="md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex items-center justify-center flex-col">
              <FaHouse/>
            </div>
            <h1 className="text-white font-bold text-sm sm:text-base md:text-xl">MSHomeHub</h1>
          </div>
          <p className="text-gray-300 mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt inventore neque hic est,</p>
          <p className="text-gray-300 mt-4 font-semibold">example@gmail.com</p>
          <p className="text-gray-300 mt-2 font-semibold">+123 456 789</p>
          <div className="flex items-center space-x-4 mt-6">
            <FaFacebookF className="w-6 h-6 text-blue-600"/>
            <FaTwitter className="w-6 h-6 text-sky-500"/>
            <FaYoutube className="w-6 h-6 text-red-700"/>
            <FaInstagram className="w-6 h-6 text-pink-600"/>
          </div>
        </div>
        <div className='md:mx-auto'>
            <h1 className="text-lg text-white font-bold mb-4">Populer Search</h1>
            <p className="text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-60 mb-3 w-fit">Apartment For Rent</p>
            <p className="text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-60 mb-3 w-fit">Apartment Low To High</p>
            <p className="text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-60 mb-3 w-fit">Offices For Buy</p>
            <p className="text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-60 mb-3 w-fit">Offices For Rent</p>
        </div>
        <div className='md:mx-auto'>
            <h1 className="text-lg text-white font-bold mb-4">Quick Links</h1>
            <p className="text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-60 mb-3 w-fit">Terms of use</p>
            <p className="text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-60 mb-3 w-fit">Privacy Policy</p>
            <p className="text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-60 mb-3 w-fit">Pricing Plans</p>
            <p className="text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-60 mb-3 w-fit">Our Services</p>
            <p className="text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-60 mb-3 w-fit">Contact Support</p>
            <p className="text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-60 mb-3 w-fit">Careers</p>
        </div>
        <div className='md:mx-auto'>
            <h1 className="text-lg text-white font-bold mb-4">Discover</h1>
            <p className="text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-60 mb-3 w-fit">Miami</p>
            <p className="text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-60 mb-3 w-fit">Los Angeles</p>
            <p className="text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-60 mb-3 w-fit">London</p>
            <p className="text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-60 mb-3 w-fit">Chicago</p>
            <p className="text-base text-white hover:text-rose-500 hover:underline cursor-pointer text-opacity-60 mb-3 w-fit">New York</p>
        </div>
      </div>
      <p className="text-center text-base text-white mt-4 opacity-70">@Copyright 2025 by Mohammed Shakil</p>
    </div>
  )
}

export default Footer