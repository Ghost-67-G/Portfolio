'use client';
import React, { useState } from 'react';

const HTTPHeaderInspector = () => {
    const [url, setUrl] = useState('');
    const [headers, setHeaders] = useState('');

    const fetchHeaders = async () => {
        try {
            const response = await fetch(url, { method: 'HEAD' });
            const headerList = response.headers;
            const headersObj = {};
            headerList.forEach((value, name) => {
                headersObj[name] = value;
            });
            setHeaders(JSON.stringify(headersObj, null, 2));
        } catch (error) {
            setHeaders('Error fetching headers');
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div className="w-full max-w-lg bg-paper-2 border border-line p-6 rounded-lg">
                <h1 className="text-2xl font-medium tracking-tight mb-5">HTTP Header Inspector</h1>
                <input 
                    type="text" 
                    value={url} 
                    onChange={(e) => setUrl(e.target.value)} 
                    placeholder="Enter URL"
                    className="w-full p-2 mb-4 bg-paper border border-line rounded"
                />
                <button 
                    onClick={fetchHeaders} 
                    className="w-full bg-ink hover:bg-ink/80 text-paper p-2 rounded mb-4"
                >
                    Get Headers
                </button>
                <pre className="bg-paper p-4 rounded overflow-auto">{headers}</pre>
            </div>
        </div>
    );
};

export default HTTPHeaderInspector;
