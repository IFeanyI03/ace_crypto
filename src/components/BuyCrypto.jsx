import React from 'react';
import CryptoForm from './CryptoForm';

const BuyCrypto = () => {
  return (
    <section className="container mx-auto px-6 lg:px-32 py-24">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Side Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Buy Crypto In A Few Easy Steps
          </h1>
          <p className="text-gray-600 text-lg">
            With Various Payment Methods Available, You're Sure To Find One That Works For You.
          </p>
        </div>
        {/* Right Side Form */}
        <div className="md:w-1/2">
          <CryptoForm />
        </div>
      </div>
    </section>
  );
};

export default BuyCrypto;