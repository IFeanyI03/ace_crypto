import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import google from '../assets/google-icon.png';

const SignInForm = () => {
  return (
    <div className="w-full max-w-md">
      <img src={logo} alt="Ace Digital World" className="h-[163px] w-[163px]" />
      <h2 className="text-3xl font-bold mb-6">Sign in</h2>
      <form className='w-[358px] flex flex-col gap-4'>
        <div className="w-full flex flex-col gap-1">
          <label htmlFor="text">Email</label>
          <input type="text" placeholder="Email or phone number" required className="w-full p-3 border border-gray-300 rounded-md"/>
        </div>
        <div className="flex flex-col gap-1 w-full">
           <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" required className="w-full p-3 border border-gray-300 rounded-md"/>
        </div>
        <button type="submit" className="w-full p-3 bg-[#000B9F] text-white rounded-md font-semibold hover:bg-blue-700">Login</button>
        <button type="button" className="w-full flex justify-center items-center gap-3 cursor-pointer p-3 bg-gray-700 text-white rounded-md font-semibold hover:bg-gray-800"><img className='w-5 h-5 object-contain' src={google} /> Sign-in with Google</button>
      </form>
      <p className="text-center mt-6">
        Don't have an account? <Link to="/signup" className="text-primary font-semibold">Sign up</Link>
      </p>
    </div>
  );
};

export default SignInForm;