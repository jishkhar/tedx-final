import React, { useState } from 'react';
import Card from './Card.jsx';

import { motion } from 'framer-motion'
import { fadeIn5 } from '../../variants.js';

import kalyan from "../../assets/home/kalyan.png";
  import shreya from "../../assets/home/shreya.png";
  import karen from "../../assets/home/karen.png";
  import sadhwin from "../../assets/home/sadhwin.png"
  import pavana from "../../assets/home/pavana.png";
  import vignesh from "../../assets/home/vignesh.png";
  import ashok from "../../assets/home/ashok.png";
  
 import anurag from "../../assets/home/anurag.png"

 import abhay from "../../../src/speakers/21abhay.jpeg";
import ankur from "../../../src/speakers/21ankur.jpeg";
import clinche from "../../../src/speakers/21clinche.png";
import dravisha from "../../../src/speakers/21dravisha.jpeg";
import mira from "../../../src/speakers/21mira.jpg";
import radhika from "../../../src/speakers/21radhika.webp";
import shre from "../../../src/speakers/21shreya.jpeg";
import syed from "../../../src/speakers/21syedasad.jpeg";
import hitesh from "../../../src/speakers/hitesh.jpg";

import santhosh from "../../../src/speakers/21abhay.jpeg";
import aditi from "../../../src/speakers/21ankur.jpeg";
import ajinkya from "../../../src/speakers/21clinche.png";
import akshay from "../../../src/speakers/21dravisha.jpeg";
import ganesh from "../../../src/speakers/21mira.jpg";
import initya from "../../../src/speakers/21radhika.webp";
import prakash from "../../../src/speakers/21shreya.jpeg";
import shilpa from "../../../src/speakers/21syedasad.jpeg";
import yash from "../../../src/speakers/yashwanth.jpg";
import suma from "../../../src/speakers/suma.jpg";
import pushpa from "../../../src/speakers/pushpa.jpg"

import baisakhi from "../../../src/speakers/19baisakhi.jpg";
import aslam from "../../../src/speakers/20aslam.jpg";
import avelo from "../../../src/speakers/20avelo.jpg";
import binay from "../../../src/speakers/20binay.jpg";
import dhanush from "../../../src/speakers/20dhanush.jpg";
import piali from "../../../src/speakers/20piali.jpg";
import rajan from "../../../src/speakers/20rajan.jpg";

import sweta from "../../../src/speakers/20sweta.jpg";
import syam from "../../../src/speakers/20syam.jpg";
import visalini from "../../../src/speakers/20visalini.jpg";

import goonjan from "../../../src/speakers/23goonjan.jpg";
import natasha from "../../../src/speakers/23natasha.jpg";
import prasanna from "../../../src/speakers/23Prasanna.jpg";
import praveen from "../../../src/speakers/23praveen.jpg";
import rohit from "../../../src/speakers/23rohith.jpg";
import koth from "../../../src/speakers/20skoth.jpg";
import al from "../../../src/speakers/al.jpg"
import pooja from "../../../src/speakers/pooja.jpg";
import swami from "../../../src/speakers/20swami.jpg";
import Sur from "../../../src/speakers/Sur.jpg";

import daksh from "../../../src/speakers/23daksha.jpg";




