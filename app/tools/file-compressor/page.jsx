'use client';
import React, { useState } from 'react';
import JSZip from 'jszip';

const FileCompressor = () => {
    const [files, setFiles] = useState([]);
    const [zipFileName, setZipFileName] = useState('');

    const handleFileChange = (e) => {
        setFiles([...e.target.files]);
    };

    const compressFiles = async () => {
        const zip = new JSZip();
        files.forEach(file => {
            zip.file(file.name, file);
        });
        const content = await zip.generateAsync({ type: 'blob' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(content);
        link.download = zipFileName || 'compressed.zip';
        link.click();
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">File Compressor</h3>
                <input 
                    type="file" 
                    multiple 
                    onChange={handleFileChange} 
                    className="w-full mb-4 bg-gray-700 border border-gray-600 rounded p-2"
                />
                <input 
                    type="text" 
                    value={zipFileName} 
                    onChange={(e) => setZipFileName(e.target.value)} 
                    placeholder="Zip file name (optional)"
                    className="w-full mb-4 bg-gray-700 border border-gray-600 rounded p-2"
                />
                <button 
                    onClick={compressFiles} 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
                >
                    Compress and Download
                </button>
            </div>
        </div>
    );
};

export default FileCompressor;
