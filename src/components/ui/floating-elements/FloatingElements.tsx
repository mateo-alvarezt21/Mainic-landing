'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function FloatingElements() {
  const [isClient, setIsClient] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 1000, height: 800 })

  useEffect(() => {
    setIsClient(true)
    if (typeof window !== 'undefined') {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }
  }, [])

  const isMobile = dimensions.width < 768

  const shapes = [
    { size: isMobile ? 'w-1.5 h-1.5' : 'w-2.5 h-2.5', color: 'bg-primary-500', delay: 0, glow: 'shadow-primary-500/50' },
    { size: isMobile ? 'w-2 h-2' : 'w-3 h-3', color: 'bg-purple-500', delay: 1, glow: 'shadow-purple-500/50' },
    { size: isMobile ? 'w-1 h-1' : 'w-2 h-2', color: 'bg-blue-500', delay: 2, glow: 'shadow-blue-500/50' },
    { size: isMobile ? 'w-1.5 h-1.5' : 'w-2.5 h-2.5', color: 'bg-green-500', delay: 3, glow: 'shadow-green-500/50' },
    { size: isMobile ? 'w-1 h-1' : 'w-2 h-2', color: 'bg-pink-500', delay: 4, glow: 'shadow-pink-500/50' },
    { size: isMobile ? 'w-1.5 h-1.5' : 'w-2.5 h-2.5', color: 'bg-cyan-500', delay: 5, glow: 'shadow-cyan-500/50' },
  ]

  if (!isClient) {
    return null
  }

  // Solo mostrar hasta la altura del Hero (aproximadamente 100vh)
  const heroHeight = dimensions.height

  return (
    <>
      {/* Partículas de colores - detrás del contenido pero encima del fondo */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-[5]" style={{ height: `${heroHeight}px` }}>
        {shapes.map((shape, index) => (
          <motion.div
            key={index}
            className={`absolute ${shape.size} ${shape.color} rounded-full shadow-2xl ${shape.glow}`}
            initial={{
              x: Math.random() * dimensions.width,
              y: heroHeight + 100,
              scale: 0,
              opacity: 0,
            }}
            animate={{
              y: -100,
              x: [
                Math.random() * dimensions.width,
                Math.random() * dimensions.width,
                Math.random() * dimensions.width,
              ],
              scale: [0, 1, 0.8, 1, 0],
              opacity: [0, 0.6, 0.8, 0.4, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 18,
              delay: shape.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              filter: 'blur(0.5px) drop-shadow(0 0 10px currentColor)',
            }}
          />
        ))}
      </div>

      {/* Partículas blancas pequeñas - encima del contenido */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-30" style={{ height: `${heroHeight}px` }}>
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={`extra-${i}`}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * heroHeight,
            }}
            animate={{
              x: Math.random() * dimensions.width,
              y: Math.random() * heroHeight,
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              delay: Math.random() * 5,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
            style={{
              filter: 'blur(0.5px)',
            }}
          />
        ))}
      </div>
    </>
  )
}