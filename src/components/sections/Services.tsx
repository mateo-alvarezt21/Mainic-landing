'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Settings, Code, BarChart3 } from 'lucide-react'
import { useRef } from 'react'

const services = [
  {
    id: 'automation',
    icon: Settings,
    title: 'Automatización de Procesos',
    description: 'Automatiza tareas repetitivas y flujos de trabajo para aumentar la eficiencia y reducir costos operativos.',
    features: [
      'Workflows automatizados',
      'Integración de sistemas',
      'Reducción de errores',
      'Optimización de tiempo'
    ]
  },
  {
    id: 'development',
    icon: Code,
    title: 'Desarrollo de Software Personalizado',
    description: 'Desarrollamos aplicaciones de software a medida para abordar los desafíos únicos de tu empresa.',
    features: [
      'Aplicaciones web y móviles',
      'APIs robustas',
      'Arquitectura escalable',
      'Soporte continuo'
    ]
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Análisis de Datos e Informes',
    description: 'Obtén información valiosa de tus datos con herramientas avanzadas de análisis y reportes.',
    features: [
      'Dashboards interactivos',
      'Reportes automatizados',
      'Business Intelligence',
      'Predicciones basadas en IA'
    ]
  }
]

export function Services() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const yFast = useTransform(scrollYProgress, [0, 1], [200, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5])

  return (
    <section ref={ref} id="services" className="py-20 bg-dark-800 relative overflow-hidden">
      {/* Parallax background elements */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ y: yFast }}
      >
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
      
      <motion.div 
        className="absolute inset-0"
        style={{ y, opacity }}
      >
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-500" />
      </motion.div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Mainic Software Services ofrece un conjunto completo de soluciones 
            adaptadas a las necesidades específicas de tu negocio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-dark-700 rounded-2xl p-8 card-hover border border-gray-600 hover:border-primary-500"
              >
                <div className="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary-500" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
