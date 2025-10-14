'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Gamepad2, Trophy, Users, Zap, Target, TrendingUp, ArrowRight, CheckCircle2, Smartphone, Monitor, Tablet, Sparkles, Award, Clock, DollarSign, Heart, Brain, BarChart3, Lightbulb, Rocket, Play } from 'lucide-react'

const whyGamingForBusiness = [
  {
    icon: Users,
    title: 'Engagement Extraordinario',
    description: 'Los videojuegos capturan la atención de los usuarios 10x más que contenido tradicional. La gamificación aumenta el engagement hasta un 300%.',
    stat: '300%',
    statLabel: 'Más Engagement'
  },
  {
    icon: Heart,
    title: 'Conexión Emocional',
    description: 'Las experiencias interactivas crean vínculos emocionales más fuertes con tu marca, generando lealtad y recordación duradera.',
    stat: '85%',
    statLabel: 'Recordación de Marca'
  },
  {
    icon: TrendingUp,
    title: 'ROI Medible',
    description: 'Cada interacción es rastreable. Obtén métricas precisas sobre comportamiento del usuario, conversión y efectividad de tu inversión.',
    stat: '4.5x',
    statLabel: 'ROI Promedio'
  },
  {
    icon: Target,
    title: 'Alcance Masivo',
    description: 'El mercado gaming global supera los 3 mil millones de jugadores. Tu audiencia objetivo está ahí, esperando experiencias innovadoras.',
    stat: '3B+',
    statLabel: 'Jugadores Globales'
  }
]

const businessApplications = [
  {
    icon: Lightbulb,
    title: 'Marketing Gamificado',
    description: 'Transforma tus campañas de marketing en experiencias interactivas que capturan leads y generan conversiones.',
    examples: [
      'Advergames branded',
      'Concursos interactivos',
      'Product placement en juegos',
      'Experiencias de marca inmersivas'
    ],
    color: 'from-orange-500 to-red-500',
    bgColor: 'from-orange-500/10 to-red-500/10'
  },
  {
    icon: Users,
    title: 'Entrenamiento Corporativo',
    description: 'Capacita a tu equipo de forma efectiva y memorable con simulaciones y serious games diseñados para el aprendizaje.',
    examples: [
      'Simuladores de procedimientos',
      'Onboarding interactivo',
      'Certificaciones gamificadas',
      'Team building virtual'
    ],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-500/10 to-cyan-500/10'
  },
  {
    icon: Trophy,
    title: 'Fidelización de Clientes',
    description: 'Mantén a tus clientes comprometidos con programas de lealtad gamificados que recompensan la interacción continua.',
    examples: [
      'Sistemas de puntos y recompensas',
      'Desafíos y misiones',
      'Tablas de clasificación',
      'Logros y badges'
    ],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-500/10 to-pink-500/10'
  },
  {
    icon: BarChart3,
    title: 'Recolección de Datos',
    description: 'Obtén insights valiosos sobre tu audiencia mediante mecánicas de juego que incentivan la participación y el feedback.',
    examples: [
      'Encuestas gamificadas',
      'A/B testing interactivo',
      'Behavioral analytics',
      'User research dinámico'
    ],
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'from-emerald-500/10 to-teal-500/10'
  },
  {
    icon: Rocket,
    title: 'Lanzamiento de Productos',
    description: 'Genera expectativa y educación sobre nuevos productos mediante experiencias de juego previas al lanzamiento.',
    examples: [
      'Teasers interactivos',
      'Demos jugables',
      'Early access gamificado',
      'Viral marketing gaming'
    ],
    color: 'from-indigo-500 to-purple-600',
    bgColor: 'from-indigo-500/10 to-purple-600/10'
  },
  {
    icon: Brain,
    title: 'Innovación y R&D',
    description: 'Usa juegos para crowdsourcing de ideas, testing de conceptos y co-creación con tu comunidad.',
    examples: [
      'Simulaciones de escenarios',
      'Prototipos jugables',
      'Idea competitions',
      'Community feedback games'
    ],
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'from-yellow-500/10 to-orange-500/10'
  }
]

