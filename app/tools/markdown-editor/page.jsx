'use client';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdownText, setMarkdownText] = useState('');

    return (
        <div className="flex flex-col items-center">
            <div className="w-full max-w-2xl bg-paper-2 border border-line p-6 rounded-lg">
                <h1 className="text-2xl font-medium tracking-tight mb-5">Markdown Editor</h1>
                <textarea 
                    value={markdownText} 
                    onChange={(e) => setMarkdownText(e.target.value)} 
                    placeholder="Write your markdown here"
                    className="w-full h-52 bg-paper text-ink border border-line rounded p-2 mb-4"
                />
                <h4 className="text-lg font-semibold mb-2">Preview:</h4>
                <div className="bg-paper p-4 rounded border border-line">
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
