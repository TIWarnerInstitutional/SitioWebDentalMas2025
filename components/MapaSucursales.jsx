
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import sucursales from "../utils/sucursales";
import L from "leaflet";

function FlyToLocation({ position, zoom = 16 }) {
  const map = useMap();
  React.useEffect(() => {
    if (position) {
      map.flyTo(position, zoom, { duration: 1.5 });
    }
  }, [position, zoom, map]);
  return null;
}

export default function MapaSucursales({
  hideList = false,
  selected: selectedProp,
  setSelected: setSelectedProp,
  sucursales: sucursalesProp,
  search: searchProp,
  setSearch: setSearchProp,
  ...props
}) {
  const [selectedState, setSelectedState] = useState(null);
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [searchState, setSearchState] = useState("");
  const [locating, setLocating] = useState(false);
  const selected = selectedProp !== undefined ? selectedProp : selectedState;
  const setSelected = setSelectedProp !== undefined ? setSelectedProp : setSelectedState;
  const sucursales = sucursalesProp !== undefined ? sucursalesProp : require("../utils/sucursales").default;
  const search = searchProp !== undefined ? searchProp : searchState;
  const setSearch = setSearchProp !== undefined ? setSearchProp : setSearchState;
  const pinIcon = L.icon({
    iconUrl: "/PinMapa.png",
    iconSize: [28, 28],
    iconAnchor: [14, 28],
    popupAnchor: [0, -28],
  });

  // Estado para el centro y zoom del mapa
  const [mapCenter, setMapCenter] = useState([23.6345, -102.5528]); // México
  const [mapZoom, setMapZoom] = useState(5);

  return (
    <div className={`flex w-full gap-8 ${hideList ? '' : ''}`}>
      {/* Lista y carta de sucursal seleccionada a la izquierda */}
      {!hideList && (
        <div className="w-full max-w-xl py-8 px-6">
          <h2 className="text-2xl font-bold text-[#002B5C] mb-2">Encuentra la clínica dental más cerca de ti</h2>
          <p className="mb-4 text-gray-600">Elige entre las más de 65 sucursales dentalia que tenemos en todo México.</p>
          <div className="flex items-center mb-6 gap-2">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Ciudad, colonia, clínica o c.p."
              className="w-full px-4 py-2 border border-gray-300 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-[#002B5C]"
            />
          </div>
          {/* Tarjeta destacada de la sucursal seleccionada, sobre la lista */}
          {selected && (
            <div className="mb-6 p-6 rounded-xl border border-blue-500 bg-blue-100 shadow">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg font-bold text-[#002B5C]">{selected.nombre}</span>
                {selected.rating && (
                  <span className="text-sm text-gray-600">★ {selected.rating} ({selected.reviews} reviews)</span>
                )}
              </div>
              <div className="text-gray-700 mb-1">{selected.direccion}</div>
              {selected.mapsUrl && (
                <a href={selected.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-[#002B5C] underline text-sm mb-1 block">Abrir en Google Maps</a>
              )}
              {selected.centroComercial && (
                <a href={selected.centroComercial} target="_blank" rel="noopener noreferrer" className="text-[#002B5C] underline text-sm mb-1 block">Mapa del centro comercial</a>
              )}
              {selected.telefono && (
                <a href={`tel:${selected.telefono}`} className="text-[#002B5C] underline text-sm mb-1 block">{selected.telefono}</a>
              )}
              {selected.horario && (
                <div className="text-sm text-gray-600">{selected.horario}</div>
              )}
            </div>
          )}
          {/* Lista de sucursales filtrada por búsqueda */}
          <ul className="space-y-10 max-h-[calc(100vh-300px)] overflow-y-auto pr-2">
            {(() => {
              const searchLower = search.trim().toLowerCase();
              const filtered = sucursales.filter(clinica => {
                if (!searchLower) return true;
                return (
                  clinica.nombre?.toLowerCase().includes(searchLower) ||
                  clinica.direccion?.toLowerCase().includes(searchLower) ||
                  clinica.ciudad?.toLowerCase().includes(searchLower) ||
                  clinica.colonia?.toLowerCase().includes(searchLower) ||
                  clinica.cp?.toString().includes(searchLower)
                );
              }).filter(clinica => !selected || clinica.nombre !== selected.nombre);
              const maxList = selected ? 3 : 4;
              return filtered.slice(0, maxList).map((clinica, i) => (
                <li
                  key={clinica.nombre}
                  className={`cursor-pointer ${typeof clinica.lat !== "number" || typeof clinica.lng !== "number" || isNaN(clinica.lat) || isNaN(clinica.lng) ? "opacity-50 pointer-events-none" : ""}`}
                  onClick={() => {
                    let lat = clinica.lat;
                    let lng = clinica.lng;
                    if ((lat === undefined || lng === undefined) && typeof clinica.direccion === "string" && clinica.direccion.includes(",")) {
                      const parts = clinica.direccion.split(",");
                      if (parts.length === 2 && !isNaN(parseFloat(parts[0])) && !isNaN(parseFloat(parts[1]))) {
                        lat = parseFloat(parts[0]);
                        lng = parseFloat(parts[1]);
                      }
                    }
                    if (typeof lat === "number" && typeof lng === "number" && !isNaN(lat) && !isNaN(lng)) {
                      setSelected(clinica);
                      setMapCenter([lat, lng]);
                      setMapZoom(16);
                    }
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-bold text-[#002B5C]">{clinica.nombre}</span>
                    {clinica.rating && (
                      <span className="text-sm text-gray-600">★ {clinica.rating} ({clinica.reviews} reviews)</span>
                    )}
                  </div>
                  <div className="text-gray-700 mb-1">{clinica.direccion}</div>
                  {typeof clinica.lat !== "number" || typeof clinica.lng !== "number" || isNaN(clinica.lat) || isNaN(clinica.lng) ? (
                    <div className="text-xs text-red-500">Ubicación no disponible</div>
                  ) : null}
                  {clinica.mapsUrl && (
                    <a href={clinica.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-[#002B5C] underline text-sm mb-1 block">Abrir en Google Maps</a>
                  )}
                  {clinica.centroComercial && (
                    <a href={clinica.centroComercial} target="_blank" rel="noopener noreferrer" className="text-[#002B5C] underline text-sm mb-1 block">Mapa del centro comercial</a>
                  )}
                  {clinica.telefono && (
                    <a href={`tel:${clinica.telefono}`} className="text-[#002B5C] underline text-sm mb-1 block">{clinica.telefono}</a>
                  )}
                  {clinica.horario && (
                    <div className="text-sm text-gray-600">{clinica.horario}</div>
                  )}
                </li>
              ));
            })()}
          </ul>
        </div>
      )}
      {/* Mapa a la derecha, más grande y centrado verticalmente */}
      <div className="flex-1 flex items-center justify-center py-8 relative">
        {/* Botón flotante para volver al mapa principal */}
        {selected && (
          <button
            style={{position: 'absolute', top: 60, left: 600, zIndex: 1000}}
            className="px-4 py-2 bg-[#002B5C] text-white rounded-full shadow hover:bg-blue-700"
            onClick={() => {
              setSelected(null);
              setMapCenter([23.6345, -102.5528]);
              setMapZoom(5);
            }}
          >Volver al mapa principal</button>
        )}
        <div className="w-[700px] h-[700px] rounded-xl overflow-hidden shadow-md self-start">
          <MapContainer
            center={mapCenter}
            zoom={mapZoom}
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            {/* Si hay sucursal seleccionada, vuela al pin y hace zoom */}
            {/* Si hay sucursal seleccionada, vuela al pin y hace zoom. Si no, muestra el mapa general. */}
            {selected
              ? (() => {
                  let lat = selected.lat;
                  let lng = selected.lng;
                  if ((lat === undefined || lng === undefined) && typeof selected.direccion === "string" && selected.direccion.includes(",")) {
                    const parts = selected.direccion.split(",");
                    if (parts.length === 2 && !isNaN(parseFloat(parts[0])) && !isNaN(parseFloat(parts[1]))) {
                      lat = parseFloat(parts[0]);
                      lng = parseFloat(parts[1]);
                    }
                  }
                  if (typeof lat === "number" && typeof lng === "number" && !isNaN(lat) && !isNaN(lng)) {
                    return <FlyToLocation position={[lat, lng]} zoom={16} />;
                  }
                  return null;
                })()
              : <FlyToLocation position={[23.6345, -102.5528]} zoom={5} />}
            {sucursales.map((clinica, i) => {
              let lat = clinica.lat;
              let lng = clinica.lng;
              if ((lat === undefined || lng === undefined) && typeof clinica.direccion === "string" && clinica.direccion.includes(",")) {
                const parts = clinica.direccion.split(",");
                if (parts.length === 2 && !isNaN(parseFloat(parts[0])) && !isNaN(parseFloat(parts[1]))) {
                  lat = parseFloat(parts[0]);
                  lng = parseFloat(parts[1]);
                }
              }
              if (typeof lat !== "number" || typeof lng !== "number" || isNaN(lat) || isNaN(lng)) {
                return null;
              }
              return (
                <Marker
                  key={i}
                  position={[lat, lng]}
                  icon={pinIcon}
                  eventHandlers={{
                    click: () => {
                      setSelected(clinica);
                      setMapCenter([lat, lng]);
                      setMapZoom(16);
                    }
                  }}
                >
                  <Popup>{clinica.nombre}</Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
