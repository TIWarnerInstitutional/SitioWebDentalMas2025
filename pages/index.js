import ChatbotWidget from '../components/ChatbotWidget';
import Footer from '../components/Footer';
import Link from 'next/link';

import PromoBanner from '../components/PromoBanner';
import CarouselBanner from '../components/CarouselBanner';
import Header from '../components/Header';
import Head from 'next/head';
import FAQ from '../components/FAQ';
export default function Home() {
  return (
    <>
      <Head>
        <title>DentalMas | Tu salud bucal es nuestra prioridad</title>
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
              {/* Sección Bienvenida */}
             <section className="w-full py-20 flex justify-center items-center" style={{ background: '#FE0000' }}>
                <div className="w-full max-w-5xl mx-auto flex flex-col items-center">

                </div>
              </section>
              {/* Sección Quienes Somos */}
              <section className="w-full py-20 flex justify-center items-center" style={{ background: '#000000' }}>
                <div className="w-full max-w-5xl mx-auto flex flex-col items-center">

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
                  <FAQ />
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
            <ChatbotWidget />
          </>
  );
}
