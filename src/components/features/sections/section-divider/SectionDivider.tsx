'use client'

import { motion } from 'framer-motion'

interface SectionDividerProps {
  variant?: 'default' | 'gradient' | 'minimal'
}

export function SectionDivider({ variant = 'default' }: SectionDividerProps) {
  if (variant === 'gradient') {
    return (
      <section className="py-16 md:py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #1e40af/10 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, #7c3aed/10 0%, transparent 50%),
              linear-gradient(90deg, transparent 49%, #334155/30 50%, transparent 51%),
              linear-gradient(0deg, transparent 49%, #334155/30 50%, transparent 51%)
            `,
            backgroundSize: '80px 80px, 80px 80px, 40px 40px, 40px 40px'
          }} />
        </div>
        
        {/* Floating elements */}
        <div className="relative">
          {[
            { left: 12.5, top: 70.6, delay: 0.5, duration: 4.8 },
            { left: 54.2, top: 62.8, delay: 1.2, duration: 5.4 },
            { left: 82.7, top: 99.1, delay: 0.8, duration: 4.2 },
            { left: 9.8, top: 49.8, delay: 1.8, duration: 5.1 },
            { left: 68.1, top: 33.8, delay: 0.3, duration: 4.6 },
            { left: 69.2, top: 32.3, delay: 1.5, duration: 4.9 },
            { left: 30.8, top: 64.2, delay: 0.9, duration: 5.2 },
            { left: 47.3, top: 94.6, delay: 1.1, duration: 4.7 }
          ].map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay
              }}
            />
          ))}
        </div>
        
        {/* Central divider line */}
        <div className="flex justify-center items-center">
          <div className="flex items-center max-w-md w-full">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-600 to-slate-600"></div>
            <div className="mx-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-600 to-transparent"></div>
          </div>
        </div>
      </section>
    )
  }

  if (variant === 'minimal') {
    return (
      <section className="py-8 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent"></div>
          </div>
        </div>
      </section>
    )
  }

  // Default variant
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 30% 30%, #1e40af/15 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, #7c3aed/15 0%, transparent 50%)
          `,
          backgroundSize: '100px 100px, 120px 120px'
        }} />
      </div>
      
      {/* Animated separator */}
      <div className="relative flex justify-center items-center">
        <motion.div 
          className="flex items-center space-x-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="w-8 h-px bg-gradient-to-r from-transparent to-blue-400"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.div 
            className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity 
            }}
          />
          <motion.div 
            className="w-8 h-px bg-gradient-to-r from-purple-400 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
    </section>
  )
}