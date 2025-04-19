import React, { useState } from 'react';
import logo from '../../logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faX } from '@fortawesome/free-solid-svg-icons/faX';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [icon, setIcon] = useState(faBars);
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setIcon((prevIcon) => (prevIcon === faBars ? faX : faBars));
        setNavOpen((prevNavOpen) => !prevNavOpen);
    };

    return (
        <>
         {/* bg-[rgb(18,18,18)] */}
            <header className='bg-[rgb(18,18,18)]'>
                <nav className='flex justify-between items-center w-[92%] mx-auto py-6'>
                    <div>
                        <Link to='/'>
                            <img src={logo} alt="tedx_logo" className='w-[35vh]' />
                        </Link>
                    </div>

                    <div>
                        <div className={`lg:static absolute lg:w-auto w-full  lg:min-h-fit min-h-[60vh] left-0 ${navOpen ? 'top-[10%]' : 'top-[-100%]'
                            } `}>
                            <ul className='flex lg:flex-row flex-col items-center lg:gap-[2vw] gap-10 text-[1.3rem]'>
                                <li>
                                    <NavLink to="/"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 text-[1.375rem] pl-3 duration-200  ${isActive ? 'text-red-600' : 'text-white'}  border-b  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-600 lg:p-0`
                                        }>
                                        HOME
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="about"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 text-[1.375rem]  duration-200  ${isActive ? 'text-red-600' : 'text-white'}  border-b  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-600 lg:p-0`
                                        }>
                                        ABOUT
                                    </NavLink>
                                </li>
                                <li>
                                <NavLink to="speakers"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 text-[1.375rem]  duration-200  ${isActive ? 'text-red-600' : 'text-white'}  border-b  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-600 lg:p-0`
                                        }>
                                        SPEAKERS
                                    </NavLink>
                                </li>
                                <li>
                                <NavLink to="partners"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 text-[1.375rem]  duration-200  ${isActive ? 'text-red-600' : 'text-white'}  border-b  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-600 lg:p-0`
                                        }>
                                        PARTNERS
                                    </NavLink>
                                </li>
                                <li>
                                <NavLink to="contact"
                                        className={({ isActive }) =>
                                            `text-center block py-2 text-[1.375rem]  pr-4 pl-3 duration-200  ${isActive ? 'text-red-600' : 'text-white'}  border-b  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-600 lg:p-0`
                                        }>
                                        CONTACT US
                                    </NavLink>
                                </li>
                                <li>
                               
                                </li>
                            </ul>
                        </div>

                        <div onClick={toggleNav}>
                            <FontAwesomeIcon
                                icon={icon}
                                style={{ cursor: 'pointer' }}
                                className="lg:hidden h-6 flex items-center justify-center pt-1"
                            />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
