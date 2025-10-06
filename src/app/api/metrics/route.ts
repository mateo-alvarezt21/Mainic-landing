import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const metrics = {
      timestamp: new Date().toISOString(),
      system: {
        uptime: process.uptime(),
        memory: {
          heapUsed: process.memoryUsage().heapUsed,
          heapTotal: process.memoryUsage().heapTotal,
          external: process.memoryUsage().external,
          rss: process.memoryUsage().rss,
        },
        cpu: {
          platform: process.platform,
          arch: process.arch,
          nodeVersion: process.version,
        },
        process: {
          pid: process.pid,
          ppid: process.ppid,
          title: process.title,
        }
      },
      environment: {
        nodeEnv: process.env.NODE_ENV,
        version: process.env.npm_package_version || '1.0.0',
        port: process.env.PORT || '3000',
      },
      performance: {
        startTime: process.hrtime.bigint(),
        resourceUsage: process.resourceUsage ? process.resourceUsage() : null,
      }
    }

    return NextResponse.json(metrics, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      }
    })
  } catch (error) {
    return NextResponse.json(
      { 
        error: 'Failed to collect metrics',
        message: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      }, 
      { status: 500 }
    )
  }
}