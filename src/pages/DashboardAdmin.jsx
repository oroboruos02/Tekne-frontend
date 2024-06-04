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
        const response = await axios.get('https://tekne-backend.vercel.app/companies');
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

      const response = await axios.post('https://tekne-backend.vercel.app/companies', newCompanyData);

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
      <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link to="/">
            <span className="sr-only">Your Company</span>
            <img className="h-16 w-auto" src="https://imgur.com/Lvbu5Sv.png" alt="Logo" />
          </Link>
          <h1 className="text-white text-2xl font-bold">Bienvenido al panel de Administrador</h1>
          <div className="flex items-center space-x-4">
            {user && (
              <div className="hidden md:block text-white">
                <span>{user}</span>
              </div>
            )}
            <Link to="/" className="hidden md:block text-white">Salir</Link>
            <button className="md:hidden text-white" onClick={() => setMenuOpen(true)}>
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
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

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="relative flex w-full max-w-xs flex-1 flex-col bg-gradient-to-r from-indigo-600 to-purple-600 border-r shadow-lg">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:bg-gray-600"
                onClick={() => setMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="h-full flex flex-col pt-5 pb-4 overflow-y-auto justify-center items-center">
              <div className="flex-shrink-0 px-4 flex items-center mb-4">
                <img className="h-8 w-auto" src="https://imgur.com/Lvbu5Sv.png" alt="Your Company" />
              </div>
              {user && (
                <div className="text-white mb-4">
                  <span>{user}</span>
                </div>
              )}
              <Link to="/" className="block px-4 py-2 text-base font-medium text-white hover:bg-gray-700 rounded-md">Salir</Link>
            </div>
          </div>
          <div className="w-14 flex-shrink-0" onClick={() => setMenuOpen(false)}></div>
        </div>
      )}
    </div>
  );
};

export default DashboardAdmin;