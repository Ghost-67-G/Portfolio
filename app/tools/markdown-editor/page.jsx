'use client';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdownText, setMarkdownText] = useState('');

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Markdown Editor</h3>
                <textarea 
                    value={markdownText} 
                    onChange={(e) => setMarkdownText(e.target.value)} 
                    placeholder="Write your markdown here"
                    className="w-full h-52 bg-gray-700 text-white border border-gray-600 rounded p-2 mb-4"
                />
                <h4 className="text-lg font-semibold mb-2">Preview:</h4>
                <div className="bg-gray-700 p-4 rounded border border-gray-600">
                    {/* This div has no Tailwind styles for markdown */}
                    <div>
                        <ReactMarkdown className='markdown'>{markdownText}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarkdownEditor;
