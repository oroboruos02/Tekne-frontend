import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const navigation = {
    categories: [],
    pages: [
      { name: "INICIO", href: "/" },
      { name: "QUIENES SOMOS", href: "/who" },
      { name: "DIRECTORIO DE AUTOMATIZACION", href: "/directory" },
      { name: "SERVICIOS", href: "/services" },
      { name: "EXPERIENCIAS", href: "/experiences" },
    ],
  };

  return (
    <>
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog className="relative z-40 lg:hidden" onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-sm flex-col overflow-y-auto bg-gradient-to-b from-dark-950 to-dark-900 backdrop-blur-xl shadow-2xl border-r border-white/10">
                {/* Header del menú móvil */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <img src="logo.png" alt="Tekne" className="h-12 w-auto drop-shadow-lg" />
                  </div>
                  <button
                    type="button"
                    className="relative p-2.5 text-gray-400 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/10 group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6 transition-transform duration-300 group-hover:rotate-90" aria-hidden="true" />
                  </button>
                </div>

                {/* Navigation links */}
                <div className="flex-1 px-4 py-6 space-y-2">
                  {navigation.pages.map((page, index) => (
                    <div key={page.name} className="flow-root animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                      <Link
                        to={page.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={classNames(
                          "group flex items-center gap-3 text-base font-semibold px-4 py-3.5 rounded-xl transition-all duration-300",
                          location.pathname === page.href && page.name !== "INICIO"
                            ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-500/30"
                            : "text-gray-200 hover:text-white hover:bg-white/10"
                        )}
                      >
                        <span className="w-1 h-8 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <span>{page.name}</span>
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Auth buttons */}
                <div className="px-4 py-6 border-t border-white/10 space-y-3 bg-dark-950/50">
                  <Link
                    to="/registerclient"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/50 btn-glow"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    Crear Cuenta
                  </Link>
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3.5 text-base font-medium text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    Iniciar Sesión
                  </Link>
                </div>

                {/* Decorative gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500"></div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-xl backdrop-filter border-b border-white/10 shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <div className="flex h-20 items-center justify-between">
              {/* Logo (lg+) */}
              <div className="hidden lg:flex lg:flex-1 lg:items-center">
                <Link to="/" className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <img className="relative h-16 w-auto drop-shadow-2xl" src="logo.png" alt="Tekne Soluciones Logo" />
                  </div>
                </Link>
              </div>

              <div className="hidden h-full lg:flex">
                {/* Navigation menus with modern design */}
                <div className="flex h-full justify-center items-center space-x-2">
                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.href}
                      className={classNames(
                        "relative flex items-center text-sm font-semibold px-4 py-2.5 rounded-lg transition-all duration-300 group",
                        location.pathname === page.href && page.name !== "INICIO"
                          ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-500/50"
                          : "text-gray-200 hover:text-white hover:bg-white/10"
                      )}
                    >
                      <span className="relative z-10">{page.name}</span>
                      {location.pathname === page.href && page.name !== "INICIO" && (
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="flex flex-1 items-center lg:hidden">
                <button
                  type="button"
                  className="relative -ml-2 p-2.5 text-white hover:text-primary-400 transition-colors duration-300 rounded-lg hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-7 w-7" aria-hidden="true" />
                </button>
              </div>

              {/* Logo (mobile) */}
              <Link to="/" className="lg:hidden group">
                <span className="sr-only">Tekne Soluciones</span>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <img src="logo.png" alt="Tekne Logo" className="relative h-16 w-auto drop-shadow-2xl" />
                </div>
              </Link>

              {/* Right side actions */}
              <div className="flex flex-1 items-center justify-end gap-3">
                <Link
                  to="/login"
                  className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-200 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/10"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  <span>Ingresar</span>
                </Link>
                <Link
                  to="/registerclient"
                  className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/50 btn-glow"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  <span>Registrarse</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
