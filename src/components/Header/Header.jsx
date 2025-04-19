import React, { useState } from 'react';
import logo from '../../logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faX } from '@fortawesome/free-solid-svg-icons/faX';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [icon, setIcon] = useState(faBars); // Initially, set to hamburger (bars)
    const [navOpen, setNavOpen] = useState(false); // To track whether the nav menu is open or closed

    const toggleNav = () => {
        setIcon((prevIcon) => (prevIcon === faBars ? faX : faBars)); // Toggle between hamburger and cross icon
        setNavOpen((prevNavOpen) => !prevNavOpen); // Toggle nav visibility
    };

    return (
        <>
            <header className="bg-[rgb(18,18,18)]">
                <nav className="flex justify-between items-center w-[92%] mx-auto py-6">
                    {/* Logo Section */}
                    <div>
                        <Link to="/">
                            <img src={logo} alt="tedx_logo" className="w-[35vh]" />
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle Button (Hamburger) */}
                    <div className="lg:hidden flex items-center" onClick={toggleNav}>
                        <FontAwesomeIcon
                            icon={icon}  // This will switch between hamburger and cross icon
                            style={{ cursor: 'pointer' }}
                            className="h-6"
                        />
                    </div>

                    {/* Navbar Links */}
                    <div className={`lg:flex items-center w-full justify-between ${navOpen ? 'block' : 'hidden'} lg:block`}>
                        <ul className="flex lg:flex-row flex-col items-center lg:gap-[2vw] gap-10 text-[1.3rem] ml-auto">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 text-[1.375rem] pl-3 duration-200 ${isActive ? 'text-red-600' : 'text-white'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-600 lg:p-0`
                                    }
                                >
                                    HOME
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 text-[1.375rem] duration-200 ${isActive ? 'text-red-600' : 'text-white'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-600 lg:p-0`
                                    }
                                >
                                    ABOUT
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="speakers"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 text-[1.375rem] duration-200 ${isActive ? 'text-red-600' : 'text-white'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-600 lg:p-0`
                                    }
                                >
                                    SPEAKERS
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="partners"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 text-[1.375rem] duration-200 ${isActive ? 'text-red-600' : 'text-white'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-600 lg:p-0`
                                    }
                                >
                                    PARTNERS
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 text-[1.375rem] duration-200 ${isActive ? 'text-red-600' : 'text-white'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-600 lg:p-0`
                                    }
                                >
                                    CONTACT US
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Cross Icon (Top right corner on mobile) */}
                    <div
                        className={`lg:hidden absolute top-4 right-4 ${navOpen ? 'block' : 'hidden'}`}
                        onClick={toggleNav}
                    >
                        <FontAwesomeIcon
                            icon={faX}
                            style={{ cursor: 'pointer' }}
                            className="h-6 text-white"
                        />
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
