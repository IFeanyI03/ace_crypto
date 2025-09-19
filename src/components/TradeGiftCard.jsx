import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
// import ItunesIcon from '../assets/itunes.png';
// import RazerIcon from '../assets/razer.png';
// import SteamIcon from '../assets/steam.png';
// import {
//     SiItunes,
//     SiRazer,
//     SiSteam,
//     // SiSephora,
//     // SiNordstrom,
//     SiXbox,
//     SiEbay,
//     SiMacys,
//     SiGoogleplay,
//     SiVisa
// } from 'react-icons/si';

// Create a mapping from the card type string to the imported icon component
// const iconMap = {
//     'iTunes': <SiItunes size={24} />,
//     'Razer Gold': <SiRazer size={24} />,
//     'Steam': <SiSteam size={24} />,
//     'Sephora': <SiVisa size={24} />,
//     'Nordstrom': <SiVisa size={24} />,
//     'Xbox': <SiXbox size={24} />,
//     'eBay': <SiEbay size={24} />,
//     'Macy': <SiMacys size={24} />, // Note: The brand name is Macy's
//     'Google Play': <SiGoogleplay size={24} />,
//     'Vanilla': <SiVisa size={24} />, // Using SiVisa as a stand-in for Vanilla
// };

const FilterButton = ({ icon, label, onClick, isActive }) => (
    <button onClick={() => onClick(label)} className={`flex items-center gap-2 px-3 py-1.5 border rounded-lg text-sm font-medium hover:text-white hover:bg-[#000B9F] ${isActive ? 'bg-[#000B9F] text-white' : 'border-gray-300 text-gray-700'}`}>
        {/* <img className='w-6 h-6 object-contain' src={icon} alt={`${label} icon`} /> */}
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
    const [activeFilter, setActiveFilter] = useState('');
    const [giftCardData, setGiftCardData] = useState({});
    // const [giftCardTypes, setGiftCardTypes] = useState([]);
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



    const giftCardTypes = Object.keys(giftCardData);

    const activeData = giftCardData[activeFilter] || [];

    return (
        <div>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
                {giftCardTypes.map((type, index) => (
                    <FilterButton
                        key={index}
                        // icon={iconMap[type] || <SiVisa size={24} />} // Use a default icon if not found
                        label={type}
                        onClick={handleFilterClick}
                        isActive={activeFilter === type}
                    />
                ))}
            </div>

            <div className="bg-white rounded-lg overflow-x-auto">
                {loading ? <LoadingSpinner /> : (
                    <table className="w-full min-w-max text-left">
                        <thead>
                            <tr className="border-b bg-gray-50">
                                <th className="p-4 font-semibold text-gray-600">Country</th>
                                <th className="p-4 font-semibold text-gray-600">Rate (per $)</th>
                                <th className="p-4 font-semibold text-gray-600">Min Value</th>
                                <th className="p-4 font-semibold text-gray-600">Variant</th>
                            </tr>
                        </thead>
                        <tbody>
                            {activeData.map((card, index) => (
                                <tr key={index} className="border-b">
                                    <td className="p-4">{card.country}</td>
                                    <td className="p-4">{card.rate}</td>
                                    <td className="p-4">{card.min}</td>
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