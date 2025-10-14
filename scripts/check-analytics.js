#!/usr/bin/env node

/**
 * Script para verificar la configuración de Google Analytics
 * Uso: node scripts/check-analytics.js
 */

const fs = require('fs')
const path = require('path')

console.log('🔍 Verificando configuración de Google Analytics...\n')

// Verificar si existe .env.local
const envLocalPath = path.join(process.cwd(), '.env.local')
const envLocalExists = fs.existsSync(envLocalPath)

if (!envLocalExists) {
  console.log('❌ Archivo .env.local no encontrado')
  console.log('📝 Crea el archivo .env.local en la raíz del proyecto')
  console.log('💡 Puedes copiar .env.local.example:\n')
  console.log('   cp .env.local.example .env.local\n')
  process.exit(1)
}

console.log('✅ Archivo .env.local encontrado')

// Leer el archivo .env.local
const envContent = fs.readFileSync(envLocalPath, 'utf-8')

// Buscar NEXT_PUBLIC_GA_ID
const gaIdMatch = envContent.match(/NEXT_PUBLIC_GA_ID=(.+)/)

if (!gaIdMatch) {
  console.log('❌ Variable NEXT_PUBLIC_GA_ID no encontrada en .env.local')
  console.log('📝 Agrega la siguiente línea a .env.local:\n')
  console.log('   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX\n')
  console.log('💡 Reemplaza G-XXXXXXXXXX con tu ID real de Google Analytics')
  process.exit(1)
}

const gaId = gaIdMatch[1].trim()

if (gaId === 'G-XXXXXXXXXX' || gaId === '' || gaId === 'undefined') {
  console.log('⚠️  NEXT_PUBLIC_GA_ID está configurado pero parece ser un valor de ejemplo')
  console.log(`📝 Valor actual: ${gaId}`)
  console.log('💡 Reemplázalo con tu ID real de Google Analytics (formato: G-XXXXXXXXXX)\n')
  process.exit(1)
}

// Validar formato del ID
const gaIdRegex = /^G-[A-Z0-9]{10}$/
if (!gaIdRegex.test(gaId)) {
  console.log('⚠️  El formato del NEXT_PUBLIC_GA_ID parece incorrecto')
  console.log(`📝 Valor actual: ${gaId}`)
  console.log('✅ Formato esperado: G-XXXXXXXXXX (donde X son letras/números)\n')
  console.log('💡 Si tu ID es correcto, ignora esta advertencia\n')
}

console.log('✅ NEXT_PUBLIC_GA_ID configurado correctamente')
console.log(`📊 ID: ${gaId}\n`)

// Verificar que el paquete @next/third-parties está instalado
const packageJsonPath = path.join(process.cwd(), 'package.json')
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))

if (!packageJson.dependencies['@next/third-parties']) {
  console.log('❌ Paquete @next/third-parties no instalado')
  console.log('📝 Instala el paquete oficial de Next.js:\n')
  console.log('   npm install @next/third-parties\n')
  process.exit(1)
}

console.log('✅ Paquete @next/third-parties instalado')

// Verificar que está integrado en layout.tsx
const layoutPath = path.join(process.cwd(), 'src', 'app', 'layout.tsx')

if (!fs.existsSync(layoutPath)) {
  console.log('❌ Archivo layout.tsx no encontrado\n')
  process.exit(1)
}

const layoutContent = fs.readFileSync(layoutPath, 'utf-8')

if (!layoutContent.includes('@next/third-parties/google')) {
  console.log('❌ GoogleAnalytics de @next/third-parties no está importado en layout.tsx')
  console.log('📝 Asegúrate de importar desde @next/third-parties/google en layout.tsx\n')
  process.exit(1)
}

if (!layoutContent.includes('GoogleAnalytics')) {
  console.log('❌ Componente GoogleAnalytics no está usado en layout.tsx')
  console.log('📝 Asegúrate de usar el componente <GoogleAnalytics gaId={...} /> en layout.tsx\n')
  process.exit(1)
}

console.log('✅ GoogleAnalytics (@next/third-parties) está integrado en layout.tsx\n')

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
console.log('🎉 ¡Todo configurado correctamente!')
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

console.log('📋 Próximos pasos:\n')
console.log('1. Reinicia tu servidor de desarrollo:')
console.log('   npm run dev\n')
console.log('2. Visita tu sitio en el navegador')
console.log('3. Abre Google Analytics → Tiempo real')
console.log('4. Deberías ver tu visita en tiempo real\n')

console.log('💡 Más información en: GOOGLE_ANALYTICS_SETUP.md\n')
