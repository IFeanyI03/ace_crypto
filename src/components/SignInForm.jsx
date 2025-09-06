import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const SignInForm = () => {
  return (
    <div className="w-full max-w-md">
      <img src={logo} alt="Ace Digital World" className="h-12 mb-8" />
      <h2 className="text-3xl font-bold mb-6">Sign in</h2>
      <form>
        <div className="mb-4">
          <input type="text" placeholder="Email or phone number" required className="w-full p-3 border border-gray-300 rounded-md"/>
        </div>
        <div className="mb-6">
          <input type="password" placeholder="Password" required className="w-full p-3 border border-gray-300 rounded-md"/>
        </div>
        <button type="submit" className="w-full p-3 bg-primary text-white rounded-md font-semibold hover:bg-blue-700">Login</button>
        <button type="button" className="w-full p-3 mt-4 bg-gray-700 text-white rounded-md font-semibold hover:bg-gray-800">Sign-in with Google</button>
      </form>
      <p className="text-center mt-6">
        Don't have an account? <Link to="/signup" className="text-primary font-semibold">Sign up</Link>
      </p>
    </div>
  );
};

export default SignInForm;