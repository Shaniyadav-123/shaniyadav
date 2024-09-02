"use client";
import React, { useState } from "react";

function Imgformet() {
    const [imageUrl, setImageUrl] = useState(null);
    const [imageName, setImageName] = useState('');
    // const [foramt, setformat] = useState('')
    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        setImageName(file.name.split('.').slice(0, -1).join('.'));
        const reader = new FileReader();
        reader.onload = (event) => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            // Convert canvas to JPEG Blob
            canvas.toBlob((blob) => {
              const newImgUrl = URL.createObjectURL(blob);
              setImageUrl(newImgUrl);
            }, 'image/jpeg', 0.95); // 0.95 is the quality of the JPEG (1 is maximum quality)
          };
          img.src = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleDownload = () => {
      if (imageUrl) {
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = `${imageName}.jpg`;
        link.click();
      }
    };
  return (
    <div>
    <input type="file" accept="image/*" onChange={handleImageUpload} />
    {imageUrl && (
      <div>
        <img src={imageUrl} alt="Converted" style={{ maxWidth: '100%' }} />
        <button onClick={handleDownload}>Download JPEG</button>
      </div>
    )}
  </div>
);
}

export default Imgformet
