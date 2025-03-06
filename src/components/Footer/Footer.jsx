import React from 'react'
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';

const Footer = () => {
    return (
        <>
            <footer className="bg-[rgb(18,18,18)]">
                <div className='flex justify-around py-10 w-[90%] m-auto lg:flex-row  flex-col  md:pl-7'>
                    
                    <div>
                        <img src={logo} alt="logo" className='h-20' />
                    </div>

                    <div className='md:pb-10'>
                        <h1 className='text-red-600 text-3xl mb-4'>Follow Us</h1>
                        <div className='flex flex-row gap-5'>
                            <a href="https://www.instagram.com/tedxsiddaganga/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon  className='h-8 hover:scale-110' icon={faInstagram} />
                            </a>
                            <a href="https://www.linkedin.com/company/tedxsiddagangainstituteoftechnology/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='h-8 hover:scale-110' icon={faLinkedin} />
                            </a>
                            <a href="https://www.facebook.com/TedxSiddaganga/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='h-8 hover:scale-110' icon={faFacebook} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-red-600 text-3xl'>Contact Us</h1>
                        <div className='text-xl'>
                            <div className='hover:underline'>
                                <a href="mailto:tedx@sit.ac.in" target="_blank" rel="noopener noreferrer">
                                    tedx@sit.ac.in
                                </a>
                            </div>
                            <div>
                                <div>phone no</div>
                                <div>phone no</div>
                            </div>
                            <div>
                                Siddaganga Institute Of Technology,
                                <br />
                                Dr. Sree Sree Shivakumara Swamiji Road,
                                <br />
                                Tumakuru, Karnataka 572103
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer