'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Cpu, Monitor, Wrench, Zap, ArrowRight, CheckCircle2, HardDrive, Layers, Award, Shield, Clock, TrendingUp, Users, Target, Video, Briefcase, Code, Gauge } from 'lucide-react'

const pcTypes = [
  {
    icon: Briefcase,
    title: 'PCs Corporativos',
    description: 'Estaciones de trabajo optimizadas para productividad empresarial con confiabilidad y rendimiento garantizado.',
    features: [
      'Procesadores Intel Core i5/i7 o AMD Ryzen 5/7',
      '16-32GB RAM para multitarea',
      'SSD NVMe para arranque rápido',
      'Gráficos integrados o dedicados según necesidad',
      'Garantía empresarial extendida',
      'Soporte técnico prioritario'
    ],
    color: 'from-blue-500 to-cyan-500',
    useCases: ['Oficinas', 'Contabilidad', 'Diseño 2D', 'Gestión empresarial']
  },
  {
    icon: Video,
    title: 'PCs para Streaming',
    description: 'Equipos de alto rendimiento diseñados para streaming simultáneo en múltiples plataformas sin drops.',
    features: [
      'Procesadores de 8+ cores (Ryzen 9 / i9)',
      '32-64GB RAM DDR5',
      'GPU NVIDIA RTX 4070+ con encoder dedicado',
      'Captura 4K@60fps sin lag',
      'Refrigeración avanzada silenciosa',
      'Dual PC setup opcional'
    ],
    color: 'from-purple-500 to-pink-500',
    useCases: ['Twitch', 'YouTube', 'Facebook Gaming', 'Multi-streaming']
  },
  {
    icon: Code,
    title: 'Workstations de Desarrollo',
    description: 'Máquinas potentes para desarrollo de software, compilación y virtualización sin límites.',
    features: [
      'CPUs de alto core count (Threadripper/Xeon)',
      '64-128GB RAM ECC opcional',
      'Múltiples SSDs NVMe en RAID',
      'GPU profesional para ML/AI',
      'Virtualización optimizada',
      'Conectividad 10GbE'
    ],
    color: 'from-emerald-500 to-teal-500',
    useCases: ['DevOps', 'Machine Learning', 'Contenedores', 'Compilación']
  },
  {
    icon: Layers,
    title: 'Estaciones de Renderizado',
    description: 'Hardware especializado para render 3D, edición de video 4K/8K y producción audiovisual profesional.',
    features: [
      'CPUs de alta frecuencia o multi-core',
      '64GB+ RAM para proyectos grandes',
      'GPU NVIDIA RTX 4080+ o AMD Radeon Pro',
      'Almacenamiento masivo (NAS integration)',
      'Pantalla calibrada color accurate',
      'Refrigeración líquida custom'
    ],
    color: 'from-orange-500 to-red-500',
    useCases: ['Blender', 'Cinema 4D', 'After Effects', 'Premiere Pro']
  },
  {
    icon: Monitor,
    title: 'PCs Gaming de Alto Rendimiento',
    description: 'Computadores gaming personalizados con componentes de última generación para máxima performance.',
    features: [
      'CPUs gaming (Ryzen 7/9 X3D, i7/i9 K)',
      '32GB+ RAM DDR5 alta frecuencia',
      'GPU NVIDIA RTX 40 series o AMD 7000',
      '1440p/4K gaming @144Hz+',
      'RGB personalizado',
      'Cable management premium'
    ],
    color: 'from-indigo-500 to-purple-600',
    useCases: ['E-sports', 'AAA Gaming', 'VR', 'Competitivo']
  },
  {
    icon: Target,
    title: 'Soluciones a Medida',
    description: 'Configuraciones personalizadas para necesidades específicas y casos de uso únicos.',
    features: [
      'Consultoría especializada',
      'Selección de componentes optimizada',
      'Presupuesto flexible',
      'Upgrades futuros planificados',
      'Testing exhaustivo',
      'Configuración de software incluida'
    ],
    color: 'from-yellow-500 to-orange-500',
    useCases: ['Servidores', 'NAS', 'Mining', 'Proyectos especiales']
  }
]

