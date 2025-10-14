'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, BarChart3, TrendingUp, Database, Brain, PieChart, ArrowRight, CheckCircle2, Zap, Users, Award, Target, Activity, Layers, FileSearch, AlertCircle, Cpu } from 'lucide-react'

const dataServices = [
  {
    icon: PieChart,
    title: 'Dashboards Interactivos',
    description: 'Visualiza tus métricas de negocio en tiempo real con dashboards personalizados, intuitivos y accionables.',
    features: [
      'KPIs en tiempo real',
      'Gráficos interactivos',
      'Filtros dinámicos',
      'Exportación de reportes',
      'Alertas automáticas'
    ],
    color: 'from-blue-500 to-cyan-500',
    technologies: ['Power BI', 'Tableau', 'Looker', 'Metabase']
  },
  {
    icon: Brain,
    title: 'Machine Learning e IA',
    description: 'Modelos predictivos y de IA que aprenden de tus datos para optimizar decisiones y automatizar procesos.',
    features: [
      'Modelos predictivos',
      'Clasificación y clustering',
      'Procesamiento de lenguaje natural',
      'Computer vision',
      'Recomendaciones personalizadas'
    ],
    color: 'from-purple-500 to-pink-500',
    technologies: ['TensorFlow', 'PyTorch', 'scikit-learn', 'OpenAI']
  },
  {
    icon: Database,
    title: 'Data Warehousing',
    description: 'Arquitecturas de datos escalables que centralizan información de múltiples fuentes para análisis unificado.',
    features: [
      'Data lakes y warehouses',
      'ETL/ELT pipelines',
      'Integración de fuentes',
      'Modelado dimensional',
      'Optimización de consultas'
    ],
    color: 'from-emerald-500 to-teal-500',
    technologies: ['Snowflake', 'BigQuery', 'Redshift', 'Databricks']
  },
  {
    icon: TrendingUp,
    title: 'Análisis Predictivo',
    description: 'Anticipa tendencias, comportamientos y resultados futuros basándose en datos históricos y patrones.',
    features: [
      'Forecasting de ventas',
      'Predicción de churn',
      'Análisis de riesgo',
      'Optimización de precios',
      'Demand planning'
    ],
    color: 'from-orange-500 to-red-500',
    technologies: ['Prophet', 'ARIMA', 'XGBoost', 'LightGBM']
  },
  {
    icon: FileSearch,
    title: 'Business Intelligence',
    description: 'Transforma datos complejos en insights estratégicos que impulsan decisiones informadas de negocio.',
    features: [
      'Reportes automatizados',
      'Análisis multidimensional',
      'Self-service analytics',
      'Data storytelling',
      'Benchmarking competitivo'
    ],
    color: 'from-indigo-500 to-purple-600',
    technologies: ['Qlik', 'SAP Analytics', 'Microsoft BI', 'Domo']
  },
  {
    icon: Activity,
    title: 'Data Engineering',
    description: 'Infraestructura robusta para recolectar, procesar y almacenar grandes volúmenes de datos eficientemente.',
    features: [
      'Pipelines de datos',
      'Procesamiento en tiempo real',
      'Data quality & governance',
      'Arquitectura escalable',
      'Monitoreo y logging'
    ],
    color: 'from-yellow-500 to-orange-500',
    technologies: ['Apache Spark', 'Airflow', 'Kafka', 'dbt']
  }
]

const analyticsProcess = [
  {
    number: '01',
    title: 'Auditoría de Datos',
    description: 'Evaluamos tus fuentes de datos actuales, calidad de información y capacidades de análisis existentes.',
    icon: FileSearch
  },
  {
    number: '02',
    title: 'Definición de Objetivos',
    description: 'Identificamos los KPIs críticos y preguntas de negocio que necesitas responder con datos.',
    icon: Target
  },
  {
    number: '03',
    title: 'Arquitectura de Datos',
    description: 'Diseñamos la infraestructura óptima para recolectar, almacenar y procesar tus datos.',
    icon: Layers
  },
  {
    number: '04',
    title: 'Desarrollo de Modelos',
    description: 'Nuestros científicos de datos crean modelos analíticos y predictivos personalizados.',
    icon: Brain
  },
  {
    number: '05',
    title: 'Visualización',
    description: 'Construimos dashboards y reportes que hacen tus datos comprensibles y accionables.',
    icon: BarChart3
  },
  {
    number: '06',
    title: 'Optimización Continua',
    description: 'Monitoreamos y mejoramos constantemente tus modelos para mantener precisión y relevancia.',
    icon: TrendingUp
  }
]

const benefits = [
  {
    icon: Brain,
    title: 'Decisiones Basadas en Datos',
    description: 'Elimina la incertidumbre con insights objetivos'
  },
  {
    icon: TrendingUp,
    title: 'Incrementa Ingresos',
    description: 'Identifica oportunidades ocultas en tus datos'
  },
  {
    icon: Target,
    title: 'Reduce Costos',
    description: 'Optimiza operaciones detectando ineficiencias'
  },
  {
    icon: Zap,
    title: 'Ventaja Competitiva',
    description: 'Anticípate al mercado con análisis predictivo'
  }
]

