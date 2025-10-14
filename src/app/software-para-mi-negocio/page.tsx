'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Code, Smartphone, Globe, Database, Cloud, Lock, ArrowRight, CheckCircle2, Zap, Layers, Server, Users, TrendingUp, Award, Clock, Target } from 'lucide-react'

const softwareTypes = [
  {
    icon: Globe,
    title: 'Aplicaciones Web',
    description: 'Plataformas web modernas, escalables y responsive que funcionan en cualquier dispositivo y navegador.',
    features: [
      'Progressive Web Apps (PWA)',
      'Dashboards administrativos',
      'Portales de clientes',
      'E-commerce personalizado',
      'SaaS Multi-tenant'
    ],
    color: 'from-blue-500 to-cyan-500',
    technologies: ['React', 'Next.js', 'Vue', 'Angular']
  },
  {
    icon: Smartphone,
    title: 'Aplicaciones Móviles',
    description: 'Apps nativas y multiplataforma para iOS y Android con experiencia de usuario excepcional.',
    features: [
      'Apps iOS y Android nativas',
      'Desarrollo multiplataforma',
      'Integración con hardware',
      'Push notifications',
      'Modo offline'
    ],
    color: 'from-purple-500 to-pink-500',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin']
  },
  {
    icon: Server,
    title: 'APIs y Backend',
    description: 'Infraestructura backend robusta, APIs RESTful y GraphQL escalables para tus aplicaciones.',
    features: [
      'APIs RESTful y GraphQL',
      'Microservicios',
      'Autenticación y autorización',
      'Integración de terceros',
      'Documentación completa'
    ],
    color: 'from-emerald-500 to-teal-500',
    technologies: ['Node.js', 'Python', 'Go', 'Java']
  },
  {
    icon: Database,
    title: 'Sistemas Empresariales',
    description: 'ERP, CRM y sistemas de gestión personalizados que se adaptan a los procesos únicos de tu empresa.',
    features: [
      'ERP personalizado',
      'CRM y gestión de clientes',
      'Gestión de inventarios',
      'Facturación electrónica',
      'Business Intelligence'
    ],
    color: 'from-orange-500 to-red-500',
    technologies: ['SAP', 'Odoo', 'Custom Build']
  },
  {
    icon: Cloud,
    title: 'Soluciones Cloud',
    description: 'Migración a la nube, arquitecturas serverless y soluciones cloud-native escalables.',
    features: [
      'Migración a AWS/Azure/GCP',
      'Arquitectura serverless',
      'Contenedores y Kubernetes',
      'CI/CD automatizado',
      'Monitoreo y alertas'
    ],
    color: 'from-indigo-500 to-purple-600',
    technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes']
  },
  {
    icon: Lock,
    title: 'Software Seguro',
    description: 'Desarrollo con seguridad integrada, cumplimiento normativo y protección de datos.',
    features: [
      'Auditorías de seguridad',
      'Encriptación end-to-end',
      'Cumplimiento GDPR/HIPAA',
      'Pentesting y vulnerabilidades',
      'Backup y recuperación'
    ],
    color: 'from-red-500 to-pink-500',
    technologies: ['OAuth', 'JWT', 'SSL/TLS', 'Vault']
  }
]

const developmentProcess = [
  {
    number: '01',
    title: 'Descubrimiento',
    description: 'Analizamos tus necesidades, objetivos y desafíos para definir la solución perfecta.',
    icon: Target
  },
  {
    number: '02',
    title: 'Diseño',
    description: 'Creamos prototipos, wireframes y diseño de interfaz para validar la experiencia de usuario.',
    icon: Layers
  },
  {
    number: '03',
    title: 'Desarrollo',
    description: 'Construimos tu software con metodologías ágiles, entregas incrementales y feedback continuo.',
    icon: Code
  },
  {
    number: '04',
    title: 'Testing',
    description: 'Pruebas exhaustivas de calidad, rendimiento y seguridad antes del lanzamiento.',
    icon: CheckCircle2
  },
  {
    number: '05',
    title: 'Despliegue',
    description: 'Lanzamiento en producción con configuración de infraestructura y monitoreo.',
    icon: Zap
  },
  {
    number: '06',
    title: 'Soporte',
    description: 'Mantenimiento continuo, actualizaciones y soporte técnico post-lanzamiento.',
    icon: Users
  }
]

