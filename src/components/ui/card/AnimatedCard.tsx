'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  delay?: number
  className?: string
  hoverScale?: number
}

export function AnimatedCard({ 
  children, 
  delay = 0, 
  className = '', 
  hoverScale = 1.02 
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: hoverScale, y: -5 }}
      transition={{ 
        duration: 0.6, 
        delay 
      }}
      viewport={{ once: true }}
      className={`card-hover ${className}`}
    >
      {children}
    </motion.div>
  )
}