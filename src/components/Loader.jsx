import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Spinner */}
      <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-blue-500 border-opacity-75 mb-8"></div>
      
      {/* Texto atractivo */}
      <h2 className="text-2xl font-semibold text-gray-700">Cargando contenido...</h2>
      <p className="mt-2 text-gray-500">Por favor, espera un momento mientras cargamos la información.</p>
    </div>
  );
};

export default Loader;
