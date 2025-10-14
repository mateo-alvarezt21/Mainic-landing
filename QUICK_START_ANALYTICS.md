# 🚀 Inicio Rápido - Google Analytics 4

**✅ Ya está implementado con `@next/third-parties` (paquete oficial de Next.js)**

## 3 Pasos Para Activar Analytics

### 1️⃣ Tu ID de Google Analytics

**Tu ID es:** `G-MHYKF70S8J` ✅ (Ya lo tienes)

### 2️⃣ Configurar en CapRover (Producción)

1. Accede a tu CapRover dashboard
2. Apps → Selecciona tu aplicación
3. App Configs → Environmental Variables
4. Agrega:
   ```
   NEXT_PUBLIC_GA_ID=G-MHYKF70S8J
   ```
5. Save & Update (CapRover hará redeploy automático)

### 3️⃣ Para Desarrollo Local

El archivo `.env.local` ya está configurado con tu ID. Solo:

```bash
npm run dev
```

---

## ✅ Verificar que Funciona

### Opción 1: Verificador Automático

```bash
npm run check-analytics
```

Este script verifica toda tu configuración automáticamente.

### Opción 2: Google Analytics Tiempo Real

1. Abre [analytics.google.com](https://analytics.google.com/)
2. Ve a **Informes** → **Tiempo real**
3. Abre tu sitio en otra pestaña
4. En 5-10 segundos verás tu visita 🎉

---

## 📚 Documentación Completa

Lee [GOOGLE_ANALYTICS_SETUP.md](./GOOGLE_ANALYTICS_SETUP.md) para más detalles sobre:
- Configuración avanzada
- Eventos personalizados
- Troubleshooting
- Mejores prácticas

---

## 🆘 Problemas Comunes

**No aparecen datos:**
- ✅ Verifica que el formato sea correcto: `G-XXXXXXXXXX`
- ✅ Reiniciaste el servidor después de editar `.env.local`
- ✅ No tienes bloqueadores de anuncios activos
- ✅ Espera 24-48h para datos históricos (usa "Tiempo real" para verificar inmediatamente)

**Variable no se lee:**
```bash
# Verifica que esté configurada
cat .env.local | grep NEXT_PUBLIC_GA_ID

# Debería mostrar:
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

¡Listo! Google Analytics ya está funcionando en todas tus páginas 🎉
