'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { 
  Cloud, 
  Zap,
  Brain,
  BarChart3
} from 'lucide-react'
import { SectionDiffuser } from '@/components/ui'

const benefits = [
  {
    title: 'Automatización Inteligente',
    description: 'Eliminamos tareas repetitivas y optimizamos procesos empresariales',
    icon: Zap,
    color: 'from-blue-500 to-cyan-500',
    iconColor: 'text-blue-400'
  },
  {
    title: 'Análisis de Datos Avanzado',
    description: 'Convertimos datos en decisiones estratégicas para su negocio',
    icon: BarChart3,
    color: 'from-green-500 to-emerald-500',
    iconColor: 'text-green-400'
  },
  {
    title: 'Infraestructura Escalable',
    description: 'Soluciones que crecen con su empresa sin comprometer el rendimiento',
    icon: Cloud,
    color: 'from-orange-500 to-red-500',
    iconColor: 'text-orange-400'
  },
  {
    title: 'Inteligencia Artificial',
    description: 'Implementamos IA para automatizar decisiones y mejorar la eficiencia',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    iconColor: 'text-purple-400'
  }
]

export function TechStack() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const yFast = useTransform(scrollYProgress, [0, 1], [200, -300])
  const ySlow = useTransform(scrollYProgress, [0, 1], [100, -50])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const rotateReverse = useTransform(scrollYProgress, [0, 1], [0, -180])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.8])
  const scaleX = useTransform(scrollYProgress, [0, 1], [1, 1.5])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.1, 0.8, 0.8, 0.1])

  return (
    <section ref={ref} className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Multi-layer parallax geometric background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: yFast, scale, opacity }}
      >
        <div className="absolute top-20 left-20 w-20 h-20 border-2 border-primary-500/50 rotate-45" />
        <div className="absolute bottom-40 right-40 w-16 h-16 border border-purple-500/50 rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 transform rotate-45" />
      </motion.div>
      
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ y: ySlow, scaleX }}
      >
        <div className="absolute top-1/3 left-1/3 w-8 h-32 bg-gradient-to-b from-green-500/30 to-transparent transform -rotate-12" />
        <div className="absolute bottom-1/3 right-1/5 w-6 h-24 bg-gradient-to-b from-cyan-500/30 to-transparent transform rotate-45" />
        <div className="absolute top-1/4 right-1/2 w-4 h-16 bg-gradient-to-b from-yellow-500/30 to-transparent" />
      </motion.div>
      
      <motion.div 
        className="absolute top-10 right-10 w-24 h-24"
        style={{ rotate }}
      >
        <div className="w-full h-full border-2 border-primary-500/30 rounded-lg"></div>
      </motion.div>

      <motion.div 
        className="absolute bottom-20 left-10 w-16 h-16"
        style={{ rotate: rotateReverse }}
      >
        <div className="w-full h-full border border-purple-400/40 rounded-full"></div>
      </motion.div>

      <motion.div 
        className="absolute top-1/2 left-1/4 w-12 h-12"
        style={{ rotate, scale }}
      >
        <div className="w-full h-full bg-gradient-to-br from-orange-500/20 to-red-500/20 transform rotate-45"></div>
      </motion.div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Soluciones que <span className="gradient-text">Impulsan</span> su Negocio
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transformamos sus desafíos empresariales en oportunidades de crecimiento 
            con tecnología de vanguardia enfocada en resultados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-700 rounded-2xl p-8 border border-gray-600 hover:border-primary-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <benefit.icon className={`w-8 h-8 ${benefit.iconColor}`} />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white">{benefit.title}</h3>
                
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Diffuser transition to Services section */}
      <SectionDiffuser 
        fromColor="#111618" 
        toColor="#0f172a" 
        variant="curve"
        height="md"
      />
    </section>
  )
}