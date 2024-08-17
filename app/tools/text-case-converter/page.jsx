'use client'
import React, { useState } from 'react';

const TextCaseConverter = () => {
    const [text, setText] = useState('');
    const [convertedText, setConvertedText] = useState('');
    const [copySuccess, setCopySuccess] = useState('')
    const copyToClipboard = () => {
        navigator.clipboard.writeText(convertedText).then(() => {
            setCopySuccess('Copied!');
            setTimeout(() => setCopySuccess(''), 2000); // Clear the message after 2 seconds
        }, () => {
            setCopySuccess('Failed to copy!');
        });
    };
        

    const toUpperCase = () => setConvertedText(text.toUpperCase());
    const toLowerCase = () => setConvertedText(text.toLowerCase());
    const toCamelCase = () => {
        const camelCaseText = text.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
            index === 0 ? match.toLowerCase() : match.toUpperCase()
        ).replace(/\s+/g, '');
        setConvertedText(camelCaseText);
    };
    const toSnakeCase = () => {
        const snakeCaseText = text
            .toLowerCase()
            .replace(/\s+/g, '_');
        setConvertedText(snakeCaseText);
    };

    return (
        <div className="h-[90vh] bg-gray-900 text-white flex flex-col items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h3 className="text-2xl font-bold mb-4">Text Case Converter</h3>
                <textarea
                    className="w-full p-4 mb-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={text}
                    rows={5}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter your text here..."
                />
                <div className="flex flex-wrap justify-between gap-2 mb-4">
                    <button
                        onClick={toUpperCase}
                        className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-lg shadow-md transition duration-200"
                    >
                        UPPERCASE
                    </button>
                    <button
                        onClick={toLowerCase}
                        className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-lg shadow-md transition duration-200"
                    >
                        lowercase
                    </button>
                    <button
                        onClick={toCamelCase}
                        className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-lg shadow-md transition duration-200"
                    >
                        camelCase
                    </button>
                    <button
                        onClick={toSnakeCase}
                        className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-lg shadow-md transition duration-200"
                    >
                        snake_case
                    </button>
                </div>
                <p className="text-lg">Converted Text:</p>
                <div className="bg-gray-700 p-4 mt-2 rounded-lg">
                    <p className="whitespace-pre-wrap break-all">{convertedText}</p>
                </div>
                {convertedText?<>
    <button
        onClick={copyToClipboard}
        className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-lg shadow-md transition duration-200"
        >
        Copy
    </button>
    {copySuccess && <p className="mt-2 text-green-400">{copySuccess}</p>}
        </>:null
                }
            </div>
        </div>
    );
};

export default TextCaseConverter;
