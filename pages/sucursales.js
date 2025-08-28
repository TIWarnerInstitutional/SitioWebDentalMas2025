"use client";

import React, { useState } from "react";

import PromoBanner from "../components/PromoBanner";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import Footer from "../components/Footer";
import sucursales from "../utils/sucursales";
const DynamicMap = dynamic(() => import("../components/MapaSucursales"), { ssr: false });

function FlyToLocation({ position }) {
  const map = useMap();
  if (position) {
    map.flyTo(position, 14, { duration: 1.5 });
  }
  return null;
}

const SucursalesPage = () => {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");

  const filteredClinicas = sucursales.filter(
    (clinica) =>
      clinica.nombre.toLowerCase().includes(search.toLowerCase()) ||
      clinica.estado.toLowerCase().includes(search.toLowerCase()) ||
      clinica.municipio.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <PromoBanner />
      <Header />
      <main className="bg-gray-50 text-gray-800">
        <div className="container mx-auto px-0">
          {/* Header Section */}
          <section className="text-center mb-10 md:hidden">
            <h1 className="text-4xl font-bold text-red-500">
              Encuentra la sucursal dental más cerca de ti
            </h1>
            <p className="mt-4 text-lg">
              Busca por ciudad, estado o nombre de clínica
            </p>
            <div className="mt-6 flex justify-center">
              <input
                type="text"
                placeholder="Buscar sucursal..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </section>
          {/* Lista y panel solo en móvil, mapa en ambas vistas */}
          <section className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div className="md:hidden bg-white p-6 rounded-xl shadow-md flex flex-col mb-6">
              {!selected ? (
                <p className="text-gray-500">
                  Selecciona una sucursal en la lista o en el mapa
                </p>
              ) : (
                <div>
                  <h2 className="text-2xl font-bold text-red-500 mb-4">
                    {selected.nombre}
                  </h2>
                  <p className="text-sm text-gray-600">
                    Estado: {selected.estado} | Municipio: {selected.municipio}
                  </p>
                  <p className="text-sm text-gray-600">
                    Calificación: {selected.calificacion} ⭐
                  </p>
                  <p className="text-sm text-gray-600">
                    Dirección: {selected.direccion}
                  </p>
                  <p className="text-sm text-gray-600">
                    Teléfono: {selected.telefono}
                  </p>
                  <p className="text-sm text-gray-600">
                    Horario: {selected.horario}
                  </p>
                  <div className="mt-4 flex space-x-3">
                    <a
                      href={`https://www.google.com/maps?q=${selected.lat},${selected.lng}`}
                      target="_blank"
                      className="bg-red-500 text-white px-4 py-2 rounded-full shadow hover:bg-red-600 transition text-sm"
                    >
                      Google Maps
                    </a>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-600 transition text-sm">
                      Agendar Cita
                    </button>
                    <a
                      href={`https://wa.me/?text=Hola,%20me%20gustaría%20más%20información%20sobre%20${selected.nombre}`}
                      target="_blank"
                      className="bg-green-500 text-white px-4 py-2 rounded-full shadow hover:bg-green-600 transition text-sm"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              )}
              <ul className="mt-6 space-y-3">
                {filteredClinicas.map((clinica, idx) => (
                  <li
                    key={idx}
                    onClick={() => setSelected(clinica)}
                    className={`p-3 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition ${
                      selected?.nombre === clinica.nombre
                        ? "bg-red-50 border border-red-400"
                        : "bg-gray-50"
                    }`}
                  >
                    <h3 className="font-semibold text-gray-800">
                      {clinica.nombre}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {clinica.estado} - {clinica.municipio}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <DynamicMap sucursales={sucursales} selected={selected} setSelected={setSelected} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SucursalesPage;
