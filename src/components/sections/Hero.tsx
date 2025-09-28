'use client'

import { motion, useScroll, useTransform, useMotionValue, animate } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Hero() {
  const { scrollY } = useScroll()
  // Enhanced parallax transforms with different easing
  const yUltraFast = useTransform(scrollY, [0, 800], [0, 350])
  const yFast = useTransform(scrollY, [0, 800], [0, 200])
  const ySlow = useTransform(scrollY, [0, 800], [0, 100])
  const yReverse = useTransform(scrollY, [0, 800], [0, -150])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 1.2])
  const rotate = useTransform(scrollY, [0, 800], [0, 15])
  const skew = useTransform(scrollY, [0, 600], [0, 5])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 1000, height: 800 })
  
  // Motion values for smooth animations
  const scale1 = useMotionValue(1)
  const scale2 = useMotionValue(1.2)
  const scale3 = useMotionValue(0.8)

  useEffect(() => {
    setIsClient(true)
    if (typeof window !== 'undefined') {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
      
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }

      // Start continuous animations for the mouse followers
      const animateScales = () => {
        animate(scale1, [1, 1.1, 1], { 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        })
        animate(scale2, [1.2, 1.35, 1.2], { 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        })
        animate(scale3, [0.8, 1, 0.8], { 
          duration: 2.5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        })
      }

      animateScales()
      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [scale1, scale2, scale3])

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Multi-layer parallax background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: yFast, scale, rotateX: rotate }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
        <div className="absolute inset-0 bg-gradient-radial from-primary-500/20 via-transparent to-transparent" />
      </motion.div>

      {/* Ultra-fast parallax layer */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y: yUltraFast }}
      >
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-lg" />
      </motion.div>

      {/* Reverse parallax layer */}
      <motion.div 
        className="absolute inset-0 opacity-40"
        style={{ y: yReverse, skew: `${skew}deg` }}
      >
        <div className="absolute top-1/4 right-1/4 w-2 h-20 bg-gradient-to-b from-primary-400 to-transparent" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-16 bg-gradient-to-b from-purple-400 to-transparent" />
        <div className="absolute top-1/2 left-1/5 w-1 h-12 bg-gradient-to-b from-cyan-400 to-transparent" />
      </motion.div>

      {/* Animated background elements with parallax */}
      <motion.div className="absolute inset-0" style={{ y: ySlow }}>
        {/* Floating particles */}
        {isClient && Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-30"
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
            }}
            animate={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}

        {/* Enhanced mouse follower with multiple layers */}
        {isClient && (
          <>
            <motion.div
              className="absolute w-96 h-96 bg-gradient-radial from-primary-500/30 to-transparent rounded-full blur-3xl pointer-events-none"
              style={{
                left: mousePosition.x - 192,
                top: mousePosition.y - 192,
                scale: scale1,
              }}
            />
            <motion.div
              className="absolute w-64 h-64 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-2xl pointer-events-none"
              style={{
                left: mousePosition.x - 128,
                top: mousePosition.y - 128,
                scale: scale2,
              }}
            />
            <motion.div
              className="absolute w-32 h-32 bg-gradient-radial from-cyan-400/25 to-transparent rounded-full blur-xl pointer-events-none"
              style={{
                left: mousePosition.x - 64,
                top: mousePosition.y - 64,
                scale: scale3,
              }}
            />
          </>
        )}
      </motion.div>

      {/* Main content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 sm:px-6"
        style={{ opacity }}
      >
        <div className="max-w-5xl mx-auto text-center pt-16 sm:pt-8 md:pt-0">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-primary-500/20 border border-primary-500/30 rounded-full text-primary-300 text-xs sm:text-sm font-medium mb-6 sm:mb-8"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            <span className="whitespace-nowrap">Transformación Digital de Vanguardia</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.3) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 8px 32px rgba(255,255,255,0.1))',
              textShadow: '0 0 40px rgba(255,255,255,0.3)'
            }}
          >
            Automatiza tu{' '}
            <span className="relative inline-block">
              <span 
                className="gradient-text"
                style={{
                  background: 'linear-gradient(135deg, rgba(17,147,212,0.9) 0%, rgba(139,92,246,0.8) 50%, rgba(6,214,160,0.7) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 8px 32px rgba(17,147,212,0.3))'
                }}
              >
                Éxito
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-purple-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
            <br />
            con Tecnología{' '}
            <motion.span
              className="inline-block"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{
                background: 'linear-gradient(-45deg, #1193d4, #8b5cf6, #06d6a0, #ffd60a)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 4px 16px rgba(139,92,246,0.4))'
              }}
            >
              Inteligente
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Transformamos empresas con{' '}
            <span className="text-primary-400 font-semibold">soluciones de software personalizadas</span>,
            automatización de procesos y análisis de datos avanzados que impulsan el crecimiento exponencial.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={scrollToContact}
              className="group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Solicitar Consulta Gratuita
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={scrollToServices}
              className="group backdrop-blur-sm border-white/20 hover:border-primary-400"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Ver Demo en Vivo
            </Button>
          </motion.div>

          {/* Stats preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: '150+', label: 'Proyectos' },
              { number: '98%', label: 'Satisfacción' },
              { number: '50+', label: 'Empresas' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-sm mb-2">Desliza hacia abajo</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}