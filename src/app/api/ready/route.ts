import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Verificar que la aplicación esté lista
    // Aquí puedes agregar verificaciones adicionales como:
    // - Conexión a base de datos
    // - Servicios externos
    // - Variables de entorno críticas
    
    const readinessCheck = {
      status: 'ready',
      timestamp: new Date().toISOString(),
      checks: {
        server: 'ok',
        environment: process.env.NODE_ENV ? 'ok' : 'missing',
        cms: await checkCMSConnection(),
      }
    }

    // Verificar si hay algún check fallido
    const hasFailures = Object.values(readinessCheck.checks).some(status => status !== 'ok')
    
    if (hasFailures) {
      return NextResponse.json(
        { ...readinessCheck, status: 'not ready' }, 
        { status: 503 }
      )
    }

    return NextResponse.json(readinessCheck, { 
      status: 200,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      }
    })
  } catch (error) {
    return NextResponse.json(
      { 
        status: 'not ready', 
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 503 }
    )
  }
}

// Función para verificar conexión con WordPress
async function checkCMSConnection(): Promise<string> {
  try {
    if (!process.env.WP_DOMAIN) {
      return 'not configured'
    }
    
    const wpUrl = `https://${process.env.WP_DOMAIN}/wp-json/wp/v2`
    const response = await fetch(`${wpUrl}/posts?per_page=1`, { 
      method: 'HEAD', 
      signal: AbortSignal.timeout(5000) 
    })
    
    return response.ok ? 'ok' : 'unreachable'
  } catch {
    return 'failed'
  }
}