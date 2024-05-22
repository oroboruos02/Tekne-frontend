import React from "react"
import { Link } from "react-router-dom"

const Banner = () => {
    return(
        <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            src="https://www.tecsaqro.com.mx/wp-content/uploads/2020/08/mantenimiento_subestaciones_electricas.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">Hacemos de tu proyecto nuestro compromiso</h1>
          <p className="mt-4 text-xl text-white">
          Pioneros en Subestaciones y Automatización Industrial ¡Disfruta tu visita!.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            Contáctenos
          </Link>
        </div>
      </div>
        
    )
}

export default Banner