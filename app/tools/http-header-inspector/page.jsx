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
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">HTTP Header Inspector</h3>
                <input 
                    type="text" 
                    value={url} 
                    onChange={(e) => setUrl(e.target.value)} 
                    placeholder="Enter URL"
                    className="w-full p-2 mb-4 bg-gray-700 border border-gray-600 rounded"
                />
                <button 
                    onClick={fetchHeaders} 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded mb-4"
                >
                    Get Headers
                </button>
                <pre className="bg-gray-700 p-4 rounded overflow-auto">{headers}</pre>
            </div>
        </div>
    );
};

export default HTTPHeaderInspector;
