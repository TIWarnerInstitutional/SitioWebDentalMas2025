import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer(){
  return (
    <footer className="bg-red-600 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-white">Dental Mas</h2>
          <p className="mt-2 text-sm">Cuidando tu sonrisa, cuidamos tu salud.</p>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold">Contacto</h3>
          <p className="mt-2 text-sm">Horario: Lunes a Viernes, 9:00 AM - 6:00 PM</p>
          <p className="mt-1 text-sm">Dirección: Calle Salud #123, Ciudad Dental, País</p>
          <p className="mt-1 text-sm">Teléfono: +52 961 123 4567</p>
          <p className="mt-1 text-sm">Correo: contacto@dentalmas.com</p>
        </div>

    {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/" className="hover:text-red-300">Inicio</a></li>
      <li><a href="/#servicios" className="hover:text-red-300">Servicios</a></li>
      <li><a href="/#equipo" className="hover:text-red-300">Equipo</a></li>
      <li><a href="/#contacto" className="hover:text-red-300">Contacto</a></li>
      <li><a href="/terminos-y-condiciones" className="hover:text-red-300">Términos y Condiciones</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold">Síguenos</h3>
          <div className="mt-2 flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-300">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-300">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-red-500 pt-4 text-center text-sm">
        <p>© {new Date().getFullYear()} Dental Mas. Todos los derechos reservados.</p>
        <p className="mt-2">
          <a href="/terminos-y-condiciones" className="hover:text-red-300 underline">
            Términos y Condiciones
          </a>
          {' | '}
          <a href="/terminos-y-condiciones" className="hover:text-red-300 underline">
            Política de Privacidad
          </a>
        </p>
      </div>
    </footer>
  )
}
