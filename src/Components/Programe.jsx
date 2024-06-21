import React, { useState } from 'react';
import axios from '../utiles/axios';
import { useNavigate } from 'react-router-dom';

const Program = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setamount] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/programs', { title, description, amount });
            if (response.data) {
                navigate("/program/allprogram")
            }
        } catch (error) {
            console.error('Error creating program:', error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2">
                <h2 className="text-center text-2xl mb-4 font-semibold">Create Program</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        id="title"
                        type="text"
                        placeholder="Enter program title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        id="description"
                        placeholder="Enter program description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    ></textarea>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                        amount
                    </label>
                    <input
                        id="amount"
                        type="number"
                        placeholder="Enter program amount"
                        value={amount}
                        onChange={(e) => setamount(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Create Program
                    </button>
                </div>
            </form>
            <button onClick={()=>navigate("/program/allprogram")} className='p-2 bg-zinc-300 rounded-2xl ml-5'>All programs</button>
        </div>
    );
};

export default Program;
