// src/components/TradeCrypto.jsx
import React, { useState } from 'react';
import { BitcoinIcon, EthereumIcon, UsdtIcon } from '../assets/TradeIcons';

const CryptoTab = ({ icon, label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors ${
            isActive ? 'bg-[#000B9F] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
    >
        {icon}
        <span>{label}</span>
    </button>
);

const TradeCrypto = () => {
    const [activeCrypto, setActiveCrypto] = useState('Bitcoin');
    
    // Dummy data - in a real app, this would come from an API
    const cryptoData = {
        Bitcoin: { rate: 990, min: 5, max: 100, status: 'Active' },
        Ethereum: { rate: 850, min: 10, max: 150, status: 'Active' },
        USDT: { rate: 1, min: 1, max: 10000, status: 'Active' },
    };

    const currentData = cryptoData[activeCrypto];

    return (
        <div>
            <div className="flex justify-center gap-4 mb-8">
                <CryptoTab
                    icon={<BitcoinIcon />}
                    label="Bitcoin"
                    isActive={activeCrypto === 'Bitcoin'}
                    onClick={() => setActiveCrypto('Bitcoin')}
                />
                <CryptoTab
                    icon={<EthereumIcon />}
                    label="Ethereum"
                    isActive={activeCrypto === 'Ethereum'}
                    onClick={() => setActiveCrypto('Ethereum')}
                />
                <CryptoTab
                    icon={<UsdtIcon />}
                    label="USDT"
                    isActive={activeCrypto === 'USDT'}
                    onClick={() => setActiveCrypto('USDT')}
                />
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="grid grid-cols-4 gap-4 text-center">
                    <div>
                        <p className="text-gray-500 text-sm">Rate</p>
                        <p className="font-bold text-lg">{currentData.rate}</p>
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Min Value</p>
                        <p className="font-bold text-lg">{currentData.min}</p>
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Max Value</p>
                        <p className="font-bold text-lg">{currentData.max}</p>
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Status</p>
                        <p className="font-bold text-lg text-green-500">{currentData.status}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TradeCrypto;