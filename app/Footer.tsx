"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className='font-avenir grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 w-full text-md'>

        <div className='bg-stone-200 dark:bg-neutral-950 h-32 m-2 rounded-lg'>
          <h1 className='text-4xl p-2 font-bold'>Contact Us</h1>
          
          <a href="mailto:fabian@langley-robotics.org" className='px-2 py-1'>Contact: adrian@langley-robotics.org</a><br/>
        </div>

        <div className='bg-stone-200 dark:bg-neutral-950 h-32 m-2 rounded-lg'>
            <h1 className='text-4xl p-2 font-bold'>Finance</h1>
            <a href="mailto:keiran@langley-robotics.org" className='px-2 py-1'>Finance: keiran@langley-robotics.org</a><br/>
        </div>

        <div className='bg-stone-200 dark:bg-neutral-950 h-32 m-2 rounded-lg'>
            <h1 className='text-4xl p-2 font-bold'>Socials</h1>
            <a href="https://www.instagram.com/lpsb_robotics/" className='px-2 py-1'>Instagram</a><br/>
        </div>
      <p className='m-2 font-avenir'>© Powercut Robotics</p>
    </footer>
  );
};

export default Footer;
