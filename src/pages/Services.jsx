import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import { RefContext } from '../context/RefContext';
import ScrollToTopButton from '../components/ScrollToTopButton';

function Services() {

  const { assemblyRef, supplyRef, communicationsRef, mountingRef, cablingRef, maintenanceRef, controlRef, instrumentationRef, areasRef, saleRef  } = useContext(RefContext);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Banner/>
      <main className="mt-24 flex-1">
{/* Hero section */}
<div className="">
  <div className="">
  </div>
  <div className="relative py-6 sm:py-10 lg:py-6">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <h1 className="text-6xl font-semibold">Nuestros Servicios</h1>
    </div>
  </div>
</div>

 {/* Services */}
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16" ref={assemblyRef}>
        {/* Service 1 */}
          <div>
            <h3 id="tableros-electricos" className="text-2xl font-semibold text-gray-900">Ensamble y Diseño de Tableros de Control y Distribución</h3>
                <p className="mt-4 text-lg text-gray-600">Ofrecemos diseño y ensamble de tableros de control y distribución en baja tensión, adaptados a las necesidades y requerimientos específicos del cliente y el proceso. Nuestros productos cumplen con altos estándares de calidad y utilizan materiales certificados y aprobados según las normativas RETIE y NTC 2050.</p>
          </div>
            <img className="w-full h-auto rounded-md shadow-md" src="./14.png" alt="Ensamble y Diseño" />
      </div>

      {/* Service 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-12" ref={supplyRef}>
          <div>
            <h3 id="servicios-de-diseño" className="text-2xl font-semibold text-gray-900">Suministro de Personal Técnico</h3>
              <p className="mt-4 text-lg text-gray-600">Contamos con un equipo altamente capacitado y con amplia experiencia en todas las áreas y procesos constructivos, asegurando la excelencia en la ejecución de cada proyecto.</p>
          </div>
          <div>
            <img className="w-full h-auto rounded-md shadow-md" src="./section1.4.jpg" alt="Servicios de Diseño" />
          </div>
  </div>

      {/* Service 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16" ref={controlRef}>
              <div>
                <h3 id="retrofit" className="text-2xl font-semibold text-gray-900">Control Industrial</h3>
                <p className="mt-4 text-lg text-gray-600">Diseñamos, ensamblamos y ponemos en servicio tableros y consolas de control automático de procesos industriales, cumpliendo con las normas y estándares nacionales e internacionales, así como con los requerimientos específicos de cada cliente.</p>
              </div>
              <div>
                <img className="w-full h-auto rounded-md shadow-md" src="./22.png" alt="Retrofit" />
              </div>
            </div>

            {/* Service 4 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16" ref={communicationsRef}>
              <div>
                <h3 id="pruebas" className="text-2xl font-semibold text-gray-900">Comunicaciones</h3>
                <p className="mt-4 text-lg text-gray-600">Contamos con una amplia experiencia en redes de control y supervisión, incluyendo la construcción y certificación de enlaces de fibra óptica y cobre (UTP, FTP, CAT 5E y 6), garantizando una comunicación eficiente y segura en entornos industriales.</p>
              </div>
              <div>
                <img className="w-full h-auto rounded-md shadow-md" src="./12.png" alt="Pruebas" />
              </div>
            </div>

            
      {/* Service 5 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16" ref={mountingRef}>
              <div>
                <h3 id="retrofit" className="text-2xl font-semibold text-gray-900">Montaje Electromecánico</h3>
                <p className="mt-4 text-lg text-gray-600">Realizamos la construcción de rutas, canalizaciones, tuberías y bandejas portacables de acuerdo a los requerimientos de las instalaciones industriales, asegurando un montaje electromecánico eficiente y seguro.</p>
              </div>
              <div>
                <img className="w-full h-auto rounded-md shadow-md" src="./section1.3.jpg" alt="Retrofit" />
              </div>
            </div>

      {/* Service 6 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16" ref={cablingRef}>
          <div>
            <h3 id="retrofit" className="text-2xl font-semibold text-gray-900">Cableado y Conexionado</h3>
            <p className="mt-4 text-lg text-gray-600">Nos encargamos del cableado y conexionado de control y potencia en sistemas industriales, subestaciones y áreas de procesos, cumpliendo con los requerimientos específicos de cada cliente.</p>
          </div>
          <div>
            <img className="w-full h-auto rounded-md shadow-md" src="./section1.5.jpg" alt="Retrofit" />
          </div>
        </div>

      {/* Service 7 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16" ref={instrumentationRef}>
          <div>
            <h3 id="retrofit" className="text-2xl font-semibold text-gray-900">Instrumentación</h3>
              <p className="mt-4 text-lg text-gray-600">Realizamos la instalación y configuración de instrumentación industrial en áreas de proceso clasificadas, cumpliendo con las normativas NEMA 4X y 7.</p>
          </div>
            <div>
                <img className="w-full h-auto rounded-md shadow-md" src="./16.png" alt="Retrofit" />
              </div>
            </div>

      {/* Service 8 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16" ref={areasRef}>
          <div>
            <h3 id="retrofit" className="text-2xl font-semibold text-gray-900">Áreas Clasificadas</h3>
              <p className="mt-4 text-lg text-gray-600">Ofrecemos instalaciones eléctricas y de control en áreas clasificadas, realizando montajes que cumplen con los estándares de seguridad explosion proof. Además, proporcionamos accesorios y cajas certificadas bajo las normas NEMA 4X y NEMA 7 clase 1 div 1 y 2.</p>
          </div>
          <div>
              <img className="w-full h-auto rounded-md shadow-md" src="./11.png" alt="Retrofit" />
          </div>
        </div>

      {/* Service 9 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 id="retrofit" className="text-2xl font-semibold text-gray-900">Control, Protección y Medida</h3>
                <p className="mt-4 text-lg text-gray-600">Diseñamos y ensamblamos tableros de control, protección y medida para baja, media y alta tensión, utilizando materiales certificados y aprobados según las normativas RETIE y NTC 2050, y ajustándose a las necesidades y requerimientos específicos de cada proyecto.</p>
          </div>
          <div>
            <img className="w-full h-auto rounded-md shadow-md" src="./4.png" alt="Retrofit" />
          </div>
        </div>

      {/* Service 10 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 id="pruebas" className="text-2xl font-semibold text-gray-900" ref={maintenanceRef}>Mantenimiento</h3>
              <p className="mt-4 text-lg text-gray-600">Ofrecemos servicios de mantenimiento y pruebas eléctricas en equipos de corte y protección en baja, media y alta tensión, garantizando el correcto funcionamiento y seguridad de las instalaciones. Entre nuestros servicios se incluyen:</p>
                <ul className="list-disc list-inside mt-4 text-lg text-gray-600">
                  <li>Resistencia de contactos.</li>
                  <li>Resistencia dinamica.</li>
                  <li>Tiempos de apertura y discrepancia.</li>
                  <li>Tiempos de cierre y simultaneidad.</li>
                  <li>Corriente de motor.</li>
                  <li>Corrientes de bobina de apertura y cierre.</li>
                  <li>Voltaje mínimo de operación de las bobinas.</li>
                </ul>
              <p className="mt-4 text-lg text-gray-600">Contamos con equipos modernos y especializados para realizar estas pruebas, garantizando resultados precisos y confiables.</p>
          </div>
        <div>
                <img className="w-full h-auto rounded-md shadow-md" src="./13.png" alt="Pruebas" />
              </div>
            </div>

                                  {/* Service 11 */}
                                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16" ref={saleRef}>
              <div>
                <h3 id="pruebas" className="text-2xl font-semibold text-gray-900">Venta y Suministro de Materiales</h3>
                <p className="mt-4 text-lg text-gray-600">Proveemos y suministramos materiales de control y fungibles para tableristas, incluyendo:</p>
                <ul className="list-disc list-inside mt-4 text-lg text-gray-600">
                  <li>Bornes en todas sus líneas, control y fuerza.</li>
                  <li>Cables de control y fuerza con certificación de marcas reconocidas..</li>
                  <li>Terminales de control y potencia en marcas certificadas.</li>
                </ul>
                <p className="mt-4 text-lg text-gray-600">Contamos con equipos modernos y especializados para realizar estas pruebas, garantizando resultados precisos y confiables.</p>
              </div>
              <div>
                <img className="w-full h-auto rounded-md shadow-md" src="./21.png" alt="Pruebas" />
              </div>
            </div>

                                              {/* Service 11 */}
                                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <h3 id="pruebas" className="text-2xl font-semibold text-gray-900">Contacto</h3>
                <p className="mt-4 text-lg text-gray-600">Jaime Agudelo</p>
                <ul className="list-disc list-inside mt-4 text-lg text-gray-600">
                  <li>Coordinador de Proyectos .</li>
                  <li>Teléfono: +57 1 8005381 </li>
                  <li>Móvil: +57 313 2336061</li>
                  <li>Correo: contacto@teknesoluciones.com</li>
                  <li>(https://www.teknesoluciones.com)</li>
                </ul>
              </div>
              <div>
                <img className="w-full h-auto rounded-md shadow-md" src="./contacto.png" alt="Pruebas" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Boton de regreso */}
      <div className="fixed bottom-14 right-6">
        <Link to="/">
          <button className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none">
            Regresar
          </button>
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

      <ScrollToTopButton />

      {/* WhatsApp bottom */}
      <div className="fixed bottom-12 right-36 z-10">
        <a href="https://api.whatsapp.com/send?phone=+573132336061&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n." target="_blank" rel="noopener noreferrer" className="block bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300" aria-label="WhatsApp">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png" alt="WhatsApp Icon" className="h-6 w-6 text-white" />
        </a>
      </div>
    </div>
  );
}

export default Services;