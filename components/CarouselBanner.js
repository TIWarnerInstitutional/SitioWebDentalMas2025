
import { useState } from "react";
import { FaTooth, FaSmile, FaUserMd, FaHeartbeat, FaXRay, FaTeeth } from "react-icons/fa";
import { FaPercent } from "react-icons/fa";
import { motion } from "framer-motion";


const iconsHero = [
  { id: 1, Icon: FaTooth, x: -180, y: -50 },
  { id: 2, Icon: FaSmile, x: 180, y: -60 },
  { id: 3, Icon: FaUserMd, x: -100, y: 140 },
  { id: 4, Icon: FaHeartbeat, x: 140, y: 135 },
  { id: 5, Icon: FaXRay, x: 0, y: -160 },
  { id: 6, Icon: FaTeeth, x: 0, y: 160 },
];

const slides = [
  {
    imageDesktop: "/FondoPrincipal.png",
    imageMobile: "/FondoPrincipalMobile.png",
    custom: true,
  },
  {
    imageDesktop: "/Fondo.jpg",
    imageMobile: "/Fondo.jpg",
    title: "Sonrisas para todas las edades",
    description: "Odontología infantil, adultos y adultos mayores.",
    icons: [FaSmile],
    cardStyle: "bg-white/90 shadow-xl rounded-3xl p-8 flex flex-col items-center justify-center border border-blue-100",
    button: { text: "Ver tratamientos familiares", className: "bg-blue-500 text-white px-6 py-2 rounded-xl mt-4 hover:bg-blue-600 transition" },
    animation: { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 } }
  },
  {
    imageDesktop: "/Promo.jpg",
    imageMobile: "/PromoMobile.jpg",
    title: "¡Promoción especial del mes!",
    description: "Blanqueamiento dental al 50% OFF.",
    icons: [FaPercent],
    cardStyle: "bg-gradient-to-r from-pink-500/90 to-red-500/90 shadow-2xl rounded-2xl p-8 text-white text-center",
    button: { text: "Aprovechar promoción", className: "bg-white text-red-600 px-6 py-2 rounded-lg mt-4 hover:bg-gray-100 transition" },
    animation: { initial: { scale: 0.9, opacity: 0 }, animate: { scale: 1, opacity: 1 }, transition: { duration: 0.7 } }
  },
  {
    imageDesktop: "/AntesDespues.jpg",
    imageMobile: "/AntesDespuesMobile.jpg",
    title: "Transformaciones reales",
    description: "Mira cómo cambiamos vidas con una nueva sonrisa.",
    icons: [FaSmile],
    cardStyle: "p-0 text-center flex flex-col items-center justify-center",
    button: { text: "Ver casos reales", className: "underline text-green-600 mt-4 text-base" },
    animation: { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7 } }
  },
  {
    imageDesktop: "/MapaMexico.jpg",
    imageMobile: "/MapaMexicoMobile.jpg",
    title: "Estamos creciendo contigo",
    description: "Próximamente nuevas sucursales cerca de ti.",
    icons: [FaHeartbeat],
    cardStyle: "flex flex-col items-center justify-center p-0 text-center",
    button: { text: "Ver ubicaciones", className: "text-yellow-600 border border-yellow-600 rounded-full px-6 py-2 mt-4 hover:bg-yellow-50 transition" },
    animation: { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.7 } }
  },
  {
    imageDesktop: "/Financiamiento.jpg",
    imageMobile: "/FinanciamientoMobile.jpg",
    title: "Tu sonrisa al alcance de todos",
    description: "Pagos flexibles, meses sin intereses y planes accesibles.",
    icons: [FaUserMd],
    cardStyle: "flex flex-col items-center justify-center p-0 text-center",
    button: { text: "Ver planes de pago", className: "text-purple-600 border border-purple-600 rounded-full px-6 py-2 mt-4 hover:bg-purple-50 transition" },
    animation: { initial: { opacity: 0, y: -40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7 } }
  },
  {
    imageDesktop: "/Personalizada.jpg",
    imageMobile: "/PersonalizadaMobile.jpg",
    title: "Tratamientos hechos a tu medida",
    description: "Cada paciente recibe un plan único y personalizado.",
    icons: [FaTeeth],
    cardStyle: "flex flex-col items-center justify-center p-0 text-center",
    button: { text: "Descubre tu plan", className: "text-cyan-600 border border-cyan-600 rounded-full px-6 py-2 mt-4 hover:bg-cyan-50 transition" },
    animation: { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.7 } }
  }
];

