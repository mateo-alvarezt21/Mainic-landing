'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowRight, Play, Award, Zap } from 'lucide-react'
import { SectionDiffuser } from '@/components/ui'

interface StrapiImageFormat {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: string | null
  size: number
  width: number
  height: number
}

interface StrapiImage {
  id: number
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: {
    large?: StrapiImageFormat
    small?: StrapiImageFormat
    medium?: StrapiImageFormat
    thumbnail?: StrapiImageFormat
  }
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string | null
  provider: string
  provider_metadata: any
  created_at: string
  updated_at: string
}

interface TransformationStory {
  id: number
  titulo: string
  published_at: string
  created_at: string
  updated_at: string
  empresa: string | null
  descripcion: string
  mejoras: {
    mejoras: Array<{
      porcentaje: number
      descripcion: string
    }>
  }
  tecnologias: {
    tecnologias: string[]
  }
  image: StrapiImage
}

const fetchTransformationStories = async (): Promise<TransformationStory[]> => {
  try {
    const response = await fetch('https://strapi-core.mainics.com/historias-cambios')
    if (!response.ok) {
      throw new Error(`Error fetching transformation stories: ${response.status}`)
    }
    const data = await response.json()
    return data || []
  } catch (error) {
    console.error('Error fetching transformation stories:', error)
    return []
  }
}

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
  const [currentCase, setCurrentCase] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [strapiStories, setStrapiStories] = useState<TransformationStory[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Use Strapi data if available, fallback to hardcoded cases
  const activeCases = strapiStories.length > 0 ? strapiStories : cases

  // Fetch transformation stories from Strapi
  useEffect(() => {
    const loadStories = async () => {
      try {
        setIsLoading(true)
        const stories = await fetchTransformationStories()
        console.log('Transformation stories from Strapi:', stories)
        setStrapiStories(stories)
      } catch (error) {
        console.error('Error loading transformation stories:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadStories()
  }, [])

  // Auto-advance cases every 6 seconds
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentCase((prev) => (prev + 1) % activeCases.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, activeCases.length])

  // Pause auto-play when user manually selects a case
  const handleManualCaseSelect = (index: number) => {
    setCurrentCase(index)
    setIsAutoPlaying(false)

    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true)
    }, 10000)
  }

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])

  return (
    <section ref={ref} id="cases" className="py-12 md:py-16 bg-slate-900 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Animated grid */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, #dc2626/15 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, #7c3aed/15 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, #059669/10 0%, transparent 50%),
              linear-gradient(90deg, transparent 49%, #475569 50%, transparent 51%),
              linear-gradient(0deg, transparent 49%, #475569 50%, transparent 51%)
            `,
            backgroundSize: '120px 120px, 120px 120px, 140px 140px, 60px 60px, 60px 60px',
            opacity: 0.4
          }} />
        </div>

        {/* Success particles */}
        <motion.div
          className="absolute inset-0"
          style={{ y, opacity }}
        >
          {[
            { left: 19.4, top: 8.1, delay: 0.5, duration: 4.2 },
            { left: 53.2, top: 76.4, delay: 1.2, duration: 5.1 },
            { left: 85.5, top: 78.6, delay: 0.8, duration: 4.8 },
            { left: 61.3, top: 64.7, delay: 2.1, duration: 4.5 },
            { left: 54.6, top: 57.1, delay: 0.3, duration: 5.3 },
            { left: 19.1, top: 78.7, delay: 1.8, duration: 4.1 },
            { left: 61.8, top: 47.8, delay: 0.9, duration: 4.9 },
            { left: 34.0, top: 39.8, delay: 1.5, duration: 4.7 },
            { left: 40.6, top: 60.5, delay: 0.6, duration: 5.2 },
            { left: 5.1, top: 9.0, delay: 2.3, duration: 4.3 },
            { left: 69.9, top: 67.9, delay: 1.1, duration: 4.6 },
            { left: 34.8, top: 81.4, delay: 0.4, duration: 5.0 },
            { left: 27.0, top: 81.3, delay: 1.9, duration: 4.4 },
            { left: 62.8, top: 30.3, delay: 0.7, duration: 4.8 },
            { left: 20.4, top: 31.2, delay: 1.6, duration: 4.2 }
          ].map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400/60 rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1]
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
          className="text-center mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <Award className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 text-sm font-medium">Casos de Éxito</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Historias de </span>
            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Transformación Real
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Más que números y métricas, estas son historias reales de empresas que confiaron en nosotros
            y transformaron completamente sus operaciones.
          </p>
        </motion.div>

        {/* Timeline Navigation */}
        <div className="flex justify-center mb-8 md:mb-10">
          <div className="flex flex-wrap justify-center gap-2 bg-slate-800/40 backdrop-blur-xl rounded-2xl p-2 border border-slate-600/30">
            {activeCases.map((caseStudy, index) => (
              <button
                key={strapiStories.length > 0 ? caseStudy.id : (caseStudy as any).id}
                onClick={() => handleManualCaseSelect(index)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-xl text-sm font-medium transition-all duration-300 ${currentCase === index
                    ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
              >
                {strapiStories.length > 0 
                  ? (caseStudy as TransformationStory).empresa || `Historia ${index + 1}`
                  : (caseStudy as any).company
                }
              </button>
            ))}
          </div>
        </div>

        {/* Current Case Display */}
        <motion.div
          key={currentCase}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <motion.div
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl group">
                <Image
                  src={strapiStories.length > 0 
                    ? `https://strapi-core.mainics.com${(activeCases[currentCase] as TransformationStory).image.formats.medium?.url || (activeCases[currentCase] as TransformationStory).image.url}`
                    : (activeCases[currentCase] as any).image
                  }
                  alt={strapiStories.length > 0 
                    ? (activeCases[currentCase] as TransformationStory).image.alternativeText || (activeCases[currentCase] as TransformationStory).titulo
                    : (activeCases[currentCase] as any).company
                  }
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  style={{ height: '380px', minHeight: '380px' }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${strapiStories.length > 0 ? 'from-blue-500 to-purple-600' : (activeCases[currentCase] as any).color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

                {/* Overlay pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />

                {/* Success badge */}
                <div className="absolute top-4 left-4 bg-emerald-500/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2">
                  <Award className="w-3 h-3 text-white" />
                  <span className="text-white text-xs font-medium">Éxito Comprobado</span>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="space-y-4 md:space-y-6 order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Chapter indicator */}
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">
                  Caso de Estudio {currentCase + 1} de {activeCases.length}
                </span>
              </div>

              {/* Title */}
              <div className="space-y-3 md:space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-2 md:mb-3">
                    {strapiStories.length > 0 
                      ? (activeCases[currentCase] as TransformationStory).empresa || `Historia ${currentCase + 1}`
                      : (activeCases[currentCase] as any).company
                    }
                  </h3>
                  <h4 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-white leading-tight">
                    {strapiStories.length > 0 
                      ? (activeCases[currentCase] as TransformationStory).titulo
                      : (activeCases[currentCase] as any).title
                    }
                  </h4>
                </div>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                  {strapiStories.length > 0 
                    ? (activeCases[currentCase] as TransformationStory).descripcion
                    : (activeCases[currentCase] as any).description
                  }
                </p>
              </div>

              {/* Results - Enhanced */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                {(strapiStories.length > 0 
                  ? (activeCases[currentCase] as TransformationStory).mejoras.mejoras
                  : (activeCases[currentCase] as any).results
                ).map((result: any, index: number) => (
                  <motion.div
                    key={index}
                    className="relative p-3 md:p-4 bg-slate-800/40 backdrop-blur-xl rounded-xl border border-slate-600/30 hover:border-emerald-500/50 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    {/* Success indicator */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />

                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-emerald-400 mb-1 group-hover:scale-110 transition-transform duration-300">
                        {strapiStories.length > 0 
                          ? `${result.porcentaje}%`
                          : result.metric
                        }
                      </div>
                      <div className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                        {strapiStories.length > 0 
                          ? result.descripcion
                          : result.description
                        }
                      </div>
                    </div>

                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>

              {/* Technologies */}
              <div className="space-y-4">
                <h5 className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-blue-400" />
                  Tecnologías Implementadas:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {(strapiStories.length > 0 
                    ? (activeCases[currentCase] as TransformationStory).tecnologias.tecnologias
                    : (activeCases[currentCase] as any).technologies
                  ).map((tech: string, index: number) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1.5 bg-slate-700/50 backdrop-blur-sm text-xs md:text-sm text-slate-300 rounded-full border border-slate-600/50 hover:border-blue-500/50 hover:bg-slate-600/50 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-2 pt-1">
                <button className="group flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  <Play className="w-4 h-4" />
                  <span>Ver Historia Completa</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <button className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/50 hover:border-slate-500/80 text-slate-300 hover:text-white transition-all duration-300">
                  <span>Solicitar Demo</span>
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Progress Dots */}
        <div className="flex justify-center mt-8 md:mt-10">
          <div className="flex items-center gap-3 bg-slate-800/40 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-600/30">
            {activeCases.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualCaseSelect(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentCase === index
                    ? 'bg-emerald-400 scale-150 shadow-lg shadow-emerald-400/50'
                    : 'bg-slate-500 hover:bg-slate-400'
                  }`}
              />
            ))}
            <div className="w-px h-4 bg-slate-600 mx-2" />
            <span className="text-xs text-slate-400">
              {currentCase + 1} / {activeCases.length}
            </span>
            {isAutoPlaying && (
              <>
                <div className="w-px h-4 bg-slate-600 mx-2" />
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 bg-emerald-400/60 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity
                    }}
                  />
                  <span className="text-xs text-emerald-400/80">Auto</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-8 md:mt-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-slate-600/30">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              ¿Tu empresa será la próxima historia de éxito?
            </h3>
            <p className="text-slate-400 mb-6 text-sm md:text-base">
              Únete a las empresas que ya han transformado sus operaciones con nuestras soluciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3 justify-center">
                <span>Iniciar mi Transformación</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group px-8 py-4 rounded-xl bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 hover:border-slate-500/50 text-slate-300 hover:text-white transition-all duration-300 flex items-center gap-3 justify-center">
                <Award className="w-5 h-5" />
                <span>Ver Más Casos</span>
              </button>
            </div>
          </div>
        </motion.div>
        </div>
      </div>

      {/* Diffuser transition to next section */}
      {/* <SectionDiffuser
        fromColor="#0f172a"
        toColor="#020617"
        variant="wave"
        height="md"
      /> */}
    </section>
  )
}
