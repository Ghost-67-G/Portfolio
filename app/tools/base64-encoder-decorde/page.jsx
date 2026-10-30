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
        <div className="flex flex-col items-center">
            <div className="w-full max-w-md bg-paper-2 border border-line p-6 rounded-lg">
                <h1 className="text-2xl font-medium tracking-tight mb-5">Base64 Encoder/Decoder</h1>
                <textarea 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder="Enter text here..."
                    className="w-full h-32 p-2 mb-4 bg-paper text-ink border border-line rounded resize-none"
                />
                <div className="flex justify-between mb-4">
                    <button 
                        onClick={encodeToBase64} 
                        className="w-1/2 bg-ink hover:bg-ink/80 text-paper p-2 rounded mr-2"
                    >
                        Encode
                    </button>
                    <button 
                        onClick={decodeFromBase64} 
                        className="w-1/2 bg-accent hover:bg-accent/90 text-paper p-2 rounded ml-2"
                    >
                        Decode
                    </button>
                </div>
                <p className="text-lg">Output:</p>
                <div className="w-full p-2 mt-2 bg-paper text-ink rounded min-h-[4rem] overflow-auto break-words">
                    {output || <span className="text-ink-3">Output will appear here...</span>}
                </div>
                <button 
                    onClick={copyToClipboard} 
                    disabled={!output} 
                    className={`w-full mt-4 p-2 rounded ${output ? 'bg-ink hover:bg-ink/80' : 'bg-ink/30 cursor-not-allowed'} text-paper`}
                >
                    {copied ? 'Copied!' : 'Copy Output'}
                </button>
            </div>
        </div>
    );
};

export default Base64Converter;
