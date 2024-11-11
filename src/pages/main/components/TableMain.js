import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TableMain = () => {
  const [data, setData] = useState([]); // Inicializa como un array vacío
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/users/list');
        
        // Log para verificar la respuesta de la API
        console.log(response.data);

        // Verificar si la respuesta es un array antes de actualizar el estado
        if (Array.isArray(response.data)) {
          setData(response.data); // Si es un array, lo guardamos
        } else {
          setError('La respuesta no es un array.');
        }
      } catch (err) {
        // Manejo de error en la solicitud
        setError('Hubo un problema al cargar los datos: ' + err.message);
      } finally {
        setLoading(false); // Terminó la carga
      }
    };

    fetchData();
  }, []); // Solo se ejecuta una vez al montar el componente

  // Verificar si los datos están cargando
  if (loading) {
    return <div>Loading...</div>;
  }

  // Si ocurrió un error
  if (error) {
    return <div>{error}</div>;
  }

  // Verifica si 'data' es un array antes de usar map()
  return (
    <div>
      <h2>Lista de Usuarios</h2>
      {Array.isArray(data) && data.length > 0 ? (
        <div>
          {data.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.email}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No data available or data is not an array.</p>
      )}
    </div>
  );
};
export default TableMain;