import React, { useState } from 'react';
import BTC from '../assets/BTC.png'
import ETH from '../assets/ETH.png'

const CryptoForm = () => {
  const [activeTab, setActiveTab] = useState('Buy');

  const InputRow = ({ label, placeholder, currency, isReadOnly = false }) => (
    <div className="flex py-2 px-4 sm:px-6 md:px-10 flex-col h-fit w-full rounded-[8px] bg-[#F5F5F5] gap-2">
      <label className="text-xl sm:text-2xl md:text-[32px] text-gray-500">{label}</label>
      <div className="flex justify-between h-12 items-center p-2">
        <input
          type="text"
          placeholder={placeholder}
          readOnly={isReadOnly}
          className="w-full h-full bg-transparent focus:outline-none text-sm sm:text-base"
        />
        <div className="flex items-center rounded-full gap-2 sm:gap-4 md:gap-[18px] bg-white text-gray-800 font-semibold px-3 sm:px-4 md:px-[18px] py-2 w-fit">
          <img src={`${currency === 'BTC' ? BTC : ETH}`} alt={currency} className="w-5 h-5 sm:w-6 sm:h-6 rounded-full" />
          <span className="text-sm sm:text-base">{currency + " >"}</span> 
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 sm:p-6 w-full">
      {/* Tabs */}
      <div className="flex justify-center border-b-2 border-gray-300 mb-6">
        <button
          onClick={() => setActiveTab('Buy')}
          className={`w-1/2 py-2 text-xl sm:text-2xl md:text-[32px] border-b-[8px] md:border-b-[11px] font-semibold ${activeTab === 'Buy' ? 'text-black border-[#2B35CA]' : 'text-gray-400'}`}
        >
          Buy
        </button>
        <button
          onClick={() => setActiveTab('Sell')}
          className={`w-1/2 py-2 text-xl sm:text-2xl md:text-[32px] border-b-[8px] md:border-b-[11px] font-semibold ${activeTab === 'Sell' ? 'text-black border-[#2B35CA]' : 'text-gray-400'}`}
        >
          Sell
        </button>
      </div>
      
      {/* Form Content */}
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-[22px]">
        <InputRow label="Send" placeholder="0.0000-1000000" currency="BTC" />
        <InputRow label="Receive" placeholder="0.0000" currency="ETH" isReadOnly={true} />
        <button className="w-full p-3 sm:p-4 mt-2 bg-[#000B9F] text-white rounded-lg font-semibold hover:bg-blue-800">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default CryptoForm;