const maintenanceServices = [
  {
    icon: Wrench,
    title: 'Mantenimiento Preventivo',
    description: 'Limpieza profunda, cambio de pasta térmica y optimización de sistemas para máximo rendimiento.',
    includes: ['Limpieza de componentes', 'Cambio de pasta térmica', 'Verificación de cooling', 'Actualización de drivers', 'Optimización de BIOS']
  },
  {
    icon: HardDrive,
    title: 'Upgrades y Expansión',
    description: 'Mejora tu PC existente con componentes modernos sin necesidad de cambiar todo el equipo.',
    includes: ['Instalación de RAM adicional', 'Upgrade de GPU/CPU', 'Migración a SSD', 'Expansión de almacenamiento', 'Mejora de refrigeración']
  },
  {
    icon: Shield,
    title: 'Diagnóstico y Reparación',
    description: 'Identificamos y solucionamos problemas de hardware con herramientas especializadas.',
    includes: ['Diagnóstico completo', 'Reparación de componentes', 'Recuperación de datos', 'Testing de estabilidad', 'Garantía de trabajo']
  },
  {
    icon: Gauge,
    title: 'Optimización de Rendimiento',
    description: 'Ajustes finos de configuración para extraer el máximo potencial de tu hardware.',
    includes: ['Overclocking seguro', 'Tuning de RAM (XMP/EXPO)', 'Optimización de cooling', 'Benchmarking', 'Monitoreo de temperaturas']
  }
]

const buildProcess = [
  {
    number: '01',
    title: 'Consulta y Especificaciones',
    description: 'Analizamos tus necesidades, presupuesto y casos de uso para diseñar la configuración perfecta.',
    icon: Users
  },
  {
    number: '02',
    title: 'Selección de Componentes',
    description: 'Elegimos los mejores componentes con compatibilidad garantizada y balance precio-rendimiento óptimo.',
    icon: Cpu
  },
  {
    number: '03',
    title: 'Ensamblaje Profesional',
    description: 'Montaje cuidadoso con cable management premium, instalación de cooling y verificación de conexiones.',
    icon: Wrench
  },
  {
    number: '04',
    title: 'Testing y Benchmarking',
    description: 'Pruebas exhaustivas de estabilidad, estrés térmico y rendimiento con software especializado.',
    icon: Gauge
  },
  {
    number: '05',
    title: 'Configuración de Software',
    description: 'Instalación de sistema operativo, drivers actualizados, optimización y software esencial.',
    icon: Code
  },
  {
    number: '06',
    title: 'Entrega y Soporte',
    description: 'Explicación completa del sistema, documentación y garantía con soporte técnico continuo.',
    icon: Award
  }
]

const benefits = [
  {
    icon: Award,
    title: 'Componentes Premium',
    description: 'Solo trabajamos con marcas líderes y garantía oficial'
  },
  {
    icon: Wrench,
    title: 'Ensamblaje Experto',
    description: 'Técnicos certificados con años de experiencia'
  },
  {
    icon: Zap,
    title: 'Rendimiento Garantizado',
    description: 'Testing exhaustivo antes de la entrega'
  },
  {
    icon: Clock,
    title: 'Soporte Post-Venta',
    description: 'Asistencia técnica y mantenimiento continuo'
  }
]

const components = [
  { name: 'CPU', brands: ['Intel', 'AMD'] },
  { name: 'GPU', brands: ['NVIDIA', 'AMD'] },
  { name: 'Motherboard', brands: ['ASUS', 'MSI', 'Gigabyte'] },
  { name: 'RAM', brands: ['Corsair', 'G.Skill', 'Kingston'] },
  { name: 'Storage', brands: ['Samsung', 'WD', 'Crucial'] },
  { name: 'PSU', brands: ['Corsair', 'EVGA', 'Seasonic'] },
  { name: 'Cooling', brands: ['Noctua', 'Corsair', 'Arctic'] },
  { name: 'Case', brands: ['Lian Li', 'Fractal', 'NZXT'] }
]

