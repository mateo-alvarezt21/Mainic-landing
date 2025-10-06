'use client'

import { motion } from 'framer-motion'
import { Users, Target, Lightbulb, Award } from 'lucide-react'

const stats = [
  {
    number: "5+",
    label: "Años de experiencia",
  },
  {
    number: "50+",
    label: "Proyectos completados",
  },
  {
    number: "100%",
    label: "Clientes satisfechos",
  },
  {
    number: "24/7",
    label: "Soporte técnico",
  },
]

const values = [
  {
    icon: Target,
    title: "Enfoque en resultados",
    description: "Nos comprometemos con el éxito de cada proyecto, midiendo nuestro éxito por el impacto real en tu negocio.",
  },
  {
    icon: Lightbulb,
    title: "Innovación constante",
    description: "Utilizamos las últimas tecnologías y metodologías para crear soluciones que te mantengan a la vanguardia.",
  },
  {
    icon: Users,
    title: "Equipo especializado",
    description: "Contamos con profesionales altamente capacitados en desarrollo, automatización y transformación digital.",
  },
  {
    icon: Award,
    title: "Calidad garantizada",
    description: "Aplicamos estándares internacionales y mejores prácticas en cada línea de código que escribimos.",
  },
]

export default function About() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="about">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre Nosotros
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Somos un equipo apasionado por la tecnología, dedicado a transformar ideas en soluciones digitales 
            que impulsan el crecimiento de las empresas colombianas.
          </p>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Nuestra Historia
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Mainics nació con la visión de democratizar la tecnología para las empresas de todos los tamaños. 
                Comenzamos como un pequeño equipo de desarrolladores apasionados y hemos crecido hasta convertirnos 
                en un socio estratégico para empresas que buscan la excelencia digital.
              </p>
              <p>
                Nos especializamos en automatización de procesos, desarrollo de software personalizado y 
                transformación digital. Cada proyecto es una oportunidad para crear algo extraordinario 
                que genere valor real para nuestros clientes.
              </p>
              <p>
                Creemos firmemente que la tecnología debe ser accesible, práctica y orientada a resultados. 
                Por eso, trabajamos estrechamente con cada cliente para entender sus necesidades únicas 
                y crear soluciones que superen sus expectativas.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Nuestros Valores
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/40 transition-colors">
                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Nuestra Misión
            </h4>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Empoderar a las empresas colombianas a través de soluciones tecnológicas innovadoras 
              que optimicen sus procesos, incrementen su productividad y les permitan competir 
              exitosamente en la era digital.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Nuestra Visión
            </h4>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Ser reconocidos como el líder en desarrollo de software y automatización en Colombia, 
              siendo el socio tecnológico de confianza para empresas que buscan transformar 
              su futuro a través de la innovación.
            </p>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}