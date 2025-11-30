// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // Asegúrate de tener instalado react-helmet
import Menu from '../components/Menu';
import Banner from '../components/Banner';
import useScrollToRef from '../Hooks/useScrollToRef';
import { RefContext } from '../context/RefContext';
import ScrollToTopButton from '../components/ScrollToTopButton';

const navigation = {
  categories: [],
  pages: [
    { name: 'INICIO', href: '/' },
    { name: 'QUIENES SOMOS', href: './who' },
    { name: 'DIRECTORIO DE AUTOMATIZACION', href: './directory' },
    { name: 'SERVICIOS', href: './services' },
    { name: 'EXPERIENCIAS', href: './experiences' },
  ],
}

const footerNavigation = {
  Comprar: [
    { name: 'Servicios', href: './services' },
  ],
  company: [
    { name: 'Quienes somos', href: './who' },
    { name: 'Sostenibilidad', href: '#' },
  ],
  account: [
    { name: 'Administrar cuenta', href: '#' },
  ],
  connect: [
    { name: 'Contacta con nosotros', href: './contact' },
    { name: 'Teléfono: 571 8005381', href: '#' },
    { name: 'Celular:  +573125657516 / +57 3108581442', href: '#' },
  ],
}

export default function Example() {
  const { goToRef } = useScrollToRef();
  const { assemblyRef, supplyRef, communicationsRef, mountingRef, cablingRef, maintenanceRef, moreServices, controlRef, instrumentationRef, areasRef, saleRef } = useContext(RefContext);

  const categories = [
    {
      name: 'Suministro de Personal Técnico',
      href: supplyRef,
      imageSrc: './section1.4.jpg',
      description: 'Contamos con un equipo altamente capacitado y con amplia experiencia en todas las áreas y procesos constructivos.',
    },
    {
      name: 'Comunicaciones',
      href: communicationsRef,
      imageSrc: './12.jpg',
      description: 'Contamos con una amplia experiencia en redes de control y supervisión, incluyendo la construcción y certificación de enlaces de fibra óptica y cobre (UTP, FTP, CAT 5E y 6).',
    },
    {
      name: 'Montaje Electromecánico',
      href: mountingRef,
      imageSrc: './section1.3.jpg',
      description: 'Realizamos la construcción de rutas, canalizaciones, tuberías y bandejas portacables.',
    },
    {
      name: 'Cableado y Conexionado',
      href: cablingRef,
      imageSrc: './section1.5.jpg',
      description: 'Nos encargamos del cableado y conexionado de control y potencia en sistemas industriales, subestaciones y áreas de procesos.',
    },
    { 
      name: 'Mantenimiento',
      href: maintenanceRef,
      imageSrc: './13.jpg',
      description: 'Ofrecemos servicios de mantenimiento y pruebas eléctricas en equipos de corte y protección en baja, media y alta tensión',
    },
  ]

  const collections = [
    {
      name: 'Control Industrial',
      href: controlRef,
      imageSrc: './22.jpg',
      imageAlt: 'Tablero de control industrial',
      description: 'Diseñamos, ensamblamos y ponemos en servicio tableros y consolas de control automático de procesos industriales.',
    },
    {
      name: 'Instrumentación',
      href: instrumentationRef,
      imageSrc: './16.jpg',
      imageAlt: 'Instrumentación industrial',
      description: 'Realizamos la instalación y configuración de instrumentación industrial en áreas de proceso clasificadas, cumpliendo con las normativas NEMA 4X y 7.',
    },
    {
      name: 'Áreas Clasificadas',
      href: areasRef,
      imageSrc: './11.jpg',
      imageAlt: 'Instalaciones en áreas clasificadas',
      description: 'Ofrecemos instalaciones eléctricas y de control en áreas clasificadas, realizando montajes que cumplen con los estándares de seguridad explosion proof.',
    },
  ]

  return (
    <div className="bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950">
      {/* SEO optimizations */}
      <Helmet>
        <title>Tekne Soluciones</title>
        <meta name="description" content="Tekne Soluciones ofrece servicios de automatización, montaje electromecánico, comunicaciones, y mantenimiento. Proveemos soluciones industriales de alta calidad." />
        <meta name="keywords" content="automatización industrial, montaje electromecánico, comunicaciones, mantenimiento eléctrico, instalación de control, control industrial, instrumentación" />
        <link rel="canonical" href="https://www.tusitio.com" />
        <meta property="og:title" content="Tekne Soluciones - Automatización y Montaje Electromecánico" />
        <meta property="og:description" content="Servicios de automatización y mantenimiento industrial con soluciones integrales en montaje, cableado y mantenimiento." />
        <meta property="og:image" content="https://tusitio.com/imagen-social.jpg" />
        <meta property="og:url" content="https://tusitio.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero section */}
      <div className="relative">
        {/* Navigation */}
        <header className="relative z-50">
          <nav aria-label="Top">
            {/* Top navigation with modern design */}
            <div className="bg-dark-950/50 backdrop-blur-md border-b border-white/5">
              <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+57 312 5657516</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <a href="mailto:contacto@teknesoluciones.com" className="group flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-primary-400 transition-colors duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="hidden sm:inline">contacto@teknesoluciones.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Secondary navigation */}
            <Menu />
          </nav>
        </header>
        <Banner />
      </div>

      <main className="relative">
        {/* Category section */}
        <section aria-labelledby="category-heading" className="relative pt-20 sm:pt-28 xl:mx-auto xl:max-w-7xl xl:px-8">
          {/* Section header */}
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0 mb-12">
            <div className="animate-slide-up">
              <h2 id="category-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
                Nuestros <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Servicios</span>
              </h2>
              <p className="text-gray-400 mt-2">Soluciones integrales para tu industria</p>
            </div>
            <Link
              to='/'
              onClick={() => goToRef(moreServices)}
              className="hidden sm:flex items-center gap-2 text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors duration-300 group animate-slide-up"
            >
              Ver más servicios
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Cards grid */}
          <div className="mt-8 px-4 sm:px-6 lg:px-8 xl:px-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {categories.map((category, index) => (
                <Link
                  key={category.name}
                  to='/services'
                  onClick={() => goToRef(category.href)}
                  className="group relative overflow-hidden rounded-2xl bg-dark-800/50 backdrop-blur-sm border border-white/10 hover:border-primary-500/50 transition-all duration-500 hover:scale-105 card-hover animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image with overlay */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={category.imageSrc}
                      alt={category.description}
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent"></div>

                    {/* Icon overlay */}
                    <div className="absolute top-4 right-4 p-2 bg-primary-500/20 backdrop-blur-sm rounded-lg border border-primary-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-5">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                      {category.description}
                    </p>

                    {/* Decorative line */}
                    <div className="mt-4 h-1 w-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transition-all duration-500 group-hover:w-full"></div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl"></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile link */}
          <div className="mt-8 px-4 sm:hidden flex justify-center">
            <Link
              to="/services"
              onClick={() => goToRef(moreServices)}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/50"
            >
              Ver más servicios
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Featured section */}
        <section
          aria-labelledby="social-impact-heading"
          className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8"
        >
          <div className="group relative overflow-hidden rounded-3xl bg-dark-800/50 backdrop-blur-sm border border-white/10 hover:border-primary-500/50 transition-all duration-500">
            {/* Background image with overlay */}
            <div className="absolute inset-0">
              <img
                src="./14.jpg"
                alt="Diseño de tableros de control y distribución"
                className="h-full w-full object-cover object-center opacity-20 transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-dark-950/90 via-primary-950/80 to-dark-950/90"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>

            {/* Content */}
            <div className="relative px-6 py-24 sm:px-12 sm:py-32 lg:px-16 lg:py-40">
              <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
                {/* Badge */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-500/20 backdrop-blur-md px-4 py-2 text-sm font-medium text-primary-300 border border-primary-400/30 animate-slide-down">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Calidad Certificada
                </div>

                <h2 id="social-impact-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl animate-slide-up">
                  <span className="block mb-2">Ensamble y Diseño de</span>
                  <span className="block bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 bg-clip-text text-transparent">
                    Tableros de Control y Distribución
                  </span>
                </h2>

                <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  Ofrecemos diseño y ensamble de tableros de control y distribución en baja tensión, adaptados a las necesidades y requerimientos específicos del cliente y el proceso.
                </p>

                {/* Features grid */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  {[
                    { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", text: "Normas RETIE" },
                    { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", text: "Normas NTC 2050" },
                    { icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z", text: "Materiales Certificados" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                      <svg className="w-6 h-6 text-secondary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                      </svg>
                      <span className="text-sm font-medium text-white">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/services"
                  onClick={() => goToRef(assemblyRef)}
                  className="mt-10 inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/50 btn-glow animate-slide-up"
                  style={{ animationDelay: '0.3s' }}
                >
                  Ver Detalles
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Collection section */}
        <section
          aria-labelledby="collection-heading"
          className="mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8"
          ref={moreServices}
        >
          {/* Section header */}
          <div className="text-center mb-12 animate-slide-up">
            <h2 id="collection-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Otros <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Servicios</span>
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
              Explora nuestro sitio y descubre una amplia variedad de recursos, productos y servicios diseñados para satisfacer tus necesidades.
            </p>
          </div>

          {/* Cards grid */}
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection, index) => (
              <Link
                key={collection.name}
                to='/services'
                onClick={()=>goToRef(collection.href)}
                className="group relative overflow-hidden rounded-2xl bg-dark-800/50 backdrop-blur-sm border border-white/10 hover:border-primary-500/50 transition-all duration-500 hover:scale-105 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={collection.imageSrc}
                    alt={collection.imageAlt}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent"></div>

                  {/* Hover icon */}
                  <div className="absolute top-4 right-4 p-3 bg-primary-500/20 backdrop-blur-sm rounded-xl border border-primary-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                    {collection.name}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {collection.description}
                  </p>

                  {/* CTA with arrow */}
                  <div className="mt-4 flex items-center gap-2 text-primary-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                    <span>Conoce más</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  {/* Decorative line */}
                  <div className="mt-4 h-1 w-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transition-all duration-500 group-hover:w-full"></div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-2xl"></div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section aria-labelledby="comfort-heading" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              <img
                src="./21.jpg"
                alt="Suministro de materiales de control"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
              <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                <h2 id="comfort-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Venta y Suministro de Materiales
                </h2>
                <ul className="mt-3 text-xl text-white">
                  <li>Proveemos y suministramos materiales de control y fungibles para tableristas, incluyendo:</li>
                  <li>- Bornes en todas sus líneas, control y fuerza.</li>
                  <li>- Cables de control y fuerza con certificación de marcas reconocidas.</li>
                  <li>- Terminales de control y potencia en marcas certificadas.</li>
                </ul>
                <Link
                  to="/services"
                  onClick={()=>goToRef(saleRef)}
                  className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                >
                  Ver
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Logo Clouds */}
      <div className="relative py-24 sm:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1)_0%,transparent_100%)]"></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Confían en <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Nosotros</span>
            </h2>
            <p className="text-gray-400">Las compañías más innovadoras del sector</p>
          </div>

          <div className="relative">
            {/* Logos grid con glassmorphism */}
            <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-6 sm:max-w-xl sm:grid-cols-3 sm:gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-5 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {[
                { src: "https://axongroup.com.co/wp-content/uploads/logo-axon-group-blanco.svg", alt: "Axon Group" },
                { src: "https://www.ebsa.com.co/images/logo/logo.png", alt: "EBSA" },
                { src: "https://lirp.cdn-website.com/9f80eacf/dms3rep/multi/opt/logo-blanco-162w.png", alt: "Tuple" },
                { src: "https://disico.com.co/wp-content/uploads/2020/05/Logo-DISICO.webp", alt: "DISICO" },
                { src: "https://www.rymsoluciones.net/logorm.png", alt: "RYM Soluciones" }
              ].map((logo, index) => (
                <div
                  key={logo.alt}
                  className="group relative flex items-center justify-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary-500/50 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    className="max-h-16 w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                    src={logo.src}
                    alt={logo.alt}
                    width={158}
                    height={48}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer aria-labelledby="footer-heading" className="relative bg-dark-950 border-t border-white/10">
        <h2 id="footer-heading" className="sr-only">Footer</h2>

        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950 opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.05)_0%,transparent_50%)]"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main footer content */}
          <div className="py-16 lg:py-20 grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Logo and description */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-lg opacity-30"></div>
                  <img
                    src="/logo.png"
                    alt="Tekne Soluciones"
                    className="relative h-20 w-auto"
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
                Soluciones integrales en automatización industrial, montajes eléctricos y control de procesos. Calidad certificada y experiencia garantizada.
              </p>

              {/* Social media icons */}
              <div className="flex gap-4">
                {[
                  { name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                  { name: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
                  { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="group p-2.5 bg-white/5 border border-white/10 rounded-lg hover:bg-primary-600 hover:border-primary-500 transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Links columns */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
              {/* Comprar */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></span>
                  Servicios
                </h3>
                <ul role="list" className="space-y-3">
                  {footerNavigation.Comprar.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center gap-2 group">
                        <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compañía */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></span>
                  Compañía
                </h3>
                <ul role="list" className="space-y-3">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center gap-2 group">
                        <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contacto */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></span>
                  Contacto
                </h3>
                <ul role="list" className="space-y-3">
                  {footerNavigation.connect.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-300 block">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-400">
                Copyright &copy; 2025 <span className="text-primary-400 font-medium">Tekne Soluciones</span>. Todos los derechos reservados.
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-primary-400 transition-colors duration-300">Privacidad</a>
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                <a href="#" className="hover:text-primary-400 transition-colors duration-300">Términos</a>
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                <a href="#" className="hover:text-primary-400 transition-colors duration-300">Cookies</a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500"></div>
      </footer>

      <ScrollToTopButton />

      {/* WhatsApp button with modern design */}
      <div className="fixed bottom-6 right-6 z-50 group">
        <a
          href="https://api.whatsapp.com/send?phone=+573125657516&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n."
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 animate-float"
          aria-label="WhatsApp"
        >
          {/* Ping animation */}
          <span className="absolute inline-flex h-full w-full rounded-2xl bg-green-400 opacity-75 animate-ping"></span>

          {/* Icon */}
          <svg className="relative w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>

          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-4 py-2 bg-dark-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl border border-white/10">
            ¿Necesitas ayuda? Escríbenos
          </span>
        </a>
      </div>
    </div>
  )
}