const gameTypes = [
  {
    icon: Smartphone,
    title: 'Juegos Móviles',
    description: 'Experiencias optimizadas para iOS y Android que llegan a tu audiencia donde pasan más tiempo.',
    platforms: ['iOS', 'Android', 'Cross-platform']
  },
  {
    icon: Monitor,
    title: 'Juegos Web',
    description: 'Acceso instantáneo sin descargas. Perfectos para campañas de marketing y eventos temporales.',
    platforms: ['HTML5', 'WebGL', 'Progressive Web Apps']
  },
  {
    icon: Tablet,
    title: 'Experiencias AR/VR',
    description: 'Realidad aumentada y virtual para experiencias inmersivas que diferencian tu marca.',
    platforms: ['AR Kit', 'AR Core', 'Oculus', 'WebXR']
  },
  {
    icon: Gamepad2,
    title: 'Serious Games',
    description: 'Juegos con propósito educativo, de entrenamiento o de simulación para objetivos empresariales específicos.',
    platforms: ['Unity', 'Unreal', 'Custom Engines']
  }
]

const developmentProcess = [
  {
    title: 'Concepto & Strategy',
    description: 'Definimos los objetivos de negocio, mecánicas de juego y KPIs de éxito.',
    icon: Lightbulb,
    phase: 'Fase 1'
  },
  {
    title: 'Game Design',
    description: 'Creamos el documento de diseño, wireframes y prototipos jugables.',
    icon: Target,
    phase: 'Fase 2'
  },
  {
    title: 'Arte & Narrativa',
    description: 'Desarrollamos el estilo visual, personajes, mundo y storytelling.',
    icon: Sparkles,
    phase: 'Fase 3'
  },
  {
    title: 'Desarrollo',
    description: 'Programación del juego, implementación de mecánicas y sistemas.',
    icon: Gamepad2,
    phase: 'Fase 4'
  },
  {
    title: 'Testing & QA',
    description: 'Pruebas exhaustivas de gameplay, balance y experiencia de usuario.',
    icon: CheckCircle2,
    phase: 'Fase 5'
  },
  {
    title: 'Launch & Support',
    description: 'Lanzamiento, marketing, monitoreo de métricas y actualizaciones continuas.',
    icon: Rocket,
    phase: 'Fase 6'
  }
]

const successMetrics = [
  {
    metric: '90%',
    label: 'Mejora en Retención',
    icon: Users
  },
  {
    metric: '5x',
    label: 'Aumento en Tiempo de Uso',
    icon: Clock
  },
  {
    metric: '65%',
    label: 'Reducción en Costos de Training',
    icon: DollarSign
  },
  {
    metric: '250%',
    label: 'Incremento en Conversión',
    icon: TrendingUp
  }
]

const technologies = [
  'Unity', 'Unreal Engine', 'Godot', 'Phaser',
  'Three.js', 'WebGL', 'AR Kit', 'AR Core',
  'PlayFab', 'Firebase', 'Photon', 'Mirror',
  'C#', 'C++', 'JavaScript', 'Python'
]

