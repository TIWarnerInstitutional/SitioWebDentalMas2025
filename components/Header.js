import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="text-2xl font-bold text-red-500">Dental Mas</Link>
        <nav className="flex items-center space-x-6">
          <Link href="/clinicas" className="text-red-500 font-bold hover:text-blue-600">Clínicas</Link>
          <Link href="/tratamientos" className="text-red-500 font-bold hover:text-blue-600">Tratamientos</Link>
          <Link href="/pacientes" className="text-red-500 font-bold hover:text-blue-600">Pacientes</Link>
          <Link href="/franquicias" className="text-red-500 font-bold hover:text-blue-600">Franquicias</Link>
          <Link href="/blog" className="text-red-500 font-bold hover:text-blue-600">Blog</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <a
            href="https://api.whatsapp.com/send?phone=9613319835"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-500 text-white px-4 py-2 rounded-full shadow hover:bg-green-600 transition"
          >
            <FaWhatsapp className="mr-2" /> Contacto
          </a>
          <Link
            href="/citas"
            className="bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-600 transition"
          >
            Agendar Cita
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
