'use client';
import React, { useState } from 'react';

const ColorPaletteGenerator = () => {
    const [color, setColor] = useState('#ffffff');
    const [palette, setPalette] = useState([]);

    const generatePalette = () => {
        const newPalette = [];
        for (let i = -2; i <= 2; i++) {
            const shade = (parseInt(color.slice(1), 16) + i * 0x111111).toString(16).padStart(6, '0');
            newPalette.push(`#${shade}`);
        }
        setPalette(newPalette);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold mb-4">Color Palette Generator</h3>
                <input 
                    type="color" 
                    value={color} 
                    onChange={(e) => setColor(e.target.value)} 
                    className="mb-4 w-full h-12 border-2 border-gray-600 rounded"
                />
                <button 
                    onClick={generatePalette} 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
                >
                    Generate Palette
                </button>
                <div className="mt-4 flex justify-center">
                    {palette.map((shade, index) => (
                        <div 
                            key={index} 
                            style={{ backgroundColor: shade }} 
                            className="w-24 h-24 m-2 flex items-center justify-center rounded shadow"
                        >
                            <span className="text-sm">{shade}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ColorPaletteGenerator;
