// src/components/EditCryptoRates.jsx
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { LoadingSpinner } from './TradeGiftCard';

const EditCryptoRates = () => {
    const [ratesData, setRatesData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetches all rates from the database
    const fetchRates = async () => {
        setLoading(true);
        const { data, error } = await supabase.from('Coins').select('*').order('id');
        if (error) {
            console.error('Error fetching rates:', error);
        } else {
            setRatesData(data);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchRates();
    }, []);
    
    // Generic update function
    const updateRate = async (id, updatedCoin) => {
        const { error } = await supabase
            .from('Coins')
            .update(updatedCoin)
            .eq('id', id);

        if (error) {
            console.error('Error updating rate:', error);
            alert('Error updating rate.');
        } else {
            fetchRates();
        }
    };

    // Deletes a whole gift card type
    const handleDeleteType = async (id) => {
        if (window.confirm("Are you sure you want to delete this entire gift card type?")) {
            const { error } = await supabase.from('Coins').delete().eq('id', id);
            if (error) console.error('Error deleting rate:', error);
            else fetchRates();
        }
    };

    // Adds a new gift card type
    const handleAddType = async (e) => {
        e.preventDefault();
        const { newType } = e.target.elements;
        const { error } = await supabase.from('Coins').insert([{ name: newType.value, rate: 0, min: 0, max: 0, status: 'Active' }]);
        if (error) console.error('Error adding new rate:', error);
        else {
            fetchRates();
            e.target.reset();
        }
    };

    if (loading) return <LoadingSpinner />;

    return (
        <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Edit Crypto Rates</h2>

                {/* <div className="mb-8 p-6 bg-white border rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 text-gray-700">Add New Coin Type</h3>
                    <form onSubmit={handleAddType} className="w-full flex items-center gap-4">
                        <input name="newType" type="text" placeholder="e.g., Bitcoin" required className="w-2/3 p-3 border rounded-md focus:ring-2 focus:ring-blue-500 flex-grow" />
                        <button type="submit" className="bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Add Coin</button>
                    </form>
                </div> */}
                
                <div className="space-y-6">
                    {ratesData.map(rate => (
                        <RateEditor key={rate.id} rateData={rate} onDelete={handleDeleteType} onUpdate={updateRate} />
                    ))}
                </div>
            </div>
        </div>
    );
};

// Sub-component to manage a single gift card type and its rates
const RateEditor = ({ rateData, onDelete, onUpdate }) => {
    const [localRate, setLocalRate] = useState(rateData);

    const handleRateChange = (field, value) => {
        setLocalRate(prev => ({...prev, [field]: value}));
    };
    
    const handleSave = () => {
        const { id, ...updatedCoin } = localRate;
        onUpdate(id, updatedCoin);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex w-full justify-between items-center gap-4 mb-4">
                <input className="text-2xl font-bold text-gray-800 p-2 border rounded-md w-2/3" value={localRate.name} onChange={(e) => handleRateChange('name', e.target.value)} />
                <button onClick={() => onDelete(rateData.id)} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">Delete</button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 p-3 border rounded-md bg-gray-50">
                <input value={localRate.rate} onChange={e => handleRateChange('rate', Number(e.target.value))} placeholder="Rate" type="number" className="p-2 border rounded-md" />
                <input value={localRate.min} onChange={e => handleRateChange('min', Number(e.target.value))} placeholder="Min" type="number" className="p-2 border rounded-md" />
                <input value={localRate.max} onChange={e => handleRateChange('max', Number(e.target.value))} placeholder="Max" type="number" className="p-2 border rounded-md" />
                <input value={localRate.status} onChange={e => handleRateChange('status', e.target.value)} placeholder="Status" className="p-2 border rounded-md" />
                <button onClick={handleSave} className="bg-green-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-600">Save Changes</button>
            </div>
        </div>
    );
};

export default EditCryptoRates;