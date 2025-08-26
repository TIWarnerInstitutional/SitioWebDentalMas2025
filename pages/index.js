import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaMapMarkerAlt, FaMoneyBillWave, FaTooth, FaUserMd } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatbotWidget from '../components/ChatbotWidget';
import { trackDentalEvents } from '../utils/analytics';
import PromoBanner from '../components/PromoBanner';

// Datos para secciones (limpia duplicación y facilita mantenimiento)
const FEATURES = [
  { Icon: FaTooth, title: 'Tecnología Avanzada', desc: 'Diagnóstico y tratamiento con equipos de última generación.' },
  { Icon: FaUserMd, title: 'Especialistas', desc: 'Equipo médico certificado y en constante actualización.' },
  { Icon: FaMoneyBillWave, title: 'Precios Claros', desc: 'Transparencia total y opciones accesibles para todos.' },
  { Icon: FaMapMarkerAlt, title: 'Atención Personalizada', desc: 'Trato humano, discreto y profesional en cada visita.' }
];

const SERVICES = [
  { title: 'Limpieza y Prevención', desc: 'Limpiezas profundas, revisiones y selladores para tu salud bucal.' },
  { title: 'Estética Dental', desc: 'Blanqueamiento, carillas y tratamientos para una sonrisa natural.' },
  { title: 'Ortodoncia y Más', desc: 'Brackets, alineadores y soluciones modernas para todas las edades.' }
];

const TEAM = [
  { name: 'Dra. Ana López', role: 'Ortodoncia y Estética', photo: '/doctor1.jpg' },
  { name: 'Dr. Carlos Ruiz', role: 'Implantología', photo: '/doctor2.jpg' },
  { name: 'Dra. María León', role: 'Odontopediatría', photo: '/doctor3.jpg' }
];

const TESTIMONIALS = [
  { quote: '“Me sentí en confianza desde el primer momento. Excelente atención.”', name: 'Ana G.' },
  { quote: '“Resultados visibles y un trato muy humano. Recomiendo Dental Más.”', name: 'Carlos R.' },
  { quote: '“La mejor clínica dental, tecnología de punta y personal profesional.”', name: 'María L.' }
];

// Componente FAQAccordion para acordeón de preguntas frecuentes
function FAQAccordion() {
  const [open, setOpen] = useState(null);
  const faqs = [
    {
      q: '¿Atienden urgencias dentales?',
      a: 'Sí, contamos con atención para urgencias dentales. Puede contactarnos por WhatsApp o teléfono para recibir asistencia inmediata.'
    },
    {
      q: '¿Aceptan seguros dentales?',
      a: 'Aceptamos algunos seguros y convenios. Le recomendamos consultarnos previamente para verificar la cobertura de su póliza.'
    },
    {
      q: '¿Puedo agendar mi cita en línea?',
      a: 'Sí, puede agendar su cita fácilmente desde nuestro sitio web o a través de WhatsApp. También puede llamarnos directamente.'
    },
    {
      q: '¿Atienden a niños y adultos mayores?',
      a: 'Por supuesto, nuestro equipo está capacitado para atender a pacientes de todas las edades, desde niños hasta adultos mayores.'
    },
    {
      q: '¿Qué tipos de tratamientos de ortodoncia ofrecen?',
      a: 'Ofrecemos ortodoncia tradicional con brackets metálicos, estéticos (cerámicos), autoligables y alineadores transparentes tipo Invisalign. El tratamiento ideal depende de las necesidades de cada paciente.'
    }
  ];
  return (
    <div className="bg-white rounded-2xl shadow-xl p-10 md:p-14 flex-1 flex flex-col justify-center border border-gray-100 min-w-[320px]">
      <h3 className="text-2xl font-bold mb-6 text-[#FE0000]">Preguntas Frecuentes</h3>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-gray-200 pb-2">
            <button
              className="w-full text-left font-semibold text-base text-gray-900 focus:outline-none flex justify-between items-center py-2"
              onClick={() => setOpen(open === idx ? null : idx)}
              aria-expanded={open === idx}
            >
              {faq.q}
              <span className={`ml-2 transition-transform ${open === idx ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {open === idx && (
              <p className="text-gray-600 text-sm mt-2 transition-all duration-200">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

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
        <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-20 bg-white border-b">
          <div className="z-10 text-center max-w-2xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900" style={{ letterSpacing: '-0.03em' }}>Odontología de Excelencia</h1>
            <p className="text-xl md:text-2xl text-gray-500 font-normal mb-10">Cuidamos tu salud bucal con ética, tecnología y un trato verdaderamente humano. Confía en un equipo profesional y moderno.</p>
            <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
              <Link 
                href="/#contacto" 
                className="font-medium px-8 py-3 rounded-full border border-[#FE0000] text-[#FE0000] bg-white hover:bg-[#FE0000] hover:text-white transition"
                onClick={() => trackDentalEvents.appointmentInterest('general')}
              >
                Agendar Cita
              </Link>
              <Link 
                href="/#sobre-nosotros" 
                className="font-medium px-8 py-3 rounded-full border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 transition"
                onClick={() => trackDentalEvents.serviceView('sobre-nosotros')}
              >
                Conócenos
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#f7fafd] border-b">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#222]">¿Por qué elegirnos?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {FEATURES.map(({ Icon, title, desc }, i) => (
                <div key={i} className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition">
                  <div className="mb-4 text-[#FE0000]"><Icon size={40} /></div>
                  <h3 className="font-semibold text-lg mb-2 text-[#FE0000] text-center">{title}</h3>
                  <p className="text-gray-600 text-sm text-center">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre-nosotros" className="py-20 bg-gray-50 border-b">
          <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center gap-10">
            <img src="/about-dentalmas.jpg" alt="Equipo Dental Más" className="w-full md:w-1/2 rounded-2xl shadow mb-8 md:mb-0" />
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#222]">Sobre Dental Más</h2>
              <p className="text-lg md:text-xl text-gray-700 mb-6">Red de clínicas dentales mexicanas con enfoque en innovación, ética y cercanía. Nuestra misión es democratizar la salud bucal con excelencia y calidez.</p>
              <ul className="text-gray-500 space-y-2 mb-4 text-sm">
                <li>• Más de 10,000 pacientes satisfechos</li>
                <li>• Presencia en las principales ciudades</li>
                <li>• Atención para toda la familia</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="servicios" className="py-20 bg-white border-b">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#222]">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {SERVICES.map((s, i) => (
                <div key={i} className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-2xl border border-gray-100">
                  <h3 className="font-semibold text-xl mb-2 text-[#FE0000]">{s.title}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                </div>
              ))}
            </div>
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

        <section id="equipo" className="py-20 bg-gray-50 border-b">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#222]">Nuestro equipo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {TEAM.map((m, i) => (
                <div key={i} className="flex flex-col items-center bg-white rounded-2xl border border-gray-100 p-8">
                  <img src={m.photo} alt={m.name} className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-[#FE0000]" />
                  <h3 className="font-semibold text-lg mb-1 text-[#FE0000]">{m.name}</h3>
                  <p className="text-gray-500 mb-2 text-sm">{m.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonios" className="py-20 bg-white border-b">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#222]">Testimonios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="bg-gray-50 rounded-xl border border-gray-100 p-6 flex flex-col items-center">
                  <p className="text-gray-700 italic mb-4">{t.quote}</p>
                  <div className="font-bold text-[#FE0000]">{t.name}</div>
                  <div className="text-gray-400 text-sm">Paciente</div>
                </div>
              ))}
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
