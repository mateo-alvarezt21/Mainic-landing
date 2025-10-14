# 📊 Configuración de Google Analytics 4

## ✅ Implementación Completada con `@next/third-parties`

Ya está todo configurado usando el **paquete oficial de Next.js** (`@next/third-parties`). Solo necesitas configurar tu ID de Google Analytics en las variables de entorno.

### Qué Ya Está Implementado:
- ✅ Paquete `@next/third-parties` instalado (versión oficial de Next.js)
- ✅ Componente `<GoogleAnalytics />` integrado en `layout.tsx`
- ✅ Optimizado para cargar después del contenido (mejor performance)
- ✅ Script de verificación automática (`npm run check-analytics`)

---

## 🚀 Pasos para Activar Google Analytics

### 1. Crear Cuenta y Propiedad en Google Analytics

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Crea una cuenta si no tienes (o usa una existente)
3. Crea una nueva **Propiedad GA4**:
   - Nombre de la propiedad: `Mainic Landing Page` (o el nombre que prefieras)
   - Zona horaria: `(GMT-05:00) Bogotá, Lima, Quito`
   - Moneda: `Peso colombiano (COP)` o `Dólar estadounidense (USD)`
4. Configura los detalles del negocio
5. En **Flujos de datos**, selecciona **Web**
6. Ingresa la URL de tu sitio: `https://mainic.com` (o tu dominio)
7. Dale un nombre al flujo: `Sitio Web Principal`
8. Copia tu **ID de medición** (formato: `G-XXXXXXXXXX`)

### 2. Configurar Variables de Entorno

#### Para Desarrollo Local:

Crea un archivo `.env.local` en la raíz del proyecto (si no existe):

```bash
# Copiar desde .env.local.example
cp .env.local.example .env.local
```

Edita `.env.local` y agrega tu ID de medición:

```env
# Google Analytics 4
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # <- Reemplaza con tu ID real

# Site Configuration
SITE_URL=http://localhost:3000
```

#### Para Producción (CapRover):

1. Accede a tu dashboard de CapRover
2. Ve a **Apps** → Selecciona tu aplicación
3. Click en **App Configs** → **Environmental Variables**
4. Agrega las siguientes variables:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   SITE_URL=https://mainics.com
   ```
5. Click en **Save & Update**
6. CapRover hará redeploy automáticamente (espera 2-5 minutos)

**⚠️ IMPORTANTE**:
- El archivo `.env.local` NO se sube a Git (está en `.gitignore`)
- El prefijo `NEXT_PUBLIC_` es necesario para que funcione en el cliente
- En producción, las variables se configuran directamente en CapRover
- Asegúrate de usar `https://` en SITE_URL para producción

### 3. Reiniciar el Servidor de Desarrollo

Después de agregar la variable de entorno:

```bash
# Detén el servidor (Ctrl+C)
# Reinicia con:
npm run dev
```

### 4. Verificar que Funciona

#### Verificación Automática (Local):

Ejecuta el script de verificación:

```bash
npm run check-analytics
```

Este script verifica:
- ✅ Que `.env.local` existe
- ✅ Que `NEXT_PUBLIC_GA_ID` está configurado
- ✅ Que el paquete `@next/third-parties` está instalado
- ✅ Que el componente está integrado en `layout.tsx`

#### Opción A: En Desarrollo (Local)

1. Abre tu sitio: `http://localhost:3000`
2. Abre las Herramientas de Desarrollador (F12)
3. Ve a la pestaña **Console**
4. Busca mensajes de Google Analytics (o errores si algo falla)
5. Ve a la pestaña **Network** y filtra por `gtag` o `google-analytics`
6. Deberías ver requests a `www.google-analytics.com`

#### Opción B: Con la Extensión de Chrome

1. Instala [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)
2. Activa la extensión
3. Recarga tu página
4. Verás logs detallados en la consola sobre los eventos de GA

#### Opción C: En Google Analytics (Tiempo Real)

1. Ve a tu cuenta de Google Analytics
2. En el menú lateral, click en **Informes** → **Tiempo real**
3. Abre tu sitio web en otra pestaña
4. En 5-10 segundos deberías ver tu visita aparecer en el informe de tiempo real
5. Navega por diferentes páginas y verás los eventos registrarse en tiempo real

#### Opción D: Verificar en Producción (CapRover)

Después de hacer el deploy en CapRover, verifica que los scripts de GA se carguen:

