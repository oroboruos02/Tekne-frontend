import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
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

  useEffect(() => {
    // Simular inicio de sesión al cargar la página
    const loggedInUser = { name: 'Usuario' };
    setUser(loggedInUser);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-md">Salir</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Panel de Calificaciones</h2>
          <div className="space-y-4">
            {companies.map(company => (
              <div key={company.id} className="flex justify-between items-center border-b py-2">
                <span>{company.name}</span>
                <StarRating />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Tabla de Empresas</h2>
          <table className="w-full">
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

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
    // Enviar la calificación al backend
    console.log(`Calificaste con ${value} estrellas`);
  };

  return (
    <div className="flex">
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