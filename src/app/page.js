'use client'
import React, { useState } from 'react';
import SocialProofComponent from './components/proof';
import ServicesComponent from './components/services'
import FeaturedComponent from './components/featured';
import NominationComponent from './components/nominations';
import { LiaFacebookSquare } from "react-icons/lia";
import { LiaInstagram } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";
import Wedding from './../../public/assets/wedding.webp'
import Prenup from './../../public/assets/prenup.webp'
import Debut from './../../public/assets/debut.webp'
import Christening from './../../public/assets/christening.webp'
import Link from 'next/link';
import Image from 'next/image';

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
          <button className="bg-[#277764] hover:bg-[#277764e4] text-slate-50 p-2 rounded-full w-36 mt-3">Book Now</button>
        </div>
      </div>
    </nav>
     <SocialProofComponent/>
     <ServicesComponent/>
     <FeaturedComponent/> 
     <NominationComponent/>
     <footer className=' bg-[#102923]'>   
        <section className='flex flex-col md:flex-row justify-around items-center py-10 md:space-y-0 space-y-10'>
            {/*INQUIRE*/}
            <div>
              <h3 className='text-[#C6A24C] md:text-2xl text-lg'>INQUIRE</h3>
              <span className='text-[#FEFBF6] text-xl flex justify-center py-2'>let&apos;s chat </span>
            </div>
            {/*ECKO PHOTOGRAPHY*/}
            <div>
              <h3 className='text-[#C6A24C] md:text-2xl text-lg'>ECKO PHOTOGRAPHY</h3>
              <span className='text-[#FEFBF6] text-xl flex justify-center py-2'>based in the Philippines.</span>
            </div>
            {/*FOLLOW ME ON*/}
            <div>
              <h3 className='text-[#C6A24C] md:text-xl text-lg'>FOLLOW ME ON</h3>
              <div className='flex justify-around py-2'>
                <Link href={"https://www.facebook.com/EcK0Photography"} target='blank'><LiaFacebookSquare className='text-white text-3xl'/></Link>
                <Link href={"https://www.instagram.com/_eckophotography/"}><LiaInstagram className='text-white text-3xl'/></Link>
                <a href="mailto:jerico.dirilo.dl@gmail.com"><MdOutlineEmail className='text-white text-3xl'/></a>
              </div>
            </div>
           
        </section>
        <hr className='border-[#b98a1ca0] px-3 mx-5 md:mx-10'/>
          {/*videos link */}
        <section className='grid grid-cols-2 md:grid-cols-4 gap-3  place-items-center py-7 px-5'>
          <div>
            <Image src={Wedding} alt='wedding' className='h-36 w-48 md:h-52 md:w-80 object-cover'/>
          </div>
          <div>
            <Image src={Prenup} alt='prenup' className='h-36 w-48 md:h-52 md:w-80 object-cover'/>
          </div>
          <div>
            <Image src={Debut} alt='debut' className='h-36 w-48 md:h-52 md:w-80 object-cover'/>
          </div>
          <div>
            <Image src={Christening} alt='christening' className='h-36 w-48 md:h-52 md:w-80 object-cover'/>
          </div>
        </section> 
        <hr className='border-[#b98a1ca0] px-3 mx-5 md:mx-10'/>
        <section className='p-3'>
            <nav className='flex justify-around'>
                <Link href="/" className="text-[#FFFFFF]  hover:text-[#277764] px-3 py-2 rounded-md text-sm ">Home</Link>
                <Link href="/portfolio" className="text-[#FFFFFF]  hover:text-[#277764] px-3 py-2 rounded-md text-sm ">Portfolio</Link>
                <Link href="/packages" className="text-[#FFFFFF]  hover:text-[#277764] px-3 py-2 rounded-md text-sm ">Packages</Link>
                <Link href="/about" className="text-[#FFFFFF]  hover:text-[#277764] px-3 py-2 rounded-md text-sm ">About</Link>
                <Link href="/contact" className="text-[#FFFFFF]  hover:text-[#277764] px-3 py-2 rounded-md text-sm ">Contact</Link>
            </nav>
        </section>
        <hr className='border-[#b98a1ca0] px-3 mx-5 md:mx-10'/>
        <section className='mt-10'>
          <small className='text-white flex justify-center text-sm py-5'>© 2024 ECKO PHOTOGRAPHY. ALL RIGHTS RESERVED </small>
        </section>
     </footer>
    </div>
  );
};

export default Navbar;
