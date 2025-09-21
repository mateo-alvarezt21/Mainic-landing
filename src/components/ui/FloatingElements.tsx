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
    { size: 'w-4 h-4', color: 'bg-primary-500', delay: 0 },
    { size: 'w-6 h-6', color: 'bg-purple-500', delay: 0.5 },
    { size: 'w-3 h-3', color: 'bg-blue-500', delay: 1 },
    { size: 'w-5 h-5', color: 'bg-green-500', delay: 1.5 },
    { size: 'w-4 h-4', color: 'bg-pink-500', delay: 2 },
  ]

  if (!isClient) {
    return null
  }

  return (
    <motion.div 
      className="fixed inset-0 pointer-events-none overflow-hidden opacity-20"
      style={{ y }}
    >
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.size} ${shape.color} rounded-full blur-sm`}
          initial={{
            x: Math.random() * dimensions.width,
            y: dimensions.height + 100,
          }}
          animate={{
            y: -100,
            x: Math.random() * dimensions.width,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            y: index % 2 === 0 ? y : yFast
          }}
        />
      ))}
    </motion.div>
  )
}