import React from 'react';
import Header from '../components/Header';
import CryptoForm from '../components/CryptoForm';
import image from '../assets/cryptoList.png'
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="bg-white relative" >
      <Header />
      <main>
        <section className="relative z-0 top-[76px] mx-auto px-[121px]">
          <div className="flex flex-col h-[677px] md:flex-row items-center gap-12">
            <div className="md:w-1/2 flex flex-col gap-4">
              <h1 className="text-[48px] w-[433px] font-bold leading-tight">
                Chose <span className='text-[#000B9F]'>Ace DIgital </span>World Today
              </h1>
              <p className="font-medium text-[24px]">
                Ace digital is the easiest place to buy and sell
                cryptocurrency. Sign up and get started today.
              </p>
              <div className='h-[95px] flex gap-[17px]'>
                <input className='h-full w-[355px] border-[#00000029] p-2.5 border-[1px] rounded-[8px]' placeholder='Email/phone number' type="text" />
                <button className='h-full w-[192px] bg-[#000B9F] p-2.5 rounded-[8px] text-white'>Get Started</button>
              </div>
            </div>
            <div className="md:w-1/2 flex items-ceter justify-center">
              <img className='w-[328px] h-[328px] object-contain' src={image} />
            </div>
          </div>
        </section>
        <Services />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;