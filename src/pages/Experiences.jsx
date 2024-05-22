import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';

function Experiences() {

  // Función para abrir el archivo PDF
  const openPDF = () => {
    // Reemplaza 'ruta_al_archivo.pdf' con la ruta de tu archivo PDF
    window.open('../../public/Certificado.pdf', '_blank');
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Banner/>
      {/* Main Content */}
      <main className="mt-20 px-4 lg:px-0 lg:mt-24"> {/* Ajuste de margen superior */}
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl font-semibold mb-10 mt-8">Experiencias</h1>
          {/* Experiencias del cliente ATA Electric */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Cliente: ATA Electric</h2>
            <ul className="list-disc pl-6">
              <li className="mb-4">Retrofit para 12 celdas de media tensión (13.2 Kv) subestación El Bight, SAN ANDRÉS ISLAS (SOPESA). Modernización del sistema de protecciones y automatización. 2023</li>
              <li className="mb-4">Retrofit para 8 celdas de media tensión (13.2 Kv) subestación Bahía Garret, SAN ANDRÉS ISLAS (SOPESA). Modernización del sistema de protecciones y automatización. 2024</li>
              <li className="mb-4">Ensamble y puesta en servicio de tableros del sistema de control y automatización (SCADA NIVEL 2) de parque solar ISLA PROVIDENCIA. POWER CHINA- ECOPETROL. 2023</li>
              <li className="mb-4">Montaje y puesta en servicio 9 cámaras PTZ. Suministro, instalación y puesta en marcha de un sistema de monitoreo visual inteligente para ser usado en la SE Caracolí, (ISA) Intercolombia. 2023</li>
              <li className="mb-4">Suministro, instalación y puesta en marcha de un sistema de monitoreo térmico inteligente para ser usado en los transformadores de generación. Centrales La Guaca y Paraíso. (ENEL) 2024</li>
              <li className="mb-4">Ensamble de gabinetes de control y pruebas secundarias a seccionalizadores 34.5 Kv. Proyecto sincronismo de generación, campo Rubiales (ECOPETROL- ABB)</li>
            </ul>
          </section>

          {/* Botón para ver certificaciones laborales */}
          <div className="text-center mb-8">
            <button 
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
              onClick={openPDF}
            >
              Ver Certificaciones Laborales
            </button>
          </div>
          
          {/* Experiencias del cliente EBSA */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Cliente: EBSA</h2>
            <ul className="list-disc pl-6">
              <li>Servicios de instalación, cableado y pruebas de relés de protección y medidores para las celdas de 34.5 y 13.8 kV en la subestación Paipa. 2023 (Retrofit)</li>
            </ul>
          </section>

          {/* Experiencias del cliente DISICO */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Cliente: DISICO</h2>
            <ul className="list-disc pl-6">
              <li>Mantenimiento a 25 celdas de media tensión túneles vía Bogotá – Villavicencio. Túneles buena vista y boquerón. Trabajo realizado durante 5 años consecutivos. 2018-2022</li>
            </ul>
          </section>
        </div>
      </main>

      {/* Botón de regreso */}
      <div className="fixed bottom-6 right-6">
          <Link to="/">
            <button className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700">Regresar</button>
          </Link>
        </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <div className="flex flex-col space-y-4">
              <div className="text-lg font-semibold text-white">Sobre nosotros</div>
              <a href="#" className="text-base text-gray-300 hover:text-white">Equipo</a>
              <a href="#" className="text-base text-gray-300 hover:text-white">Carreras</a>
              <a href="#" className="text-base text-gray-300 hover:text-white">Contacto</a>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="text-lg font-semibold text-white">Legal</div>
              <a href="#" className="text-base text-gray-300 hover:text-white">Términos y Condiciones</a>
              <a href="#" className="text-base text-gray-300 hover:text-white">Política de Privacidad</a>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="text-lg font-semibold text-white">Síguenos</div>
              <div className="flex space-x-4">
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M21 0H3C1.346 0 0 1.346 0 3v18c0 1.654 1.346 3 3 3h9.36v-8.745h-2.854v-3.437h2.854v-2.486c0-2.825 1.728-4.357 4.237-4.357 1.2 0 2.232.09 2.534.13v2.94h-1.738c-1.362 0-1.63.648-1.63 1.598v2.095h3.257l-.427 3.438h-2.83V24H21c1.654 0 3-1.346 3-3V3c0-1.654-1.346-3-3-3z" />
                  </svg>
                </a>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.108 20c7.163 0 11.085-5.946 11.085-11.085 0-.168-.004-.336-.013-.502A7.918 7.918 0 0 0 22 5.912a7.68 7.68 0 0 1-2.256.62 3.953 3.953 0 0 0 1.73-2.18c-.76.446-1.596.77-2.488.948A3.914 3.914 0 0 0 15.86 4c-2.172 0-3.931 1.758-3.931 3.93 0 .308.036.605.104.895a11.162 11.162 0 0 1-8.077-4.085 3.963 3.963 0 0 0-.531 1.987 3.924 3.924 0 0 0 1.74 3.28 3.908 3.908 0 0 1-1.773-.48v.05c0 1.477 1.055 2.707 2.452 2.99a3.922 3.922 0 0 1-1.768.066 3.926 3.926 0 0 0 3.663 2.718 7.87 7.87 0 0 1-4.871 1.68A7.98 7.98 0 0 1 2 18.09a11.115 11.115 0 0 0 6.108 1.81" />
                  </svg>
                </a>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3zm7 4H6v10h3V7zm.5-2c.827 0 1.5-.673 1.5-1.5S10.327 2 9.5 2 8 2.673 8 3.5 8.673 5 9.5 5zM7 7.5C7 6.672 6.328 6 5.5 6S4 6.672 4 7.5 4.672 9 5.5 9 7 8.328 7 7.5zM19 14.25v-1.5c0-.414-.336-.75-.75-.75h-1.5c-.414 0-.75.336-.75.75v1.5c0 .414.336.75.75.75h1.5c.414 0 .75-.336.75-.75zm0-3v-1.5c0-.414-.336-.75-.75-.75h-1.5c-.414 0-.75.336-.75.75v1.5c0 .414.336.75.75.75h1.5c.414 0 .75-.336.75-.75zm0 6.75c0 .414-.336.75-.75.75h-1.5a.75.75 0 0 1-.75-.75v-4.5c0-.414.336-.75.75-.75h1.5c.414 0 .75.336.75.75v4.5zm1.988-6.787a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
}

export default Experiences;