# CONFIGURACIÓN DE GOOGLE ANALYTICS

## 🎯 Pasos para activar el tracking:

### 1. Crear cuenta de Google Analytics 4
1. Ve a [Google Analytics](https://analytics.google.com/)
2. Crear nueva cuenta
3. Configura una nueva propiedad
4. Copia tu **Measurement ID** (ejemplo: G-ABC123DEF456)

### 2. Configurar en tu código
1. Abre el archivo: `utils/analytics.js`
2. En la línea 6, reemplaza:
   ```javascript
   const GA_ID = 'G-XXXXXXXXXX'; // 👈 AQUÍ pon tu ID real
   ```

### 3. Deploy y listo
1. Haz push a GitHub
2. Vercel se actualiza automáticamente
3. ¡Ya tienes tracking completo!

## 📊 ¿Qué datos vas a ver en Google Analytics?

### Automático:
- 👥 Usuarios únicos
- 📄 Páginas más visitadas  
- 🕒 Tiempo promedio en sitio
- 📱 Dispositivos (móvil vs desktop)
- 🌍 Ubicación geográfica
- 🔗 Fuentes de tráfico

### Eventos personalizados que ya están programados:
- 🦷 **Interés en citas**: Cuando clickean "Agendar Cita"
- 📞 **Llamadas telefónicas**: Clicks en el número de teléfono
- 💬 **WhatsApp**: Clicks en el botón de WhatsApp
- 🤖 **Chatbot**: Interacciones con el bot
- 📝 **Formularios**: Inicio y completado de contacto
- 👁️ **Vista de servicios**: Qué servicios ven más

## 🚀 ¿Dónde ver los datos?

1. **analytics.google.com** → Tu cuenta
2. **Tiempo real** → Visitantes ahora mismo
3. **Informes** → Audiencia → Resumen
4. **Eventos** → Ver todos los eventos personalizados

## 💡 Tips:

- Los datos aparecen en tiempo real
- Google Analytics es 100% gratis
- Puedes exportar reportes a Excel
- Configura alertas para picos de tráfico
- Crea objetivos para medir conversiones

---

**¿Necesitas ayuda?** Solo pon tu Measurement ID en `utils/analytics.js` y ya funciona! 🎉
