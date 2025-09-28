'use client'

import { motion } from 'framer-motion'

interface SectionDiffuserProps {
  fromColor: string
  toColor: string
  variant?: 'wave' | 'curve' | 'gradient'
  height?: 'sm' | 'md' | 'lg'
}

export function SectionDiffuser({ 
  fromColor, 
  toColor, 
  variant = 'wave',
  height = 'md'
}: SectionDiffuserProps) {
  const heightClasses = {
    sm: 'h-16',
    md: 'h-24', 
    lg: 'h-32'
  }

  if (variant === 'curve') {
    return (
      <div className={`relative ${heightClasses[height]} overflow-hidden`}>
        {/* Base gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`
          }}
        />
        
        {/* Curved divider */}
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,0 C150,80 350,80 600,50 C850,20 1050,60 1200,0 L1200,120 L0,120 Z"
            className="opacity-30"
            style={{ fill: toColor }}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
        </svg>
      </div>
    )
  }

  if (variant === 'gradient') {
    return (
      <div className={`relative ${heightClasses[height]} overflow-hidden`}>
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${fromColor} 0%, transparent 50%, ${toColor} 100%)`
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
        
        {/* Subtle particles for texture */}
        <div className="absolute inset-0">
          {[
            { left: 15, top: 30, delay: 0.2 },
            { left: 45, top: 70, delay: 0.8 },
            { left: 75, top: 20, delay: 1.2 },
            { left: 85, top: 60, delay: 0.5 }
          ].map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: particle.delay
              }}
            />
          ))}
        </div>
      </div>
    )
  }

  // Default wave variant
  return (
    <div className={`relative ${heightClasses[height]} overflow-hidden`}>
      {/* Base gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`
        }}
      />
      
      {/* Animated wave layers */}
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: fromColor, stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: toColor, stopOpacity: 0.2 }} />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: fromColor, stopOpacity: 0.4 }} />
            <stop offset="100%" style={{ stopColor: toColor, stopOpacity: 0.6 }} />
          </linearGradient>
        </defs>
        
        {/* Background wave */}
        <motion.path
          d="M0,60 C300,80 600,40 900,60 C1050,70 1150,50 1200,60 L1200,120 L0,120 Z"
          fill="url(#waveGradient1)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
        
        {/* Foreground wave */}
        <motion.path
          d="M0,80 C150,100 450,60 600,80 C750,100 1050,70 1200,80 L1200,120 L0,120 Z"
          fill="url(#waveGradient2)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, delay: 0.3, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
      </svg>
      
      {/* Floating particles for added texture */}
      <div className="absolute inset-0 opacity-30">
        {[
          { left: 20, top: 40, delay: 0.5, duration: 4 },
          { left: 60, top: 20, delay: 1.2, duration: 5 },
          { left: 80, top: 60, delay: 0.8, duration: 4.5 }
        ].map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/40"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay
            }}
          />
        ))}
      </div>
    </div>
  )
}