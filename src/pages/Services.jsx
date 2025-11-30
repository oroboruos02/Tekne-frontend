import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Menu from '../components/Menu';
import Banner from '../components/Banner';
import { RefContext } from '../context/RefContext';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Footer from '../components/Footer';

function Services() {
  const { assemblyRef, supplyRef, communicationsRef, mountingRef, cablingRef, maintenanceRef, controlRef, instrumentationRef, areasRef, saleRef } = useContext(RefContext);

  const services = [
    {
      ref: assemblyRef,
      title: "Ensamble y Diseño de Tableros de Control y Distribución",
      description: "Ofrecemos diseño y ensamble de tableros de control y distribución en baja tensión, adaptados a las necesidades y requerimientos específicos del cliente y el proceso. Nuestros productos cumplen con altos estándares de calidad y utilizan materiales certificados y aprobados según las normativas RETIE y NTC 2050.",
      image: "./14.jpg",
      icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
    },
    {
      ref: supplyRef,
      title: "Suministro de Personal Técnico",
      description: "Contamos con un equipo altamente capacitado y con amplia experiencia en todas las áreas y procesos constructivos, asegurando la excelencia en la ejecución de cada proyecto.",
      image: "./section1.4.jpg",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    },
    {
      ref: controlRef,
      title: "Control Industrial",
      description: "Diseñamos, ensamblamos y ponemos en servicio tableros y consolas de control automático de procesos industriales, cumpliendo con las normas y estándares nacionales e internacionales, así como con los requerimientos específicos de cada cliente.",
      image: "./22.jpg",
      icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
    },
    {
      ref: communicationsRef,
      title: "Comunicaciones",
      description: "Contamos con una amplia experiencia en redes de control y supervisión, incluyendo la construcción y certificación de enlaces de fibra óptica y cobre (UTP, FTP, CAT 5E y 6), garantizando una comunicación eficiente y segura en entornos industriales.",
      image: "./12.jpg",
      icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
    },
    {
      ref: mountingRef,
      title: "Montaje Electromecánico",
      description: "Realizamos la construcción de rutas, canalizaciones, tuberías y bandejas portacables de acuerdo a los requerimientos de las instalaciones industriales, asegurando un montaje electromecánico eficiente y seguro.",
      image: "./section1.3.jpg",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    },
    {
      ref: cablingRef,
      title: "Cableado y Conexionado",
      description: "Nos encargamos del cableado y conexionado de control y potencia en sistemas industriales, subestaciones y áreas de procesos, cumpliendo con los requerimientos específicos de cada cliente.",
      image: "./section1.5.jpg",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      ref: instrumentationRef,
      title: "Instrumentación",
      description: "Realizamos la instalación y configuración de instrumentación industrial en áreas de proceso clasificadas, cumpliendo con las normativas NEMA 4X y 7.",
      image: "./16.jpg",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    },
    {
      ref: areasRef,
      title: "Áreas Clasificadas",
      description: "Ofrecemos instalaciones eléctricas y de control en áreas clasificadas, realizando montajes que cumplen con los estándares de seguridad explosion proof. Además, proporcionamos accesorios y cajas certificadas bajo las normas NEMA 4X y NEMA 7 clase 1 div 1 y 2.",
      image: "./11.jpg",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    },
    {
      title: "Control, Protección y Medida",
      description: "Diseñamos y ensamblamos tableros de control, protección y medida para baja, media y alta tensión, utilizando materiales certificados y aprobados según las normativas RETIE y NTC 2050, y ajustándose a las necesidades y requerimientos específicos de cada proyecto.",
      image: "./4.jpg",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    },
    {
      ref: maintenanceRef,
      title: "Mantenimiento",
      description: "Ofrecemos servicios de mantenimiento y pruebas eléctricas en equipos de corte y protección en baja, media y alta tensión, garantizando el correcto funcionamiento y seguridad de las instalaciones.",
      details: [
        "Resistencia de contactos",
        "Resistencia dinámica",
        "Tiempos de apertura y discrepancia",
        "Tiempos de cierre y simultaneidad",
        "Corriente de motor",
        "Corrientes de bobina de apertura y cierre",
        "Voltaje mínimo de operación de las bobinas"
      ],
      image: "./13.jpg",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    },
    {
      ref: saleRef,
      title: "Venta y Suministro de Materiales",
      description: "Proveemos y suministramos materiales de control y fungibles para tableristas.",
      details: [
        "Bornes en todas sus líneas, control y fuerza",
        "Cables de control y fuerza con certificación de marcas reconocidas",
        "Terminales de control y potencia en marcas certificadas"
      ],
      image: "./21.jpg",
      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    }
  ];

  return (
    <>
      <Menu />

      <div className="bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 min-h-screen flex flex-col">
        {/* SEO Meta Tags */}
        <Helmet>
        <title>Servicios de Automatización Industrial - Tekne Soluciones | Montajes Eléctricos</title>
        <meta name="description" content="Servicios especializados en automatización industrial: tableros de control, montaje electromecánico, comunicaciones, cableado, instrumentación y mantenimiento eléctrico en Colombia." />
        <meta name="keywords" content="tableros de control, montaje electromecánico, comunicaciones industriales, cableado industrial, instrumentación, mantenimiento eléctrico, automatización, control industrial, áreas clasificadas, RETIE, NTC 2050" />
        <link rel="canonical" href="https://www.teknesoluciones.com/services" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.teknesoluciones.com/services" />
        <meta property="og:title" content="Servicios de Automatización Industrial - Tekne Soluciones" />
        <meta property="og:description" content="Soluciones integrales en automatización: tableros de control, montajes eléctricos, instrumentación y mantenimiento. Cumplimiento de normas RETIE y NTC 2050." />
        <meta property="og:image" content="https://www.teknesoluciones.com/14.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.teknesoluciones.com/services" />
        <meta name="twitter:title" content="Servicios de Automatización Industrial" />
        <meta name="twitter:description" content="Tableros de control, montajes eléctricos, instrumentación y más." />
        <meta name="twitter:image" content="https://www.teknesoluciones.com/14.jpg" />

        {/* Structured Data - Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Automatización Industrial",
            "provider": {
              "@type": "Organization",
              "name": "Tekne Soluciones",
              "url": "https://www.teknesoluciones.com",
              "telephone": "+57-312-5657516",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Calle 56 sur 90b25",
                "addressLocality": "Bogotá",
                "addressCountry": "CO"
              }
            },
            "areaServed": "Colombia",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios de Automatización",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Tableros de Control y Distribución",
                    "description": "Diseño y ensamble de tableros certificados RETIE y NTC 2050"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Montaje Electromecánico",
                    "description": "Construcción de rutas, canalizaciones y bandejas portacables"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <Banner />
      <main className="flex-1 relative">
        {/* Hero section */}
        <div className="relative py-20 sm:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1)_0%,transparent_100%)]"></div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center animate-slide-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                Nuestros <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Servicios</span>
              </h1>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Soluciones integrales en automatización industrial y sistemas eléctricos
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <section className="py-12 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                ref={service.ref}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="group">
                    {/* Icon */}
                    <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl border border-primary-400/30 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                      </svg>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Details list if exists */}
                    {service.details && (
                      <ul className="space-y-3 mb-6">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-300">
                            <svg className="w-5 h-5 text-secondary-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Decorative line */}
                    <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full group-hover:w-40 transition-all duration-500"></div>
                  </div>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="group relative overflow-hidden rounded-3xl bg-dark-800/50 backdrop-blur-sm border border-white/10 hover:border-primary-500/50 transition-all duration-500 card-hover">
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent"></div>
                    </div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-3xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-dark-800/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  ¿Listo para comenzar tu <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">proyecto</span>?
                </h2>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-white">Jaime Agudelo</p>
                      <p className="text-sm">Coordinador de Proyectos</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p>Teléfono: <a href="tel:+5718005381" className="hover:text-primary-400 transition-colors">+57 1 8005381</a></p>
                      <p>Móvil: <a href="tel:+573132336061" className="hover:text-primary-400 transition-colors">+57 313 2336061</a></p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:contacto@teknesoluciones.com" className="hover:text-primary-400 transition-colors">
                      contacto@teknesoluciones.com
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <a href="https://www.teknesoluciones.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                      www.teknesoluciones.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src="./contacto.png"
                    alt="Contacto"
                    className="w-full h-auto rounded-3xl border border-white/10"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* WhatsApp button */}
      <a
        href="https://api.whatsapp.com/send?phone=+573125657516&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 animate-float"
        aria-label="WhatsApp"
      >
        <span className="absolute inline-flex h-full w-full rounded-2xl bg-green-400 opacity-75 animate-ping"></span>
        <svg className="relative w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      <ScrollToTopButton />
      </div>
    </>
  );
}

export default Services;
