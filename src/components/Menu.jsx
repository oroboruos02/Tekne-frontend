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
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-[#111827] pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white transition duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="space-y-1 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <Link
                        to={page.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={classNames(
                          "flex items-center text-sm font-medium px-3 py-2 rounded-md transition-all duration-200",
                          location.pathname === page.href && page.name !== "INICIO"
                            ? "bg-customBlur text-white"
                            : "text-white hover:bg-customBlur hover:text-white hover:shadow-md"
                        )}
                      >
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="space-y-1 px-4 py-6 border-t border-gray-700">
                  <div className="flow-root">
                    <Link
                      to="/register"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-sm font-medium text-white hover:bg-teal-700 hover:text-white transition-all duration-200 hover:shadow-md"
                    >
                      Crea una Cuenta
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link
                      to="/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-sm font-medium text-white hover:bg-teal-700 hover:text-white transition-all duration-200 hover:shadow-md"
                    >
                      Iniciar sesion
                    </Link>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="bg-white bg-opacity-10 backdrop-blur-md backdrop-filter">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <div className="flex h-16 items-center justify-between">
              {/* Logo (lg+) */}
              <div className="hidden lg:flex lg:flex-1 lg:items-center">
                <Link to="/">
                  <span className="sr-only">Your Company</span>
                  <img className="h-24 w-auto" src="logo.png" alt="Logo" />
                </Link>
              </div>

              <div className="hidden h-full lg:flex">
                {/* Flyout menus */}
                <div className="flex h-full justify-center space-x-4">
                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.href}
                      className={classNames(
                        "flex items-center text-sm font-medium px-3 py-2 rounded-md transition-all duration-200",
                        location.pathname === page.href && page.name !== "INICIO"
                          ? "bg-customBlur text-white"
                          : "text-white hover:bg-customBlur hover:text-white"
                      )}
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile menu and search (lg-) */}
              <div className="flex flex-1 items-center lg:hidden">
                <button
                  type="button"
                  className="-ml-2 p-2 text-white hover:text-gray-300 transition duration-200"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Logo (lg-) */}
              <Link to="/" className="lg:hidden">
                <span className="sr-only">Your Company</span>
                <img src="tekne-sin-fondo.png" alt="Logo" className="h-20 w-auto" />
              </Link>

              {/* Search desk */}
              <div className="flex flex-1 items-center justify-end"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;