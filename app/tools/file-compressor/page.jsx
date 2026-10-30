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
        <div className="flex flex-col items-center">
            <div className="w-full max-w-lg bg-paper-2 border border-line p-6 rounded-lg">
                <h1 className="text-2xl font-medium tracking-tight mb-5">File Compressor</h1>
                <input 
                    type="file" 
                    multiple 
                    onChange={handleFileChange} 
                    className="w-full mb-4 bg-paper border border-line rounded p-2"
                />
                <input 
                    type="text" 
                    value={zipFileName} 
                    onChange={(e) => setZipFileName(e.target.value)} 
                    placeholder="Zip file name (optional)"
                    className="w-full mb-4 bg-paper border border-line rounded p-2"
                />
                <button 
                    onClick={compressFiles} 
                    className="w-full bg-ink hover:bg-ink/80 text-paper p-2 rounded"
                >
                    Compress and Download
                </button>
            </div>
        </div>
    );
};

export default FileCompressor;
