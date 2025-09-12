import React, { useState, useEffect } from 'react';

// Import your crypto icons
import BtcIcon from '../assets/BTC.png';
import EthIcon from '../assets/ETH.png';
import SolIcon from '../assets/solana-sol-logo.png';
import UsdtIcon from '../assets/tether-usdt-logo.png';
import DogeIcon from '../assets/dogecoin-doge-logo.png';
import BnbIcon from '../assets/bnb-bnb-logo.png';
import TrxIcon from '../assets/tron-trx-logo.png';
import UsdcIcon from '../assets/usd-coin-usdc-logo.png';
import XrpIcon from '../assets/xrp-xrp-logo.png';

const CryptoListItem = ({ icon, ticker, name, price, change }) => {
    const isPositive = parseFloat(change) > 0;
    const colorClass = isPositive ? 'text-green-500' : 'text-red-500';

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <img src={icon} alt={`${ticker} icon`} className="w-8 h-8" />
                <div className='flex flex-col gap-1'>
                    <p className="font-semibold">{ticker}<span className='text-gray-700 font-medium'>/NGN</span></p>
                    <span className="font-semibold text-gray-500">{name}</span>
                </div>
            </div>

            <div className='flex flex-col gap-1 items-end'>
                <span className="font-semibold">NGN {parseFloat(price).toLocaleString()}</span>
                <div className={`font-semibold ${colorClass}`}>
                    {isPositive ? '▲' : '▼'} {Math.abs(change).toFixed(2)}%
                </div>
            </div>
        </div>
    );
};

const LoadingSpinner = () => (
    <div className="flex justify-center items-center p-8">
        <svg className="animate-spin h-8 w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
    </div>
);

const CryptoList = () => {
    const [cryptoData, setCryptoData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://api.coinlore.net/api/tickers/?start=0&limit=10')
            .then(response => response.json())
            .then(data => {
                setCryptoData(data.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching crypto data:', error);
                setIsLoading(false);
            });
    }, []);

    const getIcon = (symbol) => {
        switch (symbol) {
            case 'BTC':
                return BtcIcon;
            case 'ETH':
                return EthIcon;
            case 'USDT':
                return UsdtIcon;
            case 'BNB':
                return BnbIcon;
            case 'SOL':
                return SolIcon;
            case 'XRP':
                return XrpIcon;
            case 'USDC':
                return UsdcIcon;
            case 'DOGE':
                return DogeIcon;
            case 'TRX':
                return TrxIcon;
            default:
                // A fallback icon if the symbol doesn't match
                return BtcIcon;
        }
    };

    return (
        <div className="w-full max-w-sm py-4 rounded-xl space-y-3">
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                cryptoData.map((crypto) => (
                    <CryptoListItem
                        key={crypto.id}
                        icon={getIcon(crypto.symbol)}
                        ticker={crypto.symbol}
                        name={crypto.name}
                        price={crypto.price_usd}
                        change={crypto.percent_change_24h}
                    />
                ))
            )}
        </div>
    );
};

export default CryptoList;