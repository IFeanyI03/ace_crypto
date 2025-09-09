import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import google from '../assets/google-icon.png';

const SignUpForm = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <img src={logo} alt="Ace Digital World" className="h-32 w-32 sm:h-40 sm:w-40 mx-auto" />
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Create account</h2>
      <form className='w-full flex flex-col gap-4'>
        <div className="flex flex-col md:flex-row w-full gap-4">
          <div className="flex flex-col gap-1 w-full">
            <label className="text-[#2D3748] text-[14px]" htmlFor="text">Firstname</label>
            <input type="text" placeholder="First name" required className="w-full p-3 border border-gray-300 rounded-md" />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label className="text-[#2D3748] text-[14px]" htmlFor="text">Lastname</label>
            <input type="text" placeholder="Last name" required className="w-full p-3 border border-gray-300 rounded-md" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-4">
          <div className="flex flex-col gap-1 w-full">
            <label className="text-[#2D3748] text-[14px]" htmlFor="text">Email or phone number</label>
            <input type="text" placeholder="example@email.com" required className="w-full p-3 border border-gray-300 rounded-md" />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label className="text-[#2D3748] text-[14px]" htmlFor="text">Date of birth (dd/mm/yy)</label>
            <input type="date" placeholder="Date of birth (dd/mm/yy)" required className="w-full p-3 border border-gray-300 rounded-md" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-4">
          <div className="flex flex-col gap-1 w-full">
            <label className="text-[#2D3748] text-[14px]" htmlFor="text">Password</label>
            <input type="password" placeholder="Password" required className="w-full p-3 border border-gray-300 rounded-md" />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label className="text-[#2D3748] text-[14px]" htmlFor="text">Confirm password</label>
            <input type="password" placeholder="Confirm password" required className="w-full p-3 border border-gray-300 rounded-md" />
          </div>
        </div>
        <div className='flex flex-col sm:flex-row justify-between w-full items-start sm:items-center'>
          <div className='flex flex-col gap-4 mb-4 sm:mb-0'>
            <div className='flex gap-1 items-center'>
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <div className='flex gap-1 items-center'>
              <input type="checkbox" name="agree" id="agree" />
              <label htmlFor="agree">I agree to all the Terms and Privacy policy </label>
            </div>
          </div>
          <Link className="text-[#000DBF]" to="/">Forgot password?</Link>
        </div>
        <div className='flex flex-col md:flex-row gap-4 w-full'>
          <button type="submit" className="w-full cursor-pointer p-3 bg-[#000B9F] text-white rounded-md font-semibold hover:bg-blue-700">Create account</button>
          <button type="button" className="w-full flex justify-center items-center gap-3 cursor-pointer p-3 bg-gray-700 text-white rounded-md font-semibold hover:bg-gray-800"><img className='w-5 h-5 object-contain' src={google} /> Sign-in with Google</button>
        </div>


      </form>
      <p className="text-center mt-6">
        Already have an account? <Link to="/signin" className="text-primary font-semibold">Log in</Link>
      </p>
    </div>
  );
};

export default SignUpForm;