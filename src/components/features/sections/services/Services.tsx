'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Settings, Code, BarChart3, ArrowRight, Zap } from 'lucide-react'
import { useRef } from 'react'

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
    bgGradient: 'from-blue-500/20 to-cyan-500/20'
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
    bgGradient: 'from-purple-500/20 to-pink-500/20'
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
    bgGradient: 'from-emerald-500/20 to-teal-500/20'
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
    <section ref={ref} id="services" className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Animated grid */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
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
              className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
              style={{
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
      
      <div className="w-full px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
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
            <span className="text-blue-300 text-sm font-medium">Nuestros Servicios</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Soluciones </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Tecnológicas Integrales
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Mainic Software Services ofrece un conjunto completo de soluciones 
            adaptadas a las necesidades específicas de tu negocio.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <motion.div
                key={service.id}
                className="group relative"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Card */}
                <div className="relative h-full min-h-[400px] md:min-h-[450px] p-6 md:p-8 rounded-2xl md:rounded-3xl overflow-hidden backdrop-blur-xl bg-slate-900/40 border border-slate-700/50 hover:border-slate-600/80 transition-all duration-500 hover:bg-slate-900/60">
                  
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Tech pattern overlay */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-white to-transparent transform rotate-12 rounded-2xl" />
                  </div>
                  
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon */}
                    <motion.div
                      className="mb-6 md:mb-8"
                      animate={{ 
                        y: [0, -2, 0],
                        rotate: [0, 1, 0]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        delay: index * 0.5 
                      }}
                    >
                      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${service.color} p-3 md:p-4 shadow-lg ring-1 ring-white/20`}>
                        <Icon className="w-full h-full text-white drop-shadow-sm" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 space-y-4 md:space-y-6">
                      {/* Title */}
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 leading-tight group-hover:text-blue-100 transition-colors duration-300">
                          <span className="md:hidden">{service.shortTitle}</span>
                          <span className="hidden md:inline">{service.title}</span>
                        </h3>
                        <p className="text-sm md:text-base text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                          {service.description}
                        </p>
                      </div>
                      
                      {/* Features */}
                      <div className="space-y-2 md:space-y-3 pt-2">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center gap-3 text-xs md:text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                              delay: index * 0.15 + featureIndex * 0.08,
                              duration: 0.4 
                            }}
                            viewport={{ once: true }}
                          >
                            <motion.div 
                              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} shadow-sm`}
                              animate={{ 
                                scale: [1, 1.2, 1],
                                opacity: [0.7, 1, 0.7]
                              }}
                              transition={{ 
                                duration: 2.5, 
                                repeat: Infinity, 
                                delay: featureIndex * 0.3 
                              }}
                            />
                            <span className="flex-1">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.div 
                      className="pt-4 md:pt-6 mt-auto"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      <button className="group/btn w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/50 hover:border-slate-500/80 text-slate-300 hover:text-white transition-all duration-300 text-sm font-medium">
                        <span>Saber Más</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </motion.div>
                  </div>

                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
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
          <p className="text-slate-400 mb-6 text-sm md:text-base">
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