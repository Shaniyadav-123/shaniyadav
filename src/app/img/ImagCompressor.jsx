"use client";

import React, { useState } from 'react';
import imageCompression from 'browser-image-compression';

export default function ImageCompressor() {
  const [compressedFile, setCompressedFile] = useState(null);
  const [originalFile, setOriginalFile] = useState(null);
  const [outputFileName, setOutputFileName] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleImageUpload = (e) => {
    const imageFile = e.target.files[0];
    setOriginalFile(imageFile);
    setOutputFileName(imageFile.name);
    // handleImageCompression(imageFile);
  };
  const handleImageCompression = async () => {
    if (!originalFile) return;

    setLoading(true);

    const options = {
      maxSizeMB: 2, // Target size 5MB
      maxWidthOrHeight: 1958*2, // Keep a reasonable resolution
      useWebWorker: true,
    };
    console.log(options);
    try {
      const compressedImage = await imageCompression(originalFile, options);
      setCompressedFile(compressedImage);
    } catch (error) {
      console.error('Error compressing the image:', error);
    } finally {
      setLoading(false);
    }
  };
 
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(compressedFile);
    downloadLink.download = outputFileName;
    downloadLink.click();
  };
  
 
  return (
    <div>
      <h1>Image Compressor</h1>
  <div className='w-[800px] py-20 bg-white mx-auto border-dashed border-4 border-sky-500 rounded-xl'>
 <div className="relative w-56 mx-auto">
    <label title="Click to upload" htmlFor="button2" className="cursor-pointer flex items-center gap-4 px-6 py-4 before:border-gray-400/60 hover:before:border-gray-300 group before:bg-gray-100 before:absolute before:inset-0 before:rounded-3xl before:border before:border-dashed before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
      <div className="w-max relative">
          <img className="w-12" src="https://www.svgrepo.com/show/485545/upload-cicle.svg" alt="file upload icon" width="512" height="512"/>
      </div>
      <div className="relative">
          <span className="block text-base font-semibold relative text-blue-900 group-hover:text-blue-500">
              Upload a file
          </span>
          <span className="mt-0.5 block text-sm text-gray-500">Max 2 MB</span>
      </div>
     </label>
    <input className='hidden' type="file" name="button2" id="button2" accept="image/*" onChange={handleImageUpload} />
</div>
<button className='mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={handleImageCompression} disabled={!originalFile || loading}>
  {loading ? 'Compressing...' : 'Compress Image'}
</button>
</div>

      {/* <div className='border-spacing-2 bg-white container mx-auto text-center'>
      <input className='p-4' type="file" />
      </div> */}
      {compressedFile && (
        <div>
          <h3>Compressed Image:</h3>
          <p>Original Size: {(originalFile.size / 1024 ).toFixed(2)} KB</p>
          <p>Compressed Size: {(compressedFile.size / 1024).toFixed(2)} KB</p>
          <button className='mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={handleImageCompression} disabled={!originalFile || loading}>
          {loading ? 'Compressing...' : 'Compress Image'}
          </button>
          <img
            src={URL.createObjectURL(compressedFile)}
            alt="Compressed"
            style={{ maxWidth: '100%', marginTop: '10px' }}
          />
          <br />
          <button onClick={handleDownload}>Download Compressed Image</button>
        </div>
      )}
    </div>
  );
}
