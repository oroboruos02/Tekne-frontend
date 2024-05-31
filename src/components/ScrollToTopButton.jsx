import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Importa el icono de flecha hacia arriba
import { Transition } from '@headlessui/react'; // Importa Transition de Headless UI

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Maneja el desplazamiento de la página
  const handleScroll = () => {
    if (window.pageYOffset > 300) { // Cambia 300 por el valor que desees
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

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Transition
      show={isVisible}
      enter="transition-opacity duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed bottom-2 right-4 z-50">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow transition-colors duration-300"
          onClick={scrollToTop}
        >
          <FaArrowUp className="inline-block mr-1" />
          Subir
        </button>
      </div>
    </Transition>
  );
};

export default ScrollToTopButton;