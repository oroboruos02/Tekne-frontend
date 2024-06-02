import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTopButton from '../components/ScrollToTopButton';

function Directory() {
  const companies = [
    { name: 'Axon Group Ltda', web: 'https://axongroup.com.co/', contact: 'sede principal Colombia,<br/>Support@Axongoup.com.co<br/>linea telefonica: +57 1 755 99 00', country: 'Colombia' },
    { name: 'HMV Ingenerios', web: 'https://www.h-mv.com/', contact: 'HVM Ingenieros Ltda.<br/>Bogota Calle 70 # 7-30 Pisos 3,4,5 y 7 Edificio Septima Setenta<br/>Tel:(57)601 643 9500, Fax:(57)601 211 4577', country: 'Colombia' },
    { name: 'Siemens SAS', web: 'https://www.siemens.com/global/en.html', contact: 'Colombia / 250201 Tenjo / Autopista Medellin KM 8.5<br/>+57 604 3253066<br/>+57 320 4844719<br/>melisa.abad@siemens.com', country: 'Alemania' },
    { name: 'Potencia y tecnologias incorporadas S.A', web: 'https://www.pti-sa.com.co/es/', contact: 'Cali (Principal)<br/>Av. Guadalupe # 2-50<br/>Tel: +57 2 336-6461', country: 'Colombia' },
    { name: 'SEL Colombia', web: 'https://selinc.com/', contact: 'Bogota, Colombia<br/>Tel: (+57) 1 823 7561', country: 'USA' },
    { name: 'Hitachi Energy Colombia', web: 'https://www.hitachienergy.com/latam/es', contact: 'Hitachi Energy Colombia<br/>Avenida Carrera 45 Nro 108-27.Torre 1. Piso 13 Bogota Cundinamarca', country: 'Suiza' },
    { name: 'Automatizacion Avanzada', web: 'https://automatizacionavanzada.com/', contact: 'Fontibon la Cofradia cr.97 - #24c-23 BG: 1, Bogota D.C, Colombia<br/>productos@automatizacionavanzada.com<br/>servicioalcliente@automatizacionavanzada.com<br/>PBX: +57(601) 547 8510 CEL: 3178936495', country: 'Colombia' },
    { name: 'Acovis', web: 'https://acovis.com.co/', contact: 'Calle 129a # 54 – 63, Bodega 105<br/>Prado Veraniego, Bogotá D.C. Colombia<br/>Movil: +57 (311) 528 4174<br/>ccontreras@acovis.com.co', country: 'Venezuela' },
  ];

  const equipmentRental = [
    // Datos de ejemplo para la tabla "Alquiler de equipos"
    { name: 'Robustus SAS', web: 'https://alquileromicron.com/', contact: 'Calle 159 # 19A-20 Apto 409<br/>Bogotá, Colombia<br/>Whatsapp: (+57) 314 4379913<br/>Email: comercial@alquileromicrom.com', country: 'Colombia' },
    { name: 'Axon Group Ltda', web: 'https://axongroup.com.co/servicios/servicio-de-alquiler-de-maleta-omicron-cmc-356/', contact: 'Sede Principal Colombia<br/>support@axongroup.com.co<br/>comercial@axongroup.com.co<br/>Telefono +57 1 755 99 00', country: 'Colombia' },
    { name: 'Automatizacion Avanzada', web: 'https://automatizacionavanzada.com/', contact: 'Fontibón La Cofradía Cr. 97 - #24C - 23 BG: 1,<br/>Bogotá D.C., Colombia<br/>productos@automatizacionavanzada.com<br/>servicioalcliente@automatizacionavanzada.com<br/>PBX: +57(601) 547 8510 CEL: 3178936495', country: 'Colombia' },
    { name: 'Erasmus SAS', web: 'https://www.erasmus.com.co/', contact: 'Contáctanos en Bogotá - Colombia:, Sede Principal: Calle 39 # 19 - 32 Laboratorio: Cra. 17 # 39 - 58<br/>Teléfonos: +601 486 4030', country: 'Colombia' },
    { name: 'ATA Electric', web: 'https://www.ataelectric.com/alquiler-de-omicron', contact: '57 305 417 59 53<br/>+57 316 280 7523<br/>ventas@ataelectric.com<br/>Carrera 50 # 79-85 Oficina 301, Bogotá, Colombia', country: 'Colombia' },
    { name: 'FOCUS ENERGY S.A.S.', web: 'https://www.focusenergy.com.co/Productos_servicios_Alquiler_pruebas.html', contact: 'Colombia, Cúcuta, Norte de santander<br/>+57 318 352 9899<br/>gerencia@focusenergy.com.co', country: 'Colombia' },
  ];

  const technicalSupplies = [
    // Datos de ejemplo para la tabla "Suministros técnicos"
    { name: 'Tekne Soluciones', web: 'www.teknesoluciones.com', contact: 'teknesoluciones2@gmail.com', country: 'Colombia' },
  ];

  const protections = [
    // Datos de ejemplo para la tabla "Protecciones"
    { name: 'Phase Ing', web: 'https://phaseing.com/', contact: 'Calle 23G # 81-76, Modelia - Bogotá, Colombia<br/>+57 1 4420292<br/>+57 323 2058230<br/>+57 3002237261<br/>Email: Info@phaseing.com', country: 'Colombia' },
    { name: 'GERS S.A.S', web: 'https://www.gers.com.co/', contact: 'Cali, Calle 3A #65-118<br/>+602 489 7000<br/>gers@gers.com.co', country: 'Colombia'},
    { name: 'Axon Group Ltda', web: 'https://axongroup.com.co/servicios/servicio-de-alquiler-de-maleta-omicron-cmc-356/', contact: 'Sede Principal Colombia<br/>support@axongroup.com.co<br/>comercial@axongroup.com.co<br/>Telefono +57 1 755 99 00', country: 'Colombia' },
    { name: 'DAGELEC LTDA', web: 'https://dagelec.com/', contact: 'Bogota D.C. Colombia<br/>CL: 21 NO 69B-74<br/>Email :comercial@dagelec.com<br/>Mobile : +57 3188041779 / +57 3158773317', country: 'Colombia' },
    { name: 'Esprelc S.A.S', web: 'https://esprelc.com/', contact: 'Celular +57 321 2204953,<br/>Telefono (+57) 601 6210229<br/>Correo contacto@esprelc.com<br/>Ubicación Calle 23G # 80B-69 Bogotá, Colombia', country: 'Colombia' },
  ];

  const panels = [
    // Datos de ejemplo para la tabla "Tableros"
    { name: 'Dimelectrico', web: 'https://dimelectrico.com/', contact: 'Calle 17 No. 12 -92 Piso 4 Edificio Avella<br/>ventasvirtuales@dimelectrico.com<br/>3153965039', country: 'Colombia' },
    { name: 'REDES & MONTAJES LTDA', web: 'https://www.redesymontajes.com/', contact: 'Dirección: Carrera 9a # 65 - 72 Chapinero<br/>Teléfono: 4 72 71 06, http://www.redesymontajes.com', country: 'Colombia' },
    { name: 'ECTRICOL SAS', web: 'https://www.ectricol.com/', contact: 'PBX 601 7431415<br/>Ventas: +57 316 5690783<br/>contactenos@ectricol.com<br/>Km 7.1 Aut. Medellín Parque Industrial Celta Bodega 119', country: 'Colombia' },
    { name: 'Soluciones MDS SAS', web: 'https://proelectricos.com/', contact: ' Calle 12A N° 21-21 de la ciudad de Bogotá D.C., Colombia<br/>Correo electrónico calidad@proelectricos.com<br/>Teléfono +57 (1) 2471255', country: 'Colombia' },
  ];

  const relays = [
    {
      name: 'Siemens',
      model: 'Siprotec',
      representative: 'Axon Group Ltda.<br/>PTI S.A',
      web: 'www.axongroup.com.co<br/>www.pti-sa.com.co/es/',
      contact: 'Sede Principal Colombia<br/>Cra 16D 155A 06<br/>comercial@axongroup.com.co<br/>Telefono +57 1 755 99 00<br/>Cali Colombia<br/>Av. Guadalupe # 2-50<br/>https://www.pti-sa.com.co/es/contacto<br/>Telefono +57 2 336-6461',
    },
    {
      name: 'Siemens',
      model: 'Ruggedcom',
      representative: 'Axon Group Ltda<br/>Kinnesis Solutions',
      web: 'www.axongroup.com.co<br/>www.kinnesis.com/',
      contact: 'Sede Principal Colombia<br/>Cra 16D 155A 06<br/>comercial@axongroup.com.co<br/>Telefono +57 1 755 99 00<br/><br/>Medellín - Colombia<br/>Cra 25 # 1 A Sur 155 - Edificio Platinum<br/>Superior Oficina 1453<br/>Celular +57 316 527 79 74',
    },
    {
      name: 'SEL',
      model: 'Reles SEL, GPS, Gateway RTAC',
      representative: 'SEL Colombia',
      web: 'selinc.com/es/',
      contact: 'Bogotá, Colombia<br/>Teléfono: (+57) 1 823 7561',
    },
    {
      name: 'GE',
      model: 'Reles, GPS',
      representative: 'Automatizacion Avanzada<br/>MicroDYNE - S.A.S.',
      web: 'automatizacionavanzada.com/<br/>microdynesas.com/',
      contact: 'Bogotá D.C., Colombia<br/>Fontibón La Cofradía Cr. 97 - #24C - 23 BG: 1<br/>servicioalcliente@automatizacionavanzada.com<br/>PBX: +57(601) 547 8510 CEL: 3178936495<br/><br/>Medellín, Colombia<br/>Cra 75DA N. 2B sur 320 Int 829<br/>https://microdynesas.com/contactenos<br/>(4) 6046067994 Cel: +573234477927',
    },
    {
      name: 'ABB',
      model: 'Reles',
      representative: 'ABB COLOMBIA LTDA',
      web: 'new.abb.com/medium-voltage/digital-substations',
      contact: 'Bogotá, Colombia<br/>Avenida Carrera 45 No. 108-27, Torre 1, Piso 12<br/>Centro Empresarial Paralelo 108 (Autopista Norte)<br/>Freddy Rondón +57 3132433512',
    },
    {
      name: 'EATON',
      model: 'GATEWAY SMP',
      representative: 'Automatizacion Avanzada',
      web: 'automatizacionavanzada.com/',
      contact: 'Bogotá, Colombia<br/>Fontibón La Cofradía Cr. 97 - #24C - 23 BG: 1,<br/>productos@automatizacionavanzada.com<br/>servicioalcliente@automatizacionavanzada.com<br/>PBX: 57(601) 547 8510 CEL: 3178936495',
    },
  ];
  
  const renderTable = (title, data) => {
    if (title === 'Empresas que distribuyen equipos para la Automatización, como Reles, GPS, Gateway de Comunicación, Switchs') {
      return (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-3 px-4 border border-gray-300">EMPRESA</th>
                  <th className="py-3 px-4 border border-gray-300">MODELO</th>
                  <th className="py-3 px-4 border border-gray-300">REPRESENTANTE</th>
                  <th className="py-3 px-4 border border-gray-300">WEB</th>
                  <th className="py-3 px-4 border border-gray-300">CONTACTO</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {data.map((relay, index) => {
                  const isLast = index === data.length - 1;
                  return (
                    <tr key={index} className="bg-gray-100 hover:bg-gray-200">
                      <td className="py-3 px-4 border border-gray-300">{relay.name}</td>
                      <td className="py-3 px-4 border border-gray-300">
                        <div className="mb-1 h-20 flex items-center justify-center">
                          {relay.model}
                        </div>
                      </td>
                      <td className="py-3 px-4 border border-gray-300 w-3/12">
                        {relay.representative.split('<br/>').map((company, idx) => {
                          const isAxon = company.includes('Axon Group Ltda');
                          const isPTI = company.includes('PTI S.A');
                          const isKinnesis = company.includes('Kinnesis Solutions');
                          const isAutomatizacion = company.includes('Automatizacion Avanzada');
                          const isMicroDYNE = company.includes('MicroDYNE - S.A.S.');
                          const isSEL = company.includes('SEL Colombia');
                          const isABB = company.includes('ABB COLOMBIA LTDA');
                          const noBorderBottom = (isAutomatizacion && isLast) || isPTI || isKinnesis || isMicroDYNE || isSEL || isABB;
                          return (
                            <div key={idx} className={noBorderBottom ? 'mb-1 h-20 flex items-center justify-center' : 'mb-1 border-b h-20 flex items-center justify-center border-gray-300'}>
                              {company}
                            </div>
                          );
                        })}
                      </td>
                      <td className="py-3 px-4 border border-gray-300">
                        {relay.web.split('<br/>').map((url, idx) => {
                          const isSpecialUrl = url.includes('www.axongroup.com.co') || url.includes('www.pti-sa.com.co/es/') || url.includes('www.kinnesis.com/') || url.includes('automatizacionavanzada.com/') || url.includes('microdynesas.com/') || url.includes('selinc.com/es/') || url.includes('new.abb.com/medium-voltage/digital-substations');
                          const noBorderBottom = url.includes('www.pti-sa.com.co/es/') || url.includes('www.kinnesis.com/') || url.includes('microdynesas.com/') || url.includes('selinc.com/es/') || url.includes('new.abb.com/medium-voltage/digital-substations') || (url.includes('automatizacionavanzada.com/') && isLast);
                          return (
                            <div key={idx} className={noBorderBottom ? 'mb-1 h-20 flex items-center justify-center' : isSpecialUrl ? 'mb-1 border-b h-20 flex items-center justify-center border-gray-300' : 'mb-1'}>
                              <a href={`http://${url}`} className="text-blue-500 hover:underline block" target="_blank" rel="noopener noreferrer">{url}</a>
                            </div>
                          );
                        })}
                      </td>
                      <td className="py-3 px-4 border border-gray-300">
                        {relay.contact.split('<br/>').map((contact, idx, arr) => {
                          const noBorderBottom = !(contact.includes('Telefono +57 1 755 99 00') ||
                            contact.includes('PBX: +57(601) 547 8510 CEL: 3178936495'));
                          return (
                            <div
                              key={idx}
                              className={noBorderBottom ? 'mb-1' : 'mb-1 border-b border-gray-300'}
                            >
                              {contact}
                            </div>
                          );
                        })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
    } else {
      return (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-3 px-4 uppercase font-semibold text-sm text-left">Empresa</th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm text-left">Web</th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm text-left">Contacto</th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm text-left">País de Origen</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {data.map((entry, index) => (
                  <tr key={index} className="bg-gray-100 hover:bg-gray-200">
                    <td className="py-3 px-4">{entry.name}</td>
                    <td className="py-3 px-4">
                      <a href={entry.web} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                        {entry.web}
                      </a>
                    </td>
                    <td className="py-3 px-4" dangerouslySetInnerHTML={{ __html: entry.contact }} />
                    <td className="py-3 px-4">{entry.country}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <main className="flex-grow mt-6 p-6">
        <h1 className="text-4xl font-bold text-center mb-6">Directorio de Automatización Subestaciones Eléctricas</h1>
        
        {/* Menú de navegación */}
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center space-x-4">
            <li><a href="#companies" className="text-blue-500 hover:underline">Subestaciones electricas</a></li>
            <li><a href="#equipmentRental" className="text-blue-500 hover:underline">Alquiler de Equipos</a></li>
            <li><a href="#technicalSupplies" className="text-blue-500 hover:underline">Suministros Técnicos</a></li>
            <li><a href="#protections" className="text-blue-500 hover:underline">Protecciones</a></li>
            <li><a href="#panels" className="text-blue-500 hover:underline">Tableros</a></li>
            <li><a href="#relays" className="text-blue-500 hover:underline">Relés</a></li>
          </ul>
        </nav>

        {/* Renderizado de las tablas */}
        {/* Cada tabla debe tener un ID correspondiente */}
        <div id="companies">
          {renderTable('Empresas que ofrecen proyectos para automatización Subestaciones Eléctricas', companies)}
        </div>
        <div id="equipmentRental">
          {renderTable('Alquiler de equipos: Omicron CMC 356', equipmentRental)}
        </div>
        <div id="technicalSupplies">
          {renderTable('Empresas de suministro de personal técnico para el desarrollo de proyectos en subestaciones eléctricas', technicalSupplies)}
        </div>
        <div id="protections">
          {renderTable('Empresas que ofrecen servicios de pruebas de Inyección en protecciones eléctricas', protections)}
        </div>
        <div id="panels">
          {renderTable('Empresas que ensamblan tableros de control y protección para subestaciones eléctricas', panels)}
        </div>
        <div id="relays">
          {renderTable('Empresas que distribuyen equipos para la Automatización, como Reles, GPS, Gateway de Comunicación, Switchs', relays)}
        </div>
      </main>

        {/* Nueva sección para la nota */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-8 mb-10">
          <div className="text-center text-gray-500">
            Los datos son tomados desde las páginas web de cada proveedor. Si desea que su empresa sea eliminada de nuestra lista o desea ser agregado como proveedor, por favor contáctenos.
          </div>
        </div>

      {/* Boton de regreso */}
      <div className="fixed bottom-14 right-6">
        <Link to="/">
          <button className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none">
            Regresar
          </button>
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <div className="flex flex-col space-y-4">
              <div className="text-lg font-semibold text-white">Sobre nosotros</div>
              <a href="#" className="text-base text-gray-300 hover:text-white">Equipo</a>
              <a href="#" className="text-base text-gray-300 hover:text-white">Carreras</a>
              <a href="#" className="text-base text-gray-300 hover:text-white">Contacto</a>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="text-lg font-semibold text-white">Legal</div>
              <a href="#" className="text-base text-gray-300 hover:text-white">Términos y Condiciones</a>
              <a href="#" className="text-base text-gray-300 hover:text-white">Política de Privacidad</a>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="text-lg font-semibold text-white">Síguenos</div>
              <div className="flex space-x-4">
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M21 0H3C1.346 0 0 1.346 0 3v18c0 1.654 1.346 3 3 3h9.36v-8.745h-2.854v-3.437h2.854v-2.486c0-2.825 1.728-4.357 4.237-4.357 1.2 0 2.232.09 2.534.13v2.94h-1.738c-1.362 0-1.63.648-1.63 1.598v2.095h3.257l-.427 3.438h-2.83V24H21c1.654 0 3-1.346 3-3V3c0-1.654-1.346-3-3-3z" />
                  </svg>
                </a>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.108 20c7.163 0 11.085-5.946 11.085-11.085 0-.168-.004-.336-.013-.502A7.918 7.918 0 0 0 22 5.912a7.68 7.68 0 0 1-2.256.62 3.953 3.953 0 0 0 1.73-2.18c-.76.446-1.596.77-2.488.948A3.914 3.914 0 0 0 15.86 4c-2.172 0-3.931 1.758-3.931 3.93 0 .308.036.605.104.895a11.162 11.162 0 0 1-8.077-4.085 3.963 3.963 0 0 0-.531 1.987 3.924 3.924 0 0 0 1.74 3.28 3.908 3.908 0 0 1-1.773-.48v.05c0 1.477 1.055 2.707 2.452 2.99a3.922 3.922 0 0 1-1.768.066 3.926 3.926 0 0 0 3.663 2.718 7.87 7.87 0 0 1-4.871 1.68A7.98 7.98 0 0 1 2 18.09a11.115 11.115 0 0 0 6.108 1.81" />
                  </svg>
                </a>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3zm7 4H6v10h3V7zm.5-2c.827 0 1.5-.673 1.5-1.5S10.327 2 9.5 2 8 2.673 8 3.5 8.673 5 9.5 5zM7 7.5C7 6.672 6.328 6 5.5 6S4 6.672 4 7.5 4.672 9 5.5 9 7 8.328 7 7.5zM19 14.25v-1.5c0-.414-.336-.75-.75-.75h-1.5c-.414 0-.75.336-.75.75v1.5c0 .414.336.75.75.75h1.5c.414 0 .75-.336.75-.75zm0-3v-1.5c0-.414-.336-.75-.75-.75h-1.5c-.414 0-.75.336-.75.75v1.5c0 .414.336.75.75.75h1.5c.414 0 .75-.336.75-.75zm0 6.75c0 .414-.336.75-.75.75h-1.5a.75.75 0 0 1-.75-.75v-4.5c0-.414.336-.75.75-.75h1.5c.414 0 .75.336.75.75v4.5zm1.988-6.787a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ScrollToTopButton />

      {/* WhatsApp bottom */}
      <div className="fixed bottom-12 right-36 z-10">
        <a href="https://api.whatsapp.com/send?phone=+573132336061&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n." target="_blank" rel="noopener noreferrer" className="block bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300" aria-label="WhatsApp">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png" alt="WhatsApp Icon" className="h-6 w-6 text-white" />
        </a>
      </div>
    </div>
  );
}

export default Directory;