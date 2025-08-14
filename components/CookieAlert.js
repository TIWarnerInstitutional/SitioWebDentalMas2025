import { useState, useEffect } from 'react';
import { initializeAnalytics, trackDentalEvents } from '../utils/analytics';

const CookieAlert = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [showManage, setShowManage] = useState(false);

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
  };

  const acceptOnlyEssential = () => {
    localStorage.setItem('dentalmas-cookies-decision', 'essential-only');
    initializeCookies(false);
    setShowAlert(false);
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

  if (!showAlert && !showManage) return null;

  // Panel de administración granular
  const managePanel = (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-4 border-[#FE0000] shadow-2xl backdrop-blur-sm">
      <div className="w-full max-w-full sm:max-w-lg md:max-w-2xl mx-auto px-2 sm:px-4 py-4 flex flex-col gap-4 overflow-y-auto" style={{maxHeight: '90vh'}}>
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#FE0000] mb-2 text-center md:text-left">Administrar cookies</h3>
        <div className="flex flex-col gap-2 w-full">
          <label className="flex items-center gap-2 text-xs sm:text-sm md:text-base">
            <input type="checkbox" checked disabled className="accent-[#FE0000] w-4 h-4 sm:w-5 sm:h-5" />
            <span>Cookies esenciales (siempre activas)</span>
          </label>
          <label className="flex items-center gap-2 text-xs sm:text-sm md:text-base">
            <input type="checkbox" defaultChecked className="accent-[#FE0000] w-4 h-4 sm:w-5 sm:h-5" onChange={e => {
              if (e.target.checked) enableAnalytics(); else disableNonEssentialCookies();
            }} />
            <span>Cookies de análisis y estadísticas</span>
          </label>
          <label className="flex items-center gap-2 text-xs sm:text-sm md:text-base">
            <input type="checkbox" defaultChecked className="accent-[#FE0000] w-4 h-4 sm:w-5 sm:h-5" onChange={e => {
              if (e.target.checked) enableChatbotMemory(); else localStorage.removeItem('chatbot-memory-enabled');
            }} />
            <span>Cookies para personalización del chatbot</span>
          </label>
          <label className="flex items-center gap-2 text-xs sm:text-sm md:text-base">
            <input type="checkbox" defaultChecked className="accent-[#FE0000] w-4 h-4 sm:w-5 sm:h-5" onChange={e => {
              if (e.target.checked) enableFormMemory(); else localStorage.removeItem('form-memory-enabled');
            }} />
            <span>Cookies para recordar datos de formularios</span>
          </label>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 w-full">
          <button onClick={() => { setShowManage(false); setShowAlert(false); }} className="px-4 py-2 text-xs sm:text-sm md:text-base bg-[#FE0000] text-white rounded-xl font-medium w-full sm:w-auto">Guardar preferencias</button>
          <button onClick={() => setShowManage(false)} className="px-4 py-2 text-xs sm:text-sm md:text-base border-2 border-gray-300 text-gray-600 bg-white rounded-xl font-medium w-full sm:w-auto">Cancelar</button>
        </div>
      </div>
    </div>
  );

  return showManage ? managePanel : (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-white to-gray-50 border-t-4 border-[#FE0000] shadow-2xl backdrop-blur-sm">
      <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 w-full">
        <div className="flex-1 text-left">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-[#FE0000] p-2 rounded-full text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#FE0000]">Aviso de Cookies</h3>
          </div>
          <p className="text-gray-700 text-base leading-relaxed">
            Usamos cookies para mejorar tu experiencia en DentalMas. Algunas son esenciales y otras nos ayudan a personalizar y analizar el sitio. Puedes aceptar todas, solo las básicas o administrar tus preferencias. Más información en nuestra <a href="/terminos-y-condiciones" className="text-[#FE0000] font-semibold underline hover:text-red-700 transition-colors text-xs">Política de cookies</a>.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-w-[180px] md:min-w-[220px] w-full md:w-auto">
          <div className="flex flex-row gap-3">
            <button
              onClick={acceptOnlyEssential}
              className="px-5 py-2.5 text-sm border-2 border-gray-300 text-gray-600 bg-white hover:bg-gray-100 hover:border-gray-400 rounded-xl transition-all duration-200 font-medium shadow-sm"
            >
              Solo básicas
            </button>
            <button
              onClick={acceptAllCookies}
              className="px-6 py-2.5 text-sm bg-gradient-to-r from-[#FE0000] to-red-600 text-white hover:from-red-600 hover:to-red-700 rounded-xl transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Aceptar todas ✨
            </button>
          </div>
          <button
            onClick={() => setShowManage(true)}
            className="mt-2 px-5 py-2.5 text-sm border-2 border-[#FE0000] text-[#FE0000] bg-white hover:bg-gray-100 hover:border-red-400 rounded-xl transition-all duration-200 font-medium shadow-sm w-full"
          >
            Administrar las cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieAlert;