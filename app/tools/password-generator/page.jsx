'use client'
import React, { useState } from 'react';

const PasswordGenerator = () => {
    const [length, setLength] = useState(12);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
    const [password, setPassword] = useState('');
    const [copied, setCopied] = useState(false);

    const generatePassword = () => {
        let chars = '';
        if (includeLowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
        if (includeUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeNumbers) chars += '0123456789';
        if (includeSpecialChars) chars += '!@#$%^&*()_+[]{}';

        if (chars === '') {
            setPassword('Please select at least one character set');
            return;
        }

        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            generatedPassword += chars[randomIndex];
        }
        setPassword(generatedPassword);
        setCopied(false); // Reset copied state after generating a new password
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password)
            .then(() => setCopied(true))
            .catch(() => alert('Failed to copy password'));
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Password Generator</h3>
                <div className="mb-4">
                    <label className="block text-sm mb-2">Length:</label>
                    <input 
                        type="number" 
                        value={length} 
                        onChange={(e) => setLength(e.target.value)} 
                        min="4" 
                        max="32" 
                        className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
                    />
                </div>
                <div className="mb-4 space-y-2">
                    <label className="flex items-center">
                        <input 
                            type="checkbox" 
                            checked={includeLowercase} 
                            onChange={(e) => setIncludeLowercase(e.target.checked)} 
                            className="mr-2"
                        />
                        Include Lowercase Letters
                    </label>
                    <label className="flex items-center">
                        <input 
                            type="checkbox" 
                            checked={includeUppercase} 
                            onChange={(e) => setIncludeUppercase(e.target.checked)} 
                            className="mr-2"
                        />
                        Include Uppercase Letters
                    </label>
                    <label className="flex items-center">
                        <input 
                            type="checkbox" 
                            checked={includeNumbers} 
                            onChange={(e) => setIncludeNumbers(e.target.checked)} 
                            className="mr-2"
                        />
                        Include Numbers
                    </label>
                    <label className="flex items-center">
                        <input 
                            type="checkbox" 
                            checked={includeSpecialChars} 
                            onChange={(e) => setIncludeSpecialChars(e.target.checked)} 
                            className="mr-2"
                        />
                        Include Special Characters
                    </label>
                </div>
                <button 
                    onClick={generatePassword} 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded mb-4"
                >
                    Generate
                </button>
                <p className="mb-4 text-lg">{password}</p>
                <button 
                    onClick={copyToClipboard} 
                    disabled={!password}
                    className={`w-full p-2 rounded ${password ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 cursor-not-allowed'} text-white`}
                >
                    {copied ? 'Copied!' : 'Copy Password'}
                </button>
            </div>
        </div>
    );
};

export default PasswordGenerator;
