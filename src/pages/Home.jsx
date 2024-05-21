import React from 'react';
import { Fragment, useState } from 'react';
import { Dialog, Popover, Tab, Transition } from '@headlessui/react';
import {Bars3Icon,XMarkIcon,} from '@heroicons/react/24/outline';

const navigation = {
  categories: [

  ],
  pages: [
    { name: 'INICIO', href: '/' },
    { name: 'QUIENES SOMOS', href: './who' },
    { name: 'DIRECTORIO DE AUTOMATIZACION', href: './directory' },
    { name: 'SERVICIOS', href: './services' },
    { name: 'EXPERIENCIAS', href: './experiences' },
  ],
}

const categories = [
  {
    name: 'Suministro de Personal Técnico',
    href: './Services',
    imageSrc: 'https://www.glingenieros.com.co/wp-content/uploads/2020/09/subestacion-elec31.jpg',
  },
  {
    name: 'Comunicaciones',
    href: './Services',
    imageSrc: 'https://www.coinsi.com/wp-content/uploads/2021/09/COINSI-SUBESTACIONES-scaled.jpg',
  },
  {
    name: 'Montaje Electromecánico',
    href: './Services',
    imageSrc: 'https://d100mj7v0l85u5.cloudfront.net/s3fs-public/tableros-y-subestaciones-electricas-de-GL-Ingenieros-122147-g.jpg',
  },
  {
    name: 'Cableado y Conexionado',
    href: './Services',
    imageSrc: 'https://rentadeplantas.com.mx/wp-content/uploads/2021/08/fallas-comunes-subestaciones-electricas.jpg',
  },
  { name: 'Mantenimiento', href: './Services', imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn1TzOXv_Ved3pAkBPiKzE5J2saU-Umw-xhA&usqp=CAU' },
]
const collections = [
  {
    name: 'Control Industrial',
    href: './Services',
    imageSrc: 'https://images.contentstack.io/v3/assets/bltea08f3d94a418a1b/bltc4257d25ffa89304/6360183adf424e41894cc76a/Bay-Control-hero.jpg',
    imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
    description: 'Diseñamos, ensamblamos y ponemos en servicio tableros y consolas de control automático de procesos industriales.',
  },
  {
    name: 'Instrumentación',
    href: './Services',
    imageSrc: 'https://images.contentstack.io/v3/assets/bltea08f3d94a418a1b/bltc4257d25ffa89304/6360183adf424e41894cc76a/Bay-Control-hero.jpg',
    imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
    description: 'Realizamos la instalación y configuración de instrumentación industrial en áreas de proceso clasificadas, cumpliendo con las normativas NEMA 4X y 7.',
  },
  {
    name: 'Áreas Clasificadas',
    href: './Services',
    imageSrc: 'https://images.contentstack.io/v3/assets/bltea08f3d94a418a1b/bltc4257d25ffa89304/6360183adf424e41894cc76a/Bay-Control-hero.jpg',
    imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
    description: 'Ofrecemos instalaciones eléctricas y de control en áreas clasificadas, realizando montajes que cumplen con los estándares de seguridad explosion proof.',
  },
]
const footerNavigation = {
  Comprar: [
    { name: 'Servicios', href: './services' },
  ],
  company: [
    { name: 'Quienes somos', href: './who' },
    { name: 'Sostenibilidad', href: '#' },

  ],
  account: [
    { name: 'Administrar cuenta', href: '#' },
  ],
  connect: [
    { name: 'Contacta con nosotros', href: './contact' },
    { name: 'Teléfono: 571 8005381', href: '#' },
    { name: 'Celular: 3132336061 / 3108581442', href: '#' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Mobile menu */}
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
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel key={category.name} className="space-y-12 px-4 py-6">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                          {category.featured.map((item) => (
                            <div key={item.name} className="group relative">
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                              </div>
                              <a href={item.href} className="mt-6 block text-sm font-medium text-gray-900">
                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1 text-sm text-gray-500">
                                Ir
                              </p>
                            </div>
                          ))}
                        </div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a href="./register" className="-m-2 block p-2 font-medium text-gray-900">
                      Crea una Cuenta
                    </a>
                  </div>
                  <div className="flow-root">
                    <a href="./login" className="-m-2 block p-2 font-medium text-gray-900">
                      Iniciar Sesion
                    </a>
                  </div>
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {/* Currency selector */}
                  <form>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Hero section */}
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

        {/* Navigation */}
        <header className="relative z-10">
          <nav aria-label="Top">
            {/* Top navigation */}
            <div className="bg-gray-900">
              <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Currency selector */}
                <form>
                </form>

                <div className="flex items-center space-x-6">
                  <a href="./login" className="text-sm font-medium text-white hover:text-gray-100">
                    Iniciar Sesion
                  </a>
                  <a href="./register" className="text-sm font-medium text-white hover:text-gray-100">
                    Crear una Cuenta
                  </a>
                </div>
              </div>
            </div>

            {/* Secondary navigation */}
            <div className="bg-white bg-opacity-10 backdrop-blur-md backdrop-filter">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div>
                  <div className="flex h-16 items-center justify-between">
                    {/* Logo (lg+) */}
                    <div className="hidden lg:flex lg:flex-1 lg:items-center">
                      <a href="#">
                        <span className="sr-only">Your Company</span>
                        <img
                          className="h-16 w-auto"
                          src="https://imgur.com/Lvbu5Sv.png"
                          alt=""
                        />
                      </a>
                    </div>

                    <div className="hidden h-full lg:flex">
  {/* Flyout menus */}
  <Popover.Group className="inset-x-0 bottom-0 px-4">
    <div className="flex h-full justify-center space-x-8">
      {navigation.pages.map((page) => (
        <a key={page.name} href={page.href} className="flex items-center text-sm font-medium text-white">
          {page.name}
        </a>
      ))}

      {navigation.categories.map((category) => (
        <Popover key={category.name} className="flex">
          {({ open }) => (
            <>
              <div className="relative flex">
                <Popover.Button className="relative z-10 flex items-center justify-center text-sm font-medium text-white transition-colors duration-200 ease-out">
                  {category.name}
                  <span
                    className={classNames(
                      open ? 'bg-white' : '',
                      'absolute inset-x-0 -bottom-px h-0.5 transition duration-200 ease-out'
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                  {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                  <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                  <div className="relative bg-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                      <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                        {category.featured.map((item) => (
                          <div key={item.name} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                              <img
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                className="object-cover object-center"
                              />
                            </div>
                            <a href={item.href} className="mt-4 block font-medium text-gray-900">
                              <span className="absolute inset-0 z-10" aria-hidden="true" />
                              {item.name}
                            </a>
                            <p aria-hidden="true" className="mt-1">
                              Ir
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      ))}
    </div>
  </Popover.Group>
</div>

                    {/* Mobile menu and search (lg-) */}
                    <div className="flex flex-1 items-center lg:hidden">
                      <button type="button" className="-ml-2 p-2 text-white" onClick={() => setMobileMenuOpen(true)}>
                        <span className="sr-only">Open menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Search movile*/}
                    </div>

                    {/* Logo (lg-) */}
                    <a href="#" className="lg:hidden">
                      <span className="sr-only">Your Company</span>
                      <img src="https://imgur.com/Lvbu5Sv.png" alt="" className="h-8 w-auto" />
                    </a>
                    {/* Search desk */}
                    <div className="flex flex-1 items-center justify-end">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">Tekne Solutions: Energizando el Futuro con Automatización de Vanguardia </h1>
          <p className="mt-4 text-xl text-white">
          Pioneros en Subestaciones y Automatización Industrial ¡Disfruta tu visita!.
          </p>
          <a
            href="./contact"
            className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            Contáctenos
          </a>
        </div>
      </div>

      <main>
        {/* Category section */}
        <section aria-labelledby="category-heading" className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
            <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">
              Servicios por Categoria
            </h2>
            <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
              Buscar todas las Categorias
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div className="mt-4 flow-root">
            <div className="-my-2">
              <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                  {categories.map((category) => (
                    <a
                      key={category.name}
                      href={category.href}
                      className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                    >
                      <span aria-hidden="true" className="absolute inset-0">
                        <img src={category.imageSrc} alt="" className="h-full w-full object-cover object-center" />
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                      />
                      <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 px-4 sm:hidden">
            <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </section>

        {/* Featured section */}
        <section
          aria-labelledby="social-impact-heading"
          className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8"
        >
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              <img
                src="https://www.tecsaqro.com.mx/wp-content/uploads/2020/08/mantenimiento_subestaciones_electricas.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
              <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                <h2 id="social-impact-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <span className="block sm:inline">Ensamble y Diseño de Tableros de Control y Distribución</span>
                </h2>
                <p className="mt-3 text-xl text-white">
                Ofrecemos diseño y ensamble de tableros de control y distribución en baja tensión, adaptados a las necesidades y requerimientos específicos del cliente y el proceso. Nuestros productos cumplen con altos estándares de calidad y utilizan materiales certificados y aprobados según las normativas RETIE y NTC 2050.
                </p>
                <a
                  href="./services"
                  className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                >
                  Ver
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Collection section */}
        <section
          aria-labelledby="collection-heading"
          className="mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8"
        >
          <h2 id="collection-heading" className="text-2xl font-bold tracking-tight text-gray-900">
            Otros Servicios
          </h2>
          <p className="mt-4 text-base text-gray-500">
          "Explora nuestro Sitio y descubre una amplia variedad de recursos, productos y servicios diseñados para satisfacer tus necesidades. Ya sea que busques información, soluciones prácticas o inspiración, estamos aquí para ayudarte. Navega con facilidad y encuentra exactamente lo que necesitas."
          </p>

          <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
            {collections.map((collection) => (
              <a key={collection.name} href={collection.href} className="group block">
                <div
                  aria-hidden="true"
                  className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                >
                  <img
                    src={collection.imageSrc}
                    alt={collection.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">{collection.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{collection.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section aria-labelledby="comfort-heading" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
  <div className="relative overflow-hidden rounded-lg">
    <div className="absolute inset-0">
      <img
        src="https://www.fundacionendesa.org/content/dam/fundacion-endesa-com/actividadesyvisitas/hero-subestaciones-electricas.jpg"
        alt=""
        className="h-full w-full object-cover object-center"
      />
    </div>
    <div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 id="comfort-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Venta y Suministro de Materiales
        </h2>
        <ul className="mt-3 text-xl text-white">
          <li>Proveemos y suministramos materiales de control y fungibles para tableristas, incluyendo:</li>
          <li>- Bornes en todas sus líneas, control y fuerza.</li>
          <li>- Cables de control y fuerza con certificación de marcas reconocidas.</li>
          <li>- Terminales de control y potencia en marcas certificadas.</li>
        </ul>
        <a
          href="./services"
          className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
        >
          Ver
        </a>
      </div>
    </div>
  </div>
</section>
      </main>
      
      {/* Logo Clouds */}
      <div className="bg-gradient-to-b from-gray-900 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-white">
          Con la confianza de las compañías más innovadoras del mundo
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src="https://axongroup.com.co/wp-content/uploads/logo-axon-group-blanco.svg"
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src="https://www.ebsa.com.co/images/logo/logo.png"
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src="https://lirp.cdn-website.com/9f80eacf/dms3rep/multi/opt/logo-blanco-162w.png"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-20 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://disico.com.co/wp-content/uploads/2020/05/Logo-DISICO.webp"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://www.rymsoluciones.net/logorm.png"
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>

      {/* footer */}
<footer aria-labelledby="footer-heading" className="bg-gray-900">
  <h2 id="footer-heading" className="sr-only">Footer</h2>
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="py-20 xl:flex xl:justify-center xl:gap-8">
      <div className="grid grid-cols-2 gap-8 xl:grid-cols-4 xl:gap-16 text-center">
        <div className="space-y-12">
          <h3 className="text-sm font-medium text-white">Comprar</h3>
          <ul role="list" className="mt-6 space-y-6">
            {footerNavigation.Comprar.map((item) => (
              <li key={item.name} className="text-sm">
                <a href={item.href} className="text-gray-300 hover:text-white">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-12">
          <h3 className="text-sm font-medium text-white">Compañia</h3>
          <ul role="list" className="mt-6 space-y-6">
            {footerNavigation.company.map((item) => (
              <li key={item.name} className="text-sm">
                <a href={item.href} className="text-gray-300 hover:text-white">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-12">
          <h3 className="text-sm font-medium text-white">Cuenta</h3>
          <ul role="list" className="mt-6 space-y-6">
            {footerNavigation.account.map((item) => (
              <li key={item.name} className="text-sm">
                <a href={item.href} className="text-gray-300 hover:text-white">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-12">
          <h3 className="text-sm font-medium text-white">Conectar</h3>
          <ul role="list" className="mt-6 space-y-6">
            {footerNavigation.connect.map((item) => (
              <li key={item.name} className="text-sm">
                <a href={item.href} className="text-gray-300 hover:text-white">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-800 py-10 text-center">
      <p className="text-sm text-gray-400">Copyright &copy; 2024 Tekne</p>
    </div>
  </div>
</footer>
      
      {/* WhatsApp bottom */}
      <div className="fixed bottom-10 right-10 z-10">
          <a href="https://api.whatsapp.com/send?phone=+573132336061&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n." target="_blank" rel="noopener noreferrer" className="block bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300" aria-label="WhatsApp">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png" alt="WhatsApp Icon" className="h-6 w-6 text-white" />
          </a>
      </div>
    </div>
  )
}