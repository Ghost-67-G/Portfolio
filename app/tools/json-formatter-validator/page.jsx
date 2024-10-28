'use client';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const JSONFormatter = () => {
    const [jsonInput, setJsonInput] = useState('');
    const [formattedJson, setFormattedJson] = useState('');

    const formatJson = () => {
        try {
            const json = JSON.parse(jsonInput);
            setFormattedJson(JSON.stringify(json, null, 2));
        } catch (error) {
            setFormattedJson('Invalid JSON');
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(formattedJson)
            .then(() => {
                toast.success('JSON copied to clipboard!');
            })
            .catch((err) => {
                console.error('Failed to copy: ', err);
                toast.error('Failed to copy JSON to clipboard');
            });
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">JSON Formatter/Validator</h3>
                <textarea 
                    value={jsonInput} 
                    onChange={(e) => setJsonInput(e.target.value)} 
                    placeholder="Paste JSON here"
                    className="w-full h-32 p-2 bg-gray-700 text-white border border-gray-600 rounded mb-4 resize-none"
                />
                <button 
                    onClick={formatJson} 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded mb-4"
                >
                    Format JSON
                </button>
                <pre className="bg-gray-700 p-4 rounded border border-gray-600 overflow-auto">
                    {formattedJson}
                </pre>
                <button 
                    onClick={copyToClipboard} 
                    className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded mb-4"
                    disabled={!formattedJson}  // Disable if formattedJson is empty
                >
                    Copy to Clipboard
                </button>
            </div>
        </div>
    );
};

export default JSONFormatter;
