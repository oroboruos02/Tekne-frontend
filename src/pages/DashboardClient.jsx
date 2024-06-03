import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import RatingCompany from '../components/RatingCompany';

const DashboardClient = () => {
  const [user, setUser] = useState(null);
  const [companies, setCompanies] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleRating = (companyId, rating) => {
    console.log(`Se ha calificado la empresa con ID ${companyId} con la calificación ${rating}`);
  };

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

  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link to="/">
            <span className="sr-only">Your Company</span>
            <img className="h-16 w-auto" src="https://imgur.com/Lvbu5Sv.png" alt="Logo" />
          </Link>
          <h2 className="text-white text-2xl font-bold">Bienvenido a nuestra plataforma</h2>
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
        <h2 className="text-2xl font-semibold mb-4">Empresas para Calificar</h2>
        <RatingCompany companies={companies} handleRating={handleRating} />
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

export default DashboardClient;