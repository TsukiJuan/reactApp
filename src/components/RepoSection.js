// src/components/RepoSection.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RepoSection.css';

const RepoSection = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Cambié la URL de la API para usar el nombre correcto de usuario
        const response = await axios.get('https://api.github.com/users/TsukiJuan/repos');
        
        console.log('Repos:', response.data); // Verifica los datos de la API
        setRepos(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error); // Log para ver errores de la API
        setError('Hubo un problema al cargar los repositorios.');
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="repo-section">
      <h2>Mis Repositorios</h2>
      <div className="repo-list">
        {repos.length > 0 ? (
          repos.slice(0, 3).map((repo) => (
            <div key={repo.id} className="repo-item">
              <h3><a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a></h3>
              <p>{repo.description || 'No description available.'}</p>
              <p><strong>Language:</strong> {repo.language}</p>
            </div>
          ))
        ) : (
          <p>No se encontraron repositorios.</p>
        )}
      </div>
    </div>
  );
};

export default RepoSection;


