'use client'
import React, { useState } from 'react';

const TimestampConverter = () => {
    const [timestamp, setTimestamp] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState('');

    const convertToHumanDate = () => {
        const parsedTimestamp = parseInt(timestamp, 10);
        
        // Validate timestamp
        if (isNaN(parsedTimestamp) || parsedTimestamp < 0) {
            setError('Please enter a valid Unix timestamp.');
            return;
        }
    
        setError('');
        const convertedDate = new Date(parsedTimestamp * 1000).toLocaleString();
        setDate(convertedDate);
    };
    
    const convertToTimestamp = () => {
        // Validate date input
        const parsedDate = new Date(date);
        if (isNaN(parsedDate.getTime())) {
            setError('Please enter a valid date (YYYY-MM-DD).');
            return;
        }
    
        setError('');
        const convertedTimestamp = Math.floor(parsedDate.getTime() / 1000);
        setTimestamp(convertedTimestamp);
    };
    

    return (
        <div className="flex flex-col items-center">
            <div className="w-full max-w-md bg-paper-2 border border-line p-6 rounded-lg">
                <h1 className="text-2xl font-medium tracking-tight mb-5">Timestamp Converter</h1>
                <div className="mb-4">
                    <input 
                        type="text" 
                        value={timestamp} 
                        onChange={(e) => setTimestamp(e.target.value)} 
                        placeholder="Enter Unix timestamp"
                        className={`w-full p-2 bg-paper text-ink border ${error && !timestamp ? 'border-red-500' : 'border-line'} rounded mb-2`}
                        />
                    <button 
                        onClick={convertToHumanDate} 
                        className="w-full bg-ink hover:bg-ink/80 text-paper p-2 rounded mb-4"
                    >
                        Convert to Date
                    </button>
                </div>
                <div className="mb-4">
                    <input 
                        type="text" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)} 
                        placeholder="Enter Date (YYYY-MM-DD)"
                        className={`w-full p-2 bg-paper text-ink border ${error && !timestamp ? 'border-red-500' : 'border-line'} rounded mb-2`}
                        />
                    <button 
                        onClick={convertToTimestamp} 
                        className="w-full bg-accent hover:bg-accent/90 text-paper p-2 rounded"
                    >
                        Convert to Timestamp
                    </button>
                </div>
                {error && <p className="text-red-500">{error}</p>}

                <div className="mt-4">
                    <p className="text-lg">Converted Date: <span className="text-ink-2">{date || 'N/A'}</span></p>
                    <p className="text-lg">Converted Timestamp: <span className="text-ink-2">{timestamp || 'N/A'}</span></p>
                </div>
            </div>
        </div>
    );
};

export default TimestampConverter;
