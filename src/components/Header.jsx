import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = ({ activeTab, setActiveTab }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const NavButton = ({ tabName, children, className }) => {
        const isActive = activeTab === tabName;
        return (
            <button
                onClick={() => {
                    setActiveTab(tabName);
                    setIsMenuOpen(false);
                }}
                className={className || `pb-2 cursor-pointer ${isActive ? 'text-[#000B9F]' : 'text-gray-600 '} hover:text-[#000B9F]`}
            >
                {children}
            </button>
        );
    };

    return (
        <header className="fixed bg-white z-50 h-[100px] md:h-[163px] w-full py-4 px-4 sm:px-8 md:px-[121px]">
            <div className="w-full h-full flex justify-between items-center">
                <NavButton tabName="home" className='w-fit cursor-pointer h-full'>
                    <img src={logo} alt="Ace Digital World Logo" className="h-full object-contain" />
                </NavButton>
                <nav className="hidden md:flex gap-6 font-semibold text-[#121212]">
                    <NavButton tabName="buy-crypto">Buy Crypto</NavButton>
                    <NavButton tabName="trade">Trade</NavButton>
                    <NavButton tabName="more">More</NavButton>
                    <NavButton tabName="contact us">Contact us</NavButton>
                    <NavButton tabName="about-us">About Us</NavButton>
                    <NavButton tabName="web-development">Web Development</NavButton>
                </nav>
                <div className="hidden md:flex gap-2">
                    <Link to="/signin" className="px-6 py-2 rounded-[30px] text-[#000DBF] border-[#14B6E4] border-[1px]">Sign In</Link>
                    <Link to="/signup" className="px-6 py-2 rounded-[30px] bg-[#14B6E4] text-white">Sign Up</Link>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden absolute top-[100px] left-0 w-full bg-white shadow-lg flex flex-col items-center gap-4 py-4">
                    <NavButton tabName="buy-crypto">Buy Crypto</NavButton>
                    <NavButton tabName="trade">Trade</NavButton>
                    <NavButton tabName="more">More</NavButton>
                    <NavButton tabName="contact us">Contact us</NavButton>
                    <NavButton tabName="about-us">About Us</NavButton>
                    <NavButton tabName="web-development">Web Development</NavButton>
                    <div className="flex flex-col gap-2 w-full px-4">
                        <Link to="/signin" className="w-full text-center px-6 py-2 rounded-[30px] text-[#000DBF] border-[#14B6E4] border-[1px]">Sign In</Link>
                        <Link to="/signup" className="w-full text-center px-6 py-2 rounded-[30px] bg-[#14B6E4] text-white">Sign Up</Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;