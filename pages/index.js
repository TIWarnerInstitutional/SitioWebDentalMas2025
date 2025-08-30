// ChatbotWidget eliminado, se usará HubSpot
import Footer from '../components/Footer';
import Link from 'next/link';
import SucursalesHero from '../components/SucursalesHero';

import PromoBanner from '../components/PromoBanner';
import CarouselBanner from '../components/CarouselBanner';
import QuienesSomos from '../components/QuienesSomos';
import Header from '../components/Header';
import Head from 'next/head';
import React from 'react';
import FAQ from '../components/FAQ';
import BlogCategorySection from '../components/BlogCategorySection';
export default function Home() {
  const features = [
    {
      id: 1,
      color: '#D80B3A',
      title: 'Quiénes Somos',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ipsam ratione dicta quis cupiditate consequuntur laborum ducimus iusto velit.',
      image: '/Fondo.jpg',
    },
    {
      id: 2,
      color: '#3B82F6',
      title: 'Misión',
      description: '',
      image: '/FondoPrincipal.jpg',
    },
    {
      id: 3,
      color: '#2ECC71',
      title: 'Visión',
      description: '',
      image: '/FondoPrincipal.png',
    },
  ];
  const [activeFeature, setActiveFeature] = React.useState(0);
  return (
    <>
      <Head>
        <title>DentalMas</title>
      </Head>
      <PromoBanner />
      <Header />
      <main className="bg-white text-gray-800">
            {/* Hero Carrusel full-screen y responsivo */}
            <section className="relative w-full h-[85vh] min-h-[600px] flex flex-col items-stretch justify-start bg-white overflow-hidden p-0 m-0">
              <div className="w-full h-full flex flex-col items-stretch justify-start">
                <CarouselBanner />
              </div>
            </section>
            {/* Sección Quienes Somos nueva */}
            <QuienesSomos />
             
          
              {/* Sección Sucursales */}
              <section className="w-full py-20 bg-[#F7FAFC]">
                <SucursalesHero />
              </section>
              {/* Sección Blog */}
              <BlogCategorySection />
              {/* Sección Casos de Éxito */}
              <section className="w-full py-20 bg-[#F7FAFC] flex flex-col items-center">
                <div className="max-w-5xl w-full flex flex-col items-center text-center mb-10">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#002B5C]">Lo que dicen nuestros pacientes</h2>
                  <p className="text-lg text-gray-700 mb-8">La sonrisa de nuestros pacientes es nuestra mayor recomendación. Descubre sus experiencias:</p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center md:gap-6 gap-8 mb-8">
                  {/* Testimonio 1 */}
                  <div className="bg-white rounded-3xl shadow-lg flex-1 max-w-xs min-h-[420px] px-8 py-12 flex flex-col items-center text-center mx-auto">
                    <img src="/FondoPrincipal.jpg" alt="Paciente 1" className="w-28 h-28 rounded-full object-cover mb-6 border-4 border-[#E5E7EB]" />
                    <p className="text-xl text-[#002B5C] font-medium mb-6 leading-normal">“¡Mi vida cambió! Ahora sonrío sin pena al gracias al equipo. Son muy profesionales y atentos.”</p>
                    <span className="text-gray-500 text-base mt-auto">— Ana G, Paciente de Ortodoncia</span>
                  </div>
                  {/* Testimonio 2 */}
                  <div className="bg-white rounded-3xl shadow-lg flex-1 max-w-xs min-h-[420px] px-8 py-12 flex flex-col items-center text-center mx-auto">
                    <img src="/FondoPrincipal.jpg" alt="Paciente 2" className="w-28 h-28 rounded-full object-cover mb-6 border-4 border-[#E5E7EB]" />
                    <p className="text-xl text-[#002B5C] font-medium mb-6 leading-normal">Indoloros y rápidos. Siempre me explican cada paso y el resultado fue perfecto. ¡Recomendadísimos!</p>
                    <span className="text-gray-500 text-base mt-auto">— Javier R, Paciente de Implantes</span>
                  </div>
                  {/* Testimonio 3 */}
                  <div className="bg-white rounded-3xl shadow-lg flex-1 max-w-xs min-h-[420px] px-8 py-12 flex flex-col items-center text-center mx-auto">
                    <img src="/FondoPrincipal.jpg" alt="Paciente 3" className="w-28 h-28 rounded-full object-cover mb-6 border-4 border-[#E5E7EB]" />
                    <p className="text-xl text-[#002B5C] font-medium mb-6 leading-normal">Confianza total. Mejor atención, tecnología de punta y un personal muy humano.</p>
                    <span className="text-gray-500 text-base mt-auto">— Carmen L, Paciente Habitual</span>
                  </div>
                </div>
                <button className="mt-2 px-8 py-3 rounded-xl bg-[#3B82F6] text-white font-semibold hover:bg-blue-700 transition shadow">VER MÁS HISTORIAS</button>
              </section>
              {/* Sección Pagos */}
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
                    {/* Tarjeta FAQ con acordeón */}
                    <FAQ />
                  </div>
                </div>
              </section>
            </main>
            <Footer />
            {/* Start of HubSpot Embed Code */}
            <script
              type="text/javascript"
              id="hs-script-loader"
              async
              defer
              src="//js-na1.hs-scripts.com/50291038.js"
            ></script>
            {/* End of HubSpot Embed Code */}
          </>
  );
}


