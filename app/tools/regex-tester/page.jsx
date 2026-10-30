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
        <div className="flex flex-col items-center">
            <div className="w-full max-w-md bg-paper-2 border border-line p-6 rounded-lg">
                <h1 className="text-2xl font-medium tracking-tight mb-5">Regex Tester</h1>
                <input 
                    type="text" 
                    value={regex} 
                    onChange={(e) => setRegex(e.target.value)} 
                    placeholder="Enter regex"
                    className="w-full p-2 mb-4 bg-paper border border-line rounded"
                />
                <input 
                    type="text" 
                    value={testString} 
                    onChange={(e) => setTestString(e.target.value)} 
                    placeholder="Test string"
                    className="w-full p-2 mb-4 bg-paper border border-line rounded"
                />
                <button 
                    onClick={testRegex} 
                    className="w-full bg-ink hover:bg-ink/80 text-paper p-2 rounded"
                >
                    Test
                </button>
                <p className="mt-4 text-lg">{result}</p>
            </div>
        </div>
    );
};

export default RegexTester;
