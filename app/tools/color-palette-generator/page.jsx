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
        <div className="flex flex-col items-center">
            <div className="w-full max-w-lg bg-paper-2 border border-line p-6 rounded-lg text-center">
                <h1 className="text-2xl font-medium tracking-tight mb-5">Color Palette Generator</h1>
                <input 
                    type="color" 
                    value={color} 
                    onChange={(e) => setColor(e.target.value)} 
                    className="mb-4 w-full h-12 border-2 border-line rounded"
                />
                <button 
                    onClick={generatePalette} 
                    className="w-full bg-ink hover:bg-ink/80 text-paper p-2 rounded"
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
