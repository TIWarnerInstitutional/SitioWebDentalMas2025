import { useState } from 'react';

function CarouselQuienesSomos() {
  const slides = [
    {
      title: '¿Quiénes Somos?',
      img: '/FondoPrincipal.jpg',
  text: '<span style="color:#FE0000;font-weight:bold">En Dental Más®</span>  somos una red de <span style="color:#FE0000;font-weight:bold">clínicas odontológicas</span> comprometida con transformar la <span style="color:#FE0000;font-weight:bold">experiencia</span> de la <span style="color:#FE0000;font-weight:bold">salud bucal</span> en México. Creamos espacios modernos y humanos para tu salud bucal'
    },
    {
      title: 'Nuestra Misión',
      img: '/FondoPrincipal.jpg',
  text: 'Ofrecer <span style="color:#FE0000;font-weight:bold">tratamientos dentales</span> de alta calidad, con <span style="color:#FE0000;font-weight:bold">precios justos</span> y <span style="color:#FE0000;font-weight:bold">accesibles</span>, brindando un <span style="color:#FE0000;font-weight:bold">servicio humano</span>, cercano y <span style="color:#FE0000;font-weight:bold">profesional</span>.'
    },
    {
      title: 'Nuestra Visión',
      img: '/FondoPrincipal.jpg',
  text: 'Ser la red de clínicas dentales <span style="color:#FE0000;font-weight:bold">líder en México</span>, reconocida por la <span style="color:#FE0000;font-weight:bold">excelencia</span>, <span style="color:#FE0000;font-weight:bold">innovación</span> y el trato cálido a nuestros <span style="color:#FE0000;font-weight:bold">pacientes</span>.'
    }
  ];
    slides[0].author = 'Nosotros Somos';
    slides[1].author = 'Misión';
    slides[2].author = 'Visión';
  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);
  return (
    <div className="w-full flex flex-col md:flex-row items-stretch animate-fade-in" style={{ minHeight: '320px', maxHeight: '420px', height: '420px' }}>
      {/* Imagen a la izquierda, mismo alto que el texto */}
           <div className="md:w-[600px] w-full flex items-stretch">
        <img
          src={slides[current].img}
          alt={slides[current].title}
          className="rounded-2xl shadow-lg object-cover w-full h-full"
          style={{ minHeight: '320px', maxHeight: '420px', height: '420px' }}
        />
      </div>
      {/* Espacio central */}
      <div className="hidden md:block w-6" />
      {/* Texto a la derecha, más ancho y mismo alto que la imagen */}
        {/* Texto a la derecha, dentro de un card blanco */}
          <div className="md:w-[1200px] w-full flex flex-col justify-center items-center py-0" style={{ minHeight: '320px', maxHeight: '420px', height: '420px' }}>
          <div className="w-full h-full bg-white rounded-2xl shadow-lg flex flex-col justify-center px-6 md:px-10 py-6 md:py-8">
            <p className="text-base md:text-lg font-light text-gray-900 mb-4 leading-tight" style={{ wordBreak: 'break-word', hyphens: 'auto' }} dangerouslySetInnerHTML={{ __html: slides[current].text }} />
            <a href="#" className="text-[#FE0000] font-semibold mb-6 hover:underline">Leer toda la historia</a>
            <hr className="w-full my-6 border-gray-200" />
            <div className="mb-2">
              <span className="font-bold text-lg text-gray-900">{slides[current].author}</span>
            </div>
            <div className="text-gray-500 text-base mb-4">Clinicas Dental Más✨</div>
            <div className="flex gap-4 mt-8 justify-end w-full">
              <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-[#FFEAEA] hover:bg-[#FE0000]/10 text-[#FE0000] flex items-center justify-center shadow transition-all duration-300">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-[#FFEAEA] hover:bg-[#FE0000]/10 text-[#FE0000] flex items-center justify-center shadow transition-all duration-300">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}
import { FAQAccordion } from './faq';
import Head from 'next/head';
import Link from 'next/link';
import { FaMapMarkerAlt, FaMoneyBillWave, FaTooth, FaUserMd } from 'react-icons/fa';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import ChatbotWidget from '../components/ChatbotWidget.js';
import { trackDentalEvents } from '../utils/analytics.js';
import PromoBanner from '../components/PromoBanner.js';
import CarouselBanner from '../components/CarouselBanner.js';





export default function Home() {
  return (
    <>
      <Head>
        <title>Dental Más</title>
        <meta name="description" content="Dental Más: Más Ahorro, Más Calidad, Más Salud. Clínicas dentales modernas, atención profesional y resultados garantizados." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <PromoBanner />
      <Header />
      <main className="bg-white text-gray-800">
        {/* Hero Carrusel full-screen y responsivo */}
        <section className="relative w-full h-[85vh] min-h-[600px] flex flex-col items-stretch justify-start bg-white border-b overflow-hidden p-0 m-0">
          <div className="w-full h-full flex flex-col items-stretch justify-start">
            <CarouselBanner />
          </div>
        </section>

        {/* Secciones minimalistas y animadas */}
        {/* Sección Quienes Somos */}
  <section className="w-full py-20 flex justify-center items-center" style={{ background: '#FE0000' }}>
          <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
            <CarouselQuienesSomos />
          </div>
        </section>


        {/* Sección Sucursales */}
        <section className="w-full py-20 bg-white flex flex-col items-center animate-fade-in">
          <div className="max-w-4xl w-full flex flex-col items-center text-center">
            <h2 className="text-4xl font-bold mb-4 text-[#FE0000] animate-slide-up">Sucursales</h2>
            <p className="text-lg text-gray-700 mb-6 animate-fade-in">Contamos con sucursales en CDMX, Estado de México y Querétaro. Encuentra la más cercana y agenda tu cita.</p>
            <Link href="/Sucursales" className="mt-4 px-8 py-3 rounded-xl bg-[#FE0000] text-white font-semibold hover:bg-red-700 transition animate-pop">Ver sucursales</Link>
          </div>
        </section>

        {/* Sección Blog */}
        <section className="w-full py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 flex flex-col items-center animate-fade-in">
          <div className="max-w-4xl w-full flex flex-col items-center text-center">
            <h2 className="text-4xl font-bold mb-4 text-[#FE0000] animate-slide-up">Blog</h2>
            <p className="text-lg text-gray-700 mb-6 animate-fade-in">Lee consejos, novedades y artículos sobre salud dental, tratamientos y prevención.</p>
            <Link href="/Blog" className="mt-4 px-8 py-3 rounded-xl bg-[#FE0000] text-white font-semibold hover:bg-red-700 transition animate-pop">Ir al blog</Link>
          </div>
        </section>

        {/* Sección Casos de Éxito */}
        <section className="w-full py-20 bg-white flex flex-col items-center animate-fade-in">
          <div className="max-w-4xl w-full flex flex-col items-center text-center">
            <h2 className="text-4xl font-bold mb-4 text-[#FE0000] animate-slide-up">Casos de Éxito</h2>
            <p className="text-lg text-gray-700 mb-6 animate-fade-in">Conoce historias reales de pacientes que transformaron su sonrisa con nosotros.</p>
            <Link href="/CasosDeExito" className="mt-4 px-8 py-3 rounded-xl bg-[#FE0000] text-white font-semibold hover:bg-red-700 transition animate-pop">Ver casos</Link>
          </div>
        </section>

      

        <section id="pagos" className="py-20 bg-white border-b">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#222]">Formas de Pago y Financiamiento</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Tarjetas participantes */}
              <div className="flex flex-col items-center">
                <span className="text-lg font-semibold mb-2 text-[#FE0000]">Tarjetas participantes</span>
                <div className="flex gap-4">
                  {/* Visa */}
                  <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="24" rx="4" fill="#fff"/><text x="8" y="17" fontSize="13" fontWeight="bold" fill="#1A1F71">VISA</text></svg>
                  {/* MasterCard */}
                  <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="24" rx="4" fill="#fff"/><circle cx="16" cy="12" r="7" fill="#EB001B"/><circle cx="24" cy="12" r="7" fill="#F79E1B" fillOpacity="0.8"/><text x="6" y="21" fontSize="7" fontWeight="bold" fill="#222">Master</text></svg>
                  {/* AMEX */}
                  <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="24" rx="4" fill="#fff"/><text x="5" y="17" fontSize="11" fontWeight="bold" fill="#2E77BB">AMEX</text></svg>
                </div>
              </div>
              {/* Otros métodos */}
              <div className="flex flex-col items-center">
                <span className="text-lg font-semibold mb-2 text-[#FE0000]">Otras formas de pago</span>
                <ul className="text-gray-600 text-base text-center space-y-1">
                  <li>Efectivo</li>
                  <li>Transferencia bancaria</li>
                  <li>Pagos con QR</li>
                </ul>
              </div>
              {/* Financiamiento */}
              <div className="flex flex-col items-center">
                <span className="text-lg font-semibold mb-2 text-[#FE0000]">Financiamiento</span>
                <ul className="text-gray-600 text-base text-center space-y-1">
                  <li>Meses sin intereses con tarjetas participantes</li>
                  <li>Planes de pago personalizados</li>
                  <li>Consulta requisitos en clínica</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

       

        <section id="contacto" className="py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100 w-full">
          <div className="w-full flex justify-center">
            <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10">
              {/* Tarjeta de contacto */}
              <div className="bg-white rounded-2xl shadow-xl p-10 md:p-14 flex-1 flex flex-col justify-center border border-gray-100 min-w-[320px]">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#FE0000]">Contáctanos</h2>
                <p className="text-base md:text-lg text-gray-600 mb-6">¿Necesita información, agendar una cita o resolver una duda? Nuestro equipo le atenderá con profesionalismo y prontitud.</p>
                <div className="space-y-2 text-gray-700 text-base mb-6">
                  <div className="flex items-center gap-2"><span className="font-semibold">Teléfono:</span>                   <a 
                    href="tel:00000000" 
                    className="hover:underline text-[#FE0000]"
                    onClick={() => trackDentalEvents.phoneCall()}
                  >
                    56 21567557
                  </a></div>
                  <div className="flex items-center gap-2"><span className="font-semibold">Correo:</span> <a href="mailto:contacto@dentalmas.com" className="hover:underline text-[#FE0000]">contacto@dentalmas.com</a></div>
                </div>
                <div className="flex flex-row flex-wrap gap-4 w-full justify-start">
                  <a 
                    href="https://wa.me/000000" 
                    target="_blank" 
                    rel="noopener" 
                    className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-green-500 text-green-700 font-bold bg-white hover:bg-green-500 hover:text-white transition text-base justify-center" 
                    title="WhatsApp"
                    onClick={() => trackDentalEvents.whatsappClick()}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A12 12 0 003.48 20.52l-1.32 4.68a1 1 0 001.26 1.26l4.68-1.32A12 12 0 0020.52 3.48zm-8.52 17a10 10 0 1110-10 10 10 0 01-10 10zm4.29-7.71l-1.42-1.42a1 1 0 00-1.42 0l-1.42 1.42a1 1 0 000 1.42l1.42 1.42a1 1 0 001.42 0l1.42-1.42a1 1 0 000-1.42z" /></svg>
                    WhatsApp
                  </a>
                  <a href="https://m.me/dentalmas" target="_blank" rel="noopener" className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-blue-500 text-blue-600 font-bold bg-white hover:bg-blue-500 hover:text-white transition text-base justify-center" title="Messenger">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.19 2 11.5c0 2.54 1.08 4.84 2.91 6.56V22l2.67-1.47c1.01.28 2.09.44 3.42.44 5.52 0 10-4.19 10-9.5S17.52 2 12 2zm1.06 13.47l-2.25-2.41-3.18 2.41 4.5-4.97 2.25 2.41 3.18-2.41-4.5 4.97z" /></svg>
                    Messenger
                  </a>
                  <a href="https://instagram.com/dentalmas" target="_blank" rel="noopener" className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-pink-400 text-pink-500 font-bold bg-white hover:bg-pink-500 hover:text-white transition text-base justify-center" title="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm4.25 2.25a5.25 5.25 0 11-5.25 5.25 5.25 5.25 0 015.25-5.25zm0 1.5a3.75 3.75 0 103.75 3.75 3.75 3.75 0 00-3.75-3.75zm6.25 1.25a1.25 1.25 0 11-1.25 1.25 1.25 1.25 0 011.25-1.25z" /></svg>
                    Instagram
                  </a>
                </div>
              </div>
              {/* Tarjeta FAQ con acordeón */}
              <FAQAccordion />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatbotWidget />
    </>
  );
}
