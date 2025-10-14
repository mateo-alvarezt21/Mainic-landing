# Sistema de Temas - Mainic Landing Page

## Descripción General

Este proyecto utiliza un sistema de temas personalizado basado en **variables CSS** que cambian automáticamente entre modo claro y modo oscuro. Este enfoque proporciona consistencia visual en toda la aplicación y facilita el mantenimiento del tema.

## Variables CSS Disponibles

Las variables CSS están definidas en `src/app/globals.css` y se aplican automáticamente según el tema activo.

### Variables de Color

#### Modo Claro (`:root`)
```css
:root {
  /* Fondos */
  --bg-primary: #ffffff;
  --bg-primary-rgb: 255, 255, 255;
  --bg-secondary: #f8fafc;
  --bg-tertiary: #f1f5f9;

  /* Textos */
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --text-tertiary: #9ca3af;

  /* Bordes */
  --border-primary: #e5e7eb;
  --border-secondary: #d1d5db;

  /* Botones */
  --button-text: #1f2937;

  /* Partículas */
  --particle-primary: rgba(37, 99, 235, 0.6);
  --particle-secondary: rgba(59, 130, 246, 0.6);
  --particle-accent: rgba(52, 211, 153, 0.6);
}
```

#### Modo Oscuro (`.dark`)
```css
.dark {
  /* Fondos */
  --bg-primary: #111618;
  --bg-primary-rgb: 17, 22, 24;
  --bg-secondary: #181E21;
  --bg-tertiary: #20272B;

  /* Textos */
  --text-primary: #ffffff;
  --text-secondary: #e5e7eb;
  --text-tertiary: #9ca3af;

  /* Bordes */
  --border-primary: #374151;
  --border-secondary: #4b5563;

  /* Botones */
  --button-text: #ffffff;

  /* Partículas */
  --particle-primary: rgba(96, 165, 250, 0.6);
  --particle-secondary: rgba(129, 140, 248, 0.6);
  --particle-accent: rgba(52, 211, 153, 0.6);
}
```

## Cómo Usar el Sistema de Temas

### ✅ Método Correcto: Variables CSS

Utiliza las variables CSS en el atributo `style` de los elementos:

```tsx
// ✅ CORRECTO - Títulos principales
<h1 style={{ color: 'var(--text-primary)' }}>
  Mi Título
</h1>

// ✅ CORRECTO - Texto secundario
<p style={{ color: 'var(--text-secondary)' }}>
  Descripción o subtítulo
</p>

// ✅ CORRECTO - Texto terciario (menos prominente)
<span style={{ color: 'var(--text-tertiary)' }}>
  Información adicional
</span>

// ✅ CORRECTO - Fondos de sección
<section style={{ backgroundColor: 'var(--bg-secondary)' }}>
  {/* contenido */}
</section>

// ✅ CORRECTO - Cards con fondo y borde
<div style={{
  backgroundColor: 'var(--bg-primary)',
  borderColor: 'var(--border-primary)',
  borderWidth: '1px'
}}>
  {/* contenido */}
</div>

// ✅ CORRECTO - Usando RGB para transparencias
<div style={{
  backgroundColor: 'rgba(var(--bg-primary-rgb), 0.4)'
}}>
  {/* contenido con transparencia */}
</div>
```

### ❌ Método Incorrecto: Clases de Tailwind con dark:

**NO uses** clases de Tailwind con el prefijo `dark:` para elementos que deben seguir el sistema de temas del proyecto:

```tsx
// ❌ INCORRECTO - No usar esto
<h1 className="text-gray-900 dark:text-white">
  Mi Título
</h1>

// ❌ INCORRECTO - No usar esto
<div className="bg-white dark:bg-gray-800">
  {/* contenido */}
</div>

// ❌ INCORRECTO - No usar esto
<p className="text-gray-600 dark:text-gray-300">
  Descripción
</p>
```

### Excepciones

**Puedes usar clases de Tailwind con `dark:`** solo para colores específicos de acento o elementos que no necesitan seguir el sistema de variables globales:

```tsx
// ✅ PERMITIDO - Colores de acento específicos
<div className="text-blue-600 dark:text-blue-400">
  {/* Elemento con color azul específico */}
</div>

// ✅ PERMITIDO - Fondos de iconos
<div className="bg-blue-100 dark:bg-blue-900/20">
  <Icon />
</div>
```