import { param } from 'framer-motion/client';
const Speakers = () => {

  const [visibleYear, setVisibleYear] = useState('2024');

  const handleButtonClick = (year) => {
    setVisibleYear(year);
  };

  return (
    <>
      <div className='min-h-screen flex flex-col justify-center items-center px-4 bg-black'>
        <div className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-8'>
          <span className='text-red-600'>PAST</span> 
          <br className="block sm:hidden" />
          <span>&nbsp;SPEAKERS</span>
        </div>

        <div id="years" className='flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-10 lg:gap-12 text-base sm:text-lg md:text-xl lg:text-2xl'>
          {['2024', '2023', '2021', '2020', '2019'].map((year) => (
            <button
              key={year}
              className={`py-2 px-6 w-32 text-center rounded-full cursor-pointer transition-colors duration-300 ${visibleYear === year ? 'text-red-600' : 'text-white'}`}
              onClick={() => handleButtonClick(year)}
            >
              {year}
            </button>
          ))}
        </div>

        
        <div id="2019" className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ${visibleYear === '2019' ? '' : 'hidden'}`}>
          <Card name="Pooja Sachdeva" position="CEO"  test={pooja} />
          <Card name="Santa Santosh Avvannavar" position="CEO" test={santhosh}  />
          <Card name="Alcatraz Dey" position="CEO" test={al} />
          <Card name="Baisakhi Saha" position="CEO" test={baisakhi} />
          <Card name="The Params" position="CEO" test={param} />
          <Card name="Goonjan Mall" position="CEO" test={goonjan}  />
          <Card name="Rohit Dey" position="CEO" test={rohit} />
          <Card name="Dr. Dakshayini Kanna" position="CEO" test={daksh} />
          <Card name="Natasha Noel" position="CEO" test={natasha} />
          <Card name="Surender Shah" position="CEO" test={Sur} />
          <Card name="Dr. Praveen Vemula" position="CEO" test={praveen} />
          <Card name="Prasanna Murthy" position="CEO" test={prasanna} />
        </div>

        <div id="2020" className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ${visibleYear === '2020' ? '' : 'hidden'}`}>
          <Card name="Avelo Roy" position="CEO" test={avelo} />
          <Card name="K Visalini" position="CEO" test={visalini} />
          <Card name="Shweta Ratanpura" position="CEO" test={sweta}/>
          <Card name="Mohd Shams Alam" position="CEO" test={aslam}/>
          <Card name="Shweta Kothari" position="CEO"test={koth} />
          <Card name="Dr Shyam Vasudeva Rao" position="CEO"test={syam} />
          <Card name="Piali Bopanna" position="CEO"test={piali} />
          <Card name="Binay Kumar" position="CEO"test={binay} />
          <Card name="Swamy Veereshanda" position="CEO"test={swami} />
          <Card name="Dr YS Rajan" position="CEO" test={rajan}/>
          <Card name="Dhanush Devang" position="CEO" test={dhanush}/>
        </div>

        <div id="2021" className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ${visibleYear === '2021' ? '' : 'hidden'}`}>
          <Card name="Hitesh Choudhary" position="CEO" test={hitesh} />
          <Card name="Dr Syed Asad Abbas" position="CEO" test={syed} />
          <Card name="Clince Varghese" position="CEO" test={clinche}/>
          <Card name="Mira Erda" position="CEO" test={mira} />
          <Card name="Radhika Bajoria" position="CEO" test={radhika} />
          <Card name="Abhay Chopra" position="CEO"  test={abhay}/>
          <Card name="Shreya Pattar" position="CEO" test={shre} />
          <Card name="Dravisha Katoch" position="CEO" test={dravisha}/>
          <Card name="Ankur Chaudhary" position="CEO" test={ankur} />
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
          <Card name="Prakash Belawadi" position="CEO" test={prakash} />
          <Card name="Santa Santosh Avvannavar" position="CEO" test={santhosh}/>
          <Card name="Shilpa Kulshrestha" position="CEO" test={shilpa}/>
          <Card name="Akshay Chopra" position="CEO" test={akshay}/>
          <Card name="Major Aditi" position="CEO" test={aditi}/>
          <Card name="Nithyashree Mani" position="CEO" test={initya}/>
          <Card name="Ganesh Datta Lakkur" position="CEO" test={ganesh}/>
          <Card name="Ajinkya Lohakare" position="CEO" test={ajinkya}/>
          <Card name="Yashwant J" position="CEO" test={yash}/>
          <Card name="Suma Annegowda " position="CEO" test={suma}/>
          <Card name="Pushpalatha" position="CEO" test={pushpa}/>
        </motion.div>

        <motion.div 
          variants={fadeIn5("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
          
          id="2024" className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ${visibleYear === '2024' ? '' : 'hidden'}`}>
          <Card name="Shreya Rao Kumavarapu" position="CEO" test={shreya} />
          <Card name="Anurag Mourya" position="CEO" test={anurag}/>
          <Card name="Karen Vincent" position="CEO" test={karen}/>
          <Card name="Ashok Venkat" position="CEO" test={ashok}/>
          <Card name="Vignesh Shankar" position="CEO" test={vignesh} />
          <Card name="Pavana Ganga" position="CEO" test={pavana}/>
          <Card name="Sadhwin Shetty" position="CEO" test={sadhwin}/>
          <Card name="Kalyan Manjunath" position="CEO" test={kalyan} />
        </motion.div>

      </div>
    </>
  );
};

export default Speakers;
