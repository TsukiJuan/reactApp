import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RandomImages.css';

const RandomImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos/random', {
          params: { count: 5 }, // Puedes cambiar la cantidad de imágenes aquí
          headers: {
            Authorization: `Client-ID YOUR_ACCESS_KEY`, // Sustituye 'YOUR_ACCESS_KEY' con tu clave de acceso
          },
        });

        setImages(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching images:', error);
        setError('No se pudieron cargar las imágenes.');
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <div>Loading images...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="images-section">
      {images.map((image) => (
        <div key={image.id} className="image-item">
          <img src={image.urls.small} alt={image.alt_description} />
        </div>
      ))}
    </div>
  );
};

export default RandomImages;
