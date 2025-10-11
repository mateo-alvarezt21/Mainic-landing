'use client'

import { motion, useScroll, useTransform, useMotionValue, animate } from 'framer-motion'
// import { Button } from '@/components/ui'
import { /* Play, */ Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
// import { getPageInfo } from '@/lib/wp' // Comentado - WordPress no disponible

interface CompanyFromEndpoint {
  name: string
  logo: string
}

const fetchCompaniesFromEndpoint = async (): Promise<CompanyFromEndpoint[]> => {
  try {
    return [
      {
        name: 'Empresa de Confianza',
        logo: 'https://strapi-core.mainics.com/uploads/BLANCO_d64b3634d7.png'
      }
    ]
  } catch (error) {
    console.error('Error al crear datos de empresas:', error)
    return []
  }
}

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
  const [endpointCompanies, setEndpointCompanies] = useState<CompanyFromEndpoint[]>([])

  // Motion values for smooth animations
  const scale1 = useMotionValue(1)
  const scale2 = useMotionValue(1.2)
  const scale3 = useMotionValue(0.8)

  useEffect(() => {
    setIsClient(true)
    
    // Cargar empresas
    const loadCompanies = async () => {
      try {
        const companies = await fetchCompaniesFromEndpoint()
        console.log('Companies loaded in Hero:', companies)
        setEndpointCompanies(companies)
      } catch (error) {
        console.error('Error loading companies:', error)
      }
    }
    
    loadCompanies()
    
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

  // const scrollToServices = () => {
  //   const servicesSection = document.getElementById('services')
  //   if (servicesSection) {
  //     servicesSection.scrollIntoView({ behavior: 'smooth' })
  //   }
  // }

  // const scrollToContact = () => {
  //   const contactSection = document.getElementById('contact')
  //   if (contactSection) {
  //     contactSection.scrollIntoView({ behavior: 'smooth' })
  //   }
  // }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-0">
      {/* Multi-layer parallax background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: yFast, scale, rotateX: rotate }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'var(--bg-primary)' }}
        />
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
        className="relative z-20 w-full px-4 sm:px-6"
        style={{ opacity }}
      >
        <div className="max-w-7xl mx-auto pt-16 sm:pt-8 md:pt-0">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6 sm:mb-8"
          >
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-primary-500/20 border border-primary-500/30 rounded-full text-primary-300 text-xs sm:text-sm font-medium">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              <span className="whitespace-nowrap">Transformación Digital de Vanguardia</span>
            </div>
          </motion.div>

          {/* Main content centered */}
          <div className="text-center max-w-5xl mx-auto">
            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight"
              style={{
                color: 'var(--text-primary)'
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
              className="text-lg md:text-xl mb-10 max-w-4xl mx-auto leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
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
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact')
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3"
              >
                <span>Comienza Hoy</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button
                onClick={() => {
                  const servicesSection = document.getElementById('services')
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="px-8 py-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 font-semibold"
                style={{
                  borderColor: 'var(--border-secondary)',
                  color: 'var(--text-primary)',
                  backgroundColor: 'transparent'
                }}
              >
                Ver Servicios
              </button>
            </motion.div>

          </div>

          {/* Companies that trust us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <p className="text-base mb-6" style={{ color: 'var(--text-secondary)' }}>Empresas que confían en nosotros</p>
            </div>
            <div className="flex justify-center items-center">
              {endpointCompanies.length > 0 ? (
                endpointCompanies.map((company, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.9 + index * 0.1 
                    }}
                    className="relative"
                    title={company.name}
                  >
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={350}
                      height={200}
                      className="object-contain company-logo opacity-80 hover:opacity-100 transition-opacity duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </motion.div>
                ))
              ) : (
                <div className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Cargando empresas...</div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>

    </section>
  )
}