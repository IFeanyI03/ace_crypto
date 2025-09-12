import React from 'react';

// Import your crypto icons
import BtcIcon from '../assets/BTC.png';
import EthIcon from '../assets/ETH.png';

// Placeholder icons for others, you can replace these with actual image imports
const PlaceholderIcon = ({ ticker }) => (
    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">
        {ticker.charAt(0)}
    </div>
);

const CryptoListItem = ({ icon, ticker, change, cryptoCurrency, price }) => {
    const isPositive = change > 0;
    const colorClass = isPositive ? 'text-green-500' : 'text-red-500';

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <img src={icon} alt={`${ticker} icon`} className="w-8 h-8" />
                <div className='flex flex-col gap-1'>
                    <p className="font-semibold">{ticker}<span className='text-gray-700 font-medium'>/NGN</span></p>
                    <span className="font-semibold">{cryptoCurrency}</span>
                </div>
            </div>

            <div className='flex flex-col gap-1 items-end'>
                <span className="font-semibold">NGN {price}</span>
                <div className={`font-semibold ${colorClass}`}>
                    {isPositive ? '▲' : '▼'} {Math.abs(change).toFixed(2)}%
                </div>
            </div>
        </div>
    );
};

const CryptoList = () => {
    // You can easily edit this data
    const cryptoData = [
        { icon: BtcIcon, ticker: 'BTC', change: 12.34, currency: 'Bitcoin', price: 300.00 },
        { icon: EthIcon, ticker: 'ETH', change: -5.34, currency: 'Bitcoin', price: 300.00 },
        // Add other cryptocurrencies here. Using placeholders for now.
        // To add more, find/create an icon, import it, and add a new entry below.
        { icon: 'TRX_ICON_PATH', ticker: 'TRX', change: 12.34, currency: 'Bitcoin', price: 300.00 },
        { icon: 'USDT_ICON_PATH', ticker: 'USDT', change: -5.34, currency: 'Bitcoin', price: 300.00 },
        { icon: 'XRP_ICON_PATH', ticker: 'XRP', change: 12.34, currency: 'Bitcoin', price: 300.00 },
    ];

    // A simple function to render either the real icon or a placeholder
    const getIcon = (item) => {
        if (item.ticker === 'BTC') return BtcIcon;
        if (item.ticker === 'ETH') return EthIcon;
        // Add more specific icons here
        // return <PlaceholderIcon ticker={item.ticker} />;
        // For now, let's just use the BTC icon as a fallback placeholder
        return BtcIcon;
    };


    return (
        <div className="w-full max-w-sm py-4 rounded-xl space-y-3">
            {cryptoData.map((crypto) => (
                <CryptoListItem
                    key={crypto.ticker}
                    icon={getIcon(crypto)}
                    ticker={crypto.ticker}
                    change={crypto.change}
                    cryptoCurrency={crypto.currency}
                    price={crypto.price}
                />
            ))}
        </div>
    );
};

export default CryptoList;