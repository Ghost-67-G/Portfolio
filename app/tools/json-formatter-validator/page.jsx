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
        <div className="flex flex-col items-center">
            <div className="w-full max-w-md bg-paper-2 border border-line p-6 rounded-lg">
                <h1 className="text-2xl font-medium tracking-tight mb-5">JSON Formatter/Validator</h1>
                <textarea 
                    value={jsonInput} 
                    onChange={(e) => setJsonInput(e.target.value)} 
                    placeholder="Paste JSON here"
                    className="w-full h-32 p-2 bg-paper text-ink border border-line rounded mb-4 resize-none"
                />
                <button 
                    onClick={formatJson} 
                    className="w-full bg-ink hover:bg-ink/80 text-paper p-2 rounded mb-4"
                >
                    Format JSON
                </button>
                <pre className="bg-paper p-4 rounded border border-line overflow-auto">
                    {formattedJson}
                </pre>
                <button 
                    onClick={copyToClipboard} 
                    className="w-full bg-accent hover:bg-accent/90 text-paper p-2 rounded mb-4"
                    disabled={!formattedJson}  // Disable if formattedJson is empty
                >
                    Copy to Clipboard
                </button>
            </div>
        </div>
    );
};

export default JSONFormatter;
