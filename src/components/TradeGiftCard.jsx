import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const FilterButton = ({ label, onClick, isActive }) => (
    <button onClick={() => onClick(label)} className={`flex items-center gap-2 px-3 py-1.5 border rounded-lg text-sm font-medium hover:text-white hover:bg-[#000B9F] ${isActive ? 'bg-[#000B9F] text-white' : 'border-gray-300 text-gray-700'}`}>
        <span>{label}</span>
    </button>
);

export const LoadingSpinner = () => (
    <div className="flex justify-center items-center p-8">
        <svg className="animate-spin h-8 w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
    </div>
);

const TradeGiftCard = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [giftCardData, setGiftCardData] = useState([]);
    const [allGiftCards, setAllGiftCards] = useState([]);
    const [giftCardTypes, setGiftCardTypes] = useState([]);
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
                const flattenedData = rates.flatMap(rate =>
                    rate.rate.map(r => ({ ...r, type: rate.type }))
                );

                setAllGiftCards(flattenedData);
                setGiftCardData(flattenedData);

                const types = ['All', ...new Set(rates.map(rate => rate.type))];
                setGiftCardTypes(types);
            }
            setLoading(false);
        };

        fetchRates();
    }, []);

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
        if (filter === 'All') {
            setGiftCardData(allGiftCards);
        } else {
            const filteredData = allGiftCards.filter(card => card.type === filter);
            setGiftCardData(filteredData);
        }
    };

    return (
        <div>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
                {giftCardTypes.map((type, index) => (
                    <FilterButton
                        key={index}
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
                                <th className="p-4 font-semibold text-gray-600">Type</th>
                                <th className="p-4 font-semibold text-gray-600">Country</th>
                                <th className="p-4 font-semibold text-gray-600">Rate (per $)</th>
                                <th className="p-4 font-semibold text-gray-600">Min Value</th>
                                <th className="p-4 font-semibold text-gray-600">Variant</th>
                            </tr>
                        </thead>
                        <tbody>
                            {giftCardData.map((card, index) => (
                                <tr key={index} className="border-b">
                                    <td className="p-4">{card.type}</td>
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