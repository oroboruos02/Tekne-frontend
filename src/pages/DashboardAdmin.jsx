import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Qualification from '../components/Qualification';

const DashboardAdmin = () => {
  const [user, setUser] = useState(null);
  const [companies, setCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState({ name: '' });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser).email);
    }
  }, []);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/companies');
        setCompanies(response.data);
      } catch (error) {
        console.error('Error al obtener las empresas:', error);
      }
    };

    fetchCompanies();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const loggedInUser = JSON.parse(localStorage.getItem('user'));
      if (!loggedInUser || !loggedInUser.userId) {
        console.error('Error: El ID del usuario es null o undefined.');
        return;
      }

      const userId = loggedInUser.userId;
      const newCompanyData = {
        name: newCompany.name,
        user_id: userId
      };

      const response = await axios.post('http://localhost:3000/companies', newCompanyData);

      if (response.status === 201) {
        setCompanies([...companies, response.data]);
        setNewCompany({ name: '' });
      } else {
        console.error('Error al agregar la empresa:', response.data);
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCompany(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">

          <Link to="/">
              <span className="sr-only">Your Company</span>
              <img className="h-16 w-auto" src="https://imgur.com/Lvbu5Sv.png" alt="Logo" />
            </Link>


            <h1 className="text-white text-2xl font-bold">Bienvenido Administrador</h1>
            <div className="flex items-center space-x-4">
              {user && (
                <div className="hidden md:block text-white">
                  <span>{user}</span>
                </div>
              )}
              <Link to="/" className="hidden md:block text-white">Salir</Link>
              <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </button>
            </div>
          </div>
          {menuOpen && (
            <div className="md:hidden mt-2 space-y-1">
              {user && (
                <div className="text-white">
                  <span>{user}</span>
                </div>
              )}
              <Link to="/" className="text-white block">Salir</Link>
            </div>
          )}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-semibold mb-4">Empresas Registradas</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre de la Empresa</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Calificación Promedio</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {companies.map((company) => (
                <tr key={company.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{company.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Qualification value={company.rating} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Agregar Nueva Empresa</h2>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Nombre de la Empresa</label>
              <input type="text" name="name" id="companyName" value={newCompany.name} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
            </div>
            <button type="submit" className="block w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Agregar Empresa</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;