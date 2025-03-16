import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import Card from "./Card.jsx";
import grp from "../../assets/about/group.png";

import abhig from "../../assets/about/year2/abhishekg.jpeg";
import anagha from "../../assets/about/year1/anagha.jpg";
import anisha from "../../assets/about/year1/anisha.jpg";
import ankit from "../../assets/about/year3/ankit.jpg";
import anusha from "../../assets/about/year2/anusha.jpg";
import arpita from "../../assets/about/year2/arpita.jpg";
import arshan from "../../assets/about/year3/arshan.jpg";
import ashish from "../../assets/about/year2/ashish.jpeg";
import ashutosh from '../../assets/about/year2/ashutosh.jpeg'
import avinash from "../../assets/about/year3/avinash.jpg";
import devank from "../../assets/about/year1/devank.jpg";
import dhanush from "../../assets/about/year2/dhanush.jpg";
import dhruthi from "../../assets/about/year1/dhruthi.jpg";
import himank from "../../assets/about/year2/himank.jpeg";
import hiremath from "../../assets/about/year2/hiremath.jpg";
import hs from "../../assets/about/year2/hs.jpg";
import jeet from "../../assets/about/year1/jeet.jpg";
import jishnu from "../../assets/about/year2/jishnu.jpeg";
import juhi from "../../assets/about/year3/juhi.jpg";
import kapil from "../../assets/about/year1/kapil.jpg";
import karan from "../../assets/about/year2/karan.jpg";
import karthik from "../../assets/about/year1/kartik.jpg";
import khushi from "../../assets/about/year2/khushi.jpg";
import khushijr from '../../assets/about/year1/khushi.jpg';
import krish from "../../assets/about/year4/krish.jpeg";
import lavanya from "../../assets/about/year3/lavanya.jpg";
import mohith from "../../assets/about/year3/mohith.jpeg";
import nidhi from "../../assets/about/year2/nidhi.jpg";
import nikhil from "../../assets/about/year2/nikhil.jpg";
import om from "../../assets/about/year1/om.jpg";
import piyush from "../../assets/about/year2/piyush.jpg";
import piyushjr from "../../assets/about/year1/piyush.jpg";
import poorvika from "../../assets/about/year2/poorvika.jpg";
import prajna from "../../assets/about/year2/prajna.jpg";
import purbayan from "../../assets/about/year3/purbayan.jpg";
import rahul from "../../assets/about/year1/rahul.jpg";
import rajdeep from "../../assets/about/year3/rajdeep.jpg";
import richa from "../../assets/about/year1/richa.jpg";
import saish from "../../assets/about/year1/saish.jpg";
import samprathi from "../../assets/about/year1/samprathi.jpg";
import sanjana from "../../assets/about/year4/sanjana.jpeg";
import satyakam from "../../assets/about/year1/satyakam.jpg";
import raksha from "../../assets/about/year4/shreeraksha.jpeg";
import shreeya from "../../assets/about/year2/shreeya.jpeg";
import shreya from "../../assets/about/year1/shreya.jpg";
import shrusti from "../../assets/about/year3/shrusti.jpg";
import shubhankar from "../../assets/about/year1/shubhankar.jpg";
import skarma from "../../assets/about/year1/skarma.jpg";
import srinidhi from "../../assets/about/year1/srinidhi.jpg";
import tanay from "../../assets/about/year1/tanay.jpg";
import vahini from "../../assets/about/year1/vahini.jpg";
import vaishnavi from "../../assets/about/year2/vaishnavi.jpg";
import viraj from "../../assets/about/year2/viraj.jpg";
// import anjali from "";
import ritvik from "../../assets/about/year2/ritvik.jpeg";
import sanvi from "../../assets/about/year2/sanvi.jpg";
import monal from "../../assets/about/year2/monal.jpg";
import sadiya from "../../assets/about/year2/sadiya.jpeg";
// import poornima from "";
import basayya from "../../assets/about/year2/basayya.jpeg";

import { motion } from "framer-motion";
import { fadeIn, fadeIn2 } from "../../variants.js";