## Guía de Variables por Uso

| Uso | Variable | Modo Claro | Modo Oscuro |
|-----|----------|------------|-------------|
| **Títulos principales** | `var(--text-primary)` | Gris oscuro (#1f2937) | Blanco (#ffffff) |
| **Texto descriptivo** | `var(--text-secondary)` | Gris medio (#6b7280) | Gris claro (#e5e7eb) |
| **Texto terciario** | `var(--text-tertiary)` | Gris claro (#9ca3af) | Gris medio (#9ca3af) |
| **Fondo principal** | `var(--bg-primary)` | Blanco | Gris muy oscuro |
| **Fondo de sección** | `var(--bg-secondary)` | Gris muy claro | Gris oscuro |
| **Fondo terciario** | `var(--bg-tertiary)` | Gris claro | Gris medio-oscuro |
| **Bordes principales** | `var(--border-primary)` | Gris muy claro | Gris medio |
| **Bordes secundarios** | `var(--border-secondary)` | Gris claro | Gris medio-oscuro |

## Ejemplos de Componentes

### Ejemplo 1: Sección con Header

```tsx
<section style={{ backgroundColor: 'var(--bg-secondary)' }}>
  <div className="max-w-7xl mx-auto px-4">
    <h2 style={{ color: 'var(--text-primary)' }}>
      Título de Sección
    </h2>
    <p style={{ color: 'var(--text-secondary)' }}>
      Descripción de la sección
    </p>
  </div>
</section>
```

### Ejemplo 2: Card con Borde

```tsx
<div
  className="p-6 rounded-lg shadow-lg"
  style={{
    backgroundColor: 'var(--bg-primary)',
    borderColor: 'var(--border-primary)',
    borderWidth: '1px'
  }}
>
  <h3 style={{ color: 'var(--text-primary)' }}>
    Título de Card
  </h3>
  <p style={{ color: 'var(--text-secondary)' }}>
    Contenido de la card
  </p>
</div>
```

### Ejemplo 3: Lista con Items

```tsx
<ul className="space-y-2">
  {items.map((item) => (
    <li
      key={item.id}
      style={{ color: 'var(--text-secondary)' }}
    >
      {item.name}
    </li>
  ))}
</ul>
```

## Componentes que Usan el Sistema

Los siguientes componentes ya implementan correctamente el sistema de temas:

- ✅ `Hero.tsx` - Sección hero principal
- ✅ `Services.tsx` - Sección de servicios
- ✅ `Stats.tsx` - Estadísticas
- ✅ `About.tsx` - Sobre nosotros
- ✅ `Cases.tsx` - Casos de estudio

## Verificación del Tema

Para verificar que un componente está usando correctamente el sistema de temas:

1. **Revisa el código**: Busca `var(--text-primary)`, `var(--bg-primary)`, etc.
2. **Prueba el toggle**: Cambia entre modo claro y oscuro usando el botón de tema
3. **Verifica la legibilidad**:
   - En modo claro: texto oscuro sobre fondo claro
   - En modo oscuro: texto claro sobre fondo oscuro

## Mantenimiento

### Agregar una Nueva Variable

Si necesitas agregar una nueva variable de tema:

1. Añádela en `src/app/globals.css` tanto en `:root` como en `.dark`
2. Documenta su uso en este archivo
3. Actualiza los componentes existentes si es necesario

### Actualizar Colores

Para cambiar los colores del tema:

1. Modifica los valores en `src/app/globals.css`
2. Los cambios se aplicarán automáticamente a todos los componentes

## Troubleshooting

### Problema: El texto no es visible en modo claro

**Solución**: Verifica que estés usando `var(--text-primary)` o `var(--text-secondary)` en lugar de colores hardcoded o clases de Tailwind.

### Problema: El componente no cambia con el tema

**Solución**: Asegúrate de que el componente sea un Client Component (`'use client'`) si tiene interactividad, y que uses variables CSS en lugar de clases de Tailwind.

### Problema: Los bordes no son visibles

**Solución**: Usa `var(--border-primary)` para bordes y asegúrate de incluir `borderWidth: '1px'` en el style.

## Recursos

- Archivo de variables: `src/app/globals.css`
- Componente de ejemplo: `src/components/features/sections/services/Services.tsx`
- Toggle de tema: `src/components/ui/ThemeToggle.tsx`
