import React, { useRef, useState } from 'react';
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import emailjs from '@emailjs/browser';

export default function Example() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [messageSent, setMessageSent] = useState(false); // Estado para manejar el mensaje de confirmación
  const [validationError, setValidationError] = useState(''); // Estado para manejar el mensaje de error

  const sendEmail = (e) => {
    e.preventDefault();

    // Validación de campos
    if (!formData.user_name || !formData.user_email || !formData.message) {
      setValidationError('Por favor, complete todos los campos antes de enviar.');
      return;
    }

    setValidationError(''); // Limpiar el mensaje de error si pasa la validación

    emailjs
      .sendForm('service_hgn5u12', 'template_e7dl3tu', form.current, {
        publicKey: '_JjlttY7AQ8L_wUlK',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setMessageSent(true); // Mostrar el mensaje de éxito
          // Limpiar los campos del formulario
          setFormData({
            user_name: '',
            user_email: '',
            message: ''
          });
          // Ocultar el mensaje de éxito después de 5 segundos
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
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contacto</h2>

            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  Calle 56 sur 90b25
                  <br />
                  Bogotá-Colombia
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-gray-900" href="tel:+1 (555) 234-5678">
                    571 8005381
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-gray-900" href="tel:+1 (555) 234-5678">
                    +57 3125657516 / +57 3108581442
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Correo</span>
                  <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-gray-900" href="mailto:teknesoluciones2@gmail.com">
                    contacto@teknesoluciones.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold leading-6 text-gray-900">
                  Nombre y Apellido
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="user_name"
                    id="nombre"
                    autoComplete="given-name"
                    value={formData.user_name}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="correo" className="block text-sm font-semibold leading-6 text-gray-900">
                  Correo electrónico
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="user_email"
                    id="correo"
                    autoComplete="email"
                    value={formData.user_email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="mensaje" className="block text-sm font-semibold leading-6 text-gray-900">
                  Mensaje
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="mensaje"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>


            {validationError && ( // Mostrar el mensaje de error de validación
              <div className="mt-2 text-sm text-red-600">{validationError}</div>
            )}



            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Enviar Mensaje
              </button>
            </div>
            {messageSent && ( // Mostrar el mensaje de confirmación si el mensaje fue enviado
              <div className="mt-4 text-sm text-green-600">
                ¡Mensaje enviado con éxito!
              </div>
            )}
          </div>
        </form>
      </div>

      {/* WhatsApp bottom */}
      <div className="fixed bottom-12 right-6 z-10">
        <a href="https://api.whatsapp.com/send?phone=+573132336061&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n." target="_blank" rel="noopener noreferrer" className="block bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300" aria-label="WhatsApp">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png" alt="WhatsApp Icon" className="h-6 w-6 text-white" />
        </a>
      </div>
    </div>
  );
}