const teamExpertise = [
  {
    title: 'Ingenieros de Datos',
    description: 'Expertos en construir pipelines robustos y arquitecturas de datos escalables.',
    skills: ['Python', 'SQL', 'Spark', 'Airflow', 'Kafka', 'Cloud (AWS/GCP/Azure)'],
    icon: Database
  },
  {
    title: 'Científicos de Datos',
    description: 'PhDs y Masters especializados en machine learning, estadística y modelado predictivo.',
    skills: ['Machine Learning', 'Estadística Avanzada', 'Deep Learning', 'Optimización', 'A/B Testing'],
    icon: Brain
  },
  {
    title: 'Analistas de BI',
    description: 'Profesionales que transforman datos complejos en visualizaciones claras e insights accionables.',
    skills: ['Power BI', 'Tableau', 'SQL', 'Data Visualization', 'Business Acumen'],
    icon: BarChart3
  }
]

const useCases = [
  {
    icon: Users,
    title: 'Análisis de Clientes',
    description: 'Segmentación, churn prediction, lifetime value y comportamiento del consumidor.'
  },
  {
    icon: TrendingUp,
    title: 'Optimización de Ventas',
    description: 'Forecasting de demanda, pricing dinámico y análisis de conversión.'
  },
  {
    icon: Activity,
    title: 'Eficiencia Operacional',
    description: 'Optimización de procesos, predicción de mantenimiento y gestión de inventarios.'
  },
  {
    icon: AlertCircle,
    title: 'Detección de Fraude',
    description: 'Modelos de anomalías para identificar transacciones sospechosas en tiempo real.'
  },
  {
    icon: Target,
    title: 'Marketing Analytics',
    description: 'ROI de campañas, atribución multi-canal y optimización de presupuestos.'
  },
  {
    icon: Cpu,
    title: 'IoT y Sensores',
    description: 'Análisis de datos de dispositivos IoT para mantenimiento predictivo y optimización.'
  }
]

const technologies = [
  { name: 'Python', category: 'Lenguaje' },
  { name: 'R', category: 'Lenguaje' },
  { name: 'SQL', category: 'Database' },
  { name: 'Pandas', category: 'Data Processing' },
  { name: 'NumPy', category: 'Data Processing' },
  { name: 'Scikit-learn', category: 'ML' },
  { name: 'TensorFlow', category: 'Deep Learning' },
  { name: 'PyTorch', category: 'Deep Learning' },
  { name: 'Apache Spark', category: 'Big Data' },
  { name: 'Airflow', category: 'Orchestration' },
  { name: 'Tableau', category: 'Visualization' },
  { name: 'Power BI', category: 'Visualization' }
]

export default function AnalisisDeDatosPage() {
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
              <BarChart3 className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Análisis de Datos & BI</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Transforma tus Datos en <span className="text-primary-500">Decisiones Estratégicas</span>
            </h1>

            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8" style={{ color: 'var(--text-secondary)' }}>
              Contamos con un equipo de <span className="font-semibold text-primary-500">ingenieros y científicos de datos altamente calificados</span> que
              convierten información compleja en insights accionables para impulsar tu negocio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/bienvenida"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span>Consulta Gratuita</span>
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
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-4">
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

          {/* Team Expertise Section */}
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
              <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl" />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-primary)' }}>
                  <Award className="w-4 h-4 text-primary-500" />
                  <span className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>Nuestro Equipo</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Expertos en Ciencia de Datos
                </h2>
                <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Nuestro equipo multidisciplinario combina experiencia técnica profunda con comprensión de negocio
                  para entregar soluciones de datos que generan impacto real.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamExpertise.map((role, index) => {
                  const Icon = role.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-6 rounded-xl border"
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        borderColor: 'var(--border-primary)'
                      }}
                    >
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                        {role.title}
                      </h3>
                      <p className="mb-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        {role.description}
                      </p>
                      <div className="space-y-2">
                        <p className="text-xs font-semibold" style={{ color: 'var(--text-tertiary)' }}>
                          Especialidades:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {role.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="text-xs px-2 py-1 rounded-md"
                              style={{
                                backgroundColor: 'var(--bg-secondary)',
                                color: 'var(--text-tertiary)'
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Team stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                {[
                  { icon: Users, stat: '15+', label: 'Científicos de Datos' },
                  { icon: Award, stat: '20+', label: 'Certificaciones' },
                  { icon: Brain, stat: '100+', label: 'Modelos Desplegados' }
                ].map((item, index) => {
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
                      <Icon className="w-8 h-8 mx-auto mb-3 text-emerald-500" />
                      <div className="text-3xl font-bold mb-1 text-emerald-500">
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

          {/* Data Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Servicios de Análisis de Datos
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Soluciones end-to-end desde la recolección hasta el análisis avanzado
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataServices.map((service, index) => {
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

                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
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
                      {service.technologies.map((tech, techIndex) => (
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

          {/* Use Cases */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Casos de Uso Comunes
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Aplicaciones prácticas de análisis de datos en diferentes áreas de negocio
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-xl border hover:border-emerald-500/50 transition-all"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-primary)'
                    }}
                  >
                    <Icon className="w-10 h-10 text-emerald-500 mb-4" />
                    <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {useCase.title}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {useCase.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Analytics Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Nuestro Proceso
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Metodología probada para implementar soluciones de datos exitosas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {analyticsProcess.map((step, index) => {
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
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center font-bold text-white text-lg shadow-lg">
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
                Stack Tecnológico
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Herramientas y frameworks líderes en la industria
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
                ¿Listo para Aprovechar el Poder de tus Datos?
              </h2>
              <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
                Agenda una consultoría gratuita con nuestros científicos de datos.
                Analizaremos tu situación actual y te mostraremos cómo podemos ayudarte a tomar mejores decisiones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/bienvenida"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <span>Hablar con un Experto</span>
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
