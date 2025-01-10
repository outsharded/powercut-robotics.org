import React from 'react';
import Header from './Header';
import Image from 'next/image';
import Footer from './Footer';

import side_pitch from '../public/content/home/team_at_champs.webp';
import backdrops from '../public/content/home/2024V1.jpeg';
import in_field from '../public/content/home/keyring.jpeg';
import Banner from './banner';

const HomePage: React.FC = () => {
  return (
    
    <div className="min-h-screen font-avenir font-medium text-cyan-950 dark:text-amber-50 bg-stone-100 dark:bg-black">
      <Banner />
      <Header />
      
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <main className="">

        <div className='bg-fixed md:bg-cover pb-14' style={{backgroundImage: 'url(/backgrounds/topography.svg)'}} rel='preload'>
          
          <div className='pt-40 -mt-24'></div>
          <div className='flex justify-center items-center'>
          <div className="w-11/12 p-2 rounded-lg">
            <div className="w-full flex justify-center lg:h-[800px] 2xl:h-[1000px]">
              <Image className="rounded-lg object-cover object-top brightness-90 dark:opacity-95 opacity-100" src={side_pitch} alt="powercut team with awards"  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 75vw, 80vw" priority />
              <div className="absolute text-center pt-2 w-full text-amber-50">
                <h1 className="text-4xl md:text-5xl xl:text-7xl font-bold font-avenir ">Powercut Robotics</h1>
                <div className='w-full'><h1 className="text-3xl xl:text-4xl  font-medium font-avenir invisible lg:visible line-clamp-1">First Tech Challenge #25268 - UK 497</h1></div>
                
              </div>
            </div>

          </div>
          </div>
          
        </div>

        <div className='w-full bg-powercut_pink_contrast text-cyan-950 grid grid-cols-1 lg:grid-cols-2 justify-center items-center text-center md:text-start py-6'>
          
          <div className='rounded-lg m-4 h-full'>
            <Image className="rounded-lg float-right w-2/5 2 m-3 aspect-[1/1] object-cover" src={in_field} alt="game backdrops"  sizes="(max-width: 1024px) 40vw, 20vw" />
            <h1 className="text-4xl font-medium font-avenir p-2">About Us</h1>
            <p className='p-2 text-lg font-medium text-start'>
              Hi! We&apos;re Powercut Robotics, #25268 (UK-497) from Langley Park School for Boys in South London.  <br /> <br /> 
              As the primary team of a Championship Organisation, we assist other teams witin our organisation and outside and promote STEM and robotics in our community<br /> <br /> 
            </p>
            
          </div>
         
          <div className='rounded-lg m-4 h-full'>
            <Image className="rounded-lg float-left w-2/5 m-3 aspect-[1/1] object-cover" src={backdrops} alt="robot in field" sizes="(max-width: 1024px) 40vw, 20vw" />
            <h1 className="text-4xl font-medium font-avenir p-2">Into The Deep</h1>
            <p className='p-2 text-lg font-small text-start'>Our scrimmage robot, was V1 of the season. We&apos;re redesigning for regionals to have a much more competitive robot.<br /> <br /> 
            As a Championship Organisation, we host events. Our scrimmage on 5 December 2024 was attended by over 100 students. Our team delivered talks to help propel other teams. We look forward to welcoming teams again at our regionals.</p>
          </div>
        
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 p-3 text-center md:text-start text-md'>
          
          <div className='rounded-lg m-4'>
            <h1 className="text-5xl font-medium font-avenir p-2">Outreach</h1>
            <p className='p-2'>We are dedicated to expanding uptake of STEM and assisting other FTC teams. <br />We are working with a local teams to assist their robotics programs, and are pushing STEM in local primary schools, and will be running sessions for local primaries to experiment with engineering concepts using Lego.</p>
          </div>

          <div className='rounded-lg m-4'>
            <h1 className="text-5xl font-medium font-avenir p-2">Control</h1>
            <p className='p-2'>Our control system uses complex algoriths and theories to maximise on-field performance. We use many advanced systems, such as Proportional, Integral, Derivative controllers and FeedForward controllers, especially for pathing during autonomous.</p>
          </div>

          <div className='rounded-lg m-4'>
            <h1 className="text-5xl font-medium font-avenir p-2">Design</h1>
            <p className='p-2'>Our Into the Deep robot is one of the first in the UK to implement a parallel plate drivetrain, allowing better weight distribution and a reduced footprint, making our robot excedingly maeverable and space efficient.</p>
          </div>
          
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
