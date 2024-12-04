'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ImageUpload() {
  const [images, setImages] = useState<any[]>([]);
  const [uploading, setUploading] = useState(false);

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;

    setUploading(true);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');

      const newImage = await response.json();
      setImages((prev) => [...prev, newImage]);
      
      // Recarregar todas as imagens
      const imagesResponse = await fetch('/api/images');
      const allImages = await imagesResponse.json();
      setImages(allImages);
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image');
    } finally {
      setUploading(false);
    }
  };

  // Carregar imagens ao montar o componente
  useState(() => {
    fetch('/api/images')
      .then((res) => res.json())
      .then(setImages)
      .catch(console.error);
  });

  return (
    <div className="p-4">
      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={uploadImage}
          disabled={uploading}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-[#8EFF00] file:text-black
            hover:file:bg-[#7FE000]
            disabled:opacity-50"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative aspect-square">
            <Image
              src={image.url}
              alt={image.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
