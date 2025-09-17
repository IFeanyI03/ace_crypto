// src/components/EditGiftCardRates.jsx
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const EditGiftCardRates = () => {
    const [ratesData, setRatesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({});
    // New state to hold the string value of the textarea while editing
    const [editText, setEditText] = useState('');

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

    // Starts the editing mode for a specific rate
    const handleEdit = (rate) => {
        setEditingId(rate.id);
        setFormData({ type: rate.type });
        // Store the pretty-printed JSON as a string for editing
        setEditText(JSON.stringify(rate.rate, null, 2));
    };

    // Saves the updated rate to the database
    const handleUpdate = async (id) => {
        try {
            // Parse the JSON string from the textarea only when saving
            const updatedRate = JSON.parse(editText);
            const { error } = await supabase
                .from('rates')
                .update({ type: formData.type, rate: updatedRate })
                .eq('id', id);

            if (error) throw error;

            setEditingId(null);
            fetchRates(); // Refresh data
        } catch (err) {
            console.error('Error updating rate:', err);
            alert("Failed to save. The rate data is not in valid JSON format.");
        }
    };

    // Deletes a rate from the database
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this rate?")) {
            const { error } = await supabase.from('rates').delete().eq('id', id);
            if (error) {
                console.error('Error deleting rate:', error);
            } else {
                fetchRates(); // Refresh data
            }
        }
    };
    
    // Adds a new gift card rate
    const handleAdd = async (e) => {
        e.preventDefault();
        const { newType, newRate } = e.target.elements;
        
        try {
            // Ensure the rate is valid JSON
            const parsedRate = JSON.parse(newRate.value);
            const { error } = await supabase
                .from('rates')
                .insert([{ type: newType.value, rate: parsedRate }]);
            
            if (error) throw error;
            
            fetchRates(); // Refresh data
            e.target.reset(); // Clear form
        } catch (err) {
            console.error('Error adding new rate:', err);
            alert("Failed to add rate. Make sure the rate data is in valid JSON format.");
        }
    };

    if (loading) return <p>Loading editor...</p>;

    return (
        <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Edit Gift Card Rates</h2>

                {/* Form to Add New Rate */}
                <div className="mb-8 p-6 bg-white border rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 text-gray-700">Add New Gift Card</h3>
                    <form onSubmit={handleAdd} className="flex flex-col gap-4">
                        <input name="newType" type="text" placeholder="Gift Card Type (e.g., Amazon)" required className="p-3 border rounded-md focus:ring-2 focus:ring-blue-500" />
                        <textarea name="newRate" placeholder='Rate Data (in valid JSON format)' required className="p-3 border rounded-md h-36 font-mono text-sm focus:ring-2 focus:ring-blue-500"></textarea>
                        <button type="submit" className="bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Add Rate</button>
                    </form>
                </div>

                {/* Table of Existing Rates */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="p-4 text-left font-semibold text-gray-600">Type</th>
                                    <th className="p-4 text-left font-semibold text-gray-600">Rate Data (JSON)</th>
                                    <th className="p-4 text-left font-semibold text-gray-600">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ratesData.map((rate) => (
                                    <tr key={rate.id} className="border-b hover:bg-gray-50">
                                        {editingId === rate.id ? (
                                            <>
                                                <td className="p-3"><input type="text" value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})} className="p-2 border rounded w-full" /></td>
                                                <td className="p-3"><textarea value={editText} onChange={(e) => setEditText(e.target.value)} className="p-2 border rounded w-full h-40 font-mono text-sm"></textarea></td>
                                                <td className="p-3 whitespace-nowrap">
                                                    <button onClick={() => handleUpdate(rate.id)} className="bg-green-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-green-600">Save</button>
                                                    <button onClick={() => setEditingId(null)} className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">Cancel</button>
                                                </td>
                                            </>
                                        ) : (
                                            <>
                                                <td className="p-4 font-semibold text-gray-800">{rate.type}</td>
                                                <td className="p-4"><pre className="bg-gray-100 p-3 rounded text-sm max-w-lg overflow-auto">{JSON.stringify(rate.rate, null, 2)}</pre></td>
                                                <td className="p-4 whitespace-nowrap">
                                                    <button onClick={() => handleEdit(rate)} className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-yellow-600">Edit</button>
                                                    <button onClick={() => handleDelete(rate.id)} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">Delete</button>
                                                </td>
                                            </>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditGiftCardRates;