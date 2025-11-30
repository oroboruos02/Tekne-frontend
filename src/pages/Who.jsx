import React from 'react';
import { Helmet } from 'react-helmet-async';
import Menu from '../components/Menu';
import Banner from '../components/Banner';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Footer from '../components/Footer';

function Who() {
  return (
    <>
      <Menu />

      <div className="bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 min-h-screen flex flex-col">
        {/* SEO Meta Tags */}
        <Helmet>
        <title>Quiénes Somos - Tekne Soluciones | Expertos en Automatización Industrial</title>
        <meta name="description" content="Conoce a Tekne Soluciones, tu socio de confianza en ingeniería de subestaciones eléctricas, automatización industrial y montajes eléctricos. Más de 10 años de experiencia." />
        <meta name="keywords" content="automatización industrial, ingeniería eléctrica, subestaciones eléctricas, montajes eléctricos, instrumentación, control automático, Tekne Soluciones, empresa Colombia" />
        <link rel="canonical" href="https://www.teknesoluciones.com/who" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.teknesoluciones.com/who" />
        <meta property="og:title" content="Quiénes Somos - Tekne Soluciones | Expertos en Automatización Industrial" />
        <meta property="og:description" content="Somos expertos en ingeniería de subestaciones eléctricas, automatización y control industrial. Soluciones innovadoras y de alta calidad." />
        <meta property="og:image" content="https://www.teknesoluciones.com/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.teknesoluciones.com/who" />
        <meta name="twitter:title" content="Quiénes Somos - Tekne Soluciones" />
        <meta name="twitter:description" content="Tu socio de confianza en automatización industrial y sistemas eléctricos." />
        <meta name="twitter:image" content="https://www.teknesoluciones.com/logo.png" />
      </Helmet>

      <Banner />
      <main className="isolate relative">
        {/* Hero section */}
        <div className="relative">
          {/* Decorative background elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1)_0%,transparent_100%)]"></div>

          <div className="relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 sm:pb-32 sm:pt-28 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl animate-slide-up">
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-2">
                    Conoce<span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">nos</span>
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-gray-300 sm:max-w-md lg:max-w-none">
                    En Tekne, somos más que solo un proveedor de servicios de ingeniería de subestaciones eléctricas. Nos enorgullece ser tu socio de confianza en cada paso del camino. Nuestro equipo está formado por expertos apasionados que se dedican a ofrecer soluciones innovadoras y de alta calidad que satisfacen tus necesidades específicas. Ya sea que estés buscando diseñar una nueva subestación, modernizar una existente o llevar a cabo mantenimiento preventivo, estamos aquí para ayudarte a alcanzar tus objetivos de manera eficiente y efectiva.
                  </p>
                </div>
                <div className="mt-14 lg:mt-0 lg:ml-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 backdrop-blur-md border border-white/10 p-10">
                    {/* Decorative glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-500/20 rounded-full blur-3xl"></div>

                    <div className="relative">
                      <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <svg className="w-6 h-6 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Tu Socio en Ingeniería de Subestaciones Eléctricas
                      </h2>
                      <p className="mt-4 text-base text-gray-300 leading-relaxed">
                        En TEKNE SOLUCIONES nos especializamos en montajes eléctricos, mantenimiento de celdas, cableado y conexionado de redes de comunicaciones, y ensamble de tableros de automatización y control. Además, proporcionamos personal técnico altamente capacitado para trabajos en fábrica y SAT.
                      </p>
                      <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl border border-white/20 text-primary-300 font-semibold text-sm">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Innovamos para su éxito
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission and Vision */}
        <section className="relative py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-x-24 items-start">
              <div className="group relative overflow-hidden rounded-3xl bg-dark-800/50 backdrop-blur-sm border border-white/10 hover:border-primary-500/50 transition-all duration-500 p-10 card-hover animate-slide-up">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary-500/20 rounded-2xl border border-primary-400/30">
                      <svg className="w-7 h-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-white">Misión</h2>
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Nuestra misión es entregar productos y servicios de excelencia y alta calidad, impulsando el desarrollo de proyectos de ingeniería y montajes eléctricos, así como de instrumentación y control automático. Además, ofrecemos una amplia gama de materiales, suministros y equipos eléctricos de vanguardia. Todo esto se realiza con un enfoque centrado en el cliente, utilizando tecnología de punta para garantizar el máximo beneficio. Nos comprometemos a mantener una revisión constante de nuestros procesos y riesgos en todas nuestras áreas, en búsqueda perpetua de la mejora continua y la excelencia en cada paso del proceso.
                  </p>

                  {/* Decorative line */}
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transition-all duration-500 group-hover:w-full"></div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-3xl bg-dark-800/50 backdrop-blur-sm border border-white/10 hover:border-secondary-500/50 transition-all duration-500 p-10 card-hover animate-slide-up" style={{ animationDelay: '0.1s' }}>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-secondary-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-secondary-500/20 rounded-2xl border border-secondary-400/30">
                      <svg className="w-7 h-7 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-white">Visión</h2>
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Nuestra visión es ser reconocidos por nuestra excelencia operativa y servicio al cliente excepcional, manteniendo siempre una cultura de mejora continua y un enfoque inflexible en la satisfacción del cliente. Aspiramos a ser referentes en la industria, estableciendo nuevos estándares de calidad y eficiencia, y contribuyendo al éxito y crecimiento sostenible de nuestros clientes.
                  </p>

                  {/* Decorative line */}
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full transition-all duration-500 group-hover:w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative pb-32">
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Nuestros <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Valores</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Comprometidos con la excelencia en cada proyecto
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:gap-12 sm:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                  title: "Soluciones Personalizadas",
                  description: "Diseñamos y desarrollamos soluciones de automatización industrial y eléctrica completamente personalizadas para satisfacer las necesidades específicas de tu empresa."
                },
                {
                  icon: "M13 10V3L4 14h7v7l9-11h-7z",
                  title: "Eficiencia y Productividad",
                  description: "Optimiza tus procesos industriales y eléctricos para aumentar la eficiencia y la productividad. Reducimos costos operativos y mejoramos el rendimiento general."
                },
                {
                  icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                  title: "Innovación Tecnológica",
                  description: "Incorporamos las últimas tecnologías en automatización industrial y eléctrica garantizando resultados óptimos y eficientes."
                },
                {
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                  title: "Soporte y Mantenimiento",
                  description: "Ofrecemos servicios integrales de soporte y mantenimiento para garantizar el funcionamiento óptimo y la confiabilidad de tus sistemas."
                }
              ].map((value, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-dark-800/50 backdrop-blur-sm border border-white/10 hover:border-primary-500/50 transition-all duration-500 p-8 card-hover animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon */}
                  <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl border border-primary-400/30 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {value.description}
                  </p>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-2xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative bg-dark-800/30 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto lg:text-center mb-16 animate-slide-up">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Lo que dicen <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">nuestros clientes</span>
              </h2>
              <p className="text-lg text-gray-400">
                Nuestro compromiso es con la satisfacción y el éxito de nuestros clientes. Escucha lo que tienen para decir sobre su experiencia con nosotros.
              </p>
            </div>

            <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-x-16">
              {[
                {
                  name: "María López",
                  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh3hXnE0vHfeNh-IUf6B-CMCmzg1hQKgpB-g&usqp=CAU",
                  text: "Nuestra colaboración con TEKNE SOLUCIONES ha sido excepcional. Su enfoque meticuloso y su capacidad para comprender nuestras necesidades específicas nos han permitido implementar soluciones eléctricas en tiempo récord. Desde el diseño inicial hasta la implementación final, su profesionalismo y atención al detalle han sido evidentes en cada etapa del proyecto. Gracias a su experiencia y dedicación, hemos logrado mejorar significativamente la eficiencia y la calidad de nuestros proyectos eléctricos."
                },
                {
                  name: "Yesid Anacona",
                  image: "yesid.webp",
                  text: "Teckne Soluciones nos ha ayudado en varios de nuestros proyectos, y siempre han demostrado un gran compromiso con su trabajo. Entregan a tiempo y con excelente calidad. La experiencia y el conocimiento que tienen en su campo son evidentes, y eso nos da mucha confianza en cada proyecto que ejecutamos con ellos. Además, son muy accesibles y siempre están dispuestos a resolver cualquier duda o inconveniente. Los recomiendo mucho, ya que son una empresa muy confiable y profesional."
                }
              ].map((testimonial, index) => (
                <div key={index} className="group relative overflow-hidden rounded-3xl bg-dark-800/50 backdrop-blur-sm border border-white/10 hover:border-primary-500/50 transition-all duration-500 p-10 card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 opacity-10">
                    <svg className="w-20 h-20 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>

                  <div className="relative flex flex-col items-center text-center">
                    <div className="mb-6 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-lg opacity-50"></div>
                      <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white/20">
                        <img className="w-full h-full object-cover" src={testimonial.image} alt={testimonial.name} />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{testimonial.name}</h3>

                    {/* Star rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>

                  {/* Decorative glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-3xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

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

      <ScrollToTopButton />
      </div>
    </>
  );
}

export default Who;
