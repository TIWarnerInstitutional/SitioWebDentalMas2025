"use client";

import { motion } from "framer-motion";
import { FaTooth, FaUserMd, FaSmile, FaHeartbeat, FaXRay, FaTeeth } from "react-icons/fa";

const icons = [
  { id: 1, Icon: FaTooth, x: -180, y: -50 },
  { id: 2, Icon: FaSmile, x: 180, y: -60 },
  { id: 3, Icon: FaUserMd, x: -100, y: 140 },
  { id: 4, Icon: FaHeartbeat, x: 140, y: 120 },
  { id: 5, Icon: FaXRay, x: 0, y: -160 },
  { id: 6, Icon: FaTeeth, x: 0, y: 160 },
];

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[90vh] bg-white overflow-hidden">
      {/* Íconos animados */}
      {icons.map(({ id, Icon, x, y }) => (
        <motion.div
          key={id}
          initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
          animate={{ opacity: 1, x, y, scale: 1 }}
          transition={{ duration: 1, delay: id * 0.2, type: "spring" }}
          className="absolute text-[#FE0000] text-4xl"
        >
          <Icon />
        </motion.div>
      ))}

      {/* Texto principal */}
      <h1 className="text-6xl font-extrabold text-gray-900 mb-4">
        Dental<span className="text-[#FE0000]">+</span>
      </h1>
      <p className="text-xl text-gray-600 mb-6 max-w-xl">
        Sonríe sin límites: tratamientos dentales de alta calidad y confianza.
      </p>

      {/* Botones */}
      <div className="flex gap-4">
        <button className="bg-[#FE0000] hover:bg-red-700 text-white px-6 py-3 rounded-2xl shadow-lg text-lg">
          Agenda tu cita
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-2xl shadow-lg text-lg">
          Ver tratamientos
        </button>
      </div>
    </section>
  );
}
