"use client";

import React, { useState, useEffect } from "react";
import { useMap } from "react-leaflet";

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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedSearch = localStorage.getItem('sucursalSearch');
      if (storedSearch) {
        setSearch(storedSearch);
        localStorage.removeItem('sucursalSearch');
      }
    }
  }, []);

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
          {/* ...existing code... */}
          <section className="grid grid-cols-1 gap-6">
            <div className="w-full max-w-xl py-8 px-6">
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Buscar sucursal..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <DynamicMap sucursales={filteredClinicas} selected={selected} setSelected={setSelected} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SucursalesPage;
