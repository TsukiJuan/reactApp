import React, { useState } from 'react';
import './PhotoCatalogSection.css';

const PhotoCatalogSection = () => {
  const [photos] = useState([
    'path_to_your_photo_1.jpg',
    'path_to_your_photo_2.jpg',
    'path_to_your_photo_3.jpg',
    'path_to_your_photo_4.jpg',
    'path_to_your_photo_5.jpg',  // Agrega aquí las rutas de tus fotos
  ]);

  return (
    <div className="photo-catalog-section">
      <h2>Mi Catálogo de Fotos</h2>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div key={index} className="photo-item">
            <img src={photo} alt={`Foto ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoCatalogSection;
