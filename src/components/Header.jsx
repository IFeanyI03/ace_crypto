import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <header className="fixed bg-white z-50 h-[163px] w-full py-7 px-[121px]">
            <div className="w-full h-full flex justify-between items-center">
                <Link to="/" className='w-fit h-full'>
                    <img src={logo} alt="Ace Digital World Logo" className="h-full object-contain" />
                </Link>
                <nav className="flex gap-6 font-semibold text-[#121212]">
                    <Link to="/" className=" ">Buy Crypto</Link>
                    <Link to="/" className=" ">Trade</Link>
                    <Link to="/" className=" ">More</Link>
                    <Link to="/" className=" ">Contact us</Link>
                    <Link to="/" className=" ">About Us</Link>
                    <Link to="/" className=" ">Web Development</Link>
                </nav>
                <div className="flex gap-2">
                    <Link to="/signin" className="px-6 py-2 rounded-[30px] text-[#000DBF] border-[#14B6E4] border-[1px]">Sign In</Link>
                    <Link to="/signup" className="px-6 py-2 rounded-[30px] bg-[#14B6E4] text-white">Sign Up</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;