import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import sucursales from "../utils/sucursales";
import { useRouter } from 'next/router';

const DynamicMap = dynamic(() => import("./MapaSucursales"), { ssr: false });

export default function SucursalesHero() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const router = useRouter();
  const filteredClinicas = sucursales.filter(
    (clinica) =>
      clinica.nombre.toLowerCase().includes(search.toLowerCase()) ||
      clinica.estado?.toLowerCase().includes(search.toLowerCase()) ||
      clinica.municipio?.toLowerCase().includes(search.toLowerCase()) ||
      clinica.colonia?.toLowerCase().includes(search.toLowerCase()) ||
      clinica.cp?.toString().includes(search.toLowerCase())
  );

  return (
    <section className="w-full py-20 bg-white flex flex-col items-center animate-fade-in">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-full h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-md bg-gray-100 flex items-center justify-center relative">
            <DynamicMap
              sucursales={filteredClinicas}
              preview
              hideList
              selected={selected}
              setSelected={setSelected}
            />
            {selected && (
              <button
                style={{
                  position: "absolute",
                  top: 20,
                  left: 20,
                  zIndex: 1000,
                }}
                className="px-4 py-2 bg-[#002B5C] text-white rounded-full shadow hover:bg-blue-700"
                onClick={() => setSelected(null)}
              >
                Volver al mapa principal
              </button>
            )}
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#002B5C]">
            Encuentra una Clinica Dental cerca de ti
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Elige entre +30 clínicas para Cuidar tu Salud Dental
          </p>
          <div className="w-full flex flex-col items-center mb-4">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Escribe tu ciudad, código postal o colonia."
                className="w-full px-6 py-3 border border-gray-300 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-[#002B5C] text-lg"
              />
           
            </div>
            <span className="text-sm text-gray-500 mt-2">
              Escribe tu ciudad, código postal o colonia
            </span>
          </div>
          <Link
            href="/Sucursales"
            className="mt-4 px-8 py-3 rounded-xl border border-[#002B5C] text-[#002B5C] font-semibold bg-white hover:bg-[#002B5C] hover:text-white transition"
          >
            Ver todas nuestras clínicas
          </Link>
        </div>
      </div>
    </section>
  );
}
