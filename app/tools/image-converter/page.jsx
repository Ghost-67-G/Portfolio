'use client';
import React, { useState } from 'react';

const ImageConverter = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [convertedImage, setConvertedImage] = useState('');
    const [format, setFormat] = useState('image/jpeg'); // Default to JPEG

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const convertImage = () => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const img = new Image();
            img.src = reader.result;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                
                // Convert to the selected format
                canvas.toBlob((blob) => {
                    const url = URL.createObjectURL(blob);
                    setConvertedImage(url);
                }, format);
            };
        };
        if (selectedFile) {
            reader.readAsDataURL(selectedFile);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold mb-4">Image Converter</h3>
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleFileChange} 
                    className="mb-4 w-full text-gray-900 border border-gray-600 rounded p-2"
                />
                <select 
                    onChange={(e) => setFormat(e.target.value)} 
                    value={format} 
                    className="mb-4 w-full bg-gray-700 text-white border border-gray-600 rounded p-2"
                >
                    <option value="image/jpeg">JPEG</option>
                    <option value="image/png">PNG</option>
                    <option value="image/webp">WEBP</option>
                </select>
                <button 
                    onClick={convertImage} 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded mb-4"
                >
                    Convert
                </button>
                {convertedImage && (
                    <div className='text-center'>
                        <h4 className="text-lg font-semibold mb-2">Converted Image:</h4>
                        <img src={convertedImage} alt="Converted" className="max-w-xs mx-auto rounded mb-2" />
                        <a 
                            href={convertedImage} 
                            download={`converted_image.${format.split('/')[1]}`} 
                            className="text-blue-400 hover:underline"
                        >
                            Download Converted Image
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageConverter;
