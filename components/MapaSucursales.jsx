import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import L from "leaflet";

function FlyToLocation({ position }) {
  const map = useMap();
  map.flyTo(position, map.getZoom());
  return null;
}

export default function MapaSucursales({ sucursales, selected, setSelected }) {
  const [carouselIdx, setCarouselIdx] = useState(0);
  const pinIcon = L.icon({
    iconUrl: "/PinMapa.png",
    iconSize: [28, 28],
    iconAnchor: [14, 28],
    popupAnchor: [0, -28],
  });

  return (
    <div className="h-[600px] rounded-xl overflow-hidden shadow-md">
      <MapContainer
        center={[23.6345, -102.5528]} // centro de México
        zoom={5}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {sucursales.map((clinica, i) => {
          let lat = clinica.lat;
          let lng = clinica.lng;
          if (
            (lat === undefined || lng === undefined) &&
            typeof clinica.direccion === "string" &&
            clinica.direccion.includes(",")
          ) {
            const parts = clinica.direccion.split(",");
            if (
              parts.length === 2 &&
              !isNaN(parseFloat(parts[0])) &&
              !isNaN(parseFloat(parts[1]))
            ) {
              lat = parseFloat(parts[0]);
              lng = parseFloat(parts[1]);
            }
          }
          if (
            typeof lat !== "number" ||
            typeof lng !== "number" ||
            isNaN(lat) ||
            isNaN(lng)
          )
            return null;
          return (
            <Marker
              key={i}
              position={[lat, lng]}
              icon={pinIcon}
              eventHandlers={{
                click: () => setSelected(clinica),
              }}
            >
              {selected && selected === clinica && (
                <Popup>
                  <div>
                    <div className="relative h-[600px] rounded-xl overflow-hidden shadow-md">
                      <div className="absolute left-1/2 top-8 z-20 w-full max-w-2xl -translate-x-1/2 bg-white rounded-2xl shadow-2xl border border-gray-200">
                        <div className="flex items-center justify-center gap-2 px-4 pt-4">
                          {selected.fotos && selected.fotos.length > 0 && (
                            <div className="relative w-full flex items-center justify-center">
                              <button
                                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white z-10"
                                onClick={() =>
                                  setCarouselIdx(
                                    (carouselIdx - 1 + selected.fotos.length) %
                                      selected.fotos.length
                                  )
                                }
                              >
                                ❮
                              </button>
                              <img
                                src={selected.fotos[carouselIdx]}
                                alt={selected.nombre}
                                className="h-40 w-full object-cover rounded-xl"
                                style={{ maxWidth: "320px" }}
                              />
                              <button
                                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white z-10"
                                onClick={() =>
                                  setCarouselIdx(
                                    (carouselIdx + 1) % selected.fotos.length
                                  )
                                }
                              >
                                ❯
                              </button>
                            </div>
                          )}
                        </div>
                        <div className="px-6 py-4 text-center">
                          <h2 className="text-2xl font-bold text-[#FE0000] mb-2">
                            {selected.nombre}
                          </h2>
                          <p className="text-gray-700 text-sm mb-1">
                            {selected.estado} - {selected.municipio}
                          </p>
                          <p className="text-gray-700 text-sm mb-1">
                            {selected.direccion}
                          </p>
                          <p className="text-gray-700 text-sm mb-1">
                            Tel: {selected.telefono}
                          </p>
                          <p className="text-gray-700 text-sm mb-1">
                            Horario: {selected.horario}
                          </p>
                          <div className="flex justify-center gap-4 mt-4">
                            <a
                              href={selected.maps}
                              target="_blank"
                              className="px-4 py-2 rounded-lg bg-[#FE0000] text-white font-semibold shadow hover:bg-red-600 transition"
                            >
                              Direcciones
                            </a>
                            <button className="px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition">
                              Agendar cita
                            </button>
                            <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-semibold shadow hover:bg-gray-200 transition">
                              Detalles
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Popup>
              )}
            </Marker>
          );
        })}
        {selected &&
          selected.lat !== undefined &&
          selected.lng !== undefined && (
            <FlyToLocation position={[selected.lat, selected.lng]} />
          )}
      </MapContainer>
    </div>
  );
}
