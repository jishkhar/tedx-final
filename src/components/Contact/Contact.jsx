import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import { motion } from 'framer-motion';
import { fadeIn3, fadeIn4 } from '../../variants.js';

const Contact = () => {
  return (
    <>
      <div id='main' className='grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 w-[90%] lg:w-[90%] mx-auto my-20'>
        <motion.div
          variants={fadeIn3("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          id="map"
          className='bg-[rgb(30, 30, 30)] order-2 lg:order-1'
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.373143920216!2d77.12574074408558!3d13.32704926577623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb02e826fb691ef%3A0xe78608813c36f380!2sSiddaganga%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1725982925575!5m2!1sen!2sin"
            width="850"
            height="500"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className='flex flex-col justify-center items-center'>
            <div className='text-5xl text-red-600 pt-10'>Or</div>
            <div className='text-3xl pt-2'>Reach Us Here : </div>

            <div className='flex flex-row gap-5 pt-5'>
              <a href="mailto:tedx@sit.ac.in" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='fa-2x text-gray-600 hover:text-current hover:scale-150 transition-transform duration-200' icon={faEnvelope} />
              </a>
              <a href="https://www.instagram.com/tedxsiddaganga/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='fa-2x text-gray-600 hover:text-current hover:scale-150 transition-transform duration-200' icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com/company/tedxsiddagangainstituteoftechnology/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='fa-2x text-gray-600 hover:text-current hover:scale-150 transition-transform duration-200' icon={faLinkedin} />
              </a>
              <a href="https://www.facebook.com/TedxSiddaganga/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='fa-2x text-gray-600 hover:text-current hover:scale-150 transition-transform duration-200' icon={faFacebook} />
              </a>
            </div>

          </div>
        </motion.div>

        <motion.div
          variants={fadeIn4("left", 0.05)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className='py-10 ml-20 h-fit border-2 border-red-600 rounded-xl order-1 lg:order-2'
        >
          <form className='h-fit px-10'>
            <div><h1 className='text-4xl lg:text-6xl mb-5'><span className='text-red-600'>Contact</span> Us</h1></div>

            <div className='flex flex-col'>
              <label className='text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] mb-3'>Name</label>
              <input className="text-black bg-white mb-5 h-10 w-full text-lg sm:text-xl md:text-2xl rounded-md" type="text" />

              <label className='text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] mb-3'>Email</label>
              <input className="text-black bg-white mb-5 h-10 w-full text-lg sm:text-xl md:text-2xl rounded-md" type="text" />

              <label className='text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] mb-3'>Message</label>
              <textarea className="text-black bg-white mb-14 h-32 w-full text-lg sm:text-xl md:text-2xl rounded-md"></textarea>

              <input
                className="cursor-pointer rounded-lg h-14 bg-[rgb(18,18,18)] text-[1.4rem] sm:text-[1.6rem] md:text-[1.8rem] text-white transition-colors duration-300 hover:bg-[rgb(30,30,30)] hover:text-gray-300"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </motion.div>
      </div>
    </>
  )
}

export default Contact;