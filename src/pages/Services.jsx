import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-[#111827] shadow-md">
        <nav className="max-w-7xl mx-auto flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-12 w-auto" src="https://imgur.com/Lvbu5Sv.png" alt="Your Company Logo" />
            </a>
          </div>
        </nav>
      </header>

      <main className="mt-24 flex-1">
        {/* Hero section */}
        <div className="relative bg-gray-100">
          <div className="absolute inset-x-0 top-0 h-[64rem] w-full overflow-hidden">
            <svg className="absolute inset-x-0 top-0 h-full w-full stroke-gray-200" aria-hidden="true">
              <defs>
                <pattern id="grid-pattern" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          </div>
          <div className="relative py-24 sm:py-32 lg:py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Nuestros Servicios</h1>
            </div>
          </div>
        </div>

        {/* Services */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
              {/* Service 1 */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Tableros Eléctricos</h3>
                <p className="mt-4 text-lg text-gray-600">Diseñamos y fabricamos tableros a la medida de sus necesidades, desarrollamos disposiciones de equipos y barrajes con amplia funcionalidad y excelente presentación en aplicaciones como:</p>
                <ul className="list-disc list-inside mt-4 text-lg text-gray-600">
                  <li>Control y protecciones.</li>
                  <li>Distribución y comunicaciones.</li>
                  <li>Variadores de velocidad.</li>
                  <li>Arrancadores suaves.</li>
                  <li>Barrajes para entrada y salida de cables.</li>
                  <li>Banco de condensadores.</li>
                  <li>Interruptores de protección principal y derivaciones secundarias.</li>
                  <li>Equipos de señales, paneles de alarmas y registradores de fallas.</li>
                  <li>Centro de control de motores CCM.</li>
                  <li>Tipo rack.</li>
                </ul>
                <p className="mt-4 text-lg text-gray-600">Para la fabricación y ejecución de sus proyectos, Cipro Ltda. cuenta con una planta de producción, máquinas y herramientas modernas adecuadas para sus procesos, ensamble de tableros, fabricación, corte, doblado y pulsado de barrajes de cobre a medida, y un banco de pruebas y equipos especiales para asegurar la confiabilidad de sus proyectos.</p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Servicios de Diseño</h3>
                <p className="mt-4 text-lg text-gray-600">Somos una compañía sólida con amplia experiencia en la prestación de servicios, en las áreas de:</p>
                <ul className="list-disc list-inside mt-4 text-lg text-gray-600">
                  <li>Diseño: planos mecánicos, disposiciones de equipos, diseño de barras de cobre, levantamiento de información, diseño de planos eléctricos, planos de cableado y ejecución de proyectos eléctricos.</li>
                  <li>Electricidad industrial: Montaje y conexionado de equipos en tableros eléctricos, de baja y media tensión, montaje y acople de tableros en campo, interconexiones de control y barrajes de potencia, mantenimiento de interruptores de potencia y subestaciones eléctricas.</li>
                  <li>Mecánica y ensamble: Celdas y estructuras, montaje y acoplamiento, nivelación.</li>
                  <li>Ajuste, corte, doblado y punzonado de barras de cobre.</li>
                  <li>Mantenimiento correctivo y preventivo: Inspección, nivelación y ajustes electromecánicos en celdas y subestaciones, tratamientos antioxidantes, pintura y remodelación, mantenimiento, reparación y actualización de equipos RETROFIT.</li>
                </ul>
              </div>
              <div>
                <img className="w-full h-auto rounded-md shadow-md" src="http://ciproingenieria.com/wp-content/uploads/2020/03/%C2%B4poiuy.png" alt="Servicios de Diseño" />
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Retrofit</h3>
                <p className="mt-4 text-lg text-gray-600">En la línea de RETROFIT CIPRO LTDA realiza reparaciones, remodelaciones, ampliaciones y fabricaciones metalmecánicas, para la actualización y modernización de celdas y subestaciones en baja y media tensión, siguiendo las especificaciones técnicas para cada aplicación.</p>
                <p className="mt-4 text-lg text-gray-600">Tenemos amplia experiencia en la repotenciación y actualización de interruptores en media y baja tensión, arrancadores y CCMs, fabricación de barrajes, levantamiento de información y diseños para el RETROFIT.</p>
              </div>
              <div>
                <img className="w-full h-auto rounded-md shadow-md" src="http://ciproingenieria.com/wp-content/uploads/2020/03/%C3%B1liug.png" alt="Retrofit" />
              </div>
            </div>

            {/* Service 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Pruebas</h3>
                <p className="mt-4 text-lg text-gray-600">Realizamos una variedad de pruebas eléctricas para garantizar el funcionamiento óptimo de los equipos y sistemas eléctricos, incluyendo:</p>
                <ul className="list-disc list-inside mt-4 text-lg text-gray-600">
                  <li>Pruebas eléctricas a interruptores.</li>
                  <li>Pruebas SAT y FAT.</li>
                  <li>Pruebas en subestaciones.</li>
                  <li>Pruebas en transformadores.</li>
                  <li>Pruebas CT'S y PT'S.</li>
                </ul>
                <p className="mt-4 text-lg text-gray-600">Contamos con equipos modernos y especializados para realizar estas pruebas, garantizando resultados precisos y confiables.</p>
              </div>
              <div>
                <img className="w-full h-auto rounded-md shadow-md" src="http://ciproingenieria.com/wp-content/uploads/2020/10/ELEC.png" alt="Pruebas" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Return Button */}
      <div className="fixed bottom-6 right-6">
        <Link to="/">
          <button className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700">Regresar</button>
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="flex flex-col space-y-4">
              <div className="text-lg font-semibold text-white">Sobre nosotros</div>
              <a href="#" className="text-base text-gray-300 hover:text-white">Equipo</a>
              <a href="#" className="text-base text-gray-300 hover:text-white">Historia</a>
              <a href="#" className="text-base text-gray-300 hover:text-white">Carreras</a>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="text-lg font-semibold text-white">Servicios</div>
              <a href="#" className="text-base text-gray-300 hover:text-white">Tableros Eléctricos</a>
              <a href="#" className="text-base text-gray-300 hover:text-white">Diseño</a>
              <a href="#" className="text-base text-gray-300 hover:text-white">Retrofit</a>
              <a href="#" className="text-base text-gray-300 hover:text-white">Pruebas</a>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="text-lg font-semibold text-white">Contactos</div>
              <a href="#" className="text-base text-gray-300 hover:text-white">Email</a>
              <a href="#" className="text-base text-gray-300 hover:text-white">Teléfono</a>
              <a href="#" className="text-base text-gray-300 hover:text-white">Ubicación</a>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="text-lg font-semibold text-white">Síguenos</div>
              <a href="#" className="text-base text-gray-300 hover:text-white">LinkedIn</a>
              <a href="#" className="text-base text-gray-300 hover:text-white">Facebook</a>
              <a href="#" className="text-base text-gray-300 hover:text-white">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Services;