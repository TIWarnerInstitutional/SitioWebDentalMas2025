import { useState } from "react";
import { FaTooth } from "react-icons/fa";

const images = [
  "/Fondo.jpg",
  "/FondoPrincipal.jpg",
  "/hero-bg.jpg",
  "/MasAhorro.jpg",
  "/MasCalidad.jpg",
  "/MasSalud.jpg"
];

export default function CarouselBanner() {
  const INDICATORS = "Dental+".split("");
  const SLIDES = Array.from({ length: INDICATORS.length }, (_, i) => images[i % images.length]);
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c + 1) % SLIDES.length);
  const prev = () => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);

  return (
    <div className="relative w-full h-full min-h-[600px] overflow-hidden z-0 bg-white flex items-center justify-center">
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white z-10">❮</button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white z-10">❯</button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {INDICATORS.map((char, i) => (
          <span
            key={i}
            className={`font-bold text-base md:text-lg transition-all duration-500 ease-in-out ${i === current ? 'text-[#FE0000]' : 'text-gray-400'}`}
            style={{ transitionProperty: 'color' }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}