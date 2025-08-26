
import { useState } from "react";
import { FaTooth, FaSmile, FaUserMd, FaHeartbeat, FaXRay, FaTeeth } from "react-icons/fa";
import { motion } from "framer-motion";


const iconsHero = [
  { id: 1, Icon: FaTooth, x: -180, y: -50 },
  { id: 2, Icon: FaSmile, x: 180, y: -60 },
  { id: 3, Icon: FaUserMd, x: -100, y: 140 },
  { id: 4, Icon: FaHeartbeat, x: 140, y: 120 },
  { id: 5, Icon: FaXRay, x: 0, y: -160 },
  { id: 6, Icon: FaTeeth, x: 0, y: 160 },
];

const slides = [
  {
    image: "/Fondo1.png",
    custom: true,
  },
  {
    image: "/FondoPrincipal.jpg",
    title: "e",
    description: "Expertos en salud bucal para toda la familia.",
    icons: [FaUserMd, FaHeartbeat],
    buttons: [
      { text: "Conoce al equipo", className: "bg-[#FE0000] hover:bg-red-700 text-white" }
    ]
  },
  {
    image: "/hero-bg.jpg",
    title: "n",
    description: "Equipos modernos para tu mejor sonrisa.",
    icons: [FaXRay, FaTeeth],
    buttons: [
      { text: "Ver tecnología", className: "bg-gray-200 hover:bg-gray-300 text-gray-800" }
    ]
  },
  {
    image: "/MasAhorro.jpg",
    title: "t",
    description: "Ahorra en tus tratamientos dentales.",
    icons: [FaSmile],
    buttons: [
      { text: "Ver promociones", className: "bg-[#FE0000] hover:bg-red-700 text-white" }
    ]
  },
  {
    image: "/MasCalidad.jpg",
    title: "a",
    description: "Calidad garantizada en cada visita.",
    icons: [FaTooth],
    buttons: [
      { text: "Descubre la calidad", className: "bg-gray-200 hover:bg-gray-300 text-gray-800" }
    ]
  },
  {
    image: "/MasSalud.jpg",
    title: "l",
    description: "Tu salud bucal es nuestra prioridad.",
    icons: [FaHeartbeat],
    buttons: [
      { text: "Ver salud", className: "bg-[#FE0000] hover:bg-red-700 text-white" }
    ]
  },
  {
    image: "/FondoPrincipal.jpg",
    title: "+",
    description: "Más beneficios para ti.",
    icons: [FaSmile, FaTooth],
    buttons: [
      { text: "Conoce más", className: "bg-gray-200 hover:bg-gray-300 text-gray-800" }
    ]
  }
];

export default function CarouselBanner() {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const INDICATORS = ['D','e','n','t','a','l','+'];
  const currentSlide = slides[current];

  return (
  <div className="relative w-full h-[600px] md:h-[850px] min-h-[600px] md:min-h-[850px] overflow-hidden z-0 flex items-center justify-center">
      {/* Imagen de fondo */}
  <img src={currentSlide.image} alt="" className="absolute inset-0 w-full h-full object-cover z-0" style={{height: '100%', minHeight: '500px'}} />
      {/* Contenido superpuesto */}
  <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white z-30">❮</button>
  <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white z-30">❯</button>
      <div className="relative flex flex-col items-center justify-center w-full h-full z-10">
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
            <p className="text-xl text-gray-600 mb-6 max-w-xl">
              Sonríe sin límites: tratamientos dentales de alta calidad y confianza.
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
          <>
            <div className="flex gap-4 mb-4">
              {currentSlide.icons && currentSlide.icons.map((Icon, idx) => (
                <Icon key={idx} className="text-[#FE0000] text-4xl" />
              ))}
            </div>
            <h1 className="text-6xl font-extrabold text-gray-900 mb-4 bg-white/70 px-4 rounded-xl">{currentSlide.title}</h1>
            <p className="text-xl text-gray-600 mb-6 max-w-xl bg-white/60 px-4 py-2 rounded-xl">{currentSlide.description}</p>
            <div className="flex gap-4">
              {currentSlide.buttons && currentSlide.buttons.map((btn, idx) => (
                <button key={idx} className={`px-6 py-3 rounded-2xl shadow-lg text-lg ${btn.className}`}>{btn.text}</button>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {INDICATORS.map((char, i) => (
          <span
            key={i}
            className={`font-bold text-base md:text-lg transition-all duration-500 ease-in-out ${i === current ? 'text-[#FE0000]' : 'text-gray-900'}`}
            style={{ transitionProperty: 'color' }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}