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
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">QR Code Generator</h3>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Enter text or URL"
                className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded mb-4"
            />
            {input&& <>
            <div ref={qrCodeRef} className="flex justify-center mb-4">
                <QRCodeCanvas value={input} size={256} />
            </div>
            <button 
                onClick={downloadQRCode} 
                className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded"
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
