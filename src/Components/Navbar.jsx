import React, { useState } from "react";
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaSquareXTwitter} from 'react-icons/fa6'

const Navbar = () => {
    const [isHidden, setIsHidden] = useState(true);

    const handleClick = () => {
        setIsHidden(!isHidden);
        
    };

  return (
    <nav className="h-16 flex flex-wrap justify-between items-center reletive left-0 right-0 py-2">
        <div className="flex flex-wrap items-center justify-center text-2xl gap-4 px-3">
            <a href="https://www.linkedin.com/in/adityakumarkushwaha">
                <FaLinkedin />
            </a>
            <a href="https://github.com/adityakkpk">
                <FaGithub />
            </a>
            <a href="https://x.com/akkpk933">
                <FaSquareXTwitter />
            </a>
        </div>

        <div className="hidden md:block px-3">
            <ul className="flex gap-8 text-md font-bold">
                <li>
                    <a href="#home" className="hover:text-orange-700 duration-200">Home</a>
                </li>
                <li>
                    <a href="#skills" className="hover:text-orange-700 duration-200">Skills</a>
                </li>
                <li>
                    <a href="#projects" className="hover:text-orange- duration-200">Projects</a>
                </li>
                <li>
                    <a href="#contact" className="hover:text-orange-700 duration-200">Contact me</a>
                </li>
            </ul>
        </div>

        <button 
            className="md:hidden focus:outline-none w-12 px-3"
            onClick={handleClick}

        >
            <svg className="h-6 w-10 text-white" fill="none" viewBox="0 0 24 22" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
        <div className={` ${ isHidden ? "hidden" : "block" } md:hidden w-full md:w-auto absolute top-14 left-0 border-t border-black`}>
            <ul className="flex flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                    <a className="block py-2 pr-4 pl-3 duration-200 text-white border-b border-gray-100 hover:bg-gray-800 hover:rounded-lg m-1 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0" href="#">Home</a>
                </li>
                <li>
                    <a className="block py-2 pr-4 pl-3 duration-200 text-white border-b border-gray-100 hover:bg-gray-800 hover:rounded-lg m-1  lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 active" href="#skills">Skills</a>
                </li>
                <li>
                    <a className="block py-2 pr-4 pl-3 duration-200 text-white border-b border-gray-100 hover:bg-gray-800 hover:rounded-lg m-1  lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 active" href="#projects">Projects</a>
                </li>
                <li>
                    <a className="block py-2 pr-4 pl-3 duration-200 text-white border-b border-gray-100 hover:bg-gray-800 hover:rounded-lg m-1  lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 active" href="#contact">Contact me</a>
                </li>
            </ul>
        </div>
    </nav>
  );
};

export default Navbar;
