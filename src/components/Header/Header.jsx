import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen((prevNavOpen) => !prevNavOpen);
    };

    return (
        <header className="bg-[rgb(18,18,18)]">
            {/* Further reduced padding from py-4 to py-2 */}
            <nav className="flex justify-between items-center w-[92%] mx-auto py-2">
                {/* Logo */}
                <div>
                    <Link to="/">
                        {/* Reduced logo size from w-[35vh] to w-[25vh] */}
                        <img src={logo} alt="tedx_logo" className="w-[33vh]" />
                    </Link>
                </div>

                {/* Nav Links */}
                <div className="lg:flex hidden">
                    <ul className="flex lg:flex-row flex-col items-center lg:gap-[2vw] gap-8 text-[1.1rem]">
                        {['/', 'about', 'speakers', 'partners', 'contact' ].map((path, index) => (
                            <li key={index}>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        `block py-1 pr-4 pl-3 text-[1.1rem] duration-200 ${
                                            isActive ? 'text-red-600' : 'text-white'
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-600 lg:p-0`
                                    }
                                >
                                    {path === '/' ? 'HOME' : path.toUpperCase()}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button onClick={toggleNav}>
                        <FontAwesomeIcon
                            icon={navOpen ? faX : faBars}
                            className="h-5 text-white" // Reduced icon size
                        />
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden absolute left-0 w-full bg-[rgb(18,18,18)] transition-all duration-300 ${
                        navOpen ? 'top-[8%]' : 'top-[-100%]'
                    }`}
                >
                    <ul className="flex flex-col items-center gap-4 py-4 text-[1.1rem]">
                        {['/', 'about', 'speakers', 'partners', 'contact'].map((path, index) => (
                            <li key={index}>
                                <NavLink
                                    to={path}
                                    onClick={toggleNav} // Close menu on click
                                    className={({ isActive }) =>
                                        `block py-1 pr-4 pl-3 text-[1.1rem] duration-200 ${
                                            isActive ? 'text-red-600' : 'text-white'
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-600 lg:p-0`
                                    }
                                >
                                    {path === '/' ? 'HOME' : path.toUpperCase()}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;