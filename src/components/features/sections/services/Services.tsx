'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Settings, Code, BarChart3, ArrowRight, Zap, Gamepad2, Cpu } from 'lucide-react'
import { useRef } from 'react'
import Link from 'next/link'

const services = [
  {
    id: 'automation',
    icon: Settings,
    title: 'Automatización de Procesos',
    shortTitle: 'Automatización',
    description: 'Automatiza tareas repetitivas y flujos de trabajo para aumentar la eficiencia y reducir costos operativos.',
    features: [
      'Workflows automatizados',
      'Integración de sistemas',
      'Reducción de errores',
      'Optimización de tiempo'
    ],
    color: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/20 to-cyan-500/20',
    link: '/automatizaciones-para-su-negocio'
  },
  {
    id: 'development',
    icon: Code,
    title: 'Desarrollo de Software Personalizado',
    shortTitle: 'Desarrollo',
    description: 'Desarrollamos aplicaciones de software a medida para abordar los desafíos únicos de tu empresa.',
    features: [
      'Aplicaciones web y móviles',
      'APIs robustas',
      'Arquitectura escalable',
      'Soporte continuo'
    ],
    color: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/20 to-pink-500/20',
    link: '/software-para-mi-negocio'
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Análisis de Datos e Informes',
    shortTitle: 'Análisis',
    description: 'Obtén información valiosa de tus datos con herramientas avanzadas de análisis y reportes.',
    features: [
      'Dashboards interactivos',
      'Reportes automatizados',
      'Business Intelligence',
      'Predicciones basadas en IA'
    ],
    color: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/20 to-teal-500/20',
    link: '/analisis-de-datos'
  },
  {
    id: 'gamedev',
    icon: Gamepad2,
    title: 'Desarrollo de Videojuegos',
    shortTitle: 'Videojuegos',
    description: 'Creamos experiencias interactivas y videojuegos innovadores para diferentes plataformas.',
    features: [
      'Juegos 2D y 3D',
      'Multiplataforma',
      'Diseño de mecánicas',
      'Arte y animación'
    ],
    color: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-500/20 to-red-500/20',
    link: '/videojuego-para-mi-empresa'
  },
  {
    id: 'hardware',
    icon: Cpu,
    title: 'Armado de Equipos de Cómputo',
    shortTitle: 'Hardware',
    description: 'Ensamblamos y configuramos equipos de cómputo a medida para empresas y usuarios especializados.',
    features: [
      'PCs empresariales',
      'Workstations personalizadas',
      'Gaming y renderizado',
      'Asesoría técnica'
    ],
    color: 'from-indigo-500 to-blue-600',
    bgGradient: 'from-indigo-500/20 to-blue-600/20',
    link: '/hardware-personalizado'
  }
]

export function Services() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])

  return (
    <section ref={ref} id="services" className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Animated grid */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(var(--bg-primary-rgb), 0.8), rgba(var(--bg-primary-rgb), 0.6))' }}>
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #1e40af20 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, #7c3aed20 0%, transparent 50%),
              linear-gradient(90deg, transparent 49%, #334155 50%, transparent 51%),
              linear-gradient(0deg, transparent 49%, #334155 50%, transparent 51%)
            `,
            backgroundSize: '100px 100px, 100px 100px, 50px 50px, 50px 50px',
            opacity: 0.3
          }} />
        </div>
        
        {/* Floating particles */}
        <motion.div 
          className="absolute inset-0"
          style={{ y, opacity }}
        >
          {[
            { left: 88.6, top: 79.7, delay: 0.4, duration: 4.1 },
            { left: 77.8, top: 0.9, delay: 1.3, duration: 5.2 },
            { left: 21.5, top: 60.4, delay: 0.7, duration: 4.8 },
            { left: 36.5, top: 26.7, delay: 1.8, duration: 4.3 },
            { left: 98.2, top: 82.6, delay: 0.2, duration: 5.0 },
            { left: 57.7, top: 24.7, delay: 1.5, duration: 4.6 },
            { left: 85.9, top: 37.4, delay: 0.9, duration: 4.9 },
            { left: 33.7, top: 3.7, delay: 1.1, duration: 4.4 },
            { left: 94.3, top: 4.8, delay: 0.5, duration: 5.1 },
            { left: 68.5, top: 40.7, delay: 1.9, duration: 4.2 },
            { left: 38.6, top: 19.4, delay: 0.8, duration: 4.7 },
            { left: 88.1, top: 31.3, delay: 1.6, duration: 4.5 }
          ].map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: 'var(--particle-secondary)',
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay
              }}
            />
          ))}
        </motion.div>
      </div>
      
      <div className="w-full px-5 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 dark:text-blue-300 text-sm font-medium">Nuestros Servicios</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span style={{ color: 'var(--text-primary)' }}>Soluciones </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Tecnológicas Integrales
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Mainic Software Services ofrece un conjunto completo de soluciones 
            adaptadas a las necesidades específicas de tu negocio.
          </p>
        </motion.div>

        {/* Services Grid - Compact Visual Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.id}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Compact Card */}
                <div className="relative h-full overflow-hidden rounded-2xl transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-primary)',
                    borderWidth: '1px'
                  }}>

                  {/* Compact visual header */}
                  <div className={`relative h-40 bg-gradient-to-br ${service.color} overflow-hidden`}>
                    {/* Subtle animated pattern */}
                    <motion.div
                      className="absolute inset-0 opacity-10"
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: 'reverse'
                      }}
                      style={{
                        backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                        backgroundSize: '30px 30px'
                      }}
                    />

                    {/* Decorative shape */}
                    <div className="absolute top-3 right-3 w-20 h-20 border border-white/20 rounded-full" />

                    {/* Centered icon */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{
                        scale: 1.15,
                        rotate: 5
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-20 h-20 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30 shadow-lg">
                        <Icon className="w-11 h-11 text-white drop-shadow-md" strokeWidth={1.5} />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content section */}
                  <div className="p-5">
                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold mb-2 leading-tight line-clamp-2"
                      style={{ color: 'var(--text-primary)' }}>
                      {service.shortTitle}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed mb-4 line-clamp-2"
                      style={{ color: 'var(--text-secondary)' }}>
                      {service.description}
                    </p>

                    {/* Features - compact list */}
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2 text-xs"
                          style={{ color: 'var(--text-tertiary)' }}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`} />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Compact CTA */}
                    {service.link ? (
                      <Link href={service.link}>
                        <button
                          className={`w-full py-2.5 px-4 rounded-lg bg-gradient-to-r ${service.color} text-white font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3`}
                        >
                          <span>Ver más</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </Link>
                    ) : (
                      <button
                        className={`w-full py-2.5 px-4 rounded-lg bg-gradient-to-r ${service.color} text-white font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3`}
                      >
                        <span>Ver más</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {/* Accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="mb-6 text-sm md:text-base" style={{ color: 'var(--text-secondary)' }}>
            ¿Listo para transformar tu negocio con tecnología de vanguardia?
          </p>
          <button className="group px-6 md:px-8 py-3 md:py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3 mx-auto text-sm md:text-base">
            <span>Comienza Hoy</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
        </div>
      </div>
    </section>
  )
}