const benefits = [
  {
    icon: Clock,
    title: 'Entrega Rápida',
    description: 'MVPs en 4-8 semanas con metodología ágil'
  },
  {
    icon: Award,
    title: 'Calidad Premium',
    description: 'Código limpio, escalable y bien documentado'
  },
  {
    icon: Users,
    title: 'Equipo Experto',
    description: 'Desarrolladores senior con +5 años de experiencia'
  },
  {
    icon: TrendingUp,
    title: 'Escalable',
    description: 'Arquitecturas que crecen con tu negocio'
  }
]

const technologies = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Kubernetes', category: 'DevOps' },
  { name: 'GraphQL', category: 'API' },
  { name: 'REST', category: 'API' }
]

export default function SoftwareParaMiNegocioPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Header with back button */}
      <header className="border-b" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-primary)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 hover:text-primary-500 transition-colors"
            style={{ color: 'var(--text-primary)' }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Volver al inicio</span>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 py-12 md:py-20 px-5 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-primary)', border: '1px solid' }}>
              <Code className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Desarrollo de Software</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Software Personalizado para tu <span className="text-primary-500">Negocio</span>
            </h1>

            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8" style={{ color: 'var(--text-secondary)' }}>
              Desarrollamos aplicaciones web, móviles y sistemas empresariales a medida que resuelven
              los desafíos únicos de tu empresa y te dan ventaja competitiva.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/bienvenida"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span>Cotizar mi Proyecto</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Benefits section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="p-6 rounded-xl border text-center"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-primary)'
                    }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {benefit.title}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {benefit.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Software Types Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Tipos de Software que Desarrollamos
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Desde aplicaciones móviles hasta sistemas empresariales complejos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softwareTypes.map((type, index) => {
                const Icon = type.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-xl border hover:border-primary-500/50 transition-all group"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-primary)'
                    }}
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                      {type.title}
                    </h3>

                    <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                      {type.description}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t" style={{ borderColor: 'var(--border-primary)' }}>
                      {type.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs px-2 py-1 rounded-md"
                          style={{
                            backgroundColor: 'var(--bg-primary)',
                            color: 'var(--text-tertiary)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Development Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20 rounded-2xl p-8 md:p-12 border relative overflow-hidden"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-primary)'
            }}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl" />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Nuestro Proceso de Desarrollo
                </h2>
                <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Metodología ágil y colaborativa que garantiza resultados exitosos
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {developmentProcess.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative p-6 rounded-xl border"
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        borderColor: 'var(--border-primary)'
                      }}
                    >
                      {/* Number badge */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white text-lg shadow-lg">
                        {step.number}
                      </div>

                      <div className="flex items-center gap-3 mb-3 mt-4">
                        <Icon className="w-6 h-6 text-primary-500" />
                        <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        {step.description}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Technologies Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Tecnologías que Dominamos
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Stack tecnológico moderno y probado en producción
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="px-6 py-3 rounded-xl border"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-primary)'
                  }}
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {tech.name}
                    </span>
                    <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                      {tech.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: '50+', label: 'Proyectos Exitosos' },
                { number: '95%', label: 'Satisfacción del Cliente' },
                { number: '24/7', label: 'Soporte Técnico' },
                { number: '100%', label: 'Código de Calidad' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-xl border"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-primary)'
                  }}
                >
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 md:p-12 text-center border"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-primary)'
            }}
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                ¿Tienes una Idea? Hagámosla Realidad
              </h2>
              <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
                Agenda una consultoría gratuita y obtén una estimación detallada de tu proyecto.
                Te ayudamos a definir el alcance, tecnologías y roadmap de desarrollo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/bienvenida"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <span>Comenzar mi Proyecto</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    borderColor: 'var(--border-secondary)',
                    color: 'var(--text-primary)'
                  }}
                >
                  Más Información
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Simple footer */}
      <footer className="border-t py-6" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-primary)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 text-center">
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            © 2025 Mainic Software Services. Todos los Derechos Reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
