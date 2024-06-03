import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function LoginForm({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  // Función para manejar el inicio de sesión
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Datos enviados:', { email, password });

    try {
      const response = await axios.post('http://localhost:3000/login-client', { email, password });
      console.log('Respuesta del servidor:', response);
      if (response.status === 200) {
        const userId = response.data.userId; // Obtén el ID del usuario desde la respuesta
        localStorage.setItem('user', JSON.stringify({ email, userId })); // Guarda el ID del usuario en localStorage
        setUser({ email, userId }); // Establece el usuario en el estado
        navigate('/dashboardclient');
      }
    } catch (err) {
      console.error('Error al iniciar sesión:', err);
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError('Error desconocido al iniciar sesión');
      }
    }
  };

  // Función para cargar la dirección de correo electrónico desde localStorage al cargar el componente
  useEffect(() => {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      setEmail(rememberedEmail);
      setRememberMe(true);
    }
  }, []);

  // Función para manejar el cambio en el checkbox "Recordar Contraseña"
  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
    if (!rememberMe) {
      localStorage.setItem('rememberedEmail', email);
    } else {
      localStorage.removeItem('rememberedEmail');
    }
  };

  return (
    <>
      <div className="flex min-h-screen">
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:p-0">
          <div className="w-full max-w-md">
            <div>
              <h2 className="mt-6 text-3xl leading-9 font-extrabold text-gray-900">
                Iniciar sesión en su cuenta
              </h2>
            </div>
            <div className="mt-8">
              <form onSubmit={handleSubmit} className="mt-8">
                {error && <p className="text-red-500">{error}</p>}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">
                    Dirección de correo electrónico
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">
                    Contraseña
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="rememberMe"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={handleRememberMeChange}
                      className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    />
                    <label htmlFor="rememberMe" className="ml-2 block text-sm leading-5 text-gray-900">
                      Recordar Contraseña
                    </label>
                  </div>

                  <div className="text-sm leading-5">
                    <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  >
                    Iniciar sesión
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://www.tecsaqro.com.mx/wp-content/uploads/2020/08/mantenimiento_subestaciones_electricas.jpg"
            alt="Imagen"
          />
        </div>
      </div>
    </>
  );
}

LoginForm.propTypes = {
  setUser: PropTypes.func.isRequired
};

export default LoginForm;