export default function VideojuegoParaMiEmpresaPage() {
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
          {/* Hero section - More dynamic */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20 relative"
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute top-10 left-1/4 w-20 h-20 rounded-lg"
                style={{ background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(239, 68, 68, 0.1))' }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute top-20 right-1/4 w-16 h-16 rounded-full"
                style={{ background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))' }}
                animate={{
                  y: [0, 20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-10 left-1/3 w-12 h-12 rounded-lg"
                style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))' }}
                animate={{
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 relative"
              style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-primary)', border: '1px solid' }}
            >
              <Gamepad2 className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent font-bold">
                Game Development
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative" style={{ color: 'var(--text-primary)' }}>
              Videojuegos que Impulsan tu{' '}
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Negocio
              </span>
            </h1>

            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8" style={{ color: 'var(--text-secondary)' }}>
              No es solo entretenimiento. Los videojuegos son herramientas poderosas de marketing,
              capacitación y engagement que transforman la forma en que tu empresa se conecta con su audiencia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
              <Link
                href="/bienvenida"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Iniciar Proyecto</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Why Gaming for Business - Hero Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                ¿Por Qué Videojuegos para tu <span className="text-orange-500">Empresa</span>?
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Los números hablan por sí solos. El gaming no es el futuro, es el presente del engagement empresarial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyGamingForBusiness.map((reason, index) => {
                const Icon = reason.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="relative p-8 rounded-2xl border overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-primary)'
                    }}
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
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

          {/* Business Applications - Staggered Layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Aplicaciones Empresariales
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Descubre cómo los videojuegos pueden resolver desafíos reales de tu negocio
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businessApplications.map((app, index) => {
                const Icon = app.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative p-6 rounded-xl border hover:border-orange-500/50 transition-all"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-primary)'
                    }}
                  >
                    {/* Colored accent bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl bg-gradient-to-r ${app.color} opacity-60 group-hover:opacity-100 transition-opacity`} />

                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                      {app.title}
                    </h3>

                    <p className="mb-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {app.description}
                    </p>

                    <div className="space-y-2">
                      <p className="text-xs font-semibold" style={{ color: 'var(--text-tertiary)' }}>
                        Ejemplos:
                      </p>
                      {app.examples.map((example, exIndex) => (
                        <div key={exIndex} className="flex items-start gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${app.color} mt-1.5 flex-shrink-0`} />
                          <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                            {example}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Success Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-24 rounded-2xl p-8 md:p-12 border relative overflow-hidden"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-primary)'
            }}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl" />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Resultados Comprobados
                </h2>
                <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Empresas que han implementado estrategias de gamificación ven mejoras dramáticas
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {successMetrics.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center p-6 rounded-xl border"
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        borderColor: 'var(--border-primary)'
                      }}
                    >
                      <Icon className="w-10 h-10 mx-auto mb-4 text-orange-500" />
                      <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                        {item.metric}
                      </div>
                      <div className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                        {item.label}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Game Types - Icon Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Tipos de Juegos que Desarrollamos
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Desde móviles hasta experiencias VR inmersivas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {gameTypes.map((type, index) => {
                const Icon = type.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className="p-6 rounded-xl border text-center"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-primary)'
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center"
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {type.title}
                    </h3>

                    <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                      {type.description}
                    </p>

                    <div className="flex flex-wrap gap-2 justify-center">
                      {type.platforms.map((platform, pIndex) => (
                        <span
                          key={pIndex}
                          className="text-xs px-2 py-1 rounded-md"
                          style={{
                            backgroundColor: 'var(--bg-primary)',
                            color: 'var(--text-tertiary)'
                          }}
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Development Process - Timeline Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Proceso de Desarrollo
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                De la idea al lanzamiento, te acompañamos en cada paso
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
                    className="relative p-6 rounded-xl border group hover:border-orange-500/50 transition-all"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-primary)'
                    }}
                  >
                    {/* Phase badge */}
                    <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold shadow-lg">
                      {step.phase}
                    </div>

                    <Icon className="w-10 h-10 text-orange-500 mb-4" />

                    <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {step.title}
                    </h3>

                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {step.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Tecnologías y Engines
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Dominamos las herramientas más poderosas de la industria
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-5 py-2.5 rounded-lg border font-medium"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-primary)',
                    color: 'var(--text-primary)'
                  }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section - Gaming Style */}
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
            {/* Animated background */}
            <div className="absolute inset-0 opacity-10">
              <motion.div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(249, 115, 22, 0.3) 1px, transparent 1px)',
                  backgroundSize: '50px 50px'
                }}
                animate={{
                  backgroundPosition: ['0px 0px', '50px 50px']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>

            <div className="max-w-3xl mx-auto relative z-10">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Trophy className="w-16 h-16 mx-auto mb-6 text-orange-500" />
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                ¿Listo para el Siguiente Nivel?
              </h2>
              <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
                Agenda una consulta gratuita y descubre cómo un videojuego puede transformar
                tu estrategia de marketing, capacitación o engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/bienvenida"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Gamepad2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>Comenzar Proyecto</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    borderColor: 'var(--border-secondary)',
                    color: 'var(--text-primary)'
                  }}
                >
                  Ver Portfolio
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
