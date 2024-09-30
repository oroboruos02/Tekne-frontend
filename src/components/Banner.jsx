import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative bg-gray-900">
      {/* Imagen de fondo decorativa */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <img
          src="./banner.jpg"
          alt="Banner de Tekne Soluciones"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />

      {/* Contenido del banner */}
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-24 sm:py-48 lg:py-56 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          ¡Bienvenidos a Tekne! Excelencia en ingeniería, montajes eléctricos y automatización.
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-white">
          Hacemos de tu proyecto nuestro compromisos.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-block rounded-md border border-transparent bg-white px-6 py-2 sm:px-8 sm:py-3 text-base font-medium text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Contáctenos
        </Link>
      </div>
    </div>
  );
};

export default Banner;
