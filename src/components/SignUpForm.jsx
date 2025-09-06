import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const SignUpForm = () => {
  return (
    <div className="w-full max-w-lg">
      <img src={logo} alt="Ace Digital World" className="h-12 mb-8" />
      <h2 className="text-3xl font-bold mb-6">Create account</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="First name" required className="w-full p-3 border border-gray-300 rounded-md" />
          <input type="text" placeholder="Last name" required className="w-full p-3 border border-gray-300 rounded-md" />
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="Email or phone number" required className="w-full p-3 border border-gray-300 rounded-md" />
          <input type="text" placeholder="Date of birth (dd/mm/yy)" required className="w-full p-3 border border-gray-300 rounded-md" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input type="password" placeholder="Password" required className="w-full p-3 border border-gray-300 rounded-md" />
          <input type="password" placeholder="Confirm password" required className="w-full p-3 border border-gray-300 rounded-md" />
        </div>
        <button type="submit" className="w-full p-3 bg-primary text-white rounded-md font-semibold hover:bg-blue-700">Create account</button>
        <button type="button" className="w-full p-3 mt-4 bg-gray-700 text-white rounded-md font-semibold hover:bg-gray-800">Sign-in with Google</button>
      </form>
      <p className="text-center mt-6">
        Already have an account? <Link to="/signin" className="text-primary font-semibold">Log in</Link>
      </p>
    </div>
  );
};

export default SignUpForm;