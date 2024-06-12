'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 770) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="flex justify-around items-center p-5 bg-[#141214] shadow-lg relative">
        <div className="text-2xl">
          <a href="#">Logo</a>
        </div>
        <div className="hidden md:flex">
          <ul className="flex space-x-4">
            <Link href='/'>
          <li className="relative py-2 px-5 cursor-pointer hover:bg-orange-700 rounded-2xl">
          <p className="text-white no-underline">Home</p>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-600 scale-x-0 origin-bottom-left transition-transform duration-300 ease-in-out hover:scale-x-100"></div>
            </li>
            </Link>

            <Link href='/about'>
            <li className="relative py-2 px-5 cursor-pointer hover:bg-orange-700 rounded-2xl">
              <Link href="/about" className="text-white no-underline">About Us</Link>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-600 scale-x-0 origin-bottom-left transition-transform duration-300 ease-in-out hover:scale-x-100"></div>
            </li>
            </Link>

            <Link href='/service'>
            <li className="relative py-2 px-5 cursor-pointer hover:bg-orange-700 rounded-2xl">
              <Link href="/service" className="text-white no-underline">What we do</Link>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-600 scale-x-0 origin-bottom-left transition-transform duration-300 ease-in-out hover:scale-x-100"></div>
            </li>
            </Link>

            <Link href='/blog'>
            <li className="relative py-2 px-5 cursor-pointer hover:bg-orange-700 rounded-2xl">
              <a href='/blog' className="text-white no-underline">Blog</a>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-600 scale-x-0 origin-bottom-left transition-transform duration-300 ease-in-out hover:scale-x-100"></div>
            </li>
            </Link>

            <Link href='/contact'>
            <li className="relative py-2 px-5 cursor-pointer hover:bg-orange-700 rounded-2xl">
              <Link href="/contact" className="text-white no-underline ">Contact Us</Link>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-600 scale-x-0 origin-bottom-left transition-transform duration-300 ease-in-out hover:scale-x-100"></div>
            </li>
            </Link>
          </ul>
        </div>
        <div className="border border-[#d36f28] relative inline-block overflow-hidden cursor-pointer hidden md:flex rounded-md">
  <div className="absolute top-0 left-1/2 w-0 h-full bg-orange-600 transition-all duration-300 ease-in-out hover:w-full hover:left-0"></div>
  <a href="#" className="relative block py-2 px-5 text-orange-600 no-underline z-10">Get Consultation</a>
</div>


        <div id="hamburger-menu" className="block md:hidden text-white text-3xl cursor-pointer" onClick={() => setMobileMenuOpen(true)}>&#9776;</div>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-menu" className="fixed inset-0 flex flex-col items-center justify-center bg-orange-600 transition-transform duration-300 transform translate-x-0 z-50">
          <div className="flex flex-col items-center">
            <ul className="space-y-4 text-center">
              <li className="relative py-2 px-5 cursor-pointer">
                <Link href='/about' className="text-white no-underline">About Us</Link>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white scale-x-0 origin-bottom-left transition-transform duration-300 ease-in-out hover:scale-x-100"></div>
              </li>
              <li className="relative py-2 px-5 cursor-pointer">
                <Link href='/service' className="text-white no-underline">What we do</Link>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white scale-x-0 origin-bottom-left transition-transform duration-300 ease-in-out hover:scale-x-100"></div>
              </li>
              <li className="relative py-2 px-5 cursor-pointer">
                <Link href='blog' className="text-white no-underline">Blog</Link>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white scale-x-0 origin-bottom-left transition-transform duration-300 ease-in-out hover:scale-x-100"></div>
              </li>
              <li className="relative py-2 px-5 cursor-pointer">
                <Link href='/contact' className="text-white no-underline">Contact Us</Link>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white scale-x-0 origin-bottom-left transition-transform duration-300 ease-in-out hover:scale-x-100"></div>
              </li>
              
            </ul>
          </div>
          <div className="bg-[#141214] rounded-full relative inline-block overflow-hidden cursor-pointer mt-5">
            <div className="absolute top-0 left-1/2 w-0 h-full bg-white transition-all duration-300 ease-in-out hover:w-full hover:left-0"></div>
            <a href="#" className="relative block py-2 px-5 text-white no-underline z-10">Get Consultation</a>
          </div>
          <div id="hamburger-cross" className="absolute top-5 right-5 text-white text-3xl cursor-pointer" onClick={() => setMobileMenuOpen(false)}>&#10006;</div>
        </div>
      )}
    </>
  );
};

export default Navbar;
