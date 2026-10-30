'use client';
import React, { useState, useRef } from 'react';
import {QRCodeCanvas} from 'qrcode.react';

const QRCodeGenerator = () => {
    const [input, setInput] = useState('');
    
    const qrCodeRef = useRef();

const downloadQRCode = () => {
    const canvas = qrCodeRef.current.querySelector('canvas');
    console.log("🚀 ~ downloadQRCode ~ canvas:", canvas)
    if (canvas) {
        const image = canvas.toDataURL("image/png");
        const link = document.createElement('a');
        link.href = image;
        link.download = 'qrcode.png';
        link.click();
    }
};

return (
    <div className="flex flex-col items-center">
        <div className="w-full max-w-md bg-paper-2 border border-line p-6 rounded-lg">
            <h1 className="text-2xl font-medium tracking-tight mb-5">QR Code Generator</h1>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Enter text or URL"
                className="w-full p-2 bg-paper text-ink border border-line rounded mb-4"
            />
            {input&& <>
            <div ref={qrCodeRef} className="flex justify-center mb-4">
                <QRCodeCanvas value={input} size={256} />
            </div>
            <button 
                onClick={downloadQRCode} 
                className="w-full bg-accent hover:bg-accent/90 text-paper p-2 rounded"
                disabled={!input}
                >
                Download QR Code
            </button>
                </>}
        </div>
    </div>
);

};

export default QRCodeGenerator;