const whyCustomPC = [
  {
    icon: Target,
    title: 'Personalización Total',
    description: 'Cada componente elegido específicamente para tus necesidades, sin compromisos ni componentes innecesarios.',
    stat: '100%',
    statLabel: 'A tu Medida'
  },
  {
    icon: TrendingUp,
    title: 'Mejor Precio-Rendimiento',
    description: 'Obtienes más poder por tu dinero comparado con PCs pre-armadas que incluyen márgenes comerciales altos.',
    stat: '30-40%',
    statLabel: 'Más Ahorro'
  },
  {
    icon: Layers,
    title: 'Upgradeable',
    description: 'Diseñamos pensando en el futuro. Actualiza componentes individuales sin cambiar todo el sistema.',
    stat: '5+ años',
    statLabel: 'Vida Útil'
  },
  {
    icon: Shield,
    title: 'Garantía y Soporte',
    description: 'Garantía individual de cada componente más nuestro soporte técnico especializado continuo.',
    stat: '24/7',
    statLabel: 'Disponibilidad'
  }
]

export default function HardwarePersonalizadoPage() {
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
              <Cpu className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Hardware Personalizado</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              PCs a Medida para tu <span className="text-primary-500">Negocio</span>
            </h1>

            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8" style={{ color: 'var(--text-secondary)' }}>
              Ensamblamos y mantenemos computadores personalizados de alto rendimiento para empresas,
              creadores de contenido y profesionales. Desde workstations corporativas hasta rigs de streaming multiplataforma.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/bienvenida"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span>Cotizar mi PC</span>
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
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
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

          {/* Why Custom PC */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                ¿Por Qué un PC Personalizado?
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Las ventajas de elegir componentes específicos para tus necesidades
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyCustomPC.map((reason, index) => {
                const Icon = reason.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative p-8 rounded-2xl border overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-primary)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                            {reason.stat}
                          </div>
                          <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                            {reason.statLabel}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                        {reason.title}
                      </h3>

                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {reason.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* PC Types Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Tipos de Computadores que Ensamblamos
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Configuraciones especializadas para cada necesidad profesional
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pcTypes.map((type, index) => {
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

                    <p className="mb-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {type.description}
                    </p>

                    <div className="mb-4">
                      <p className="text-xs font-semibold mb-2" style={{ color: 'var(--text-tertiary)' }}>
                        Especificaciones típicas:
                      </p>
                      <ul className="space-y-1.5">
                        {type.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary-500 flex-shrink-0 mt-0.5" />
                            <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Use cases */}
                    <div className="pt-4 border-t" style={{ borderColor: 'var(--border-primary)' }}>
                      <p className="text-xs font-semibold mb-2" style={{ color: 'var(--text-tertiary)' }}>
                        Ideal para:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {type.useCases.map((useCase, ucIndex) => (
                          <span
                            key={ucIndex}
                            className="text-xs px-2 py-1 rounded-md"
                            style={{
                              backgroundColor: 'var(--bg-primary)',
                              color: 'var(--text-tertiary)'
                            }}
                          >
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Maintenance Services */}
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
              <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl" />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-primary)' }}>
                  <Wrench className="w-4 h-4 text-primary-500" />
                  <span className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>Servicios de Mantenimiento</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Mantenimiento y Upgrades
                </h2>
                <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Mantén tu equipo en condiciones óptimas y actualízalo cuando sea necesario
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {maintenanceServices.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-6 rounded-xl border"
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        borderColor: 'var(--border-primary)'
                      }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                          {service.title}
                        </h3>
                      </div>
                      <p className="mb-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.includes.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Build Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Nuestro Proceso de Ensamblaje
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Desde la consulta inicial hasta la entrega final, cada paso cuidadosamente ejecutado
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {buildProcess.map((step, index) => {
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
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-primary)'
                    }}
                  >
                    {/* Number badge */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center font-bold text-white text-lg shadow-lg">
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
          </motion.div>

          {/* Components & Brands */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Componentes y Marcas
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Trabajamos con las marcas más confiables de la industria
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {components.map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-xl border text-center"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-primary)'
                  }}
                >
                  <h3 className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {component.name}
                  </h3>
                  <div className="space-y-1">
                    {component.brands.map((brand, bIndex) => (
                      <div key={bIndex} className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                        {brand}
                      </div>
                    ))}
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
              <Cpu className="w-16 h-16 mx-auto mb-6 text-primary-500" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                ¿Listo para tu PC Personalizado?
              </h2>
              <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
                Agenda una consulta gratuita. Te ayudamos a elegir los componentes perfectos para tu presupuesto
                y necesidades, con transparencia total en precios y especificaciones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/bienvenida"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <span>Cotizar mi Proyecto</span>
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
