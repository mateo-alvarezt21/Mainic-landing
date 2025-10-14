'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Globe, ExternalLink, Zap, TrendingUp, Users, ShoppingCart, CheckCircle2, ArrowRight, Sparkles, Monitor, Smartphone, Tablet } from 'lucide-react'
import Image from 'next/image'

const portfolioProjects = [
  {
    id: 1,
    title: 'E-commerce Moda Premium',
    category: 'E-commerce',
    description: 'Landing page para marca de ropa exclusiva con catálogo integrado y checkout optimizado.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    stats: {
      conversion: '12.5%',
      speed: '0.8s',
      leads: '+3,200'
    },
    features: [
      'Diseño minimalista y elegante',
      'Carrito de compras optimizado',
      'Integración con Stripe',
      'Catálogo con filtros avanzados',
      'Reviews y testimoniales'
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'Stripe', 'Sanity CMS'],
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 2,
    title: 'SaaS Tech Startup',
    category: 'SaaS',
    description: 'Landing page para startup de gestión de proyectos con demo interactivo y precios dinámicos.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    stats: {
      conversion: '18.3%',
      speed: '0.6s',
      leads: '+5,800'
    },
    features: [
      'Demo interactivo del producto',
      'Calculadora de precios dinámica',
      'Video explicativo integrado',
      'Comparación de planes',
      'Chat en vivo con IA'
    ],
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Stripe'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 3,
    title: 'Estudio Legal Corporativo',
    category: 'Servicios Profesionales',
    description: 'Sitio institucional para firma de abogados con formulario de consulta y portal de clientes.',
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&q=80',
    stats: {
      conversion: '9.8%',
      speed: '0.9s',
      leads: '+1,450'
    },
    features: [
      'Diseño profesional y confiable',
      'Portal de clientes seguro',
      'Blog de artículos legales',
      'Formulario de consulta avanzado',
      'Integración con calendario'
    ],
    technologies: ['Next.js', 'Auth0', 'PostgreSQL', 'Tailwind'],
    color: 'from-slate-500 to-zinc-600'
  },
  {
    id: 4,
    title: 'Restaurante Gourmet',
    category: 'Restaurantes',
    description: 'Landing page con reservas online, menú digital y sistema de pedidos para delivery.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    stats: {
      conversion: '15.7%',
      speed: '0.7s',
      leads: '+2,900'
    },
    features: [
      'Menú digital interactivo',
      'Sistema de reservas online',
      'Integración con delivery apps',
      'Galería de platillos',
      'Reseñas de clientes'
    ],
    technologies: ['Next.js', 'Firebase', 'Google Maps API', 'Stripe'],
    color: 'from-amber-500 to-orange-500'
  },
  {
    id: 5,
    title: 'Agencia de Marketing Digital',
    category: 'Marketing',
    description: 'Portafolio interactivo con casos de éxito, testimoniales y cotizador automático de servicios.',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&q=80',
    stats: {
      conversion: '14.2%',
      speed: '0.5s',
      leads: '+4,100'
    },
    features: [
      'Portafolio de casos de éxito',
      'Cotizador de servicios',
      'Blog de marketing',
      'Testimoniales en video',
      'Calendario de consultas'
    ],
    technologies: ['Next.js', 'Sanity CMS', 'Calendly API', 'Analytics'],
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 6,
    title: 'Gimnasio y Wellness',
    category: 'Salud y Fitness',
    description: 'Landing page con sistema de membresías, clases online y seguimiento de progreso personal.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    stats: {
      conversion: '11.4%',
      speed: '0.8s',
      leads: '+2,650'
    },
    features: [
      'Sistema de membresías',
      'Clases virtuales en vivo',
      'Calculadora de IMC',
      'Agenda de entrenadores',
      'App móvil companion'
    ],
    technologies: ['Next.js', 'Stripe', 'Zoom API', 'Firebase'],
    color: 'from-green-500 to-emerald-500'
  }
]

const benefits = [
  {
    icon: Zap,
    title: 'Carga Ultra-Rápida',
    description: 'Optimizadas para cargar en menos de 1 segundo',
    stat: '<1s'
  },
  {
    icon: TrendingUp,
    title: 'Alta Conversión',
    description: 'Diseñadas para convertir visitantes en clientes',
    stat: '+300%'
  },
  {
    icon: Users,
    title: 'SEO Optimizado',
    description: 'Posicionamiento garantizado en buscadores',
    stat: 'Top 10'
  },
  {
    icon: Monitor,
    title: 'Responsive',
    description: 'Perfectas en cualquier dispositivo',
    stat: '100%'
  }
]

export default function LandingPagePortfolioPage() {
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
              <Globe className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Portafolio de Landing Pages</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Landing Pages que <span className="text-primary-500">Convierten</span>
            </h1>

            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8" style={{ color: 'var(--text-secondary)' }}>
              Explora nuestro portafolio de landing pages diseñadas para maximizar conversiones.
              Cada proyecto está optimizado para SEO, velocidad y experiencia de usuario excepcional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/bienvenida"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span>Solicitar mi Landing Page</span>
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
                    <Icon className="w-10 h-10 mx-auto mb-3 text-primary-500" />
                    <div className="text-2xl font-bold text-primary-500 mb-2">
                      {benefit.stat}
                    </div>
                    <h3 className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                      {benefit.title}
                    </h3>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      {benefit.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Proyectos Destacados
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Cada proyecto diseñado y desarrollado con atención al detalle y enfoque en resultados
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative rounded-xl overflow-hidden border hover:border-primary-500/50 transition-all"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-primary)'
                  }}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`} />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-sm" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                      {project.title}
                    </h3>
                    <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                      {project.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b" style={{ borderColor: 'var(--border-primary)' }}>
                      <div>
                        <div className={`text-lg font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                          {project.stats.conversion}
                        </div>
                        <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                          Conversión
                        </div>
                      </div>
                      <div>
                        <div className={`text-lg font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                          {project.stats.speed}
                        </div>
                        <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                          Carga
                        </div>
                      </div>
                      <div>
                        <div className={`text-lg font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                          {project.stats.leads}
                        </div>
                        <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                          Leads
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                        Características:
                      </h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary-500 flex-shrink-0 mt-0.5" />
                            <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, tIndex) => (
                        <span
                          key={tIndex}
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
            className="rounded-2xl p-8 md:p-12 text-center border relative overflow-hidden"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-primary)'
            }}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl" />
            </div>

            <div className="max-w-3xl mx-auto relative z-10">
              <Sparkles className="w-16 h-16 mx-auto mb-6 text-primary-500" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                ¿Listo para tu Landing Page?
              </h2>
              <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
                Obtén una landing page profesional que convierte visitantes en clientes.
                Entrega en 3-7 días con diseño personalizado y optimización completa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/bienvenida"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
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
