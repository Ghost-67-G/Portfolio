'use client';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const CSSMinifierBeautifier = () => {
    const [cssInput, setCssInput] = useState('');
    const [output, setOutput] = useState('');

    const minifyCSS = () => {
        const minified = cssInput
            .replace(/\s+/g, ' ')        // Replace multiple spaces with a single space
            .replace(/;\s+/g, ';')       // Remove space after semicolon
            .replace(/ {2,}/g, ' ')      // Replace multiple spaces with a single space
            .trim();
        setOutput(minified);
    };

    const beautifyCSS = () => {
        const beautified = cssInput
            .replace(/}/g, '}\n')          // Add newline after each closing brace
            .replace(/;/g, ';\n')          // Add newline after each semicolon
            .replace(/\n\s*\n/g, '\n')     // Remove extra new lines
            .trim();
        setOutput(beautified);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(output).then(() => {
            toast.success('Output copied to clipboard!');
        }, (err) => {
            console.error('Failed to copy: ', err);
            toast.error('Failed to copy output to clipboard');
        });
    };

    return (
        <div className="flex flex-col items-center">
            <div className="w-full max-w-lg bg-paper-2 border border-line p-6 rounded-lg">
                <h1 className="text-2xl font-medium tracking-tight mb-5">CSS Minifier/Beautifier</h1>
                <textarea 
                    value={cssInput} 
                    onChange={(e) => setCssInput(e.target.value)} 
                    placeholder="Paste CSS here"
                    className="w-full p-2 mb-4 bg-paper border border-line rounded h-40"
                />
                <div className="flex space-x-4 mb-4">
                    <button 
                        onClick={minifyCSS} 
                        className="w-full bg-ink hover:bg-ink/80 text-paper p-2 rounded"
                    >
                        Minify CSS
                    </button>
                    <button 
                        onClick={beautifyCSS} 
                        className="w-full bg-accent hover:bg-accent/90 text-paper p-2 rounded"
                    >
                        Beautify CSS
                    </button>
                </div>
                {output && <>
                <div className="flex justify-between mb-4">
                    <button 
                        onClick={copyToClipboard} 
                        className="border border-line-strong hover:bg-ink/5 text-ink p-2 rounded"
                    >
                        Copy Output
                    </button>
                </div>
                <pre className="bg-paper p-4 rounded overflow-auto">{output}</pre>
                </>}
            </div>
        </div>
    );
};

export default CSSMinifierBeautifier;
