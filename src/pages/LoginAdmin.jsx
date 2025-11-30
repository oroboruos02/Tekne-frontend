import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function LoginFormAdmin({ setUser }) {
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
      const response = await axios.post('https://tekne-backend.vercel.app/login-admin', { email, password });
      console.log('Respuesta del servidor:', response);
      if (response.status === 200) {
        const userId = response.data.userId; // Obtén el ID del usuario desde la respuesta
        localStorage.setItem('user', JSON.stringify({ email, userId })); // Guarda el ID del usuario en localStorage
        setUser({ email, userId }); // Establece el usuario en el estado
        navigate('/dashboardadmin');
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
    const rememberedEmail = localStorage.getItem('rememberedEmailAdmin');
    if (rememberedEmail) {
      setEmail(rememberedEmail);
      setRememberMe(true);
    }
  }, []);

  // Función para manejar el cambio en el checkbox "Recordar Contraseña"
  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
    if (!rememberMe) {
      localStorage.setItem('rememberedEmailAdmin', email);
    } else {
      localStorage.removeItem('rememberedEmailAdmin');
    }
  };

  return (
    <>
      <div className="flex min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-primary-950">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 via-secondary-600/10 to-primary-600/10 animate-pulse" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="w-full max-w-md">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img src="/logo.png" alt="Tekne" className="h-20 w-auto drop-shadow-2xl" />
            </div>

            {/* Card container with glassmorphism */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 animate-slide-up">
              {/* Admin badge */}
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-secondary-500/20 backdrop-blur-md px-4 py-2 text-sm font-medium text-secondary-300 border border-secondary-500/30">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Panel de Administrador
                </div>
              </div>

              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Acceso Administrativo
                </h2>
                <p className="text-gray-400">Inicia sesión en tu cuenta de administrador</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4">
                    <p className="text-red-400 text-sm text-center">{error}</p>
                  </div>
                )}

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300"
                    placeholder="admin@ejemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                    Contraseña
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300"
                    placeholder="••••••••"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="rememberMe"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={handleRememberMeChange}
                      className="h-4 w-4 rounded border-white/10 bg-white/5 text-secondary-600 focus:ring-secondary-500 focus:ring-offset-0 transition-all duration-300"
                    />
                    <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-300">
                      Recordar contraseña
                    </label>
                  </div>

                  <Link
                    to="/forgot-password-admin"
                    className="text-sm text-secondary-400 hover:text-secondary-300 transition-colors duration-300"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center items-center gap-2 py-3.5 px-4 text-base font-semibold text-white bg-gradient-to-r from-secondary-600 to-secondary-700 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-secondary-500/50 btn-glow"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  Iniciar sesión
                </button>

                <div className="text-center text-sm text-gray-400">
                  ¿No tienes una cuenta?{' '}
                  <Link to="/register" className="text-secondary-400 hover:text-secondary-300 font-medium transition-colors duration-300">
                    Regístrate aquí
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative w-0 flex-1">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/50 to-dark-900/50 z-10"></div>
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://www.tecsaqro.com.mx/wp-content/uploads/2020/08/mantenimiento_subestaciones_electricas.jpg"
            alt="Automatización Industrial"
          />

          {/* Overlay text */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-12">
            <h3 className="text-4xl font-bold text-white mb-4">
              Panel de Administración
            </h3>
            <p className="text-xl text-gray-200">
              Gestiona empresas y controla la plataforma
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

LoginFormAdmin.propTypes = {
  setUser: PropTypes.func.isRequired
};

export default LoginFormAdmin;