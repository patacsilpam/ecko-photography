import React, { useState, useEffect } from 'react'
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='fixed top-0 z-50'>
      <div>
        <nav className={`flex flex-row justify-around w-screen p-5 ${scrolling ? 'bg-[#102923] duration-75 transition-all ease-in-out' : ''}`}>
          {/*LOGO <div className="absolute bg-slate-600 bg-opacity-10 -z-1"></div>*/}
          <div>
            <Link href="#" className="text-[#ffffff] text-2xl font-bold">Ecko Photography</Link>
          </div>
          <div>
            <ul className='hidden lg:block space-x-10'>
              <Link href="/" className="text-[#ffffff] hover:text-[#102923] hover:underline transition hover:ease-in-out px-3 py-2 rounded-md text-md font-semibold">HOME</Link>
              <Link href="/portfolio" className="text-[#ffffff]  hover:text-[#102923] hover:underline  px-3 py-2 rounded-md text-md font-semibold">PORTFOLIO</Link>
              <Link href="/packages" className="text-[#ffffff]  hover:text-[#102923] hover:underline px-3 py-2 rounded-md text-md font-semibold">PACKAGES</Link>
              <Link href="/about" className="text-[#ffffff] hover:text-[#102923] hover:underline px-3 py-2 rounded-md text-md font-semibold">ABOUT</Link>
              <Link href="/contact" className="text-[#ffffff] hover:text-[#102923] hover:underline px-3 py-2 rounded-md text-md font-semibold">CONTACT</Link>
            </ul>
            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gray-300 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
             {/* Mobile Menu */}
       
          </div>
          {/* */}
        </nav>
        {isOpen && (
          <div className='fixed top-0 w-screen -z-50'>
              <div className="lg:hidden z-20 bg-[#28282B] h-screen relative">
              <div className="px-2 pt-2 pb-3 sm:px-3  flex flex-col justify-center items-center space-y-10 h-screen">
                  <Link href="/" className="text-[#FFFFFF]  hover:text-[#277764] p-2 rounded-md text-lg font-semibold">Home</Link>
                  <Link href="/portfolio" className="text-[#FFFFFF]  hover:text-[#277764] p-2 rounded-md text-lg font-semibold">Portfolio</Link>
                  <Link href="/packages" className="text-[#FFFFFF]  hover:text-[#277764] p-2 rounded-md text-lg font-semibold">Packages</Link>
                  <Link href="/about" className="text-[#FFFFFF]  hover:text-[#277764] p-2 rounded-md text-lg font-semibold">About</Link>
                  <Link href="/contact" className="text-[#FFFFFF]  hover:text-[#277764] p-2 rounded-md text-lg font-semibold">Contact</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar