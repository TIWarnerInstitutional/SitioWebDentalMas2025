import Link from 'next/link';
import React from 'react';

export default function SucursalesPreview() {
  return (
    <section className="w-full py-20 bg-white flex flex-col items-center animate-fade-in">
      <div className="max-w-4xl w-full flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#FE0000] animate-slide-up">Sucursales</h2>
        <p className="text-lg text-gray-700 mb-6 animate-fade-in">
          Contamos con sucursales en CDMX, Estado de México y Querétaro. Encuentra la más cercana y agenda tu cita.
        </p>
        <Link href="/Sucursales" className="mt-4 px-8 py-3 rounded-xl bg-[#FE0000] text-white font-semibold hover:bg-red-700 transition animate-pop">
          Ver sucursales
        </Link>
      </div>
    </section>
  );
}
