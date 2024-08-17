'use client'
import React, { useState } from 'react';

const Base64Converter = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const encodeToBase64 = () => setOutput(btoa(input));
    const decodeFromBase64 = () => setOutput(atob(input));

    return (
        <div>
            <h3>Base64 Encoder/Decoder</h3>
            <textarea value={input} onChange={(e) => setInput(e.target.value)} />
            <br />
            <button onClick={encodeToBase64}>Encode</button>
            <button onClick={decodeFromBase64}>Decode</button>
            <p>Output: {output}</p>
        </div>
    );
};

export default Base64Converter;
