"use client"
import React  from 'react';
import { useState } from 'react';
import SocialProofComponent from './components/proof';
import ServicesComponent from './components/services'
import FeaturedComponent from './components/featured';
import NominationComponent from './components/nominations';
import FooterComponent from './headers/footer'
import NavbarComponent from './headers/navbar'
import Link from 'next/link';
import Image from 'next/image';
import ImageBanner from './../../public/assets/banner.webp'
const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <div>
      <NavbarComponent/>
      
      <nav className='bg-cover h-screen relative -mt-7 contrast-125' style={{backgroundImage:"url('assets/banner.webp')"}}>
      <div className="absolute bg-slate-600 bg-opacity-10 -z-1"></div>
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
      {/*
          <nav className='bg-cover h-96 relative' style={{backgroundImage:"url('assets/banner.webp')"}}>
      <div className="absolute bg-slate-600 bg-opacity-10 -z-1"></div>
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
      */}
      
     <NominationComponent/>
     <SocialProofComponent/>
     <ServicesComponent/>
     <FeaturedComponent/> 
     <FooterComponent/>
     
    </div>
  );
};

export default Navbar;
