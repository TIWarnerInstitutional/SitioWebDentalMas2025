
import { useState, useEffect } from 'react';

import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import sucursales from '../utils/sucursales';
import promocionesPorSucursal from '../utils/promociones';

// Componente simple de calendario del mes actual
function CalendarMonth() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const dayToday = today.getDate();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startDay = firstDay.getDay();
  const weeks = [];
  let week = [];
  // Llenar días vacíos al inicio
  for (let i = 0; i < startDay; i++) week.push(null);
  for (let day = 1; day <= daysInMonth; day++) {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  if (week.length) {
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }
  const monthName = today.toLocaleString('default', { month: 'long' });
  return (
    <div>
      <div className="text-lg font-semibold mb-2 text-center capitalize">{monthName} {year}</div>
      <div className="grid grid-cols-7 gap-1 text-center text-sm mb-1">
        {['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'].map(d => <div key={d} className="font-bold">{d}</div>)}
        {weeks.flat().map((d, i) => (
          <div
            key={i}
            className={`h-8 flex items-center justify-center ${d ? (d === dayToday ? 'bg-red-500 text-white font-bold' : 'bg-gray-100') : ''} rounded-full`}
          >
            {d || ''}
          </div>
        ))}
      </div>
    </div>
  );
}



import { useRef } from 'react';

