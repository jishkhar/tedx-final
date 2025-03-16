import React, { useState } from 'react';
import Card from './Card.jsx';
import { motion } from 'framer-motion'
import { fadeIn5 } from '../../variants.js';

import test from '../../assets/about/year2/jishnu.jpeg'


const Speakers = () => {

  const [visibleYear, setVisibleYear] = useState('2024');

  const handleButtonClick = (year) => {
    setVisibleYear(year);
  };

  return (
    <>
      <div className='flex flex-col justify-center items-center w-[90%] mx-auto my-14'>
        <div className='text-[2.9rem]'>
          <span className='text-red-600'>PAST</span> &nbsp; SPEAKERS
        </div>

        <div id="years" className='flex gap-12 text-3xl py-10'>
          {['2024', '2023', '2022', '2021', '2020', '2019'].map((year) => (
            <button
              key={year}
              className={`py-3 px-6 rounded-full cursor-pointer ${visibleYear === year ? 'text-red-600' : 'text-white'}`}
              onClick={() => handleButtonClick(year)}
            >
              {year}
            </button>
          ))}
        </div>

        
        <div id="2019" className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ${visibleYear === '2019' ? '' : 'hidden'}`}>
          <Card name="Pooja Sachdeva" position="CEO"  test={test} />
          <Card name="Santa Santosh Avvannavar" position="CEO" test={test}  />
          <Card name="Alcatraz Dey" position="CEO" test={test} />
          <Card name="Baisakhi Saha" position="CEO" test={test} />
          <Card name="The Params" position="CEO" test={test} />
          <Card name="Goonjan Mall" position="CEO" test={test}  />
          <Card name="Rohit Dey" position="CEO" test={test} />
          <Card name="Dr. Dakshayini Kanna" position="CEO" test={test} />
          <Card name="Natasha Noel" position="CEO" test={test} />
          <Card name="Surender Shah" position="CEO" test={test} />
          <Card name="Dr. Praveen Vemula" position="CEO" test={test} />
          <Card name="Prasanna Murthy" position="CEO" test={test} />
        </div>

        <div id="2020" className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ${visibleYear === '2020' ? '' : 'hidden'}`}>
          <Card name="Avelo Roy" position="CEO" test={test} />
          <Card name="K Visalini" position="CEO" test={test} />
          <Card name="Shweta Ratanpura" position="CEO" test={test}/>
          <Card name="Mohd Shams Alam" position="CEO" test={test}/>
          <Card name="Shweta Kothari" position="CEO"test={test} />
          <Card name="Dr Shyam Vasudeva Rao" position="CEO"test={test} />
          <Card name="Piali Bopanna" position="CEO"test={test} />
          <Card name="Binay Kumar" position="CEO"test={test} />
          <Card name="Swamy Veereshanda" position="CEO"test={test} />
          <Card name="Dr YS Rajan" position="CEO" test={test}/>
          <Card name="Dhanush Devang" position="CEO" test={test}/>
        </div>

        <div id="2021" className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ${visibleYear === '2021' ? '' : 'hidden'}`}>
          <Card name="Hitesh Choudhary" position="CEO" test={test} />
          <Card name="Dr Syed Asad Abbas" position="CEO" test={test} />
          <Card name="Clince Varghese" position="CEO" test={test}/>
          <Card name="Mira Erda" position="CEO" test={test} />
          <Card name="Radhika Bajoria" position="CEO" test={test} />
          <Card name="Abhay Chopra" position="CEO"  test={test}/>
          <Card name="Shreya Pattar" position="CEO" test={test} />
          <Card name="Dravisha Katoch" position="CEO" test={test}/>
          <Card name="Ankur Chaudhary" position="CEO" test={test} />
        </div>

        <div id="2022" className={` h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ${visibleYear === '2022' ? '' : 'hidden'}`}>
          {/* Event did not take place in 2022 */}
        </div>

        <motion.div 
          variants={fadeIn5("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
        
          id="2023" className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ${visibleYear === '2023' ? '' : 'hidden'}`}>
          <Card name="Prakash Belawadi" position="CEO" test={test} />
          <Card name="Santa Santosh Avvannavar" position="CEO" test={test}/>
          <Card name="Shilpa Kulshrestha" position="CEO" test={test}/>
          <Card name="Akshay Chopra" position="CEO" test={test}/>
          <Card name="Major Aditi" position="CEO" test={test}/>
          <Card name="Nithyashree Mani" position="CEO" test={test}/>
          <Card name="Ganesh Datta Lakkur" position="CEO" test={test}/>
          <Card name="Ajinkya Lohakare" position="CEO" test={test}/>
          <Card name="Yashwant J" position="CEO" test={test}/>
          <Card name="Suma Annegowda " position="CEO" test={test}/>
          <Card name="Pushpalatha" position="CEO" test={test}/>
        </motion.div>

        <motion.div 
          variants={fadeIn5("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
          
          id="2024" className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ${visibleYear === '2024' ? '' : 'hidden'}`}>
          <Card name="Shreya Rao Kumavarapu" position="CEO" test={test} />
          <Card name="Anurag Mourya" position="CEO" test={test}/>
          <Card name="Karen Vincent" position="CEO" test={test}/>
          <Card name="Ashok Venkat" position="CEO" test={test}/>
          <Card name="Vignesh Shankar" position="CEO" test={test} />
          <Card name="Pavana Ganga" position="CEO" test={test}/>
          <Card name="Sadhwin Shetty" position="CEO" test={test}/>
          <Card name="Kalyan Manjunath" position="CEO" test={test} />
        </motion.div>

      </div>
    </>
  );
};


export default Speakers;