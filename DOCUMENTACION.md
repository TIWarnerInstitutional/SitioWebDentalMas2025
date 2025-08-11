# 🦷 DENTAL MÁS 2025 - Documentación Completa

## 📋 Tabla de Contenidos
1. [Información General](#información-general)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Configuración e Instalación](#configuración-e-instalación)
5. [Funcionalidades](#funcionalidades)
6. [Componentes](#componentes)
7. [Páginas](#páginas)
8. [Utilidades](#utilidades)
9. [Configuración de Analytics](#configuración-de-analytics)
10. [Deployment](#deployment)
11. [Mantenimiento](#mantenimiento)

---

## 📄 Información General

**Dental Más 2025** es una aplicación web moderna para una red de clínicas dentales mexicanas. El proyecto está diseñado para brindar una experiencia profesional, accesible y centrada en el paciente.

### 🎯 Objetivos del Proyecto
- Proporcionar información clara sobre servicios dentales
- Facilitar el contacto y agendamiento de citas
- Crear confianza a través de testimonios y transparencia
- Optimizar para conversiones (llamadas, WhatsApp, citas)
- Cumplir con normativas de privacidad y cookies

### 👥 Audiencia Objetivo
- Pacientes potenciales buscando servicios dentales
- Familias que necesitan atención odontológica
- Personas interesadas en tratamientos estéticos
- Pacientes que buscan transparencia en precios

---

## 🛠 Tecnologías Utilizadas

### Frontend Framework
- **Next.js 14.0.0** - Framework de React para aplicaciones web
- **React 18.2.0** - Biblioteca de JavaScript para interfaces de usuario

### Estilos
- **Tailwind CSS 3.4.7** - Framework CSS utility-first
- **PostCSS 8.4.24** - Procesador de CSS
- **Autoprefixer 10.4.14** - Compatibilidad de navegadores

### Iconos y UI
- **React Icons 5.5.0** - Biblioteca de iconos
- **Heroicons** - Iconos SVG (integrado)

### Funcionalidades Adicionales
- **SWR 2.1.0** - Biblioteca para fetching de datos
- **Google Analytics 4** - Análisis de tráfico web
- **Landbot** - Chatbot integrado

### Hosting y Deploy
- **Vercel** - Plataforma de deployment
- **GitHub** - Control de versiones

---

## 📁 Estructura del Proyecto

```
DentalMas2025/
├── 📁 components/           # Componentes reutilizables
│   ├── Header.js           # Navegación principal
│   ├── Footer.js           # Pie de página
│   ├── ChatbotWidget.js    # Integración de Landbot
│   └── CookieAlert.js      # Gestión de cookies GDPR
│
├── 📁 pages/               # Páginas de la aplicación
│   ├── _app.js            # Configuración global de la app
│   ├── index.js           # Página principal
│   ├── blog.js            # Página de blog
│   ├── citas.js           # Sistema de citas
│   ├── clinicas.js        # Ubicaciones de clínicas
│   ├── franquicias.js     # Información de franquicias
│   ├── mantenimiento.js   # Página de mantenimiento
│   ├── pacientes.js       # Portal de pacientes
│   ├── terminos-y-condiciones.js  # Términos legales
│   └── tratamientos.js    # Catálogo de servicios
│
├── 📁 public/             # Archivos estáticos
│   ├── FondoPrincipal.jpg # Imagen principal
│   ├── hero-bg.jpg        # Imagen de hero
│   ├── MasAhorro.jpg      # Imagen de valor "Más Ahorro"
│   ├── MasCalidad.jpg     # Imagen de valor "Más Calidad"
│   └── MasSalud.jpg       # Imagen de valor "Más Salud"
│
├── 📁 styles/             # Estilos globales
│   └── globals.css        # CSS global y variables
│
├── 📁 utils/              # Utilidades y helpers
│   ├── analytics.js       # Configuración de Google Analytics
│   ├── promociones.js     # Gestión de promociones
│   ├── seo.js            # Optimización SEO
│   └── sucursales.js     # Datos de sucursales
│
├── 📄 next.config.js      # Configuración de Next.js
├── 📄 tailwind.config.js  # Configuración de Tailwind
├── 📄 postcss.config.js   # Configuración de PostCSS
├── 📄 middleware.js       # Middleware de Next.js
├── 📄 package.json        # Dependencias y scripts
├── 📄 ANALYTICS.md        # Guía de configuración de Analytics
└── 📄 README.md          # Documentación básica
```

---

## ⚙️ Configuración e Instalación

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- Git

### Instalación Local

1. **Clonar el repositorio**
```bash
git clone https://github.com/TIWarnerInstitutional/DentalMas2025.git
cd DentalMas2025
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
# Crear archivo .env.local
touch .env.local
```

Agregar:
```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Landbot
NEXT_PUBLIC_LANDBOT_CONFIG_URL=https://storage.googleapis.com/landbot.online/v3/H-3088940-JBO95Z6GJT1TL0P8/index.json
```

4. **Ejecutar en desarrollo**
```bash
npm run dev
```

5. **Abrir en navegador**
```
http://localhost:3000
```

### Build para Producción
```bash
npm run build
npm start
```

---

## 🎯 Funcionalidades

### 🏠 Página Principal
- **Hero Section** con llamada a la acción principal
- **Servicios destacados** con iconos y descripciones
- **Valores de la marca** (Más Ahorro, Más Calidad, Más Salud)
- **Testimonios** de pacientes reales
- **Equipo médico** con fotos y especialidades
- **Información de contacto** multiples canales
- **FAQ Accordion** con preguntas frecuentes

### 📞 Sistema de Contacto
- **Teléfono directo** con tracking de clicks
- **WhatsApp Business** integrado
- **Formularios de contacto** con validación
- **Redes sociales** (Facebook, Instagram)
- **Ubicaciones** de clínicas

### 🤖 Chatbot Inteligente
- **Landbot integrado** en modo widget
- **Carga optimizada** (lazy loading)
- **Memoria de conversaciones** (con cookies aceptadas)
- **Responsive** para móvil y desktop

### 🍪 Gestión de Cookies GDPR
- **Alerta profesional** no intrusiva
- **Consentimiento granular** (esenciales vs todas)
- **Cumplimiento legal** con normativas mexicanas
- **Configuración persistente** en localStorage

### 📊 Analytics y Tracking
- **Google Analytics 4** configurado
- **Eventos personalizados** para clínica dental:
  - Interés en citas
  - Clicks en teléfono/WhatsApp
  - Interacciones con chatbot
  - Visualización de servicios
  - Completado de formularios

### 📱 Responsive Design
- **Mobile-first** approach
- **Breakpoints optimizados** para todos los dispositivos
- **Touch-friendly** botones y navegación
- **Velocidad optimizada** para conexiones lentas

---

## 🧩 Componentes

### Header.js
**Propósito**: Navegación principal del sitio
- Logo de Dental Más
- Menú de navegación responsive
- Call-to-action para citas
- Hamburger menu para móvil

### Footer.js
**Propósito**: Información de contacto y enlaces importantes
- Información de contacto completa
- Enlaces rápidos a secciones
- Redes sociales
- Copyright y enlaces legales

### ChatbotWidget.js
**Propósito**: Integración del chatbot de Landbot
- Carga lazy del script de Landbot
- Configuración en modo Livechat
- Optimización de performance
- Gestión de errores

### CookieAlert.js
**Propósito**: Gestión de consentimiento de cookies
- Alerta GDPR compliant
- Opciones granulares (esenciales vs todas)
- Integración con analytics
- Persistencia de preferencias
- Notificaciones de confirmación

---

## 📄 Páginas

### index.js (Página Principal)
**Ruta**: `/`
**Funcionalidad**:
- Landing page principal
- Hero con CTAs principales
- Secciones de servicios y valores
- Testimonios y equipo
- Contacto y FAQ
- Tracking de eventos de conversión

### terminos-y-condiciones.js
**Ruta**: `/terminos-y-condiciones`
**Funcionalidad**:
- Términos legales completos
- Política de privacidad
- Información de la empresa
- Condiciones de servicio
- GDPR compliance

### blog.js
**Ruta**: `/blog`
**Estado**: Estructura preparada para contenido

### citas.js
**Ruta**: `/citas`
**Estado**: Sistema de agendamiento (en desarrollo)

### clinicas.js
**Ruta**: `/clinicas`
**Estado**: Directorio de ubicaciones

### franquicias.js
**Ruta**: `/franquicias`
**Estado**: Información para inversores

### tratamientos.js
**Ruta**: `/tratamientos`
**Estado**: Catálogo de servicios

---

## 🔧 Utilidades

### analytics.js
**Propósito**: Configuración de Google Analytics
- Inicialización de GA4
- Eventos personalizados para clínica dental
- Tracking de conversiones
- Configuración de privacidad

### seo.js
**Propósito**: Optimización para motores de búsqueda
- Meta tags dinámicos
- Open Graph tags
- Twitter Card tags
- Schema.org markup

### promociones.js
**Propósito**: Gestión de ofertas y promociones
- Sistema de promociones dinámicas
- Validación de fechas
- Aplicación de descuentos

### sucursales.js
**Propósito**: Datos de ubicaciones
- Información de clínicas
- Horarios de atención
- Datos de contacto por sucursal

---

## 📊 Configuración de Analytics

### Google Analytics 4

1. **Crear cuenta en Google Analytics**
   - Ir a [analytics.google.com](https://analytics.google.com/)
   - Crear nueva propiedad
   - Configurar para México/Español

2. **Obtener Measurement ID**
   - Copiar ID (formato: G-XXXXXXXXXX)
   - Configurar enhanced ecommerce (opcional)

3. **Configurar en el proyecto**
   ```javascript
   // En utils/analytics.js, línea 6
   const GA_ID = 'G-TU-ID-AQUI';
   ```

4. **Eventos configurados automáticamente**:
   - `appointment_interest` - Interés en citas
   - `phone_call` - Clicks en teléfono
   - `whatsapp_click` - Clicks en WhatsApp
   - `chatbot_interaction` - Uso del chatbot
   - `form_start` - Inicio de formularios
   - `form_submit` - Envío de formularios
   - `service_view` - Visualización de servicios

### Reportes Importantes
- **Audiencia** → Datos demográficos de pacientes
- **Comportamiento** → Páginas más visitadas
- **Conversiones** → Citas y contactos generados
- **Tiempo real** → Actividad actual del sitio

---

## 🚀 Deployment

### Vercel (Recomendado)

1. **Conectar repositorio**
   - Ir a [vercel.com](https://vercel.com)
   - Importar proyecto de GitHub
   - Configurar variables de entorno

2. **Variables de entorno en Vercel**
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_LANDBOT_CONFIG_URL=https://storage.googleapis.com/landbot.online/v3/H-3088940-JBO95Z6GJT1TL0P8/index.json
   ```

3. **Deploy automático**
   - Push a rama main → Deploy automático
   - Preview en ramas de feature
   - Rollback instantáneo si hay problemas

### Configuración de Dominio
1. Agregar dominio custom en Vercel
2. Configurar DNS records
3. SSL automático (Let's Encrypt)

---

## 🔧 Mantenimiento

### Actualizaciones Regulares
- **Dependencias**: Revisar mensualmente
- **Contenido**: Actualizar testimonios y equipo
- **Promociones**: Gestionar ofertas estacionales
- **Analytics**: Revisar métricas semanalmente

### Backup y Seguridad
- **Código**: GitHub como backup automático
- **Assets**: Copias en múltiples CDNs
- **Base de datos**: Backups automáticos (cuando se implemente)

### Performance Monitoring
- **Lighthouse scores**: Meta >90 en todas las métricas
- **Core Web Vitals**: Monitoreo continuo
- **Error tracking**: Logs en Vercel dashboard

### SEO Maintenance
- **Sitemap**: Actualización automática
- **Meta tags**: Revisión trimestral
- **Content updates**: Estrategia de contenido mensual

---

## 📞 Contacto y Soporte

### Información Técnica
- **Desarrollado por**: [Tu nombre/empresa]
- **Repositorio**: https://github.com/TIWarnerInstitutional/DentalMas2025
- **Documentación**: Este archivo

### Soporte
- **Issues**: GitHub Issues para reportar bugs
- **Features**: Pull requests bienvenidos
- **Contacto directo**: [tu-email@ejemplo.com]

---

## 📝 Changelog

### Versión 1.0.0 (Agosto 2025)
- ✅ Implementación inicial completa
- ✅ Integración de Landbot chatbot
- ✅ Sistema de cookies GDPR
- ✅ Google Analytics configurado
- ✅ Términos y condiciones completos
- ✅ Responsive design optimizado
- ✅ Deployment en Vercel

### Próximas Versiones
- 🔄 Sistema de citas online
- 🔄 Portal de pacientes
- 🔄 Blog con CMS
- 🔄 Integración con sistema de pagos
- 🔄 Dashboard administrativo

---

**© 2025 Dental Más - Todos los derechos reservados**
