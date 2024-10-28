'use client';
import React, { useState } from 'react';

const RegexTester = () => {
    const [regex, setRegex] = useState('');
    const [testString, setTestString] = useState('');
    const [result, setResult] = useState('');

    const testRegex = () => {
        try {
            const regexPattern = new RegExp(regex);
            setResult(regexPattern.test(testString) ? 'Match found!' : 'No match.');
        } catch (error) {
            setResult('Invalid regex');
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Regex Tester</h3>
                <input 
                    type="text" 
                    value={regex} 
                    onChange={(e) => setRegex(e.target.value)} 
                    placeholder="Enter regex"
                    className="w-full p-2 mb-4 bg-gray-700 border border-gray-600 rounded"
                />
                <input 
                    type="text" 
                    value={testString} 
                    onChange={(e) => setTestString(e.target.value)} 
                    placeholder="Test string"
                    className="w-full p-2 mb-4 bg-gray-700 border border-gray-600 rounded"
                />
                <button 
                    onClick={testRegex} 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
                >
                    Test
                </button>
                <p className="mt-4 text-lg">{result}</p>
            </div>
        </div>
    );
};

export default RegexTester;
