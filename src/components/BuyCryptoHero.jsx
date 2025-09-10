import React from 'react';
import cryptoIllustration from '../assets/crypto-illustration.png'
import CryptoForm from './CryptoForm';

const BuyCryptoHero = () => {
    return (
        <div className='relative pt-4 flex flex-col gap-8 md:gap-[66px] px-4 sm:px-8 md:px-[121px]'>
            
            <section className="">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    {/* Left Side Content */}
                    <div className="md:w-1/2 flex flex-col gap-4 text-center md:text-left">
                        <h1 className="text-3xl md:text-[48px] w-full md:w-[419px] font-bold">
                            Buy Crypto In A Few Easy Steps
                        </h1>
                        <p className="text-gray-600 text-lg">
                            With Various Payment Methods Available, You're Sure To Find One That Works For You.
                        </p>
                    </div>
                    {/* Right Side Form */}
                    <div className="w-full md:w-1/2">
                        <CryptoForm />
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    {/* Left Side Content */}
                    <div className="md:w-1/2 flex flex-col gap-6 text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                            Buy & Sell Crypto With <span className='text-[#000B9F]'>Ace Digital</span>
                        </h1>
                        <p className="text-gray-600 text-lg">
                            Users Can Easily Buy Bitcoin And Other Cryptocurrencies Using A Wide Range Of Payment Options,
                            Including Bank Transfer, Credit Or Debit Card, And Cash. There's A Payment Option For Everyone
                            On Ace Digital. We Work Only With Verified And Trusted Partners To Give You A Secure And Seamless
                            Crypto-Buying Experience. Binance Accepts A Wide Range Of Currencies And Makes It Easy For You
                            To Buy Crypto Using <span className="font-semibold text-gray-800">USD, Pounds, Euros, Naira</span>.
                            You Can Also Use A Wide Range Of Accepted Stablecoins To Buy Crypto.
                        </p>
                        <div className="mt-4">
                            <button className="px-8 py-3 md:px-12 md:py-4 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700">
                                Create Account
                            </button>
                        </div>
                    </div>

                    {/* Right Side Illustration */}
                    <div className="md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
                        <img
                            src={cryptoIllustration}
                            alt="Crypto trading illustration"
                            className="w-full max-w-md md:max-w-lg h-auto object-contain"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BuyCryptoHero;