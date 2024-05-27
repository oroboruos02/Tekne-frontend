// DashboardClient.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import RatingCompany from '../components/RatingCompany';

const DashboardClient = () => {
  const [user, setUser] = useState(null);
  const [companies, setCompanies] = useState([]);
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
        const response = await axios.get('http://localhost:3000/api/companies');
        setCompanies(response.data);
      } catch (error) {
        console.error('Error al obtener las empresas:', error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold">Tekne Solutions</h1>
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
        <h2 className="text-2xl font-semibold mb-4">Empresas para Calificar</h2>
        <RatingCompany companies={companies} />
      </div>
    </div>
  );
};

export default DashboardClient;