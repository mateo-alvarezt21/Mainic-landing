'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function FloatingElements() {
  const [isClient, setIsClient] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 1000, height: 800 })
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, -200])
  const yFast = useTransform(scrollY, [0, 1000], [0, -300])

  useEffect(() => {
    setIsClient(true)
    if (typeof window !== 'undefined') {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }
  }, [])

  const shapes = [
    { size: 'w-6 h-6', color: 'bg-primary-500', delay: 0, glow: 'shadow-primary-500/50' },
    { size: 'w-8 h-8', color: 'bg-purple-500', delay: 0.5, glow: 'shadow-purple-500/50' },
    { size: 'w-4 h-4', color: 'bg-blue-500', delay: 1, glow: 'shadow-blue-500/50' },
    { size: 'w-7 h-7', color: 'bg-green-500', delay: 1.5, glow: 'shadow-green-500/50' },
    { size: 'w-5 h-5', color: 'bg-pink-500', delay: 2, glow: 'shadow-pink-500/50' },
    { size: 'w-6 h-6', color: 'bg-cyan-500', delay: 2.5, glow: 'shadow-cyan-500/50' },
    { size: 'w-4 h-4', color: 'bg-yellow-500', delay: 3, glow: 'shadow-yellow-500/50' },
    { size: 'w-5 h-5', color: 'bg-red-500', delay: 3.5, glow: 'shadow-red-500/50' },
  ]

  if (!isClient) {
    return null
  }

  return (
    <motion.div 
      className="fixed inset-0 pointer-events-none overflow-hidden opacity-60"
      style={{ y }}
    >
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.size} ${shape.color} rounded-full shadow-2xl ${shape.glow}`}
          initial={{
            x: Math.random() * dimensions.width,
            y: dimensions.height + 100,
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
            opacity: [0, 0.8, 1, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 12,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            y: index % 2 === 0 ? y : yFast,
            filter: 'blur(1px) drop-shadow(0 0 10px currentColor)',
          }}
        />
      ))}
      
      {/* Additional larger floating elements */}
      {Array.from({ length: 15 }, (_, i) => (
        <motion.div
          key={`extra-${i}`}
          className="absolute w-2 h-2 bg-white/30 rounded-full"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          animate={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
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
    </motion.div>
  )
}