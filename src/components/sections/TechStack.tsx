'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { 
  Code2, 
  Server, 
  Cloud, 
  Database, 
  Cpu, 
  Globe, 
  Container,
  Zap,
  Brain,
  BarChart3,
  TableProperties,
  Monitor
} from 'lucide-react'

const technologies = [
  {
    category: 'Frontend',
    color: 'from-blue-500 to-cyan-500',
    techs: [
      { name: 'React', icon: Code2, color: 'text-blue-400' },
      { name: 'Next.js', icon: Globe, color: 'text-gray-300' },
      { name: 'TypeScript', icon: Code2, color: 'text-blue-500' },
      { name: 'Tailwind', icon: Monitor, color: 'text-cyan-400' }
    ]
  },
  {
    category: 'Backend',
    color: 'from-green-500 to-emerald-500',
    techs: [
      { name: 'Node.js', icon: Server, color: 'text-green-400' },
      { name: 'Python', icon: Cpu, color: 'text-yellow-400' },
      { name: 'PostgreSQL', icon: Database, color: 'text-blue-300' },
      { name: 'MongoDB', icon: Database, color: 'text-green-500' }
    ]
  },
  {
    category: 'Cloud & DevOps',
    color: 'from-orange-500 to-red-500',
    techs: [
      { name: 'AWS', icon: Cloud, color: 'text-orange-400' },
      { name: 'Docker', icon: Container, color: 'text-blue-400' },
      { name: 'Kubernetes', icon: Zap, color: 'text-blue-300' },
      { name: 'Vercel', icon: Globe, color: 'text-gray-300' }
    ]
  },
  {
    category: 'AI & Analytics',
    color: 'from-purple-500 to-pink-500',
    techs: [
      { name: 'TensorFlow', icon: Brain, color: 'text-orange-400' },
      { name: 'OpenAI', icon: Brain, color: 'text-green-400' },
      { name: 'Tableau', icon: BarChart3, color: 'text-blue-400' },
      { name: 'Power BI', icon: TableProperties, color: 'text-yellow-400' }
    ]
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
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tecnologías de <span className="gradient-text">Vanguardia</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Utilizamos las herramientas más avanzadas del mercado para crear 
            soluciones robustas, escalables y de alto rendimiento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-700 rounded-2xl p-6 border border-gray-600 hover:border-primary-500 transition-colors"
            >
              <h3 className="text-xl font-bold mb-6 text-center">{category.category}</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.techs.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: (categoryIndex * 0.1) + (techIndex * 0.05) 
                    }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center p-3 bg-dark-900/50 rounded-lg hover:bg-dark-900 transition-colors cursor-pointer"
                  >
                    <div className="w-10 h-10 mb-2 relative">
                      <div className={`w-10 h-10 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center shadow-lg`}>
                        <tech.icon className={`w-6 h-6 ${tech.color}`} />
                      </div>
                    </div>
                    <span className="text-sm text-gray-300 text-center">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}