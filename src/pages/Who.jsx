import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import Banner from '../components/Banner';

function Who() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Banner />
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <svg className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" aria-hidden="true">
            <defs>
              <pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
              <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" strokeWidth="0" />
            </svg>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
          </svg>
          <div className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48" aria-hidden="true">
            <div className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style={{ clipPath: "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)" }}></div>
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Conócenos</h1>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">En Tekne, somos más que solo un proveedor de servicios de ingeniería de subestaciones eléctricas. Nos enorgullece ser tu socio de confianza en cada paso del camino. Nuestro equipo está formado por expertos apasionados que se dedican a ofrecer soluciones innovadoras y de alta calidad que satisfacen tus necesidades específicas. Ya sea que estés buscando diseñar una nueva subestación, modernizar una existente o llevar a cabo mantenimiento preventivo, estamos aquí para ayudarte a alcanzar tus objetivos de manera eficiente y efectiva. Con [Nombre de la Empresa], puedes confiar en una colaboración sólida y exitosa que impulse el éxito de tus proyectos eléctricos.</p>
                </div>
                <div className="mt-14 lg:mt-0 lg:ml-16">
                  <div className="bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] bg-opacity-30 rounded-xl p-10">
                    <h2 className="text-lg font-semibold text-white">Tu Socio en Ingeniería de Subestaciones Eléctricas</h2>
                    <p className="mt-4 text-base text-white">En TEKNE SOLUCIONES nos especializamos en montajes eléctricos, mantenimiento de celdas, cableado y conexionado de redes de comunicaciones, y ensamble de tableros de automatización y control. Además, proporcionamos personal técnico altamente capacitado para trabajos en fábrica y SAT. Innovamos para su éxito.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

                {/* Mission and Vision */}
                <section className="relative py-24">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-y-0 items-start">
      <div className="flex flex-col">
        <h2 className="text-3xl font-semibold text-gray-900">Misión</h2>
        <p className="mt-4 text-lg text-gray-600">Nuestra misión es entregar productos y servicios de excelencia y alta calidad, impulsando el desarrollo de proyectos de ingeniería y montajes eléctricos, así como de instrumentación y control automático. Además, ofrecemos una amplia gama de materiales, suministros y equipos eléctricos de vanguardia. Todo esto se realiza con un enfoque centrado en el cliente, utilizando tecnología de punta para garantizar el máximo beneficio. Nos comprometemos a mantener una revisión constante de nuestros procesos y riesgos en todas nuestras áreas, en búsqueda perpetua de la mejora continua y la excelencia en cada paso del proceso.</p>
      </div>
      <div className="flex flex-col">
        <h2 className="text-3xl font-semibold text-gray-900">Visión</h2>
        <p className="mt-4 text-lg text-gray-600">Nuestra visión es ser reconocidos por nuestra excelencia operativa y servicio al cliente excepcional, manteniendo siempre una cultura de mejora continua y un enfoque inflexible en la satisfacción del cliente. Aspiramos a ser referentes en la industria, estableciendo nuevos estándares de calidad y eficiencia, y contribuyendo al éxito y crecimiento sostenible de nuestros clientes.</p>
      </div>
    </div>
  </div>
