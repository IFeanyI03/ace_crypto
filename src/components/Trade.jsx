// src/components/Trade.jsx
import React, { useState } from 'react';
import TradeCrypto from './TradeCrypto';
import TradeGiftCard from './TradeGiftCard';

const Trade = () => {
    const [activeTab, setActiveTab] = useState('crypto');

    const TabButton = ({ label, tabName }) => {
        const isActive = activeTab === tabName;
        return (
            <button
                onClick={() => setActiveTab(tabName)}
                className={`text-lg font-bold pb-2 transition-colors ${
                    isActive ? 'text-black border-b-4 border-blue-600' : 'text-gray-500 hover:text-black'
                }`}
            >
                {label}
            </button>
        );
    };

    return (
        <section className="bg-gray-50 py-16 px-4 sm:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-center gap-8 mb-8">
                    <TabButton label="Trade Crypto" tabName="crypto" />
                    <TabButton label="Trade Gift Card" tabName="giftcard" />
                </div>

                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold">Our Rates</h2>
                </div>
                
                {activeTab === 'crypto' ? <TradeCrypto /> : <TradeGiftCard />}
            </div>
        </section>
    );
};

export default Trade;