import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom

const Dashboard = () => {
  // Simulando datos de empresas
  const [companies] = useState([
    { id: 1, name: 'Axon Group Ltda' },
    { id: 2, name: 'HMV Ingenerios' },
    { id: 3, name: 'Siemens SAS' },
    { id: 4, name: 'Potencia y tecnologias incorporadas S.A' },
    { id: 5, name: 'SEL Colombia' },
    { id: 6, name: 'Hitachi Energy Colombia' },
    { id: 7, name: 'Automatizacion Avanzada' },
    { id: 8, name: 'Acovis' }
  ]);

  // Función para manejar la calificación de una empresa
  const handleRatingChange = (companyId, rating) => {
    // Aquí iría la lógica para enviar la calificación al backend
    console.log(`Empresa ${companyId} calificada con ${rating} estrellas`);
  };

  return (

    <div className="container mx-auto p-4">
      <div className="flex justify-between mb-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        {/* Botón para salir y regresar a la home */}
        <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-md">Salir</Link>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Panel de Calificaciones</h2>
          <div className="flex flex-col space-y-4">
            {companies.map(company => (
              <div key={company.id} className="flex items-center justify-between border-b py-2">
                <span>{company.name}</span>
                {/* Componente de calificación de estrellas */}
                <StarRating companyId={company.id} onRatingChange={rating => handleRatingChange(company.id, rating)} />
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Tabla de Empresas</h2>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Nombre de la Empresa</th>
              </tr>
            </thead>
            <tbody>
              {companies.map(company => (
                <tr key={company.id}>
                  <td className="border px-4 py-2">{company.id}</td>
                  <td className="border px-4 py-2">{company.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Componente de calificación de estrellas
const StarRating = ({ companyId, onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
    // Enviar la calificación al backend
    onRatingChange(companyId, value);
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`cursor-pointer ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
          onClick={() => handleClick(index + 1)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default Dashboard;