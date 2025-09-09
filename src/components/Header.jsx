import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = ({ activeTab, setActiveTab }) => {

    const NavButton = ({ tabName, children, className }) => {
    const isActive = activeTab === tabName;
    return (
      <button
        onClick={() => setActiveTab(tabName)}
        className={ className || `pb-2 cursor-pointer ${isActive ? 'text-[#000B9F]' : 'text-gray-600 '} hover:text-[#000B9F]`}
      >
        {children}
      </button>
    );
  };

    return (
        <header className="fixed bg-white z-50 h-[163px] w-full py-7 px-[121px]">
            <div className="w-full h-full flex justify-between items-center">
                <NavButton tabName="home" className='w-fit cursor-pointer h-full'>
                    <img src={logo} alt="Ace Digital World Logo" className="h-full object-contain" />
                </NavButton>
                <nav className="flex gap-6 font-semibold text-[#121212]">
                    <NavButton tabName="buy-crypto">Buy Crypto</NavButton>
                    <NavButton tabName="trade">Trade</NavButton>
                    <NavButton tabName="more">More</NavButton>
                    <NavButton tabName="contact us">Contact us</NavButton>
                    <NavButton tabName="about-us">About Us</NavButton>
                    <NavButton tabName="web-development">Web Development</NavButton>
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