const About = () => {
  return (
    <>
      <section className="h-fit">
        <div className="flex flex-col justify-center items-center mt-10 mb-28">
          <div className="font-extrabold text-[2.6rem] text-center">
            <span className="text-red-600">
              TED<sup>X</sup>{" "}
            </span>
            <span>SiddagangaInstituteOfTechnology</span>
          </div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="h-[740px]"
          >
            <img
              loading="lazy"
              src={grp}
              alt="group photo 2024 event"
              className="w-full sm:w-4/5 md:w-[1200px] mx-auto my-5"
            />
          </motion.div>
        </div>

        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-32 items-start">
          <motion.div
            variants={fadeIn("right", 0.25)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false }}
            id="left"
          >
            <motion.h1
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false }}
              className="text-7xl mb-10"
            >
              <span className="text-red-600">About</span> TED
            </motion.h1>
            <div className="text-[1.3rem] text-justify">
              <div>
                TED is a nonprofit organization devoted to Ideas Worth
                Spreading. Started as a four-day conference in California 30
                years ago, TED has grown to support its mission with multiple
                initiatives. The two annual TED Conferences invite the world's
                leading thinkers and doers to speak for 18 minutes or less. Many
                of these talks are then made available, free, at TED.com. TED
                speakers have included Bill Gates, Jane Goodall, Elizabeth
                Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck,
                Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.
              </div>
              <br />
              <br />
              <div>
                The annual TED Conference takes place each spring in Vancouver,
                British Columbia. TED's media initiatives include TED.com, where
                new TED Talks are posted daily; TED Translators, which provides
                subtitles and interactive transcripts as well as translations
                from volunteers worldwide; the educational initiative TED-Ed.
                TED has established The Audacious Project that takes a
                collaborative approach to funding ideas with the potential to
                create change at thrilling scale; TEDx, which supports
                individuals or groups in hosting local, self-organized TED-style
                events around the world, and the TED Fellows program, helping
                world-changing innovators from around the globe to amplify the
                impact of their remarkable projects and activities.
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.25)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false }}
            id="right"
            className="mt-56"
          >
            <motion.h1
              variants={fadeIn("left", 0)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false }}
              className="text-7xl mb-10"
            >
              <span className="text-red-600">About</span> TEDx
            </motion.h1>
            <div className="text-[1.3rem] text-justify">
              In the spirit of ideas worth spreading, TEDx is a program of
              local, self-organized events that bring people together to share a
              TED-like experience. At a TEDx event, TED Talks video and live
              speakers combine to spark deep discussion and connection. These
              local, self-organized events are branded TEDx, where x =
              independently organized TED event. The TED Conference provides
              general guidance for the TEDx program, but individual TEDx events
              are self-organized. (Subject to certain rules and regulations.)
            </div>

            <div className="md:pb-10 mt-16 ml-1">
              <h1 className="text-red-600 text-3xl mb-4">Follow Us</h1>
              <div className="flex flex-row gap-5">
                <a
                  href="https://www.instagram.com/tedxsiddaganga/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="text-gray-600 hover:text-current fa-2xl"
                    icon={faInstagram}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/tedxsiddagangainstituteoftechnology/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="text-gray-600 hover:text-current fa-2xl"
                    icon={faLinkedin}
                  />
                </a>
                <a
                  href="https://www.facebook.com/TedxSiddaganga/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="text-gray-600 hover:text-current fa-2xl"
                    icon={faFacebook}
                  />
                </a>
              </div>

            </div>
          </motion.div>
        </div>

        <div className="team my-20">
          <div className=" flex justify-center items-center mt-40">
            <span className="text-[3.9rem] text-red-600">OUR</span> &nbsp;
            &nbsp; <span className="text-[3.9rem]">TEAM</span>
          </div>

          <motion.div
            variants={fadeIn2("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="executives w-[80%] mx-auto mt-10  mb-20 pl-10 flex flex-col justify-center items-center "
          >
            <div className="text-6xl flex justify-center items-center my-14">
              <span className="text-red-600">Executive</span> &nbsp; Members
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28">
              <Card test={raksha} name="Shreeraksha N" position="Organizer" />
              <Card test={sanjana} name="Sanjana" position="Head of Arts" />
              <Card test={krish} name="Krish" position="Head of Marketing" />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn2("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="design w-[80%] mx-auto my-20 pl-10 flex flex-col justify-center items-center "
          >
            <div className="text-6xl flex justify-center items-center my-14">
              <span className="text-red-600">Curations</span> &nbsp;
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28">
              <Card test={mohith} name="Mohith Sai" position="3rd Year" />
              <Card test={arshan} name="Arshan" position="3rd Year" />
              <Card test={khushi} name="Khushi A Narayan" position="2nd Year" />
              <Card test={shreeya} name="Shreeya" position="2nd Year" />
              <Card test={vaishnavi} name="Vaishnavi" position="2nd Year" />
              <Card test={jeet} name="Jeet" position="1st Year" />
              <Card test={skarma} name="Skarma" position="1st Year" />
              <Card test={tanay} name="Tanay" position="1st Year" />
              <Card test={vahini} name="Kana Vahini" position="1st Year" />
              <Card test={srinidhi} name="Srinidhi" position="1st Year" />
            </div>
          </motion.div>


          <motion.div
            variants={fadeIn2("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="technical w-[80%] mx-auto  my-20 pl-10 flex flex-col justify-center items-center "
          >
            <div className="text-6xl flex justify-center items-center my-14">
              <span className="text-red-600">Development</span> &nbsp; Team
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28">
              <Card test={rajdeep} name="Rajdeep Paul" position="3rd Year" />
              <Card test={jishnu} name="Jishnu Khargharia" position="2nd Year" />
              <Card test={prajna} name="Prajna" position="2nd Year" />
              <Card test={anusha} name="Anusha H" position="2nd Year" />
              <Card test={rahul} name="Rahul" position="1st Year" />
              <Card test={devank} name="Devank" position="1st Year" />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn2("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="marketing w-[80%] mx-auto my-20 pl-10 flex flex-col justify-center items-center "
          >
            <div className="text-6xl flex justify-center items-center my-14 md:flex flex-col">
              <span className="text-red-600">Marketing</span>
              <span></span>
              <span></span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28">
              <Card test={purbayan} name="Purbayan Biswas" position="3rd Year" />
              <Card test={sanvi} name="Sanvi" position="2nd Year" />
              <Card test={ritvik} name="Ritvik Bhatnagar" position="2nd Year" />
              <Card test="anurag" name="Anurag" position="2nd Year" />
              <Card test={ashutosh} name="Ashutosh" position="2nd Year" />
              <Card test={arpita} name="Arpita" position="2nd Year" />
              <Card test={himank} name="Himank" position="2nd Year" />
              <Card test={basayya} name="Basayya" position="2nd Year" />
              <Card test={karan} name="Karan Anand" position="2nd Year" />
              <Card test={poorvika} name="Poorvika" position="2nd Year" />
              <Card test={saish} name="Saish" position="1st Year" />
              <Card test={shubhankar} name="Shubhankar" position="1st Year" />
              <Card test={kapil} name="Kapil" position="1st Year" />
              <Card test={anisha} name="Anisha" position="1st Year" />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn2("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="curation w-[80%] mx-auto  my-20 pl-10 flex flex-col justify-center items-center "
          >
            <div className="text-6xl flex justify-center items-center my-14">
              <span className="text-red-600">Socials</span> &nbsp;{" "}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28">
              <Card test={juhi} name="Juhi" position="3rd Year" />
              <Card test={avinash} name="Avinash" position="3rd Year" />
              <Card test={hiremath} name="Abhishek Hiremath" position="2nd Year" />
              <Card test={monal} name="Monal" position="2nd Year" />
              <Card test={sadiya} name="Sadiya" position="2nd Year" />
              {/* <Card test={poornima}name="Poornima" position="2nd Year" /> */}
              <Card test={abhig} name="Abhishek Gupta" position="2nd Year" />
              <Card test={piyush} name="Piyush Kumar" position="2nd Year" />
              <Card test={nikhil} name="Nikhil K G" position="2nd Year" />
              <Card test={om} name="Om Trivedi" position="1st Year" />
              {/* <Card name="Gagan" position="1st Year" /> */}
              <Card test={karthik} name="Kartik" position="1st Year" />
              <Card test={anagha} name="Anagha" position="1st Year" />
              <Card test={dhruthi} name="Dhruthi" position="1st Year" />
              <Card test={piyushjr} name="Piyush Kumar" position="1st Year" />
            </div>
          </motion.div>



          <motion.div
            variants={fadeIn2("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="finance w-[80%] mx-auto  my-20 pl-10 flex flex-col justify-center items-center "
          >
            <div className="text-6xl flex justify-center items-center my-14">
              <span className="text-red-600">Budget</span> &nbsp; Team
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28">
              <Card test={purbayan} name="Purbayan Biswas" position="3rd Year" />
              <Card test={arshan} name="Arshan" position="3rd Year" />
              <Card test={ashish} name="Ashish" position="2nd Year" />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn2("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="finance w-[80%] mx-auto  my-20 pl-10 flex flex-col justify-center items-center "
          >
            <div className="text-6xl flex justify-center items-center my-14">
              <span className="text-red-600">Arts</span> &nbsp; &amp;
              <span> &nbsp;Operations</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28">
              <Card test={shrusti} name="Shrusti" position="3rd Year" />
              <Card test={lavanya} name="Lavanya" position="3rd Year" />
              <Card test="anjali" name="Anjali" position="3rd Year" />
              <Card test={ankit} name="Ankit" position="3rd Year" />
              <Card test={sadiya} name="Sadiya" position="2nd Year" />
              <Card test={hs} name="HS Shreyas" position="2nd Year" />
              <Card name="Tejaswini" position="2nd Year" />
              <Card test={dhanush} name="Dhanush" position="2nd Year" />
              <Card test={viraj} name="Viraj" position="2nd Year" />
              <Card test={nidhi} name="Nidhi" position="2nd Year" />
              <Card test={richa} name="Richa Jha" position="1st Year" />
              <Card test={samprathi} name="Samprathi" position="1st Year" />
              <Card test={shreya} name="Shreya" position="1st Year" />
              <Card test={khushi} name="Khushi MC" position="1st Year" />
              <Card test={satyakam} name="Satyakam Vats" position="1st Year" />
              <Card test={khushijr} name="Khushi M C" position="1st Year" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;