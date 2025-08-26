import React, { useState } from 'react';

const slides = [
  {
    title: 'Nuestra Historia',
    description: 'Más de 20 años transformando sonrisas en México.'
  },
  {
    title: 'Nuestro Equipo',
    description: 'Profesionales certificados y apasionados por tu salud bucal.'
  },
  {
    title: 'Nuestra Misión',
    description: 'Brindar calidad, confianza y bienestar a cada paciente.'
  }
];

export default function CarouselQuienesSomos() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-lg shadow-lg p-6 text-center relative">
      <h3 className="text-2xl font-bold text-[#FE0000] mb-2">{slides[current].title}</h3>
      <p className="text-gray-700 mb-4">{slides[current].description}</p>
      <div className="flex justify-between items-center mt-2">
        <button onClick={prevSlide} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">Anterior</button>
        <span className="text-sm text-gray-500">{current + 1} / {slides.length}</span>
        <button onClick={nextSlide} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">Siguiente</button>
      </div>
    </div>
  );
}
