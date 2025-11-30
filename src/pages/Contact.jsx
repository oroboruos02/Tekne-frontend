import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [messageSent, setMessageSent] = useState(false);
  const [validationError, setValidationError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.user_name || !formData.user_email || !formData.message) {
      setValidationError('Por favor, complete todos los campos antes de enviar.');
      return;
    }

    setValidationError('');

    emailjs
      .sendForm('service_hgn5u12', 'template_e7dl3tu', form.current, {
        publicKey: '_JjlttY7AQ8L_wUlK',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setMessageSent(true);
          setFormData({
            user_name: '',
            user_email: '',
            message: ''
          });
          setTimeout(() => setMessageSent(false), 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <Menu />

      <div className="relative bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 min-h-screen flex flex-col">
        {/* SEO Meta Tags */}
        <Helmet>
        <title>Contacto - Tekne Soluciones | Solicita una Cotización</title>
        <meta name="description" content="Contáctanos para soluciones en automatización industrial. Ubicados en Bogotá, Colombia. Tel: +57 312 5657516 | Email: contacto@teknesoluciones.com" />
        <meta name="keywords" content="contacto tekne, cotización automatización, presupuesto industrial, contacto Bogotá, servicios eléctricos Colombia, solicitar cotización" />
        <link rel="canonical" href="https://www.teknesoluciones.com/contact" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.teknesoluciones.com/contact" />
        <meta property="og:title" content="Contacto - Tekne Soluciones" />
        <meta property="og:description" content="Ponte en contacto con nosotros. Calle 56 sur 90b25, Bogotá, Colombia. Tel: +57 312 5657516" />
        <meta property="og:image" content="https://www.teknesoluciones.com/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://www.teknesoluciones.com/contact" />
        <meta name="twitter:title" content="Contacto - Tekne Soluciones" />
        <meta name="twitter:description" content="Contáctanos para soluciones en automatización industrial." />
        <meta name="twitter:image" content="https://www.teknesoluciones.com/logo.png" />

        {/* Structured Data - LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Tekne Soluciones",
            "description": "Empresa especializada en automatización industrial y sistemas eléctricos",
            "url": "https://www.teknesoluciones.com",
            "telephone": "+57-312-5657516",
            "email": "contacto@teknesoluciones.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Calle 56 sur 90b25",
              "addressLocality": "Bogotá",
              "addressRegion": "Cundinamarca",
              "postalCode": "110931",
              "addressCountry": "CO"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "4.60971",
              "longitude": "-74.08175"
            },
            "openingHours": "Mo-Fr 08:00-18:00",
            "sameAs": [
              "https://www.facebook.com/teknesoluciones",
              "https://www.linkedin.com/company/teknesoluciones"
            ]
          })}
        </script>
      </Helmet>

      <Banner />

      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1)_0%,transparent_100%)]"></div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left side - Contact Info */}
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            {/* Decorative card background */}
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden lg:w-1/2">
              <div className="absolute inset-0 bg-dark-800/30 backdrop-blur-sm"></div>
              <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative animate-slide-up">
              {/* Title */}
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
                Ponte en <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Contacto</span>
              </h2>
              <p className="text-gray-400 mb-10">
                Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo pronto.
              </p>

              {/* Contact details */}
              <dl className="space-y-6 text-base leading-7">
                <div className="group flex gap-x-4 p-4 rounded-2xl bg-dark-800/50 backdrop-blur-sm border border-white/10 hover:border-primary-500/50 transition-all duration-300">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <div className="p-3 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl border border-primary-400/30">
                      <BuildingOffice2Icon className="h-6 w-6 text-primary-400" aria-hidden="true" />
                    </div>
                  </dt>
                  <dd className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    <p className="font-semibold text-white mb-1">Dirección</p>
                    Calle 56 sur 90b25
                    <br />
                    Bogotá, Colombia
                  </dd>
                </div>

                <div className="group flex gap-x-4 p-4 rounded-2xl bg-dark-800/50 backdrop-blur-sm border border-white/10 hover:border-primary-500/50 transition-all duration-300">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <div className="p-3 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl border border-primary-400/30">
                      <PhoneIcon className="h-6 w-6 text-primary-400" aria-hidden="true" />
                    </div>
                  </dt>
                  <dd className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    <p className="font-semibold text-white mb-1">Teléfonos</p>
                    <a className="hover:text-primary-400 transition-colors block" href="tel:+5718005381">
                      571 8005381
                    </a>
                    <a className="hover:text-primary-400 transition-colors block" href="tel:+573125657516">
                      +57 312 5657516 / +57 310 8581442
                    </a>
                  </dd>
                </div>

                <div className="group flex gap-x-4 p-4 rounded-2xl bg-dark-800/50 backdrop-blur-sm border border-white/10 hover:border-primary-500/50 transition-all duration-300">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <div className="p-3 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl border border-primary-400/30">
                      <EnvelopeIcon className="h-6 w-6 text-primary-400" aria-hidden="true" />
                    </div>
                  </dt>
                  <dd className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    <p className="font-semibold text-white mb-1">Correo electrónico</p>
                    <a className="hover:text-primary-400 transition-colors" href="mailto:contacto@teknesoluciones.com">
                      contacto@teknesoluciones.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
          <form ref={form} onSubmit={sendEmail} className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {/* Name field */}
              <div className="sm:col-span-2">
                <label htmlFor="nombre" className="block text-sm font-semibold leading-6 text-white mb-2">
                  Nombre y Apellido
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="user_name"
                    id="nombre"
                    autoComplete="given-name"
                    value={formData.user_name}
                    onChange={handleChange}
                    className="block w-full rounded-xl border-0 bg-dark-800/50 backdrop-blur-sm px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-all duration-300 sm:text-sm sm:leading-6"
                    placeholder="Tu nombre completo"
                  />
                </div>
              </div>

              {/* Email field */}
              <div className="sm:col-span-2">
                <label htmlFor="correo" className="block text-sm font-semibold leading-6 text-white mb-2">
                  Correo electrónico
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="user_email"
                    id="correo"
                    autoComplete="email"
                    value={formData.user_email}
                    onChange={handleChange}
                    className="block w-full rounded-xl border-0 bg-dark-800/50 backdrop-blur-sm px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-all duration-300 sm:text-sm sm:leading-6"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              {/* Message field */}
              <div className="sm:col-span-2">
                <label htmlFor="mensaje" className="block text-sm font-semibold leading-6 text-white mb-2">
                  Mensaje
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    id="mensaje"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-xl border-0 bg-dark-800/50 backdrop-blur-sm px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-all duration-300 sm:text-sm sm:leading-6 resize-none"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  />
                </div>
              </div>
            </div>

            {/* Validation error */}
            {validationError && (
              <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/30 animate-shake">
                <p className="text-sm text-red-400 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {validationError}
                </p>
              </div>
            )}

            {/* Success message */}
            {messageSent && (
              <div className="mt-4 p-4 rounded-xl bg-green-500/10 border border-green-500/30 animate-slide-down">
                <p className="text-sm text-green-400 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                </p>
              </div>
            )}

            {/* Submit button */}
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/50 btn-glow overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-2">
                  Enviar Mensaje
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

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
      </div>
    </>
  );
}
