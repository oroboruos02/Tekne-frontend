import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-br from-dark-950 via-dark-900 to-primary-950 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-secondary-600/20 to-primary-600/20 animate-pulse" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Imagen de fondo decorativa con overlay mejorado */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <img
          src="./banner.jpg"
          alt="Banner de Tekne Soluciones"
          className="h-full w-full object-cover object-center opacity-30 mix-blend-overlay"
        />
      </div>

      {/* Decorative blur elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary-500/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      {/* Contenido del banner */}
      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-20 sm:py-28 lg:py-36 text-center">
        {/* Badge superior */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-white border border-white/20 animate-slide-down">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-500"></span>
          </span>
          Innovación en Automatización Industrial
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl animate-slide-up">
          <span className="block mb-2">Bienvenidos a</span>
          <span className="block bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
            Tekne Soluciones
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl font-light animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Excelencia en ingeniería, montajes eléctricos y automatización industrial
        </p>

        <p className="mt-4 text-base sm:text-lg text-secondary-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Hacemos de tu proyecto nuestro compromiso
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-neon btn-glow"
          >
            <span className="relative z-10">Contáctenos</span>
            <svg className="relative z-10 ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>

          <Link
            to="/services"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:border-primary-400"
          >
            <span className="relative z-10">Ver Servicios</span>
            <svg className="relative z-10 ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </div>

        {/* Stats o features */}
        <div className="mt-16 grid grid-cols-3 gap-8 w-full max-w-3xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {[
            { number: "15+", label: "Años de Experiencia" },
            { number: "500+", label: "Proyectos Completados" },
            { number: "100%", label: "Satisfacción Cliente" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{stat.number}</div>
              <div className="mt-1 text-xs sm:text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 sm:h-24" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="rgb(15, 23, 42)" fillOpacity="0.9"/>
        </svg>
      </div>
    </div>
  );
};

export default Banner;