</section>

        <section className="relative pb-32">
  <div className="absolute inset-x-0 top-0 transform-gpu -translate-y-1/2 flex justify-center" aria-hidden="true">
    <div className="inline-flex items-center border-b border-gray-200 w-[calc(50%-1.5rem)]"></div>
  </div>
  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-2 xl:grid-cols-4">
      <div className="flex flex-col items-center space-y-4 lg:items-start">
        <img className="h-16" src="images\casa.svg" alt="" />
        <h3 className="text-lg font-semibold text-gray-900">Soluciones Personalizadas</h3>
        <p className="mt-2 text-base text-gray-600">Diseñamos y desarrollamos soluciones de automatización industrial y eléctrica completamente personalizadas para satisfacer las necesidades específicas de tu empresa. Desde sistemas de control hasta instalaciones eléct...</p>
      </div>
      <div className="flex flex-col items-center space-y-4 lg:items-start">
        <img className="h-16" src="images\oficina.svg" alt="" />
        <h3 className="text-lg font-semibold text-gray-900">Eficiencia y Productividad</h3>
        <p className="mt-2 text-base text-gray-600">Optimiza tus procesos industriales y eléctricos para aumentar la eficiencia y la productividad. Nuestros servicios te ayudarán a reducir costos operativos, minimizar tiempos de inactividad y mejorar el rendimiento general de tu...</p>
      </div>
      <div className="flex flex-col items-center space-y-4 lg:items-start">
        <img className="h-16" src="images\estadistica.svg" alt="" />
        <h3 className="text-lg font-semibold text-gray-900">Innovación Tecnológica</h3>
        <p className="mt-2 text-base text-gray-600">Incorporamos las últimas tecnologías en automatización industrial y eléctrica en nuestros proyectos para garantizar resultados óptimos y eficientes. Desde sistemas de control avanzados hasta soluciones de monitoreo en tiempo real...</p>
      </div>
      <div className="flex flex-col items-center space-y-4 lg:items-start">
        <img className="h-16" src="images\seguridad.svg" alt="" />
        <h3 className="text-lg font-semibold text-gray-900">Soporte y Mantenimiento</h3>
        <p className="mt-2 text-base text-gray-600">Ofrecemos servicios integrales de soporte y mantenimiento para garantizar el funcionamiento óptimo y la confiabilidad de tus sistemas de automatización industrial y eléctrica a lo largo del tiempo. Desde actualizaciones de software...</p>
      </div>
    </div>
  </div>
</section>

        {/* Testimonials */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
            <div className="max-w-2xl mx-auto lg:text-center">
              <h2 className="text-3xl font-semibold text-gray-900">Lo que dicen nuestros clientes</h2>
              <p className="mt-4 text-lg text-gray-600">Nuestro compromiso es con la satisfacción y el éxito de nuestros clientes. Escucha lo que tienen para decir sobre su experiencia con nosotros.</p>
            </div>
            <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-x-16">
              <div className="flex flex-col items-center space-y-6">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100">
                  <img className="w-full h-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh3hXnE0vHfeNh-IUf6B-CMCmzg1hQKgpB-g&usqp=CAU" alt="Profile of a woman" />
                </div>
                <div className="text-lg font-semibold text-gray-900">María López</div>
                <div className="text-gray-600">"Nuestra colaboración con TEKNE SOLUCIONES ha sido excepcional. Su enfoque meticuloso y su capacidad para comprender nuestras necesidades específicas nos han permitido implementar soluciones eléctricas en tiempo récord.Desde el diseño inicial hasta la implementación final, su profesionalismo y atención al detalle han sido evidentes en cada etapa del proyecto. Gracias a su experiencia y dedicación, hemos logrado mejorar significativamente la eficiencia y la calidad de nuestros proyectos eléctricos."</div>
              </div>
              <div className="flex flex-col items-center space-y-6">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100">
                  <img className="w-full h-full object-cover" src="https://www.ga-p.com/wp-content/uploads/2018/03/Juan-P%C3%A9rez-G%C3%B3mez-e1606511654387.jpg" alt="Profile of a man" />
                </div>
                <div className="text-lg font-semibold text-gray-900">Juan Pérez</div>
                <div className="text-gray-600">"Testimonio de Juan Perez: "Estamos enormemente satisfechos con los servicios de ingeniería y montajes eléctricos de TEKNE SOLUCIONES. El equipo demostró un profundo conocimiento técnico y una habilidad excepcional para adaptarse a nuestras necesidades específicas. Su capacidad para identificar y resolver problemas complejos en tiempo récord fue impresionante. Gracias a su colaboración, hemos logrado la energización de la subestación en tiempo récord. Su compromiso con la excelencia los convierte en un socio invaluable en nuestro éxito."</div>
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
      
      {/* WhatsApp bottom */}
      <div className="fixed bottom-12 right-36 z-10">
        <a href="https://api.whatsapp.com/send?phone=+573132336061&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n." target="_blank" rel="noopener noreferrer" className="block bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300" aria-label="WhatsApp">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png" alt="WhatsApp Icon" className="h-6 w-6 text-white" />
        </a>
      </div>
    </div>
  );
}

export default Who;