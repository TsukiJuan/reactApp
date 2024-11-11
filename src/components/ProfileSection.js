import React from 'react';
import './ProfileSection.css';
import perfilImagen from './juan.png'; 

const ProfileSection = () => {
  return (
    <div className="profile-section">
      {/* Sección de la imagen */}
      <div className="profile-image-container">
      <img src={perfilImagen} alt="Imagen de perfil" />
      </div>
      
      {/* Título y contenido */}
      <h2>Sobre mí</h2>
      <p>
        Estudiante en Desarrollo de Software, busco la oportunidad de adquirir experiencia y elevar mi conocimiento con el Desarrollo Web, HTML5, CSS3, JS, TS, React, Node.js y Python. 
        Soy una persona que se desarrolla bien en trabajo en equipo, cooperando por el bien común, con una gran satisfacción por desarrollarme y desarrollar a los demás.
      </p>
      <p><strong>Nombre:</strong> Juan David Calderón</p>
      <p><strong>Correo:</strong> juantsukiai@gmail.com</p>
      <p><strong>GitHub:</strong> <a href="https://github.com/TsukiJuan" target="_blank" rel="noopener noreferrer">TsukiJuan</a></p>
    </div>
  );
};

export default ProfileSection;

