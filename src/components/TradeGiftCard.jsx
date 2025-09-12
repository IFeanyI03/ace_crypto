// src/components/TradeGiftCard.jsx
import React from 'react';
import { ItunesIcon, GoldRazerIcon, SteamIcon, MoreGiftcardsIcon, UnlistedCardsIcon } from '../assets/TradeIcons';

const giftCardData = [
    { country: 'Australia', rate: 453, min: 100, max: 450, variant: 'online' },
    { country: 'Australia', rate: 398, min: 25, max: 450, variant: 'online' },
    { country: 'Austria', rate: 680, min: 50, max: 500, variant: 'online' },
    { country: 'Belgium', rate: 680, min: 50, max: 500, variant: 'online' },
    { country: 'Canada', rate: 576, min: 50, max: 500, variant: 'online' },
    { country: 'Finland', rate: 680, min: 50, max: 500, variant: 'online' },
    { country: 'France', rate: 680, min: 50, max: 500, variant: 'online' },
    { country: 'Germany', rate: 680, min: 50, max: 500, variant: 'online' },
    { country: 'Holland', rate: 680, min: 50, max: 500, variant: 'online' },
    { country: 'Ireland', rate: 680, min: 50, max: 500, variant: 'online' },
    { country: 'Italy', rate: 680, min: 50, max: 500, variant: 'online' },
    { country: 'NZD', rate: 357, min: 25, max: 500, variant: 'online' },
];

const FilterButton = ({ icon, label }) => (
    <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100">
        {icon}
        <span>{label}</span>
    </button>
);


const TradeGiftCard = () => {
    return (
        <div>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
                <FilterButton icon={<ItunesIcon />} label="iTunes" />
                <FilterButton icon={<GoldRazerIcon />} label="Gold Razer" />
                <FilterButton icon={<SteamIcon />} label="Steam" />
                <FilterButton icon={<MoreGiftcardsIcon />} label="More Giftcards" />
                <FilterButton icon={<UnlistedCardsIcon />} label="Unlisted Cards" />
            </div>

            <div className="bg-white rounded-lg overflow-x-auto">
                <table className="w-full min-w-max text-left">
                    <thead>
                        <tr className="border-b bg-gray-50">
                            <th className="p-4 font-semibold text-gray-600">Country</th>
                            <th className="p-4 font-semibold text-gray-600">Rate</th>
                            <th className="p-4 font-semibold text-gray-600">Min Value</th>
                            <th className="p-4 font-semibold text-gray-600">Max Value</th>
                            <th className="p-4 font-semibold text-gray-600">Status</th>
                            <th className="p-4 font-semibold text-gray-600">Variant</th>
                        </tr>
                    </thead>
                    <tbody>
                        {giftCardData.map((card, index) => (
                            <tr key={index} className="border-b">
                                <td className="p-4">{card.country}</td>
                                <td className="p-4">{card.rate}</td>
                                <td className="p-4">{card.min}</td>
                                <td className="p-4">{card.max}</td>
                                <td className="p-4 text-green-500 font-medium">Online</td>
                                <td className="p-4">{card.variant}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TradeGiftCard;