export default function Citas() {
  const [search, setSearch] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  const [closestSucursal, setClosestSucursal] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [sucursalesFiltradas, setSucursalesFiltradas] = useState([]);
  const randomSucursalRef = useRef(null);
  const handleSearch = (e) => setSearch(e.target.value);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Obtener la ubicación del usuario al cargar
  useEffect(() => {
    if (mounted && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        },
        () => setUserLocation(null),
        { enableHighAccuracy: true, timeout: 10000 }
      );
    }
  }, [mounted]);

  // Calcular la sucursal más cercana
  useEffect(() => {
    if (userLocation) {
      function parseLatLng(dir) {
        if (/^-?\d+\.\d+,-?\d+\.\d+$/.test(dir)) {
          const [lat, lng] = dir.split(",").map(Number);
          return { lat, lng };
        }
        return null;
      }
      function getDistance(a, b) {
        const toRad = (v) => (v * Math.PI) / 180;
        const R = 6371;
        const dLat = toRad(b.lat - a.lat);
        const dLng = toRad(b.lng - a.lng);
        const lat1 = toRad(a.lat);
        const lat2 = toRad(b.lat);
        const aVal = Math.sin(dLat/2)**2 + Math.sin(dLng/2)**2 * Math.cos(lat1) * Math.cos(lat2);
        const c = 2 * Math.atan2(Math.sqrt(aVal), Math.sqrt(1-aVal));
        return R * c;
      }
      let minDist = Infinity;
      let closest = null;
      for (const suc of sucursales) {
        const coords = parseLatLng(suc.direccion);
        if (coords) {
          const dist = getDistance(userLocation, coords);
          if (dist < minDist) {
            minDist = dist;
            closest = suc;
          }
        }
      }
      setClosestSucursal(closest);
    }
  }, [userLocation]);

  function getRandomClinicas(arr, n) {
    const shuffled = arr.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  }

  // Determinar sucursal a mostrar solo en cliente
  useEffect(() => {
    if (!mounted) return;
    let filtradas = [];
    if (search.trim() !== "") {
      filtradas = sucursales.filter(suc => suc.nombre.toLowerCase().includes(search.toLowerCase()));
    } else if (closestSucursal) {
      filtradas = [closestSucursal];
    } else {
      if (!randomSucursalRef.current) {
        randomSucursalRef.current = getRandomClinicas(sucursales, 1);
      }
      filtradas = randomSucursalRef.current;
    }
    setSucursalesFiltradas(filtradas);
  }, [search, closestSucursal, mounted]);

  // Mientras no esté montado, no mostrar nada para evitar error de hidratación
  if (!mounted) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Citas - Dental Mas</title>
        <meta name="description" content="Agenda tu cita en Dental Mas." />
      </Head>
      <Header />
      <main className="bg-gray-50 text-gray-800 py-10 min-h-screen">
        <div className="container mx-auto px-6">
          <section className="text-center mb-10">
            <h1 className="text-4xl font-bold text-red-500">Agenda tu cita en DentalMás</h1>
            <p className="mt-2 text-lg">
              Sucursal: {sucursalesFiltradas.length > 0 ? sucursalesFiltradas[0].nombre : 'Ninguna'}
            </p>
          </section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Calendario y promociones juntos */}
            <div className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row items-stretch w-full gap-6">
              {/* Calendario a la izquierda */}
              <div className="flex-1 flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Calendario</h2>
                <CalendarMonth />
              </div>
              {/* Promociones a la derecha, colores vivos */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="w-full h-full bg-white border border-gray-200 shadow p-8 rounded-2xl animate-fade-in">
                  <div className="flex items-center mb-4">
                    <svg className="w-8 h-8 text-gray-400 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <h3 className="text-2xl font-bold text-gray-800">Promociones del mes</h3>
                  </div>
                  <ul className="list-disc pl-6 text-gray-700 space-y-3 text-base">
                    {(sucursalesFiltradas.length > 0 && promocionesPorSucursal[sucursalesFiltradas[0].nombre]) ? (
                      promocionesPorSucursal[sucursalesFiltradas[0].nombre].map((promo, idx) => (
                        <li key={idx}><span className="font-semibold">{promo.split(':')[0]}</span>{promo.includes(':') ? promo.slice(promo.indexOf(':') + 1) : ''}</li>
                      ))
                    ) : (
                      <li>No hay promociones para esta sucursal.</li>
                    )}
                  </ul>
                  <div className="mt-6 text-sm text-gray-500 italic">¡Aprovecha este mes y sonríe con DentalMás!</div>
                </div>
              </div>
            </div>
            {/* Buscador lado derecho y sucursal fija */}
            <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Buscar sucursal</h2>
              <input
                type="text"
                placeholder="Buscar sucursal..."
                className="border border-gray-300 rounded-lg px-4 py-2 text-lg mb-4"
                value={search}
                onChange={handleSearch}
              />
              <div className="border-t pt-4 mt-4">
                {sucursalesFiltradas.length > 0 ? (
                  sucursalesFiltradas.map((suc, idx) => (
                    <div key={idx} className="mb-6">
                      <h3 className="text-xl font-semibold text-red-500 mb-2">{suc.nombre}</h3>
                      <div className="text-gray-700 mb-1">Calificación: <span className="font-bold">{suc.calificacion}</span> ({suc.reviews} reviews)</div>
                      <div className="text-gray-700 mb-1">Dirección: <span className="font-mono">{suc.direccion}</span></div>
                      <div className="text-gray-700 mb-1">Teléfono: <a href={`tel:${suc.telefono.replace(/[^\d]/g, "")}`} className="text-blue-600 underline">{suc.telefono}</a></div>
                      <div className="text-gray-700 mb-1">Horario: {suc.horario}</div>
                      <a href={suc.maps} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 mr-2 bg-red-500 text-white px-6 py-2 rounded-full shadow hover:bg-red-600 transition">Google Maps</a>
                      <button className="mt-2 bg-blue-500 text-white px-6 py-2 rounded-full shadow hover:bg-blue-600 transition">Agendar Cita</button>
                    </div>
                  ))
                ) : (
                  <div className="text-gray-500 italic">Sucursal no encontrada.</div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Fotos de la clínica seleccionada */}
        {sucursalesFiltradas.length > 0 && Array.isArray(sucursalesFiltradas[0].fotos) && sucursalesFiltradas[0].fotos.length > 0 && (
          <div className="container mx-auto px-6 mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Fotos de la clínica</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {sucursalesFiltradas[0].fotos.map((foto, idx) => (
                <img key={idx} src={foto} alt={`Foto ${idx + 1} de ${sucursalesFiltradas[0].nombre}`} className="w-full h-48 object-cover rounded" />
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}








