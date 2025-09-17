
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const EditGiftCardRates = () => {
    const [ratesData, setRatesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({});

    // Fetches all rates from the database
    const fetchRates = async () => {
        setLoading(true);
        const { data, error } = await supabase.from('rates').select('*');
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

    // Handles input changes for the edit form
    const handleInputChange = (e, field) => {
        setFormData({ ...formData, [field]: e.target.value });
    };

    // Starts the editing mode for a specific rate
    const handleEdit = (rate) => {
        setEditingId(rate.id);
        setFormData(rate);
    };

    // Saves the updated rate to the database
    const handleUpdate = async (id) => {
        const { rate, type } = formData;
        const { error } = await supabase
            .from('rates')
            .update({ rate, type })
            .eq('id', id);

        if (error) {
            console.error('Error updating rate:', error);
        } else {
            setEditingId(null);
            fetchRates(); // Refresh data
        }
    };

    // Deletes a rate from the database
    const handleDelete = async (id) => {
        const { error } = await supabase
            .from('rates')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Error deleting rate:', error);
        } else {
            fetchRates(); // Refresh data
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
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-6">Edit Gift Card Rates</h2>

            {/* Form to Add New Rate */}
            <div className="mb-8 p-4 border rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Add New Gift Card</h3>
                <form onSubmit={handleAdd} className="flex flex-col gap-4">
                    <input name="newType" type="text" placeholder="Gift Card Type (e.g., Amazon)" required className="p-2 border rounded" />
                    <textarea name="newRate" placeholder='Rate Data (in JSON format)' required className="p-2 border rounded h-32"></textarea>
                    <button type="submit" className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">Add Rate</button>
                </form>
            </div>

            {/* Table of Existing Rates */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="p-4 text-left">Type</th>
                            <th className="p-4 text-left">Rate Data (JSON)</th>
                            <th className="p-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ratesData.map((rate) => (
                            <tr key={rate.id} className="border-b">
                                {editingId === rate.id ? (
                                    <>
                                        <td className="p-2"><input type="text" value={formData.type} onChange={(e) => handleInputChange(e, 'type')} className="p-2 border rounded w-full" /></td>
                                        <td className="p-2"><textarea value={JSON.stringify(formData.rate, null, 2)} onChange={(e) => setFormData({...formData, rate: JSON.parse(e.target.value)})} className="p-2 border rounded w-full h-40"></textarea></td>
                                        <td className="p-2">
                                            <button onClick={() => handleUpdate(rate.id)} className="bg-green-500 text-white px-3 py-1 rounded mr-2">Save</button>
                                            <button onClick={() => setEditingId(null)} className="bg-gray-500 text-white px-3 py-1 rounded">Cancel</button>
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td className="p-4 font-semibold">{rate.type}</td>
                                        <td className="p-4"><pre className="bg-gray-100 p-2 rounded text-sm max-w-lg overflow-auto">{JSON.stringify(rate.rate, null, 2)}</pre></td>
                                        <td className="p-4">
                                            <button onClick={() => handleEdit(rate)} className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">Edit</button>
                                            <button onClick={() => handleDelete(rate.id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                                        </td>
                                    </>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EditGiftCardRates;
