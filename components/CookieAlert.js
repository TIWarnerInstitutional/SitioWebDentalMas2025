import { useState, useEffect } from 'react';
import { initializeAnalytics, trackDentalEvents } from '../utils/analytics';

const CookieAlert = () => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya decidió sobre las cookies
    const cookiesDecision = localStorage.getItem('dentalmas-cookies-decision');
    if (!cookiesDecision) {
      setShowAlert(true);
    } else {
      // Si ya decidió, aplicar la configuración
      initializeCookies(cookiesDecision === 'accepted');
    }
  }, []);

  const initializeCookies = (accepted) => {
    if (accepted) {
      // Activar Google Analytics si las cookies fueron aceptadas
      enableAnalytics();
      // Activar otras funcionalidades
      enableChatbotMemory();
      enableFormMemory();
    } else {
      // Solo cookies esenciales
      disableNonEssentialCookies();
    }
  };

  const enableAnalytics = () => {
    // Inicializar Google Analytics - SIMPLE Y EFECTIVO
    initializeAnalytics();
    
    // Trackear que el usuario aceptó cookies
    trackDentalEvents.contactFormStart();
    
    console.log('✅ Google Analytics ACTIVADO - todos los datos van directo a Google');
  };

  const enableChatbotMemory = () => {
    // Permitir que el chatbot recuerde conversaciones
    localStorage.setItem('chatbot-memory-enabled', 'true');
    console.log('✅ Chatbot: recordará conversaciones previas para mejor atención');
  };

  const enableFormMemory = () => {
    // Recordar datos de formularios (nombre, teléfono, etc.)
    localStorage.setItem('form-memory-enabled', 'true');
    console.log('✅ Formularios: recordará datos para facilitar citas futuras');
  };

  const disableNonEssentialCookies = () => {
    // Limpiar cookies no esenciales
    localStorage.removeItem('chatbot-memory-enabled');
    localStorage.removeItem('form-memory-enabled');
    console.log('ℹ️ Solo cookies esenciales: funcionalidad básica del sitio');
  };

  const acceptAllCookies = () => {
    localStorage.setItem('dentalmas-cookies-decision', 'accepted');
    initializeCookies(true);
    setShowAlert(false);
    
    // Mostrar notificación al usuario
    showNotification('¡Gracias! Ahora podemos personalizar tu experiencia y recordar tus preferencias.', 'success');
  };

  const acceptOnlyEssential = () => {
    localStorage.setItem('dentalmas-cookies-decision', 'essential-only');
    initializeCookies(false);
    setShowAlert(false);
    
    // Mostrar notificación al usuario
    showNotification('Respetamos tu decisión. Solo usaremos cookies esenciales.', 'info');
  };

  const showNotification = (message, type) => {
    // Crear una notificación temporal
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg text-white max-w-sm ${
      type === 'success' ? 'bg-green-500' : 'bg-blue-500'
    }`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Remover después de 4 segundos
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 4000);
  };

  if (!showAlert) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-white to-gray-50 border-t-4 border-[#FE0000] shadow-2xl backdrop-blur-sm">
      <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-[#FE0000] p-2 rounded-full text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#FE0000]">Mejoremos tu Experiencia 🦷</h3>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            <span className="font-semibold">¿Nos permites personalizar tu visita?</span> Las cookies nos ayudan a:
            <br/>
            <span className="text-xs text-gray-600 mt-1 block bg-gray-100 p-2 rounded-md">
              ✓ <strong>Recordar tus datos</strong> para citas más rápidas
              • ✓ <strong>Personalizar contenido</strong> según tus intereses
              • ✓ <strong>Mejorar el chatbot</strong> con tu historial
              • ✓ <strong>Analizar qué servicios</strong> te interesan más
            </span>
            <a 
              href="/terminos-y-condiciones" 
              className="text-[#FE0000] font-semibold underline hover:text-red-700 transition-colors text-xs"
            >
              Ver política completa de privacidad
            </a>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
          <button
            onClick={acceptOnlyEssential}
            className="px-5 py-2.5 text-sm border-2 border-gray-300 text-gray-600 bg-white hover:bg-gray-100 hover:border-gray-400 rounded-xl transition-all duration-200 font-medium shadow-sm"
          >
            Solo Básicas
          </button>
          <button
            onClick={acceptAllCookies}
            className="px-6 py-2.5 text-sm bg-gradient-to-r from-[#FE0000] to-red-600 text-white hover:from-red-600 hover:to-red-700 rounded-xl transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Personalizar Todo ✨
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieAlert;
