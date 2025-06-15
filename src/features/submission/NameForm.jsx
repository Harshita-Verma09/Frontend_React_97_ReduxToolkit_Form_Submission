import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from '../nameSlice';

const NameForm = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const name = useSelector(state => state.user.name);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setName(input));
        setInput('');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Enter Your Name
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Your name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition duration-200"
                    >
                        Submit
                    </button>
                </form>
                {name && (
                    <p className="mt-6 text-center text-green-600 font-medium">
                        Redux Store Name: <span className="font-bold">{name}</span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default NameForm;