```bash
# Verificar que el script de gtag está presente en el HTML
curl -s https://mainics.com | grep -i "gtag"

# También puedes buscar el tag de Google Analytics
curl -s https://mainics.com | grep -i "googletagmanager"
```

Si ves resultados con `gtag` o `googletagmanager`, significa que GA está cargando correctamente en producción.

---

## 📈 Qué Datos Captura Automáticamente

Con la configuración actual, GA4 registra automáticamente:

✅ **Page Views**: Cada vez que alguien visita una página
✅ **Session Start**: Cuando un usuario inicia una sesión
✅ **First Visit**: Primera vez que alguien visita tu sitio
✅ **User Engagement**: Tiempo que pasan en el sitio
✅ **Scroll Depth**: Qué tan abajo hacen scroll
✅ **Outbound Clicks**: Clicks en links externos
✅ **File Downloads**: Descargas de archivos

### Rutas Que Se Rastrean

Todas tus páginas están siendo rastreadas:
- `/` - Homepage
- `/bienvenida` - Formulario de contacto
- `/automatizaciones-para-su-negocio` - Automatizaciones
- `/software-para-mi-negocio` - Desarrollo de software
- `/software-para-mi-negocio/landing-page` - Portfolio de landing pages
- `/analisis-de-datos` - Análisis de datos
- `/videojuego-para-mi-empresa` - Videojuegos
- `/hardware-personalizado` - Hardware
- Y todas las demás rutas

---

## 🎯 Eventos Personalizados (Opcional)

Si quieres rastrear eventos específicos como clicks en botones, puedes agregar código como este:

```typescript
// Ejemplo: Rastrear click en botón de contacto
const handleContactClick = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'contact_button_click', {
      button_location: 'hero_section',
      page: window.location.pathname
    })
  }
  // Tu lógica normal del botón...
}
```

---

## 🔒 Privacidad y GDPR

Consideraciones importantes:

1. **Cookie Consent**: Considera agregar un banner de cookies si operas en Europa
2. **IP Anonymization**: GA4 ya anonimiza IPs por defecto
3. **Política de Privacidad**: Actualiza tu política de privacidad mencionando el uso de Google Analytics

---

## 🐛 Troubleshooting

### No aparecen datos en Google Analytics

1. ✅ Verifica que el ID sea correcto (formato `G-XXXXXXXXXX`)
2. ✅ Confirma que reiniciaste el servidor después de agregar `.env.local`
3. ✅ Revisa la consola del navegador por errores
4. ✅ Verifica que no tengas bloqueadores de anuncios activos
5. ✅ Los datos pueden tardar 24-48 horas en aparecer en informes históricos

### El código no se ejecuta

```bash
# Verifica que la variable esté disponible
echo $NEXT_PUBLIC_GA_ID

# Si no aparece nada, revisa tu archivo .env.local
cat .env.local | grep NEXT_PUBLIC_GA_ID
```

### Errores de CORS

Si ves errores de CORS, asegúrate de que tu dominio esté configurado correctamente en Google Analytics.

---

## 📊 Informes Útiles en GA4

Una vez que tengas datos, revisa estos informes:

1. **Adquisición** → **Resumen de adquisición de tráfico**
   - De dónde vienen tus visitantes (Google, redes sociales, directo, etc.)

2. **Engagement** → **Páginas y pantallas**
   - Qué páginas son más visitadas
   - Tiempo promedio en cada página

3. **Conversiones**
   - Puedes configurar objetivos personalizados (ej: envío de formulario)

4. **Demografía**
   - Edad, género, ubicación de tus visitantes

5. **Tecnología**
   - Qué dispositivos y navegadores usan tus visitantes

---

## 🎓 Recursos Adicionales

- [Documentación oficial de GA4](https://support.google.com/analytics/answer/9304153)
- [Next.js Analytics Guide](https://nextjs.org/docs/app/building-your-application/optimizing/analytics)
- [GA4 vs Universal Analytics](https://support.google.com/analytics/answer/11583528)

---

## ✨ Listo!

Una vez que agregues tu `NEXT_PUBLIC_GA_ID` al archivo `.env.local` y reinicies el servidor, Google Analytics estará funcionando automáticamente en todas las páginas de tu sitio.

**¿Necesitas ayuda?** Si tienes problemas con la configuración, revisa la sección de troubleshooting o contacta a tu equipo de desarrollo.
