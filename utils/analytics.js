// utils/analytics.js
// Configuración SIMPLE solo con Google Analytics

export const initializeAnalytics = () => {
  // Google Analytics 4 - CAMBIA ESTE ID POR EL TUYO
  const GA_ID = 'G-XXXXXXXXXX'; // 👈 Reemplaza con tu ID real
  
  // Cargar script de Google Analytics
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  // Configurar Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag; // Hacer gtag disponible globalmente
  gtag('js', new Date());
  gtag('config', GA_ID, {
    // Configuraciones de privacidad
    anonymize_ip: true,
    cookie_flags: 'SameSite=None;Secure'
  });

  console.log('✅ Google Analytics inicializado con ID:', GA_ID);
};

// Eventos específicos para tu clínica dental
export const trackDentalEvents = {
  // Cuando alguien muestra interés en una cita
  appointmentInterest: (service) => {
    if (window.gtag) {
      window.gtag('event', 'appointment_interest', {
        service_type: service,
        event_category: 'appointments',
        event_label: service
      });
    }
  },

  // Interacciones con el chatbot
  chatbotInteraction: (action) => {
    if (window.gtag) {
      window.gtag('event', 'chatbot_interaction', {
        action: action,
        event_category: 'chatbot'
      });
    }
  },

  // Ver información de servicios
  serviceView: (service) => {
    if (window.gtag) {
      window.gtag('event', 'service_view', {
        service_name: service,
        event_category: 'services'
      });
    }
  },

  // Inicio de formulario de contacto
  contactFormStart: () => {
    if (window.gtag) {
      window.gtag('event', 'form_start', {
        form_name: 'contact',
        event_category: 'forms'
      });
    }
  },

  // Completar formulario de contacto
  contactFormComplete: () => {
    if (window.gtag) {
      window.gtag('event', 'form_submit', {
        form_name: 'contact',
        event_category: 'forms'
      });
    }
  },

  // Clicks en teléfono
  phoneCall: () => {
    if (window.gtag) {
      window.gtag('event', 'phone_call', {
        event_category: 'contact',
        event_label: 'phone'
      });
    }
  },

  // Clicks en WhatsApp
  whatsappClick: () => {
    if (window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'contact',
        event_label: 'whatsapp'
      });
    }
  }
};
