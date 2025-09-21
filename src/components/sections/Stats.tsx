'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useRef } from 'react'

const stats = [
  {
    number: "100+",
    label: "Proyectos Completados",
    description: "Soluciones exitosas implementadas"
  },
  {
    number: "95%",
    label: "Satisfaccion del Cliente",
    description: "Calificacion promedio de nuestros clientes"
  },
  {
    number: "50+",
    label: "Empresas Transformadas",
    description: "Negocios automatizados exitosamente"
  },
  {
    number: "24/7",
    label: "Soporte Tecnico",
    description: "Disponibilidad completa para nuestros clientes"
  }
]

export function Stats() {
  const { isInView } = useScrollAnimation()
  const parallaxRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])

  return (
    <section ref={parallaxRef} className="py-20 bg-dark-800 relative overflow-hidden">
      {/* Parallax number background */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center opacity-5"
        style={{ y, opacity }}
      >
        <div className="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] xl:text-[24rem] font-bold text-primary-500 select-none">100</div>
      </motion.div>
      
      <motion.div 
        className="absolute inset-0"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
      >
        <div className="absolute top-10 left-1/4 w-4 h-4 bg-primary-400/50 rounded-full animate-ping" />
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-purple-400/50 rounded-full animate-ping delay-1000" />
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-blue-400/50 rounded-full animate-ping delay-500" />
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Resultados que Hablan por Si Mismos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nuestro compromiso con la excelencia se refleja en cada proyecto que entregamos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </div>
              <div className="text-gray-400">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}