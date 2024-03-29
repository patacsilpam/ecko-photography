// import Link from 'next/link';
// import Image from 'next/image';
// export default function Page() {
//   return (
//     <div className="h-screen bg-cover" style={{backgroundImage:"url('assets/banner.png')"}}>
//       <div className='flex flex-row justify-around'>
//         <div className="">
//           <p className='text-white'>ECKO Photography</p>
//         </div>
//         <div className="flex flex-row">
//             <ul className='text-white flex flex-row space-x-16'>
//               <li><Link href="/">Home</Link></li>
//               <li><Link href="/">Portfolio</Link></li>
//               <li><Link href="/">Packages</Link></li>
//               <li><Link href="/">About</Link></li>
//               <li><Link href="/">Contact</Link></li>
//             </ul>  
//             <div className="md:hidden dropdown text-white">
//               <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
//               </div>
//               <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-screen">
//                 <li><a>Homepage</a></li>
//                 <li><a>Portfolio</a></li>
//                 <li><a>About</a></li>
//               </ul>
//           </div>
//         </div>
//       </div>
//   </div>
//   );
// }

// components/Hero.js

'use client'
import React, { useState } from 'react';
import { Menu, X } from 'react-feather';
import SocialProofComponent from './components/proof';

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <div className="relative bg-cover bg-center h-screen flex items-center justify-center" style={{backgroundImage:"url('assets/banner.png')"}}>
      {/* Background Image */}
      <div className="absolute inset-0 bg-gray-900 opacity-10"></div>
      
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          {/* <img src="/logo.png" alt="Logo" className="h-8 mr-2" /> */}
          <span className="text-white text-xl font-extralight">ECKO Photography</span>
        </div>
        
        {/* Burger Button for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-gray-900 flex justify-center items-center z-10">
          {/* Close (X) Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
          >
            <X className="h-6 w-6" />
          </button>
          {/* Menu Links */}
          <ul className="text-white text-center space-y-8">
            <li><a href="#" className="text-3xl hover:text-gray-300">Home</a></li>
            <li><a href="#" className="text-3xl hover:text-gray-300">Portfolio</a></li>
            <li><a href="#" className="text-3xl hover:text-gray-300">Packages</a></li>
            <li><a href="#" className="text-3xl hover:text-gray-300">About</a></li>
            <li><a href="#" className="text-3xl hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
      )}

      {/* Hero Text */}
      <div className="absolute text-center">
        <h1 className="text-white text-4xl font-bold mb-4">Welcome to Your Website</h1>
        <p className="text-white text-lg">Your awesome tagline goes here</p>
      </div>
    </div>

    <div className="mx-auto ">
      <SocialProofComponent/>
    </div>
    </>
  );
}
