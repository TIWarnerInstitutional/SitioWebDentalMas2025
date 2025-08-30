import React from "react";
function FAQSection() {
  const faqs = [
    {
      question: "¿Qué servicios ofrecen?",
      answer: "Ofrecemos odontología general, ortodoncia, implantes, estética dental, urgencias y más."
    },
    {
      question: "¿Dónde están ubicados?",
      answer: "Contamos con más de 65 sucursales en México. Busca la más cercana en nuestro mapa."
    },
    {
      question: "¿Aceptan seguros dentales?",
      answer: "Sí, aceptamos seguros dentales y te asesoramos en el proceso de tu póliza."
    },
    {
      question: "¿Cómo puedo agendar una cita?",
      answer: "Puedes agendar tu cita en línea, por teléfono o directamente en la sucursal de tu preferencia."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos tarjetas de crédito, débito, efectivo, transferencias y opciones de financiamiento."
    },
  // Eliminada la pregunta sobre urgencias dentales
  ];
  const [openIdx, setOpenIdx] = React.useState(null);
  return (
    <div className="w-full flex flex-col gap-4">
      {faqs.map((faq, idx) => (
        <div key={idx}>
          <button
            className={`w-full bg-[#f3f4f6] rounded-xl px-6 py-4 flex items-center justify-between cursor-pointer shadow-sm font-semibold text-left transition ${openIdx === idx ? 'text-[#2563eb]' : 'text-[#222]'}`}
            onClick={() => setOpenIdx(idx)}
          >
            <span className="flex items-center gap-2">
              {openIdx === idx && <span className="w-3 h-3 rounded-full bg-[#2563eb]"></span>}
              {faq.question}
            </span>
            <svg className={`w-5 h-5 ${openIdx === idx ? 'text-[#2563eb]' : 'text-gray-400'} transition-transform`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{transform: openIdx === idx ? 'rotate(90deg)' : 'rotate(0deg)'}}><path d="M9 5l7 7-7 7"/></svg>
          </button>
          {openIdx === idx && (
            <div className="bg-white px-6 py-3 text-gray-600 text-base rounded-xl shadow-sm mt-2 animate-fadein">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

import { useState, useEffect } from 'react';

function TestimonialsSlider() {
  const testimonials = [
    {
      img: "/FondoPrincipal.jpg",
      text: "“¡Mi vida cambió! Ahora sonrío sin pena al gracias al equipo. Son muy profesionales y atentos.”",
      author: "— Ana G, Paciente de Ortodoncia"
    },
    {
      img: "/FondoPrincipal.jpg",
      text: "Indoloros y rápidos. Siempre me explican cada paso y el resultado fue perfecto. ¡Recomendadísimos!",
      author: "— Javier R, Paciente de Implantes"
    },
    {
      img: "/FondoPrincipal.jpg",
      text: "Confianza total. Mejor atención, tecnología de punta y un personal muy humano.",
      author: "— Carmen L, Paciente Habitual"
    }
  ];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
      {/* Desktop: todas las tarjetas */}
      <div className="hidden md:flex justify-center items-center gap-8 w-full">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white rounded-3xl shadow-lg max-w-xs min-h-[420px] px-8 py-12 flex flex-col items-center text-center">
            <img src={t.img} alt={t.author} className="w-28 h-28 rounded-full object-cover mb-6 border-4 border-[#E5E7EB]" />
            <p className="text-xl text-[#002B5C] font-medium mb-6 leading-normal">{t.text}</p>
            <span className="text-gray-500 text-base mt-auto">{t.author}</span>
          </div>
        ))}
      </div>

      {/* Mobile: solo slider */}
      <div className="md:hidden w-full flex flex-col items-center justify-center">
        <div className="bg-white rounded-3xl shadow-lg max-w-xs w-full min-h-[420px] px-8 py-12 flex flex-col items-center text-center mx-auto transition-all duration-500">
          <img src={testimonials[current].img} alt={testimonials[current].author} className="w-28 h-28 rounded-full object-cover mb-6 border-4 border-[#E5E7EB]" />
          <p className="text-xl text-[#002B5C] font-medium mb-6 leading-normal">{testimonials[current].text}</p>
          <span className="text-gray-500 text-base mt-auto">{testimonials[current].author}</span>
        </div>
        {/* Dots navigation */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full border-2 border-[#fe0000] focus:outline-none transition-all duration-300 ${current === idx ? 'bg-[#fe0000]' : 'bg-white'}`}
              aria-label={`Ver testimonio ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ...other imports...
import Footer from '../components/Footer';
import Link from 'next/link';
import SucursalesHero from '../components/SucursalesHero';
import PromoBanner from '../components/PromoBanner';
import CarouselBanner from '../components/CarouselBanner';
import QuienesSomos from '../components/QuienesSomos';
import Header from '../components/Header';
import Head from 'next/head';
import FAQ from '../components/FAQ';
import BlogCategorySection from '../components/BlogCategorySection';

export default function Home() {
  // ...existing logic...
  return (
    <>
      <Head>
        <title>DentalMas</title>
      </Head>
        <div className="sticky top-0 z-50">
          <PromoBanner className="animate-fadein" />
          <Header className="animate-fadein delay-100" />
        </div>
      <main className="bg-white text-gray-800">
        {/* Hero Carrusel full-screen y responsivo */}
        <section className="relative w-full h-[85vh] min-h-[600px] flex flex-col items-stretch justify-start bg-white overflow-hidden p-0 m-0">
          <div className="w-full h-full flex flex-col items-stretch justify-start">
            <CarouselBanner />
          </div>
        </section>
        {/* Sección Quienes Somos nueva */}
        <QuienesSomos />
        {/* Sección de Métricas/Stats */}
        <section className="w-full py-12 bg-[#F7FAFC] flex items-center justify-center mt-12">
          <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between md:gap-4 gap-8 px-4 relative">
            {/* Iconos decorativos */}
            <span className="absolute left-0 top-8 w-8 h-8 md:w-10 md:h-10">
              <svg width="100%" height="100%" viewBox="0 0 40 40"><polygon points="0,40 40,40 20,0" fill="#FE6A6A" /></svg>
            </span>
            <span className="absolute right-0 top-0 w-8 h-8 md:w-10 md:h-10">
              <svg width="100%" height="100%" viewBox="0 0 40 40"><path d="M40,0 Q40,40 0,40" fill="#3B82F6" /></svg>
            </span>
            <span className="absolute left-1/2 top-0 transform -translate-x-1/2 w-6 h-6 md:w-8 md:h-8">
              <svg width="100%" height="100%" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" stroke="#FFD600" strokeWidth="4" fill="none" /></svg>
            </span>
            {/* Métricas */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <span className="text-3xl md:text-5xl font-bold text-[#002B5C]">1,800+</span>
              <span className="text-gray-500 text-base md:text-lg mt-2 text-center">Pacientes Atendidos</span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <span className="text-3xl md:text-5xl font-bold text-[#002B5C]">12+</span>
              <span className="text-gray-500 text-base md:text-lg mt-2 text-center">Años de Experiencia</span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <span className="text-3xl md:text-5xl font-bold text-[#002B5C]">950+</span>
              <span className="text-gray-500 text-base md:text-lg mt-2 text-center">Sonrisas Transformadas</span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <span className="text-3xl md:text-5xl font-bold text-[#002B5C]">1,200+</span>
              <span className="text-gray-500 text-base md:text-lg mt-2 text-center">Tratamientos Exitosos</span>
            </div>
          </div>
        </section>
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
          {/* Slider de testimonios en móvil, tarjetas en desktop */}
          <div className="w-full">
            <TestimonialsSlider />
          </div>
        </section>
        {/* Sección Pagos */}
        {/* Sección Formas de Pago y FAQ con diseño tipo tarjeta */}
        <section className="py-20 bg-[#f7fbfd] border-b">
            <div className="container mx-auto max-w-4xl px-4 flex flex-col md:flex-row gap-10 items-stretch justify-center min-h-[600px]">
            {/* Tarjeta Formas de Pago */}
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-10 flex flex-col gap-8 items-center min-w-[340px] max-w-[400px] h-full justify-between">
              <h3 className="text-2xl font-bold text-[#222] mb-4 w-full">Formas de Pago</h3>
              <div className="w-full flex flex-col items-center">
                {/* Card visual */}
                <div className="w-full bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#60a5fa] rounded-xl p-6 flex flex-col gap-4 shadow-md mb-6">
                  <span className="text-white text-lg font-semibold mb-2">Tarjetas participantes</span>
                  <div className="flex gap-4 items-center">
                    <img src="/visa.png" alt="VISA" className="h-7" />
                    <img src="/mastercard.png" alt="MasterCard" className="h-7" />
                    <img src="/amex.png" alt="American Express" className="h-7" />
                  </div>
                </div>
                <div className="w-full mt-2">
                  <span className="text-lg font-bold text-[#222] mb-2 block">Otros métodos</span>
                  <ul className="text-gray-700 text-base space-y-3 font-normal mt-2">
                    <li className="flex items-center gap-2"><svg className="w-4 h-4 text-[#2563eb]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg> Efectivo</li>
                    <li className="flex items-center gap-2"><svg className="w-4 h-4 text-[#2563eb]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg> Transferencia bancaria</li>
                    <li className="flex items-center gap-2"><svg className="w-4 h-4 text-[#2563eb]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg> Pagos con QR</li>
                  </ul>
                </div>
                {/* Financiamiento */}
                <div className="w-full mt-6">
                  <span className="text-lg font-bold text-[#222] mb-2 block flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#2563eb]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v8m0 0l-4-4m4 4l4-4"/></svg>
                    Financiamiento
                  </span>
                  <ul className="text-gray-700 text-base space-y-3 font-normal mt-2">
                    <li className="flex items-center gap-2"><svg className="w-4 h-4 text-[#2563eb]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg> Meses sin intereses</li>
                    <li className="flex items-center gap-2"><svg className="w-4 h-4 text-[#2563eb]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg> Créditos dentales</li>
                    <li className="flex items-center gap-2"><svg className="w-4 h-4 text-[#2563eb]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg> Pagos flexibles</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Tarjeta FAQ */}
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-10 flex flex-col gap-8 items-center min-w-[340px] max-w-[400px] h-full justify-between">
              <h3 className="text-2xl font-bold text-[#222] mb-4 w-full">Preguntas Frecuentes</h3>
              <FAQSection />
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



