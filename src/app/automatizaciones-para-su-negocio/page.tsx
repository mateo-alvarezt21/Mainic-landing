'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Bot, FileText, Calendar, Mail, Workflow, Zap, CheckCircle2, ArrowRight, TrendingUp, Clock, DollarSign, MessageCircle, Shield, Users, BarChart3 } from 'lucide-react'
import Image from 'next/image'

const automationServices = [
  {
    icon: Bot,
    title: 'Chatbots Inteligentes',
    description: 'Asistentes virtuales que atienden a tus clientes 24/7, responden preguntas frecuentes y capturan leads automáticamente.',
    features: [
      'Atención al cliente 24/7',
      'Respuestas instantáneas',
      'Captura automática de leads',
      'Integración con WhatsApp, Messenger, Web'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: FileText,
    title: 'Generación Automática de Cotizaciones',
    description: 'Crea y envía cotizaciones profesionales en minutos basadas en las necesidades específicas de cada cliente.',
    features: [
      'Plantillas personalizables',
      'Cálculo automático de precios',
      'Envío automático por email',
      'Seguimiento de cotizaciones'
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Calendar,
    title: 'Agendamiento Inteligente',
    description: 'Permite que tus clientes agenden citas automáticamente según tu disponibilidad, con recordatorios automáticos.',
    features: [
      'Sincronización con calendarios',
      'Recordatorios automáticos',
      'Reagendamiento fácil',
      'Integración con videollamadas'
    ],
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Mail,
    title: 'Email Marketing Automatizado',
    description: 'Campañas de email personalizadas que se envían automáticamente según el comportamiento de tus clientes.',
    features: [
      'Segmentación inteligente',
      'Secuencias automatizadas',
      'A/B testing',
      'Análisis de resultados'
    ],
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Workflow,
    title: 'Automatización de Procesos (RPA)',
    description: 'Automatiza tareas repetitivas como entrada de datos, generación de reportes y sincronización entre sistemas.',
    features: [
      'Integración entre sistemas',
      'Procesamiento de documentos',
      'Generación de reportes',
      'Sincronización de datos'
    ],
    color: 'from-indigo-500 to-purple-600'
  },
  {
    icon: Zap,
    title: 'Integraciones Personalizadas',
    description: 'Conecta todas tus herramientas y sistemas para que trabajen juntos sin intervención manual.',
    features: [
      'Zapier/Make integrations',
      'APIs personalizadas',
      'Webhooks automáticos',
      'Sincronización en tiempo real'
    ],
    color: 'from-yellow-500 to-orange-500'
  }
]

const benefits = [
  {
    icon: Clock,
    title: 'Ahorra Tiempo',
    description: 'Reduce tareas manuales hasta en un 80%'
  },
  {
    icon: DollarSign,
    title: 'Reduce Costos',
    description: 'Disminuye costos operativos significativamente'
  },
  {
    icon: TrendingUp,
    title: 'Aumenta Ventas',
    description: 'Mejora la conversión con respuestas inmediatas'
  },
  {
    icon: CheckCircle2,
    title: 'Elimina Errores',
    description: 'Minimiza errores humanos en procesos repetitivos'
  }
]

export default function AutomationesPage() {
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
              <Zap className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Automatización Empresarial</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Automatizaciones para su <span className="text-primary-500">Negocio</span>
            </h1>

            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8" style={{ color: 'var(--text-secondary)' }}>
              Libera el potencial de tu empresa automatizando procesos repetitivos.
              Permite que tu equipo se enfoque en lo que realmente importa mientras la tecnología
              se encarga del resto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/bienvenida"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span>Solicitar Consultoría Gratis</span>
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
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
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

          {/* WhatsApp Business API Section */}
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
              <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl" />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                {/* Meta & WhatsApp logos */}
                <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-xl border"
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      borderColor: 'var(--border-primary)'
                    }}
                  >
                    <div className="w-12 h-12 relative flex items-center justify-center">
                      <Image
                        src="https://pngimg.com/d/meta_PNG12.png"
                        alt="Meta"
                        width={48}
                        height={48}
                        className="w-full h-full object-contain scale-150"
                      />
                    </div>
                  </motion.div>

                  <span className="text-2xl font-bold" style={{ color: 'var(--text-tertiary)' }}>×</span>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-xl border"
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      borderColor: 'var(--border-primary)'
                    }}
                  >
                    <div className="w-10 h-10 relative flex items-center justify-center">
                      <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1022px-WhatsApp.svg.png"
                        alt="WhatsApp"
                        width={40}
                        height={40}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </motion.div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  WhatsApp Business API Oficial
                </h2>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: 'rgba(37, 211, 102, 0.1)', border: '1px solid rgba(37, 211, 102, 0.3)' }}>
                  <Shield className="w-4 h-4 text-[#25D366]" />
                  <span className="text-sm font-semibold text-[#25D366]">Métodos Autorizados por Meta</span>
                </div>
                <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Utilizamos exclusivamente WhatsApp Cloud API, la solución oficial y autorizada por Meta
                  para negocios. Garantizamos seguridad, confiabilidad y cumplimiento total con las políticas de WhatsApp.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Chatbots para WhatsApp */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl border"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-primary)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                      Chatbots Inteligentes
                    </h3>
                  </div>
                  <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                    Automatiza la atención al cliente en WhatsApp con chatbots que responden instantáneamente,
                    capturan leads y brindan soporte 24/7.
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Respuestas automáticas personalizadas',
                      'Integración con IA (ChatGPT, Claude)',
                      'Menús interactivos y botones',
                      'Transferencia a agentes humanos',
                      'Múltiples números de WhatsApp'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
                        <span className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Campañas de Marketing */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl border"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-primary)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                      Campañas de Marketing
                    </h3>
                  </div>
                  <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                    Llega a miles de clientes de forma directa y personalizada usando WhatsApp Cloud API.
                    Cumplimos con todas las normativas y mejores prácticas.
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Envío masivo autorizado por Meta',
                      'Plantillas aprobadas por WhatsApp',
                      'Segmentación de audiencias',
                      'Métricas y reportes en tiempo real',
                      'Opt-in compliance y gestión de contactos'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
                        <span className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Stats/Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { icon: Users, stat: '98%', label: 'Tasa de Apertura' },
                  { icon: MessageCircle, stat: '2 Mil M', label: 'Usuarios Activos Diarios' },
                  { icon: Shield, stat: '100%', label: 'Seguro y Oficial' }
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center p-6 rounded-xl border"
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        borderColor: 'var(--border-primary)'
                      }}
                    >
                      <Icon className="w-8 h-8 mx-auto mb-3 text-[#25D366]" />
                      <div className="text-3xl font-bold mb-1 text-[#25D366]">
                        {item.stat}
                      </div>
                      <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        {item.label}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Services section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Nuestras Soluciones de Automatización
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Descubre cómo podemos transformar tu negocio con tecnología de punta
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {automationServices.map((service, index) => {
                const Icon = service.icon
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
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                      {service.title}
                    </h3>

                    <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )
              })}
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
                ¿Listo para Automatizar tu Negocio?
              </h2>
              <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
                Agenda una consultoría gratuita y descubre cómo podemos ayudarte a optimizar
                tus procesos y aumentar tu productividad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/bienvenida"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <span>Comenzar Ahora</span>
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
