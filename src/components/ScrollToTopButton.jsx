import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Maneja el desplazamiento de la página
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Maneja el clic para desplazarse hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Transition
      show={isVisible}
      enter="transition-all duration-300 ease-out"
      enterFrom="opacity-0 translate-y-4"
      enterTo="opacity-100 translate-y-0"
      leave="transition-all duration-300 ease-in"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-4"
    >
      <div className="fixed bottom-28 right-6 z-50">
        <button
          onClick={scrollToTop}
          className="group relative flex items-center justify-center w-14 h-14 bg-dark-800/90 backdrop-blur-md rounded-2xl border border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-primary-500/20"
          aria-label="Volver arriba"
        >
          <svg
            className="w-6 h-6 text-gray-300 group-hover:text-primary-400 transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>

          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-4 py-2 bg-dark-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl border border-white/10">
            Subir
          </span>
        </button>
      </div>
    </Transition>
  );
};

export default ScrollToTopButton;