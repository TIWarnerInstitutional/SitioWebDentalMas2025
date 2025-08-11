import { useEffect } from 'react';

const ChatbotWidget = () => {
  useEffect(() => {
    let myLandbot;

    function initLandbot() {
      if (!myLandbot) {
        const s = document.createElement('script');
        s.type = 'module';
        s.async = true;
        s.addEventListener('load', function() {
          myLandbot = new window.Landbot.Livechat({
            configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-3088940-JBO95Z6GJT1TL0P8/index.json',
          });
        });
        s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs';
        const x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
      }
    }

    // Inicializar el bot en el primer mouseover o touchstart
    window.addEventListener('mouseover', initLandbot, { once: true });
    window.addEventListener('touchstart', initLandbot, { once: true });

    // Cleanup function
    return () => {
      window.removeEventListener('mouseover', initLandbot);
      window.removeEventListener('touchstart', initLandbot);
    };
  }, []);

  return null; // Este componente no renderiza nada visible, solo maneja el bot
};

export default ChatbotWidget;
