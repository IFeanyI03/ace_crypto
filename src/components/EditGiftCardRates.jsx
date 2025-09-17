// src/components/EditGiftCardRates.jsx
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const EditGiftCardRates = () => {
    const [ratesData, setRatesData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetches all rates from the database
    const fetchRates = async () => {
        setLoading(true);
        const { data, error } = await supabase.from('rates').select('*').order('id');
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
    const updateRate = async (id, type, rate) => {
        const { error } = await supabase
            .from('rates')
            .update({ type, rate })
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
            const { error } = await supabase.from('rates').delete().eq('id', id);
            if (error) console.error('Error deleting rate:', error);
            else fetchRates();
        }
    };

    // Adds a new gift card type
    const handleAddType = async (e) => {
        e.preventDefault();
        const { newType } = e.target.elements;
        const { error } = await supabase.from('rates').insert([{ type: newType.value, rate: [] }]);
        if (error) console.error('Error adding new rate:', error);
        else {
            fetchRates();
            e.target.reset();
        }
    };

    if (loading) return <p>Loading editor...</p>;

    return (
        <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Edit Gift Card Rates</h2>

                <div className="mb-8 p-6 bg-white border rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 text-gray-700">Add New Gift Card Type</h3>
                    <form onSubmit={handleAddType} className="w-full flex items-center gap-4">
                        <input name="newType" type="text" placeholder="e.g., Amazon" required className="w-2/3 p-3 border rounded-md focus:ring-2 focus:ring-blue-500 flex-grow" />
                        <button type="submit" className="bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Add Rate</button>
                    </form>
                </div>
                
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
    const [localRates, setLocalRates] = useState(rateData.rate);
    const [typeName, setTypeName] = useState(rateData.type);

    const handleRateChange = (index, field, value) => {
        const updatedRates = [...localRates];
        updatedRates[index][field] = value;
        setLocalRates(updatedRates);
    };

    const addRateField = () => {
        setLocalRates([...localRates, { country: 'USA', rate: 0, min: 0, max: 0, variant: 'Physical', naira: 0 }]);
    };
    
    const removeRateField = (index) => {
        const updatedRates = localRates.filter((_, i) => i !== index);
        setLocalRates(updatedRates);
    };
    
    const handleSave = () => {
        onUpdate(rateData.id, typeName, localRates);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex w-full justify-between items-center gap-4 mb-4">
                <input className="text-2xl font-bold text-gray-800 p-2 border rounded-md w-2/3" value={typeName} onChange={(e) => setTypeName(e.target.value)} />
                <button onClick={() => onDelete(rateData.id)} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">Delete</button>
            </div>
            
            <div className="space-y-4">
                {localRates.map((rate, index) => (
                    <div key={index} className="grid grid-cols-2 md:grid-cols-7 gap-3 p-3 border rounded-md bg-gray-50">
                        <input value={rate.country} onChange={e => handleRateChange(index, 'country', e.target.value)} placeholder="Country" className="p-2 border rounded-md" />
                        <input value={rate.rate} onChange={e => handleRateChange(index, 'rate', Number(e.target.value))} placeholder="Rate" type="number" className="p-2 border rounded-md" />
                        <input value={rate.min} onChange={e => handleRateChange(index, 'min', Number(e.target.value))} placeholder="Min" type="number" className="p-2 border rounded-md" />
                        <input value={rate.max} onChange={e => handleRateChange(index, 'max', Number(e.target.value))} placeholder="Max" type="number" className="p-2 border rounded-md" />
                        <input value={rate.naira} onChange={e => handleRateChange(index, 'naira', Number(e.target.value))} placeholder="Naira" type="number" className="p-2 border rounded-md" />
                        <input value={rate.variant} onChange={e => handleRateChange(index, 'variant', e.target.value)} placeholder="Variant" className="p-2 border rounded-md" />
                        <button onClick={() => removeRateField(index)} className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600">Remove</button>
                    </div>
                ))}
            </div>

            <div className="mt-4 flex gap-4 justify-between">
                <button onClick={addRateField} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add Rate Entry</button>
                <button onClick={handleSave} className="bg-green-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-600">Save Changes</button>
            </div>
        </div>
    );
};

export default EditGiftCardRates;