import React from 'react';
import Carousal from './Carousal';
import About from './Us';

import test from '../../assets/about/year2/jishnu.jpeg';

const Home = () => {
  const textArray = ["About TED", "About TEDx", "About TEDxSIT", "Our Mission", "Our Vision", "Join Us"];

  return (
    <>
      <div className='h-screen flex items-center justify-center text-6xl font-bold text-gray-800'>
        Kronospect
      </div>

      <div className='my-12'>
        <Carousal />
      </div>

      <div className='py-12'>
        <About />
      </div>

      <div className='flex flex-col items-center text-center px-6 py-16 space-y-8'>
        <h1 className='text-5xl font-bold'>REASONS TO ATTEND</h1>
        <p className='text-lg max-w-2xl'>
          Opportunity to meet the heroes you have followed for your life and interact with pioneers of the fields you are interested in.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 px-28 pb-16 place-items-center'>
        {textArray.map((text, index) => (
          <div key={index} className='w-[450px] h-[450px] rounded-full bg-gray-500 flex items-center justify-center overflow-hidden relative group shadow-lg'>
            <span className='absolute text-white text-2xl font-semibold z-10 text-center px-4'>{text}</span>
            <img
              src={test}
              alt='Description'
              className='w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500'
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;