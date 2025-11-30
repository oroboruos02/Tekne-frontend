import React from 'react';
import { Link } from 'react-router-dom';

const footerNavigation = {
  Comprar: [
    { name: 'Servicios', href: '/services' },
  ],
  company: [
    { name: 'Quienes somos', href: '/who' },
    { name: 'Sostenibilidad', href: '#' },
  ],
  account: [
    { name: 'Administrar cuenta', href: '#' },
  ],
  connect: [
    { name: 'Contacta con nosotros', href: '/contact' },
    { name: 'Teléfono: 571 8005381', href: '#' },
    { name: 'Celular:  +573125657516 / +57 3108581442', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="relative bg-dark-950 border-t border-white/10">
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
            {/* Servicios */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></span>
                Servicios
              </h3>
              <ul role="list" className="space-y-3">
                {footerNavigation.Comprar.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center gap-2 group">
                      <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {item.name}
                    </Link>
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
                    <Link to={item.href} className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center gap-2 group">
                      <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {item.name}
                    </Link>
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
                    <Link to={item.href} className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-300 block">
                      {item.name}
                    </Link>
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
  );
}
