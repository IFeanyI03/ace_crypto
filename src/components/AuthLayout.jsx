import React from 'react';
import illustration from '../assets/auth-illustration.png'; // Add the illustration to src/assets

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-container flex justify-center px-20 h-screen gap-16 items-center">
      <div className="auth-form-section w-fit">
        {children}
      </div>
      <div className="auth-illustration-section">
        <img src={illustration} alt="Security Illustration" />
      </div>
    </div>
  );
};

export default AuthLayout;