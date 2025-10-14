'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { TrendingUp, Globe, MessageCircle, ArrowRight, Sparkles, CheckCircle2, Zap } from 'lucide-react'

const popularServices = [
  {
    icon: Globe,
    title: 'Landing Page Profesional',
    tagline: 'Convierte visitantes en clientes',
    description: 'Diseñamos y desarrollamos landing pages optimizadas para conversión que capturan leads y generan ventas.',
    features: [
      'Diseño responsive móvil-first',
      'Optimización SEO incluida',
      'Formularios de contacto inteligentes',
      'Analytics y tracking',
      'Carga ultra-rápida',
      'Integración con CRM'
    ],
    stats: [
      { value: '3-7 días', label: 'Entrega' },
      { value: '90%+', label: 'Conversión' }
    ],
    color: 'from-blue-500 to-cyan-500',
    badge: 'Más Solicitado',
    badgeColor: 'from-blue-500 to-cyan-500'
  },
  {
    icon: MessageCircle,
    title: 'Chatbot con IA',
    tagline: 'Atención al cliente 24/7 automatizada',
    description: 'Implementamos chatbots inteligentes que atienden a tus clientes en cualquier momento, responden preguntas y capturan leads automáticamente.',
    features: [
      'Integración con WhatsApp Business API',
      'Respuestas con IA (ChatGPT/Claude)',
      'Multi-idioma disponible',
      'Transferencia a agente humano',
      'Base de conocimiento personalizada',
      'Análisis de conversaciones'
    ],
    stats: [
      { value: '24/7', label: 'Disponibilidad' },
      { value: '80%', label: 'Ahorro en soporte' }
    ],
    color: 'from-emerald-500 to-teal-500',
    badge: 'Tendencia 2025',
    badgeColor: 'from-emerald-500 to-teal-500'
  }
]

export function PopularServices() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-3xl" />
      </div>

      <div className="w-full px-5 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-primary)' }}>
              <TrendingUp className="w-3.5 h-3.5 text-primary-500" />
              <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>Servicios Más Solicitados</span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
              <span style={{ color: 'var(--text-primary)' }}>Soluciones </span>
              <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Más Populares
              </span>
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Las herramientas que nuestros clientes eligen para impulsar sus negocios
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {popularServices.map((service, index) => {
              const Icon = service.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* Card */}
                  <div
                    className="relative h-full rounded-xl border overflow-hidden transition-all duration-500 hover:scale-[1.01] hover:shadow-xl"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-primary)'
                    }}
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                    {/* Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className={`px-2.5 py-1 rounded-full bg-gradient-to-r ${service.badgeColor} text-white text-xs font-bold shadow-lg flex items-center gap-1`}>
                        <Sparkles className="w-3 h-3" />
                        <span>{service.badge}</span>
                      </div>
                    </div>

                    <div className="p-6 relative">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg`}
                      >
                        <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                      </motion.div>

                      {/* Title & Tagline */}
                      <h3 className="text-xl md:text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                        {service.title}
                      </h3>
                      <p className={`text-xs md:text-sm font-medium mb-3 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                        {service.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="text-xs font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                          Incluye:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {service.features.map((feature, featureIndex) => (
                            <motion.div
                              key={featureIndex}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.3 + featureIndex * 0.05 }}
                              viewport={{ once: true }}
                              className="flex items-start gap-1.5"
                            >
                              <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-primary-500`} />
                              <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-4 mb-4 pb-4 border-b" style={{ borderColor: 'var(--border-primary)' }}>
                        {service.stats.map((stat, statIndex) => (
                          <div key={statIndex} className="flex-1">
                            <div className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-0.5`}>
                              {stat.value}
                            </div>
                            <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* CTA Buttons */}
                      {index === 0 ? (
                        // Landing Page - Two buttons
                        <div className="space-y-2">
                          <Link href="/bienvenida" className="block">
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className={`w-full py-2.5 px-4 rounded-lg bg-gradient-to-r ${service.color} text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn`}
                            >
                              <Zap className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                              <span>Solicitar Ahora</span>
                              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </motion.button>
                          </Link>
                          <Link href="/software-para-mi-negocio/landing-page" className="block">
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full py-2.5 px-4 rounded-lg border-2 font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2"
                              style={{
                                borderColor: 'var(--border-secondary)',
                                color: 'var(--text-primary)'
                              }}
                            >
                              <span>Ver Portfolio</span>
                              <ArrowRight className="w-4 h-4" />
                            </motion.button>
                          </Link>
                        </div>
                      ) : (
                        // Chatbot - Single button
                        <Link href="/bienvenida" className="block">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`w-full py-2.5 px-4 rounded-lg bg-gradient-to-r ${service.color} text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn`}
                          >
                            <Zap className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                            <span>Solicitar Ahora</span>
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </motion.button>
                        </Link>
                      )}
                    </div>

                    {/* Decorative accent line at bottom */}
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.color} opacity-60 group-hover:opacity-100 group-hover:h-1 transition-all duration-300`} />
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
              ¿Necesitas algo más específico? Tenemos muchas más soluciones
            </p>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:gap-3 transition-all duration-300 text-sm"
            >
              <span>Ver todos los servicios</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
