import React from 'react';
import { Helmet } from 'react-helmet-async';
import Menu from '../components/Menu';
import Banner from '../components/Banner';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Footer from '../components/Footer';

function Experiences() {
  const experiences = [
    {
      client: "Axon Group LTDA",
      projects: [
        "Ensamble en fábrica de (13) tableros de control y protección para el proyecto parque solar de los llanos. Subestación Trina solar 115Kv. propiedad de la empresa Trina Solar Energy, en el periodo comprendido de marzo a mayo del año 2020.",
        "Ensamble en fábrica de (3) tableros de control para el SAS. (Sistema de automatización). Para el proyecto Subestacion El huche 115Kv. propiedad de la empresa de energía de Boyacá (EBSA). Además de la puesta en servicio en sitio del sistema (SAS), en el periodo comprendido de octubre a diciembre del año 2018.",
        "Ensamble en fábrica de (3) tableros de control para el SAS. (Sistema de automatización). Para el proyecto Subestación Ricaurte 115Kv. propiedad de la empresa de energía de Boyacá (EBSA). Además de la puesta en servicio en sitio del sistema (SAS), en el periodo comprendido de octubre a diciembre del año 2018.",
        "Ensamble en fábrica de (3) tableros de control para el SAS. (Sistema de automatización). Para el proyecto Subestación Suamox 115/230 Kv. propiedad de la empresa de energía de Boyacá (EBSA). Además de la puesta en servicio en sitio del sistema (SAS), en el periodo comprendido de junio - agosto del año 2019.",
        "Ensamble en fábrica de (2) tableros de control para el SAS. (Sistema de automatización). Para el proyecto Subestación Hunza 34.5 Kv. propiedad de la empresa de energía de Boyacá (EBSA). Además de la puesta en servicio en sitio del sistema (SAS), en el periodo comprendido de junio - agosto del año 2019.",
        "Cambio de tableros de protección de (4) bahías de 115 Kv. Para el proyecto. Modernización de la subestación Donato 115 Kv. propiedad de la empresa de energía de Boyacá (EBSA). En el periodo comprendido de septiembre - noviembre del año 2020.",
        "Diseño, ensamble y reemplazo de tableros de protección de (3) bahías de 34.5 Kv. Para el proyecto. Modernización de la subestación Hunza 34.5 Kv. propiedad de la empresa de energía de Boyacá (EBSA), en el periodo comprendido de mayo - julio del año 2018.",
        "Ensamble de tablero de control y protección de (1) bahías de 115 Kv. Para el proyecto. Ampliación de la subastación Peldar 115 Kv. propiedad de la empresa Peldar. (Zipaquirá), en el periodo julio del año 2019.",
        "Ensamble de tablero de control y protección de (1) bahías Trafo 115 Kv. Para el proyecto. Ampliación de la subastación Termo Yopal 115 Kv. propiedad de la empresa Termo Yopal, en el periodo junio del año 2019.",
        "Ensamble de tablero de control y protección de (1) bahías Trafo 34.5 Kv. Para el proyecto. Modernización de la subastación EL Líbano 115 Kv. propiedad de la empresa Celsia. (Tolima) Además de la puesta en servicio del SAS (Sistema de automatización) de la Subestación, en el periodo junio del año 2019.",
        "Cambio de Relés de protección de (7) bahías de 34.5 Kv. Para el proyecto. Modernización de la subestación Donato 115 Kv. propiedad de la empresa de energía de Boyacá. (EBSA). En el periodo. Noviembre - diciembre del año 2019.",
        "Ensamble de tableros de control y protección para (5) bahías de 115 Kv. Para el proyecto. Subestación Zarzal 115 Kv. propiedad de la empresa Celsia. (Valle del cauca), en el periodo. Agosto - noviembre del año 2020."
      ]
    },
    {
      client: "ATA Electric",
      projects: [
        "Retrofit para 12 celdas de media tensión (13.2 Kv) subestación El Bight, SAN ANDRÉS ISLAS (SOPESA). Modernización del sistema de protecciones y automatización. 2023",
        "Retrofit para 8 celdas de media tensión (13.2 Kv) subestación Bahía Garret, SAN ANDRÉS ISLAS (SOPESA). Modernización del sistema de protecciones y automatización. 2024",
        "Ensamble y puesta en servicio de tableros del sistema de control y automatización (SCADA NIVEL 2) de parque solar ISLA PROVIDENCIA. POWER CHINA- ECOPETROL. 2023",
        "Montaje y puesta en servicio 9 cámaras PTZ. Suministro, instalación y puesta en marcha de un sistema de monitoreo visual inteligente para ser usado en la SE Caracolí, (ISA) Intercolombia. 2023",
        "Suministro, instalación y puesta en marcha de un sistema de monitoreo térmico inteligente para ser usado en los transformadores de generación. Centrales La Guaca y Paraíso. (ENEL) 2024",
        "Ensamble de gabinetes de control y pruebas secundarias a seccionalizadores 34.5 Kv. Proyecto sincronismo de generación, campo Rubiales (ECOPETROL- ABB)"
      ]
    },
    {
      client: "EBSA",
      projects: [
        "Servicios de instalación, cableado y pruebas de relés de protección y medidores para las celdas de 34.5 y 13.8 kV en la subestación Paipa. 2023 (Retrofit)"
      ]
    },
    {
      client: "DISICO",
      projects: [
        "Mantenimiento a 25 celdas de media tensión túneles vía Bogotá – Villavicencio. Túneles buena vista y boquerón. Trabajo realizado durante 5 años consecutivos. 2018-2022"
      ]
    }
  ];

  return (
    <>
      <Menu />

      <div className="bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 min-h-screen flex flex-col">
        {/* SEO Meta Tags */}
        <Helmet>
        <title>Experiencias y Proyectos - Tekne Soluciones | Casos de Éxito</title>
        <meta name="description" content="Conoce nuestros proyectos exitosos en subestaciones eléctricas, automatización y control. Trabajos realizados para EBSA, Axon Group, ATA Electric, DISICO y más empresas en Colombia." />
        <meta name="keywords" content="proyectos automatización, subestaciones eléctricas Colombia, EBSA, casos de éxito, retrofit subestaciones, modernización eléctrica, experiencia industrial, proyectos eléctricos" />
        <link rel="canonical" href="https://www.teknesoluciones.com/experiences" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.teknesoluciones.com/experiences" />
        <meta property="og:title" content="Experiencias y Proyectos - Tekne Soluciones" />
        <meta property="og:description" content="Más de 50 proyectos exitosos en subestaciones eléctricas y automatización industrial en Colombia." />
        <meta property="og:image" content="https://www.teknesoluciones.com/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.teknesoluciones.com/experiences" />
        <meta name="twitter:title" content="Proyectos y Experiencias - Tekne Soluciones" />
        <meta name="twitter:description" content="Casos de éxito en automatización industrial y subestaciones eléctricas." />
        <meta name="twitter:image" content="https://www.teknesoluciones.com/logo.png" />
      </Helmet>

      <Banner />
      <main className="flex-1 relative">
        {/* Hero section */}
        <div className="relative py-20 sm:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1)_0%,transparent_100%)]"></div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center animate-slide-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                Nuestras <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Experiencias</span>
              </h1>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Proyectos exitosos que respaldan nuestra trayectoria
              </p>
            </div>
          </div>
        </div>

        {/* Experiences Section */}
        <section className="py-12 max-w-5xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-dark-800/50 backdrop-blur-sm border border-white/10 hover:border-primary-500/50 transition-all duration-500 p-8 sm:p-10 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  {/* Client header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl border border-primary-400/30">
                      <svg className="w-7 h-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                      Cliente: {experience.client}
                    </h2>
                  </div>

                  {/* Projects list */}
                  <ul className="space-y-4">
                    {experience.projects.map((project, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-gray-300 group/item hover:text-white transition-colors duration-300">
                        <div className="flex-shrink-0 mt-1.5">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400"></div>
                        </div>
                        <p className="leading-relaxed">{project}</p>
                      </li>
                    ))}
                  </ul>

                  {/* Decorative line */}
                  <div className="mt-8 h-1 w-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transition-all duration-500 group-hover:w-full"></div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-3xl"></div>
                </div>
              </div>
            ))}
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

export default Experiences;
