"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import logo from '../public/logo.svg'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="z-10 sticky font-bold font-avenir text-md top-12 opacity-90  bg-stone-100 dark:bg-neutral-950 p-4 flex justify-between items-center h-24 md:h-32">
      <SpeedInsights/>
      <Analytics/>
      <div className={`basis-1/2 flex items-center ${isMenuOpen ? 'hidden' : ''}`}>
        <Link href="/">
        <div className="hidden md:block logo w-72 p-4">
          <Image src={logo} alt="Powercut Robotics Team Logo" sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 33vw" />
        </div></Link>
      </div>
      <div className="md:basis-3/5 flex justify-end w-full">
        <div className={`w-full lg:w-auto ${isMenuOpen ? '' : 'hidden lg:flex'}`}>
          <nav className={`nav ${isMenuOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="flex flex-wrap lg:justify-end text-xl">
            <Link href="https://directory.powercut-robotics.org" className="hover:text-gray-300 p-2" prefetch={true}>
                Directory
              </Link>

              <a href="mailto:mfry@lpsb.org.uk,contact@powercut-robotics.org,info@powercut-robotics.org?subject=Support%20Powercut%20Robotcs" className="hover:text-gray-300 p-2">
                Help us
              </a>

              

              <Link href="/awards" className="hover:text-gray-300 p-2" prefetch={true}>
                Awards
              </Link> 

              <Link href="/team" className="hover:text-gray-300 p-2" prefetch={true}>
                The Team
              </Link>
              {/** 
              <Link href="/outreach" className="hover:text-gray-300 p-2">
                Outreach
              </Link>
              
              <Link href="https://www.gofundme.com/en-gb" className="hover:text-gray-300 p-2">
                Donate
              </Link>
              */}
              <Link href="https://www.instagram.com/powercut_robotics/" className="hover:text-gray-300 p-2" prefetch={true}>
                Instagram
              </Link>
            </div>
          </nav>
          
        </div>
        <div className="lg:hidden absolute top-8 right-4">
          <button id='menu' aria-label="menu" onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
