# 🚀 Mainic Landing Page

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js 15" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge&logo=tailwindcss" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-10-ff69b4?style=for-the-badge&logo=framer" alt="Framer Motion" />
</p>

<p align="center">
  <strong>Landing page moderna y optimizada para Mainic Software Services</strong>
</p>

<p align="center">
  Una experiencia web excepcional construida con las últimas tecnologías para mostrar servicios de automatización de software dirigidos al mercado colombiano.
</p>

---

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz elegante con animaciones fluidas
- 🚀 **Alto Rendimiento**: Optimizado con Next.js 15 y Turbopack
- 📱 **Totalmente Responsivo**: Experiencia perfecta en todos los dispositivos
- 🌐 **SEO Optimizado**: Metadatos completos y structured data
- 🎭 **Animaciones Avanzadas**: Transiciones suaves con Framer Motion
- 🔍 **TypeScript**: Código type-safe para mayor robustez
- 🎯 **Localizado**: Optimizado para el mercado hispanohablante

## 🛠️ Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - Framework React con App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático
- **[TailwindCSS v4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Framer Motion](https://www.framer.com/motion/)** - Librería de animaciones
- **[React Hook Form](https://react-hook-form.com/)** - Manejo de formularios
- **[Zod](https://zod.dev/)** - Validación de esquemas

### Herramientas
- **[Lucide React](https://lucide.dev/)** - Iconos modernos
- **[ESLint](https://eslint.org/)** - Linting y calidad de código
- **[Turbopack](https://turbo.build/pack)** - Bundler ultra-rápido

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router (Next.js 15)
│   ├── layout.tsx         # Layout principal con SEO
│   ├── page.tsx          # Página principal
│   └── globals.css       # Estilos globales
├── components/
│   ├── forms/            # Componentes de formularios
│   │   ├── ContactForm.tsx
│   │   └── Newsletter.tsx
│   ├── layout/           # Componentes de layout
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── sections/         # Secciones de la página
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── TechStack.tsx
│   │   ├── Cases.tsx
│   │   ├── Statistics.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx
│   └── ui/               # Componentes UI reutilizables
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── FloatingElements.tsx
│       └── LoadingSpinner.tsx
├── hooks/                # Custom hooks
├── lib/                  # Utilidades y configuraciones
│   ├── constants.ts      # Constantes de la aplicación
│   ├── utils.ts         # Funciones utilitarias
│   └── validations.ts   # Esquemas de validación Zod
└── types/                # Definiciones de tipos TypeScript
```

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- npm, yarn, pnpm o bun

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/mainic-landing-page.git
   cd mainic-landing-page
   ```

2. **Instala dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Configura variables de entorno**
   ```bash
   cp .env.example .env.local
   ```
   
   Edita `.env.local` con tus valores:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   # Agregar otras variables según necesites
   ```

4. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

5. **Abre tu navegador** en [http://localhost:3000](http://localhost:3000)

## 📜 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo con Turbopack |
| `npm run build` | Construye la aplicación para producción |
| `npm start` | Inicia servidor de producción |
| `npm run lint` | Ejecuta ESLint para verificar calidad del código |

## 🎨 Personalización

### Colores y Tema

Los colores principales se configuran en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    900: '#1e3a8a',
  }
}
```

### Contenido

El contenido principal se encuentra en:
- `lib/constants.ts` - Datos de servicios, testimonios, etc.
- `components/sections/` - Secciones individuales de la página

## 🚀 Deployment

### Con Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tu-usuario/mainic-landing-page)

### Con Coolify

1. Conecta tu repositorio a Coolify
2. Configura las variables de entorno
3. Deploy automático en cada push

### Manual

```bash
npm run build
npm start
```

## 🔧 Integración con CMS

Esta landing page está preparada para integrarse con sistemas de gestión de contenido:

### WordPress Headless
```typescript
// lib/wordpress.ts
export async function getWordPressData(endpoint: string) {
  const res = await fetch(`${process.env.WORDPRESS_API_URL}/${endpoint}`)
  return res.json()
}
```

### Strapi
```typescript
// lib/strapi.ts
export async function getStrapiData(endpoint: string) {
  const res = await fetch(`${process.env.STRAPI_URL}/api/${endpoint}?populate=*`)
  return res.json()
}
```

## 📊 SEO y Performance

- ✅ **Core Web Vitals** optimizados
- ✅ **Metadata** completos para redes sociales
- ✅ **Structured Data** para motores de búsqueda
- ✅ **Lazy Loading** de imágenes
- ✅ **Fonts** optimizados con Next.js

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

## 👨‍💻 Autor

**Mainics**
- Website: [mainic.com](https://mainic.com)
- Email: contacto@mainic.com

---

<p align="center">
  Hecho con ❤️ en Mainics
</p>