export default function CarouselBanner() {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const INDICATORS = ['D','e','n','t','a','l','+'];
  const currentSlide = slides[current];

  return (
  <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden z-0 flex items-center justify-center p-0 m-0" style={{background: 'transparent'}}>
      {/* Imagen de fondo */}
  {/* Imagen de fondo responsive */}
  <img src={currentSlide.imageDesktop} alt="" className="hidden md:block absolute inset-0 w-full h-full object-cover z-0" />
  <img src={currentSlide.imageMobile} alt="" className="block md:hidden absolute inset-0 w-full h-full object-cover z-0" />
      {/* Contenido superpuesto */}
  <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white z-30">❮</button>
  <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white z-30">❯</button>
  <div className="relative flex flex-col items-center justify-center w-full h-full z-10" style={{marginTop: '-10rem'}}>
        {current === 0 && currentSlide.custom ? (
          <>
            {/* Íconos animados */}
            {iconsHero.map(({ id, Icon, x, y }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
                animate={{ opacity: 1, x, y, scale: 1 }}
                transition={{ duration: 1, delay: id * 0.2, type: "spring" }}
                className="absolute text-[#FE0000] text-4xl"
              >
                <Icon />
              </motion.div>
            ))}
            {/* Texto principal */}
            <h1 className="text-6xl font-extrabold text-gray-900 mb-4">
              Dental<span className="text-[#FE0000]">+</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-xl px-4 text-center md:text-center md:px-8">
              Tu mejor sonrisa comienza aquí: atención profesional, tecnología avanzada y resultados que te harán sonreír.
            </p>
            {/* Botones */}
            <div className="flex gap-4">
              <button className="bg-[#FE0000] hover:bg-red-700 text-white px-6 py-3 rounded-2xl shadow-lg text-lg">
                Agenda tu cita
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-2xl shadow-lg text-lg">
                Ver tratamientos
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center w-full h-full px-4">
            <motion.div
              className={currentSlide.cardStyle}
              initial={currentSlide.animation?.initial || { opacity: 0 }}
              animate={currentSlide.animation?.animate || { opacity: 1 }}
              transition={currentSlide.animation?.transition || { duration: 0.7 }}
              style={{ minWidth: 'min(340px,100%)', maxWidth: 400, width: '100%' }}
            >
              <div className="flex flex-col items-center gap-4">
                {currentSlide.icons && currentSlide.icons.map((Icon, idx) => (
                  <Icon key={idx} className="text-[#FE0000] text-5xl mb-2" />
                ))}
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-1">{currentSlide.title}</h2>
                <p className="text-base text-gray-600 text-center mb-2">{currentSlide.description}</p>
                {currentSlide.button && (
                  <button className={currentSlide.button.className}>{currentSlide.button.text}</button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </div>
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-50 w-full justify-center bg-transparent" style={{paddingBottom: '0.5rem'}}>
    {INDICATORS.map((char, i) => (
      <span
        key={i}
        className={`font-bold text-xl md:text-2xl transition-all duration-500 ease-in-out`}
        style={
          i === current
            ? {
                letterSpacing: '0.05em',
                background: 'linear-gradient(90deg, #FE0000 0%, #FF9800 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent'
              }
            : {
                letterSpacing: '0.05em',
                color: '#bbb'
              }
        }
      >
        {char}
      </span>
    ))}
  </div>
  </section>
  );
}