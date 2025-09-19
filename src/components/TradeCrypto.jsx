// src/components/TradeCrypto.jsx
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { BitcoinIcon, EthereumIcon, UsdtIcon } from '../assets/TradeIcons';
import { LoadingSpinner } from './TradeGiftCard';

const CryptoTab = ({ icon, label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-2 px-2 py-2 text-[12px] md:text-[16px] md:px-4 md:py-2 rounded-lg font-semibold transition-colors ${isActive ? 'bg-[#000B9F] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
    >
        {icon}
        <span>{label}</span>
    </button>
);

const TradeCrypto = () => {
    const [activeCrypto, setActiveCrypto] = useState('');
    const [cryptoData, setCryptoData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCoins = async () => {
            setLoading(true);
            let { data: Coins, error } = await supabase
                .from('Coins')
                .select('*');

            if (error) {
                console.error('Error fetching coins:', error);
            } else {
                const formattedData = Coins.reduce((acc, coin) => {
                    acc[coin.name] = coin;
                    return acc;
                }, {});
                setCryptoData(formattedData);
                if (Coins.length > 0) {
                    setActiveCrypto(Coins[0].name);
                }
            }
            setLoading(false);
        };

        fetchCoins();
    }, []);

    const currentData = cryptoData[activeCrypto];

    const getIcon = (name) => {
        switch (name) {
            case 'Bitcoin':
                return <BitcoinIcon />;
            case 'Ethereum':
                return <EthereumIcon />;
            case 'USDT':
                return <UsdtIcon />;
            default:
                return null;
        }
    }



    return (
        <div>
            {loading ? <LoadingSpinner/> :
                <div className="flex justify-center gap-4 mb-8">
                    {Object.keys(cryptoData).map((coinName) => (
                        <CryptoTab
                            key={coinName}
                            icon={getIcon(coinName)}
                            label={coinName}
                            isActive={activeCrypto === coinName}
                            onClick={() => setActiveCrypto(coinName)}
                        />
                    ))}

                </div>
            }
            {currentData && (
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex gap-4 text-center">
                        <div className='w-1/4 flex flex-col justify-between'>
                            <p className="text-gray-500 text-sm">Rate</p>
                            <p className="font-bold text-lg">{currentData.rate}</p>
                        </div>
                        <div className='w-1/4 flex flex-col justify-between'>
                            <p className="text-gray-500 text-sm">Min Value</p>
                            <p className="font-bold text-lg">{currentData.min}</p>
                        </div>
                        <div className='w-1/4 flex flex-col justify-between'>
                            <p className="text-gray-500 text-sm">Max Value</p>
                            <p className="font-bold text-lg">{currentData.max}</p>
                        </div>
                        <div className='w-1/4 flex flex-col justify-between'>
                            <p className="text-gray-500 text-sm">Status</p>
                            <p className="font-bold text-lg text-green-500">{currentData.status}</p>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default TradeCrypto;