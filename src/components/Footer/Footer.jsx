import React from 'react'
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';

const Footer = () => {
    return (
      <footer className="bg-[rgb(18,18,18)] text-white">
        <div className="w-[90%] mx-auto py-10 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start">
            <img src={logo} alt="logo" className="h-20 object-contain" />
          </div>
  
          {/* Follow Us */}
          <div className="text-center lg:text-left">
            <h1 className="text-red-600 text-3xl md:text-4xl mb-4 font-semibold">Follow Us</h1>
            <div className="flex justify-center lg:justify-start gap-5">
              <a href="https://www.instagram.com/tedxsiddaganga/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="fa-2x hover:scale-110 transition-transform duration-200" icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com/company/tedxsiddagangainstituteoftechnology/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="fa-2x hover:scale-110 transition-transform duration-200" icon={faLinkedin} />
              </a>
              <a href="https://www.facebook.com/TedxSiddaganga/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="fa-2x hover:scale-110 transition-transform duration-200" icon={faFacebook} />
              </a>
            </div>
          </div>
  
          {/* Contact Us */}
          <div className="text-center lg:text-left">
            <h1 className="text-red-600 text-3xl md:text-4xl mb-4 font-semibold">Contact Us</h1>
            <div className="text-base md:text-lg space-y-2">
              <div className="hover:underline">
                <a href="mailto:tedx@sit.ac.in" target="_blank" rel="noopener noreferrer">
                  tedx@sit.ac.in
                </a>
              </div>
              <div>
                <div>+91 98765 43210</div>
                <div>+91 87654 32109</div>
              </div>
              <div>
                Siddaganga Institute Of Technology,<br />
                Dr. Sree Sree Shivakumara Swamiji Road,<br />
                Tumakuru, Karnataka 572103
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  