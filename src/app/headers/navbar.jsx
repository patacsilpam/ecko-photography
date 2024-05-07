import React from 'react'
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <nav className='bg-cover h-screen relative' style={{backgroundImage:"url('assets/banner.webp')"}}>
      <div className="absolute bg-slate-600 bg-opacity-10 -z-1"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="#" className="text-[#FFFFFF] text-2xl font-bold">Ecko Photography</Link>
          </div>
          <div className="flex items-center">
            <div className="hidden lg:block space-x-12">
              <Link href="/" className="text-[#FFFFFF]  hover:text-[#277764] px-3 py-2 rounded-md text-lg font-semibold">Home</Link>
              <Link href="/portfolio" className="text-[#FFFFFF]  hover:text-[#277764] px-3 py-2 rounded-md text-lg font-semibold">Portfolio</Link>
              <Link href="/packages" className="text-[#FFFFFF]  hover:text-[#277764] px-3 py-2 rounded-md text-lg font-semibold">Packages</Link>
              <Link href="/about" className="text-[#FFFFFF]  hover:text-[#277764] px-3 py-2 rounded-md text-lg font-semibold">About</Link>
              <Link href="/contact" className="text-[#FFFFFF]  hover:text-[#277764] px-3 py-2 rounded-md text-lg font-semibold">Contact</Link>
            </div>
            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gray-300 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden z-20 bg-[#28282B] h-screen relative">
          <div className="px-2 pt-2 pb-3 sm:px-3  flex flex-col justify-center items-center space-y-10 h-screen">
              <Link href="/" className="text-[#FFFFFF]  hover:text-[#277764] p-2 rounded-md text-lg font-semibold">Home</Link>
              <Link href="/portfolio" className="text-[#FFFFFF]  hover:text-[#277764] p-2 rounded-md text-lg font-semibold">Portfolio</Link>
              <Link href="/packages" className="text-[#FFFFFF]  hover:text-[#277764] p-2 rounded-md text-lg font-semibold">Packages</Link>
              <Link href="/about" className="text-[#FFFFFF]  hover:text-[#277764] p-2 rounded-md text-lg font-semibold">About</Link>
              <Link href="/contact" className="text-[#FFFFFF]  hover:text-[#277764] p-2 rounded-md text-lg font-semibold">Contact</Link>
          </div>
        </div>
      )}
      <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 text-center -mt-12">
        <div className='flex flex-col items-center'>
          <h1 className="text-white md:text-5xl text-1xl font-bold">The pause button of life.</h1>
          <span className="text-white md:text-lg  mt-3">Experience the beauty of life&apos;s pauses through our lens.</span> 
          <button className="bg-[#277764] hover:bg-[#277764e4] text-slate-50 p-2 rounded-full w-36 mt-3">
            <Link href="https://calendly.com/pammpatacsil/book-now" target='_blank'>Book Now</Link>
          </button>
         
          
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar