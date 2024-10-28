'use client'
import React, { useState } from 'react';

const Base64Converter = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [copied, setCopied] = useState(false);

    const encodeToBase64 = () => setOutput(btoa(input));
    const decodeFromBase64 = () => {
        try {
            setOutput(atob(input));
        } catch (error) {
            setOutput("Invalid Base64 string");
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(output)
            .then(() => setCopied(true))
            .catch(() => alert("Failed to copy output"));
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Base64 Encoder/Decoder</h3>
                <textarea 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder="Enter text here..."
                    className="w-full h-32 p-2 mb-4 bg-gray-700 text-white border border-gray-600 rounded resize-none"
                />
                <div className="flex justify-between mb-4">
                    <button 
                        onClick={encodeToBase64} 
                        className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded mr-2"
                    >
                        Encode
                    </button>
                    <button 
                        onClick={decodeFromBase64} 
                        className="w-1/2 bg-green-600 hover:bg-green-700 text-white p-2 rounded ml-2"
                    >
                        Decode
                    </button>
                </div>
                <p className="text-lg">Output:</p>
                <div className="w-full p-2 mt-2 bg-gray-700 text-white rounded min-h-[4rem] overflow-auto break-words">
                    {output || <span className="text-gray-400">Output will appear here...</span>}
                </div>
                <button 
                    onClick={copyToClipboard} 
                    disabled={!output} 
                    className={`w-full mt-4 p-2 rounded ${output ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-600 cursor-not-allowed'} text-white`}
                >
                    {copied ? 'Copied!' : 'Copy Output'}
                </button>
            </div>
        </div>
    );
};

export default Base64Converter;
