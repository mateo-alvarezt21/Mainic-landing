'use client'

import { motion, useScroll, useTransform, useMotionValue, animate } from 'framer-motion'
// import { Button } from '@/components/ui'
import { ArrowRight, /* Play, */ Sparkles } from 'lucide-react'
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
        className="relative z-10 w-full px-4 sm:px-6"
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
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed"
            >
              Transformamos empresas con{' '}
              <span className="text-primary-400 font-semibold">soluciones de software personalizadas</span>,
              automatización de procesos y análisis de datos avanzados que impulsan el crecimiento exponencial.
            </motion.p>

            {/* Single CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center"
            >
              <motion.button
                onClick={scrollToContact}
                className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 text-white font-bold text-lg shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  boxShadow: [
                    "0 20px 40px rgba(16, 185, 129, 0.3)",
                    "0 25px 50px rgba(59, 130, 246, 0.4)",
                    "0 20px 40px rgba(168, 85, 247, 0.3)",
                    "0 20px 40px rgba(16, 185, 129, 0.3)"
                  ]
                }}
                transition={{
                  boxShadow: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 200%'
                  }}
                />
                
                {/* Sparkle effect */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: [
                      'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                      'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                      'radial-gradient(circle at 40% 40%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                      'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Pulse ring */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-40"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <span className="relative z-10 flex items-center gap-3">
                  <motion.span
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(255,255,255,0.5)",
                        "0 0 20px rgba(255,255,255,0.8)",
                        "0 0 10px rgba(255,255,255,0.5)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    🚀 Solicitar Consulta Gratuita
                  </motion.span>
                  <motion.div
                    animate={{
                      x: [0, 5, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </motion.div>
                </span>
              </motion.button>
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
              <p className="text-gray-400 text-base mb-6">Empresas que confían en nosotros</p>
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
                      className="object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </motion.div>
                ))
              ) : (
                <div className="text-gray-500 text-sm">Cargando empresas...</div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>

    </section>
  )
}