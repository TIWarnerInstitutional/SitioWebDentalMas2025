import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-md w-full">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
  <Link href="/" className="text-2xl font-bold text-red-500 md:mr-8 md:ml-2 md:self-center md:whitespace-nowrap">Dental Mas</Link>
        {/* Desktop nav + botones */}
        <div className="hidden md:flex items-center justify-center w-full space-x-6">
          <nav className="flex items-center justify-center w-full space-x-6">
                <Link href="/" className="text-red-500 font-bold hover:text-blue-600">Inicio</Link>
                <Link href="/QuienesSomos" className="text-red-500 font-bold hover:text-blue-600">¿Quiénes Somos?</Link>
                <Link href="/sucursales" className="text-red-500 font-bold hover:text-blue-600">Sucursales</Link>
                <Link href="/blog" className="text-red-500 font-bold hover:text-blue-600">Blog</Link>
                <Link href="/franquicias" className="text-red-500 font-bold hover:text-blue-600">Franquicias</Link>
          </nav>
          <a
            href="https://api.whatsapp.com/send?phone=0000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-500 text-white px-4 py-2 rounded-full shadow hover:bg-green-600 transition"
          >
            <FaWhatsapp className="mr-2" /> WhatsApp
          </a>
          <Link
            href="/Citas"
            className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-600 transition whitespace-nowrap"
          >
            <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <span className="inline-block align-middle">Agendar Cita</span>
          </Link>
        </div>
        {/* Mobile hamburger */}
        <button className="md:hidden flex items-center px-2 py-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
          <svg className="w-7 h-7 text-[#FE0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
      {/* Mobile menu con botones */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-lg px-6 py-4 flex flex-col gap-4 animate-slide-down">
              <Link href="/" className="text-gray-700 hover:text-[#FE0000] font-medium" onClick={() => setMenuOpen(false)}>Inicio</Link>
              <Link href="/QuienesSomos" className="text-gray-700 hover:text-[#FE0000] font-medium" onClick={() => setMenuOpen(false)}>¿Quiénes Somos?</Link>
              <Link href="/sucursales" className="text-gray-700 hover:text-[#FE0000] font-medium" onClick={() => setMenuOpen(false)}>Sucursales</Link>
              <Link href="/blog" className="text-gray-700 hover:text-[#FE0000] font-medium" onClick={() => setMenuOpen(false)}>Blog</Link>
              <Link href="/franquicias" className="text-gray-700 hover:text-[#FE0000] font-medium" onClick={() => setMenuOpen(false)}>Franquicias</Link>
          <a
            href="https://api.whatsapp.com/send?phone=0000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-500 text-white px-4 py-2 rounded-full shadow hover:bg-green-600 transition mt-2"
          >
            <FaWhatsapp className="mr-2" /> WhatsApp
          </a>
          <Link
            href="/Citas"
            className="bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-600 transition mt-2"
          >
            Agendar Cita
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
