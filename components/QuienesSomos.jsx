import React from "react";
import { FaRegStar, FaHeartbeat, FaMoneyBillWave } from "react-icons/fa";

export default function QuienesSomos() {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 items-center">
          {/* Texto */}
          <div className="p-6 sm:p-8 md:p-12 lg:px-16 lg:py-24 rounded-3xl shadow-lg bg-white w-full">
            <div className="mx-auto max-w-xl text-center md:text-left">
              <h2 className="text-2xl font-bold md:text-3xl mb-4">
                <span className="text-[#FE0000]">¿Quiénes Somos?</span>
              </h2>

              <p className="text-[#222] text-base sm:text-lg text-justify mt-4">
                En Dental+, somos una clínica dental con la misión de transformar sonrisas y mejorar la calidad de vida de nuestros pacientes. Combinamos un equipo de especialistas apasionados con la tecnología dental más avanzada para ofrecer tratamientos de la más alta calidad.
                <br /><br />
                Nos distinguimos por nuestra calidez humana y por crear un ambiente donde cada persona se sienta cómoda y segura. Nuestra visión es ser tu clínica de confianza, reconocida por nuestra excelencia, innovación y por las sonrisas saludables y felices que logramos en cada uno de nuestros pacientes. Creemos que una sonrisa sana es el inicio de una vida plena.
              </p>

              {/* Iconos de valores */}
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-8 mb-6">
                <div className="flex flex-col items-center">
                  <FaRegStar className="text-[#FE0000] text-4xl mb-2" />
                  <span className="text-[#FE0000] font-semibold">Calidad</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaHeartbeat className="text-[#FE0000] text-4xl mb-2" />
                  <span className="text-[#FE0000] font-semibold">Salud</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaMoneyBillWave className="text-[#FE0000] text-4xl mb-2" />
                  <span className="text-[#FE0000] font-semibold">Ahorro</span>
                </div>
              </div>
              <div className="mt-4 md:mt-8 flex justify-center md:justify-start">
                <a
                  href="#"
                  className="inline-block rounded-sm border border-[#FE0000] bg-white px-12 py-3 text-sm font-bold text-[#FE0000] transition-colors duration-200 hover:bg-[#FE0000] hover:text-white focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
                >
                  Conocer Más
                </a>
              </div>
            </div>
          </div>

          {/* Imágenes */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <img
              alt="Equipo trabajando en oficina"
              src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
              className="h-40 w-full object-cover sm:h-56 md:h-full rounded-3xl shadow-lg"
            />

            <img
              alt="Persona usando laptop"
              src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              className="h-40 w-full object-cover sm:h-56 md:h-full rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
