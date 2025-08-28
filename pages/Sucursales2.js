import React, { useState, useEffect } from 'react';
import { FaSun, FaMountain, FaTree, FaCity, FaUmbrellaBeach as FaBeach } from 'react-icons/fa';
import Head from 'next/head';
import PromoBanner from '../components/PromoBanner';
import Header from '../components/Header';
import Footer from '../components/Footer';


import sucursales, { estadosMunicipios } from '../utils/sucursales';
// Mapeo de iconos para los estados
const iconMap = {
  city: <FaCity />,
  mountain: <FaMountain />,
  tree: <FaTree />,
  sun: <FaSun />,
  beach: <FaBeach />
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedSucursal, setSelectedSucursal] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (selectedSucursal && Array.isArray(selectedSucursal.fotos) && selectedSucursal.fotos.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          (prevIndex + 1) % selectedSucursal.fotos.length
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [selectedSucursal]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleSucursalClick = (sucursal) => {
    setSelectedSucursal(sucursal);
    setCurrentImageIndex(0);
  };

  const closeSucursalCard = () => {
    setSelectedSucursal(null);
  };

  const nextImage = () => {
    if (!selectedSucursal || !Array.isArray(selectedSucursal.fotos) || selectedSucursal.fotos.length === 0) return;
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % selectedSucursal.fotos.length
    );
  };

  const prevImage = () => {
    if (!selectedSucursal || !Array.isArray(selectedSucursal.fotos) || selectedSucursal.fotos.length === 0) return;
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + selectedSucursal.fotos.length) % selectedSucursal.fotos.length
    );
  };

  const columns = 3;
  const rows = Math.ceil(estadosMunicipios.length / columns);
  const grid = Array.from({ length: rows }, (_, rowIndex) =>
    estadosMunicipios.slice(rowIndex * columns, rowIndex * columns + columns)
  );

  return (
    <div className="mt-10">
  <h2 className="text-3xl font-bold text-red-500 mb-4">Sucursales por Estado</h2>
  <p className="text-lg text-gray-700 mb-6">Haz clic en tu estado para conocer nuestras clínicas</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="space-y-4">
            {row.map((estadoObj, index) => {
              // Buscar sucursales de ese estado
              const sucursalesEstado = sucursales.filter(s => s.estado === estadoObj.estado);
              // Tomar el icono de la primera sucursal del estado (si existe)
              const icono = sucursalesEstado[0]?.icon || 'city';
              return (
                <div key={index} className={`border border-gray-300 rounded-lg`}>
                  <button
                    onClick={() => toggleAccordion(rowIndex * columns + index)}
                    className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 font-semibold text-gray-800 flex items-center space-x-2"
                  >
                    <span>{iconMap[icono]}</span>
                    <span>{estadoObj.estado}</span>
                  </button>
                  {activeIndex === rowIndex * columns + index && (
                    <ul className="px-4 py-2 bg-white">
                      {sucursalesEstado.map((sucursal, idx) => (
                        <li
                          key={idx}
                          className="py-1 text-gray-700 cursor-pointer hover:text-red-500"
                          onClick={() => handleSucursalClick(sucursal)}
                        >
                          {sucursal.nombre} <span className="text-xs text-gray-400">({sucursal.municipio})</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {selectedSucursal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full max-w-4xl relative flex flex-col md:flex-row">
            <div className="w-full md:w-2/3 p-4">
              <button
                onClick={closeSucursalCard}
                className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              >
                &times;
              </button>
              <h3 className="text-lg md:text-xl font-bold text-red-500 mb-4 text-center md:text-left">{selectedSucursal.nombre}</h3>
              <p className="text-sm md:text-base text-gray-700 mb-2 text-center md:text-left">Estado: {selectedSucursal.estado} | Municipio: {selectedSucursal.municipio}</p>
              <p className="text-sm md:text-base text-gray-700 mb-2 text-center md:text-left">Calificación: {selectedSucursal.calificacion} ({selectedSucursal.reviews} reviews)</p>
              <p className="text-sm md:text-base text-gray-700 mb-2 text-center md:text-left">Dirección: {selectedSucursal.direccion}</p>
              <p className="text-sm md:text-base text-gray-700 mb-2 text-center md:text-left">Teléfono: {selectedSucursal.telefono}</p>
              <p className="text-sm md:text-base text-gray-700 mb-2 text-center md:text-left">Horario: {selectedSucursal.horario}</p>
              <div className="mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                <a
                  href={`https://www.google.com/maps?q=${selectedSucursal.direccion}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-500 text-white px-6 py-2 rounded-full shadow hover:bg-red-600 text-center text-sm md:text-base"
                >
                  Google Maps
                </a>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-full shadow hover:bg-blue-600 text-sm md:text-base">Agendar Cita</button>
                <a
                  href={`https://wa.me/?text=Hola,%20me%20gustaría%20más%20información%20sobre%20${selectedSucursal.nombre}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-2 rounded-full shadow hover:bg-green-600 text-center text-sm md:text-base"
                >
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4 flex flex-col items-center">
              <div className="relative w-full h-40 md:h-48">
                <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500">&lt;</button>
                {Array.isArray(selectedSucursal.fotos) && selectedSucursal.fotos.length > 0 ? (
                  <img
                    src={selectedSucursal.fotos[currentImageIndex]}
                    alt={`Imagen ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover rounded"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded">Sin imagen</div>
                )}
                <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500">&gt;</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


const SucursalesPage = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredClinicas, setFilteredClinicas] = useState([]);
  const [selectedMap, setSelectedMap] = useState('');

  // Función para obtener 3 sucursales aleatorias
  function getRandomClinicas(arr, n) {
    const shuffled = arr.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  }

  useEffect(() => {
    let results = sucursales;
    if (searchTerm.trim() !== '') {
      results = results.filter(clinica => clinica.nombre.toLowerCase().includes(searchTerm.toLowerCase()));
    } else {
      results = getRandomClinicas(sucursales, 3);
    }
    setFilteredClinicas(results);
  }, [searchTerm]);

  const handleCardClick = (mapIframe) => {
    setSelectedMap(mapIframe);
  };

  return (
    <div>
      <Head>
        <title>Sucursales - Dental Mas</title>
        <meta name="description" content="Encuentra nuestras sucursales cerca de ti." />
      </Head>
      <PromoBanner />
      <Header />
      <main className="bg-gray-50 text-gray-800 py-10">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <section className="text-center mb-10">
            <h1 className="text-4xl font-bold text-red-500">Encuentra la sucursal dental más cerca de ti</h1>
            <p className="mt-4 text-lg">Elige entre nuestras sucursales en todo México</p>
            <div className="mt-6 flex justify-center">
              <input
                type="text"
                placeholder="Buscar sucursal..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </section>

          {/* Map and Clinics List Section */}
          <section className="flex flex-col md:flex-row justify-between items-start gap-6">
            {/* Map Section */}
            <div className="flex-1 mt-10 overflow-hidden"> {/* Increased top margin from mt-6 to mt-10 */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d978158.359560719!2d-93.86001832187499!3d16.730289700000025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed4582c853fa79%3A0xc15c93d6b6a94e70!2sDental%20M%C3%A1s%20-%20Cl%C3%ADnica%20Dental!5e0!3m2!1ses-419!2smx!4v1754863926973!5m2!1ses-419!2smx"
                width="700"
                height="600"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Clinics List Section */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-red-500 mb-4">Sucursales</h2>
              <ul className="space-y-4">
                {filteredClinicas.length === 0 && (
                  <li className="text-gray-500">No se encontraron sucursales.</li>
                )}
                {filteredClinicas.map((clinica, index) => (
                  <li
                    key={index}
                    className="p-4 bg-white rounded-lg shadow cursor-pointer hover:shadow-lg transition"
                    onClick={() => handleCardClick(clinica.maps)}
                  >
                    <h3 className="text-lg font-bold text-red-500">{clinica.nombre}</h3>
                    <p className="text-sm text-gray-600">Estado: {clinica.estado} | Municipio: {clinica.municipio}</p>
                    <p className="text-sm text-gray-600">Calificación: {clinica.calificacion}</p>
                    <p className="text-sm text-gray-600">Dirección: {clinica.direccion}</p>
                    <p className="text-sm text-gray-600">Teléfono: {clinica.telefono}</p>
                    <p className="text-sm text-gray-600">Horario: {clinica.horario}</p>
                    <div className="flex space-x-4 mt-4">
                      <button
                        onClick={() => window.open(clinica.maps, '_blank')}
                        className="bg-red-500 text-white px-4 py-2 rounded-full shadow hover:bg-red-600 transition mr-2"
                      >
                        Google Maps
                      </button>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-600 transition">
                        Agendar Cita
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </section>
          {/* Accordion Section */}
          <Accordion /> {/* Added the Accordion component below the existing content */}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default SucursalesPage;
