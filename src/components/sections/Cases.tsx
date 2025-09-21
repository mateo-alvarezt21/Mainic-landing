'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ArrowRight, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const cases = [
  {
    id: 'techcorp',
    company: 'TechCorp',
    title: 'Operaciones Optimizadas',
    description: 'Implementamos un sistema de automatización que transformó completamente los procesos internos de TechCorp.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    results: [
      { metric: '40%', description: 'Aumento en eficiencia operativa' },
      { metric: '60%', description: 'Reducción en errores manuales' },
      { metric: '25%', description: 'Ahorro en costos operativos' }
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 'healthplus',
    company: 'HealthPlus',
    title: 'Soluciones Médicas Innovadoras',
    description: 'Desarrollamos una plataforma integral de gestión médica que mejoró significativamente la atención al paciente.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3',
    results: [
      { metric: '30%', description: 'Mejora en tiempo de atención' },
      { metric: '95%', description: 'Satisfacción del paciente' },
      { metric: '50%', description: 'Reducción en errores médicos' }
    ],
    technologies: ['Next.js', 'PostgreSQL', 'Docker', 'Azure'],
    color: 'from-green-500 to-teal-600'
  },
  {
    id: 'retailco',
    company: 'RetailCo',
    title: 'Crecimiento Basado en Datos',
    description: 'Implementamos un sistema de análisis de datos que revolucionó la toma de decisiones estratégicas.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
    results: [
      { metric: '25%', description: 'Incremento en ventas' },
      { metric: '35%', description: 'Mejora en conversión' },
      { metric: '80%', description: 'Precisión en predicciones' }
    ],
    technologies: ['Python', 'TensorFlow', 'BigQuery', 'Tableau'],
    color: 'from-orange-500 to-red-600'
  }
]

export function Cases() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const yBackground = useTransform(scrollYProgress, [0, 1], [100, -100])
  const rotateCards = useTransform(scrollYProgress, [0, 1], [0, 5])
  const scaleCards = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.02, 0.95])

  return (
    <section ref={ref} id="cases" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Parallax background elements */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ y: yBackground }}
      >
        <div className="absolute top-20 right-20 w-40 h-40 border border-primary-500/30 rounded-full" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 transform rotate-45" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 border-2 border-green-500/30 transform -rotate-12" />
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
            Casos de <span className="gradient-text">Éxito</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Descubre cómo hemos ayudado a empresas como la tuya a alcanzar sus objetivos 
            y superar sus expectativas.
          </p>
        </motion.div>

        <div className="space-y-16">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
              style={{ 
                rotate: `${rotateCards.get() * (index % 2 === 0 ? 1 : -1)}deg`,
                scale: scaleCards.get()
              }}
            >
              {/* Image */}
              <div className="flex-1 relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={caseStudy.image}
                    alt={`${caseStudy.company} case study`}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    style={{ height: '400px' }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${caseStudy.color} opacity-20`} />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-primary-400 uppercase tracking-wider mb-2">
                    {caseStudy.company}
                  </h3>
                  <h4 className="text-3xl font-bold mb-4">{caseStudy.title}</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {caseStudy.description}
                  </p>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4">
                  {caseStudy.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <TrendingUp className="w-5 h-5 text-primary-500 mr-2" />
                        <span className="text-2xl font-bold text-primary-400">
                          {result.metric}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">{result.description}</p>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div>
                  <h5 className="text-sm font-semibold text-gray-300 mb-3">
                    Tecnologías utilizadas:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-dark-700 text-sm text-gray-300 rounded-full border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="group">
                  Ver Caso Completo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
