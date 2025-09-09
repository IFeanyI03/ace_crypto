import React from 'react';
import illustration from '../assets/auth-illustration.png'; // Add the illustration to src/assets

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-container flex flex-col md:flex-row justify-center px-4 sm:px-8 md:px-20 h-screen gap-8 md:gap-16 items-center">
      <div className="auth-form-section w-full md:w-fit mt-8 md:mt-0">
        {children}
      </div>
      <div className="auth-illustration-section hidden md:block">
        <img src={illustration} alt="Security Illustration" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default AuthLayout;