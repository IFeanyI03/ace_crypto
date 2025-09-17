// src/components/TradeGiftCard.jsx
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { ItunesIcon, GoldRazerIcon, SteamIcon } from '../assets/TradeIcons';
import itunes from '../assets/itunes.png';
import razer from '../assets/razer.png';
import steam from '../assets/steam.png';

const FilterButton = ({ icon, label, onClick, isActive }) => (
    <button onClick={() => onClick(label)} className={`flex items-center gap-2 px-3 py-1.5 border rounded-lg text-sm font-medium hover:text-white hover:bg-[#000B9F] ${isActive ? 'bg-[#000B9F] text-white' : 'border-gray-300 text-gray-700'}`}>
        {icon}
        <span>{label}</span>
    </button>
);

const LoadingSpinner = () => (
    <div className="flex justify-center items-center p-8">
        <svg className="animate-spin h-8 w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
    </div>
);

const TradeGiftCard = () => {
    const [activeFilter, setActiveFilter] = useState('iTunes');
    const [giftCardData, setGiftCardData] = useState({});
    const [loading, setLoading] = useState(true);

















    useEffect(() => {
        const fetchRates = async () => {
            setLoading(true);
            let { data: rates, error } = await supabase














                .from('rates')
                .select('*');
















            if (error) {
                console.error('Error fetching rates:', error);
            } else {
                const formattedData = rates.reduce((acc, rate) => {
                    acc[rate.type] = rate.rate;
                    return acc;
                }, {});
                setGiftCardData(formattedData);
            }
            setLoading(false);
        };

        fetchRates();
    }, []);

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);















    };

    const activeData = giftCardData[activeFilter] || [];

    return (
        <div>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
                <FilterButton icon={<img className='w-6 h-6 object-contain' src={itunes}/>} label="iTunes" onClick={handleFilterClick} isActive={activeFilter === 'iTunes'} />
                <FilterButton icon={<img className='w-6 h-6 object-contain' src={razer}/>} label="Razer Gold" onClick={handleFilterClick} isActive={activeFilter === 'Razer Gold'} />
                <FilterButton icon={<img className='w-6 h-6 object-contain'src={steam}/>} label="Steam" onClick={handleFilterClick} isActive={activeFilter === 'Steam'} />
                <FilterButton icon={<img className='w-6 h-6 object-contain'src={itunes}/>} label="Sephora" onClick={handleFilterClick} isActive={activeFilter === 'Sephora'} />
                <FilterButton icon={<img className='w-6 h-6 object-contain'src={itunes}/>} label="Nordstrom" onClick={handleFilterClick} isActive={activeFilter === 'Nordstrom'} />
                <FilterButton icon={<img className='w-6 h-6 object-contain'src={itunes}/>} label="Xbox" onClick={handleFilterClick} isActive={activeFilter === 'Xbox'} />
                <FilterButton icon={<img className='w-6 h-6 object-contain'src={itunes}/>} label="eBay" onClick={handleFilterClick} isActive={activeFilter === 'eBay'} />
                <FilterButton icon={<img className='w-6 h-6 object-contain'src={itunes}/>} label="Macy" onClick={handleFilterClick} isActive={activeFilter === 'Macy'} />
                <FilterButton icon={<img className='w-6 h-6 object-contain'src={itunes}/>} label="Google Play" onClick={handleFilterClick} isActive={activeFilter === 'Google Play'} />
                <FilterButton icon={<img className='w-6 h-6 object-contain'src={itunes}/>} label="Vanilla" onClick={handleFilterClick} isActive={activeFilter === 'Vanilla'} />
            </div>

            <div className="bg-white rounded-lg overflow-x-auto">
                {loading ? <LoadingSpinner /> : (
                    <table className="w-full min-w-max text-left">
                        <thead>
                            <tr className="border-b bg-gray-50">
                                <th className="p-4 font-semibold text-gray-600">Country</th>
                                <th className="p-4 font-semibold text-gray-600">Rate (per $)</th>
                                <th className="p-4 font-semibold text-gray-600">Min Value</th>
                                <th className="p-4 font-semibold text-gray-600">Max Value</th>
                                <th className="p-4 font-semibold text-gray-600">Naira Value</th>
                                <th className="p-4 font-semibold text-gray-600">Variant</th>
                            </tr>
                        </thead>
                        <tbody>
                            {activeData.map((card, index) => (
                                <tr key={index} className="border-b">
                                    <td className="p-4">{card.country}</td>
                                    <td className="p-4">{card.rate}</td>
                                    <td className="p-4">{card.min}</td>
                                    <td className="p-4">{card.max}</td>
                                    <td className="p-4">{card.naira.toLocaleString()}</td>
                                    <td className="p-4">{card.variant}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

























            </div>
        </div>
    );
};

export default TradeGiftCard;